import React,{useEffect,useRef,useState,lazy,Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,NavLink,Link,useLocation} from 'react-router-dom';
import {site,tree} from './data.js';
import {Home,Services,Contact} from './Home.jsx';
import {Btn,Icon,Tag,Words,useReveal} from './ui.jsx';
import './styles.css';
const WAIT=1000;
const Quote=lazy(()=>import('./Quote.jsx')),Training=lazy(()=>import('./Training.jsx'));
import('./Quote.jsx');import('./Training.jsx'); /* warm chunks so pages render the instant the wait ends */

function TopLine(){const bar=useRef(),h=useRef(0);
const set=(p,tr)=>{const b=bar.current;if(!b)return;b.style.transition=tr;b.style.transform=`scaleX(${p})`};
const start=ms=>{clearTimeout(h.current);bar.current.parentNode.style.opacity=1;set(0,'none');void bar.current.offsetWidth;set(1,`transform ${ms}ms cubic-bezier(.45,.05,.3,1)`)};
const done=()=>{clearTimeout(h.current);set(1,'transform .12s linear');h.current=setTimeout(()=>{if(bar.current)bar.current.parentNode.style.opacity=0},140)};
useEffect(()=>{const a=()=>start(WAIT),b=()=>done();addEventListener('nav-start',a);addEventListener('nav-done',b);start(1000);const t=setTimeout(done,1000);
return()=>{removeEventListener('nav-start',a);removeEventListener('nav-done',b);clearTimeout(t);clearTimeout(h.current)}},[]);
return <div className="tl" aria-hidden="true"><i ref={bar}/></div>}

const nav=[['/','Home',1],['/services','Security Services'],['/quotation','Project Quotation'],['/training','Training'],['/contact','Contact']];
function Dd({n,i,open,setOpen}){const is=open===i;
return <div className={'dd'+(is?' open':'')}><NavLink to={n.to}>{n.l}</NavLink><button type="button" className="dd-t" aria-label={n.l+' menu'} aria-expanded={is} onClick={()=>setOpen(is?-1:i)}><Icon n="chev" s={14}/></button>
<div className="dd-m">{n.items.map(([l,h])=>/^\//.test(h)?<Link key={l} to={h}>{l}</Link>:<a key={l} href={h} {...(h.startsWith('http')?{target:'_blank',rel:'noopener'}:{})}>{l}</a>)}</div></div>}
function Header(){const[o,setO]=useState(false);const[sc,setSc]=useState(false);const[dd,setDd]=useState(-1);const{pathname}=useLocation();
useEffect(()=>{setO(false);setDd(-1)},[pathname]);useEffect(()=>{document.body.style.overflow=o?'hidden':'';if(!o)setDd(-1)},[o]);
useEffect(()=>{const f=()=>setSc(scrollY>24);f();addEventListener('scroll',f,{passive:true});return()=>removeEventListener('scroll',f)},[]);
return <header className={'hdr'+(sc?' sc':'')+(o?' open':'')}><div className="wrap hdr-in"><Link to="/" className="logo" aria-label="The Hacktivists home"><img src="/images/logo.png" alt="The Hacktivists" width="140" height="34"/></Link>
<nav className={'nav'+(o?' open':'')} aria-label="Main">{tree.map((n,i)=>n.items?<Dd key={n.to} n={n} i={i} open={dd} setOpen={setDd}/>:<NavLink key={n.to} to={n.to} end={!!n.end}>{n.l}</NavLink>)}<Btn to="/quotation" className="nav-cta">Get Instant Quote</Btn></nav>
<button className="burger" aria-label="Menu" aria-expanded={o} onClick={()=>setO(!o)}><i/><i/></button></div></header>}

function Footer(){return <footer className="ftr"><div className="wrap"><div className="ftr-cta"><h2>Ready to schedule an audit or get a quotation?</h2><Btn to="/quotation">Quotation Builder<Icon n="arrow" s={18}/></Btn></div>
<div className="ftr-grid"><div className="fb"><img src="/images/logo.png" alt="The Hacktivists" width="140" height="34"/><p>Specialized cybersecurity assessment, penetration testing, digital forensic investigation, and regulatory compliance consulting.</p><p className="mut sm">GSTIN: Registered Enterprise | Udaipur, Rajasthan, India</p></div>
<div><h4>Navigation</h4>{nav.map(([t,l])=><Link key={t} to={t}>{t==='/contact'?'Contact Advisory Desk':l}</Link>)}</div>
<div><h4>Capabilities</h4><Link to="/services#webapp">Web Application VAPT</Link><Link to="/services#api">API Security Testing</Link><Link to="/services#forensic">Digital Forensics</Link><Link to="/services#cloud">Cloud Security Audit</Link><Link to="/services#cloud">ISO 27001 & SOC 2</Link></div>
<div><h4>Resources</h4><Link to="/quotation">Quotation Builder</Link><Link to="/services#methodology">Testing Framework</Link><Link to="/contact">Encrypted Inquiries</Link><Link to="/quotation">Sample Attestation</Link></div>
<div><h4>Direct Desk</h4><span className="k">Email:</span><a href={'mailto:'+site.email}>{site.email}</a><span className="k">Direct Lines:</span><a href={site.tel}>{site.p1}</a><a href={site.tel2}>{site.p2}</a><span className="k">Official Web:</span><a href={site.web} target="_blank" rel="noopener">www.thehacktivists.in</a></div></div>
<div className="fbar"><span>© {new Date().getFullYear()} The Hacktivists. All Rights Reserved.</span><span>{site.tag}</span></div></div></footer>}

function MobileBar(){return <div className="mbar"><a className="btn btn-red" href={site.tel}>Call now</a><a className="btn btn-primary" href={site.wa}>WhatsApp</a></div>}
function Lost(){useReveal();return <section className="phero full"><div className="glow g1"/><div className="wrap"><Tag red>Error 404</Tag><h1 data-w><Words parts={[['Page '],['not found','c']]}/></h1><p className="lead" data-r>That address doesn’t exist or has moved.</p><div className="row" data-r><Btn to="/">Back to home</Btn><Btn to="/services" v="ghost">Security Services</Btn><Btn to="/contact" v="ghost">Contact</Btn></div></div></section>}

/* the old page stays up (fading out) while the line runs, then the new page replaces it exactly when the line completes */
function Shell(){const loc=useLocation();const[shown,setShown]=useState(loc);const[leave,setLeave]=useState(false);const first=useRef(true);
const land=l=>{if(l.hash)setTimeout(()=>document.getElementById(l.hash.slice(1))?.scrollIntoView({behavior:'smooth',block:'start'}),80);else scrollTo(0,0)};
useEffect(()=>{if(first.current){first.current=false;return}
if(loc.pathname===shown.pathname){setShown(loc);dispatchEvent(new Event('nav-done'));land(loc);return}
dispatchEvent(new Event('nav-start'));const a=setTimeout(()=>setLeave(true),Math.max(0,WAIT-380));
const t=setTimeout(()=>{setLeave(false);setShown(loc);land(loc);dispatchEvent(new Event('nav-done'))},WAIT);
return()=>{clearTimeout(a);clearTimeout(t)}},[loc]);
return <main key={shown.pathname} className={'pg'+(leave?' leave':'')}><Suspense fallback={<div className="phero"/>}><Routes location={shown}><Route path="/" element={<Home/>}/><Route path="/services" element={<Services/>}/><Route path="/quotation" element={<Quote/>}/><Route path="/training" element={<Training/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Lost/>}/></Routes></Suspense></main>}

/* cursor spotlight on cards: one delegated listener, rAF-throttled */
function useSpot(){useEffect(()=>{let r=0,e0;const f=()=>{r=0;const c=e0.target.closest&&e0.target.closest('.spot');if(!c)return;const b=c.getBoundingClientRect();c.style.setProperty('--mx',e0.clientX-b.left+'px');c.style.setProperty('--my',e0.clientY-b.top+'px')};
const m=e=>{e0=e;if(!r)r=requestAnimationFrame(f)};addEventListener('pointermove',m,{passive:true});return()=>removeEventListener('pointermove',m)},[])}
function App(){useSpot();return <BrowserRouter><TopLine/><Header/><Shell/><Footer/><MobileBar/></BrowserRouter>}
createRoot(document.getElementById('root')).render(<App/>);
