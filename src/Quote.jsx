import React,{useMemo,useState} from 'react';
import {site} from './data.js';
import {useReveal,Tag,Words,Btn,Icon} from './ui.jsx';
const RATE=85;
const OPTS=[{k:'web',t:'Web Application Penetration Testing (Grey Box)',pr:45000,d:'Complete OWASP Top 10 assessment, authentication/session management, business logic evaluation, and access control testing.',lb:'Dynamic Pages / User Roles:',h:'(Base rate includes 15 pages)'},
{k:'api',t:'RESTful / GraphQL API Security Assessment',pr:35000,d:'API OWASP Top 10 audit, Broken Object Level Authorization (BOLA), parameter tampering, and rate limiting validation.',lb:'Number of Endpoints:',h:'(Base rate includes 15 endpoints)'},
{k:'cloud',t:'Cloud Infrastructure & CIS Benchmark Audit',pr:40000,d:'IAM privilege escalation, storage bucket policies, VPC topology, KMS encryption, and security group audit (AWS/Azure/GCP).',lb:'Cloud Accounts / Tenancies:'},
{k:'net',t:'External Perimeter & Network Security Audit',pr:18000,d:'Port analysis, banner exploitation, vulnerable service enumeration, and firewall egress/ingress auditing.',lb:'Static Public IPs / Subnet Size:'}];
const num=(v,d)=>Math.max(1,parseInt(v)||d);
export default function Quote(){useReveal();
const[cur,setCur]=useState('INR');const[on,setOn]=useState({web:true,api:true,cloud:false,net:false,retest:true});
const[n,setN]=useState({web:'25',api:'20',cloud:'1',net:'4'});const[cl,setCl]=useState({org:'',lead:'',email:''});
const[ref]=useState(()=>'TH-Q-2026-'+Math.floor(1000+Math.random()*9000));
const fmt=a=>cur==='USD'?'$ '+(a/RATE).toLocaleString('en-US',{maximumFractionDigits:0}):'₹ '+Math.round(a).toLocaleString('en-IN');
const q=useMemo(()=>{const items=[];
if(on.web){const u=num(n.web,15);items.push([`Web Application VAPT (${u} Pages/Workflows)`,45000+Math.max(0,u-15)*1500])}
if(on.api){const u=num(n.api,15);items.push([`REST / GraphQL API VAPT (${u} Endpoints)`,35000+Math.max(0,u-15)*1200])}
if(on.cloud){const u=num(n.cloud,1);items.push([`Cloud Security & CIS Audit (${u} Tenant/Env)`,40000*u])}
if(on.net){const u=num(n.net,2);items.push([`External Perimeter VAPT (${u} Public IPs)`,18000+Math.max(0,u-2)*3000])}
if(on.retest)items.push(['Complimentary Retest & Attestation (30 Days)',0]);
const sub=items.reduce((a,i)=>a+i[1],0),tax=sub*.18,tot=sub+tax;return{items,sub,tax,tot,ms:[tot*.4,tot*.4,tot*.2]}},[on,n]);
const exportJson=()=>{const d={organization:'The Hacktivists',tagline:site.tag,reference:ref,date:new Date().toISOString().split('T')[0],currency:cur,client:{name:cl.org||'Client Organization',lead:cl.lead||'Security Team',email:cl.email||'contact@client.com'},
financials:{subtotal:fmt(q.sub),taxGST18:fmt(q.tax),grandTotal:fmt(q.tot),milestones:{advance40:fmt(q.ms[0]),draftReport40:fmt(q.ms[1]),finalRetest20:fmt(q.ms[2])}}};
const u=URL.createObjectURL(new Blob([JSON.stringify(d,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=u;a.download=`${ref}-The-Hacktivists.json`;document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(u)};
const set=(k,v)=>setCl(c=>({...c,[k]:v}));
return <>
<section className="phero"><div className="glow g1"/><div className="wrap"><Tag>Interactive Pricing Tool</Tag>
<h1 data-w><Words parts={[['Cybersecurity '],['Project Quotation','c'],[' Builder']]}/></h1><p className="lead" data-r>Configure your assessment scope, target parameters, and delivery requirements to receive a real-time, transparent commercial proposal.</p><div className="row" data-r><Btn to="/contact" v="ghost">Schedule Consultation</Btn></div></div></section>
<section className="sec tight"><div className="wrap q-grid"><div className="q-left">
<div className="panel" data-r><h2 className="step"><span>1</span>Client & Engagement Information</h2><div className="form">
<label>Client Organization Name *<input value={cl.org} onChange={e=>set('org',e.target.value)} placeholder="e.g., Acme Technologies Pvt Ltd"/></label>
<div className="f2"><label>Point of Contact / Lead *<input value={cl.lead} onChange={e=>set('lead',e.target.value)} placeholder="e.g., Alex Johnson (CISO)"/></label><label>Official Email Address *<input type="email" value={cl.email} onChange={e=>set('email',e.target.value)} placeholder="alex@clientcorp.com"/></label></div>
<div className="seg" role="radiogroup" aria-label="Currency Preference"><span>Currency Preference</span>{[['INR','Indian Rupee (₹)'],['USD','US Dollar ($)']].map(([v,l])=><label key={v} className={cur===v?'on':''}><input type="radio" name="currency" value={v} checked={cur===v} onChange={()=>setCur(v)}/>{l}</label>)}</div></div></div>
<div className="panel" data-r><h2 className="step"><span>2</span>Select In-Scope Cybersecurity Assets</h2><div className="opts">
{OPTS.map(o=><div key={o.k} className={'opt'+(on[o.k]?' sel':'')}><label className="opt-h"><input type="checkbox" checked={on[o.k]} onChange={e=>setOn({...on,[o.k]:e.target.checked})}/><span className="bx"><Icon n="check" s={14}/></span><span className="opt-t">{o.t}</span><span className="price">From {fmt(o.pr)}</span></label>
<p>{o.d}</p><div className="opt-n"><label>{o.lb}<input type="number" min="1" value={n[o.k]} onChange={e=>setN({...n,[o.k]:e.target.value})}/></label>{o.h&&<small>{o.h}</small>}</div></div>)}
<div className={'opt'+(on.retest?' sel':'')}><label className="opt-h"><input type="checkbox" checked disabled readOnly/><span className="bx"><Icon n="check" s={14}/></span><span className="opt-t">Remediation Retesting & Clearance Attestation</span><span className="price">INCLUDED ({fmt(0)})</span></label><p>One complimentary round of verification testing within 30 days of draft report delivery, plus official Security Clearance Certificate.</p></div></div></div>
<div className="panel" data-r><h2 className="step"><span>3</span>Rules of Engagement & Timing</h2><ul className="rules"><li><strong>Testing Hours:</strong> 24/7 or custom maintenance windows coordinated with client SOC.</li><li><strong>Disruption Policy:</strong> Non-destructive exploitation only. Zero production service interruption.</li><li><strong>Safe Harbor:</strong> Strict NDA and formal authorization required prior to engagement kickoff.</li></ul></div></div>
<aside className="proposal panel" id="proposal" data-r><div className="ref"><span>OFFICIAL QUOTE REF:</span><span>{ref}</span></div><h3>Commercial Proposal</h3><div className="by">The Hacktivists • Cybersecurity Advisory</div>
{(cl.org||cl.lead||cl.email)&&<div className="prep"><small>Prepared for</small>{cl.org&&<b>{cl.org}</b>}{cl.lead&&<span>{cl.lead}</span>}{cl.email&&<span>{cl.email}</span>}</div>}
<div className="sum">{q.items.length===0?<p className="mut">No services selected. Check boxes on the left to configure scope.</p>:q.items.map(([t,c])=><div key={t}><span>{t}</span><span>{c===0?'Included':fmt(c)}</span></div>)}</div>
<div className="tot"><div><span>Subtotal:</span><span>{fmt(q.sub)}</span></div><div><span>GST (18% Statutory Tax):</span><span>{fmt(q.tax)}</span></div><div className="g"><span>Total Project Value:</span><strong>{fmt(q.tot)}</strong></div></div>
<h4>Billing Milestones</h4><div className="tot ms">{['Milestone 1 (40% Advance on Kickoff):','Milestone 2 (40% On Draft Report):','Milestone 3 (20% Retest & Certificate):'].map((l,i)=><div key={l}><span>{l}</span><strong>{fmt(q.ms[i])}</strong></div>)}</div>
<div className="acts noprint"><button className="btn btn-ghost" onClick={()=>window.print()}>Print / Save as PDF</button><button className="btn btn-ghost" onClick={exportJson}>Export Quotation JSON</button><Btn to="/contact">Submit for Formal Contract<Icon n="arrow" s={18}/></Btn></div>
<p className="valid">Valid for 30 calendar days • Governed by mutual NDA</p><p className="pfoot">{site.loc} • {site.email} • {site.p1}</p></aside></div></section></>}
