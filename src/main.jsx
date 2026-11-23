import React,{useEffect,useRef,useState,lazy,Suspense} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter,Routes,Route,useLocation} from 'react-router-dom';
import {NotFound} from './ui.jsx';
import {Header,Footer,MobileBar,Overlays} from './layout.jsx';
import Home from './Home.jsx';
const L=n=>lazy(()=>import('./Pages.jsx').then(m=>({default:m[n]})));const About=L('About'),Contact=L('Contact'),ServicesList=L('ServicesList'),Solutions=L('Solutions');
import './styles.css';
const WAIT=1000;
const ServicePage=lazy(()=>import('./ServicePage.jsx')),Catalog=lazy(()=>import('./Training.jsx').then(m=>({default:m.Catalog}))),Detail=lazy(()=>import('./Training.jsx').then(m=>({default:m.Detail})));
import('./ServicePage.jsx');import('./Training.jsx');import('./Pages.jsx'); /* warm chunks so a page renders the instant the wait ends */

function TopLine(){const bar=useRef(),h=useRef(0);
const set=(p,tr)=>{const b=bar.current;if(!b)return;b.style.transition=tr;b.style.transform=`scaleX(${p})`};
const start=ms=>{clearTimeout(h.current);bar.current.parentNode.style.opacity=1;set(0,'none');void bar.current.offsetWidth;set(1,`transform ${ms}ms cubic-bezier(.45,.05,.3,1)`)};
const done=()=>{clearTimeout(h.current);set(1,'transform .12s linear');h.current=setTimeout(()=>{if(bar.current)bar.current.parentNode.style.opacity=0},140)};
useEffect(()=>{const a=()=>start(WAIT),b=()=>done();addEventListener('nav-start',a);addEventListener('nav-done',b);start(1000);const t=setTimeout(done,1000);
return()=>{removeEventListener('nav-start',a);removeEventListener('nav-done',b);clearTimeout(t);clearTimeout(h.current)}},[]);
return <div className="tl" aria-hidden="true"><i ref={bar}/></div>}

/* the old page fades out while the line runs, then the new page replaces it exactly when the line completes */
function Shell(){const loc=useLocation();const[shown,setShown]=useState(loc);const[leave,setLeave]=useState(false);const first=useRef(true);
const land=l=>{if(l.hash)setTimeout(()=>{const e=document.getElementById(l.hash.slice(1));if(!e)return;e.scrollIntoView({behavior:'smooth',block:'start'});e.classList.add('hit');setTimeout(()=>e.classList.remove('hit'),2200)},120);else scrollTo(0,0)};
useEffect(()=>{if(first.current){first.current=false;return}
if(loc.pathname===shown.pathname){setShown(loc);dispatchEvent(new Event('nav-done'));land(loc);return}
dispatchEvent(new Event('nav-start'));const a=setTimeout(()=>setLeave(true),Math.max(0,WAIT-380));
const t=setTimeout(()=>{setLeave(false);setShown(loc);land(loc);dispatchEvent(new Event('nav-done'))},WAIT);
return()=>{clearTimeout(a);clearTimeout(t)}},[loc]);
return <main key={shown.pathname} className={'pg'+(leave?' leave':'')}><Suspense fallback={<div className="phero"/>}><Routes location={shown}><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/contact" element={<Contact/>}/><Route path="/services" element={<ServicesList/>}/><Route path="/solutions" element={<Solutions/>}/><Route path="/services/:id" element={<ServicePage/>}/><Route path="/training" element={<Catalog/>}/><Route path="/training/:id" element={<Detail/>}/><Route path="*" element={<NotFound/>}/></Routes></Suspense></main>}

/* cursor spotlight on cards: one delegated listener, rAF-throttled */
function useSpot(){useEffect(()=>{let r=0,e0;const f=()=>{r=0;const c=e0.target.closest&&e0.target.closest('.spot');if(!c)return;const b=c.getBoundingClientRect();c.style.setProperty('--mx',e0.clientX-b.left+'px');c.style.setProperty('--my',e0.clientY-b.top+'px')};
const m=e=>{e0=e;if(!r)r=requestAnimationFrame(f)};addEventListener('pointermove',m,{passive:true});return()=>removeEventListener('pointermove',m)},[])}
function App(){useSpot();return <BrowserRouter><TopLine/><Header/><Shell/><Footer/><MobileBar/><Overlays/></BrowserRouter>}
createRoot(document.getElementById('root')).render(<App/>);
