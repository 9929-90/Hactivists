import React from 'react';
import {Link} from 'react-router-dom';
import {site,badges,metrics,offerings,phases,keywords,services,accred} from './data.js';
import {useReveal,Count,Words,Tag,Marquee,Icon,Btn,ContactForm} from './ui.jsx';

const Phases=()=><ol className="phases">{phases.map(([t,d],i)=><li key={t} data-r style={{'--d':i*90+'ms'}}><span className="num">{String(i+1).padStart(2,'0')}</span><h4>{t}</h4><p>{d}</p></li>)}</ol>;

export function Home(){useReveal();return <>
<section className="hero"><div className="glow g1"/><div className="glow g2"/><div className="grid-bg"/>
<div className="wrap hero-c">
<Tag>Offensive Security & Forensic Advisory</Tag>
<h1 data-w><Words parts={[['Securing Digital Assets with '],['Adversarial Precision','c'],[' & '],['Forensic Rigor','r'],['.']]}/></h1>
<p className="lead" data-r style={{'--d':'250ms'}}>We simulate real-world cyber adversaries to uncover zero-days, business logic flaws, and compliance gaps across your web apps, APIs, cloud environments, and enterprise perimeter.</p>
<div className="row" data-r style={{'--d':'350ms'}}><Btn to="/quotation">Generate Project Quotation<Icon n="arrow" s={18}/></Btn><Btn to="/services" v="ghost">Explore Capabilities</Btn></div>
<ul className="badges" data-r style={{'--d':'450ms'}}>{badges.map(b=><li key={b}><Icon n="check" s={14}/>{b}</li>)}</ul></div>
</section>

<section className="metrics"><div className="wrap m-grid">{metrics.map(([n,s,l],i)=><div key={l} data-r style={{'--d':i*90+'ms'}}><b><Count to={+n} suf={s}/></b><span>{l}</span></div>)}</div></section>
<Marquee items={keywords}/>

<section className="sec"><div className="wrap"><div className="sh"><Tag>Core Offerings</Tag><h2 data-w><Words parts={[['Specialized Cybersecurity Capabilities']]}/></h2><p data-r>Tailored vulnerability assessments, digital forensics investigations, and GRC compliance roadmaps designed for startups, SaaS enterprises, and banking institutions.</p></div>
<div className="cards">{offerings.map((o,i)=><article className="card spot" key={o.id} data-r style={{'--d':(i%3)*90+'ms'}}><div className="ico"><Icon n={o.icon}/></div><h3>{o.t}</h3><p>{o.d}</p><ul className="chips">{o.tags.map(t=><li key={t}>{t}</li>)}</ul>
<Link className="more" to={'/services#'+(o.id==='network'?'methodology':o.id==='compliance'?'cloud':o.id)}>View Methodology <Icon n="arrow" s={16}/></Link></article>)}</div></div></section>

<section className="sec alt"><div className="wrap"><div className="sh"><Tag>Audit Workflow</Tag><h2 data-w><Words parts={[['The Hacktivists '],['5-Phase Framework','c']]}/></h2><p data-r>Our disciplined offensive testing methodology guarantees thorough coverage with zero business disruption.</p></div><Phases/></div></section>

<section className="sec"><div className="wrap split"><div><Tag red>Cyber Security Trainings</Tag><h2 data-w><Words parts={[['IT Security Training & Services']]}/></h2>
<p className="sub" data-r>Our team of professional instructors are highly specialized and experienced in various Information Security domains. They hold a wide range of accreditations such as OSCP, OSEE, OSCE, eCXD, eMAPT, eWPTX, eWDP, CEH, CHFI, CISSP, CISM, CISA and many others.</p>
<p className="sub" data-r>You can trust that our instructors are equipped with the knowledge and skills to provide top-notch training in the field of Information Security.</p>
<div className="row" data-r><Btn to="/training">Explore Trainings<Icon n="arrow" s={18}/></Btn></div></div>
<ul className="pills" data-r>{accred.map(a=><li key={a}>{a}</li>)}</ul></div></section>

<section className="cta"><div className="wrap" data-r><h2>Need a Fixed-Scope Security Quotation?</h2><p>Use our interactive quotation generator to configure target scopes (Web, API, Cloud, Network), calculate real-time commercials with GST, and generate a client-ready proposal immediately.</p><div className="row c"><Btn to="/quotation">Open Quotation Builder<Icon n="arrow" s={18}/></Btn></div></div></section></>}

export function Services(){useReveal();return <>
<section className="phero"><div className="glow g1"/><div className="wrap"><Tag>Enterprise Cybersecurity Portfolio</Tag><h1 data-w><Words parts={[['Offensive Security, Forensics & '],['Compliance Audit','c']]}/></h1><p className="lead" data-r>We deliver deep-dive manual penetration testing paired with executive-ready threat mitigation roadmaps adhering to global standards.</p></div></section>
<section className="sec tight"><div className="wrap svc-layout"><nav className="svc-idx" aria-label="Services index">{services.map(s=><a key={s.id} href={'#'+s.id}>{s.tag}</a>)}<a href="#methodology">Testing Framework</a></nav>
<div className="svc-list">{services.map(s=><article id={s.id} className={'svc spot'+(s.red?' red':'')} key={s.id} data-r>{s.id==='cloud'&&<span id="compliance"/>}
<header><div><Tag red={s.red}>{s.tag}</Tag><h2>{s.t}</h2></div><Btn to={s.cta[1]} v={s.red?'red':'ghost'}>{s.cta[0]}</Btn></header><p>{s.d}</p>
<div className="lists">{[s.a,s.b].map(([h,l],k)=><div key={h}><strong className={k?'r':'c'}>{h}</strong><ul>{l.map(x=><li key={x}>{x}</li>)}</ul></div>)}</div></article>)}</div></div></section>
<section className="sec alt" id="methodology"><div className="wrap"><div className="sh"><Tag>Audit Workflow</Tag><h2 data-w><Words parts={[['The Hacktivists '],['5-Phase Framework','c']]}/></h2><p data-r>Our disciplined offensive testing methodology guarantees thorough coverage with zero business disruption.</p></div><Phases/></div></section>
<section className="cta"><div className="wrap" data-r><h2>Ready to schedule an audit or get a quotation?</h2><div className="row c"><Btn to="/quotation">Quotation Builder<Icon n="arrow" s={18}/></Btn><Btn to="/contact" v="ghost">Emergency Response</Btn></div></div></section></>}

export function Contact(){useReveal();return <>
<section className="phero"><div className="glow g1"/><div className="wrap"><Tag>Direct Advisory Desk</Tag><h1 data-w><Words parts={[['Initiate a '],['Confidential Engagement','c']]}/></h1><p className="lead" data-r>Submit your project requirements, request a custom proposal, or report a critical security incident. All inquiries are handled under strict NDA protection.</p></div></section>
<section className="sec tight"><div className="wrap contact-grid"><div className="panel" data-r><h2 className="h3">Security Engagement Inquiry</h2><ContactForm/></div>
<aside className="side"><div className="panel" data-r><h3>Corporate Office & Direct Contacts</h3><dl className="dl"><div><dt>Legal Entity:</dt><dd>The Hacktivists</dd></div><div><dt>Tagline:</dt><dd>{site.tag}</dd></div><div><dt>Official Website:</dt><dd><a href={site.web} target="_blank" rel="noopener">www.thehacktivists.in</a></dd></div><div><dt>Direct Email:</dt><dd><a href={'mailto:'+site.email}>{site.email}</a></dd></div><div><dt>Direct Phone:</dt><dd>{site.p1} / {site.p2}</dd></div><div><dt>Location:</dt><dd>{site.loc}</dd></div><div><dt>Registered GSTIN:</dt><dd>On File (Provided on Official Quotation)</dd></div></dl></div>
<div className="panel alert" data-r><p>Experiencing an active security breach, unauthorized database exfiltration, or ransomware incident? Reach our senior forensic responders immediately via WhatsApp or direct phone.</p><Btn href={site.tel} v="red"><Icon n="phone" s={18}/>Call {site.p1}</Btn></div></aside></div></section></>}
