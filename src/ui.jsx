import React,{useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {site,interests,courses} from './data.js';

/* reveal on scroll: transform/opacity only, one observer per page */
export function useReveal(dep){useEffect(()=>{const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});
document.querySelectorAll('[data-r],[data-w]').forEach(el=>io.observe(el));return()=>io.disconnect()},[dep])}
export function Count({to,suf=''}){const r=useRef();const[v,setV]=useState(0);
useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();const f=t=>{const p=Math.min((t-t0)/1600,1);setV(Math.round(to*(1-Math.pow(1-p,4))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
return <span ref={r}>{v}{suf}</span>}
/* word-by-word masked headline reveal */
export function Words({parts}){let i=0;return parts.map(([t,c],k)=>t.split(/(\s+)/).map((w,j)=>w===''||/^\s+$/.test(w)?w:<span className="w" key={k+'-'+j}><span className={'wi'+(c?' '+c:'')} style={{'--i':i++}}>{w}</span></span>))}
export const Tag=({children,red})=><div className={'tag'+(red?' red':'')}><i/>{children}</div>;
export const Marquee=({items,rev})=><div className="mq" aria-hidden="true"><div className={'mq-t'+(rev?' rev':'')}>{[0,1].map(k=><div className="mq-g" key={k}>{items.map(x=><span key={x}>{x}<b>✦</b></span>)}</div>)}</div></div>;
const P={web:'M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3zM3.5 9h17M3.5 15h17',api:'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',search:'M11 4a7 7 0 100 14 7 7 0 000-14zM16 16l5 5',cloud:'M7 18a4 4 0 01-.6-7.95A6 6 0 0118 9.5 4.3 4.3 0 0117.5 18H7z',net:'M12 5a2 2 0 100 .01M5 19a2 2 0 100 .01M19 19a2 2 0 100 .01M12 7v5M12 12l-6 5M12 12l6 5',doc:'M7 3h8l4 4v14H7zM15 3v4h4M10 12h6M10 16h6',lock:'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3',arrow:'M5 12h14M13 6l6 6-6 6',phone:'M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z',check:'M5 12l5 5L20 7',chev:'M6 9l6 6 6-6'};
export const Icon=({n,s=22})=><svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={P[n]}/></svg>;
export const Btn=({to,href,children,v='primary',className='',...r})=>{const c=`btn btn-${v} ${className}`;return to?<Link to={to} className={c} {...r}>{children}</Link>:<a href={href} className={c} {...r}>{children}</a>};

function useMail(){const[st,setSt]=useState('idle');
const send=(e,build)=>{e.preventDefault();const f=e.currentTarget;const d=Object.fromEntries(new FormData(f));setSt('sending');
setTimeout(()=>{const[s,b]=build(d);location.href=`mailto:${site.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`;setSt('sent');f.reset()},900)};return[st,send]}
export function ContactForm(){const[st,send]=useMail();
return <form className="form" onSubmit={e=>send(e,d=>['Security engagement inquiry: '+d.i,`Name: ${d.n}\nCompany: ${d.c}\nEmail: ${d.e}\nPhone: ${d.p}\nInterest: ${d.i}\n\n${d.m||''}`])}>
<div className="f2"><label>Your Full Name *<input name="n" required placeholder="John Doe" autoComplete="name"/></label><label>Company / Organization *<input name="c" required placeholder="TechCorp Global" autoComplete="organization"/></label></div>
<div className="f2"><label>Work Email Address *<input name="e" type="email" required placeholder="john@techcorp.com" autoComplete="email"/></label><label>Phone / WhatsApp *<input name="p" type="tel" required placeholder="+91 98765 43210" autoComplete="tel"/></label></div>
<label>Primary Area of Interest *<select name="i" required defaultValue={interests[0]}>{interests.map(x=><option key={x}>{x}</option>)}</select></label>
<label>Target Scope Details & Timeline<textarea name="m" rows="5" placeholder="Mention target domains, number of endpoints, preferred testing schedule, or any specific compliance goals..."/></label>
<button className="btn btn-primary" disabled={st==='sending'}><Icon n="lock" s={18}/>{st==='sending'?'Sending Encrypted Request...':'Submit Confidential Request'}</button>
{st==='sent'&&<p className="ok" role="status">Thank you! Your email app should open with your inquiry ready to send to the advisory desk. An engagement lead will reach out within 4 business hours of receiving it.</p>}</form>}
export function TrainForm({course,setCourse}){const[st,send]=useMail();
return <form className="form" id="enroll" onSubmit={e=>send(e,d=>['Training enquiry: '+d.i,`Name: ${d.n}\nPhone: ${d.p}\nEmail: ${d.e}\nCourse: ${d.i}\n\n${d.m||''}`])}>
<label>Enter Your Name<input name="n" required autoComplete="name"/></label><div className="f2"><label>Phone<input name="p" type="tel" required autoComplete="tel"/></label><label>Enter Your Email<input name="e" type="email" required autoComplete="email"/></label></div>
<label>Select Training Course<select name="i" value={course} onChange={e=>setCourse(e.target.value)}><option value="">Select Training Courses</option>{courses.map(c=><option key={c.k} value={c.k+' - '+c.n}>{c.k} - {c.n}</option>)}</select></label>
<label>Type Your Message Here...<textarea name="m" rows="4"/></label>
<button className="btn btn-primary" disabled={st==='sending'}>{st==='sending'?'Sending...':'Submit'}<Icon n="arrow" s={18}/></button>
{st==='sent'&&<p className="ok" role="status">Your email app should open with your request ready to send. We will get back to you shortly.</p>}</form>}
