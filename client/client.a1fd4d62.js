function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function s(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function c(t,e,n,s,r,o,a){const c=function(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|r[s];return t}return e.dirty|r}return e.dirty}(e,s,r,o);if(c){const r=i(e,n,s,a);t.p(r,c)}}function l(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t){return null==t?"":t}function f(t,e){t.appendChild(e)}function h(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function g(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function b(t){return document.createTextNode(t)}function v(){return b(" ")}function $(){return b("")}function y(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function w(t){return function(e){return e.preventDefault(),t.call(this,e)}}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function E(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const s in e)null==e[s]?t.removeAttribute(s):"style"===s?t.style.cssText=e[s]:"__value"===s?t.value=t[s]=e[s]:n[s]&&n[s].set?t[s]=e[s]:_(t,s,e[s])}function S(t){return Array.from(t.childNodes)}function x(t,e,n,s){for(let s=0;s<t.length;s+=1){const r=t[s];if(r.nodeName===e){let e=0;const o=[];for(;e<r.attributes.length;){const t=r.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)r.removeAttribute(o[t]);return t.splice(s,1)[0]}}return s?g(e):m(e)}function T(t,e){for(let n=0;n<t.length;n+=1){const s=t[n];if(3===s.nodeType)return s.data=""+e,t.splice(n,1)[0]}return b(e)}function A(t){return T(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function N(t,e){t.value=null==e?"":e}let I,L;function R(){if(void 0===I){I=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){I=!0}}return I}function k(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=m("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const s=R();let r;return s?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=y(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=y(n.contentWindow,"resize",e)}),f(t,n),()=>{(s||r&&n.contentWindow)&&r(),d(n)}}function O(t,e=document.body){return Array.from(e.querySelectorAll(t))}class C{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=m(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)h(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(d)}}function U(t){L=t}function H(){if(!L)throw new Error("Function called outside component initialization");return L}function j(t){H().$$.on_mount.push(t)}function M(t){H().$$.after_update.push(t)}function D(t){H().$$.on_destroy.push(t)}const G=[],q=[],B=[],z=[],K=Promise.resolve();let V=!1;function J(t){B.push(t)}let W=!1;const F=new Set;function Y(){if(!W){W=!0;do{for(let t=0;t<G.length;t+=1){const e=G[t];U(e),Q(e.$$)}for(U(null),G.length=0;q.length;)q.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];F.has(e)||(F.add(e),e())}B.length=0}while(G.length);for(;z.length;)z.pop()();V=!1,W=!1,F.clear()}}function Q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(J)}}const X=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||r(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(X.delete(t),t.i(e))}function st(t,e,n,s){if(t&&t.o){if(X.has(t))return;X.add(t),Z.c.push((()=>{X.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}}function rt(t,e){const n={},s={},r={$$scope:1};let o=t.length;for(;o--;){const a=t[o],i=e[o];if(i){for(const t in a)t in i||(s[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[o]=i}else for(const t in a)r[t]=1}for(const t in s)t in n||(n[t]=void 0);return n}function ot(t){return"object"==typeof t&&null!==t?t:{}}function at(t){t&&t.c()}function it(t,e){t&&t.l(e)}function ct(t,e,s,a){const{fragment:i,on_mount:c,on_destroy:l,after_update:u}=t.$$;i&&i.m(e,s),a||J((()=>{const e=c.map(n).filter(o);l?l.push(...e):r(e),t.$$.on_mount=[]})),u.forEach(J)}function lt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){-1===t.$$.dirty[0]&&(G.push(t),V||(V=!0,K.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ft(e,n,o,a,i,c,l=[-1]){const u=L;U(e);const f=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:i,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:n.context||[]),callbacks:s(),dirty:l,skip_bound:!1};let h=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...s)=>{const r=s.length?s[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),h&&ut(e,t)),n})):[],f.update(),h=!0,r(f.before_update),f.fragment=!!a&&a(f.ctx),n.target){if(n.hydrate){const t=S(n.target);f.fragment&&f.fragment.l(t),t.forEach(d)}else f.fragment&&f.fragment.c();n.intro&&nt(e.$$.fragment),ct(e,n.target,n.anchor,n.customElement),Y()}U(u)}class ht{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function pt(e,n=t){let s;const r=[];function o(t){if(a(e,t)&&(e=t,s)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,i=t){const c=[a,i];return r.push(c),1===r.length&&(s=n(o)||t),a(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}const mt={};var gt={owner:"0xb0y",repo:"status",sites:[{name:"Sinkaroid Frontbase",url:"https://sinkaroid.io"},{name:"Chaldea Landing Page",url:"https://chaldea.dev"},{name:"Scathach Landing Page",url:"http://scathach.dev"},{name:"V3 REST API",url:"https://scathach.redsplit.org/api"},{name:"CDN ngocok-static",url:"https://static.hentaicdn.com"},{name:"CDN ngocok-dikalasedih",url:"https://cdn.pururin.io"},{name:"WebMail",url:"https://scathach.redsplit.org:2096"},{name:"Loli Minor Appeals",url:"https://scathach.redsplit.org/static/?params"},{name:"Nhentai Graber",url:"http://miyako.redsplit.org"},{name:"CabulAPI Reddit",url:"http://192.145.238.5/~pasirm5/v3/cabul/?hentai"}],"status-website":{cname:"status.scathach.dev",logoUrl:"https://github.githubassets.com/favicons/favicon.svg",name:"Service Status",introTitle:"ScathachStats",introMessage:"Status inidicators for services provided by Scathach",navbar:[{title:"Status",href:"/"},{title:"GitHub",href:"https://github.com/$OWNER/$REPO"}],theme:"light"},path:"https://status.scathach.dev",i18n:{activeIncidents:"Active Incidents",allSystemsOperational:"All systems are operational",incidentReport:"Incident #$NUMBER report →",activeIncidentSummary:"Opened at $DATE with $POSTS posts",incidentTitle:"Incident $NUMBER Details",incidentDetails:"Incident Details",incidentFixed:"Fixed",incidentOngoing:"Ongoing",incidentOpenedAt:"Opened at",incidentClosedAt:"Closed at",incidentSubscribe:"Subscribe to Updates",incidentViewOnGitHub:"View on GitHub",incidentCommentSummary:"Posted at $DATE by $AUTHOR",incidentBack:"← Back to all incidents",pastIncidents:"Past Incidents",pastIncidentsResolved:"Resolved in $MINUTES minutes with $POSTS posts",liveStatus:"Live Status",overallUptime:"Overall uptime: $UPTIME",overallUptimeTitle:"Overall uptime",averageResponseTime:"Average response time: $TIMEms",averageResponseTimeTitle:"Average response",sevelDayResponseTime:"7-day response time",responseTimeMs:"Response time (ms)",up:"Up",down:"Down",degraded:"Degraded",ms:"ms",loading:"Loading",navGitHub:"GitHub",footer:"This page is [open source]($REPO), powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"Rate limit exceedeed",rateLimitExceededIntro:"You have exceeded the number of requests you can do in an hour, so you'll have to wait before accessing this website again. Alternately, you can add a GitHub Personal Access Token to continue to use this website.",rateLimitExceededWhatDoesErrorMean:"What does this error mean?",rateLimitExceededErrorMeaning:"This website uses the GitHub API to access real-time data about our websites' status. By default, GitHub allows each IP address 60 requests per hour, which you have consumed.",rateLimitExceededErrorHowCanFix:"How can I fix it?",rateLimitExceededErrorFix:"You can wait for another hour and your IP address' limit will be restored. Alternately, you can add your GitHub Personal Access Token, which gives you an additional 5,000 requests per hour.",rateLimitExceededGeneratePAT:"Learn how to generate a Personal Access Token",rateLimitExceededHasSet:"You have a personal access token set.",rateLimitExceededRemoveToken:"Remove token",rateLimitExceededGitHubPAT:"GitHub Personal Access Token",rateLimitExceededCopyPastePAT:"Copy and paste your token",rateLimitExceededSaveToken:"Save token",errorTitle:"An error occurred",errorIntro:"An error occurred in trying to get the latest status details.",errorText:"You can try again in a few moments.",errorHome:"Go to the homepage",pastScheduledMaintenance:"Past Scheduled Maintenance",scheduledMaintenance:"Scheduled Maintenance",scheduledMaintenanceSummaryStarted:"Started at $DATE for $DURATION minutes",scheduledMaintenanceSummaryStarts:"Starts at $DATE for $DURATION minutes",startedAt:"Started at",startsAt:"Starts at",duration:"Duration",durationMin:"$DURATION minutes",incidentCompleted:"Completed",incidentScheduled:"Scheduled"}};function bt(t,e,n){const s=t.slice();return s[1]=e[n],s}function vt(e){let n,s,r,o=gt["status-website"]&&!gt["status-website"].hideNavLogo&&function(e){let n,s;return{c(){n=m("img"),this.h()},l(t){n=x(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){_(n,"alt",""),n.src!==(s=gt["status-website"].logoUrl)&&_(n,"src",s),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}(),a=gt["status-website"]&&!gt["status-website"].hideNavTitle&&function(e){let n,s,r=gt["status-website"].name+"";return{c(){n=m("div"),s=b(r)},l(t){n=x(t,"DIV",{});var e=S(n);s=T(e,r),e.forEach(d)},m(t,e){h(t,n,e),f(n,s)},p:t,d(t){t&&d(n)}}}();return{c(){n=m("div"),s=m("a"),o&&o.c(),r=v(),a&&a.c(),this.h()},l(t){n=x(t,"DIV",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var i=S(s);o&&o.l(i),r=A(i),a&&a.l(i),i.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",gt["status-website"].logoHref||gt.path),_(s,"class","logo svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),o&&o.m(s,null),f(s,r),a&&a.m(s,null)},p(t,e){gt["status-website"]&&!gt["status-website"].hideNavLogo&&o.p(t,e),gt["status-website"]&&!gt["status-website"].hideNavTitle&&a.p(t,e)},d(t){t&&d(n),o&&o.d(),a&&a.d()}}}function $t(t){let e,n,s,r,o,a=t[1].title+"";return{c(){e=m("li"),n=m("a"),s=b(a),o=v(),this.h()},l(t){e=x(t,"LI",{});var r=S(e);n=x(r,"A",{"aria-current":!0,href:!0,class:!0});var i=S(n);s=T(i,a),i.forEach(d),o=A(r),r.forEach(d),this.h()},h(){_(n,"aria-current",r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),_(n,"href",t[1].href.replace("$OWNER",gt.owner).replace("$REPO",gt.repo)),_(n,"class","svelte-a08hsz")},m(t,r){h(t,e,r),f(e,n),f(n,s),f(e,o)},p(t,e){1&e&&r!==(r=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&_(n,"aria-current",r)},d(t){t&&d(e)}}}function yt(e){let n,s,r,o,a,i=gt["status-website"]&&gt["status-website"].logoUrl&&vt(),c=gt["status-website"]&&gt["status-website"].navbar&&function(t){let e,n=gt["status-website"].navbar,s=[];for(let e=0;e<n.length;e+=1)s[e]=$t(bt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=$()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=$()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(1&r){let o;for(n=gt["status-website"].navbar,o=0;o<n.length;o+=1){const a=bt(t,n,o);s[o]?s[o].p(a,r):(s[o]=$t(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),l=gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&function(e){let n,s,r,o=gt.i18n.navGitHub+"";return{c(){n=m("li"),s=m("a"),r=b(o),this.h()},l(t){n=x(t,"LI",{});var e=S(n);s=x(e,"A",{href:!0,class:!0});var a=S(s);r=T(a,o),a.forEach(d),e.forEach(d),this.h()},h(){_(s,"href",`https://github.com/${gt.owner}/${gt.repo}`),_(s,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),f(s,r)},p:t,d(t){t&&d(n)}}}();return{c(){n=m("nav"),s=m("div"),i&&i.c(),r=v(),o=m("ul"),c&&c.c(),a=v(),l&&l.c(),this.h()},l(t){n=x(t,"NAV",{class:!0});var e=S(n);s=x(e,"DIV",{class:!0});var u=S(s);i&&i.l(u),r=A(u),o=x(u,"UL",{class:!0});var f=S(o);c&&c.l(f),a=A(f),l&&l.l(f),f.forEach(d),u.forEach(d),e.forEach(d),this.h()},h(){_(o,"class","svelte-a08hsz"),_(s,"class","container svelte-a08hsz"),_(n,"class","svelte-a08hsz")},m(t,e){h(t,n,e),f(n,s),i&&i.m(s,null),f(s,r),f(s,o),c&&c.m(o,null),f(o,a),l&&l.m(o,null)},p(t,[e]){gt["status-website"]&&gt["status-website"].logoUrl&&i.p(t,e),gt["status-website"]&&gt["status-website"].navbar&&c.p(t,e),gt["status-website"]&&gt["status-website"].navbarGitHub&&!gt["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&d(n),i&&i.d(),c&&c.d(),l&&l.d()}}}function wt(t,e,n){let{segment:s}=e;return t.$$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class _t extends ht{constructor(t){super(),ft(this,t,wt,yt,a,{segment:0})}}var Et={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function St(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function xt(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tt(t,e){var n,s,r,o,a,i=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function h(t){var e=Et[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");r=i.exec(t);)s=t.substring(f,r.index),f=i.lastIndex,n=r[0],s.match(/[^\\](\\\\)*\\$/)||((a=r[3]||r[4])?n='<pre class="code '+(r[4]?"poetry":r[2].toLowerCase())+'"><code'+(r[2]?' class="language-'+r[2].toLowerCase()+'"':"")+">"+St(xt(a).replace(/^\n+|\n+$/g,""))+"</code></pre>":(a=r[6])?(a.match(/\./)&&(r[5]=r[5].replace(/^\d+/gm,"")),o=Tt(St(r[5].replace(/^\s*[>*+.-]/gm,""))),">"==a?a="blockquote":(a=a.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+a+">"+o+"</"+a+">"):r[8]?n='<img src="'+xt(r[8])+'" alt="'+xt(r[7])+'">':r[10]?(l=l.replace("<a>",'<a href="'+xt(r[11]||u[s.toLowerCase()])+'">'),n=d()+"</a>"):r[9]?n="<a>":r[12]||r[14]?n="<"+(a="h"+(r[14]?r[14].length:r[13]>"="?1:2))+">"+Tt(r[12]||r[15],u)+"</"+a+">":r[16]?n="<code>"+xt(r[16])+"</code>":(r[17]||r[1])&&(n=h(r[17]||"--"))),l+=s,l+=n;return(l+t.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function At(t,e,n){const s=t.slice();return s[3]=e[n],s}function Pt(t,e,n){const s=t.slice();return s[3]=e[n],s}function Nt(t,e,n){const s=t.slice();return s[8]=e[n],s}function It(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",`${gt.path}/themes/${(gt["status-website"]||{}).theme||"light"}.css`)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Lt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0}),this.h()},h(){_(n,"rel","stylesheet"),_(n,"href",(gt["status-website"]||{}).themeUrl)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Rt(e){let n,s;return{c(){n=m("script"),this.h()},l(t){n=x(t,"SCRIPT",{src:!0,async:!0,defer:!0}),S(n).forEach(d),this.h()},h(){n.src!==(s=e[8].src)&&_(n,"src",s),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function kt(e){let n;return{c(){n=m("link"),this.h()},l(t){n=x(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){_(n,"rel",e[3].rel),_(n,"href",e[3].href),_(n,"media",e[3].media)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Ot(e){let n;return{c(){n=m("meta"),this.h()},l(t){n=x(t,"META",{name:!0,content:!0}),this.h()},h(){_(n,"name",e[3].name),_(n,"content",e[3].content)},m(t,e){h(t,n,e)},p:t,d(t){t&&d(n)}}}function Ct(e){let n,s,r,o,a,l,u,g,b,y,w,E,T,P,N,I,L,R,k=Tt(gt.i18n.footer.replace(/\$REPO/,`https://github.com/${gt.owner}/${gt.repo}`))+"",U=(gt["status-website"]||{}).customHeadHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customHeadHtml+"";return{c(){s=$(),this.h()},l(t){s=$(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();let H=((gt["status-website"]||{}).themeUrl?Lt:It)(e),j=(gt["status-website"]||{}).scripts&&function(t){let e,n=(gt["status-website"]||{}).scripts,s=[];for(let e=0;e<n.length;e+=1)s[e]=Rt(Nt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=$()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=$()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const a=Nt(t,n,o);s[o]?s[o].p(a,r):(s[o]=Rt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),M=(gt["status-website"]||{}).links&&function(t){let e,n=(gt["status-website"]||{}).links,s=[];for(let e=0;e<n.length;e+=1)s[e]=kt(Pt(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=$()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=$()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).links,o=0;o<n.length;o+=1){const a=Pt(t,n,o);s[o]?s[o].p(a,r):(s[o]=kt(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),D=(gt["status-website"]||{}).metaTags&&function(t){let e,n=(gt["status-website"]||{}).metaTags,s=[];for(let e=0;e<n.length;e+=1)s[e]=Ot(At(t,n,e));return{c(){for(let t=0;t<s.length;t+=1)s[t].c();e=$()},l(t){for(let e=0;e<s.length;e+=1)s[e].l(t);e=$()},m(t,n){for(let e=0;e<s.length;e+=1)s[e].m(t,n);h(t,e,n)},p(t,r){if(0&r){let o;for(n=(gt["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const a=At(t,n,o);s[o]?s[o].p(a,r):(s[o]=Ot(a),s[o].c(),s[o].m(e.parentNode,e))}for(;o<s.length;o+=1)s[o].d(1);s.length=n.length}},d(t){p(s,t),t&&d(e)}}}(e),G=gt["status-website"].css&&function(e){let n,s,r=`<style>${gt["status-website"].css}</style>`;return{c(){s=$(),this.h()},l(t){s=$(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),q=gt["status-website"].js&&function(e){let n,s,r=`<script>${gt["status-website"].js}<\/script>`;return{c(){s=$(),this.h()},l(t){s=$(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}(),B=(gt["status-website"]||{}).customBodyHtml&&function(e){let n,s,r=(gt["status-website"]||{}).customBodyHtml+"";return{c(){s=$(),this.h()},l(t){s=$(),this.h()},h(){n=new C(s)},m(t,e){n.m(r,t,e),h(t,s,e)},p:t,d(t){t&&d(s),t&&n.d()}}}();E=new _t({props:{segment:e[0]}});const z=e[2].default,K=function(t,e,n,s){if(t){const r=i(t,e,n,s);return t[0](r)}}(z,e,e[1],null);return{c(){U&&U.c(),n=$(),H.c(),s=m("link"),r=m("link"),o=m("link"),j&&j.c(),a=$(),M&&M.c(),l=$(),D&&D.c(),u=$(),G&&G.c(),g=$(),q&&q.c(),b=$(),y=v(),B&&B.c(),w=v(),at(E.$$.fragment),T=v(),P=m("main"),K&&K.c(),N=v(),I=m("footer"),L=m("p"),this.h()},l(t){const e=O('[data-svelte="svelte-ri9y7q"]',document.head);U&&U.l(e),n=$(),H.l(e),s=x(e,"LINK",{rel:!0,href:!0}),r=x(e,"LINK",{rel:!0,type:!0,href:!0}),o=x(e,"LINK",{rel:!0,type:!0,href:!0}),j&&j.l(e),a=$(),M&&M.l(e),l=$(),D&&D.l(e),u=$(),G&&G.l(e),g=$(),q&&q.l(e),b=$(),e.forEach(d),y=A(t),B&&B.l(t),w=A(t),it(E.$$.fragment,t),T=A(t),P=x(t,"MAIN",{class:!0});var i=S(P);K&&K.l(i),i.forEach(d),N=A(t),I=x(t,"FOOTER",{class:!0});var c=S(I);L=x(c,"P",{}),S(L).forEach(d),c.forEach(d),this.h()},h(){_(s,"rel","stylesheet"),_(s,"href",`${gt.path}/global.css`),_(r,"rel","icon"),_(r,"type","image/svg"),_(r,"href",(gt["status-website"]||{}).faviconSvg||(gt["status-website"]||{}).favicon||"https://raw.githubusercontent.com/koj-co/upptime/master/assets/icon.svg"),_(o,"rel","icon"),_(o,"type","image/png"),_(o,"href",(gt["status-website"]||{}).favicon||"/logo-192.png"),_(P,"class","container"),_(I,"class","svelte-jbr799")},m(t,e){U&&U.m(document.head,null),f(document.head,n),H.m(document.head,null),f(document.head,s),f(document.head,r),f(document.head,o),j&&j.m(document.head,null),f(document.head,a),M&&M.m(document.head,null),f(document.head,l),D&&D.m(document.head,null),f(document.head,u),G&&G.m(document.head,null),f(document.head,g),q&&q.m(document.head,null),f(document.head,b),h(t,y,e),B&&B.m(t,e),h(t,w,e),ct(E,t,e),h(t,T,e),h(t,P,e),K&&K.m(P,null),h(t,N,e),h(t,I,e),f(I,L),L.innerHTML=k,R=!0},p(t,[e]){(gt["status-website"]||{}).customHeadHtml&&U.p(t,e),H.p(t,e),(gt["status-website"]||{}).scripts&&j.p(t,e),(gt["status-website"]||{}).links&&M.p(t,e),(gt["status-website"]||{}).metaTags&&D.p(t,e),gt["status-website"].css&&G.p(t,e),gt["status-website"].js&&q.p(t,e),(gt["status-website"]||{}).customBodyHtml&&B.p(t,e);const n={};1&e&&(n.segment=t[0]),E.$set(n),K&&K.p&&(!R||2&e)&&c(K,z,t,t[1],e,null,null)},i(t){R||(nt(E.$$.fragment,t),nt(K,t),R=!0)},o(t){st(E.$$.fragment,t),st(K,t),R=!1},d(t){U&&U.d(t),d(n),H.d(t),d(s),d(r),d(o),j&&j.d(t),d(a),M&&M.d(t),d(l),D&&D.d(t),d(u),G&&G.d(t),d(g),q&&q.d(t),d(b),t&&d(y),B&&B.d(t),t&&d(w),lt(E,t),t&&d(T),t&&d(P),K&&K.d(t),t&&d(N),t&&d(I)}}}function Ut(t,e,n){let{$$slots:s={},$$scope:r}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,r=t.$$scope)},[o,r,s]}class Ht extends ht{constructor(t){super(),ft(this,t,Ut,Ct,a,{segment:0})}}function jt(t){let e,n,s=t[1].stack+"";return{c(){e=m("pre"),n=b(s)},l(t){e=x(t,"PRE",{});var r=S(e);n=T(r,s),r.forEach(d)},m(t,s){h(t,e,s),f(e,n)},p(t,e){2&e&&s!==(s=t[1].stack+"")&&P(n,s)},d(t){t&&d(e)}}}function Mt(e){let n,s,r,o,a,i,c,l,u,p=e[1].message+"";document.title=n=e[0];let g=e[2]&&e[1].stack&&jt(e);return{c(){s=v(),r=m("h1"),o=b(e[0]),a=v(),i=m("p"),c=b(p),l=v(),g&&g.c(),u=$(),this.h()},l(t){O('[data-svelte="svelte-1moakz"]',document.head).forEach(d),s=A(t),r=x(t,"H1",{class:!0});var n=S(r);o=T(n,e[0]),n.forEach(d),a=A(t),i=x(t,"P",{class:!0});var f=S(i);c=T(f,p),f.forEach(d),l=A(t),g&&g.l(t),u=$(),this.h()},h(){_(r,"class","svelte-17w3omn"),_(i,"class","svelte-17w3omn")},m(t,e){h(t,s,e),h(t,r,e),f(r,o),h(t,a,e),h(t,i,e),f(i,c),h(t,l,e),g&&g.m(t,e),h(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&P(o,t[0]),2&e&&p!==(p=t[1].message+"")&&P(c,p),t[2]&&t[1].stack?g?g.p(t,e):(g=jt(t),g.c(),g.m(u.parentNode,u)):g&&(g.d(1),g=null)},i:t,o:t,d(t){t&&d(s),t&&d(r),t&&d(a),t&&d(i),t&&d(l),g&&g.d(t),t&&d(u)}}}function Dt(t,e,n){let{status:s}=e,{error:r}=e;return t.$$set=t=>{"status"in t&&n(0,s=t.status),"error"in t&&n(1,r=t.error)},[s,r,false]}class Gt extends ht{constructor(t){super(),ft(this,t,Dt,Mt,a,{status:0,error:1})}}function qt(t){let n,s,r;const o=[t[4].props];var a=t[4].component;function i(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(i())),{c(){n&&at(n.$$.fragment),s=$()},l(t){n&&it(n.$$.fragment,t),s=$()},m(t,e){n&&ct(n,t,e),h(t,s,e),r=!0},p(t,e){const r=16&e?rt(o,[ot(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){tt();const t=n;st(t.$$.fragment,1,0,(()=>{lt(t,1)})),et()}a?(n=new a(i()),at(n.$$.fragment),nt(n.$$.fragment,1),ct(n,s.parentNode,s)):n=null}else a&&n.$set(r)},i(t){r||(n&&nt(n.$$.fragment,t),r=!0)},o(t){n&&st(n.$$.fragment,t),r=!1},d(t){t&&d(s),n&&lt(n,t)}}}function Bt(t){let e,n;return e=new Gt({props:{error:t[0],status:t[1]}}),{c(){at(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,s){ct(e,t,s),n=!0},p(t,n){const s={};1&n&&(s.error=t[0]),2&n&&(s.status=t[1]),e.$set(s)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){st(e.$$.fragment,t),n=!1},d(t){lt(e,t)}}}function zt(t){let e,n,s,r;const o=[Bt,qt],a=[];function i(t,e){return t[0]?0:1}return e=i(t),n=a[e]=o[e](t),{c(){n.c(),s=$()},l(t){n.l(t),s=$()},m(t,n){a[e].m(t,n),h(t,s,n),r=!0},p(t,r){let c=e;e=i(t),e===c?a[e].p(t,r):(tt(),st(a[c],1,1,(()=>{a[c]=null})),et(),n=a[e],n?n.p(t,r):(n=a[e]=o[e](t),n.c()),nt(n,1),n.m(s.parentNode,s))},i(t){r||(nt(n),r=!0)},o(t){st(n),r=!1},d(t){a[e].d(t),t&&d(s)}}}function Kt(t){let n,s;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[zt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);return n=new Ht({props:o}),{c(){at(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){ct(n,t,e),s=!0},p(t,[e]){const s=12&e?rt(r,[4&e&&{segment:t[2][0]},8&e&&ot(t[3].props)]):{};147&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){s||(nt(n.$$.fragment,t),s=!0)},o(t){st(n.$$.fragment,t),s=!1},d(t){lt(n,t)}}}function Vt(t,e,n){let{stores:s}=e,{error:r}=e,{status:o}=e,{segments:a}=e,{level0:i}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return M(l),u=mt,f=s,H().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,s=t.stores),"error"in t&&n(0,r=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,i=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[r,o,a,i,c,s,l]}class Jt extends ht{constructor(t){super(),ft(this,t,Vt,Kt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Wt=[],Ft=[{js:()=>Promise.all([import("./index.876b5cb8.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","index-5f8caab7.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.694fb731.js"),__inject_styles(["client-04be1abb.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].1f36cc5e.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-c4ffc2b4.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./[number].228d9db4.js"),__inject_styles(["client-04be1abb.css","createOctokit-865318f3.css","[number]-bc1bb552.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.90f5716f.js"),__inject_styles(["client-04be1abb.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],Yt=(Qt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:Qt(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var Qt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function Xt(t,e,n,s){return new(n||(n=Promise))((function(r,o){function a(t){try{c(s.next(t))}catch(t){o(t)}}function i(t){try{c(s.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,i)}c((s=s.apply(t,e||[])).next())}))}function Zt(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let te,ee=1;const ne="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},se={};let re,oe;function ae(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ie(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(re))return null;let e=t.pathname.slice(re.length);if(""===e&&(e="/"),!Wt.some((t=>t.test(e))))for(let n=0;n<Yt.length;n+=1){const s=Yt[n],r=s.pattern.exec(e);if(r){const n=ae(t.search),o=s.parts[s.parts.length-1],a=o.params?o.params(r):{},i={host:location.host,path:e,query:n,params:a};return{href:t.href,route:s,match:r,page:i}}}}function ce(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=Zt(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,s=String(n?e.href.baseVal:e.href);if(s===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const r=new URL(s);if(r.pathname===location.pathname&&r.search===location.search)return;const o=ie(r);if(o){fe(o,null,e.hasAttribute("sapper:noscroll"),r.hash),t.preventDefault(),ne.pushState({id:te},"",r.href)}}function le(){return{x:pageXOffset,y:pageYOffset}}function ue(t){if(se[te]=le(),t.state){const e=ie(new URL(location.href));e?fe(e,t.state.id):location.href=location.href}else!function(t){ee=t}(ee+1),function(t){te=t}(ee),ne.replaceState({id:te},"",location.href)}function fe(t,e,n,s){return Xt(this,void 0,void 0,(function*(){const r=!!e;if(r)te=e;else{const t=le();se[te]=t,te=e=++ee,se[te]=n?t:{x:0,y:0}}if(yield oe(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=se[e];s&&(t=document.getElementById(s.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),se[te]=n,n&&(r||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function he(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let de,pe=null;function me(t){const e=Zt(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ie(new URL(t,he(document)));if(e)pe&&t===pe.href||(pe={href:t,promise:Re(e)}),pe.promise}(e.href)}function ge(t){clearTimeout(de),de=setTimeout((()=>{me(t)}),20)}function be(t,e={noscroll:!1,replaceState:!1}){const n=ie(new URL(t,he(document)));if(n){const s=fe(n,null,e.noscroll);return ne[e.replaceState?"replaceState":"pushState"]({id:te},"",t),s}return location.href=t,new Promise((()=>{}))}const ve="undefined"!=typeof __SAPPER__&&__SAPPER__;let $e,ye,we,_e=!1,Ee=[],Se="{}";const xe={page:function(t){const e=pt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let s;return e.subscribe((e=>{(void 0===s||n&&e!==s)&&t(s=e)}))}}}({}),preloading:pt(null),session:pt(ve&&ve.session)};let Te,Ae,Pe;function Ne(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Ie(t){return Xt(this,void 0,void 0,(function*(){$e&&xe.preloading.set(!0);const e=function(t){return pe&&pe.href===t.href?pe.promise:Re(t)}(t),n=ye={},s=yield e,{redirect:r}=s;if(n===ye)if(r)yield be(r.location,{replaceState:!0});else{const{props:e,branch:n}=s;yield Le(n,e,Ne(e,t.page))}}))}function Le(t,e,n){return Xt(this,void 0,void 0,(function*(){xe.page.set(n),xe.preloading.set(!1),$e?$e.$set(e):(e.stores={page:{subscribe:xe.page.subscribe},preloading:{subscribe:xe.preloading.subscribe},session:xe.session},e.level0={props:yield we},e.notify=xe.page.notify,$e=new Jt({target:Pe,props:e,hydrate:!0})),Ee=t,Se=JSON.stringify(n.query),_e=!0,Ae=!1}))}function Re(t){return Xt(this,void 0,void 0,(function*(){const{route:e,page:n}=t,s=n.path.split("/").filter(Boolean);let r=null;const o={error:null,status:200,segments:[s[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(r&&(r.statusCode!==t||r.location!==e))throw new Error("Conflicting redirects");r={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!we){const t=()=>({});we=ve.preloaded[0]||t.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Te)}let i,c=1;try{const r=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;i=yield Promise.all(e.parts.map(((e,i)=>Xt(this,void 0,void 0,(function*(){const f=s[i];if(function(t,e,n,s){if(s!==Se)return!0;const r=Ee[t];return!!r&&(e!==r.segment||!(!r.match||JSON.stringify(r.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(i,f,l,r)&&(u=!0),o.segments[c]=s[i+1],!e)return{segment:f};const h=c++;let d;if(Ae||u||!Ee[i]||Ee[i].part!==e.i){u=!1;const{default:s,preload:r}=yield Ft[e.i].js();let o;o=_e||!ve.preloaded[i+1]?r?yield r.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Te):{}:ve.preloaded[i+1],d={component:s,props:o,segment:f,match:l,part:e.i}}else d=Ee[i];return o[`level${h}`]=d})))))}catch(t){o.error=t,o.status=500,i=[]}return{redirect:r,props:o,branch:i}}))}var ke,Oe,Ce;xe.session.subscribe((t=>Xt(void 0,void 0,void 0,(function*(){if(Te=t,!_e)return;Ae=!0;const e=ie(new URL(location.href)),n=ye={},{redirect:s,props:r,branch:o}=yield Re(e);n===ye&&(s?yield be(s.location,{replaceState:!0}):yield Le(o,r,Ne(r,e.page)))})))),ke={target:document.querySelector("#sapper")},Oe=ke.target,Pe=Oe,Ce=ve.baseUrl,re=Ce,oe=Ie,"scrollRestoration"in ne&&(ne.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{ne.scrollRestoration="auto"})),addEventListener("load",(()=>{ne.scrollRestoration="manual"})),addEventListener("click",ce),addEventListener("popstate",ue),addEventListener("touchstart",me),addEventListener("mousemove",ge),ve.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:s,preloaded:r,status:o,error:a}=ve;we||(we=r&&r[0]);const i={error:a,status:o,session:s,level0:{props:we},level1:{props:{status:o,error:a},component:Gt},segments:r},c=ae(n);Le([],i,{host:t,path:e,query:c,params:{},error:a})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;ne.replaceState({id:ee},"",e);const n=ie(new URL(location.href));if(n)return fe(n,ee,!0,t)}));export{lt as A,y as B,r as C,q as D,u as E,O as F,Tt as G,C as H,g as I,be as J,N as K,w as L,e as M,E as N,rt as O,M as P,D as Q,l as R,ht as S,ot as T,J as U,k as V,S as a,T as b,x as c,d,m as e,_ as f,h as g,f as h,ft as i,v as j,A as k,tt as l,st as m,t as n,et as o,nt as p,j as q,gt as r,a as s,b as t,P as u,$ as v,p as w,at as x,it as y,ct as z};

import __inject_styles from './inject_styles.5607aec6.js';