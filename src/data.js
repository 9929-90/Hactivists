import S from './data/services.json';import T from './data/trainings.json';import company from './data/company.json';import ICONS from './icons.js';
export {company};
export const SERVICES=S.services,SOLUTIONS=S.solutionsMenu.frameworks,TRAININGS=T;
export const ALL_SVC=SERVICES.flatMap(s=>[s,...(s.subServices||[])]);
export const svcById=id=>ALL_SVC.find(s=>s.id===id);
export const trById=id=>TRAININGS.find(t=>t.id===id);
export const trByCode=c=>TRAININGS.find(t=>t.code===c);
export const iconOf=x=>ICONS[x.id]||'shield';
export const tel=n=>'tel:+'+n.replace(/\D/g,'');
/* every phone number on the site uses one format: +91 XXXXX XXXXX */
const fmt=n=>{const d=n.replace(/\D/g,'');return `+${d.slice(0,2)} ${d.slice(2,7)} ${d.slice(7)}`};
export const NUM1=fmt(company.contact.phones[0]),NUM2=fmt(company.contact.phones[1]);
export const PH_MAIN=NUM1;

export const industries=[['Manufacturing','Protect plant networks, supply-chain systems and connected production lines from disruption.'],['Finance','Defend transactions, customer data and regulatory standing with testing built for financial systems.'],['Government','Secure citizen portals and public records with transparent, standards-based assessments.'],['Energy','Harden grids, control systems and field assets against attacks that threaten continuity of supply.'],['Healthcare','Safeguard patient records and connected medical systems while staying within privacy rules.'],['Insurance','Secure the policy, claims and partner platforms that hold sensitive personal and financial data.'],['Media','Keep publishing platforms, accounts and audience data safe from takeover and leaks.'],['Real Estate','Protect listings, deal documents and client portals from fraud and data exposure.'],['Technology','Help product teams ship software that stands up to real attackers, from the first release onward.'],['Retail','Secure checkout, loyalty programs and customer data across online and in-store systems.']];
export const TOPICS=['ISO 27001 ISMS Certification','SOC 2 Type I or Type II Readiness','ISO 42001 Artificial Intelligence Management','DPDP Act Compliance Readiness','VAPT / Offensive Penetration Testing','Cybersecurity Training & Certifications','Virtual CISO (vCISO) Advisory'];
const Q=(q,a)=>({q,a});
export const FAQ={
home:[Q('What does Hacktivists Security do?','We provide cybersecurity and compliance consulting (ISO 27001, SOC 2, ISO 42001, DPDP Act, HIPAA and PCI DSS), penetration testing, virtual CISO advisory, incident response readiness, and hands-on IT security training.'),
Q('Who are your services designed for?','Startups, SaaS companies and established enterprises that need to pass customer security reviews, meet regulatory requirements, or earn a certification, from a first compliance project to an ongoing security program.'),
Q('How long does a typical engagement take?','It depends on the framework and the size of the environment. Every service page lists its typical timeline, and we confirm exact dates in a fixed-price proposal before any work starts.'),
Q('Do you offer training as well as consulting?','Yes. The Hacktivists Academy runs 40+ hands-on courses taught live by practicing professionals, with lab access and certificates earned through practical exams.'),
Q('How do I get started?','Book a free consultation or send your scope through the contact page. Our lead auditor will review it and follow up with a tailored proposal.')],
about:[Q('What is the mission of Hacktivists Security?','To simplify cybersecurity and compliance while helping organizations build stronger, safer and more resilient businesses, by bridging regulatory requirements and practical implementation.'),
Q('Where are your offices?','Our head office is in Udaipur, with a Mumbai office in Goregaon West and a regional office in Jaipur. Full addresses are on the contact page.'),
Q('Are your consultants and instructors certified?','Our instructors and auditors hold accreditations such as OSCP, OSEE, OSCE, eCXD, eMAPT, eWPTX, eWDP, CEH, CHFI, CISSP, CISM and CISA.'),
Q('Will our information stay confidential?','Yes. Engagements are protected by NDA, and your documents, architecture details and findings are shared only with the people you approve.'),
Q('How do you approach a compliance project?','We follow a six-step method: assess, identify gaps, strategize, implement, prepare for audit and improve continuously, so compliance becomes part of how the business runs rather than a one-off exercise.')],
contact:[Q('How quickly will I hear back?','Consultation requests are answered by our lead auditor within 2 business hours, and formal proposals follow within 1 business day.'),
Q('Can I call or message you on WhatsApp?','Yes. Call either direct line listed on this page, or message us on WhatsApp. Both reach our admissions and audit teams.'),
Q('Which office should I contact?','Any of them. All three offices (Udaipur, Mumbai and Jaipur) work as one team, so your request is routed to the right specialist wherever you send it.'),
Q('What should I include in my request?','Your industry, the framework or systems in scope, your preferred timeline, and any fixed deadline such as an audit date or a customer security review.'),
Q('Is my enquiry confidential?','Yes. Everything you share is treated as confidential and is covered by NDA once an engagement begins.')],
services:[Q('Which framework should we start with?','ISO 27001 suits broad information security governance, SOC 2 is commonly requested by SaaS customers, and the DPDP Act applies when you handle personal data in India. We help you choose after a short scoping call.'),
Q('What is the difference between VAPT and a compliance audit?','VAPT actively tests your applications, APIs and infrastructure for exploitable weaknesses. A compliance audit checks whether your controls, policies and evidence meet a framework. Many programs need both.'),
Q('Do you guarantee certification?','We prepare you thoroughly and support you through the audit. The certification or attestation itself is issued by the independent certification body or auditor.'),
Q('Can we combine several services in one engagement?','Yes. Many clients pair a framework such as ISO 27001 or SOC 2 with penetration testing and vCISO support, which shares evidence and reduces total effort.'),
Q('Do you support us after the audit?','Yes. Our vCISO advisory and incident response readiness services keep controls working, prepare you for surveillance audits and help you improve over time.')],
solutions:[Q('What is the difference between ISO 27001 and SOC 2?','ISO 27001 is an international standard for an information security management system and leads to a certificate. SOC 2 is an attestation report issued by a CPA firm against the Trust Services Criteria.'),
Q('Do we need ISO 42001?','ISO 42001 is relevant if you build, deploy or rely on AI systems and want a structured way to govern risk, transparency and responsible use. It is increasingly requested in enterprise procurement.'),
Q('Does the DPDP Act apply to our business?','It applies to organizations that process digital personal data in India, and to some that process it outside India when offering goods or services to people in India. We help you confirm your obligations.'),
Q('Can we pursue more than one framework at once?','Yes. Frameworks share many controls, so a joint program reuses policies, risk assessments and evidence instead of repeating the work.'),
Q('How do we choose the right solution?','Start with who is asking: a customer, a regulator or your board. Book a free consultation and we will map your requirements to the right framework and timeline.')],
training:[Q('Are the trainings live or recorded?','Courses are taught live by practicing professionals. Each course page also notes recorded sessions and lab access included with enrolment.'),
Q('Do I get a certificate?','Yes. Certificates are earned by passing a final hands-on practical test, and each one carries a unique verification ID.'),
Q('Can I attend a free demo first?','Yes. Every course offers a free live demo with time for your questions. Use the Free Demo button on any course card.'),
Q('Which course should a beginner choose?','Pick the category that matches your goal, such as web security, SOC operations or cloud security, and open the course page to check the level and modules. If you are unsure, ask for a free demo and our advisor will guide you.'),
Q('Do you offer training for companies and teams?','Yes. We offer customized training solutions for information security employers and companies. Share your team size and goals through the contact form.')]};
