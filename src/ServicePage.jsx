import React from 'react';
import {Link,useParams} from 'react-router-dom';
import {svcById,SERVICES,iconOf} from './data.js';
import {Icon,Faq,Tag,useReveal,NotFound,ServiceForm} from './ui.jsx';
import {openConsult} from './bus.js';
import {Overview} from './blocks.jsx';
export default function ServicePage(){const{id}=useParams();const s=svcById(id);useReveal(id);if(!s)return <NotFound/>;
const parent=SERVICES.find(x=>x.id==='vapt-pentest');const vapt=s.id==='vapt-pentest'||s.parentServiceId==='vapt-pentest';
const toForm=()=>document.getElementById('service-quote-form')?.scrollIntoView({behavior:'smooth'});
return <div key={id}>
<div className="crumbbar"><div className="wrap"><Link className="back" to="/"><Icon n="back" s={16}/>Back to Home</Link><div className="trail"><span>The Hacktivists</span><span>/</span><span className="cap">{s.category||'Service'}</span><span>/</span><b>{s.code||s.title}</b></div></div>
{vapt&&parent?.subServices&&<div className="wrap"><div className="switch"><span>VAPT Scope:</span><Link className={s.id==='vapt-pentest'?'on':''} to="/services/vapt-pentest">All VAPT &amp; Pentesting</Link>{parent.subServices.map(x=><Link key={x.id} className={x.id===s.id?'on':''} to={'/services/'+x.id}>{x.title}</Link>)}</div></div>}</div>
<section className="p-hero"><div className="glow g1"/><div className="wrap p-grid"><div>
<div className="p-meta"><div className="ico"><Icon n={iconOf(s)}/></div><span className="badge">{s.badge}</span><span className="price">{s.passRate||'100% Audit Readiness'}</span></div>
<h1 data-w>{s.title}</h1><p className="lead" data-r>{s.summary}</p>
<div className="row" data-r><button className="btn btn-primary" onClick={toForm}><Icon n="spark" s={18}/>Get a Custom Audit Quote<Icon n="right" s={18}/></button><button className="btn btn-ghost" onClick={openConsult}><Icon n="phone" s={18}/>Speak with Lead Auditor</button></div></div>
<div className="mcard panel" data-r><h4>Engagement Metrics</h4><div className="mrow"><div><small>TIMELINE</small><b>{s.timeline||'4–8 Weeks'}</b></div><Icon n="clock"/></div><div className="mrow"><div><small>AUDIT READINESS</small><b>100% Guaranteed</b></div><Icon n="award"/></div><div className="mrow"><div><small>ACCREDITATION</small><b>ISO • AICPA • CERT-In</b></div><Icon n="shieldcheck"/></div></div></div></section>
<Overview id={s.id}/>
{s.deliverables?.length>0&&<section className="sec alt"><div className="wrap"><div className="sh"><Tag>Scope of Delivery</Tag><h2>Deliverables &amp; Artifacts</h2></div><div className="del-grid">{s.deliverables.map((d,i)=><div className="del card spot" key={i} data-r style={{'--d':(i%2)*80+'ms'}}><div className="ico sm"><Icon n="check" s={16}/></div><div><small>DELIVERABLE 0{i+1}</small><b>{d}</b></div></div>)}</div></div></section>}
{s.faqs?.length>0&&<section className="sec"><div className="wrap narrow"><div className="sh"><Tag>Auditor Answers</Tag><h2>Frequently Asked Questions</h2></div><Faq items={s.faqs}/></div></section>}
<section className="sec alt" id="service-quote-form"><div className="wrap narrow"><div className="panel" data-r><div className="sh"><h2 className="h3x">Request a Formal Audit Proposal</h2><p>Receive a fixed-price statement of work and audit roadmap within 1 business day.</p></div><ServiceForm service={s}/></div></div></section></div>}
