import {company} from './data.js';
export const emit=(n,d)=>dispatchEvent(new CustomEvent(n,{detail:d}));
export const notify=(title,body)=>emit('toast',{title,body});
export const openConsult=()=>emit('consult');
export const openDemo=t=>emit('demo',t);
/* these forms have no server: they hand the request to the visitor's email app */
export const mailto=(subject,rows,to=company.contact.emails[0])=>{location.href=`mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(rows.map(([k,v])=>`${k}: ${v||''}`).join('\n'))}`};
