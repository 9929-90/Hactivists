import React,{useState} from 'react';
import {about} from './data.js';
import {useReveal,Words,Tag,Btn,Icon,TrainContact} from './ui.jsx';
export default function About(){useReveal();const[course,setCourse]=useState('');
return <><section className="phero"><div className="glow g1"/><div className="wrap"><Tag>Our Company</Tag><h1 data-w><Words parts={[['About '],['Us','c']]}/></h1><p className="lead" data-r>{about[0]}</p></div></section>
<section className="sec tight"><div className="wrap split top"><div className="prose-l">{about.slice(1).map((p,i)=><p key={i} data-r style={{'--d':i*90+'ms'}}>{p}</p>)}<div className="row" data-r><Btn href="https://wa.me/919680981337" target="_blank" rel="noopener">Chat with us on WhatsApp by clicking the button<Icon n="arrow" s={18}/></Btn></div></div>
<TrainContact course={course} setCourse={setCourse}/></div></section></>}
