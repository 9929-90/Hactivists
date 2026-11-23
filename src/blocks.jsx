import React from 'react';
import {company,NUM1,NUM2,tel} from './data.js';
import {Icon,WaIcon,Tag} from './ui.jsx';
import Motion from './Motion.jsx';
import {OVERVIEW} from './data/overview.js';
export const Direct=()=><div className="direct"><a className="card spot" data-r href={tel(NUM1)}><div className="ico"><Icon n="phone"/></div><div><small>CALL • LINE 1</small><b className="num">{NUM1}</b></div></a><a className="card spot" data-r style={{'--d':'80ms'}} href={tel(NUM2)}><div className="ico"><Icon n="phone"/></div><div><small>CALL • LINE 2</small><b className="num">{NUM2}</b></div></a><a className="card spot" data-r style={{'--d':'160ms'}} href={company.contact.whatsapp} target="_blank" rel="noopener noreferrer"><div className="ico"><WaIcon s={22}/></div><div><small>WHATSAPP</small><b className="num">{NUM1}</b></div></a><a className="card spot" data-r style={{'--d':'240ms'}} href={'mailto:'+company.contact.emails[0]}><div className="ico"><Icon n="mail"/></div><div><small>EMAIL</small><b>{company.contact.emails[0]}</b></div></a></div>;
const HUB=['HQ • Lead Audit • Cloud Range Labs','Enterprise Client Desk • Western Region','VAPT • Cyber Range • Training Center'];
export const Offices=()=><div className="cards offices">{company.offices.map((o,i)=><article className="card spot" key={o.name} data-r style={{'--d':i*80+'ms'}}><div className="tag"><Icon n="building" s={16}/>{o.name}</div><h3>{o.building}</h3><p>{o.address}</p><div className="hub-tag">{HUB[i]}</div></article>)}</div>;

export const Overview=({id,alt})=>{const o=OVERVIEW[id];if(!o)return null;return <section className={'sec'+(alt?' alt':'')}><div className="wrap ov"><div className="ov-t" data-r><Tag>OVERVIEW</Tag><h2>{o.h}</h2>{o.p.map((t,i)=><p key={i} className={i===o.p.length-1?'ov-last':''}>{t}</p>)}</div><div className="ov-g panel" data-r><Motion kind={o.kind}/></div></div></section>};
