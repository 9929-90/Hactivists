import React,{useEffect,useRef,useState} from 'react';
import {Link} from 'react-router-dom';
import {iconOf} from './data.js';
import {Icon} from './ui.jsx';
import {openDemo} from './bus.js';
const anim=(pop,i)=>pop?{}:{'data-r':'',style:{'--d':(i%3)*80+'ms'}};
export function SvcCard({s,i=0,pop}){const[open,setOpen]=useState(false);const subs=s.subServices||[];
return <article className={'card spot svc'+(pop?' pop':'')} {...anim(pop,i)}><div className="svc-top"><div className="ico"><Icon n={iconOf(s)}/></div><span className="badge">{s.badge}</span></div>
<h3><Link className="stretch" to={'/services/'+s.id}>{s.title}</Link></h3><p>{s.summary}</p>
{subs.length>0&&<div className="subbox"><button type="button" className="vbtn" aria-expanded={open} onClick={()=>setOpen(!open)}><span><Icon n="layers" s={16}/>Select VAPT Scope ({subs.length})</span><Icon n="chev" s={16}/></button>
{open&&<div className="vlist">{subs.map(x=><Link key={x.id} to={'/services/'+x.id}><span><Icon n={iconOf(x)} s={16}/>{x.title}</span><Icon n="right" s={14}/></Link>)}</div>}</div>}
<div className="card-f"><span><Icon n="clock" s={15}/>{s.timeline}</span><span className="more">Explore Service<Icon n="right" s={16}/></span></div></article>}
export function TCard({t,i=0,pop}){
return <article className={'card spot tcard'+(pop?' pop':'')} {...anim(pop,i)}><div className="t-top"><div className="t-l"><div className="ico sm"><Icon n="terminal" s={16}/></div>{t.code&&<span className="code">{t.code}</span>}</div>{t.price&&<span className="price">From {t.price}</span>}</div>
<span className="badge">{t.badge}</span><h3>{t.title}</h3><p>{t.summary}</p>
<div className="t-meta"><span><Icon n="clock" s={15}/>{t.duration}</span><span>{t.level||'Intermediate'}</span></div>
<div className="t-btns"><Link className="btn btn-primary btn-sm" to={'/training/'+t.id}>CHECK NOW<Icon n="right" s={16}/></Link><button type="button" className="btn btn-ghost btn-sm" onClick={()=>openDemo(t)}><Icon n="spark" s={16}/>FREE DEMO</button></div></article>}

const IND={Manufacturing:'server',Finance:'lock',Government:'building',Energy:'zap',Healthcare:'activity',Insurance:'shieldcheck',Media:'radio',"Real Estate":'compass',Technology:'terminal',Retail:'users'};
export function Slider({items}){const ref=useRef();const hold=useRef(false);
const by=d=>{const el=ref.current;if(!el)return;const w=el.firstChild.offsetWidth+16;if(d>0&&el.scrollLeft+el.clientWidth>=el.scrollWidth-4)el.scrollTo({left:0,behavior:'smooth'});else el.scrollBy({left:d*w,behavior:'smooth'})};
useEffect(()=>{if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;const t=setInterval(()=>{if(!hold.current&&!document.hidden)by(1)},4200);return()=>clearInterval(t)},[]);
return <div className="slider-w" onMouseEnter={()=>hold.current=true} onMouseLeave={()=>hold.current=false} onFocus={()=>hold.current=true} onBlur={()=>hold.current=false} onTouchStart={()=>hold.current=true}>
<div className="slider-c"><button type="button" aria-label="Previous industries" onClick={()=>by(-1)}><Icon n="back" s={18}/></button><button type="button" aria-label="Next industries" onClick={()=>by(1)}><Icon n="arrow" s={18}/></button></div>
<div className="slider" ref={ref} tabIndex={0} aria-label="Industries we protect">{items.map(([n,d],i)=><article className="slide card spot" key={n}><div className="svc-top"><div className="ico"><Icon n={IND[n]||'shield'}/></div><span className="idx">{String(i+1).padStart(2,'0')}</span></div><h3>{n}</h3><p>{d}</p><Link className="more" to="/contact" state={{note:n}}>Learn More<Icon n="right" s={16}/></Link></article>)}</div></div>}
