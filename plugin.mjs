var __DEFINE_API__=function(l){"use strict";var St=Object.defineProperty,Ot=Object.defineProperties;var Nt=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var Dt=Object.prototype.hasOwnProperty,Lt=Object.prototype.propertyIsEnumerable;var Z=(l,d,i)=>d in l?St(l,d,{enumerable:!0,configurable:!0,writable:!0,value:i}):l[d]=i,F=(l,d)=>{for(var i in d||(d={}))Dt.call(d,i)&&Z(l,i,d[i]);if(rt)for(var i of rt(d))Lt.call(d,i)&&Z(l,i,d[i]);return l},ot=(l,d)=>Ot(l,Nt(d));var J=(l,d,i)=>(Z(l,typeof d!="symbol"?d+"":d,i),i);const d=[];for(let t=0;t<256;++t)d.push((t+256).toString(16).slice(1));typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);function i(t){try{const{pathname:e,search:n}=new URL(t);return`${e}${n}`}catch(e){return t}}function S(t,e){const n=i(t.attr("href")),a=t.text().trim();return{path:n,name:e?e(a):a}}function b(t){t=t.trim().toLowerCase().replace(".","");const e=parseFloat(t);if(Number.isNaN(e))return null;switch(t[t.length-1]){case"k":return e*1e3;case"m":return e*1e6;case"g":return e*1e9;default:return e}}function T(t,e){return t=t.trim().toLowerCase(),t.endsWith("giây trước")?e-parseInt(t)*1e3:t.endsWith("phút trước")?e-parseInt(t)*1e3*60:t.endsWith("giờ trước")?e-parseInt(t)*1e3*60*60:t.endsWith("ngày trước")?e-parseInt(t)*1e3*60*60*24:t.endsWith("tháng trước")?e-parseInt(t)*1e3*60*60*24*30:t.endsWith("năm trước")?e-parseInt(t)*1e3*60*60*24*365:new Date(t.replace(/^(\d{1,2}):(\d{1,2}) (\d{1,2})\/(\d{1,2})(\/\d{2,4})?$/,(n,a,r,c,o,s)=>{var m;return`${a}:${r}:00 ${o}/${c}/${(m=s==null?void 0:s.slice(1))!=null?m:new Date(e).getFullYear()}`})).getTime()||new Date(t.replace(/^(\d{1,2})\/(\d{1,2})\/(\d{1,})$/,"$2/$1/$3")).getTime()}const ct=/^Chương|Chapter|Chap\.?\s+/i;function D(t){return t.replace(ct,"").trim()}function tt(t,e=!0){const{pathname:n,search:a}=new URL(t,"http://localhost");return(!n||n==="/"||n==="/index"||n==="/index.html")&&(!e||!a)}function W(t){return t.startsWith("http://")?`https${t.slice(4)}`:t.startsWith("//")?`https:${t}`:t}function st(t){return Object.assign(self,{__DEFINE_API__:t}),t}function it(t){return Object.assign(self,{__DEFINE_PACKAGE__:t}),t}const _="https://www.nettruyenus.net";let V;function B(t,e){return AppInfo.extension?`${t}#nettruyen_extra`:AppInfo.mode==="capacitor"?`${t}#${V!=null?V:V=JSON.stringify(L)}`:`https://proxy.mangaraiku.eu.org/?url=${encodeURIComponent(t.slice(t.indexOf(".")+1).split("/",1)[0]==="googleusercontent.com"?t:`https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image%2F*&url=${encodeURIComponent(t)}`)}&headers=${encodeURIComponent(JSON.stringify(e))}`}const x=it({id:"nettruyen",name:"Net Truyen",favicon:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAKpUExURa+WENi3ANKxAdOyAdS0BM+tALaqZv7////++LanVdKvANOzBNGxAdm4AK+VBM2yDf/iAf3bA//cA/7bBP/jANGzDNjY2/////n8/8a1Uv/cAP7cBv3aA//jA9CzAsqqEf/XBfrPB/vRBvzSCvfNAL2vavv9/8SwUv7RAPrRCvnPBv/YB82qBcqoFP/UCfrNC/zOC//VCtKvDtnY1MOtUP/OAPvODv/VC82oCcmlF//QDvnJD/rKD/vLEPvLE/fFAMCtZvj+/8SsUP7KAfnKEvjID//QEMylDMihG//LEvfEFPjFFPnGFPTCEvfFFP/LE9SqEdLV4cqxXPvEBPjFF//MFMuhEMeeH/7GGPXAGf/HGbOOGd+vGP3GHfa8B7mpdMCpYvvACfbBHP/HGsmdFMWaIvzBHfO7HvO7IP2/FLSYTLeaSfy+FfzBHs6iJp6AL//DGvO6H/O6Hv3CH8iZGcSWJvu8I/K2JPK3Jva1FsmqXr+7sOOnFPi8J/C0ItSfHPa5JPO2I/K2I/u9JcaVHcOSKvm3KPCxKfGyK/WxHsWhVeXt/8KbRfi0Ifa2KvGxKfKyKfCxKPq4KsWRIcGPLveyLe6tLu+uMPStI76aVf3//8e8pt+dHvSxMe6sLfCuLvCuLfizL8SOJcCMMfauMu2oMu6pNPKoKL6ZWvz//+3w9r6TSPWrLO2pM++pMu6pMu2oMfavM8KKKb+JNvOpN+qkN+umOu+jLr6ZYPf7/7+zoN2VJvCqPOulN+ylN/SrOcGHLsCEL/qoNPGiM/GjNfahKb2UXPf9/+jt87mJRPikLvKjM/qoNcaFKq2JWsKSUr+RU8CSVb6MSraefv79+8W6q7iISMGTVb6QU8OTU6iDUPX5/u/1/fD2/fj6/v///vz9/vD1/fP3/cP3IHIAAAABYktHRBcL1piPAAAAB3RJTUUH5wkSBwYgWO7tNAAAARtJREFUGNMBEAHv/gAAAQIDBAUGBwgHCQoLDA0OAA8QERITFBUWFxgZGhscHR4AHyAhIiIjJCUHJicoKSorLAAtLi8wMC8xMjMXNDU2Lzc4ADk6Ozw8PT4/QEFCQ0RFRkcASElKS0xNTk9QUVJTVEpVVgBXWFlZWltcXV5fYGFiWWNkAGVmZ2hpamtsbW5vcHFyc3QAdXZ3eHl6e3x9fn+AgYKDhACFhoeIiYqLjI2Ijo+QkZKTAJSVlpeYmZqbnJ2en6CeoaIAo6SlpqeoqaqrrK2ur7CxsgCztLW2t7i5F7q7vL2+tb/AAMHCw8TFxscXyMnKxMvDzM0Azs/Q0dLTB9QX1dbX0NjZ2gDb3N3d3N4XF9/g3d3d3eHinyRwGnuYBAsAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDktMThUMDc6MDY6MzIrMDA6MDB2b2K2AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTA5LTE4VDA3OjA2OjMyKzAwOjAwBzLaCgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wOS0xOFQwNzowNjozMiswMDowMFAn+9UAAAAASUVORK5CYII=",version:"0.1.18",description:"Plugin nguồn Net Truyen",author:"Tachibana Shin <tachibshin@duck.com>",homepage:"https://github.com/manga-raiku/raiku-plugin-nettruyen",isNSFW:!1,language:"vi",support:!0,supportGetMode:!0,updatedAt:1706351349967});function z(t){return Object.fromEntries(new URLSearchParams(t.slice((t.indexOf("?")>>>0)+1)).entries())}function et(t){const e=t.indexOf("/tim-truyen/")+12;return t.slice(e,t.indexOf("?",e)>>>0).replace(/\/$/,"").replace(/\/$/,"_")}function $(t){var e,n,a;return W((a=(n=(e=t.attr("data-src"))!=null?e:t.attr("data-original"))!=null?n:t.attr("data-cdn"))!=null?a:t.attr("src"))}function H(t){const e=t.indexOf("/truyen-tranh/")+14;return t.slice(e,t.indexOf("?",e)>>>0).replace(/-\d{4,}$/,"")}function k(t){const e=t.indexOf("/truyen-tranh/")+14,n=t.slice(e,t.indexOf("/",e)).replace(/-\d{4,}$/,""),a=t.slice(e+n.length+1,t.indexOf("/",(t.indexOf("/",e+n.length+1)>>>0)+1)>>>0).replace(/^\w+-/i,"").replace(/\//g,"-i");return{comic:n,chap:a}}function j(t,e,n){return t(e.toArray().find(a=>!!t(a).text().trim().startsWith(n))).text().trim().slice(n.length).trim()}function Y(t,e,n){const a=$(e.find("img")),r={name:"comic",params:{sourceId:x.id,comic:H(i(e.find("a").attr("href")))}},c=e.find("h3").text().trim(),o=e.find(".message_main p"),s=j(t,o,"Tên khác:"),m=j(t,o,"Thể loại:").split(",").map(p=>p.trim()).filter(Boolean),h=j(t,o,"Tình trạng:"),g=j(t,o,"Tác giả:"),v=e.find(".box_text").text(),I=e.find("h3 + a, .chapter a").toArray().map(p=>{const w=t(p),U=S(w),O=w.next(),R={name:"comic chap",params:F({sourceId:x.id},k(U.path))};return{id:parseInt(w.attr("href").match(/(\d+)\/?$/)[1])+"",route:R,name:D(U.name),updated_at:O.is(".time")&&O.text()?T(O.text(),n):null,views:null}}),[f,A,u]=e.find(".pull-left").text().trim().split(" ").filter(Boolean).map(p=>b(p)),y=t(".icon.icon-hot").length>0?"Hot":null;return{image:a,route:r,name:c,othername:s,tags:m,status:h,author:g,description:v,last_chapters:I,views:f,comments:A,likes:u,label:y}}function X(t,e){var f;const n=parseDom(t),a=n("#ctl00_mainContent_ctl00_divBasicFilter > h1 > strong").text().trim(),r=n("#ctl00_mainContent_ctl00_divDescription").text(),c={type:"Thể loại",select:n("#ctl00_divRight > div > div > ul > li > a").toArray().map(A=>{const u=n(A),y=i(u.attr("href")),p={name:"genre",params:{sourceId:x.id,type:et(y)},query:z(y)},w=u.text();return{route:p,name:w}})},o={type:"Trạng thái",key:"status",items:n("#ctl00_mainContent_ctl00_ulStatus a").toArray().map(A=>{const{name:u,path:y}=S(n(A)),p=new URL(y,"http://localhost").searchParams.get("status");return{name:u,value:p}})},s={type:"Sắp xếp",key:"sort",items:n("#ctl00_mainContent_ctl00_divSort a").toArray().map(A=>{const{name:u,path:y}=S(n(A)),p=new URL(y,"http://localhost").searchParams.get("sort");return{name:u,value:p}})},m=[c,o,s],h=n("#ctl00_divCenter > div.Module.Module-170 .item, .items .item").toArray().map(A=>Y(n,n(A),e)),g=parseInt(n("#ctl00_mainContent_ctl01_divPager .active").text().trim()),v=Number.isNaN(g)?1:g,I=g?parseInt((f=new URL(n("#ctl00_mainContent_ctl01_divPager a").last().attr("href"),"http://localhost").searchParams.get("page"))!=null?f:"1"):1;return{name:a,description:r,filters:m,items:h,curPage:v,maxPage:I}}async function nt(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1));const a=new URL(t,"http://localhost");a.searchParams.set("page",e+"");for(const c in n)a.searchParams.set(c,n[c]+"");const{data:r}=await get({url:`${_}/${a.pathname}?${a.searchParams+""}`,method:void 0,cache:void 0,integrity:void 0,keepalive:void 0,redirect:void 0,referrerPolicy:void 0,window:void 0});return X(r,Date.now())}async function mt(t){const{data:e}=await get({url:`${_}/Comic/Services/ComicService.asmx/ProcessChapterList?comicId=${t}`});return JSON.parse(e).chapters.map(n=>{const a={name:"comic chap",params:F({sourceId:x.id},k(i(n.url)))};return{id:n.chapterId+"",name:D(n.name),route:a,updated_at:null,views:null}})}function dt(t,e){const n=parseDom(t),a=n("#ctl00_divAlt1 .item").toArray().map(o=>Y(n,n(o),e)),r=n("#ctl00_divCenter .item").toArray().map(o=>Y(n,n(o),e)),c=n("#topMonth li").toArray().map(o=>{const s=n(o),m=$(s.find("img")),h={name:"comic",params:{sourceId:x.id,comic:H(i(s.find("a").attr("href")))}},g=s.find("h3").text().trim(),{path:v,name:I}=S(s.find(".chapter a")),f={route:{name:"comic chap",params:F({sourceId:x.id},k(v))},name:D(I),updated_at:b(s.find(".chapter .view").text().trim())};return{image:m,route:h,name:g,last_chapter:f}});return{recommend:a,last_update:r,top:c}}async function ut(){const[t,e]=await Promise.all([get({url:_}).then(n=>dt(n.data,Date.now())),get({url:`${_}/tim-truyen?status=-1&sort=13`}).then(n=>X(n.data,Date.now()))]);return{sliders:e.items.slice(0,7),hot:e.items.slice(7),last_update:t.last_update}}function pt(t){const e=parseDom(t);return e("li").toArray().map(n=>{const a=e(n),r={name:"comic",params:{sourceId:x.id,comic:H(i(a.find("a").attr("href")))}},c=a.find("h3").text().trim(),o=$(a.find("img")),s=a.find("h4 i"),m=D(s.first().text()),h=s.length>2?s.eq(1).text().trim():"",g=s.last().text().split(",").map(v=>v.trim()).filter(Boolean);return{route:r,name:c,image:o,last_chapter:m,othername:h,tags:g}})}async function lt(t,e){const{data:n}=await get({url:`${_}/Comic/Services/SuggestSearch.ashx?q=${encodeURIComponent(t)}&page=${e}`});return pt(n)}async function ht(t,e){const{data:n}=await get({url:`${_}/tim-truyen?keyword=${encodeURIComponent(t)}&page=${e}`});return X(n,Date.now())}function q(t,e,n){var v,I;const a=parseInt(e.attr("id").match(/\d+/)[0]),r=(I=(v=e.find(".member > .progress-bar").attr("style"))==null?void 0:v.match(/width:\s*(\d+)/))==null?void 0:I[1],c={avatar:$(e.find(".avatar img")),name:e.find(".authorname").text().trim(),level:{current:parseInt(e.find(".member > span:eq(0)").attr("data-level")),perNext:r?parseFloat(r):null},chapter:D(e.find(".cmchapter").text().trim())};e.find(".comment-content img").each((f,A)=>{const u=t(A);u.attr("src",$(u))});const o=e.find(".comment-content").html(),s=parseInt(e.find(".vote-up-count").text()),m=parseInt(e.find(".vote-down-count").text()),h=T(e.find("abbr:eq(0)").text(),n),g=e.find(".item.child").toArray().map(f=>q(t,e.find(f),n));return{id:a,author:c,content:o,like:s,dislike:m,created_at:h,repiles:g}}function gt(t,e){var R,E,K,G;const n=parseDom(t),a=n("#item-detail"),r=a.find("h1").text().trim(),c=parseInt((E=(R=t.match(/gOpts\.comicId=(\d+)/))==null?void 0:R[1])!=null?E:""),o=T(a.find("time").text().trim().slice(16,-1),e),s=$(n("#item-detail > div.detail-info > div > div.col-xs-4.col-image > img")),m=a.find(".othername p:not(.name)").text().trim(),h=a.find(".author p:not(.name)").find("a").toArray().map(P=>{const{name:C,path:M}=S(n(P)),N={name:"author",params:{sourceId:x.id,type:""},query:z(M)};return{name:C,route:N}}),g=a.find(".status p:not(.name)").text().trim(),v=a.find(".kind p:not(.name)").find("a").toArray().map(P=>{const{name:C,path:M}=S(n(P)),N={name:"genre",params:{sourceId:x.id,type:et(M)},query:z(M)};return{name:C,route:N}}),I=b(a.find(".kind").next().find("p:not(.name)").text().replace(/\./g,"")),f=a.find("span[itemprop=aggregateRating]"),A={cur:parseFloat(f.find("[itemprop=ratingValue]").text()),max:parseFloat(f.find("[itemprop=bestRating]").text()),count:parseInt(f.find("[itemprop=ratingCount]").text())},u=b(n(".follow b").text()),y=n(".detail-content p").text(),p=n("#nt_listchapter .chapter").toArray().map(P=>{const C=n(P),{path:M,name:N}=S(C.find("a")),Q={name:"comic chap",params:F({sourceId:x.id},k(M))},wt=parseInt(C.find("a").attr("data-id"))+"",Pt=T(C.next().text(),e)||null,Mt=b(C.next().next().text().trim());return{id:wt,route:Q,name:D(N),updated_at:Pt,views:Mt}}),w=n("#nt_comments .comment-list .item").toArray().map(P=>q(n,n(P),e)),U=parseInt(n(".comment-count").text()),O=parseInt((G=(K=n("#ctl00_mainContent_divPager > ul > li:nth-child(14) > a").last().attr("href"))==null?void 0:K.slice(1))!=null?G:"1")||1;return{name:r,othername:m,manga_id:c+"",updated_at:o,image:s,author:h,status:g,genres:v,views:I,likes:null,rate:A,follows:u,description:y,chapters:p,comments:w,comments_count:U,comments_pages:O}}async function ft(t){const{data:e,url:n}=await get({url:`${_}/truyen-tranh/${t}`});if(tt(n))throw new Error("not_found");return gt(e,Date.now())}function At(t,e){var u,y,p,w,U,O,R,E;const n=parseDom(t),a=n("#ctl00_Head1 > meta:nth-child(12)").attr("content"),r=n("h1").text().split("-").slice(0,-1).join("-").trim(),c={name:"comic",params:{sourceId:x.id,comic:H(S(n("#ctl00_divCenter > div > div:nth-child(1) > div.top > h1 > a")).path)}},o=parseInt((y=(u=t.match(/gOpts\.comicId=(\d+)/))==null?void 0:u[1])!=null?y:"")+"",s=parseInt((w=(p=t.match(/gOpts\.chapterId=(\d+)/))==null?void 0:p[1])!=null?w:"")+"",m=(U=t.match(/gOpts\.cdn="([^"]+)"/))==null?void 0:U[1],h=(O=t.match(/gOpts\.cdn2="([^"]+)"/))==null?void 0:O[1],g=T(n("#ctl00_divCenter > div > div:nth-child(1) > div.top > i").text().trim().slice(16,-1),e),v=n(".reading-detail img").toArray().map(K=>{const G=n(K),P=W(G.attr("src")),C=G.attr("data-original"),M=C?W(C):void 0,N=G.attr("data-cdn"),Q=N?W(N):void 0;return{src:P.includes("/logos/logo-nettruyen.png")?M:P,original:M,cdn:Q}}),I=n("#nt_comments .comment-list .item").toArray().map(K=>q(n,n(K),e)),f=parseInt(n(".comment-count").text()),A=parseInt((E=(R=n("#ctl00_mainContent_divPager > ul > li:nth-child(14) > a").last().attr("href"))==null?void 0:R.slice(1))!=null?E:"1")||1;return{name:r,image:a,manga_id:o,path_manga:c,ep_id:s,updated_at:g,pages:v,cdn:m,cdn2:h,comments:I,comments_count:f,comments_pages:A}}async function vt(t,e){const{data:n,url:a}=await get({url:`${_}/truyen-tranh/${t}`});if(tt(a))throw new Error("not_found");const r=await At(n,Date.now());if(!e){const{data:c}=await get({url:`${_}/Comic/Services/ComicService.asmx/ProcessChapterList?comicId=${r.manga_id}`});return ot(F({},r),{chapters:JSON.parse(c).chapters.map(o=>{const s={name:"comic chap",params:F({sourceId:x.id},k(o.url))};return{id:o.chapterId+"",name:D(o.name),route:s,updated_at:null,views:null}})})}return r}function yt(t,e){const n=parseDom(t);return n(".item").toArray().map(a=>q(n,n(a),e))}async function xt(t,e,n=-1,a=0,r,c){const{data:o}=await get({url:`https://www.nettruyenmax.com/Comic/Services/CommentService.asmx/List?comicId=${t}&orderBy=${e?5:0}&chapterId=${n}&parentId=${a}&pageNumber=${r}&token=${c}`}),{commentCount:s,pager:m,response:h}=JSON.parse(o);return{comments_count:parseInt(s),comments_pages:parseInt(m.slice(m.indexOf('a href="#')>>>0,2)),comments:await yt(h,Date.now())}}const at=[{value:"ngay",match:"/tim-truyen?status=-1&sort=13",name:{"vi-VN":"Ngày","en-US":"Date"}},{value:"tuan",match:"/tim-truyen?status=-1&sort=12",name:{"vi-VN":"Tuần","en-US":"Week"}},{value:"thang",match:"/tim-truyen?status=-1&sort=11",name:{"vi-VN":"Tháng","en-US":"Month"}}],L={referer:"https://www.nettruyenmax.com"},It=[{name:"Server 1",has:()=>!0,parse:({pages:t})=>t.map(e=>B(e.src,L))},{name:"Server 2",has:({pages:t})=>t[0].original!==null&&t[0].original!==t[0].src,parse({pages:t}){return t.map(e=>{var n;return((n=e.original)==null?void 0:n.indexOf("focus-opensocial.googleusercontent"))!==-1?B(decodeURIComponent(e.original.split("&url",2)[1]),L):B(`https://images2-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&gadget=a&no_expand=1&resize_h=0&rewriteMime=image%2F*&url=${encodeURIComponent(e.original)}`,L)})}},{name:"Server 3",has:t=>t.cdn!==null,parse:({pages:t})=>t.map(e=>B(e.cdn,L))},{name:"Server 4",has:({pages:t,cdn:e,cdn2:n})=>t[0].cdn!==null&&!!e&&!!n,parse:({pages:t,cdn:e,cdn2:n})=>t.map(a=>B(a.cdn.replace(e,n),L))}],Ct=["manga","anime","japan"];class _t{constructor(){J(this,"Rankings",at);J(this,"Servers",It);J(this,"autoFetchComicIsManga",!0)}async setup(){AppInfo.extension&&(console.log("Plugin run mode extension."),await setReferrers({"#nettruyen":_}))}async index(){return ut()}async getComic(e){return ft(e)}async getModeReader(e,n,a){return a.genres.some(r=>Ct.includes(r.name.toLowerCase()))?{scrollingMode:!1,rightToLeft:!0}:{}}async getComicChapter(e,n,a){const r=n.lastIndexOf("-i")>>>0;return vt(e.replace(/-\d+$/,"")+"/chapter-"+n.slice(0,r)+"/"+n.slice(r+2),a)}async getComicComments(e,n,a=-1,r=0,c,o){return xt(e,n,a,r,c,o)}async getListChapters(e){return mt(e)}async searchQuickly(e,n){return lt(e,n)}async search(e,n){return ht(e,n)}async getRanking(e,n,a){var c;const r=(c=at.find(o=>o.value===e))==null?void 0:c.match;if(!r)throw new Error("not_found");return nt(r,n,a)}async getCategory(e,n,a){return nt(`/tim-truyen/${e}`,n,a)}}return st(_t),l.headersNettruyen=L,Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),l}({});
