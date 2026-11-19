export const site={name:'Hachtivists',tag:'Hacking | Forensic | Security',email:'info@thehacktivists.in',phone:'+91 96809 81337',tel:'tel:+919680981337',wa:'https://wa.me/919680981337',loc:'Udaipur, Rajasthan, India'};
export const services=[
{id:'webapp',title:'Web Application VAPT',img:'service-pentest',d:'Manual and automated testing for OWASP Top 10, business logic flaws, authorization bypass and account takeover.',tags:['OWASP 2021','Grey/Black Box','Logic Flaws'],from:'₹ 45,000'},
{id:'api',title:'API Security Assessment',img:'service-api',d:'REST, GraphQL and microservice testing for BOLA, broken function-level auth and unrestricted resource use.',tags:['OWASP API 10','GraphQL','BOLA / BFLA'],from:'₹ 35,000'},
{id:'forensic',title:'Digital Forensics & Incident Response',img:'service-forensics',d:'Breach investigation, root-cause analysis, malware reverse engineering and court-admissible evidence.',tags:['Chain of Custody','Root Cause','Memory Forensics'],from:'On request'},
{id:'cloud',title:'Cloud & Infrastructure Security',img:'service-cloud',d:'AWS, Azure and Google Cloud audits against CIS Benchmarks and IAM least-privilege principles.',tags:['AWS / Azure','CIS Benchmarks','CSPM'],from:'₹ 40,000'},
{id:'network',title:'Network Perimeter Testing',img:'service-network',d:'External and internal assessments of firewalls, Active Directory, SSH/VPN access and legacy services.',tags:['NIST SP 800-115','Active Directory','Zero-Day Checks'],from:'₹ 18,000'},
{id:'compliance',title:'Compliance & GRC Consulting',img:'service-compliance',d:'Audit readiness for ISO 27001, SOC 2 Type II, India DPDP Act and PCI-DSS.',tags:['ISO 27001:2022','SOC 2','DPDP Act'],from:'On request'}];
export const steps=[['Scope','We agree targets, rules of engagement and sign the NDA and written authorization.'],['Attack','Manual exploitation with non-destructive methods. No production downtime.'],['Report','Prioritized findings with proof of concept and fix guidance.'],['Retest','One free verification round within 30 days, plus a clearance certificate.']];
export const groups=[
{k:'Resilience',t:'Defense',d:'Round-the-clock monitoring that keeps your assets visible and protected.',items:['Managed Detection & Response','Managed Security Operations','Network Monitoring & Response','Threat Intelligence','Dark Web & Brand Watch','Identity & Access Management','Endpoint Protection','Data Protection','Email Security','Secure Access Service Edge'],img:'soc-team'},
{k:'Mitigation',t:'Risk',d:'Find weaknesses early, rank them, and close them before they cost you.',items:['Third-Party Risk Reviews','Cloud Security Posture','Vulnerability Management','Web & API Penetration Testing','Mobile App Security Testing','Red Team Exercises','Attack & Phishing Simulation','Wireless Testing','Configuration Reviews','Attack Surface Management','OT / ICS Security'],img:'hero-network'},
{k:'Compliance',t:'Assurance',d:'Audit-ready security that meets regulators and earns customer trust.',items:['ISO 27001 Programs','Business Continuity Planning','Privacy & DPDP Act Readiness','Secure Architecture Review','Forensics & Incident Response','Secure Code Review','Virtual CISO','Cybersecurity & IS Audits','Database Security Assessment','SOC Effectiveness Review'],img:'service-compliance'}];
export const five=[['Identify','Map every asset, system and data flow so nothing sits outside your view.'],['Protect','Put safeguards around people, data and systems before attackers arrive.'],['Detect','Spot suspicious activity fast with continuous monitoring.'],['Recover','Bring systems back online and come out stronger after an incident.'],['Respond','Contain the damage, fix the cause and keep stakeholders informed.']];
export const inds=[['Education','Secure learning platforms and student data.'],['Banking','Protect transactions and meet banking rules.'],['Manufacturing','Keep plants and supply chains running safely.'],['Finance','Defend funds, data and customer trust.'],['Government','Safeguard public services and citizen records.'],['Energy','Harden grids and control systems.'],['Healthcare','Shield patient records and connected devices.'],['Insurance','Secure claims, policies and partner links.'],['Media','Guard content, accounts and audiences.'],['Real Estate','Protect deals, documents and portals.'],['Technology','Ship products that stand up to attack.'],['Retail','Secure checkout, loyalty and customer data.'],['Logistics','Protect tracking, fleets and partners.'],['Telecom','Defend networks and subscriber data.']];
export const standards=['OWASP Top 10','OWASP API Top 10','NIST SP 800-115','CIS Benchmarks','ISO 27001:2022','SOC 2 Type II','PCI-DSS','India DPDP Act'];
export const testimonials=[];export const posts=[];
export const slug=n=>n.toLowerCase().replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
const S=(n,s,p)=>[n,s,p.split(';')];
export const sols={
Defense:[S('Managed Detection & Response','Analysts watch your environment around the clock and stop active threats.','Live threat hunting;Fast containment;Monthly impact reports'),
S('Managed Security Operations','A dedicated team runs your daily security tooling and alerts.','Tool tuning and upkeep;Alert triage;Clear service metrics'),
S('Network Monitoring & Response','Constant watch over traffic to catch intrusions and odd behavior.','Traffic anomaly alerts;Rapid isolation steps;Forensic-ready logs'),
S('Threat Intelligence','Timely insight into who targets you and how they operate.','Sector threat briefings;Indicator feeds;Actionable advisories'),
S('Dark Web & Brand Watch','We look for leaked credentials, data sales and brand abuse.','Leak alerts;Takedown support;Impersonation tracking'),
S('Identity & Access Management','Make sure the right people hold the right access, and no more.','Access reviews;MFA rollout;Privileged account control'),
S('Endpoint Protection','Keep laptops, servers and phones defended and monitored.','Policy design;Behavior-based detection;Remote isolation'),
S('Data Protection','Know where sensitive data lives and stop it from leaking.','Data discovery;Encryption guidance;Leak prevention rules'),
S('Email Security','Block phishing, spoofing and malicious attachments.','Spoofing defenses;Phishing filters;Staff awareness tips'),
S('Secure Access Service Edge','Protect remote and branch access through one cloud-delivered model.','Zero-trust access design;Policy consolidation;Safer remote work')],
Risk:[S('Third-Party Risk Reviews','Measure the security of vendors before they touch your data.','Vendor questionnaires;Risk scoring;Remediation tracking'),
S('Cloud Security Posture','Find cloud misconfigurations before attackers do.','AWS, Azure and GCP checks;CIS-based findings;Fix priorities'),
S('Vulnerability Management','A steady cycle of scanning, ranking and fixing weaknesses.','Scheduled scans;Risk-based ranking;Patch follow-up'),
S('Web & API Penetration Testing','Hands-on attacks on your apps and APIs to prove what is exploitable.','OWASP-based testing;Proof of concept for each issue;Free retest'),
S('Mobile App Security Testing','Test Android and iOS apps, their storage and their back ends.','Reverse engineering checks;Insecure storage review;API traffic analysis'),
S('Red Team Exercises','A realistic, goal-driven attack on your people, process and tech.','Custom attack scenarios;Detection gap findings;Executive debrief'),
S('Attack & Phishing Simulation','Safe simulations that show how your defenses and staff respond.','Breach path simulation;Phishing campaigns;Awareness metrics'),
S('Wireless Testing','Check Wi-Fi and wireless devices for rogue access and weak setup.','Rogue access point sweeps;Encryption review;Guest network isolation'),
S('Configuration Reviews','Compare servers, devices and apps against hardening baselines.','Baseline comparison;Drift detection;Hardening guidance'),
S('Attack Surface Management','See your internet-facing assets the way an attacker does.','Asset discovery;Exposure alerts;Shadow IT findings'),
S('OT / ICS Security','Protect plant and industrial systems without disrupting operations.','Safe passive assessment;Network segmentation advice;Incident playbooks')],
Assurance:[S('ISO 27001 Programs','Build and certify an information security management system.','Gap analysis;Policy and control set-up;Audit preparation'),
S('Business Continuity Planning','Plan so the business keeps running through a crisis.','Impact analysis;Recovery plans;Drill support'),
S('Privacy & DPDP Act Readiness','Meet India’s data protection duties and handle personal data properly.','Data mapping;Consent and notice review;Breach response steps'),
S('Secure Architecture Review','Catch design flaws before they become expensive to fix.','Threat modeling;Design review;Control recommendations'),
S('Forensics & Incident Response','Investigate breaches and preserve evidence that stands up in court.','Rapid triage;Root-cause analysis;Chain-of-custody evidence'),
S('Secure Code Review','Developers and security experts read your code together for flaws.','Manual and tool-based review;Fix guidance;Secure coding tips'),
S('Virtual CISO','Senior security leadership on a flexible schedule.','Security roadmap;Board reporting;Vendor and policy oversight'),
S('Cybersecurity & IS Audits','Independent audits of your controls against recognized standards.','Control testing;Evidence review;Audit-ready reports'),
S('Database Security Assessment','Review access, encryption and configuration of your databases.','Privilege review;Encryption checks;Activity monitoring advice'),
S('SOC Effectiveness Review','Test whether your security operations center catches real attacks.','Detection testing;Process review;Improvement plan')]};
groups.forEach(g=>g.items=sols[g.t].map(x=>x[0]));
export const findSol=(g,s)=>{const l=sols[g]&&sols[g].find(x=>slug(x[0])===s);return l&&{n:l[0],s:l[1],p:l[2],g}};
