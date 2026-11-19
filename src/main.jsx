import React,{useEffect,useRef,useState,lazy,Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,NavLink,Link,useLocation} from 'react-router-dom';
import {site,services,steps,groups,five,inds,standards,testimonials,posts,slug} from './data.js';
import {useReveal,Form,Lost,Hero,Intro} from './shared.jsx';
import Art,{svcKind} from './Art.jsx';
const L=n=>lazy(()=>import('./Pages.jsx').then(m=>({default:m[n]})));
const SolutionsIndex=L('SolutionsIndex'),SolutionPage=L('SolutionPage'),IndustryPage=L('IndustryPage'),Careers=L('Careers'),Partners=L('Partners'),Resources=L('Resources'),Privacy=L('Privacy');
import './styles.css';
const About=lazy(()=>import('./About.jsx'));

/* hero canvas: capped DPR, paused offscreen/hidden tab, rAF throttled to display rate */
function Net(){const ref=useRef();useEffect(()=>{const c=ref.current,x=c.getContext('2d');
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
let w,h,P=[],raf,vis=true,dpr=Math.min(devicePixelRatio||1,1.5);
const size=()=>{w=c.clientWidth;h=c.clientHeight;c.width=w*dpr;c.height=h*dpr;x.setTransform(dpr,0,0,dpr,0,0);
const n=Math.min(70,Math.floor(w*h/16000));P=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}))};
const D=130;const f=()=>{raf=requestAnimationFrame(f);if(!vis)return;x.clearRect(0,0,w,h);
for(let i=0;i<P.length;i++){const a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>w)a.vx*=-1;if(a.y<0||a.y>h)a.vy*=-1;
for(let j=i+1;j<P.length;j++){const b=P[j],dx=a.x-b.x,dy=a.y-b.y,d=dx*dx+dy*dy;if(d<D*D){x.strokeStyle=`rgba(0,174,239,${(1-Math.sqrt(d)/D)*.35})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}
x.fillStyle=i%9?'#00aeef':'#e83350';x.fillRect(a.x-1,a.y-1,2,2)}};
size();f();const ro=new ResizeObserver(size);ro.observe(c);
const io=new IntersectionObserver(([e])=>vis=e.isIntersecting);io.observe(c);
return()=>{cancelAnimationFrame(raf);ro.disconnect();io.disconnect()}},[]);
return <canvas ref={ref} className="net" aria-hidden="true"/>}

/* count-up on view */
function Count({to,suf=''}){const r=useRef();const[v,setV]=useState(0);
useEffect(()=>{const io=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;io.disconnect();const t0=performance.now();
const f=t=>{const p=Math.min((t-t0)/1400,1);setV(Math.round(to*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)});io.observe(r.current);return()=>io.disconnect()},[to]);
return <span ref={r}>{v}{suf}</span>}

const links=[['/','Home'],['/services','Services'],['/about','About'],['/contact','Contact']];
function Header(){const[o,setO]=useState(false);const{pathname}=useLocation();useEffect(()=>{setO(false)},[pathname]);
useEffect(()=>{document.body.style.overflow=o?'hidden':''},[o]);
return <><div className="bar"><span>Precision-driven cybersecurity</span><Link to="/contact">Security incident? Get help now</Link></div><header className="hdr"><div className="wrap hdr-in"><Link to="/" aria-label="Hachtivists home"><img src="/images/logo-lockup.png" alt="Hachtivists" width="156" height="32"/></Link>
<nav className={'nav'+(o?' open':'')} aria-label="Main"><NavLink to="/" end>Home</NavLink><div className="dd"><NavLink className="ddb" to="/solutions">Solutions</NavLink><div className="mega">{groups.map(g=><div key={g.t}><h4>{g.t}</h4>{g.items.map(i=><Link key={i} to={`/solutions/${slug(g.t)}/${slug(i)}`}>{i}</Link>)}</div>)}</div></div>
<NavLink to="/services">Services</NavLink><div className="dd"><NavLink className="ddb" to="/about">Company</NavLink><div className="mega sm"><div><Link to="/about">About us</Link><Link to="/careers">Careers</Link><Link to="/partners">Become a partner</Link></div></div></div><NavLink to="/resources">Resources</NavLink><a href="https://thehacktivists.in" rel="noopener">Training</a><Link className="btn btn-blue nav-cta" to="/contact">Contact us</Link></nav>
<button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}><i/><i/></button></div></header></>}

function Footer(){const[ok,setOk]=useState(false);
return <footer className="ftr"><div className="wrap ftr-in"><div className="fb"><img src="/images/logo-lockup.png" alt="Hachtivists" width="156" height="32"/><p>Offensive security, digital forensics and compliance from Udaipur.</p>
<form className="nl" onSubmit={e=>{e.preventDefault();location.href=`mailto:${site.email}?subject=Subscribe&body=${encodeURIComponent('Please add '+new FormData(e.target).get('e')+' to your updates.')}`;setOk(true)}}><input name="e" type="email" required placeholder="Email address" aria-label="Email address"/><button className="btn btn-blue">Subscribe</button></form>{ok&&<small className="ok">Your email app should open to confirm.</small>}</div>
<div><h4>Solutions</h4>{groups.map(g=><Link key={g.t} to={`/solutions/${slug(g.t)}/${slug(g.items[0])}`}>{g.t}</Link>)}<Link to="/solutions">All solutions</Link></div>
<div><h4>Company</h4><Link to="/">Home</Link><Link to="/services">Services</Link><Link to="/about">About us</Link><Link to="/careers">Careers</Link><Link to="/partners">Become a partner</Link><Link to="/resources">Resources</Link><a href="https://thehacktivists.in" rel="noopener">Training</a></div>
<div><h4>Contact</h4><a href={'mailto:'+site.email}>{site.email}</a><a href={site.tel}>{site.phone}</a><a href={site.wa}>WhatsApp</a><span>{site.loc}</span></div></div>
<div className="wrap fbar"><span>© {new Date().getFullYear()} Hachtivists. All rights reserved.</span><Link to="/privacy">Privacy policy</Link></div></footer>}

function Card({s}){return <article className="card" data-r><Art k={svcKind[s.id]}/><div className="card-b"><h3>{s.title}</h3><p>{s.d}</p><ul className="tags">{s.tags.map(t=><li key={t}>{t}</li>)}</ul><div className="card-f"><span>{s.from}</span><Link to="/contact" state={{svc:s.title}}>Get a quote</Link></div></div></article>}

function Marquee({children,rev}){return <div className="mq"><div className={'mq-t'+(rev?' rev':'')}>{children}{children}</div></div>}
function Sol({g,i}){return <article className={'sol'+(i%2?' flip':'')} data-r><div className="sol-t"><small>{g.k}</small><h3>{g.t}</h3><p>{g.d}</p><h5>{g.t} solutions include</h5><ul>{g.items.map(x=><li key={x}><Link to={`/solutions/${slug(g.t)}/${slug(x)}`}>{x}</Link></li>)}</ul><Link className="btn btn-ghost" to="/contact" state={{svc:g.t}}>Talk to an expert</Link></div><Art k={{Defense:'radar',Risk:'bug',Assurance:'check'}[g.t]}/></article>}
function Home(){useReveal();return <>
<section className="hero"><Net/><div className="wrap hero-in"><h1>Mitigate digital risk before it finds you.</h1>
<p className="lead">Protection for your people, processes and technology, built to hold up against threats that keep changing.</p>
<div className="row"><a className="btn btn-blue" href="#solutions">Explore solutions</a><Link className="btn btn-ghost" to="/contact">Talk to us</Link></div></div></section>
<section className="sec" id="solutions"><div className="wrap"><h2 data-r>Our enterprise solutions</h2><p className="sub" data-r>Three layers of protection that cover defense, risk and assurance end to end.</p></div><div className="wrap sols">{groups.map((g,i)=><Sol key={g.t} g={g} i={i}/>)}</div></section>
<section className="stats"><div className="wrap grid3"><div data-r><b><Count to={6}/>+</b><span>Core security services</span></div><div data-r><b><Count to={100} suf="%"/></b><span>Engagements under NDA</span></div><div data-r><b><Count to={24} suf="×7"/></b><span>Monitoring and response</span></div></div></section>
<Intro t="Why choose Hachtivists"><p>Hachtivists is a cybersecurity team based in Udaipur that tests, monitors and defends the systems businesses depend on. We combine hands-on offensive testing with digital forensics and compliance guidance, so one team can find a weakness, prove how it could be exploited and help you fix it properly. Every engagement starts with written authorization and a signed NDA, and every report ranks findings by real business impact rather than raw scanner output. Whether you are a startup preparing for a first audit or an enterprise running a complex estate, we scale the work to fit your risk, budget and timeline.</p></Intro>
<section className="sec alt"><div className="wrap"><h2 data-r>Five elements of cyber resilience</h2><p className="sub" data-r>Every program we run is built on the same five foundations.</p>
<ol className="five">{five.map(([t,d],i)=><li key={t} data-r style={{transitionDelay:i*70+'ms'}}><span className="dot">{i+1}</span><h4>{t}</h4><p>{d}</p></li>)}</ol></div></section>
<section className="sec"><div className="wrap"><h2 data-r>Protecting every industry</h2><p className="sub" data-r>Security programs shaped around how each sector actually works.</p></div>
<Marquee>{inds.map(([t,d])=><div className="ind" key={t}><span className="mono">{t[0]}</span><h3>{t}</h3><p>{d}</p><Link to={`/industries/${slug(t)}`}>Learn more ›</Link></div>)}</Marquee></section>
<section className="sec alt"><div className="wrap split"><div data-r><h2>From resilience to cyber immunity</h2><p className="sub">We tailor programs that anticipate attacks, adapt to them and shut them down early.</p><div className="row"><a className="btn btn-blue" href="#contact">Let’s talk</a></div></div><div data-r className="soc"><Art k="shield"/></div></div></section>
{testimonials.length>0&&<section className="sec"><div className="wrap"><h2 data-r>What clients say</h2></div><Marquee>{testimonials.map((q,i)=><blockquote className="q" key={i}>{q}</blockquote>)}</Marquee></section>}
<section className="sec"><div className="wrap"><h2 data-r>Standards we work to</h2><p className="sub" data-r>Our methods follow the frameworks auditors and regulators already trust.</p></div><Marquee rev>{standards.map(x=><div className="std" key={x}>{x}</div>)}</Marquee></section>
{posts.length>0&&<section className="sec" id="blogs"><div className="wrap"><h2>Recent articles</h2></div></section>}
<section className="sec alt" id="contact"><div className="wrap split"><div data-r><h2>Let’s secure what matters</h2><p className="sub">Share what you need protected. We reply with a scope and a quote.</p><div className="info"><a href={'mailto:'+site.email}><small>Email</small>{site.email}</a><a href={site.tel}><small>Phone</small>{site.phone}</a><a href={site.wa}><small>WhatsApp</small>Chat now</a></div></div><Form/></div></section></>}

function Services(){useReveal();return <><Hero title="Security services" lead="Pick a service for scope, standards and starting price." art="shield"/>
<Intro t="Security work from first test to final retest"><p>Our services cover the full life cycle of security work. Web, API, cloud and network testing show how an attacker would approach your systems today. Digital forensics and incident response give you answers when something goes wrong, with evidence preserved for legal use. Compliance consulting prepares you for ISO 27001, SOC 2, PCI-DSS and India’s DPDP Act. Each service has a defined scope, a named standard and a written deliverable, so you always know what you are paying for. Starting prices are shown on every card, and larger programs are quoted after a short scoping call.</p></Intro><section className="sec"><div className="wrap grid">{services.map(s=><Card key={s.id} s={s}/>)}</div></section></>}

function Contact(){useReveal();return <><section className="phero"><div className="wrap"><h1>Talk to us</h1><p className="lead">Tell us what you need tested. We reply with scope and a quote.</p></div></section><Intro t="What happens after you reach out"><p>Tell us about your systems, your deadline and what worries you most, and we will respond with a clear scope and quote. Most enquiries get a reply within one business day, and incident reports are answered around the clock. After the first call we sign an NDA, agree the rules of engagement and confirm written authorization before any testing begins. You will receive a named contact, a project timeline and regular updates until the final report is delivered. If you are unsure which service fits, describe the problem in your own words and we will recommend the right starting point.</p></Intro><section className="sec"><div className="wrap split"><Form/><div className="info" data-r><a href={'mailto:'+site.email}><small>Email</small>{site.email}</a><a href={site.tel}><small>Phone</small>{site.phone}</a><a href={site.wa}><small>WhatsApp</small>Chat now</a><p><small>Office</small>{site.loc}</p></div></div></section></>}

/* top progress line: starts on link click, finishes when the new route has rendered */
const WAIT=1000;
import('./Pages.jsx');import('./About.jsx'); /* warm the lazy chunks so the page renders the instant the wait ends */
function TopLine(){const bar=useRef(),h=useRef(0);
const set=(p,tr)=>{const b=bar.current;if(!b)return;b.style.transition=tr;b.style.transform=`scaleX(${p})`};
const start=ms=>{clearTimeout(h.current);bar.current.parentNode.style.opacity=1;set(0,'none');void bar.current.offsetWidth;set(1,`transform ${ms}ms cubic-bezier(.45,.05,.3,1)`)};
const done=()=>{clearTimeout(h.current);set(1,'transform .12s linear');h.current=setTimeout(()=>{if(bar.current)bar.current.parentNode.style.opacity=0},140)};
useEffect(()=>{const a=()=>start(WAIT),b=()=>done();addEventListener('nav-start',a);addEventListener('nav-done',b);start(1200);const t=setTimeout(done,1200);
return()=>{removeEventListener('nav-start',a);removeEventListener('nav-done',b);clearTimeout(t);clearTimeout(h.current)}},[]);
return <div className="tl" aria-hidden="true"><i ref={bar}/></div>}
function ScrollTop(){const{pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);return null}
function Shell(){const loc=useLocation();const[shown,setShown]=useState(loc);const first=useRef(true);
useEffect(()=>{if(first.current){first.current=false;return}
if(loc.pathname===shown.pathname&&loc.search===shown.search){setShown(loc);dispatchEvent(new Event('nav-done'));return}
dispatchEvent(new Event('nav-start'));
const t=setTimeout(()=>{setShown(loc);window.scrollTo(0,0);dispatchEvent(new Event('nav-done'))},WAIT);
return()=>clearTimeout(t)},[loc]);
return <main key={shown.pathname} className="pg"><Suspense fallback={<div className="phero"/>}><Routes location={shown}><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/about" element={<About/>}/><Route path="/solutions" element={<SolutionsIndex/>}/><Route path="/solutions/:g/:s" element={<SolutionPage/>}/><Route path="/industries/:s" element={<IndustryPage/>}/><Route path="/careers" element={<Careers/>}/><Route path="/partners" element={<Partners/>}/><Route path="/resources" element={<Resources/>}/><Route path="/privacy" element={<Privacy/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Lost/>}/></Routes></Suspense></main>}
function App(){return <BrowserRouter><TopLine/><Header/><Shell/><Footer/></BrowserRouter>}
createRoot(document.getElementById('root')).render(<App/>);
