import React,{useMemo,useState} from 'react';
import {site,accred,tServices,cats,courses} from './data.js';
import {useReveal,Words,Tag,Marquee,Icon,Btn,TrainForm} from './ui.jsx';
export default function Training(){useReveal();const[cat,setCat]=useState('all');const[q,setQ]=useState('');const[course,setCourse]=useState('');
const list=useMemo(()=>courses.filter(c=>(cat==='all'||c.c===cat)&&(!q||(c.k+' '+c.n+' '+c.d).toLowerCase().includes(q.toLowerCase()))),[cat,q]);
const demo=c=>{setCourse(c.k+' - '+c.n);document.getElementById('enroll')?.scrollIntoView({behavior:'smooth',block:'center'})};
return <>
<section className="phero"><div className="glow g1"/><div className="glow g2"/><div className="wrap"><Tag red>Cyber Security Trainings</Tag><h1 data-w><Words parts={[['IT Security Training According to '],['Industry Requirements','c']]}/></h1>
<p className="lead" data-r>The Hacktivists is one of the most trusted and reliable training providers in information and #cybersecurity, providing exceptional, unmatched Hands-On, practical training to individuals and corporations worldwide. Our goal is to train, mentor, and support your career in cybersecurity.</p>
<div className="row" data-r><Btn href="#catalog">Browse Courses<Icon n="arrow" s={18}/></Btn><Btn href="#enroll" v="ghost">Free Demo</Btn></div></div></section>
<Marquee items={accred}/>
<section className="sec" id="instructors"><div className="wrap split"><div><Tag>Our Instructors</Tag><h2 data-w><Words parts={[['IT Security Training & Services']]}/></h2><p className="sub" data-r>Our team of professional instructors are highly specialized and experienced in various Information Security domains. They hold a wide range of accreditations such as OSCP, OSEE, OSCE, eCXD, eMAPT, eWPTX, eWDP, CEH, CHFI, CISSP, CISM, CISA and many others.</p><p className="sub" data-r>You can trust that our instructors are equipped with the knowledge and skills to provide top-notch training in the field of Information Security.</p></div>
<blockquote className="quote" data-r>Looking to gain practical skills? Our training sessions are designed to maximize efficiency and are meticulously planned by our experienced instructors. Join us for a hands-on learning experience.<cite>Training Qualities</cite></blockquote></div></section>
<section className="sec alt" id="our-services"><div className="wrap"><div className="sh"><Tag>Our Services</Tag><h2 data-w><Words parts={[['Our Services']]}/></h2></div><div className="cards">{tServices.map(([t,d],i)=><article className="card spot" key={t} data-r style={{'--d':(i%3)*90+'ms'}}><span className="idx">{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
<section className="sec" id="catalog"><div className="wrap"><div className="sh"><Tag red>Certifications</Tag><h2 data-w><Words parts={[['IT Security Training According to '],['Industry Requirements','c']]}/></h2></div>
<div className="tools" data-r><div className="chipbar" role="tablist">{cats.map(([k,l])=><button key={k} role="tab" aria-selected={cat===k} className={cat===k?'on':''} onClick={()=>setCat(k)}>{l}<em>{courses.filter(c=>k==='all'||c.c===k).length}</em></button>)}</div>
<input className="search" type="search" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search courses, e.g. SOC, Kubernetes, ACSE" aria-label="Search courses"/></div>
<div className="cards courses">{list.map(c=><article className="card spot course" key={c.k}><div className="code">{c.k}</div><h3>{c.n}</h3><p>{c.d}</p><div className="c-f"><span><small>From:</small> ${c.p}</span><button className="more" onClick={()=>demo(c)}>Free Demo <Icon n="arrow" s={16}/></button></div></article>)}</div>
{list.length===0&&<p className="mut empty-note">No courses match your search. Try another keyword.</p>}</div></section>
<section className="sec alt"><div className="wrap split"><div><Tag>Ready to find out more?</Tag><h2 data-w><Words parts={[['Ready to find out more?']]}/></h2>
<p className="sub" data-r>We are pleased to introduce our team of over 35 highly skilled Information Security Instructors. Our training program, based on our comprehensive training modules, is designed to provide 100% live practicals for each topic.</p>
<p className="sub" data-r>Our training program is not just theoretical but also focuses on real-world cybersecurity scenarios and challenges. We provide solutions for every module, ensuring that the knowledge gained is immediately applicable.</p>
<p className="sub" data-r>Moreover, we offer customized training solutions for Information Security employers and companies. We appreciate your consideration of our services.</p>
<div className="row" data-r><Btn href={site.wa} v="ghost" target="_blank" rel="noopener">Click to Chat Whatsapp</Btn></div></div>
<div className="panel" data-r><h2 className="h3">Contact Us</h2><TrainForm course={course} setCourse={setCourse}/>
<div className="t-info"><span>Tel. <a href="tel:+919680981337">+91 96809 81337</a></span><span>Email. <a href={'mailto:'+site.email}>{site.email}</a></span><div className="soc">{site.social.map(([n,u])=><a key={n} href={u} target="_blank" rel="noopener">{n}</a>)}</div></div></div></div></section></>}
