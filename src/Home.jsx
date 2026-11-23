import React from 'react';
import {Link} from 'react-router-dom';
import {SERVICES,TRAININGS,company,NUM1,NUM2,tel,industries,FAQ} from './data.js';
import {Icon,Count,Words,Tag,useReveal,FaqSection} from './ui.jsx';
import {SvcCard,TCard} from './cards.jsx';
import {IndustryMarquee} from './Industry.jsx';
import {openConsult} from './bus.js';
import {Direct} from './blocks.jsx';

export default function Home(){useReveal();
return <>
<section className="hero"><div className="glow g1"/><div className="glow g2"/><div className="grid-bg"/><div className="wrap hero-c">
<h1 className="eyebrow" data-r>HACKTIVISTS SECURITY</h1><div className="kicker" data-r style={{'--d':'60ms'}}>Your Trusted Cybersecurity &amp; Compliance Partner</div>
<h2 className="display" data-w><span className="ln"><Words parts={[['Cybersecurity Confidence.']]}/></span><span className="ln"><Words start={2} parts={[['Compliance Simplified.','c']]}/></span></h2>
<p className="lead strong" data-r style={{'--d':'200ms'}}>Expert-led. Business-focused. Compliance-ready.</p>
<p className="lead" data-r style={{'--d':'260ms'}}>Simplify ISO 27001, SOC 2, and DPDP compliance with expert consulting, risk assessments, audit readiness, and end-to-end implementation support. Strengthen your security posture without unnecessary complexity.</p>
<div className="row" data-r style={{'--d':'330ms'}}><button className="btn btn-primary" onClick={openConsult}><Icon n="spark" s={18}/>Start Your Compliance Journey<Icon n="right" s={18}/></button><button className="btn btn-ghost" onClick={openConsult}><Icon n="phone" s={18}/>Book a Free Consultation</button><Link className="btn btn-ghost" to="/training"><Icon n="grad" s={18}/>Explore 40+ Trainings</Link></div>
<div className="rib" data-r style={{'--d':'420ms'}}><div><b><Count to={350} suf="+"/></b><span>Successful Audits</span><small>Zero external failures</small></div><div><b><Count to={150} suf="+"/></b><span>SOC 2 Attestations</span><small>CPA partnered reports</small></div><div><b><Count to={100} suf="%"/></b><span>Hands-On Practice</span><small>Practical lab exams</small></div></div></div></section>

<section className="sec"><div className="wrap"><div className="sh"><Tag>OUR CAPABILITIES</Tag><h2 data-w><Words parts={[['Cybersecurity & Compliance Services']]}/></h2><p data-r>Turnkey consulting, penetration testing, and fractional leadership delivered by certified lead auditors.</p></div>
<div className="cards">{SERVICES.slice(0,6).map((s,i)=><SvcCard key={s.id} s={s} i={i}/>)}</div><div className="row c" data-r><Link className="btn btn-ghost" to="/services">View All Services<Icon n="right" s={18}/></Link></div></div></section>

<section className="sec alt"><div className="wrap"><div className="sh"><Tag red>THE HACKTIVISTS ACADEMY</Tag><h2 data-w><Words parts={[['IT Security Training According to Industry Requirements']]}/></h2><p data-r>Over 40 offensive security and penetration testing courses taught live by practicing hackers with 24/7 dedicated cyber range access.</p></div>
<div className="cards cards4">{TRAININGS.slice(0,4).map((t,i)=><TCard key={t.id} t={t} i={i}/>)}</div>
<div className="row c" data-r><Link className="btn btn-primary" to="/training">Explore All 40+ Certifications<Icon n="right" s={18}/></Link></div></div></section>

<section className="sec"><div className="wrap"><div className="sh"><Tag>Industries</Tag><h2 data-w><Words parts={[['Industries We '],['Protect','c']]}/></h2><p data-r>Security programs shaped around how each sector actually works.</p></div></div><IndustryMarquee items={industries}/></section>

<section className="sec alt"><div className="wrap"><div className="mission panel spot" data-r><div className="tag"><i/>OUR MISSION</div><h3>Bridging Regulatory Demands &amp; Practical Implementation</h3><p>Our mission is to simplify cybersecurity and compliance while helping organizations build stronger, safer, and more resilient businesses. We aim to bridge the gap between regulatory requirements and practical implementation by delivering tailored guidance, actionable recommendations, and structured compliance roadmaps that support long-term security and business growth.</p>
<div className="row"><Link className="btn btn-primary" to="/about">About Us<Icon n="right" s={18}/></Link><button className="btn btn-ghost" onClick={openConsult}>Schedule Your Free Strategy Call</button></div></div></div></section>

<FaqSection items={FAQ.home}/>

<section className="sec alt"><div className="wrap"><div className="sh"><Tag>DIRECT ACCESS • OFFICES</Tag><h2 data-w><Words parts={[['Get In Touch With Our Team']]}/></h2><p data-r>Reach our lead auditors and admissions directors directly via phone, WhatsApp, or email across our offices.</p></div><Direct/><div className="row c" data-r><Link className="btn btn-primary" to="/contact">Contact Us &amp; Locations<Icon n="right" s={18}/></Link></div></div></section></>}
