//tealium universal tag - utag.2052 ut4.0.202101070418, Copyright 2021 Tealium.com Inc. All Rights Reserved.
var InvocaTagId="1299"+"/"+"0084722918";try{(function(id,loader){var u={"id":id};utag.o[loader].sender[id]=u;if(utag.ut===undefined){utag.ut={};}
var match=/ut\d\.(\d*)\..*/.exec(utag.cfg.v);if(utag.ut.loader===undefined||!match||parseInt(match[1])<41){u.loader=function(o,a,b,c,l,m){utag.DB(o);a=document;if(o.type=="iframe"){m=a.getElementById(o.id);if(m&&m.tagName=="IFRAME"){b=m;}else{b=a.createElement("iframe");}o.attrs=o.attrs||{};utag.ut.merge(o.attrs,{"height":"1","width":"1","style":"display:none"},0);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";}if(o.id){b.id=o.id;}for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState=="complete"||this.readyState=="loaded"){this.onreadystatechange=null;o.cb();}};}}if(o.type!="img"&&!m){l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}}};}else{u.loader=utag.ut.loader;}
if(utag.ut.typeOf===undefined){u.typeOf=function(e){return({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase();};}else{u.typeOf=utag.ut.typeOf;}
u.ev={"view":1};u.scriptrequested=false;u.map={};u.extend=[function(a,b){try{if(1){(function(i,n,v,o,c,a){i.InvocaTagId=o;var s=n.createElement('script');s.type='text/javascript';s.async=true;s.src=('https:'===n.location.protocol?'https://':'http://')+v;var fs=n.getElementsByTagName('script')[0];fs.parentNode.insertBefore(s,fs);})(window,document,'solutions.invocacdn.com/js/invoca-latest.min.js','1299/0084722918');}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){utag.DB("send:2052");utag.DB(b);var c,d,e,f;u.data={"qsp_delim":"&","kvp_delim":"=","base_url":"//solutions.invocacdn.com/js/pnapi_integration-latest.min.js","network_id":"1299","tag_id":"0084722918"};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};utag.DB("send:2052:EXTENSIONS");utag.DB(b);for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
console.log('UTAG.DATA in Invoca Tag Template:');console.log(u.data);console.log('utag_2052');utag.DB("send:2052:MAPPINGS");utag.DB(u.data);if(!u.data.network_id){utag.DB(u.id+": Tag not fired: Required attribute not populated");return;}
if(!u.scriptrequested){u.scriptrequested=true;u.loader({"type":"script","src":u.data.base_url,"cb":null,"loc":"script","id":"utag_2052","attrs":{}});}
utag.DB("send:2052:COMPLETE");}};utag.o[loader].loader.LOAD(id);}("2052","mdanderson.mdandersonorg"));}catch(error){utag.DB(error);}