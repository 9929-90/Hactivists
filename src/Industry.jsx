import React,{useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
/* Isometric glossy tiles (light face, navy edge, cyan glow) so each icon stands out on the dark page. */
const GL={
Manufacturing:'M3 21V11l6 4v-4l6 4V5h3v16zM7 18h.01M11 18h.01M15 18h.01',
Finance:'M12 3a9 9 0 100 18 9 9 0 000-18zM12 7v10M14.8 9.6c-.6-.9-1.6-1.2-2.8-1.2-1.5 0-2.7.8-2.7 2s1.1 1.6 2.7 1.9 2.7.7 2.7 1.9-1.2 2-2.7 2c-1.2 0-2.2-.4-2.9-1.3',
Government:'M12 3v3M8 11a4 4 0 018 0M6 11h12M7.5 11v7M12 11v7M16.5 11v7M4 21h16M5 18h14',
Energy:'M13 2L4 14h7l-1 8 9-12h-7z',
Healthcare:'M12 21s-7-4.5-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.5-7 10-7 10zM7 12h3l1.5-3 2 5 1.5-2h2',
Insurance:'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM8.5 12l2.5 2.5 4.5-5',
Media:'M3 5h18v12H3zM10 8.5v5l4.5-2.5zM8 21h8M12 17v4',
'Real Estate':'M3 11l9-8 9 8M5 10v11h14V10M10 21v-6h4v6',
Technology:'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
Retail:'M5 8h14l-1 12H6zM9 8a3 3 0 016 0M9 12v1M15 12v1'};
export function IsoIcon({name,id}){return <svg className="iso" viewBox="0 0 160 140" width="150" height="131" aria-hidden="true">
<defs><linearGradient id={'t'+id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ffffff"/><stop offset="1" stopColor="#d6f1ff"/></linearGradient><radialGradient id={'g'+id}><stop offset="0" stopColor="#00AEEF" stopOpacity=".55"/><stop offset="1" stopColor="#00AEEF" stopOpacity="0"/></radialGradient></defs>
<ellipse cx="80" cy="112" rx="62" ry="16" fill={`url(#g${id})`}/>
<path d="M80 46L148 78Q156 82 148 87L88 116Q80 120 72 116L12 87Q4 82 12 78z" fill="#0b2f7a"/>
<path d="M80 22L148 62Q156 66 148 71L88 100Q80 104 72 100L12 71Q4 66 12 62z" fill={`url(#t${id})`} stroke="#0b2f7a" strokeWidth="1.5" strokeLinejoin="round"/>
<g transform="translate(58 36) scale(1.9)" fill="none" stroke="#0b2f7a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d={GL[name]||GL.Insurance}/></g></svg>}
export function IndustryMarquee({items}){const tr=useRef(),box=useRef(),hold=useRef(false);
useEffect(()=>{const el=tr.current;if(!el)return;if(matchMedia('(prefers-reduced-motion:reduce)').matches){box.current.style.overflowX='auto';return}
let x=0,last=performance.now(),raf=0,half=el.scrollWidth/2;const SPEED=60; /* px per second, advanced by real frame time so it stays smooth at any refresh rate */
const ro=new ResizeObserver(()=>{half=el.scrollWidth/2});ro.observe(el);
const f=t=>{const dt=Math.min(t-last,64)/1000;last=t;if(!hold.current&&!document.hidden){x-=SPEED*dt;if(-x>=half)x+=half;el.style.transform=`translate3d(${x}px,0,0)`}raf=requestAnimationFrame(f)};
raf=requestAnimationFrame(f);return()=>{cancelAnimationFrame(raf);ro.disconnect()}},[]);
const row=(k)=>items.map(([n,d],i)=><Link key={k+n} to="/contact" state={{note:n}} className={'ind'+(i%2?' lo':'')} aria-hidden={k==='b'||undefined} tabIndex={k==='b'?-1:undefined}><span className="ind-n">{String(i+1).padStart(2,'0')}</span><IsoIcon name={n} id={k+i}/><h3>{n}</h3><i className="ind-u"/><p>{d}</p></Link>);
return <div className="marq" ref={box} onMouseEnter={()=>hold.current=true} onMouseLeave={()=>hold.current=false} onFocus={()=>hold.current=true} onBlur={()=>hold.current=false} aria-label="Industries we protect"><div className="marq-t" ref={tr}>{row('a')}{row('b')}</div></div>}
