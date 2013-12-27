/**
*
*   classy.js
*   Object-Oriented mini-framework for JavaScript
*   @version: 0.4.2
*
*   https://github.com/foo123/classy.js
*
**/!function(e,t,r,n){r=r?[].concat(r):[];var o,l=r.length,a=new Array(l),i=new Array(l),c=new Array(l);for(o=0;l>o;o++)a[o]=r[o][0],i[o]=r[o][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[t]){for(o=0;l>o;o++)c[o]=module.exports[a[o]]||require(i[o])[a[o]];module.exports[t]=n.apply(e,c)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(i),function(r){if("undefined"==typeof r[t]){for(var o=Array.prototype.slice.call(arguments,1),l=0,i=o.length;i>l;l++)c[l]=r[a[l]];r[t]=n.apply(e,c)}});else if("undefined"==typeof e[t]){for(o=0;l>o;o++)c[o]=e[a[o]];e[t]=n.apply(e,c)}}(this,"Classy",null,function(){var e=Array.prototype.slice,t=(Array.prototype.splice,Array.prototype.concat,Object.prototype.toString),r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=Object.keys,l=Object.defineProperty,a=function(e){return"function"==typeof e},i=function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad desc");var n={};if(r.call(e,"enumerable")&&(n.enumerable=!!t.enumerable),r.call(e,"configurable")&&(n.configurable=!!t.configurable),r.call(e,"value")&&(n.value=t.value),r.call(e,"writable")&&(n.writable=!!e.writable),r.call(e,"get")){var o=e.get;if(!a(o)&&"undefined"!==o)throw new TypeError("bad get");n.get=o}if(r.call(e,"set")){var l=e.set;if(!a(l)&&"undefined"!==l)throw new TypeError("bad set");n.set=l}if(("get"in n||"set"in n)&&("value"in n||"writable"in n))throw new TypeError("identity-confused descriptor");return n},c=Object.defineProperties||function(e,t){if("object"!=typeof e||null===e)throw new TypeError("bad obj");t=Object(t);for(var r=o(t),n=[],a=0;a<r.length;a++)n.push([r[a],i(t[r[a]],e)]);for(var a=0;a<n.length;a++)l(e,n[a][0],n[a][1]);return e},u=Object.create||function(e,t){var r,n=function(){};return n.prototype=e,r=new n,r.__proto__=e,"object"==typeof t&&c(r,t),r},f=function(t,r){return r=r||0,function(n){if(n){for(var o=t,l=r;l&&o;)o=o.$super,l--;if(l)return;if(o){var a,i=this;if(n="constructor"==n?o:o.prototype[n])return r++,a=n.apply(i,e.call(arguments,1)),r--,a}}}},p=function(){var o,l,a,i,c,u,f,p,s=e.call(arguments);for(l=s.shift()||{},o=s.length,p=0;o>p;p++)if(a=s[p],a&&"object"==typeof a)for(f in a)r.call(a,f)&&n.call(a,f)&&(u=a[f],i=t.call(u),c=typeof u,l[f]="number"==c||u instanceof Number?0+u:u&&("[object Array]"==i||u instanceof Array||"string"==c||u instanceof String)?u.slice(0):u);return l},s=function(e,t){e=e||Object,t=t||{};var r=t.constructor?t.constructor:function(){};return r.prototype=u(e.prototype),r.prototype=p(r.prototype,t),c(r.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0},$class:{value:r,enumerable:!1,writable:!0,configurable:!0},$super:{value:f(e),enumerable:!1,writable:!0,configurable:!0}}),c(r,{$super:{value:e,enumerable:!1,writable:!0,configurable:!0},$static:{value:e.$static&&"object"==typeof e.$static?p(null,e.$static):null,enumerable:!1,writable:!0,configurable:!0}}),r},y=Mixin=p,b=function(){var t=e.call(arguments),r=t.length,n=null;if(r>=2){var o=typeof t[0];o="function"==o?{Extends:t[0]}:"object"==o?t[0]:{Extends:Object};var l,a,i=t[1]||{},c=t[2]||null,u={},f=o.Extends||o.extends||Object,b=o.Implements||o.implements,d=o.Mixin||o.mixin;if(b=b?[].concat(b):null,d=d?[].concat(d):null)for(l=0,a=d.length;a>l;l++)d[l].prototype&&(u=Mixin(u,d[l].prototype));if(b)for(l=0,a=b.length;a>l;l++)b[l].prototype&&(u=y(u,b[l].prototype));n=s(f,p(u,i)),c&&"object"==typeof c&&(n.$static=p(n.$static,c))}else n=s(Object,t[0]);return n};return{VERSION:"0.4.2",Class:b,Extends:s,Implements:y,Mixin:Mixin,Create:u,Merge:p}});
/**
*
*   A simple Regular Expression Analyzer
*   @version 0.2.4
*   https://github.com/foo123/regex-analyzer
*
**/!function(t,e,r,a){r=r?[].concat(r):[];var p,s=r.length,h=new Array(s),n=new Array(s),i=new Array(s);for(p=0;s>p;p++)h[p]=r[p][0],n[p]=r[p][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[e]){for(p=0;s>p;p++)i[p]=module.exports[h[p]]||require(n[p])[h[p]];module.exports[e]=a.apply(t,i)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(n),function(r){if("undefined"==typeof r[e]){for(var p=Array.prototype.slice.call(arguments,1),s=0,n=p.length;n>s;s++)i[s]=r[h[s]];r[e]=a.apply(t,i)}});else if("undefined"==typeof t[e]){for(p=0;s>p;p++)i[p]=t[h[p]];t[e]=a.apply(t,i)}}(this,"RegExAnalyzer",null,function(){var t="\\",e=/^\{\s*(\d+)\s*,?\s*(\d+)?\s*\}/,r=/^u([0-9a-fA-F]{4})/,a=/^x([0-9a-fA-F]{2})/,p={".":"MatchAnyChar","|":"MatchEither","?":"MatchZeroOrOne","*":"MatchZeroOrMore","+":"MatchOneOrMore","^":"MatchStart",$:"MatchEnd","{":"StartRepeats","}":"EndRepeats","(":"StartGroup",")":"EndGroup","[":"StartCharGroup","]":"EndCharGroup"},s={"\\":"EscapeChar","/":"/",0:"NULChar",f:"FormFeed",n:"LineFeed",r:"CarriageReturn",t:"HorizontalTab",v:"VerticalTab",b:"MatchWordBoundary",B:"MatchNonWordBoundary",s:"MatchSpaceChar",S:"MatchNonSpaceChar",w:"MatchWordChar",W:"MatchNonWordChar",d:"MatchDigitChar",D:"MatchNonDigitChar"},h=Object.prototype.toString,n=function(t,e){if(e&&(e instanceof Array||"[object Array]"==h.call(e)))for(var r=0,a=e.length;a>r;r++)t[e[r]]=1;else for(var r in e)t[r]=1;return t},i=function(t,e){t&&(t instanceof Array||"[object Array]"==h.call(t))&&(e=t[1],t=t[0]);var r,a,p=t.charCodeAt(0),s=e.charCodeAt(0);if(s==p)return[String.fromCharCode(p)];for(a=[],r=p;s>=r;++r)a.push(String.fromCharCode(r));return a},g=function(t){var e,r,a,p,s,h,o={},l={};if("Alternation"==t.type)for(a=0,p=t.part.length;p>a;a++)s=g(t.part[a]),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Group"==t.type)s=g(t.part),o=n(o,s.peek),l=n(l,s.negativepeek);else if("Sequence"==t.type){for(a=0,p=t.part.length,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;!h;)s=g(r.part),o=n(o,s.peek),l=n(l,s.negativepeek),a++,r=t.part[a],h=a>=p||!r||"Quantifier"!=r.type||!r.flags.MatchZeroOrMore&&!r.flags.MatchZeroOrOne&&"0"!=r.flags.MatchMinimum;p>a&&(r=t.part[a],"Special"!=r.type||"^"!=r.part&&"$"!=r.part||(r=t.part[a+1]||null),r&&"Quantifier"==r.type&&(r=r.part),r&&(s=g(r),o=n(o,s.peek),l=n(l,s.negativepeek)))}else if("CharGroup"==t.type)for(e=t.flags.NotMatch?l:o,a=0,p=t.part.length;p>a;a++)r=t.part[a],"Chars"==r.type?e=n(e,r.part):"CharRange"==r.type?e=n(e,i(r.part)):"UnicodeChar"==r.type||"HexChar"==r.type?e[r.flags.Char]=1:"Special"==r.type&&("D"==r.part?t.flags.NotMatch?o["\\d"]=1:l["\\d"]=1:"W"==r.part?t.flags.NotMatch?o["\\w"]=1:l["\\W"]=1:"S"==r.part?t.flags.NotMatch?o["\\s"]=1:l["\\s"]=1:e["\\"+r.part]=1);else"String"==t.type?o[t.part.charAt(0)]=1:"Special"!=t.type||t.flags.MatchStart||t.flags.MatchEnd?("UnicodeChar"==t.type||"HexChar"==t.type)&&(o[t.flags.Char]=1):"D"==t.part?l["\\d"]=1:"W"==t.part?l["\\W"]=1:"S"==t.part?l["\\s"]=1:o["\\"+t.part]=1;return{peek:o,negativepeek:l}},o=function(t,e){t&&this.setRegex(t,e)};return o.VERSION="0.2.4",o.getCharRange=i,o.prototype={constructor:o,VERSION:o.VERSION,regex:null,groupIndex:null,pos:null,flags:null,parts:null,getCharRange:o.getCharRange,getPeekChars:function(){var t,e,r,a,s=this.flags&&this.flags.i,h=g(this.parts);for(t in h){a={},r=h[t];for(e in r)"\\d"==e?(delete r[e],a=n(a,i("0","9"))):"\\s"==e?(delete r[e],a=n(a,["\f","\n","\r","	",""," ","\u2028","\u2029"])):"\\w"==e?(delete r[e],a=n(a,["_"].concat(i("0","9")).concat(i("a","z")).concat(i("A","Z")))):"\\."==e?(delete r[e],a[p["."]]=1):"\\"!=e.charAt(0)&&s?(a[e.toLowerCase()]=1,a[e.toUpperCase()]=1):"\\"==e.charAt(0)&&delete r[e];h[t]=n(r,a)}return h},setRegex:function(t,e){if(t){this.flags={},e=e||"/";for(var r=t.toString(),a=r.length,p=r.charAt(a-1);e!=p;)this.flags[p]=1,r=r.substr(0,a-1),a=r.length,p=r.charAt(a-1);e==r.charAt(0)&&e==r.charAt(a-1)&&(r=r.substr(1,a-2)),this.regex=r}return this},analyze:function(){var h,n,i,g="",o=[],l=[],u=!1;for(this.pos=0,this.groupIndex=0;this.pos<this.regex.length;)h=this.regex.charAt(this.pos++),u=t==h?!0:!1,u&&(h=this.regex.charAt(this.pos++)),u?"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h:"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,this.parts={part:o,flags:n,type:"Alternation"}):this.parts={part:l,flags:{},type:"Sequence"},this},subgroup:function(){var h,n,i,g="",o=[],l=[],u={},f=!1,c=this.regex.substr(this.pos,2);for("?:"==c?(u.NotCaptured=1,this.pos+=2):"?="==c?(u.LookAhead=1,this.pos+=2):"?!"==c&&(u.NegativeLookAhead=1,this.pos+=2),u.GroupIndex=++this.groupIndex;this.pos<this.regex.length;)if(h=this.regex.charAt(this.pos++),f=t==h?!0:!1,f&&(h=this.regex.charAt(this.pos++)),f)"u"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"UnicodeChar"})):"x"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:i[0],flags:{Char:String.fromCharCode(parseInt(i[1],16)),Code:i[1]},type:"HexChar"})):s[h]&&"/"!=h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[s[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h;else{if(")"==h)return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"};"|"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.push({part:l,flags:{},type:"Sequence"}),l=[]):"["==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.chargroup())):"("==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),l.push(this.subgroup())):"{"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),i=e.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,l.push({part:l.pop(),flags:{part:i[0],MatchMinimum:i[1],MatchMaximum:i[2]||"unlimited"},type:"Quantifier"})):"*"==h||"+"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,"?"==this.regex.charAt(this.pos)?(n.isGreedy=0,this.pos++):n.isGreedy=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):"?"==h?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:l.pop(),flags:n,type:"Quantifier"})):p[h]?(g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),n={},n[p[h]]=1,l.push({part:h,flags:n,type:"Special"})):g+=h}return g.length&&(l.push({part:g,flags:{},type:"String"}),g=""),o.length?(o.push({part:l,flags:{},type:"Sequence"}),l=[],n={},n[p["|"]]=1,{part:{part:o,flags:n,type:"Alternation"},flags:u,type:"Group"}):{part:{part:l,flags:{},type:"Sequence"},flags:u,type:"Group"}},chargroup:function(){var e,p,h,n,i,g,o=[],l=[],u={},f=!1,c=!1;for("^"==this.regex.charAt(this.pos)&&(u.NotMatch=1,this.pos++);this.pos<this.regex.length;)if(g=!1,h=p,p=this.regex.charAt(this.pos++),c=t==p?!0:!1,c&&(p=this.regex.charAt(this.pos++)),c&&("u"==p?(i=r.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0):"x"==p&&(i=a.exec(this.regex.substr(this.pos-1)),this.pos+=i[0].length-1,p=String.fromCharCode(parseInt(i[1],16)),g=!0)),f)l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),n[1]=p,f=!1,o.push({part:n,flags:{},type:"CharRange"});else if(c)!g&&s[p]&&"/"!=p?(l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),e={},e[s[p]]=1,o.push({part:p,flags:e,type:"Special"})):l.push(p);else{if("]"==p)return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"};"-"==p?(n=[h,""],l.pop(),f=!0):l.push(p)}return l.length&&(o.push({part:l,flags:{},type:"Chars"}),l=[]),{part:o,flags:u,type:"CharGroup"}}},o});
/**
*
*   CodeMirrorGrammar
*   @version: 0.6.2
*   Transform a grammar specification in JSON format,
*   into a CodeMirror syntax-highlight parser mode
*
*   https://github.com/foo123/codemirror-grammar
*
**/!function(t,n,e,r){e=e?[].concat(e):[];var i,s=e.length,o=new Array(s),l=new Array(s),u=new Array(s);for(i=0;s>i;i++)o[i]=e[i][0],l[i]=e[i][1];if("object"==typeof module&&module.exports){if("undefined"==typeof module.exports[n]){for(i=0;s>i;i++)u[i]=module.exports[o[i]]||require(l[i])[o[i]];module.exports[n]=r.apply(t,u)}}else if("function"==typeof define&&define.amd)define(["exports"].concat(l),function(e){if("undefined"==typeof e[n]){for(var i=Array.prototype.slice.call(arguments,1),s=0,l=i.length;l>s;s++)u[s]=e[o[s]];e[n]=r.apply(t,u)}});else if("undefined"==typeof t[n]){for(i=0;s>i;i++)u[i]=t[o[i]];t[n]=r.apply(t,u)}}(this,"CodeMirrorGrammar",[["Classy","./classy"],["RegExAnalyzer","./regexanalyzer"]],function(t,n){var e,r,s=t.Class,o=1/0,u=2,h=4,c=8,a=9,f=10,p=16,g=32,k=64,m=128,d=256,R=512,y=2,C=4,E=8,v=4,b=8,w=16,x=32,_=33,B=34,S=64,A=128,O=256,q=257,L=258,T=259,j=512,P=1024,M={ONEOF:S,EITHER:S,ALL:A,ZEROORONE:q,ZEROORMORE:L,ONEORMORE:T,REPEATED:O},D={BLOCK:x,COMMENT:B,ESCAPEDBLOCK:_,SIMPLE:w,GROUP:j,NGRAM:P},K={RegExpID:null,Style:null,Lex:null,Syntax:null,Parser:null},I=Array.prototype.slice,N=(Array.prototype.splice,Array.prototype.concat),$=Object.prototype.hasOwnProperty,F=Object.prototype.toString,U=Object.prototype.propertyIsEnumerable,z=Object.keys,G=function(t){var n=typeof t,e=F.call(t);return"undefined"==n?d:"number"==n||t instanceof Number?u:null===t?m:!0===t||!1===t?h:t&&("string"==n||t instanceof String)?1==t.length?a:c:t&&("[object RegExp]"==e||t instanceof RegExp)?p:t&&("[object Array]"==e||t instanceof Array)?g:t&&"[object Object]"==e?k:R},Z=function(t,n){return n||g!=G(t)?[t]:t},H=function(t,n){return t=Z(t,n),(n||g!=G(t[0]))&&(t=[t]),t},V=function(t){var n,e=G(t);if(!((k|g)&e))return t;var r,i={};for(r in t)$.call(t,r)&&U.call(t,r)&&(n=G(t[r]),i[r]=k&n?V(t[r]):g&n?t[r].slice():t[r]);return i},J=function(){var t=I.call(arguments),n=t.length;if(1>n)return null;if(2>n)return V(t[0]);var e,r,i,s,o=t.shift(),l=V(o);for(n--,r=0;n>r;r++)if(e=t.shift())for(i in e)$.call(e,i)&&U.call(e,i)&&($.call(o,i)&&U.call(o,i)?(s=G(o[i]),k&~c&s&&(l[i]=J(o[i],e[i]))):l[i]=V(e[i]));return l},Q=function(t){return t.replace(/([.*+?^${}()|[\]\/\\])/g,"\\$1")},W=function(t,n){return n.length-t.length},X=function(t,n){return c&G(n)&&c&G(t)&&n.length&&n.length<=t.length&&n==t.substr(0,n.length)},Y=function(t,e,r){if(!t||u==G(t))return t;var i=e?e.length||0:0;if(i&&e==t.substr(0,i)){var s,o,l,h="^("+t.substr(i)+")";return r[h]||(s=new RegExp(h),l=new n(s).analyze(),o=l.getPeekChars(),z(o.peek).length||(o.peek=null),z(o.negativepeek).length||(o.negativepeek=null),r[h]=[s,o]),r[h]}return t},tn=function(t,n){var e={},r="",i=G(n);(c==i||a==i)&&(r=n);var s=t.sort(W).map(function(t){return e[t.charAt(0)]=1,Q(t)}).join("|");return[new RegExp("^("+s+")"+r),{peek:e,negativepeek:null},1]},nn=s({constructor:function(t){this.string=t?""+t:"",this.start=this.pos=0,this._=null},_:null,string:"",start:0,pos:0,fromStream:function(t){return this._=t,this.string=""+t.string,this.start=t.start,this.pos=t.pos,this},toString:function(){return this.string},sol:function(){return 0==this.pos},eol:function(){return this.pos>=this.string.length},chr:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&t==e?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},chl:function(t,n){var e=this.string.charAt(this.pos)||null;return e&&-1<t.indexOf(e)?(!1!==n&&(this.pos+=1,this._&&(this._.pos=this.pos)),e):!1},str:function(t,n,e){var r=this.pos,i=this.string,s=i.charAt(r)||null;if(s&&n[s]){var o=t.length,l=i.substr(r,o);if(t==l)return!1!==e&&(this.pos+=o,this._&&(this._.pos=this.pos)),l}return!1},rex:function(t,n,e,r,i){var s=this.pos,o=this.string,l=o.charAt(s)||null;if(l&&n&&n[l]||e&&!e[l]){var u=o.slice(s).match(t);return!u||u.index>0?!1:(!1!==i&&(this.pos+=u[r||0].length,this._&&(this._.pos=this.pos)),u)}return!1},end:function(){return this.pos=this.string.length,this._&&(this._.pos=this.pos),this},nxt:function(){if(this.pos<this.string.length){var t=this.string.charAt(this.pos++)||null;return this._&&(this._.pos=this.pos),t}},bck:function(t){return this.pos-=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},bck2:function(t){return this.pos=t,0>this.pos&&(this.pos=0),this._&&(this._.pos=this.pos),this},spc:function(){for(var t=this.pos,n=this.pos,e=this.string;/[\s\u00a0]/.test(e.charAt(n));)++n;return this.pos=n,this._&&(this._.pos=this.pos),this.pos>t},cur:function(){return this.string.slice(this.start,this.pos)},sft:function(){return this.start=this.pos,this}}),en=s({constructor:function(t){this.l=t||0,this.stack=[],this.t=b,this.r="0",this.inBlock=null,this.endBlock=null},l:0,stack:null,t:null,r:null,inBlock:null,endBlock:null,clone:function(){var t=new this.$class(this.l);return t.t=0+this.t,t.r=""+this.r,t.stack=this.stack.slice(),t.inBlock=this.inBlock,t.endBlock=this.endBlock,t},toString:function(){return["",this.l,this.t,this.r,this.inBlock||"0"].join("_")}}),rn=s({constructor:function(t,n,e,r){switch(this.type=y,this.tt=t||a,this.tn=n,this.tk=r||0,this.tg=0,this.tp=null,this.p=null,this.np=null,this.tt){case a:case f:this.tp=e;break;case c:this.tp=e,this.p={},this.p[""+e.charAt(0)]=1;break;case p:this.tp=e[0],this.p=e[1].peek||null,this.np=e[1].negativepeek||null,this.tg=e[2]||0;break;case m:this.tp=null}},type:null,tt:null,tn:null,tp:null,tg:0,tk:0,p:null,np:null,get:function(t,n){var e,r=this.tt,i=this.tk,s=this.tp,o=this.tg,l=this.p,u=this.np;switch(r){case a:if(e=t.chr(s,n))return[i,e];break;case f:if(e=t.chl(s,n))return[i,e];break;case c:if(e=t.str(s,l,n))return[i,e];break;case p:if(e=t.rex(s,l,u,o,n))return[i,e];break;case m:return!1!==n&&t.end(),[i,""]}return!1},toString:function(){return["[","Matcher: ",this.tn,", Pattern: ",this.tp?this.tp.toString():null,"]"].join("")}}),sn=s(rn,{constructor:function(t,n,e){this.type=C,this.tn=t,this.ms=n,this.ownKey=!1!==e},ms:null,ownKey:!0,get:function(t,n){var e,r,i=this.ms,s=i.length,o=this.ownKey;for(e=0;s>e;e++)if(r=i[e].get(t,n))return o?[e,r[1]]:r;return!1}}),on=s(rn,{constructor:function(t,n,e){this.type=E,this.tn=t,this.s=new sn(this.tn+"_Start",n,!1),this.e=e},s:null,e:null,get:function(t,n){var e,r=this.s,i=this.e;if(e=r.get(t,n)){var s=i[e[0]];return u==G(s)&&(s=new rn(c,this.tn+"_End",e[1][s+1])),s}return!1}}),ln=function(t,n,e,r){var i=G(n);if(u==i)return n;if(!r[t]){e=e||0;var s,o=0;n&&n.isCharList&&(o=1,delete n.isCharList),s=m&i?new rn(m,t,n,e):a==i?new rn(a,t,n,e):c&i?o?new rn(f,t,n,e):new rn(c,t,n,e):g&i?new rn(p,t,n,e):n,r[t]=s}return r[t]},un=function(t,n,e,r,i,s){if(!s[t]){var o,l,u,h,f,p,k,m=0,d=0,R=1;if(o=Z(n),u=o.length,1==u)k=ln(t,Y(o[0],e,i),0,s);else if(u>1){for(h=(u>>1)+1,l=0;h>=l;l++)f=G(o[l]),p=G(o[u-1-l]),(a!=f||a!=p)&&(R=0),g&f||g&p?m=1:(X(o[l],e)||X(o[u-1-l],e))&&(d=1);if(!R||r&&c&G(r))if(!r||m||d){for(l=0;u>l;l++)o[l]=g&G(o[l])?un(t+"_"+l,o[l],e,r,i,s):ln(t+"_"+l,Y(o[l],e,i),l,s);k=u>1?new sn(t,o):o[0]}else k=ln(t,tn(o,r),0,s);else o=o.slice().join(""),o.isCharList=1,k=ln(t,o,0,s)}s[t]=k}return s[t]},hn=function(t,n,e,r,i){if(!i[t]){var s,o,l,u,h,c,a;for(u=[],h=[],s=H(n),o=0,l=s.length;l>o;o++)c=ln(t+"_0_"+o,Y(s[o][0],e,r),o,i),a=s[o].length>1?ln(t+"_1_"+o,Y(s[o][1],e,r),o,i):c,u.push(c),h.push(a);i[t]=new on(t,u,h)}return i[t]},cn=s({constructor:function(t,n,e){this.tt=w,this.tn=t,this.t=n,this.r=e,this.required=0,this.ERR=0,this.toClone=["t","r"]},tn:null,tt:null,t:null,r:null,required:0,ERR:0,toClone:null,actionBefore:null,actionAfter:null,get:function(t,n){return this.t.get(t)?(n.t=this.tt,this.r):!1},require:function(t){return this.required=t?1:0,this},push:function(t,n,e){return n?t.splice(n,0,e):t.push(e),this},clone:function(){var t,n,e=this.toClone;if(t=new this.$class,t.tt=this.tt,t.tn=this.tn,t.actionBefore=this.actionBefore,t.actionAfter=this.actionAfter,e&&e.length){n=e.length;for(var r=0;n>r;r++)t[e[r]]=this[e[r]]}return t},toString:function(){return["[","Tokenizer: ",this.tn,", Matcher: ",this.t?this.t.toString():null,"]"].join("")}}),an=s(cn,{constructor:function(t,n,e,r,i,s){this.$super("constructor",n,e,r),this.tt=t,this.mline="undefined"==typeof i?1:i,this.esc=s||"\\",this.toClone=["t","r","mline","esc"]},mline:0,esc:null,get:function(t,n){var e,r,i,s=0,o=0,l="",u=this.mline,h=this.t,c=this.tn,a=0,f=_==this.tt,p=this.esc;if(B==this.tt&&(this.required=0),n.inBlock==c?(o=1,e=n.endBlock):!n.inBlock&&(e=h.get(t))&&(o=1,n.inBlock=c,n.endBlock=e),o){if(i=n.stack.length,s=e.get(t),r=u,!s)for(;!t.eol();){if(!(f&&a||!e.get(t))){s=1;break}l=t.nxt(),a=!a&&l==p}return r=u&&(!f||a),s||!r?(n.inBlock=null,n.endBlock=null):this.push(n.stack,i,this),n.t=this.tt,this.r}return!1}}),fn=s(cn,{constructor:function(t,n,e,r){this.tt=O,this.tn=t||null,this.t=null,this.ts=null,this.min=e||0,this.max=r||o,this.found=0,this.toClone=["ts","min","max","found"],n&&this.set(n)},ts:null,min:0,max:1,found:0,set:function(t){return t&&(this.ts=Z(t)),this},get:function(t,n){var e,r,i,s,o,l=this.ts,u=l.length,h=this.found,c=this.min,a=this.max,f=0;for(this.ERR=0,this.required=0,s=t.pos,o=n.stack.length,e=0;u>e;e++){if(r=l[e].clone().require(1),i=r.get(t,n),!1!==i){if(++h,a>=h)return this.found=h,this.push(n.stack,o,this.clone()),this.found=0,i;break}r.required&&f++,r.ERR&&t.bck2(s)}return this.required=c>h,this.ERR=h>a||c>h&&f>0,!1}}),pn=s(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=S},get:function(t,n){var e,r,i,s,o=this.ts,l=o.length,u=0,h=0;for(this.required=1,this.ERR=0,s=t.pos,i=0;l>i;i++){if(r=o[i].clone(),e=r.get(t,n),u+=r.required?1:0,!1!==e)return e;r.ERR&&(h++,t.bck2(s))}return this.required=u>0,this.ERR=l==h&&u>0,!1}}),gn=s(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=A},get:function(t,n){var e,r,i,s,o=this.ts,l=o.length;if(this.required=1,this.ERR=0,i=t.pos,e=o[0].clone().require(1),r=e.get(t,n),!1!==r){s=n.stack.length;for(var u=l-1;u>0;u--)this.push(n.stack,s+l-u,o[u].clone().require(1));return r}return e.ERR?(this.ERR=1,t.bck2(i)):e.required&&(this.ERR=1),!1}}),kn=s(fn,{constructor:function(t,n){this.$super("constructor",t,n,1,1),this.tt=P},get:function(t,n){var e,r,i,s,o=this.ts,l=o.length;if(this.required=0,this.ERR=0,i=t.pos,e=o[0].clone().require(0),r=e.get(t,n),!1!==r){s=n.stack.length;for(var u=l-1;u>0;u--)this.push(n.stack,s+l-u,o[u].clone().require(1));return r}return e.ERR&&t.bck2(i),!1}}),mn=function(t,n,r,i,s,l,u,h,a,f,p){if(t=""+t,!h[t]){var k,m,d,R,y,C,E=null;if(k=r[t]||i[t]||{type:"simple",tokens:t})if((c|g)&G(k)&&(k={type:"simple",tokens:k}),m=k.type?D[k.type.toUpperCase().replace("-","").replace("_","")]:w,k.tokens=Z(k.tokens),R=k.action||null,w&m)k.autocomplete&&Rn(k,t,p),d="undefined"==typeof k.combine?"\\b":k.combine,E=new cn(t,un(t,k.tokens.slice(),n,d,l,u),s[t]||e),h[t]=E;else if(x&m)B&m&&dn(k,f),E=new an(m,t,hn(t,k.tokens.slice(),n,l,u),s[t]||e,k.multiline,k.escape),h[t]=E,k.interleave&&a.push(E.clone());else if(j&m){C=k.tokens.slice(),g&G(k.match)?E=new fn(t,null,k.match[0],k.match[1]):(y=M[k.match.toUpperCase()],E=q==y?new fn(t,null,0,1):L==y?new fn(t,null,0,o):T==y?new fn(t,null,1,o):S&y?new pn(t,null):new gn(t,null)),h[t]=E;for(var v=0,b=C.length;b>v;v++)C[v]=mn(C[v],n,r,i,s,l,u,h,a,f,p);E.set(C)}else if(P&m){E=H(k.tokens.slice()).slice();for(var _,A=[],v=0,b=E.length;b>v;v++)A[v]=E[v].slice(),E[v]=new kn(t+"_NGRAM_"+v,null);h[t]=E;for(var v=0,b=E.length;b>v;v++){_=A[v];for(var O=0,K=_.length;K>O;O++)_[O]=mn(_[O],n,r,i,s,l,u,h,a,f,p);E[v].set(_)}}}return h[t]},dn=function(t,n){var e,r,s,o=H(t.tokens.slice());for(i=0,l=o.length;l>i;i++)e=o[i][0],r=o[i].length>1?o[i][1]:o[i][0],s=o[i].length>2?o[i][2]:"",null===r?(n.line=n.line||[],n.line.push(e)):(n.block=n.block||[],n.block.push([e,r,s]))},Rn=function(t,n,e){var r=[].concat(Z(t.tokens)).map(function(t){return{word:t,meta:n}});e.autocomplete=N.apply(e.autocomplete||[],r)},yn=function(t){var n,e,r,i,s,o,l,u,h,c,a,f,p,k,m,d;if(t.__parsed)return t;for(a={},f={},p={},m={},d={},k=[],t=J(t,K),n=t.RegExpID||null,t.RegExpID=null,delete t.RegExpID,o=t.Lex||{},t.Lex=null,delete t.Lex,l=t.Syntax||{},t.Syntax=null,delete t.Syntax,s=t.Style||{},i=t.Parser||[],r=i.length,e=[],u=0;r>u;u++)h=i[u],c=mn(h,n,o,l,s,a,f,p,k,m,d)||null,c&&(g&G(c)?e=e.concat(c):e.push(c));return t.Parser=e,t.cTokens=k,t.Style=s,t.Comments=m,t.Keywords=d,t.__parsed=1,t},Cn=CodeMirror||{Pass:{toString:function(){return"CodeMirror.Pass"}}},En=s({constructor:function(t,n){this.electricChars=t.electricChars||!1,this.LC=t.Comments.line?t.Comments.line[0]:null,this.BCS=t.Comments.block?t.Comments.block[0][0]:null,this.BCE=t.Comments.block?t.Comments.block[0][1]:null,this.BCC=this.BCL=t.Comments.block?t.Comments.block[0][2]:null,this.DEF=n.DEFAULT,this.ERR=t.Style.error||n.ERROR,this.Keywords=t.Keywords.autocomplete||null,this.Tokens=t.Parser||[],this.cTokens=t.cTokens.length?t.cTokens:null},conf:null,parserConf:null,electricChars:!1,LC:null,BCS:null,BCE:null,BCL:null,BCC:null,ERR:null,DEF:null,Keywords:null,cTokens:null,Tokens:null,getToken:function(t,n){var e,r,i,s,o,l,u=this.cTokens,h=this.Tokens,c=h.length,a=this.DEF,f=this.ERR;if(l=n.stack,o=(new nn).fromStream(t),o.spc())return n.t=b,n.r=a;for(;l.length;){if(u)for(r=0;r<u.length;)if(i=u[r++],s=i.get(o,n),!1!==s)return n.r=s;if(i=l.pop(),s=i.get(o,n),!1!==s)return n.r=s;if(i.ERR||i.required)return l.length=0,o.nxt(),n.t=v,n.r=f}for(e=0;c>e;e++){if(i=h[e],s=i.get(o,n),!1!==s)return n.r=s;if(i.ERR||i.required)return l.length=0,o.nxt(),n.t=v,n.r=f}return o.nxt(),n.t=b,n.r=a},indent:function(){return Cn.Pass}}),vn=function(t,n){return new En(t,n)},bn=function(t){return function(n,e){return t.conf=n,t.parserConf=e,{startState:function(){return new en},electricChars:t.electricChars,lineComment:t.LC,blockCommentStart:t.BCS,blockCommentEnd:t.BCE,blockCommentContinue:t.BCC,blockCommentLead:t.BCL,copyState:function(t){return t.clone()},token:function(n,e){return t.getToken(n,e)},indent:function(n,e,r){return t.indent(n,e,r)}}}},wn=function(t,n){var i={DEFAULT:n||e,ERROR:r};return t=yn(t),bn(vn(t,i))};e=null,r="error";var xn={VERSION:"0.6.2",extend:J,parse:yn,getMode:wn};return xn});
