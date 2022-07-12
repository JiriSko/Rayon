import{C as k,E as d,L as m,a as x,S as b,s as j,x as F,j as U,h as B,c as H,b as N,d as q,e as K,r as W,p as Z,m as V,l as R,f as G,H as J,u as Y,w as _,o as Q,g as X,i as h,k as z,n as L,q as ee,t as ne,v as te,y as re,z as ie,A as oe,B as ae,D as ue,F as le,G as ce,I as se,J as fe,K as de,M as T,N as $,O as pe,P as he,Q as ge}from"./vendor.7f2a3786.js";const ve=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}};ve();const s={theme:new k,language:new k,readonly:new k},ke=[s.theme.of([]),s.language.of([]),s.readonly.of(d.contentAttributes.of({contenteditable:!0}))];function we(e){return Promise.resolve().then(function(){return new x(b.define(e))})}const ye=m.of({name:"Shell",load(){return we(_e)}});var w={};function S(e,n){for(var t=0;t<n.length;t++)w[n[t]]=e}var E=["true","false"],P=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function","alias"],O=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"];S("atom",E);S("keyword",P);S("builtin",O);function me(e,n){if(e.eatSpace())return null;var t=e.sol(),i=e.next();if(i==="\\")return e.next(),null;if(i==="'"||i==='"'||i==="`")return n.tokens.unshift(g(i,i==="`"?"quote":"string")),p(e,n);if(i==="#")return t&&e.eat("!")?(e.skipToEnd(),"meta"):(e.skipToEnd(),"comment");if(i==="$")return n.tokens.unshift(D),p(e,n);if(i==="+"||i==="=")return"operator";if(i==="-")return e.eat("-"),e.eatWhile(/\w/),"attribute";if(i=="<"){if(e.match("<<"))return"operator";var r=e.match(/^<-?\s*['"]?([^'"]*)['"]?/);if(r)return n.tokens.unshift(be(r[1])),"string.special"}if(/\d/.test(i)&&(e.eatWhile(/\d/),e.eol()||!/\w/.test(e.peek())))return"number";e.eatWhile(/[\w-]/);var o=e.current();return e.peek()==="="&&/\w+/.test(o)?"def":w.hasOwnProperty(o)?w[o]:null}function g(e,n){var t=e=="("?")":e=="{"?"}":e;return function(i,r){for(var o,a=!1;(o=i.next())!=null;){if(o===t&&!a){r.tokens.shift();break}else if(o==="$"&&!a&&e!=="'"&&i.peek()!=t){a=!0,i.backUp(1),r.tokens.unshift(D);break}else{if(!a&&e!==t&&o===e)return r.tokens.unshift(g(e,n)),p(i,r);if(!a&&/['"]/.test(o)&&!/['"]/.test(e)){r.tokens.unshift(xe(o,"string")),i.backUp(1);break}}a=!a&&o==="\\"}return n}}function xe(e,n){return function(t,i){return i.tokens[0]=g(e,n),t.next(),p(t,i)}}var D=function(e,n){n.tokens.length>1&&e.eat("$");var t=e.next();return/['"({]/.test(t)?(n.tokens[0]=g(t,t=="("?"quote":t=="{"?"def":"string"),p(e,n)):(/\d/.test(t)||e.eatWhile(/\w/),n.tokens.shift(),"def")};function be(e){return function(n,t){return n.sol()&&n.string==e&&t.tokens.shift(),n.skipToEnd(),"string.special"}}function p(e,n){return(n.tokens[0]||me)(e,n)}const _e={startState:function(){return{tokens:[]}},token:function(e,n){return p(e,n)},languageData:{autocomplete:E.map(e=>({label:e,type:"enum"})).concat(P.map(e=>({type:"keyword",label:e})),O.map(e=>({label:e,type:"method"}))),closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"#"}}};function Se(e){return Promise.resolve().then(function(){return new x(b.define(e))})}const Ce=m.of({name:"Swift",load(){return Se(We)}});function v(e){for(var n={},t=0;t<e.length;t++)n[e[t]]=!0;return n}var Le=v(["_","var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","open","public","internal","fileprivate","private","deinit","init","new","override","self","subscript","super","convenience","dynamic","final","indirect","lazy","required","static","unowned","unowned(safe)","unowned(unsafe)","weak","as","is","break","case","continue","default","else","fallthrough","for","guard","if","in","repeat","switch","where","while","defer","return","inout","mutating","nonmutating","catch","do","rethrows","throw","throws","try","didSet","get","set","willSet","assignment","associativity","infix","left","none","operator","postfix","precedence","precedencegroup","prefix","right","Any","AnyObject","Type","dynamicType","Self","Protocol","__COLUMN__","__FILE__","__FUNCTION__","__LINE__"]),Ae=v(["var","let","class","enum","extension","import","protocol","struct","func","typealias","associatedtype","for"]),ze=v(["true","false","nil","self","super","_"]),Te=v(["Array","Bool","Character","Dictionary","Double","Float","Int","Int8","Int16","Int32","Int64","Never","Optional","Set","String","UInt8","UInt16","UInt32","UInt64","Void"]),$e="+-/*%=|&<>~^?!",Ee=":;,.(){}[]",Pe=/^\-?0b[01][01_]*/,Oe=/^\-?0o[0-7][0-7_]*/,De=/^\-?0x[\dA-Fa-f][\dA-Fa-f_]*(?:(?:\.[\dA-Fa-f][\dA-Fa-f_]*)?[Pp]\-?\d[\d_]*)?/,Ie=/^\-?\d[\d_]*(?:\.\d[\d_]*)?(?:[Ee]\-?\d[\d_]*)?/,Me=/^\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1/,je=/^\.(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/,Fe=/^\#[A-Za-z]+/,Ue=/^@(?:\$\d+|(`?)[_A-Za-z][_A-Za-z$0-9]*\1)/;function I(e,n,t){if(e.sol()&&(n.indented=e.indentation()),e.eatSpace())return null;var i=e.peek();if(i=="/"){if(e.match("//"))return e.skipToEnd(),"comment";if(e.match("/*"))return n.tokenize.push(y),y(e,n)}if(e.match(Fe))return"builtin";if(e.match(Ue))return"attribute";if(e.match(Pe)||e.match(Oe)||e.match(De)||e.match(Ie))return"number";if(e.match(je))return"property";if($e.indexOf(i)>-1)return e.next(),"operator";if(Ee.indexOf(i)>-1)return e.next(),e.match(".."),"punctuation";var r;if(r=e.match(/("""|"|')/)){var o=He.bind(null,r[0]);return n.tokenize.push(o),o(e,n)}if(e.match(Me)){var a=e.current();return Te.hasOwnProperty(a)?"type":ze.hasOwnProperty(a)?"atom":Le.hasOwnProperty(a)?(Ae.hasOwnProperty(a)&&(n.prev="define"),"keyword"):t=="define"?"def":"variable"}return e.next(),null}function Be(){var e=0;return function(n,t,i){var r=I(n,t,i);if(r=="punctuation"){if(n.current()=="(")++e;else if(n.current()==")"){if(e==0)return n.backUp(1),t.tokenize.pop(),t.tokenize[t.tokenize.length-1](n,t);--e}}return r}}function He(e,n,t){for(var i=e.length==1,r,o=!1;r=n.peek();)if(o){if(n.next(),r=="(")return t.tokenize.push(Be()),"string";o=!1}else{if(n.match(e))return t.tokenize.pop(),"string";n.next(),o=r=="\\"}return i&&t.tokenize.pop(),"string"}function y(e,n){for(var t;e.match(/^[^/*]+/,!0),t=e.next(),!!t;)t==="/"&&e.eat("*")?n.tokenize.push(y):t==="*"&&e.eat("/")&&n.tokenize.pop();return"comment"}function Ne(e,n,t){this.prev=e,this.align=n,this.indented=t}function qe(e,n){var t=n.match(/^\s*($|\/[\/\*]|[)}\]])/,!1)?null:n.column()+1;e.context=new Ne(e.context,t,e.indented)}function Ke(e){e.context&&(e.indented=e.context.indented,e.context=e.context.prev)}const We={startState:function(){return{prev:null,context:null,indented:0,tokenize:[]}},token:function(e,n){var t=n.prev;n.prev=null;var i=n.tokenize[n.tokenize.length-1]||I,r=i(e,n,t);if(!r||r=="comment"?n.prev=t:n.prev||(n.prev=r),r=="punctuation"){var o=/[\(\[\{]|([\]\)\}])/.exec(e.current());o&&(o[1]?Ke:qe)(n,e)}return r},indent:function(e,n,t){var i=e.context;if(!i)return 0;var r=/^[\]\}\)]/.test(n);return i.align!=null?i.align-(r?1:0):i.indented+(r?0:t.unit)},languageData:{indentOnInput:/^\s*[\)\}\]]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}},closeBrackets:{brackets:["(","[","{","'",'"',"`"]}}};function Ze(e){return Promise.resolve().then(function(){return new x(b.define(e))})}const Ve=m.of({name:"Yaml",load(){return Ze(Je)}});var Re=["true","false","on","off","yes","no"],Ge=new RegExp("\\b(("+Re.join(")|(")+"))$","i");const Je={token:function(e,n){var t=e.peek(),i=n.escaped;if(n.escaped=!1,t=="#"&&(e.pos==0||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---")||e.match("..."))return"def";if(e.match(/^\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return t=="{"?n.inlinePairs++:t=="}"?n.inlinePairs--:t=="["?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!i&&t==",")return e.next(),"meta";if(n.inlinePairs>0&&!i&&t==",")return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable";if(n.inlinePairs==0&&e.match(/^\s*-?[0-9\.\,]+\s?$/)||n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(Ge))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped=t=="\\",e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},languageData:{commentTokens:{line:"#"}}},A=async e=>{switch(e){case"shell":case"sh":return await ye.load().then(r=>r.extension);case"swift":return await Ce.load().then(r=>r.extension);case"yaml":return await Ve.load().then(r=>r.extension);case"markdown":case"md":return V({addKeymap:!0,codeLanguages:R,base:G});case"python":return Z();case"rust":return W();case"java":return K();case"javascript":case"typescript":return q({jsx:!0,typescript:!0});case"cpp":return N();case"css":return H();case"html":return B({autoCloseTags:!0,matchClosingTags:!0});case"json":return U();case"xml":return F();case"sql":return j()}return null},M=()=>["shell","sh","md","markdown","python","rust","java","javascript","typescript","cpp","css","html","json","xml","sql","swift","yaml"],Ye=e=>M().includes(e),Qe=J.define([]),Xe=e=>{const n=Y({});_([n,e],([t])=>{!e.value||(t?e.value.dispatch({effects:[s.theme.reconfigure(Q)]}):e.value.dispatch({effects:[s.theme.reconfigure(X)]}))},{immediate:!0,flush:"post"})};d.theme({"&":{height:"100%"}});const en=e=>{const n=h(),t=h(),{onChange:i}=e;return z(async()=>{if(!n.value)return;const r=L.create({doc:e.initialDoc,extensions:[ee.of([...ne,...te,{key:"Mod-s",run(l){return!1},preventDefault:!0},{key:"Tab",run(l){return re(l)}},{key:"Shift-Space",run:ie}]),oe(),ae(),ue(),le(),ce.fallback,se(),fe(),L.tabSize.of(2),de(),Qe,...ke,d.lineWrapping,d.updateListener.of(l=>{l.changes&&i&&i(l.state)}),d.updateListener.of(l=>{var u;if(l.heightChanged){const c=l.view.viewState.heightMap.height;(u=window.webkit)==null||u.messageHandlers.callbackHandler.postMessage({type:"height",msg:`${c}`})}})]}),o=new d({state:r,parent:n.value});t.value=o;const a=await A(e.language.value);a&&s.language.reconfigure(a),o.dispatch({effects:[s.language.reconfigure(a)]}),nn(o,{language:e.language})}),_(()=>e.language.value,async r=>{const o=await A(r);o&&s.language.reconfigure(o),t.value&&t.value.dispatch({effects:[s.language.reconfigure(o)]})}),Xe(t),[n,t]};function nn(e,n){window.editor=e,window.editor.setFontSize=t=>{document.documentElement.style.fontSize=`${t}px`,e.requestMeasure()},window.editor.getHeight=()=>e.viewState.heightMap.height,window.editor.makeReadonly=(t=!0)=>{e.dispatch({effects:[s.readonly.reconfigure(d.contentAttributes.of({contenteditable:!t}))]})},window.editor.setLanguage=t=>{!Ye(t)||(n.language.value=t)},window.editor.getAvailableLanguages=M}const tn=T({props:{deafultText:{type:String,required:!1},text:{type:String,required:!1},onChange:{type:Function,required:!1},onStateChange:{type:Function,required:!1}},emits:["update:value","update:state"],setup(e,{emit:n}){var a,l;const t=e,i=h("shell"),[r,o]=en({initialDoc:(l=(a=t.text)!=null?a:t.deafultText)!=null?l:"",language:i,onChange:u=>{var f,C;const c=u.doc.toString();n("update:state",u),n("update:value",c),(f=t.onChange)==null||f.call(t,u.doc.toString()),(C=t.onStateChange)==null||C.call(t,u)}});return _(()=>t.text,function u(c){const f=o.value;if(!f)return requestAnimationFrame(()=>u(c));c!==f.state.doc.toString()&&f.dispatch({changes:{from:0,to:f.state.doc.length,insert:c}})}),z(()=>{var u,c;"webkit"in window||(u=r.value)==null||u.classList.add("in-browser"),(c=o.value)==null||c.focus()}),(u,c)=>($(),pe("div",{ref_key:"refContainer",ref:r,class:"editor"},null,512))}});const rn=T({setup(e){const n=h(""),t=r=>{n.value=r};window.setText=t;const i=r=>{var a;const o={magic:"content",msg:r};(a=window.webkit)==null||a.messageHandlers.callbackHandler.postMessage(o),n.value=r};return(r,o)=>($(),he(tn,{text:n.value,"onUpdate:value":i},null,8,["text"]))}}),on=ge(rn);on.mount("#app");
