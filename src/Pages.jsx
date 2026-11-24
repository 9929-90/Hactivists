import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {SERVICES,SOLUTIONS,svcById,iconOf,FAQ} from './data.js';
import {WaysToEngage,Frameworks} from './Extra.jsx';
import {Icon,Words,Tag,useReveal,PageHero,FaqSection,ContactForm} from './ui.jsx';
import {SvcCard} from './cards.jsx';
import {Direct,Offices,Overview} from './blocks.jsx';
import {openConsult} from './bus.js';
const TABS=[['all','All Services'],['compliance','Compliance & Audits'],['security','Offensive Security'],['advisory','Advisory & vCISO']];
const EXPERTISE=[['Information Security & ISO 27001','Gap assessments, risk assessments, information security policies, control implementation, and certification readiness.'],['SOC 2 Readiness & Compliance','Trust Services Criteria gap analysis, control design, documentation, evidence preparation, and audit readiness.'],['Data Protection & Privacy','Support for India’s Digital Personal Data Protection (DPDP) requirements, privacy governance, and data protection practices.'],['Cybersecurity Assessments','Vulnerability assessments, penetration testing, security reviews, and remediation guidance.'],['Governance, Risk & Compliance (GRC)','Risk management frameworks, internal control reviews, security governance, and compliance roadmaps.'],['Security Operations & Incident Response','Security monitoring improvement, threat detection strategies, incident response planning, and operational readiness.']];
const STEPS=[['1. Assess','Evaluate your existing security posture, business risks, and applicable compliance requirements.'],['2. Identify','Highlight gaps in security controls, policies, processes, and documentation.'],['3. Strategize','Develop a prioritized roadmap aligned with your business goals and compliance obligations.'],['4. Implement','Support the development of policies, controls, procedures, and supporting evidence.'],['5. Prepare','Help organize documentation and evidence for independent audits and assessments.'],['6. Improve','Establish a foundation for ongoing monitoring, risk management, and continual improvement.']];
const WHY=['Expert-Led Consulting: Tailored to your objectives','Risk-Based Prioritization: Focus on gaps that matter most','Practical Implementation: Real-world operational support','End-to-End Guidance: From gap analysis to audit defense','Business-Aligned Solutions: Respecting your team’s bandwidth','Long-Term Security Mindset: Sustainable continuous compliance'];

export function About(){useReveal();return <>
<section className="phero"><div className="glow g1"/><div className="wrap"><Tag>ABOUT HACKTIVISTS SECURITY</Tag><h1 data-w><span className="ln"><Words parts={[['Cybersecurity Confidence.']]}/></span><span className="ln"><Words start={2} parts={[['Compliance Simplified.','c']]}/></span></h1>
<p className="lead" data-r>At Hacktivists Security, we help businesses navigate the complexities of cybersecurity, risk management, and regulatory compliance with confidence. Our goal is to make security more effective, compliance more manageable, and risk management more practical through expert-led consulting and business-focused solutions.</p>
<p className="lead" data-r>As cyber threats evolve and regulatory expectations grow, organizations need more than technical safeguards. They need a structured approach to information security, governance, risk, and compliance. We work with businesses to identify security gaps, strengthen internal controls, protect sensitive information, and build a resilient security posture aligned with their business objectives.</p></div></section>
<section className="sec tight"><div className="wrap"><div className="mission panel spot" data-r><div className="tag"><i/>OUR MISSION</div><h3>Bridging Regulatory Demands &amp; Practical Implementation</h3><p>Our mission is to simplify cybersecurity and compliance while helping organizations build stronger, safer, and more resilient businesses. We aim to bridge the gap between regulatory requirements and practical implementation by delivering tailored guidance, actionable recommendations, and structured compliance roadmaps that support long-term security and business growth.</p></div>
<div className="blk"><h3 className="blk-h" data-r>Our Core Expertise</h3><div className="cards">{EXPERTISE.map(([t,d],i)=><article className="card spot" key={t} data-r style={{'--d':(i%3)*80+'ms'}}><span className="idx">0{i+1}</span><h4>{t}</h4><p>{d}</p></article>)}</div></div></div></section>
<section className="sec alt"><div className="wrap"><div className="sh"><Tag>OUR METHODOLOGY</Tag><h2 data-w><Words parts={[['Compliance Without Complexity']]}/></h2></div><ol className="steps6">{STEPS.map(([t,d],i)=><li key={t} data-r style={{'--d':(i%3)*80+'ms'}}><b>{t}</b><span>{d}</span></li>)}</ol></div></section>
<section className="sec"><div className="wrap why"><div data-r><Tag>WHY HACKTIVISTS SECURITY?</Tag><h3 className="blk-h l">Expertise That Understands Business</h3><p className="sub">We combine cybersecurity knowledge with a practical understanding of business risks and compliance expectations. Our approach emphasizes solutions that organizations can implement, maintain, and improve over time.</p>
<ul className="checks">{WHY.map(w=>{const[a,...b]=w.split(': ');return <li key={w}><Icon n="check" s={16}/><span><b>{a}:</b> {b.join(': ')}</span></li>})}</ul></div>
<div className="cta-card spot" data-r><h4>Let’s Build a More Secure Future</h4><p>Partner with Hacktivists Security to strengthen your cybersecurity, simplify compliance, and build lasting trust with your customers.</p><button className="btn btn-primary" onClick={openConsult}>Schedule Your Free Strategy Call</button></div></div></section>
<FaqSection alt items={FAQ.about}/></>}

export function Contact(){useReveal();return <>
<PageHero tag="DIRECT ACCESS • OFFICES" title="Get In Touch With Our Team" lead="Reach our lead auditors and admissions directors directly via phone, WhatsApp, or email across our offices."/>
<section className="sec tight"><div className="wrap"><Direct/><Offices/></div></section>
<section className="sec alt"><div className="wrap narrow"><div className="panel" data-r><div className="sh"><h2 className="h3x">Send Us a Message</h2><p>Share your requirements and our lead auditor will get back to you.</p></div><ContactForm/></div></div></section>
<FaqSection items={FAQ.contact}/></>}

export function ServicesList(){useReveal();const[cat,setCat]=useState('all');const list=cat==='all'?SERVICES:SERVICES.filter(s=>s.category===cat);return <>
<PageHero tag="OUR CAPABILITIES" title="Cybersecurity & Compliance Services" lead="Turnkey consulting, penetration testing, and fractional leadership delivered by certified lead auditors."/>
<Overview id="_services"/>
<section className="sec alt tight"><div className="wrap"><div className="tabs" role="tablist">{TABS.map(([k,l])=><button key={k} role="tab" aria-selected={cat===k} className={cat===k?'on':''} onClick={()=>setCat(k)}>{l}</button>)}</div><div className="cards">{list.map(s=><SvcCard key={s.id} s={s} pop/>)}</div></div></section>
<WaysToEngage/>
<FaqSection alt items={FAQ.services}/></>}

export function Solutions(){useReveal();return <>
<PageHero tag="KEY FRAMEWORKS & REGULATIONS" title="Solutions for Every Framework and Regulation" lead="Choose a framework to see its scope, deliverables, timeline and frequently asked questions."/>
<Overview id="_solutions"/>
<section className="sec alt tight"><div className="wrap"><div className="cards">{SOLUTIONS.map((it,i)=>{const s=svcById(it.id);return <article className="card spot" key={it.id} data-r style={{'--d':(i%3)*80+'ms'}}><div className="svc-top"><div className="ico"><Icon n={s?iconOf(s):'shield'}/></div>{s&&<span className="badge">{s.badge}</span>}</div><h3><Link className="stretch" to={'/services/'+it.id}>{it.name}</Link></h3><p>{it.desc}</p><div className="card-f"><span><Icon n="clock" s={15}/>{s?.timeline}</span><span className="more">Explore Solution<Icon n="right" s={16}/></span></div></article>})}</div></div></section>
<Frameworks/>
<FaqSection alt items={FAQ.solutions}/></>}
