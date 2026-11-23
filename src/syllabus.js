/* Syllabus download: opens the official PDF, or builds one from the course modules (copied from the source). */
export function downloadSyllabusPDF(training, onNotify) {
  try {
    const code = training.code || 'CERT';
    const title = training.title || 'Cybersecurity Training';

    if (training.syllabusPdfDownloadUrl || training.syllabusPdfUrl) {
      const targetUrl = training.syllabusPdfDownloadUrl || training.syllabusPdfUrl;
      window.open(targetUrl, '_blank', 'noopener,noreferrer');
      if (onNotify) {
        onNotify({
          title: "Syllabus PDF Download Started",
          body: `${code} - ${title} official syllabus PDF is downloading.`
        });
      }
      return;
    }

    const subtitle = training.subtitle || '';
    const duration = training.duration || 'Flexible Batch';
    const price = training.price ? `From ${training.price}` : 'Inquire for Pricing';
    const mode = training.mode || 'Live Labs & Dedicated Cloud Cyber Range';
    const level = training.level || 'Intermediate to Advanced';
    const desc = training.description || training.summary || '';
    const modules = training.modules || [];

    const wrapText = (text, maxChars = 92) => {
      const cleaned = String(text || '').replace(/[^\x20-\x7E]/g, '-').replace(/[\\()]/g, '');
      const words = cleaned.split(/\s+/).filter(Boolean);
      const lines = [];
      let current = '';
      words.forEach((word) => {
        if ((current + ' ' + word).trim().length <= maxChars) {
          current = (current + ' ' + word).trim();
        } else {
          if (current) lines.push(current);
          current = word;
        }
      });
      if (current) lines.push(current);
      return lines.length > 0 ? lines : [''];
    };

    const pages = [];
    let currentLines = [];
    let y = 745;

    const addLine = (text, font = '/F2', size = 9, leading = 13, x = 50) => {
      if (y < 65) {
        pages.push(currentLines.join('\n'));
        currentLines = [];
        y = 745;
      }
      const safe = String(text || '').replace(/[^\x20-\x7E]/g, '-').replace(/[\\()]/g, '');
      currentLines.push(`BT ${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${safe}) Tj ET`);
      y -= leading;
    };

    const addDivider = () => {
      addLine('----------------------------------------------------------------------------------------------------', '/F2', 8, 12, 50);
    };

    // Header
    addLine('THE HACKTIVISTS SECURITY - OFFICIAL TRAINING SYLLABUS', '/F1', 15, 18);
    addLine('Industry-Aligned Practical Cybersecurity & Penetration Testing | www.thehacktivists.in', '/F2', 9, 14);
    addDivider();

    // Course Title & Specs
    wrapText(`${code} : ${title}`, 64).forEach((l) => addLine(l, '/F1', 13, 17));
    if (subtitle) addLine(subtitle, '/F2', 9, 13);
    addLine(`Duration: ${duration}   |   Level: ${level}   |   Tuition: ${price}`, '/F1', 9, 13);
    addLine(`Delivery Mode: ${mode}`, '/F2', 9, 14);
    addDivider();

    // Course Overview
    addLine('COURSE OVERVIEW', '/F1', 11, 15);
    wrapText(desc, 94).forEach((l) => addLine(l, '/F2', 9, 13));
    y -= 4;
    addDivider();

    // Step-by-Step Practical Training Modules (1-to-1 synced with webpage)
    addLine(`STEP-BY-STEP PRACTICAL TRAINING MODULES (${modules.length} MODULES)`, '/F1', 11, 16);
    modules.forEach((mod) => {
      y -= 3;
      wrapText(`${mod.number}: ${mod.title}`, 82).forEach((l) => addLine(l, '/F1', 10, 14, 50));
      (mod.topics || []).forEach((topic) => {
        wrapText(`- ${topic}`, 88).forEach((tl, idx) => {
          addLine(idx === 0 ? tl : `  ${tl}`, '/F2', 8.5, 12, 62);
        });
      });
    });

    y -= 6;
    addDivider();
    addLine('ABOUT INSTRUCTORS & CERTIFICATION', '/F1', 10, 14);
    wrapText('Accredited practitioners holding OSCP, OSEE, OSCE, eCXD, eMAPT, eWPTX, eWDP, CEH, CHFI, CISSP, CISM, CISA.', 94)
      .forEach((l) => addLine(l, '/F2', 8.5, 12));
    wrapText(`Upon passing the final practical lab exam, you will be awarded the "${title}" certificate (${code}).`, 94)
      .forEach((l) => addLine(l, '/F2', 8.5, 13));
    addLine('Contact: +91 96809 81337 | +91 86907 21337 | Email: info@thehacktivists.in | www.thehacktivists.in', '/F1', 8.5, 12);

    if (currentLines.length > 0) {
      pages.push(currentLines.join('\n'));
    }

    // Assemble valid multi-page PDF-1.4 binary string
    const objects = [];
    const addObj = (body) => {
      objects.push(body);
      return objects.length;
    };

    const catalogId = addObj('<< /Type /Catalog /Pages 2 0 R >>');
    const pagesId = addObj(''); // placeholder, updated below
    const fontBoldId = addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    const fontRegId = addObj('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

    const pageIds = [];
    pages.forEach((pageContent) => {
      const streamId = addObj(`<< /Length ${pageContent.length} >>\nstream\n${pageContent}\nendstream`);
      const pageId = addObj(
        `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${fontBoldId} 0 R /F2 ${fontRegId} 0 R >> >> /Contents ${streamId} 0 R >>`
      );
      pageIds.push(pageId);
    });

    objects[pagesId - 1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;

    let pdf = '%PDF-1.4\n';
    const offsets = [0];
    objects.forEach((objBody, index) => {
      offsets.push(pdf.length);
      pdf += `${index + 1} 0 obj\n${objBody}\nendobj\n`;
    });

    const xrefStart = pdf.length;
    pdf += `xref\n0 ${objects.length + 1}\n`;
    pdf += '0000000000 65535 f \n';
    for (let i = 1; i <= objects.length; i++) {
      pdf += `${String(offsets[i]).padStart(10, '0')} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

    const blob = new Blob([pdf], { type: 'application/pdf' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${code}_Syllabus_The_Hacktivists.pdf`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 2000);

    if (onNotify) {
      onNotify({
        title: "Syllabus Downloaded",
        body: `${code} - ${title} PDF syllabus (${modules.length} modules) downloaded.`
      });
    }
  } catch (err) {
    console.error("PDF generation error:", err);
  }
}
