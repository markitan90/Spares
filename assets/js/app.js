/*!
 * VERSION: 1.20.0
 * DATE: 2017-06-13
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h="none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{
prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=b()):"function"==typeof define&&define.amd&&define(["TweenLite"],b)}("CSSPlugin");
/*!
 * VERSION: 1.15.6
 * DATE: 2017-06-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"undefined"!=typeof module&&module.exports?(require("../TweenLite.min.js"),module.exports=a()):"function"==typeof define&&define.amd&&define(["TweenLite"],a)}();

;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

                event.stopImmediatePropagation();
                var $sf = $(this);

                setTimeout(function() {

                    if( _.options.pauseOnFocus ) {
                        _.focussed = $sf.is(':focus');
                        _.autoPlay();
                    }

                }, 0);

            });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
            numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
            tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                return (val >= 0) && (val < _.slideCount);
            });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                    $(this).attr({
                        'aria-describedby': 'slick-slide-control' + _.instanceUid + slideControlIndex
                    });
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
            _.$slides.eq(i).attr('tabindex', 0);
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if ( _.options.dots === true && _.options.pauseOnDotsHover === true ) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function() {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if( $.type( arguments[0] ) === 'object' ) {

                option =  arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ( $.type( arguments[0] ) === 'string' ) {

                option =  arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                    type = 'responsive';

                } else if ( typeof arguments[1] !== 'undefined' ) {

                    type = 'single';

                }

            }

            if ( type === 'single' ) {

                _.options[option] = value;


            } else if ( type === 'multiple' ) {

                $.each( option , function( opt, val ) {

                    _.options[opt] = val;

                });


            } else if ( type === 'responsive' ) {

                for ( item in value ) {

                    if( $.type( _.options.responsive ) !== 'array' ) {

                        _.options.responsive = [ value[item] ];

                    } else {

                        l = _.options.responsive.length-1;

                        // loop through the responsive object and splice out duplicates.
                        while( l >= 0 ) {

                            if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                                _.options.responsive.splice(l,1);

                            }

                            l--;

                        }

                        _.options.responsive.push( value[item] );

                    }

                }

            }

            if ( refresh ) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f=this.duration()>99999999999?this.recent().endTime(!1):this._duration,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.2",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7&&a>=0)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<p&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),q!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";
for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.0",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h="none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,
m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&"hidden"!==d.visibilityState&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),
a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.2",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=0),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

$('.autoSlider').slick({
    infinite: true,
    dots: true,
    dotsClass: 'dotsSlider',
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsiveClass:true,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});

// работа формы и чекбокса

$(document).ready(function () {
    $('.field').on('blur', function () {
        if ($(this).val()) {
            $(this).closest('.field__wrap').find('.check-box').addClass('checked');
        } else {
            $(this).closest('.field__wrap').find('.check-box').removeClass('checked');
        }
    })
});

// гамбургер

$(document).ready(function(){
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
    });
});

$(".hamburger").click(function () {
    $(this).toggleClass("menu-on");
    $(".nav").toggleClass('active');
});


//хеадер фиксированый

$(document).ready(function(){
    // Фикмированная шапка при скролле
    $("#header").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $("#header").addClass("default").fadeIn('fast');
        } else {
            $("#header").removeClass("default").fadeIn('fast');
        };
    });
});



        // анимации!! на странице с автомобильными марками
        TweenMax.staggerFrom('.autoMark', 0.3, { opacity: 0, rotation: -360, y: -1000, x: -1000 }, 0.09);

        //анимации на главной странице

        TweenMax.staggerFrom('.logoHome', 0.8, { opacity: 0, x:1000 }, 0.1);
        TweenMax.staggerFrom('.logoText', 0.8, { opacity: 0, x:-1000 }, 0.5);

        $(document).ready(function(){
            // Фикмированная шапка при скролле
            $(".aboutImage").removeClass("default");
            $(window).scroll(function(){
                if ($(this).scrollTop() > 550) {
                    TweenMax.to('.aboutImage', 1.5, {opacity: 1, x: -100});
                    TweenMax.staggerFrom('.allAboutInfo', 0.8, {opacity: 1,  x: -100}, 2);
                }
                if ($(this).scrollTop() > 850) {
                    TweenMax.to('.aboutInfoTitle', 2, {opacity: 1, x: 100}, 0.5);
                }
            });
        });

//анимации на странице о сервисе

    TweenMax.staggerFrom('.AS-allInfoText', 0.8, { opacity: 0,  y: -1000, x: -1000 }, 0.1);
    TweenMax.staggerFrom('.AS-allInfoContact', 0.8, { opacity: 0,  y: 1000, x: 1000 }, 0.1);

    //текст в карточке с товаром и инфой
    TweenMax.staggerFrom('.cardBattonBack', 1.2, {  x: -1000 }, 0.1);
    TweenMax.staggerFrom('.markCar', 0.5, {  y: -1000 }, 0.1);
    TweenMax.staggerFrom('.markImg', 1.2, {  x: 1000 }, 0.1);

    TweenMax.staggerFrom('.card--bott--info', 0.5, {  x: -1000 }, 0.1);
    TweenMax.staggerFrom('.card--boot--mark', 1.2, {  x: 1000 }, 0.1);


    TweenMax.staggerFrom('.card--bott-img', 2, {  x: 200 });


    TweenMax.staggerFrom('.sharesInfoText', 1, { autoAlpha: 0, y: 50 },0.5);
    TweenMax.staggerFrom('.sharesImg', 1, {  autoAlpha: 0, y: 50},0.5);
    TweenMax.staggerFrom('.sharesAllText', 1, {  autoAlpha: 0, y: 50, delay: 1},0.5);



    $('.carBatton').mouseover(function () {
        TweenMax.to('.carLeft', 0.5, {  x: 205, y:5, rotation:720});
        TweenMax.to('.carLeft', 0.5, {  scale: 12, delay: 0.6});

        TweenMax.to('.carLeft2', 0.5, {  x: 65, rotation:720});
        TweenMax.to('.carLeft2', 0.5, {  scale: 12, delay: 0.6});

        TweenMax.to('.carLeft3', 0.5, {  x: 345, rotation:720});
        TweenMax.to('.carLeft3', 0.5, {  scale: 12, delay: 0.6});

    });
    $('.carBatton').mouseout(function () {
        TweenMax.to('.carLeft', 0.5, {  x: -35, rotation:-720, scale: 1  });

        TweenMax.to('.carLeft2', 0.5, {  x: -35, rotation:-720, scale: 1  });

        TweenMax.to('.carLeft3', 0.5, {  x: -35, rotation:-720, scale: 1  });
    });



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNTU1BsdWdpbi5taW4uanMiLCJFYXNlUGFjay5taW4uanMiLCJzbGljay5qcyIsIlR3ZWVuTWF4Lm1pbi5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNTZGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBWRVJTSU9OOiAxLjIwLjBcbiAqIERBVEU6IDIwMTctMDYtMTNcbiAqIFVQREFURVMgQU5EIERPQ1MgQVQ6IGh0dHA6Ly9ncmVlbnNvY2suY29tXG4gKlxuICogQGxpY2Vuc2UgQ29weXJpZ2h0IChjKSAyMDA4LTIwMTcsIEdyZWVuU29jay4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgd29yayBpcyBzdWJqZWN0IHRvIHRoZSB0ZXJtcyBhdCBodHRwOi8vZ3JlZW5zb2NrLmNvbS9zdGFuZGFyZC1saWNlbnNlIG9yIGZvclxuICogQ2x1YiBHcmVlblNvY2sgbWVtYmVycywgdGhlIHNvZnR3YXJlIGFncmVlbWVudCB0aGF0IHdhcyBpc3N1ZWQgd2l0aCB5b3VyIG1lbWJlcnNoaXAuXG4gKiBcbiAqIEBhdXRob3I6IEphY2sgRG95bGUsIGphY2tAZ3JlZW5zb2NrLmNvbVxuICovXG52YXIgX2dzU2NvcGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOnRoaXN8fHdpbmRvdzsoX2dzU2NvcGUuX2dzUXVldWV8fChfZ3NTY29wZS5fZ3NRdWV1ZT1bXSkpLnB1c2goZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtfZ3NTY29wZS5fZ3NEZWZpbmUoXCJwbHVnaW5zLkNTU1BsdWdpblwiLFtcInBsdWdpbnMuVHdlZW5QbHVnaW5cIixcIlR3ZWVuTGl0ZVwiXSxmdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGc9ZnVuY3Rpb24oKXthLmNhbGwodGhpcyxcImNzc1wiKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5sZW5ndGg9MCx0aGlzLnNldFJhdGlvPWcucHJvdG90eXBlLnNldFJhdGlvfSxoPV9nc1Njb3BlLl9nc0RlZmluZS5nbG9iYWxzLGk9e30saj1nLnByb3RvdHlwZT1uZXcgYShcImNzc1wiKTtqLmNvbnN0cnVjdG9yPWcsZy52ZXJzaW9uPVwiMS4yMC4wXCIsZy5BUEk9MixnLmRlZmF1bHRUcmFuc2Zvcm1QZXJzcGVjdGl2ZT0wLGcuZGVmYXVsdFNrZXdUeXBlPVwiY29tcGVuc2F0ZWRcIixnLmRlZmF1bHRTbW9vdGhPcmlnaW49ITAsaj1cInB4XCIsZy5zdWZmaXhNYXA9e3RvcDpqLHJpZ2h0OmosYm90dG9tOmosbGVmdDpqLHdpZHRoOmosaGVpZ2h0OmosZm9udFNpemU6aixwYWRkaW5nOmosbWFyZ2luOmoscGVyc3BlY3RpdmU6aixsaW5lSGVpZ2h0OlwiXCJ9O3ZhciBrLGwsbSxuLG8scCxxLHIscz0vKD86XFwtfFxcLnxcXGIpKFxcZHxcXC58ZVxcLSkrL2csdD0vKD86XFxkfFxcLVxcZHxcXC5cXGR8XFwtXFwuXFxkfFxcKz1cXGR8XFwtPVxcZHxcXCs9LlxcZHxcXC09XFwuXFxkKSsvZyx1PS8oPzpcXCs9fFxcLT18XFwtfFxcYilbXFxkXFwtXFwuXStbYS16QS1aMC05XSooPzolfFxcYikvZ2ksdj0vKD8hWystXT9cXGQqXFwuP1xcZCt8WystXXxlWystXVxcZCspW14wLTldL2csdz0vKD86XFxkfFxcLXxcXCt8PXwjfFxcLikqL2cseD0vb3BhY2l0eSAqPSAqKFteKV0qKS9pLHk9L29wYWNpdHk6KFteO10qKS9pLHo9L2FscGhhXFwob3BhY2l0eSAqPS4rP1xcKS9pLEE9L14ocmdifGhzbCkvLEI9LyhbQS1aXSkvZyxDPS8tKFthLXpdKS9naSxEPS8oXig/OnVybFxcKFxcXCJ8dXJsXFwoKSl8KD86KFxcXCJcXCkpJHxcXCkkKS9naSxFPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0sRj0vKD86TGVmdHxSaWdodHxXaWR0aCkvaSxHPS8oTTExfE0xMnxNMjF8TTIyKT1bXFxkXFwtXFwuZV0rL2dpLEg9L3Byb2dpZFxcOkRYSW1hZ2VUcmFuc2Zvcm1cXC5NaWNyb3NvZnRcXC5NYXRyaXhcXCguKz9cXCkvaSxJPS8sKD89W15cXCldKig/OlxcKHwkKSkvZ2ksSj0vW1xccyxcXChdL2ksSz1NYXRoLlBJLzE4MCxMPTE4MC9NYXRoLlBJLE09e30sTj17c3R5bGU6e319LE89X2dzU2NvcGUuZG9jdW1lbnR8fHtjcmVhdGVFbGVtZW50OmZ1bmN0aW9uKCl7cmV0dXJuIE59fSxQPWZ1bmN0aW9uKGEsYil7cmV0dXJuIE8uY3JlYXRlRWxlbWVudE5TP08uY3JlYXRlRWxlbWVudE5TKGJ8fFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLGEpOk8uY3JlYXRlRWxlbWVudChhKX0sUT1QKFwiZGl2XCIpLFI9UChcImltZ1wiKSxTPWcuX2ludGVybmFscz17X3NwZWNpYWxQcm9wczppfSxUPShfZ3NTY29wZS5uYXZpZ2F0b3J8fHt9KS51c2VyQWdlbnR8fFwiXCIsVT1mdW5jdGlvbigpe3ZhciBhPVQuaW5kZXhPZihcIkFuZHJvaWRcIiksYj1QKFwiYVwiKTtyZXR1cm4gbT0tMSE9PVQuaW5kZXhPZihcIlNhZmFyaVwiKSYmLTE9PT1ULmluZGV4T2YoXCJDaHJvbWVcIikmJigtMT09PWF8fHBhcnNlRmxvYXQoVC5zdWJzdHIoYSs4LDIpKT4zKSxvPW0mJnBhcnNlRmxvYXQoVC5zdWJzdHIoVC5pbmRleE9mKFwiVmVyc2lvbi9cIikrOCwyKSk8NixuPS0xIT09VC5pbmRleE9mKFwiRmlyZWZveFwiKSwoL01TSUUgKFswLTldezEsfVtcXC4wLTldezAsfSkvLmV4ZWMoVCl8fC9UcmlkZW50XFwvLipydjooWzAtOV17MSx9W1xcLjAtOV17MCx9KS8uZXhlYyhUKSkmJihwPXBhcnNlRmxvYXQoUmVnRXhwLiQxKSksYj8oYi5zdHlsZS5jc3NUZXh0PVwidG9wOjFweDtvcGFjaXR5Oi41NTtcIiwvXjAuNTUvLnRlc3QoYi5zdHlsZS5vcGFjaXR5KSk6ITF9KCksVj1mdW5jdGlvbihhKXtyZXR1cm4geC50ZXN0KFwic3RyaW5nXCI9PXR5cGVvZiBhP2E6KGEuY3VycmVudFN0eWxlP2EuY3VycmVudFN0eWxlLmZpbHRlcjphLnN0eWxlLmZpbHRlcil8fFwiXCIpP3BhcnNlRmxvYXQoUmVnRXhwLiQxKS8xMDA6MX0sVz1mdW5jdGlvbihhKXtfZ3NTY29wZS5jb25zb2xlJiZjb25zb2xlLmxvZyhhKX0sWD1cIlwiLFk9XCJcIixaPWZ1bmN0aW9uKGEsYil7Yj1ifHxRO3ZhciBjLGQsZT1iLnN0eWxlO2lmKHZvaWQgMCE9PWVbYV0pcmV0dXJuIGE7Zm9yKGE9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cigxKSxjPVtcIk9cIixcIk1velwiLFwibXNcIixcIk1zXCIsXCJXZWJraXRcIl0sZD01Oy0tZD4tMSYmdm9pZCAwPT09ZVtjW2RdK2FdOyk7cmV0dXJuIGQ+PTA/KFk9Mz09PWQ/XCJtc1wiOmNbZF0sWD1cIi1cIitZLnRvTG93ZXJDYXNlKCkrXCItXCIsWSthKTpudWxsfSwkPU8uZGVmYXVsdFZpZXc/Ty5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlOmZ1bmN0aW9uKCl7fSxfPWcuZ2V0U3R5bGU9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZjtyZXR1cm4gVXx8XCJvcGFjaXR5XCIhPT1iPyghZCYmYS5zdHlsZVtiXT9mPWEuc3R5bGVbYl06KGM9Y3x8JChhKSk/Zj1jW2JdfHxjLmdldFByb3BlcnR5VmFsdWUoYil8fGMuZ2V0UHJvcGVydHlWYWx1ZShiLnJlcGxhY2UoQixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTphLmN1cnJlbnRTdHlsZSYmKGY9YS5jdXJyZW50U3R5bGVbYl0pLG51bGw9PWV8fGYmJlwibm9uZVwiIT09ZiYmXCJhdXRvXCIhPT1mJiZcImF1dG8gYXV0b1wiIT09Zj9mOmUpOlYoYSl9LGFhPVMuY29udmVydFRvUGl4ZWxzPWZ1bmN0aW9uKGEsYyxkLGUsZil7aWYoXCJweFwiPT09ZXx8IWUmJlwibGluZUhlaWdodFwiIT09YylyZXR1cm4gZDtpZihcImF1dG9cIj09PWV8fCFkKXJldHVybiAwO3ZhciBoLGksaixrPUYudGVzdChjKSxsPWEsbT1RLnN0eWxlLG49MD5kLG89MT09PWQ7aWYobiYmKGQ9LWQpLG8mJihkKj0xMDApLFwibGluZUhlaWdodFwiIT09Y3x8ZSlpZihcIiVcIj09PWUmJi0xIT09Yy5pbmRleE9mKFwiYm9yZGVyXCIpKWg9ZC8xMDAqKGs/YS5jbGllbnRXaWR0aDphLmNsaWVudEhlaWdodCk7ZWxzZXtpZihtLmNzc1RleHQ9XCJib3JkZXI6MCBzb2xpZCByZWQ7cG9zaXRpb246XCIrXyhhLFwicG9zaXRpb25cIikrXCI7bGluZS1oZWlnaHQ6MDtcIixcIiVcIiE9PWUmJmwuYXBwZW5kQ2hpbGQmJlwidlwiIT09ZS5jaGFyQXQoMCkmJlwicmVtXCIhPT1lKW1baz9cImJvcmRlckxlZnRXaWR0aFwiOlwiYm9yZGVyVG9wV2lkdGhcIl09ZCtlO2Vsc2V7aWYobD1hLnBhcmVudE5vZGV8fE8uYm9keSwtMSE9PV8obCxcImRpc3BsYXlcIikuaW5kZXhPZihcImZsZXhcIikmJihtLnBvc2l0aW9uPVwiYWJzb2x1dGVcIiksaT1sLl9nc0NhY2hlLGo9Yi50aWNrZXIuZnJhbWUsaSYmayYmaS50aW1lPT09ailyZXR1cm4gaS53aWR0aCpkLzEwMDttW2s/XCJ3aWR0aFwiOlwiaGVpZ2h0XCJdPWQrZX1sLmFwcGVuZENoaWxkKFEpLGg9cGFyc2VGbG9hdChRW2s/XCJvZmZzZXRXaWR0aFwiOlwib2Zmc2V0SGVpZ2h0XCJdKSxsLnJlbW92ZUNoaWxkKFEpLGsmJlwiJVwiPT09ZSYmZy5jYWNoZVdpZHRocyE9PSExJiYoaT1sLl9nc0NhY2hlPWwuX2dzQ2FjaGV8fHt9LGkudGltZT1qLGkud2lkdGg9aC9kKjEwMCksMCE9PWh8fGZ8fChoPWFhKGEsYyxkLGUsITApKX1lbHNlIGk9JChhKS5saW5lSGVpZ2h0LGEuc3R5bGUubGluZUhlaWdodD1kLGg9cGFyc2VGbG9hdCgkKGEpLmxpbmVIZWlnaHQpLGEuc3R5bGUubGluZUhlaWdodD1pO3JldHVybiBvJiYoaC89MTAwKSxuPy1oOmh9LGJhPVMuY2FsY3VsYXRlT2Zmc2V0PWZ1bmN0aW9uKGEsYixjKXtpZihcImFic29sdXRlXCIhPT1fKGEsXCJwb3NpdGlvblwiLGMpKXJldHVybiAwO3ZhciBkPVwibGVmdFwiPT09Yj9cIkxlZnRcIjpcIlRvcFwiLGU9XyhhLFwibWFyZ2luXCIrZCxjKTtyZXR1cm4gYVtcIm9mZnNldFwiK2RdLShhYShhLGIscGFyc2VGbG9hdChlKSxlLnJlcGxhY2UodyxcIlwiKSl8fDApfSxjYT1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmPXt9O2lmKGI9Ynx8JChhLG51bGwpKWlmKGM9Yi5sZW5ndGgpZm9yKDstLWM+LTE7KWU9YltjXSwoLTE9PT1lLmluZGV4T2YoXCItdHJhbnNmb3JtXCIpfHxEYT09PWUpJiYoZltlLnJlcGxhY2UoQyxFKV09Yi5nZXRQcm9wZXJ0eVZhbHVlKGUpKTtlbHNlIGZvcihjIGluIGIpKC0xPT09Yy5pbmRleE9mKFwiVHJhbnNmb3JtXCIpfHxDYT09PWMpJiYoZltjXT1iW2NdKTtlbHNlIGlmKGI9YS5jdXJyZW50U3R5bGV8fGEuc3R5bGUpZm9yKGMgaW4gYilcInN0cmluZ1wiPT10eXBlb2YgYyYmdm9pZCAwPT09ZltjXSYmKGZbYy5yZXBsYWNlKEMsRSldPWJbY10pO3JldHVybiBVfHwoZi5vcGFjaXR5PVYoYSkpLGQ9UmEoYSxiLCExKSxmLnJvdGF0aW9uPWQucm90YXRpb24sZi5za2V3WD1kLnNrZXdYLGYuc2NhbGVYPWQuc2NhbGVYLGYuc2NhbGVZPWQuc2NhbGVZLGYueD1kLngsZi55PWQueSxGYSYmKGYuej1kLnosZi5yb3RhdGlvblg9ZC5yb3RhdGlvblgsZi5yb3RhdGlvblk9ZC5yb3RhdGlvblksZi5zY2FsZVo9ZC5zY2FsZVopLGYuZmlsdGVycyYmZGVsZXRlIGYuZmlsdGVycyxmfSxkYT1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmLGcsaCxpPXt9LGo9YS5zdHlsZTtmb3IoZyBpbiBjKVwiY3NzVGV4dFwiIT09ZyYmXCJsZW5ndGhcIiE9PWcmJmlzTmFOKGcpJiYoYltnXSE9PShmPWNbZ10pfHxlJiZlW2ddKSYmLTE9PT1nLmluZGV4T2YoXCJPcmlnaW5cIikmJihcIm51bWJlclwiPT10eXBlb2YgZnx8XCJzdHJpbmdcIj09dHlwZW9mIGYpJiYoaVtnXT1cImF1dG9cIiE9PWZ8fFwibGVmdFwiIT09ZyYmXCJ0b3BcIiE9PWc/XCJcIiE9PWYmJlwiYXV0b1wiIT09ZiYmXCJub25lXCIhPT1mfHxcInN0cmluZ1wiIT10eXBlb2YgYltnXXx8XCJcIj09PWJbZ10ucmVwbGFjZSh2LFwiXCIpP2Y6MDpiYShhLGcpLHZvaWQgMCE9PWpbZ10mJihoPW5ldyBzYShqLGcsaltnXSxoKSkpO2lmKGQpZm9yKGcgaW4gZClcImNsYXNzTmFtZVwiIT09ZyYmKGlbZ109ZFtnXSk7cmV0dXJue2RpZnM6aSxmaXJzdE1QVDpofX0sZWE9e3dpZHRoOltcIkxlZnRcIixcIlJpZ2h0XCJdLGhlaWdodDpbXCJUb3BcIixcIkJvdHRvbVwiXX0sZmE9W1wibWFyZ2luTGVmdFwiLFwibWFyZ2luUmlnaHRcIixcIm1hcmdpblRvcFwiLFwibWFyZ2luQm90dG9tXCJdLGdhPWZ1bmN0aW9uKGEsYixjKXtpZihcInN2Z1wiPT09KGEubm9kZU5hbWUrXCJcIikudG9Mb3dlckNhc2UoKSlyZXR1cm4oY3x8JChhKSlbYl18fDA7aWYoYS5nZXRDVE0mJk9hKGEpKXJldHVybiBhLmdldEJCb3goKVtiXXx8MDt2YXIgZD1wYXJzZUZsb2F0KFwid2lkdGhcIj09PWI/YS5vZmZzZXRXaWR0aDphLm9mZnNldEhlaWdodCksZT1lYVtiXSxmPWUubGVuZ3RoO2ZvcihjPWN8fCQoYSxudWxsKTstLWY+LTE7KWQtPXBhcnNlRmxvYXQoXyhhLFwicGFkZGluZ1wiK2VbZl0sYywhMCkpfHwwLGQtPXBhcnNlRmxvYXQoXyhhLFwiYm9yZGVyXCIrZVtmXStcIldpZHRoXCIsYywhMCkpfHwwO3JldHVybiBkfSxoYT1mdW5jdGlvbihhLGIpe2lmKFwiY29udGFpblwiPT09YXx8XCJhdXRvXCI9PT1hfHxcImF1dG8gYXV0b1wiPT09YSlyZXR1cm4gYStcIiBcIjsobnVsbD09YXx8XCJcIj09PWEpJiYoYT1cIjAgMFwiKTt2YXIgYyxkPWEuc3BsaXQoXCIgXCIpLGU9LTEhPT1hLmluZGV4T2YoXCJsZWZ0XCIpP1wiMCVcIjotMSE9PWEuaW5kZXhPZihcInJpZ2h0XCIpP1wiMTAwJVwiOmRbMF0sZj0tMSE9PWEuaW5kZXhPZihcInRvcFwiKT9cIjAlXCI6LTEhPT1hLmluZGV4T2YoXCJib3R0b21cIik/XCIxMDAlXCI6ZFsxXTtpZihkLmxlbmd0aD4zJiYhYil7Zm9yKGQ9YS5zcGxpdChcIiwgXCIpLmpvaW4oXCIsXCIpLnNwbGl0KFwiLFwiKSxhPVtdLGM9MDtjPGQubGVuZ3RoO2MrKylhLnB1c2goaGEoZFtjXSkpO3JldHVybiBhLmpvaW4oXCIsXCIpfXJldHVybiBudWxsPT1mP2Y9XCJjZW50ZXJcIj09PWU/XCI1MCVcIjpcIjBcIjpcImNlbnRlclwiPT09ZiYmKGY9XCI1MCVcIiksKFwiY2VudGVyXCI9PT1lfHxpc05hTihwYXJzZUZsb2F0KGUpKSYmLTE9PT0oZStcIlwiKS5pbmRleE9mKFwiPVwiKSkmJihlPVwiNTAlXCIpLGE9ZStcIiBcIitmKyhkLmxlbmd0aD4yP1wiIFwiK2RbMl06XCJcIiksYiYmKGIub3hwPS0xIT09ZS5pbmRleE9mKFwiJVwiKSxiLm95cD0tMSE9PWYuaW5kZXhPZihcIiVcIiksYi5veHI9XCI9XCI9PT1lLmNoYXJBdCgxKSxiLm95cj1cIj1cIj09PWYuY2hhckF0KDEpLGIub3g9cGFyc2VGbG9hdChlLnJlcGxhY2UodixcIlwiKSksYi5veT1wYXJzZUZsb2F0KGYucmVwbGFjZSh2LFwiXCIpKSxiLnY9YSksYnx8YX0saWE9ZnVuY3Rpb24oYSxiKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBhJiYoYT1hKHIscSkpLFwic3RyaW5nXCI9PXR5cGVvZiBhJiZcIj1cIj09PWEuY2hhckF0KDEpP3BhcnNlSW50KGEuY2hhckF0KDApK1wiMVwiLDEwKSpwYXJzZUZsb2F0KGEuc3Vic3RyKDIpKTpwYXJzZUZsb2F0KGEpLXBhcnNlRmxvYXQoYil8fDB9LGphPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YShyLHEpKSxudWxsPT1hP2I6XCJzdHJpbmdcIj09dHlwZW9mIGEmJlwiPVwiPT09YS5jaGFyQXQoMSk/cGFyc2VJbnQoYS5jaGFyQXQoMCkrXCIxXCIsMTApKnBhcnNlRmxvYXQoYS5zdWJzdHIoMikpK2I6cGFyc2VGbG9hdChhKXx8MH0sa2E9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGUsZixnLGgsaSxqPTFlLTY7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YShyLHEpKSxudWxsPT1hP2g9YjpcIm51bWJlclwiPT10eXBlb2YgYT9oPWE6KGU9MzYwLGY9YS5zcGxpdChcIl9cIiksaT1cIj1cIj09PWEuY2hhckF0KDEpLGc9KGk/cGFyc2VJbnQoYS5jaGFyQXQoMCkrXCIxXCIsMTApKnBhcnNlRmxvYXQoZlswXS5zdWJzdHIoMikpOnBhcnNlRmxvYXQoZlswXSkpKigtMT09PWEuaW5kZXhPZihcInJhZFwiKT8xOkwpLShpPzA6YiksZi5sZW5ndGgmJihkJiYoZFtjXT1iK2cpLC0xIT09YS5pbmRleE9mKFwic2hvcnRcIikmJihnJT1lLGchPT1nJShlLzIpJiYoZz0wPmc/ZytlOmctZSkpLC0xIT09YS5pbmRleE9mKFwiX2N3XCIpJiYwPmc/Zz0oZys5OTk5OTk5OTk5KmUpJWUtKGcvZXwwKSplOi0xIT09YS5pbmRleE9mKFwiY2N3XCIpJiZnPjAmJihnPShnLTk5OTk5OTk5OTkqZSklZS0oZy9lfDApKmUpKSxoPWIrZyksaj5oJiZoPi1qJiYoaD0wKSxofSxsYT17YXF1YTpbMCwyNTUsMjU1XSxsaW1lOlswLDI1NSwwXSxzaWx2ZXI6WzE5MiwxOTIsMTkyXSxibGFjazpbMCwwLDBdLG1hcm9vbjpbMTI4LDAsMF0sdGVhbDpbMCwxMjgsMTI4XSxibHVlOlswLDAsMjU1XSxuYXZ5OlswLDAsMTI4XSx3aGl0ZTpbMjU1LDI1NSwyNTVdLGZ1Y2hzaWE6WzI1NSwwLDI1NV0sb2xpdmU6WzEyOCwxMjgsMF0seWVsbG93OlsyNTUsMjU1LDBdLG9yYW5nZTpbMjU1LDE2NSwwXSxncmF5OlsxMjgsMTI4LDEyOF0scHVycGxlOlsxMjgsMCwxMjhdLGdyZWVuOlswLDEyOCwwXSxyZWQ6WzI1NSwwLDBdLHBpbms6WzI1NSwxOTIsMjAzXSxjeWFuOlswLDI1NSwyNTVdLHRyYW5zcGFyZW50OlsyNTUsMjU1LDI1NSwwXX0sbWE9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBhPTA+YT9hKzE6YT4xP2EtMTphLDI1NSooMT42KmE/YisoYy1iKSphKjY6LjU+YT9jOjI+MyphP2IrKGMtYikqKDIvMy1hKSo2OmIpKy41fDB9LG5hPWcucGFyc2VDb2xvcj1mdW5jdGlvbihhLGIpe3ZhciBjLGQsZSxmLGcsaCxpLGosayxsLG07aWYoYSlpZihcIm51bWJlclwiPT10eXBlb2YgYSljPVthPj4xNixhPj44JjI1NSwyNTUmYV07ZWxzZXtpZihcIixcIj09PWEuY2hhckF0KGEubGVuZ3RoLTEpJiYoYT1hLnN1YnN0cigwLGEubGVuZ3RoLTEpKSxsYVthXSljPWxhW2FdO2Vsc2UgaWYoXCIjXCI9PT1hLmNoYXJBdCgwKSk0PT09YS5sZW5ndGgmJihkPWEuY2hhckF0KDEpLGU9YS5jaGFyQXQoMiksZj1hLmNoYXJBdCgzKSxhPVwiI1wiK2QrZCtlK2UrZitmKSxhPXBhcnNlSW50KGEuc3Vic3RyKDEpLDE2KSxjPVthPj4xNixhPj44JjI1NSwyNTUmYV07ZWxzZSBpZihcImhzbFwiPT09YS5zdWJzdHIoMCwzKSlpZihjPW09YS5tYXRjaChzKSxiKXtpZigtMSE9PWEuaW5kZXhPZihcIj1cIikpcmV0dXJuIGEubWF0Y2godCl9ZWxzZSBnPU51bWJlcihjWzBdKSUzNjAvMzYwLGg9TnVtYmVyKGNbMV0pLzEwMCxpPU51bWJlcihjWzJdKS8xMDAsZT0uNT49aT9pKihoKzEpOmkraC1pKmgsZD0yKmktZSxjLmxlbmd0aD4zJiYoY1szXT1OdW1iZXIoYVszXSkpLGNbMF09bWEoZysxLzMsZCxlKSxjWzFdPW1hKGcsZCxlKSxjWzJdPW1hKGctMS8zLGQsZSk7ZWxzZSBjPWEubWF0Y2gocyl8fGxhLnRyYW5zcGFyZW50O2NbMF09TnVtYmVyKGNbMF0pLGNbMV09TnVtYmVyKGNbMV0pLGNbMl09TnVtYmVyKGNbMl0pLGMubGVuZ3RoPjMmJihjWzNdPU51bWJlcihjWzNdKSl9ZWxzZSBjPWxhLmJsYWNrO3JldHVybiBiJiYhbSYmKGQ9Y1swXS8yNTUsZT1jWzFdLzI1NSxmPWNbMl0vMjU1LGo9TWF0aC5tYXgoZCxlLGYpLGs9TWF0aC5taW4oZCxlLGYpLGk9KGoraykvMixqPT09az9nPWg9MDoobD1qLWssaD1pPi41P2wvKDItai1rKTpsLyhqK2spLGc9aj09PWQ/KGUtZikvbCsoZj5lPzY6MCk6aj09PWU/KGYtZCkvbCsyOihkLWUpL2wrNCxnKj02MCksY1swXT1nKy41fDAsY1sxXT0xMDAqaCsuNXwwLGNbMl09MTAwKmkrLjV8MCksY30sb2E9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj1hLm1hdGNoKHBhKXx8W10sZz0wLGg9XCJcIjtpZighZi5sZW5ndGgpcmV0dXJuIGE7Zm9yKGM9MDtjPGYubGVuZ3RoO2MrKylkPWZbY10sZT1hLnN1YnN0cihnLGEuaW5kZXhPZihkLGcpLWcpLGcrPWUubGVuZ3RoK2QubGVuZ3RoLGQ9bmEoZCxiKSwzPT09ZC5sZW5ndGgmJmQucHVzaCgxKSxoKz1lKyhiP1wiaHNsYShcIitkWzBdK1wiLFwiK2RbMV0rXCIlLFwiK2RbMl0rXCIlLFwiK2RbM106XCJyZ2JhKFwiK2Quam9pbihcIixcIikpK1wiKVwiO3JldHVybiBoK2Euc3Vic3RyKGcpfSxwYT1cIig/OlxcXFxiKD86KD86cmdifHJnYmF8aHNsfGhzbGEpXFxcXCguKz9cXFxcKSl8XFxcXEIjKD86WzAtOWEtZl17M30pezEsMn1cXFxcYlwiO2ZvcihqIGluIGxhKXBhKz1cInxcIitqK1wiXFxcXGJcIjtwYT1uZXcgUmVnRXhwKHBhK1wiKVwiLFwiZ2lcIiksZy5jb2xvclN0cmluZ0ZpbHRlcj1mdW5jdGlvbihhKXt2YXIgYixjPWFbMF0rXCIgXCIrYVsxXTtwYS50ZXN0KGMpJiYoYj0tMSE9PWMuaW5kZXhPZihcImhzbChcIil8fC0xIT09Yy5pbmRleE9mKFwiaHNsYShcIiksYVswXT1vYShhWzBdLGIpLGFbMV09b2EoYVsxXSxiKSkscGEubGFzdEluZGV4PTB9LGIuZGVmYXVsdFN0cmluZ0ZpbHRlcnx8KGIuZGVmYXVsdFN0cmluZ0ZpbHRlcj1nLmNvbG9yU3RyaW5nRmlsdGVyKTt2YXIgcWE9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbD09YSlyZXR1cm4gZnVuY3Rpb24oYSl7cmV0dXJuIGF9O3ZhciBlLGY9Yj8oYS5tYXRjaChwYSl8fFtcIlwiXSlbMF06XCJcIixnPWEuc3BsaXQoZikuam9pbihcIlwiKS5tYXRjaCh1KXx8W10saD1hLnN1YnN0cigwLGEuaW5kZXhPZihnWzBdKSksaT1cIilcIj09PWEuY2hhckF0KGEubGVuZ3RoLTEpP1wiKVwiOlwiXCIsaj0tMSE9PWEuaW5kZXhPZihcIiBcIik/XCIgXCI6XCIsXCIsaz1nLmxlbmd0aCxsPWs+MD9nWzBdLnJlcGxhY2UocyxcIlwiKTpcIlwiO3JldHVybiBrP2U9Yj9mdW5jdGlvbihhKXt2YXIgYixtLG4sbztpZihcIm51bWJlclwiPT10eXBlb2YgYSlhKz1sO2Vsc2UgaWYoZCYmSS50ZXN0KGEpKXtmb3Iobz1hLnJlcGxhY2UoSSxcInxcIikuc3BsaXQoXCJ8XCIpLG49MDtuPG8ubGVuZ3RoO24rKylvW25dPWUob1tuXSk7cmV0dXJuIG8uam9pbihcIixcIil9aWYoYj0oYS5tYXRjaChwYSl8fFtmXSlbMF0sbT1hLnNwbGl0KGIpLmpvaW4oXCJcIikubWF0Y2godSl8fFtdLG49bS5sZW5ndGgsaz5uLS0pZm9yKDsrK248azspbVtuXT1jP21bKG4tMSkvMnwwXTpnW25dO3JldHVybiBoK20uam9pbihqKStqK2IraSsoLTEhPT1hLmluZGV4T2YoXCJpbnNldFwiKT9cIiBpbnNldFwiOlwiXCIpfTpmdW5jdGlvbihhKXt2YXIgYixmLG07aWYoXCJudW1iZXJcIj09dHlwZW9mIGEpYSs9bDtlbHNlIGlmKGQmJkkudGVzdChhKSl7Zm9yKGY9YS5yZXBsYWNlKEksXCJ8XCIpLnNwbGl0KFwifFwiKSxtPTA7bTxmLmxlbmd0aDttKyspZlttXT1lKGZbbV0pO3JldHVybiBmLmpvaW4oXCIsXCIpfWlmKGI9YS5tYXRjaCh1KXx8W10sbT1iLmxlbmd0aCxrPm0tLSlmb3IoOysrbTxrOyliW21dPWM/YlsobS0xKS8yfDBdOmdbbV07cmV0dXJuIGgrYi5qb2luKGopK2l9OmZ1bmN0aW9uKGEpe3JldHVybiBhfX0scmE9ZnVuY3Rpb24oYSl7cmV0dXJuIGE9YS5zcGxpdChcIixcIiksZnVuY3Rpb24oYixjLGQsZSxmLGcsaCl7dmFyIGksaj0oYytcIlwiKS5zcGxpdChcIiBcIik7Zm9yKGg9e30saT0wOzQ+aTtpKyspaFthW2ldXT1qW2ldPWpbaV18fGpbKGktMSkvMj4+MF07cmV0dXJuIGUucGFyc2UoYixoLGYsZyl9fSxzYT0oUy5fc2V0UGx1Z2luUmF0aW89ZnVuY3Rpb24oYSl7dGhpcy5wbHVnaW4uc2V0UmF0aW8oYSk7Zm9yKHZhciBiLGMsZCxlLGYsZz10aGlzLmRhdGEsaD1nLnByb3h5LGk9Zy5maXJzdE1QVCxqPTFlLTY7aTspYj1oW2kudl0saS5yP2I9TWF0aC5yb3VuZChiKTpqPmImJmI+LWomJihiPTApLGkudFtpLnBdPWIsaT1pLl9uZXh0O2lmKGcuYXV0b1JvdGF0ZSYmKGcuYXV0b1JvdGF0ZS5yb3RhdGlvbj1nLm1vZD9nLm1vZChoLnJvdGF0aW9uLHRoaXMudCk6aC5yb3RhdGlvbiksMT09PWF8fDA9PT1hKWZvcihpPWcuZmlyc3RNUFQsZj0xPT09YT9cImVcIjpcImJcIjtpOyl7aWYoYz1pLnQsYy50eXBlKXtpZigxPT09Yy50eXBlKXtmb3IoZT1jLnhzMCtjLnMrYy54czEsZD0xO2Q8Yy5sO2QrKyllKz1jW1wieG5cIitkXStjW1wieHNcIisoZCsxKV07Y1tmXT1lfX1lbHNlIGNbZl09Yy5zK2MueHMwO2k9aS5fbmV4dH19LGZ1bmN0aW9uKGEsYixjLGQsZSl7dGhpcy50PWEsdGhpcy5wPWIsdGhpcy52PWMsdGhpcy5yPWUsZCYmKGQuX3ByZXY9dGhpcyx0aGlzLl9uZXh0PWQpfSksdGE9KFMuX3BhcnNlVG9Qcm94eT1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGcsaCxpLGosayxsPWQsbT17fSxuPXt9LG89Yy5fdHJhbnNmb3JtLHA9TTtmb3IoYy5fdHJhbnNmb3JtPW51bGwsTT1iLGQ9az1jLnBhcnNlKGEsYixkLGUpLE09cCxmJiYoYy5fdHJhbnNmb3JtPW8sbCYmKGwuX3ByZXY9bnVsbCxsLl9wcmV2JiYobC5fcHJldi5fbmV4dD1udWxsKSkpO2QmJmQhPT1sOyl7aWYoZC50eXBlPD0xJiYoaD1kLnAsbltoXT1kLnMrZC5jLG1baF09ZC5zLGZ8fChqPW5ldyBzYShkLFwic1wiLGgsaixkLnIpLGQuYz0wKSwxPT09ZC50eXBlKSlmb3IoZz1kLmw7LS1nPjA7KWk9XCJ4blwiK2csaD1kLnArXCJfXCIraSxuW2hdPWQuZGF0YVtpXSxtW2hdPWRbaV0sZnx8KGo9bmV3IHNhKGQsaSxoLGosZC5yeHBbaV0pKTtkPWQuX25leHR9cmV0dXJue3Byb3h5Om0sZW5kOm4sZmlyc3RNUFQ6aixwdDprfX0sUy5DU1NQcm9wVHdlZW49ZnVuY3Rpb24oYSxiLGQsZSxnLGgsaSxqLGssbCxtKXt0aGlzLnQ9YSx0aGlzLnA9Yix0aGlzLnM9ZCx0aGlzLmM9ZSx0aGlzLm49aXx8YixhIGluc3RhbmNlb2YgdGF8fGYucHVzaCh0aGlzLm4pLHRoaXMucj1qLHRoaXMudHlwZT1ofHwwLGsmJih0aGlzLnByPWssYz0hMCksdGhpcy5iPXZvaWQgMD09PWw/ZDpsLHRoaXMuZT12b2lkIDA9PT1tP2QrZTptLGcmJih0aGlzLl9uZXh0PWcsZy5fcHJldj10aGlzKX0pLHVhPWZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZz1uZXcgdGEoYSxiLGMsZC1jLGUsLTEsZik7cmV0dXJuIGcuYj1jLGcuZT1nLnhzMD1kLGd9LHZhPWcucGFyc2VDb21wbGV4PWZ1bmN0aW9uKGEsYixjLGQsZSxmLGgsaSxqLGwpe2M9Y3x8Znx8XCJcIixcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiYoZD1kKHIscSkpLGg9bmV3IHRhKGEsYiwwLDAsaCxsPzI6MSxudWxsLCExLGksYyxkKSxkKz1cIlwiLGUmJnBhLnRlc3QoZCtjKSYmKGQ9W2MsZF0sZy5jb2xvclN0cmluZ0ZpbHRlcihkKSxjPWRbMF0sZD1kWzFdKTt2YXIgbSxuLG8scCx1LHYsdyx4LHkseixBLEIsQyxEPWMuc3BsaXQoXCIsIFwiKS5qb2luKFwiLFwiKS5zcGxpdChcIiBcIiksRT1kLnNwbGl0KFwiLCBcIikuam9pbihcIixcIikuc3BsaXQoXCIgXCIpLEY9RC5sZW5ndGgsRz1rIT09ITE7Zm9yKCgtMSE9PWQuaW5kZXhPZihcIixcIil8fC0xIT09Yy5pbmRleE9mKFwiLFwiKSkmJihEPUQuam9pbihcIiBcIikucmVwbGFjZShJLFwiLCBcIikuc3BsaXQoXCIgXCIpLEU9RS5qb2luKFwiIFwiKS5yZXBsYWNlKEksXCIsIFwiKS5zcGxpdChcIiBcIiksRj1ELmxlbmd0aCksRiE9PUUubGVuZ3RoJiYoRD0oZnx8XCJcIikuc3BsaXQoXCIgXCIpLEY9RC5sZW5ndGgpLGgucGx1Z2luPWosaC5zZXRSYXRpbz1sLHBhLmxhc3RJbmRleD0wLG09MDtGPm07bSsrKWlmKHA9RFttXSx1PUVbbV0seD1wYXJzZUZsb2F0KHApLHh8fDA9PT14KWguYXBwZW5kWHRyYShcIlwiLHgsaWEodSx4KSx1LnJlcGxhY2UodCxcIlwiKSxHJiYtMSE9PXUuaW5kZXhPZihcInB4XCIpLCEwKTtlbHNlIGlmKGUmJnBhLnRlc3QocCkpQj11LmluZGV4T2YoXCIpXCIpKzEsQj1cIilcIisoQj91LnN1YnN0cihCKTpcIlwiKSxDPS0xIT09dS5pbmRleE9mKFwiaHNsXCIpJiZVLHo9dSxwPW5hKHAsQyksdT1uYSh1LEMpLHk9cC5sZW5ndGgrdS5sZW5ndGg+Nix5JiYhVSYmMD09PXVbM10/KGhbXCJ4c1wiK2gubF0rPWgubD9cIiB0cmFuc3BhcmVudFwiOlwidHJhbnNwYXJlbnRcIixoLmU9aC5lLnNwbGl0KEVbbV0pLmpvaW4oXCJ0cmFuc3BhcmVudFwiKSk6KFV8fCh5PSExKSxDP2guYXBwZW5kWHRyYSh6LnN1YnN0cigwLHouaW5kZXhPZihcImhzbFwiKSkrKHk/XCJoc2xhKFwiOlwiaHNsKFwiKSxwWzBdLGlhKHVbMF0scFswXSksXCIsXCIsITEsITApLmFwcGVuZFh0cmEoXCJcIixwWzFdLGlhKHVbMV0scFsxXSksXCIlLFwiLCExKS5hcHBlbmRYdHJhKFwiXCIscFsyXSxpYSh1WzJdLHBbMl0pLHk/XCIlLFwiOlwiJVwiK0IsITEpOmguYXBwZW5kWHRyYSh6LnN1YnN0cigwLHouaW5kZXhPZihcInJnYlwiKSkrKHk/XCJyZ2JhKFwiOlwicmdiKFwiKSxwWzBdLHVbMF0tcFswXSxcIixcIiwhMCwhMCkuYXBwZW5kWHRyYShcIlwiLHBbMV0sdVsxXS1wWzFdLFwiLFwiLCEwKS5hcHBlbmRYdHJhKFwiXCIscFsyXSx1WzJdLXBbMl0seT9cIixcIjpCLCEwKSx5JiYocD1wLmxlbmd0aDw0PzE6cFszXSxoLmFwcGVuZFh0cmEoXCJcIixwLCh1Lmxlbmd0aDw0PzE6dVszXSktcCxCLCExKSkpLHBhLmxhc3RJbmRleD0wO2Vsc2UgaWYodj1wLm1hdGNoKHMpKXtpZih3PXUubWF0Y2godCksIXd8fHcubGVuZ3RoIT09di5sZW5ndGgpcmV0dXJuIGg7Zm9yKG89MCxuPTA7bjx2Lmxlbmd0aDtuKyspQT12W25dLHo9cC5pbmRleE9mKEEsbyksaC5hcHBlbmRYdHJhKHAuc3Vic3RyKG8sei1vKSxOdW1iZXIoQSksaWEod1tuXSxBKSxcIlwiLEcmJlwicHhcIj09PXAuc3Vic3RyKHorQS5sZW5ndGgsMiksMD09PW4pLG89eitBLmxlbmd0aDtoW1wieHNcIitoLmxdKz1wLnN1YnN0cihvKX1lbHNlIGhbXCJ4c1wiK2gubF0rPWgubHx8aFtcInhzXCIraC5sXT9cIiBcIit1OnU7aWYoLTEhPT1kLmluZGV4T2YoXCI9XCIpJiZoLmRhdGEpe2ZvcihCPWgueHMwK2guZGF0YS5zLG09MTttPGgubDttKyspQis9aFtcInhzXCIrbV0raC5kYXRhW1wieG5cIittXTtoLmU9QitoW1wieHNcIittXX1yZXR1cm4gaC5sfHwoaC50eXBlPS0xLGgueHMwPWguZSksaC54Zmlyc3R8fGh9LHdhPTk7Zm9yKGo9dGEucHJvdG90eXBlLGoubD1qLnByPTA7LS13YT4wOylqW1wieG5cIit3YV09MCxqW1wieHNcIit3YV09XCJcIjtqLnhzMD1cIlwiLGouX25leHQ9ai5fcHJldj1qLnhmaXJzdD1qLmRhdGE9ai5wbHVnaW49ai5zZXRSYXRpbz1qLnJ4cD1udWxsLGouYXBwZW5kWHRyYT1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGc9dGhpcyxoPWcubDtyZXR1cm4gZ1tcInhzXCIraF0rPWYmJihofHxnW1wieHNcIitoXSk/XCIgXCIrYTphfHxcIlwiLGN8fDA9PT1ofHxnLnBsdWdpbj8oZy5sKyssZy50eXBlPWcuc2V0UmF0aW8/MjoxLGdbXCJ4c1wiK2cubF09ZHx8XCJcIixoPjA/KGcuZGF0YVtcInhuXCIraF09YitjLGcucnhwW1wieG5cIitoXT1lLGdbXCJ4blwiK2hdPWIsZy5wbHVnaW58fChnLnhmaXJzdD1uZXcgdGEoZyxcInhuXCIraCxiLGMsZy54Zmlyc3R8fGcsMCxnLm4sZSxnLnByKSxnLnhmaXJzdC54czA9MCksZyk6KGcuZGF0YT17czpiK2N9LGcucnhwPXt9LGcucz1iLGcuYz1jLGcucj1lLGcpKTooZ1tcInhzXCIraF0rPWIrKGR8fFwiXCIpLGcpfTt2YXIgeGE9ZnVuY3Rpb24oYSxiKXtiPWJ8fHt9LHRoaXMucD1iLnByZWZpeD9aKGEpfHxhOmEsaVthXT1pW3RoaXMucF09dGhpcyx0aGlzLmZvcm1hdD1iLmZvcm1hdHRlcnx8cWEoYi5kZWZhdWx0VmFsdWUsYi5jb2xvcixiLmNvbGxhcHNpYmxlLGIubXVsdGkpLGIucGFyc2VyJiYodGhpcy5wYXJzZT1iLnBhcnNlciksdGhpcy5jbHJzPWIuY29sb3IsdGhpcy5tdWx0aT1iLm11bHRpLHRoaXMua2V5d29yZD1iLmtleXdvcmQsdGhpcy5kZmx0PWIuZGVmYXVsdFZhbHVlLHRoaXMucHI9Yi5wcmlvcml0eXx8MH0seWE9Uy5fcmVnaXN0ZXJDb21wbGV4U3BlY2lhbFByb3A9ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCIhPXR5cGVvZiBiJiYoYj17cGFyc2VyOmN9KTt2YXIgZCxlLGY9YS5zcGxpdChcIixcIiksZz1iLmRlZmF1bHRWYWx1ZTtmb3IoYz1jfHxbZ10sZD0wO2Q8Zi5sZW5ndGg7ZCsrKWIucHJlZml4PTA9PT1kJiZiLnByZWZpeCxiLmRlZmF1bHRWYWx1ZT1jW2RdfHxnLGU9bmV3IHhhKGZbZF0sYil9LHphPVMuX3JlZ2lzdGVyUGx1Z2luUHJvcD1mdW5jdGlvbihhKXtpZighaVthXSl7dmFyIGI9YS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cigxKStcIlBsdWdpblwiO3lhKGEse3BhcnNlcjpmdW5jdGlvbihhLGMsZCxlLGYsZyxqKXt2YXIgaz1oLmNvbS5ncmVlbnNvY2sucGx1Z2luc1tiXTtyZXR1cm4gaz8oay5fY3NzUmVnaXN0ZXIoKSxpW2RdLnBhcnNlKGEsYyxkLGUsZixnLGopKTooVyhcIkVycm9yOiBcIitiK1wiIGpzIGZpbGUgbm90IGxvYWRlZC5cIiksZil9fSl9fTtqPXhhLnByb3RvdHlwZSxqLnBhcnNlQ29tcGxleD1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGcsaCxpLGosayxsLG09dGhpcy5rZXl3b3JkO2lmKHRoaXMubXVsdGkmJihJLnRlc3QoYyl8fEkudGVzdChiKT8oaD1iLnJlcGxhY2UoSSxcInxcIikuc3BsaXQoXCJ8XCIpLGk9Yy5yZXBsYWNlKEksXCJ8XCIpLnNwbGl0KFwifFwiKSk6bSYmKGg9W2JdLGk9W2NdKSksaSl7Zm9yKGo9aS5sZW5ndGg+aC5sZW5ndGg/aS5sZW5ndGg6aC5sZW5ndGgsZz0wO2o+ZztnKyspYj1oW2ddPWhbZ118fHRoaXMuZGZsdCxjPWlbZ109aVtnXXx8dGhpcy5kZmx0LG0mJihrPWIuaW5kZXhPZihtKSxsPWMuaW5kZXhPZihtKSxrIT09bCYmKC0xPT09bD9oW2ddPWhbZ10uc3BsaXQobSkuam9pbihcIlwiKTotMT09PWsmJihoW2ddKz1cIiBcIittKSkpO2I9aC5qb2luKFwiLCBcIiksYz1pLmpvaW4oXCIsIFwiKX1yZXR1cm4gdmEoYSx0aGlzLnAsYixjLHRoaXMuY2xycyx0aGlzLmRmbHQsZCx0aGlzLnByLGUsZil9LGoucGFyc2U9ZnVuY3Rpb24oYSxiLGMsZCxmLGcsaCl7cmV0dXJuIHRoaXMucGFyc2VDb21wbGV4KGEuc3R5bGUsdGhpcy5mb3JtYXQoXyhhLHRoaXMucCxlLCExLHRoaXMuZGZsdCkpLHRoaXMuZm9ybWF0KGIpLGYsZyl9LGcucmVnaXN0ZXJTcGVjaWFsUHJvcD1mdW5jdGlvbihhLGIsYyl7eWEoYSx7cGFyc2VyOmZ1bmN0aW9uKGEsZCxlLGYsZyxoLGkpe3ZhciBqPW5ldyB0YShhLGUsMCwwLGcsMixlLCExLGMpO3JldHVybiBqLnBsdWdpbj1oLGouc2V0UmF0aW89YihhLGQsZi5fdHdlZW4sZSksan0scHJpb3JpdHk6Y30pfSxnLnVzZVNWR1RyYW5zZm9ybUF0dHI9ITA7dmFyIEFhLEJhPVwic2NhbGVYLHNjYWxlWSxzY2FsZVoseCx5LHosc2tld1gsc2tld1kscm90YXRpb24scm90YXRpb25YLHJvdGF0aW9uWSxwZXJzcGVjdGl2ZSx4UGVyY2VudCx5UGVyY2VudFwiLnNwbGl0KFwiLFwiKSxDYT1aKFwidHJhbnNmb3JtXCIpLERhPVgrXCJ0cmFuc2Zvcm1cIixFYT1aKFwidHJhbnNmb3JtT3JpZ2luXCIpLEZhPW51bGwhPT1aKFwicGVyc3BlY3RpdmVcIiksR2E9Uy5UcmFuc2Zvcm09ZnVuY3Rpb24oKXt0aGlzLnBlcnNwZWN0aXZlPXBhcnNlRmxvYXQoZy5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUpfHwwLHRoaXMuZm9yY2UzRD1nLmRlZmF1bHRGb3JjZTNEIT09ITEmJkZhP2cuZGVmYXVsdEZvcmNlM0R8fFwiYXV0b1wiOiExfSxIYT1fZ3NTY29wZS5TVkdFbGVtZW50LElhPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlPU8uY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixhKSxmPS8oW2Etel0pKFtBLVpdKS9nO2ZvcihkIGluIGMpZS5zZXRBdHRyaWJ1dGVOUyhudWxsLGQucmVwbGFjZShmLFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKSxjW2RdKTtyZXR1cm4gYi5hcHBlbmRDaGlsZChlKSxlfSxKYT1PLmRvY3VtZW50RWxlbWVudHx8e30sS2E9ZnVuY3Rpb24oKXt2YXIgYSxiLGMsZD1wfHwvQW5kcm9pZC9pLnRlc3QoVCkmJiFfZ3NTY29wZS5jaHJvbWU7cmV0dXJuIE8uY3JlYXRlRWxlbWVudE5TJiYhZCYmKGE9SWEoXCJzdmdcIixKYSksYj1JYShcInJlY3RcIixhLHt3aWR0aDoxMDAsaGVpZ2h0OjUwLHg6MTAwfSksYz1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoLGIuc3R5bGVbRWFdPVwiNTAlIDUwJVwiLGIuc3R5bGVbQ2FdPVwic2NhbGVYKDAuNSlcIixkPWM9PT1iLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoJiYhKG4mJkZhKSxKYS5yZW1vdmVDaGlsZChhKSksZH0oKSxMYT1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGgsaSxqLGssbCxtLG4sbyxwLHEscixzLHQsdSx2PWEuX2dzVHJhbnNmb3JtLHc9UWEoYSwhMCk7diYmKHQ9di54T3JpZ2luLHU9di55T3JpZ2luKSwoIWR8fChoPWQuc3BsaXQoXCIgXCIpKS5sZW5ndGg8MikmJihuPWEuZ2V0QkJveCgpLDA9PT1uLngmJjA9PT1uLnkmJm4ud2lkdGgrbi5oZWlnaHQ9PT0wJiYobj17eDpwYXJzZUZsb2F0KGEuaGFzQXR0cmlidXRlKFwieFwiKT9hLmdldEF0dHJpYnV0ZShcInhcIik6YS5oYXNBdHRyaWJ1dGUoXCJjeFwiKT9hLmdldEF0dHJpYnV0ZShcImN4XCIpOjApfHwwLHk6cGFyc2VGbG9hdChhLmhhc0F0dHJpYnV0ZShcInlcIik/YS5nZXRBdHRyaWJ1dGUoXCJ5XCIpOmEuaGFzQXR0cmlidXRlKFwiY3lcIik/YS5nZXRBdHRyaWJ1dGUoXCJjeVwiKTowKXx8MCx3aWR0aDowLGhlaWdodDowfSksYj1oYShiKS5zcGxpdChcIiBcIiksaD1bKC0xIT09YlswXS5pbmRleE9mKFwiJVwiKT9wYXJzZUZsb2F0KGJbMF0pLzEwMCpuLndpZHRoOnBhcnNlRmxvYXQoYlswXSkpK24ueCwoLTEhPT1iWzFdLmluZGV4T2YoXCIlXCIpP3BhcnNlRmxvYXQoYlsxXSkvMTAwKm4uaGVpZ2h0OnBhcnNlRmxvYXQoYlsxXSkpK24ueV0pLGMueE9yaWdpbj1rPXBhcnNlRmxvYXQoaFswXSksYy55T3JpZ2luPWw9cGFyc2VGbG9hdChoWzFdKSxkJiZ3IT09UGEmJihtPXdbMF0sbj13WzFdLG89d1syXSxwPXdbM10scT13WzRdLHI9d1s1XSxzPW0qcC1uKm8scyYmKGk9ayoocC9zKStsKigtby9zKSsobypyLXAqcSkvcyxqPWsqKC1uL3MpK2wqKG0vcyktKG0qci1uKnEpL3Msaz1jLnhPcmlnaW49aFswXT1pLGw9Yy55T3JpZ2luPWhbMV09aikpLHYmJihmJiYoYy54T2Zmc2V0PXYueE9mZnNldCxjLnlPZmZzZXQ9di55T2Zmc2V0LHY9YyksZXx8ZSE9PSExJiZnLmRlZmF1bHRTbW9vdGhPcmlnaW4hPT0hMT8oaT1rLXQsaj1sLXUsdi54T2Zmc2V0Kz1pKndbMF0raip3WzJdLWksdi55T2Zmc2V0Kz1pKndbMV0raip3WzNdLWopOnYueE9mZnNldD12LnlPZmZzZXQ9MCksZnx8YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIixoLmpvaW4oXCIgXCIpKX0sTWE9ZnVuY3Rpb24oYSl7dmFyIGIsYz1QKFwic3ZnXCIsdGhpcy5vd25lclNWR0VsZW1lbnQuZ2V0QXR0cmlidXRlKFwieG1sbnNcIil8fFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiksZD10aGlzLnBhcmVudE5vZGUsZT10aGlzLm5leHRTaWJsaW5nLGY9dGhpcy5zdHlsZS5jc3NUZXh0O2lmKEphLmFwcGVuZENoaWxkKGMpLGMuYXBwZW5kQ2hpbGQodGhpcyksdGhpcy5zdHlsZS5kaXNwbGF5PVwiYmxvY2tcIixhKXRyeXtiPXRoaXMuZ2V0QkJveCgpLHRoaXMuX29yaWdpbmFsR2V0QkJveD10aGlzLmdldEJCb3gsdGhpcy5nZXRCQm94PU1hfWNhdGNoKGcpe31lbHNlIHRoaXMuX29yaWdpbmFsR2V0QkJveCYmKGI9dGhpcy5fb3JpZ2luYWxHZXRCQm94KCkpO3JldHVybiBlP2QuaW5zZXJ0QmVmb3JlKHRoaXMsZSk6ZC5hcHBlbmRDaGlsZCh0aGlzKSxKYS5yZW1vdmVDaGlsZChjKSx0aGlzLnN0eWxlLmNzc1RleHQ9ZixifSxOYT1mdW5jdGlvbihhKXt0cnl7cmV0dXJuIGEuZ2V0QkJveCgpfWNhdGNoKGIpe3JldHVybiBNYS5jYWxsKGEsITApfX0sT2E9ZnVuY3Rpb24oYSl7cmV0dXJuISghKEhhJiZhLmdldENUTSYmTmEoYSkpfHxhLnBhcmVudE5vZGUmJiFhLm93bmVyU1ZHRWxlbWVudCl9LFBhPVsxLDAsMCwxLDAsMF0sUWE9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGgsaT1hLl9nc1RyYW5zZm9ybXx8bmV3IEdhLGo9MWU1LGs9YS5zdHlsZTtpZihDYT9kPV8oYSxEYSxudWxsLCEwKTphLmN1cnJlbnRTdHlsZSYmKGQ9YS5jdXJyZW50U3R5bGUuZmlsdGVyLm1hdGNoKEcpLGQ9ZCYmND09PWQubGVuZ3RoP1tkWzBdLnN1YnN0cig0KSxOdW1iZXIoZFsyXS5zdWJzdHIoNCkpLE51bWJlcihkWzFdLnN1YnN0cig0KSksZFszXS5zdWJzdHIoNCksaS54fHwwLGkueXx8MF0uam9pbihcIixcIik6XCJcIiksYz0hZHx8XCJub25lXCI9PT1kfHxcIm1hdHJpeCgxLCAwLCAwLCAxLCAwLCAwKVwiPT09ZCwhQ2F8fCEoaD1cIm5vbmVcIj09PSQoYSkuZGlzcGxheSkmJmEucGFyZW50Tm9kZXx8KGgmJihmPWsuZGlzcGxheSxrLmRpc3BsYXk9XCJibG9ja1wiKSxhLnBhcmVudE5vZGV8fChnPTEsSmEuYXBwZW5kQ2hpbGQoYSkpLGQ9XyhhLERhLG51bGwsITApLGM9IWR8fFwibm9uZVwiPT09ZHx8XCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIj09PWQsZj9rLmRpc3BsYXk9ZjpoJiZWYShrLFwiZGlzcGxheVwiKSxnJiZKYS5yZW1vdmVDaGlsZChhKSksKGkuc3ZnfHxhLmdldENUTSYmT2EoYSkpJiYoYyYmLTEhPT0oa1tDYV0rXCJcIikuaW5kZXhPZihcIm1hdHJpeFwiKSYmKGQ9a1tDYV0sYz0wKSxlPWEuZ2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIpLGMmJmUmJigtMSE9PWUuaW5kZXhPZihcIm1hdHJpeFwiKT8oZD1lLGM9MCk6LTEhPT1lLmluZGV4T2YoXCJ0cmFuc2xhdGVcIikmJihkPVwibWF0cml4KDEsMCwwLDEsXCIrZS5tYXRjaCgvKD86XFwtfFxcYilbXFxkXFwtXFwuZV0rXFxiL2dpKS5qb2luKFwiLFwiKStcIilcIixjPTApKSksYylyZXR1cm4gUGE7Zm9yKGU9KGR8fFwiXCIpLm1hdGNoKHMpfHxbXSx3YT1lLmxlbmd0aDstLXdhPi0xOylmPU51bWJlcihlW3dhXSksZVt3YV09KGc9Zi0oZnw9MCkpPyhnKmorKDA+Zz8tLjU6LjUpfDApL2orZjpmO3JldHVybiBiJiZlLmxlbmd0aD42P1tlWzBdLGVbMV0sZVs0XSxlWzVdLGVbMTJdLGVbMTNdXTplfSxSYT1TLmdldFRyYW5zZm9ybT1mdW5jdGlvbihhLGMsZCxlKXtpZihhLl9nc1RyYW5zZm9ybSYmZCYmIWUpcmV0dXJuIGEuX2dzVHJhbnNmb3JtO3ZhciBmLGgsaSxqLGssbCxtPWQ/YS5fZ3NUcmFuc2Zvcm18fG5ldyBHYTpuZXcgR2Esbj1tLnNjYWxlWDwwLG89MmUtNSxwPTFlNSxxPUZhP3BhcnNlRmxvYXQoXyhhLEVhLGMsITEsXCIwIDAgMFwiKS5zcGxpdChcIiBcIilbMl0pfHxtLnpPcmlnaW58fDA6MCxyPXBhcnNlRmxvYXQoZy5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmUpfHwwO2lmKG0uc3ZnPSEoIWEuZ2V0Q1RNfHwhT2EoYSkpLG0uc3ZnJiYoTGEoYSxfKGEsRWEsYywhMSxcIjUwJSA1MCVcIikrXCJcIixtLGEuZ2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpKSxBYT1nLnVzZVNWR1RyYW5zZm9ybUF0dHJ8fEthKSxmPVFhKGEpLGYhPT1QYSl7aWYoMTY9PT1mLmxlbmd0aCl7dmFyIHMsdCx1LHYsdyx4PWZbMF0seT1mWzFdLHo9ZlsyXSxBPWZbM10sQj1mWzRdLEM9Zls1XSxEPWZbNl0sRT1mWzddLEY9Zls4XSxHPWZbOV0sSD1mWzEwXSxJPWZbMTJdLEo9ZlsxM10sSz1mWzE0XSxNPWZbMTFdLE49TWF0aC5hdGFuMihELEgpO20uek9yaWdpbiYmKEs9LW0uek9yaWdpbixJPUYqSy1mWzEyXSxKPUcqSy1mWzEzXSxLPUgqSyttLnpPcmlnaW4tZlsxNF0pLG0ucm90YXRpb25YPU4qTCxOJiYodj1NYXRoLmNvcygtTiksdz1NYXRoLnNpbigtTikscz1CKnYrRip3LHQ9Qyp2K0cqdyx1PUQqditIKncsRj1CKi13K0YqdixHPUMqLXcrRyp2LEg9RCotdytIKnYsTT1FKi13K00qdixCPXMsQz10LEQ9dSksTj1NYXRoLmF0YW4yKC16LEgpLG0ucm90YXRpb25ZPU4qTCxOJiYodj1NYXRoLmNvcygtTiksdz1NYXRoLnNpbigtTikscz14KnYtRip3LHQ9eSp2LUcqdyx1PXoqdi1IKncsRz15KncrRyp2LEg9eip3K0gqdixNPUEqdytNKnYseD1zLHk9dCx6PXUpLE49TWF0aC5hdGFuMih5LHgpLG0ucm90YXRpb249TipMLE4mJih2PU1hdGguY29zKE4pLHc9TWF0aC5zaW4oTikscz14KnYreSp3LHQ9Qip2K0Mqdyx1PUYqditHKncseT15KnYteCp3LEM9Qyp2LUIqdyxHPUcqdi1GKncseD1zLEI9dCxGPXUpLG0ucm90YXRpb25YJiZNYXRoLmFicyhtLnJvdGF0aW9uWCkrTWF0aC5hYnMobS5yb3RhdGlvbik+MzU5LjkmJihtLnJvdGF0aW9uWD1tLnJvdGF0aW9uPTAsbS5yb3RhdGlvblk9MTgwLW0ucm90YXRpb25ZKSxOPU1hdGguYXRhbjIoQixDKSxtLnNjYWxlWD0oTWF0aC5zcXJ0KHgqeCt5Knkreip6KSpwKy41fDApL3AsbS5zY2FsZVk9KE1hdGguc3FydChDKkMrRCpEKSpwKy41fDApL3AsbS5zY2FsZVo9KE1hdGguc3FydChGKkYrRypHK0gqSCkqcCsuNXwwKS9wLHgvPW0uc2NhbGVYLEIvPW0uc2NhbGVZLHkvPW0uc2NhbGVYLEMvPW0uc2NhbGVZLE1hdGguYWJzKE4pPm8/KG0uc2tld1g9TipMLEI9MCxcInNpbXBsZVwiIT09bS5za2V3VHlwZSYmKG0uc2NhbGVZKj0xL01hdGguY29zKE4pKSk6bS5za2V3WD0wLG0ucGVyc3BlY3RpdmU9TT8xLygwPk0/LU06TSk6MCxtLng9SSxtLnk9SixtLno9SyxtLnN2ZyYmKG0ueC09bS54T3JpZ2luLShtLnhPcmlnaW4qeC1tLnlPcmlnaW4qQiksbS55LT1tLnlPcmlnaW4tKG0ueU9yaWdpbip5LW0ueE9yaWdpbipDKSl9ZWxzZSBpZighRmF8fGV8fCFmLmxlbmd0aHx8bS54IT09Zls0XXx8bS55IT09Zls1XXx8IW0ucm90YXRpb25YJiYhbS5yb3RhdGlvblkpe3ZhciBPPWYubGVuZ3RoPj02LFA9Tz9mWzBdOjEsUT1mWzFdfHwwLFI9ZlsyXXx8MCxTPU8/ZlszXToxO20ueD1mWzRdfHwwLG0ueT1mWzVdfHwwLGk9TWF0aC5zcXJ0KFAqUCtRKlEpLGo9TWF0aC5zcXJ0KFMqUytSKlIpLGs9UHx8UT9NYXRoLmF0YW4yKFEsUCkqTDptLnJvdGF0aW9ufHwwLGw9Unx8Uz9NYXRoLmF0YW4yKFIsUykqTCtrOm0uc2tld1h8fDAsbS5zY2FsZVg9aSxtLnNjYWxlWT1qLG0ucm90YXRpb249ayxtLnNrZXdYPWwsRmEmJihtLnJvdGF0aW9uWD1tLnJvdGF0aW9uWT1tLno9MCxtLnBlcnNwZWN0aXZlPXIsbS5zY2FsZVo9MSksbS5zdmcmJihtLngtPW0ueE9yaWdpbi0obS54T3JpZ2luKlArbS55T3JpZ2luKlIpLG0ueS09bS55T3JpZ2luLShtLnhPcmlnaW4qUSttLnlPcmlnaW4qUykpfU1hdGguYWJzKG0uc2tld1gpPjkwJiZNYXRoLmFicyhtLnNrZXdYKTwyNzAmJihuPyhtLnNjYWxlWCo9LTEsbS5za2V3WCs9bS5yb3RhdGlvbjw9MD8xODA6LTE4MCxtLnJvdGF0aW9uKz1tLnJvdGF0aW9uPD0wPzE4MDotMTgwKToobS5zY2FsZVkqPS0xLG0uc2tld1grPW0uc2tld1g8PTA/MTgwOi0xODApKSxtLnpPcmlnaW49cTtmb3IoaCBpbiBtKW1baF08byYmbVtoXT4tbyYmKG1baF09MCl9cmV0dXJuIGQmJihhLl9nc1RyYW5zZm9ybT1tLG0uc3ZnJiYoQWEmJmEuc3R5bGVbQ2FdP2IuZGVsYXllZENhbGwoLjAwMSxmdW5jdGlvbigpe1ZhKGEuc3R5bGUsQ2EpfSk6IUFhJiZhLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSYmYi5kZWxheWVkQ2FsbCguMDAxLGZ1bmN0aW9uKCl7YS5yZW1vdmVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIil9KSkpLG19LFNhPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLmRhdGEsZT0tZC5yb3RhdGlvbipLLGY9ZStkLnNrZXdYKkssZz0xZTUsaD0oTWF0aC5jb3MoZSkqZC5zY2FsZVgqZ3wwKS9nLGk9KE1hdGguc2luKGUpKmQuc2NhbGVYKmd8MCkvZyxqPShNYXRoLnNpbihmKSotZC5zY2FsZVkqZ3wwKS9nLGs9KE1hdGguY29zKGYpKmQuc2NhbGVZKmd8MCkvZyxsPXRoaXMudC5zdHlsZSxtPXRoaXMudC5jdXJyZW50U3R5bGU7aWYobSl7Yz1pLGk9LWosaj0tYyxiPW0uZmlsdGVyLGwuZmlsdGVyPVwiXCI7dmFyIG4sbyxxPXRoaXMudC5vZmZzZXRXaWR0aCxyPXRoaXMudC5vZmZzZXRIZWlnaHQscz1cImFic29sdXRlXCIhPT1tLnBvc2l0aW9uLHQ9XCJwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KE0xMT1cIitoK1wiLCBNMTI9XCIraStcIiwgTTIxPVwiK2orXCIsIE0yMj1cIitrLHU9ZC54K3EqZC54UGVyY2VudC8xMDAsdj1kLnkrcipkLnlQZXJjZW50LzEwMDtpZihudWxsIT1kLm94JiYobj0oZC5veHA/cSpkLm94Ki4wMTpkLm94KS1xLzIsbz0oZC5veXA/cipkLm95Ki4wMTpkLm95KS1yLzIsdSs9bi0obipoK28qaSksdis9by0obipqK28qaykpLHM/KG49cS8yLG89ci8yLHQrPVwiLCBEeD1cIisobi0obipoK28qaSkrdSkrXCIsIER5PVwiKyhvLShuKmorbyprKSt2KStcIilcIik6dCs9XCIsIHNpemluZ01ldGhvZD0nYXV0byBleHBhbmQnKVwiLC0xIT09Yi5pbmRleE9mKFwiRFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuTWF0cml4KFwiKT9sLmZpbHRlcj1iLnJlcGxhY2UoSCx0KTpsLmZpbHRlcj10K1wiIFwiK2IsKDA9PT1hfHwxPT09YSkmJjE9PT1oJiYwPT09aSYmMD09PWomJjE9PT1rJiYocyYmLTE9PT10LmluZGV4T2YoXCJEeD0wLCBEeT0wXCIpfHx4LnRlc3QoYikmJjEwMCE9PXBhcnNlRmxvYXQoUmVnRXhwLiQxKXx8LTE9PT1iLmluZGV4T2YoYi5pbmRleE9mKFwiQWxwaGFcIikpJiZsLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSksIXMpe3ZhciB5LHosQSxCPTg+cD8xOi0xO2ZvcihuPWQuaWVPZmZzZXRYfHwwLG89ZC5pZU9mZnNldFl8fDAsZC5pZU9mZnNldFg9TWF0aC5yb3VuZCgocS0oKDA+aD8taDpoKSpxKygwPmk/LWk6aSkqcikpLzIrdSksZC5pZU9mZnNldFk9TWF0aC5yb3VuZCgoci0oKDA+az8tazprKSpyKygwPmo/LWo6aikqcSkpLzIrdiksd2E9MDs0PndhO3dhKyspej1mYVt3YV0seT1tW3pdLGM9LTEhPT15LmluZGV4T2YoXCJweFwiKT9wYXJzZUZsb2F0KHkpOmFhKHRoaXMudCx6LHBhcnNlRmxvYXQoeSkseS5yZXBsYWNlKHcsXCJcIikpfHwwLEE9YyE9PWRbel0/Mj53YT8tZC5pZU9mZnNldFg6LWQuaWVPZmZzZXRZOjI+d2E/bi1kLmllT2Zmc2V0WDpvLWQuaWVPZmZzZXRZLGxbel09KGRbel09TWF0aC5yb3VuZChjLUEqKDA9PT13YXx8Mj09PXdhPzE6QikpKStcInB4XCJ9fX0sVGE9Uy5zZXQzRFRyYW5zZm9ybVJhdGlvPVMuc2V0VHJhbnNmb3JtUmF0aW89ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGUsZixnLGgsaSxqLGssbCxtLG8scCxxLHIscyx0LHUsdix3LHgseSx6PXRoaXMuZGF0YSxBPXRoaXMudC5zdHlsZSxCPXoucm90YXRpb24sQz16LnJvdGF0aW9uWCxEPXoucm90YXRpb25ZLEU9ei5zY2FsZVgsRj16LnNjYWxlWSxHPXouc2NhbGVaLEg9ei54LEk9ei55LEo9ei56LEw9ei5zdmcsTT16LnBlcnNwZWN0aXZlLE49ei5mb3JjZTNELE89ei5za2V3WSxQPXouc2tld1g7aWYoTyYmKFArPU8sQis9TyksKCgxPT09YXx8MD09PWEpJiZcImF1dG9cIj09PU4mJih0aGlzLnR3ZWVuLl90b3RhbFRpbWU9PT10aGlzLnR3ZWVuLl90b3RhbER1cmF0aW9ufHwhdGhpcy50d2Vlbi5fdG90YWxUaW1lKXx8IU4pJiYhSiYmIU0mJiFEJiYhQyYmMT09PUd8fEFhJiZMfHwhRmEpcmV0dXJuIHZvaWQoQnx8UHx8TD8oQio9Syx4PVAqSyx5PTFlNSxjPU1hdGguY29zKEIpKkUsZj1NYXRoLnNpbihCKSpFLGQ9TWF0aC5zaW4oQi14KSotRixnPU1hdGguY29zKEIteCkqRix4JiZcInNpbXBsZVwiPT09ei5za2V3VHlwZSYmKGI9TWF0aC50YW4oeC1PKkspLGI9TWF0aC5zcXJ0KDErYipiKSxkKj1iLGcqPWIsTyYmKGI9TWF0aC50YW4oTypLKSxiPU1hdGguc3FydCgxK2IqYiksYyo9YixmKj1iKSksTCYmKEgrPXoueE9yaWdpbi0oei54T3JpZ2luKmMrei55T3JpZ2luKmQpK3oueE9mZnNldCxJKz16LnlPcmlnaW4tKHoueE9yaWdpbipmK3oueU9yaWdpbipnKSt6LnlPZmZzZXQsQWEmJih6LnhQZXJjZW50fHx6LnlQZXJjZW50KSYmKHE9dGhpcy50LmdldEJCb3goKSxIKz0uMDEqei54UGVyY2VudCpxLndpZHRoLEkrPS4wMSp6LnlQZXJjZW50KnEuaGVpZ2h0KSxxPTFlLTYscT5IJiZIPi1xJiYoSD0wKSxxPkkmJkk+LXEmJihJPTApKSx1PShjKnl8MCkveStcIixcIisoZip5fDApL3krXCIsXCIrKGQqeXwwKS95K1wiLFwiKyhnKnl8MCkveStcIixcIitIK1wiLFwiK0krXCIpXCIsTCYmQWE/dGhpcy50LnNldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiLFwibWF0cml4KFwiK3UpOkFbQ2FdPSh6LnhQZXJjZW50fHx6LnlQZXJjZW50P1widHJhbnNsYXRlKFwiK3oueFBlcmNlbnQrXCIlLFwiK3oueVBlcmNlbnQrXCIlKSBtYXRyaXgoXCI6XCJtYXRyaXgoXCIpK3UpOkFbQ2FdPSh6LnhQZXJjZW50fHx6LnlQZXJjZW50P1widHJhbnNsYXRlKFwiK3oueFBlcmNlbnQrXCIlLFwiK3oueVBlcmNlbnQrXCIlKSBtYXRyaXgoXCI6XCJtYXRyaXgoXCIpK0UrXCIsMCwwLFwiK0YrXCIsXCIrSCtcIixcIitJK1wiKVwiKTtpZihuJiYocT0xZS00LHE+RSYmRT4tcSYmKEU9Rz0yZS01KSxxPkYmJkY+LXEmJihGPUc9MmUtNSksIU18fHouenx8ei5yb3RhdGlvblh8fHoucm90YXRpb25ZfHwoTT0wKSksQnx8UClCKj1LLHI9Yz1NYXRoLmNvcyhCKSxzPWY9TWF0aC5zaW4oQiksUCYmKEItPVAqSyxyPU1hdGguY29zKEIpLHM9TWF0aC5zaW4oQiksXCJzaW1wbGVcIj09PXouc2tld1R5cGUmJihiPU1hdGgudGFuKChQLU8pKkspLGI9TWF0aC5zcXJ0KDErYipiKSxyKj1iLHMqPWIsei5za2V3WSYmKGI9TWF0aC50YW4oTypLKSxiPU1hdGguc3FydCgxK2IqYiksYyo9YixmKj1iKSkpLGQ9LXMsZz1yO2Vsc2V7aWYoIShEfHxDfHwxIT09R3x8TXx8TCkpcmV0dXJuIHZvaWQoQVtDYV09KHoueFBlcmNlbnR8fHoueVBlcmNlbnQ/XCJ0cmFuc2xhdGUoXCIrei54UGVyY2VudCtcIiUsXCIrei55UGVyY2VudCtcIiUpIHRyYW5zbGF0ZTNkKFwiOlwidHJhbnNsYXRlM2QoXCIpK0grXCJweCxcIitJK1wicHgsXCIrSitcInB4KVwiKygxIT09RXx8MSE9PUY/XCIgc2NhbGUoXCIrRStcIixcIitGK1wiKVwiOlwiXCIpKTtjPWc9MSxkPWY9MH1rPTEsZT1oPWk9aj1sPW09MCxvPU0/LTEvTTowLHA9ei56T3JpZ2luLHE9MWUtNix2PVwiLFwiLHc9XCIwXCIsQj1EKkssQiYmKHI9TWF0aC5jb3MoQikscz1NYXRoLnNpbihCKSxpPS1zLGw9byotcyxlPWMqcyxoPWYqcyxrPXIsbyo9cixjKj1yLGYqPXIpLEI9QypLLEImJihyPU1hdGguY29zKEIpLHM9TWF0aC5zaW4oQiksYj1kKnIrZSpzLHQ9ZypyK2gqcyxqPWsqcyxtPW8qcyxlPWQqLXMrZSpyLGg9ZyotcytoKnIsayo9cixvKj1yLGQ9YixnPXQpLDEhPT1HJiYoZSo9RyxoKj1HLGsqPUcsbyo9RyksMSE9PUYmJihkKj1GLGcqPUYsaio9RixtKj1GKSwxIT09RSYmKGMqPUUsZio9RSxpKj1FLGwqPUUpLChwfHxMKSYmKHAmJihIKz1lKi1wLEkrPWgqLXAsSis9ayotcCtwKSxMJiYoSCs9ei54T3JpZ2luLSh6LnhPcmlnaW4qYyt6LnlPcmlnaW4qZCkrei54T2Zmc2V0LEkrPXoueU9yaWdpbi0oei54T3JpZ2luKmYrei55T3JpZ2luKmcpK3oueU9mZnNldCkscT5IJiZIPi1xJiYoSD13KSxxPkkmJkk+LXEmJihJPXcpLHE+SiYmSj4tcSYmKEo9MCkpLHU9ei54UGVyY2VudHx8ei55UGVyY2VudD9cInRyYW5zbGF0ZShcIit6LnhQZXJjZW50K1wiJSxcIit6LnlQZXJjZW50K1wiJSkgbWF0cml4M2QoXCI6XCJtYXRyaXgzZChcIix1Kz0ocT5jJiZjPi1xP3c6YykrdisocT5mJiZmPi1xP3c6ZikrdisocT5pJiZpPi1xP3c6aSksdSs9disocT5sJiZsPi1xP3c6bCkrdisocT5kJiZkPi1xP3c6ZCkrdisocT5nJiZnPi1xP3c6ZyksQ3x8RHx8MSE9PUc/KHUrPXYrKHE+aiYmaj4tcT93OmopK3YrKHE+bSYmbT4tcT93Om0pK3YrKHE+ZSYmZT4tcT93OmUpLHUrPXYrKHE+aCYmaD4tcT93OmgpK3YrKHE+ayYmaz4tcT93OmspK3YrKHE+byYmbz4tcT93Om8pK3YpOnUrPVwiLDAsMCwwLDAsMSwwLFwiLHUrPUgrditJK3YrSit2KyhNPzErLUovTToxKStcIilcIixBW0NhXT11fTtqPUdhLnByb3RvdHlwZSxqLng9ai55PWouej1qLnNrZXdYPWouc2tld1k9ai5yb3RhdGlvbj1qLnJvdGF0aW9uWD1qLnJvdGF0aW9uWT1qLnpPcmlnaW49ai54UGVyY2VudD1qLnlQZXJjZW50PWoueE9mZnNldD1qLnlPZmZzZXQ9MCxqLnNjYWxlWD1qLnNjYWxlWT1qLnNjYWxlWj0xLHlhKFwidHJhbnNmb3JtLHNjYWxlLHNjYWxlWCxzY2FsZVksc2NhbGVaLHgseSx6LHJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblkscm90YXRpb25aLHNrZXdYLHNrZXdZLHNob3J0Um90YXRpb24sc2hvcnRSb3RhdGlvblgsc2hvcnRSb3RhdGlvblksc2hvcnRSb3RhdGlvblosdHJhbnNmb3JtT3JpZ2luLHN2Z09yaWdpbix0cmFuc2Zvcm1QZXJzcGVjdGl2ZSxkaXJlY3Rpb25hbFJvdGF0aW9uLHBhcnNlVHJhbnNmb3JtLGZvcmNlM0Qsc2tld1R5cGUseFBlcmNlbnQseVBlcmNlbnQsc21vb3RoT3JpZ2luXCIse3BhcnNlcjpmdW5jdGlvbihhLGIsYyxkLGYsaCxpKXtpZihkLl9sYXN0UGFyc2VkVHJhbnNmb3JtPT09aSlyZXR1cm4gZjtkLl9sYXN0UGFyc2VkVHJhbnNmb3JtPWk7dmFyIGosaz1pLnNjYWxlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLnNjYWxlP2kuc2NhbGU6MDtcImZ1bmN0aW9uXCI9PXR5cGVvZiBpW2NdJiYoaj1pW2NdLGlbY109YiksayYmKGkuc2NhbGU9ayhyLGEpKTt2YXIgbCxtLG4sbyxwLHMsdCx1LHYsdz1hLl9nc1RyYW5zZm9ybSx4PWEuc3R5bGUseT0xZS02LHo9QmEubGVuZ3RoLEE9aSxCPXt9LEM9XCJ0cmFuc2Zvcm1PcmlnaW5cIixEPVJhKGEsZSwhMCxBLnBhcnNlVHJhbnNmb3JtKSxFPUEudHJhbnNmb3JtJiYoXCJmdW5jdGlvblwiPT10eXBlb2YgQS50cmFuc2Zvcm0/QS50cmFuc2Zvcm0ocixxKTpBLnRyYW5zZm9ybSk7aWYoRC5za2V3VHlwZT1BLnNrZXdUeXBlfHxELnNrZXdUeXBlfHxnLmRlZmF1bHRTa2V3VHlwZSxkLl90cmFuc2Zvcm09RCxFJiZcInN0cmluZ1wiPT10eXBlb2YgRSYmQ2EpbT1RLnN0eWxlLG1bQ2FdPUUsbS5kaXNwbGF5PVwiYmxvY2tcIixtLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixPLmJvZHkuYXBwZW5kQ2hpbGQoUSksbD1SYShRLG51bGwsITEpLFwic2ltcGxlXCI9PT1ELnNrZXdUeXBlJiYobC5zY2FsZVkqPU1hdGguY29zKGwuc2tld1gqSykpLEQuc3ZnJiYocz1ELnhPcmlnaW4sdD1ELnlPcmlnaW4sbC54LT1ELnhPZmZzZXQsbC55LT1ELnlPZmZzZXQsKEEudHJhbnNmb3JtT3JpZ2lufHxBLnN2Z09yaWdpbikmJihFPXt9LExhKGEsaGEoQS50cmFuc2Zvcm1PcmlnaW4pLEUsQS5zdmdPcmlnaW4sQS5zbW9vdGhPcmlnaW4sITApLHM9RS54T3JpZ2luLHQ9RS55T3JpZ2luLGwueC09RS54T2Zmc2V0LUQueE9mZnNldCxsLnktPUUueU9mZnNldC1ELnlPZmZzZXQpLChzfHx0KSYmKHU9UWEoUSwhMCksbC54LT1zLShzKnVbMF0rdCp1WzJdKSxsLnktPXQtKHMqdVsxXSt0KnVbM10pKSksTy5ib2R5LnJlbW92ZUNoaWxkKFEpLGwucGVyc3BlY3RpdmV8fChsLnBlcnNwZWN0aXZlPUQucGVyc3BlY3RpdmUpLG51bGwhPUEueFBlcmNlbnQmJihsLnhQZXJjZW50PWphKEEueFBlcmNlbnQsRC54UGVyY2VudCkpLG51bGwhPUEueVBlcmNlbnQmJihsLnlQZXJjZW50PWphKEEueVBlcmNlbnQsRC55UGVyY2VudCkpO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIEEpe2lmKGw9e3NjYWxlWDpqYShudWxsIT1BLnNjYWxlWD9BLnNjYWxlWDpBLnNjYWxlLEQuc2NhbGVYKSxzY2FsZVk6amEobnVsbCE9QS5zY2FsZVk/QS5zY2FsZVk6QS5zY2FsZSxELnNjYWxlWSksc2NhbGVaOmphKEEuc2NhbGVaLEQuc2NhbGVaKSx4OmphKEEueCxELngpLHk6amEoQS55LEQueSksejpqYShBLnosRC56KSx4UGVyY2VudDpqYShBLnhQZXJjZW50LEQueFBlcmNlbnQpLHlQZXJjZW50OmphKEEueVBlcmNlbnQsRC55UGVyY2VudCkscGVyc3BlY3RpdmU6amEoQS50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxELnBlcnNwZWN0aXZlKX0scD1BLmRpcmVjdGlvbmFsUm90YXRpb24sbnVsbCE9cClpZihcIm9iamVjdFwiPT10eXBlb2YgcClmb3IobSBpbiBwKUFbbV09cFttXTtlbHNlIEEucm90YXRpb249cDtcInN0cmluZ1wiPT10eXBlb2YgQS54JiYtMSE9PUEueC5pbmRleE9mKFwiJVwiKSYmKGwueD0wLGwueFBlcmNlbnQ9amEoQS54LEQueFBlcmNlbnQpKSxcInN0cmluZ1wiPT10eXBlb2YgQS55JiYtMSE9PUEueS5pbmRleE9mKFwiJVwiKSYmKGwueT0wLGwueVBlcmNlbnQ9amEoQS55LEQueVBlcmNlbnQpKSxsLnJvdGF0aW9uPWthKFwicm90YXRpb25cImluIEE/QS5yb3RhdGlvbjpcInNob3J0Um90YXRpb25cImluIEE/QS5zaG9ydFJvdGF0aW9uK1wiX3Nob3J0XCI6XCJyb3RhdGlvblpcImluIEE/QS5yb3RhdGlvblo6RC5yb3RhdGlvbixELnJvdGF0aW9uLFwicm90YXRpb25cIixCKSxGYSYmKGwucm90YXRpb25YPWthKFwicm90YXRpb25YXCJpbiBBP0Eucm90YXRpb25YOlwic2hvcnRSb3RhdGlvblhcImluIEE/QS5zaG9ydFJvdGF0aW9uWCtcIl9zaG9ydFwiOkQucm90YXRpb25YfHwwLEQucm90YXRpb25YLFwicm90YXRpb25YXCIsQiksbC5yb3RhdGlvblk9a2EoXCJyb3RhdGlvbllcImluIEE/QS5yb3RhdGlvblk6XCJzaG9ydFJvdGF0aW9uWVwiaW4gQT9BLnNob3J0Um90YXRpb25ZK1wiX3Nob3J0XCI6RC5yb3RhdGlvbll8fDAsRC5yb3RhdGlvblksXCJyb3RhdGlvbllcIixCKSksbC5za2V3WD1rYShBLnNrZXdYLEQuc2tld1gpLGwuc2tld1k9a2EoQS5za2V3WSxELnNrZXdZKX1mb3IoRmEmJm51bGwhPUEuZm9yY2UzRCYmKEQuZm9yY2UzRD1BLmZvcmNlM0Qsbz0hMCksbj1ELmZvcmNlM0R8fEQuenx8RC5yb3RhdGlvblh8fEQucm90YXRpb25ZfHxsLnp8fGwucm90YXRpb25YfHxsLnJvdGF0aW9uWXx8bC5wZXJzcGVjdGl2ZSxufHxudWxsPT1BLnNjYWxlfHwobC5zY2FsZVo9MSk7LS16Pi0xOyl2PUJhW3pdLEU9bFt2XS1EW3ZdLChFPnl8fC15PkV8fG51bGwhPUFbdl18fG51bGwhPU1bdl0pJiYobz0hMCxmPW5ldyB0YShELHYsRFt2XSxFLGYpLHYgaW4gQiYmKGYuZT1CW3ZdKSxmLnhzMD0wLGYucGx1Z2luPWgsZC5fb3ZlcndyaXRlUHJvcHMucHVzaChmLm4pKTtyZXR1cm4gRT1BLnRyYW5zZm9ybU9yaWdpbixELnN2ZyYmKEV8fEEuc3ZnT3JpZ2luKSYmKHM9RC54T2Zmc2V0LHQ9RC55T2Zmc2V0LExhKGEsaGEoRSksbCxBLnN2Z09yaWdpbixBLnNtb290aE9yaWdpbiksZj11YShELFwieE9yaWdpblwiLCh3P0Q6bCkueE9yaWdpbixsLnhPcmlnaW4sZixDKSxmPXVhKEQsXCJ5T3JpZ2luXCIsKHc/RDpsKS55T3JpZ2luLGwueU9yaWdpbixmLEMpLChzIT09RC54T2Zmc2V0fHx0IT09RC55T2Zmc2V0KSYmKGY9dWEoRCxcInhPZmZzZXRcIix3P3M6RC54T2Zmc2V0LEQueE9mZnNldCxmLEMpLGY9dWEoRCxcInlPZmZzZXRcIix3P3Q6RC55T2Zmc2V0LEQueU9mZnNldCxmLEMpKSxFPVwiMHB4IDBweFwiKSwoRXx8RmEmJm4mJkQuek9yaWdpbikmJihDYT8obz0hMCx2PUVhLEU9KEV8fF8oYSx2LGUsITEsXCI1MCUgNTAlXCIpKStcIlwiLGY9bmV3IHRhKHgsdiwwLDAsZiwtMSxDKSxmLmI9eFt2XSxmLnBsdWdpbj1oLEZhPyhtPUQuek9yaWdpbixFPUUuc3BsaXQoXCIgXCIpLEQuek9yaWdpbj0oRS5sZW5ndGg+MiYmKDA9PT1tfHxcIjBweFwiIT09RVsyXSk/cGFyc2VGbG9hdChFWzJdKTptKXx8MCxmLnhzMD1mLmU9RVswXStcIiBcIisoRVsxXXx8XCI1MCVcIikrXCIgMHB4XCIsZj1uZXcgdGEoRCxcInpPcmlnaW5cIiwwLDAsZiwtMSxmLm4pLGYuYj1tLGYueHMwPWYuZT1ELnpPcmlnaW4pOmYueHMwPWYuZT1FKTpoYShFK1wiXCIsRCkpLG8mJihkLl90cmFuc2Zvcm1UeXBlPUQuc3ZnJiZBYXx8IW4mJjMhPT10aGlzLl90cmFuc2Zvcm1UeXBlPzI6MyksaiYmKGlbY109aiksayYmKGkuc2NhbGU9ayksZn0scHJlZml4OiEwfSkseWEoXCJib3hTaGFkb3dcIix7ZGVmYXVsdFZhbHVlOlwiMHB4IDBweCAwcHggMHB4ICM5OTlcIixwcmVmaXg6ITAsY29sb3I6ITAsbXVsdGk6ITAsa2V5d29yZDpcImluc2V0XCJ9KSx5YShcImJvcmRlclJhZGl1c1wiLHtkZWZhdWx0VmFsdWU6XCIwcHhcIixwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZixnLGgpe2I9dGhpcy5mb3JtYXQoYik7dmFyIGksaixrLGwsbSxuLG8scCxxLHIscyx0LHUsdix3LHgseT1bXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIl0sej1hLnN0eWxlO2ZvcihxPXBhcnNlRmxvYXQoYS5vZmZzZXRXaWR0aCkscj1wYXJzZUZsb2F0KGEub2Zmc2V0SGVpZ2h0KSxpPWIuc3BsaXQoXCIgXCIpLGo9MDtqPHkubGVuZ3RoO2orKyl0aGlzLnAuaW5kZXhPZihcImJvcmRlclwiKSYmKHlbal09Wih5W2pdKSksbT1sPV8oYSx5W2pdLGUsITEsXCIwcHhcIiksLTEhPT1tLmluZGV4T2YoXCIgXCIpJiYobD1tLnNwbGl0KFwiIFwiKSxtPWxbMF0sbD1sWzFdKSxuPWs9aVtqXSxvPXBhcnNlRmxvYXQobSksdD1tLnN1YnN0cigobytcIlwiKS5sZW5ndGgpLHU9XCI9XCI9PT1uLmNoYXJBdCgxKSx1PyhwPXBhcnNlSW50KG4uY2hhckF0KDApK1wiMVwiLDEwKSxuPW4uc3Vic3RyKDIpLHAqPXBhcnNlRmxvYXQobikscz1uLnN1YnN0cigocCtcIlwiKS5sZW5ndGgtKDA+cD8xOjApKXx8XCJcIik6KHA9cGFyc2VGbG9hdChuKSxzPW4uc3Vic3RyKChwK1wiXCIpLmxlbmd0aCkpLFwiXCI9PT1zJiYocz1kW2NdfHx0KSxzIT09dCYmKHY9YWEoYSxcImJvcmRlckxlZnRcIixvLHQpLHc9YWEoYSxcImJvcmRlclRvcFwiLG8sdCksXCIlXCI9PT1zPyhtPXYvcSoxMDArXCIlXCIsbD13L3IqMTAwK1wiJVwiKTpcImVtXCI9PT1zPyh4PWFhKGEsXCJib3JkZXJMZWZ0XCIsMSxcImVtXCIpLG09di94K1wiZW1cIixsPXcveCtcImVtXCIpOihtPXYrXCJweFwiLGw9dytcInB4XCIpLHUmJihuPXBhcnNlRmxvYXQobSkrcCtzLGs9cGFyc2VGbG9hdChsKStwK3MpKSxnPXZhKHoseVtqXSxtK1wiIFwiK2wsbitcIiBcIitrLCExLFwiMHB4XCIsZyk7cmV0dXJuIGd9LHByZWZpeDohMCxmb3JtYXR0ZXI6cWEoXCIwcHggMHB4IDBweCAwcHhcIiwhMSwhMCl9KSx5YShcImJvcmRlckJvdHRvbUxlZnRSYWRpdXMsYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsYm9yZGVyVG9wTGVmdFJhZGl1cyxib3JkZXJUb3BSaWdodFJhZGl1c1wiLHtkZWZhdWx0VmFsdWU6XCIwcHhcIixwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZCxmLGcpe3JldHVybiB2YShhLnN0eWxlLGMsdGhpcy5mb3JtYXQoXyhhLGMsZSwhMSxcIjBweCAwcHhcIikpLHRoaXMuZm9ybWF0KGIpLCExLFwiMHB4XCIsZil9LHByZWZpeDohMCxmb3JtYXR0ZXI6cWEoXCIwcHggMHB4XCIsITEsITApfSkseWEoXCJiYWNrZ3JvdW5kUG9zaXRpb25cIix7ZGVmYXVsdFZhbHVlOlwiMCAwXCIscGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZixnKXt2YXIgaCxpLGosayxsLG0sbj1cImJhY2tncm91bmQtcG9zaXRpb25cIixvPWV8fCQoYSxudWxsKSxxPXRoaXMuZm9ybWF0KChvP3A/by5nZXRQcm9wZXJ0eVZhbHVlKG4rXCIteFwiKStcIiBcIitvLmdldFByb3BlcnR5VmFsdWUobitcIi15XCIpOm8uZ2V0UHJvcGVydHlWYWx1ZShuKTphLmN1cnJlbnRTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YK1wiIFwiK2EuY3VycmVudFN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkpfHxcIjAgMFwiKSxyPXRoaXMuZm9ybWF0KGIpO2lmKC0xIT09cS5pbmRleE9mKFwiJVwiKSE9KC0xIT09ci5pbmRleE9mKFwiJVwiKSkmJnIuc3BsaXQoXCIsXCIpLmxlbmd0aDwyJiYobT1fKGEsXCJiYWNrZ3JvdW5kSW1hZ2VcIikucmVwbGFjZShELFwiXCIpLG0mJlwibm9uZVwiIT09bSkpe2ZvcihoPXEuc3BsaXQoXCIgXCIpLGk9ci5zcGxpdChcIiBcIiksUi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixtKSxqPTI7LS1qPi0xOylxPWhbal0saz0tMSE9PXEuaW5kZXhPZihcIiVcIiksayE9PSgtMSE9PWlbal0uaW5kZXhPZihcIiVcIikpJiYobD0wPT09aj9hLm9mZnNldFdpZHRoLVIud2lkdGg6YS5vZmZzZXRIZWlnaHQtUi5oZWlnaHQsaFtqXT1rP3BhcnNlRmxvYXQocSkvMTAwKmwrXCJweFwiOnBhcnNlRmxvYXQocSkvbCoxMDArXCIlXCIpO3E9aC5qb2luKFwiIFwiKX1yZXR1cm4gdGhpcy5wYXJzZUNvbXBsZXgoYS5zdHlsZSxxLHIsZixnKX0sZm9ybWF0dGVyOmhhfSkseWEoXCJiYWNrZ3JvdW5kU2l6ZVwiLHtkZWZhdWx0VmFsdWU6XCIwIDBcIixmb3JtYXR0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGErPVwiXCIsaGEoLTE9PT1hLmluZGV4T2YoXCIgXCIpP2ErXCIgXCIrYTphKX19KSx5YShcInBlcnNwZWN0aXZlXCIse2RlZmF1bHRWYWx1ZTpcIjBweFwiLHByZWZpeDohMH0pLHlhKFwicGVyc3BlY3RpdmVPcmlnaW5cIix7ZGVmYXVsdFZhbHVlOlwiNTAlIDUwJVwiLHByZWZpeDohMH0pLHlhKFwidHJhbnNmb3JtU3R5bGVcIix7cHJlZml4OiEwfSkseWEoXCJiYWNrZmFjZVZpc2liaWxpdHlcIix7cHJlZml4OiEwfSkseWEoXCJ1c2VyU2VsZWN0XCIse1xucHJlZml4OiEwfSkseWEoXCJtYXJnaW5cIix7cGFyc2VyOnJhKFwibWFyZ2luVG9wLG1hcmdpblJpZ2h0LG1hcmdpbkJvdHRvbSxtYXJnaW5MZWZ0XCIpfSkseWEoXCJwYWRkaW5nXCIse3BhcnNlcjpyYShcInBhZGRpbmdUb3AscGFkZGluZ1JpZ2h0LHBhZGRpbmdCb3R0b20scGFkZGluZ0xlZnRcIil9KSx5YShcImNsaXBcIix7ZGVmYXVsdFZhbHVlOlwicmVjdCgwcHgsMHB4LDBweCwwcHgpXCIscGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZixnKXt2YXIgaCxpLGo7cmV0dXJuIDk+cD8oaT1hLmN1cnJlbnRTdHlsZSxqPTg+cD9cIiBcIjpcIixcIixoPVwicmVjdChcIitpLmNsaXBUb3AraitpLmNsaXBSaWdodCtqK2kuY2xpcEJvdHRvbStqK2kuY2xpcExlZnQrXCIpXCIsYj10aGlzLmZvcm1hdChiKS5zcGxpdChcIixcIikuam9pbihqKSk6KGg9dGhpcy5mb3JtYXQoXyhhLHRoaXMucCxlLCExLHRoaXMuZGZsdCkpLGI9dGhpcy5mb3JtYXQoYikpLHRoaXMucGFyc2VDb21wbGV4KGEuc3R5bGUsaCxiLGYsZyl9fSkseWEoXCJ0ZXh0U2hhZG93XCIse2RlZmF1bHRWYWx1ZTpcIjBweCAwcHggMHB4ICM5OTlcIixjb2xvcjohMCxtdWx0aTohMH0pLHlhKFwiYXV0b1JvdW5kLHN0cmljdFVuaXRzXCIse3BhcnNlcjpmdW5jdGlvbihhLGIsYyxkLGUpe3JldHVybiBlfX0pLHlhKFwiYm9yZGVyXCIse2RlZmF1bHRWYWx1ZTpcIjBweCBzb2xpZCAjMDAwXCIscGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZixnKXt2YXIgaD1fKGEsXCJib3JkZXJUb3BXaWR0aFwiLGUsITEsXCIwcHhcIiksaT10aGlzLmZvcm1hdChiKS5zcGxpdChcIiBcIiksaj1pWzBdLnJlcGxhY2UodyxcIlwiKTtyZXR1cm5cInB4XCIhPT1qJiYoaD1wYXJzZUZsb2F0KGgpL2FhKGEsXCJib3JkZXJUb3BXaWR0aFwiLDEsaikraiksdGhpcy5wYXJzZUNvbXBsZXgoYS5zdHlsZSx0aGlzLmZvcm1hdChoK1wiIFwiK18oYSxcImJvcmRlclRvcFN0eWxlXCIsZSwhMSxcInNvbGlkXCIpK1wiIFwiK18oYSxcImJvcmRlclRvcENvbG9yXCIsZSwhMSxcIiMwMDBcIikpLGkuam9pbihcIiBcIiksZixnKX0sY29sb3I6ITAsZm9ybWF0dGVyOmZ1bmN0aW9uKGEpe3ZhciBiPWEuc3BsaXQoXCIgXCIpO3JldHVybiBiWzBdK1wiIFwiKyhiWzFdfHxcInNvbGlkXCIpK1wiIFwiKyhhLm1hdGNoKHBhKXx8W1wiIzAwMFwiXSlbMF19fSkseWEoXCJib3JkZXJXaWR0aFwiLHtwYXJzZXI6cmEoXCJib3JkZXJUb3BXaWR0aCxib3JkZXJSaWdodFdpZHRoLGJvcmRlckJvdHRvbVdpZHRoLGJvcmRlckxlZnRXaWR0aFwiKX0pLHlhKFwiZmxvYXQsY3NzRmxvYXQsc3R5bGVGbG9hdFwiLHtwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnPWEuc3R5bGUsaD1cImNzc0Zsb2F0XCJpbiBnP1wiY3NzRmxvYXRcIjpcInN0eWxlRmxvYXRcIjtyZXR1cm4gbmV3IHRhKGcsaCwwLDAsZSwtMSxjLCExLDAsZ1toXSxiKX19KTt2YXIgVWE9ZnVuY3Rpb24oYSl7dmFyIGIsYz10aGlzLnQsZD1jLmZpbHRlcnx8Xyh0aGlzLmRhdGEsXCJmaWx0ZXJcIil8fFwiXCIsZT10aGlzLnMrdGhpcy5jKmF8MDsxMDA9PT1lJiYoLTE9PT1kLmluZGV4T2YoXCJhdHJpeChcIikmJi0xPT09ZC5pbmRleE9mKFwicmFkaWVudChcIikmJi0xPT09ZC5pbmRleE9mKFwib2FkZXIoXCIpPyhjLnJlbW92ZUF0dHJpYnV0ZShcImZpbHRlclwiKSxiPSFfKHRoaXMuZGF0YSxcImZpbHRlclwiKSk6KGMuZmlsdGVyPWQucmVwbGFjZSh6LFwiXCIpLGI9ITApKSxifHwodGhpcy54bjEmJihjLmZpbHRlcj1kPWR8fFwiYWxwaGEob3BhY2l0eT1cIitlK1wiKVwiKSwtMT09PWQuaW5kZXhPZihcInBhY2l0eVwiKT8wPT09ZSYmdGhpcy54bjF8fChjLmZpbHRlcj1kK1wiIGFscGhhKG9wYWNpdHk9XCIrZStcIilcIik6Yy5maWx0ZXI9ZC5yZXBsYWNlKHgsXCJvcGFjaXR5PVwiK2UpKX07eWEoXCJvcGFjaXR5LGFscGhhLGF1dG9BbHBoYVwiLHtkZWZhdWx0VmFsdWU6XCIxXCIscGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZixnKXt2YXIgaD1wYXJzZUZsb2F0KF8oYSxcIm9wYWNpdHlcIixlLCExLFwiMVwiKSksaT1hLnN0eWxlLGo9XCJhdXRvQWxwaGFcIj09PWM7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIGImJlwiPVwiPT09Yi5jaGFyQXQoMSkmJihiPShcIi1cIj09PWIuY2hhckF0KDApPy0xOjEpKnBhcnNlRmxvYXQoYi5zdWJzdHIoMikpK2gpLGomJjE9PT1oJiZcImhpZGRlblwiPT09XyhhLFwidmlzaWJpbGl0eVwiLGUpJiYwIT09YiYmKGg9MCksVT9mPW5ldyB0YShpLFwib3BhY2l0eVwiLGgsYi1oLGYpOihmPW5ldyB0YShpLFwib3BhY2l0eVwiLDEwMCpoLDEwMCooYi1oKSxmKSxmLnhuMT1qPzE6MCxpLnpvb209MSxmLnR5cGU9MixmLmI9XCJhbHBoYShvcGFjaXR5PVwiK2YucytcIilcIixmLmU9XCJhbHBoYShvcGFjaXR5PVwiKyhmLnMrZi5jKStcIilcIixmLmRhdGE9YSxmLnBsdWdpbj1nLGYuc2V0UmF0aW89VWEpLGomJihmPW5ldyB0YShpLFwidmlzaWJpbGl0eVwiLDAsMCxmLC0xLG51bGwsITEsMCwwIT09aD9cImluaGVyaXRcIjpcImhpZGRlblwiLDA9PT1iP1wiaGlkZGVuXCI6XCJpbmhlcml0XCIpLGYueHMwPVwiaW5oZXJpdFwiLGQuX292ZXJ3cml0ZVByb3BzLnB1c2goZi5uKSxkLl9vdmVyd3JpdGVQcm9wcy5wdXNoKGMpKSxmfX0pO3ZhciBWYT1mdW5jdGlvbihhLGIpe2ImJihhLnJlbW92ZVByb3BlcnR5PygoXCJtc1wiPT09Yi5zdWJzdHIoMCwyKXx8XCJ3ZWJraXRcIj09PWIuc3Vic3RyKDAsNikpJiYoYj1cIi1cIitiKSxhLnJlbW92ZVByb3BlcnR5KGIucmVwbGFjZShCLFwiLSQxXCIpLnRvTG93ZXJDYXNlKCkpKTphLnJlbW92ZUF0dHJpYnV0ZShiKSl9LFdhPWZ1bmN0aW9uKGEpe2lmKHRoaXMudC5fZ3NDbGFzc1BUPXRoaXMsMT09PWF8fDA9PT1hKXt0aGlzLnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwwPT09YT90aGlzLmI6dGhpcy5lKTtmb3IodmFyIGI9dGhpcy5kYXRhLGM9dGhpcy50LnN0eWxlO2I7KWIudj9jW2IucF09Yi52OlZhKGMsYi5wKSxiPWIuX25leHQ7MT09PWEmJnRoaXMudC5fZ3NDbGFzc1BUPT09dGhpcyYmKHRoaXMudC5fZ3NDbGFzc1BUPW51bGwpfWVsc2UgdGhpcy50LmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIT09dGhpcy5lJiZ0aGlzLnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIix0aGlzLmUpfTt5YShcImNsYXNzTmFtZVwiLHtwYXJzZXI6ZnVuY3Rpb24oYSxiLGQsZixnLGgsaSl7dmFyIGosayxsLG0sbixvPWEuZ2V0QXR0cmlidXRlKFwiY2xhc3NcIil8fFwiXCIscD1hLnN0eWxlLmNzc1RleHQ7aWYoZz1mLl9jbGFzc05hbWVQVD1uZXcgdGEoYSxkLDAsMCxnLDIpLGcuc2V0UmF0aW89V2EsZy5wcj0tMTEsYz0hMCxnLmI9byxrPWNhKGEsZSksbD1hLl9nc0NsYXNzUFQpe2ZvcihtPXt9LG49bC5kYXRhO247KW1bbi5wXT0xLG49bi5fbmV4dDtsLnNldFJhdGlvKDEpfXJldHVybiBhLl9nc0NsYXNzUFQ9ZyxnLmU9XCI9XCIhPT1iLmNoYXJBdCgxKT9iOm8ucmVwbGFjZShuZXcgUmVnRXhwKFwiKD86XFxcXHN8XilcIitiLnN1YnN0cigyKStcIig/IVtcXFxcdy1dKVwiKSxcIlwiKSsoXCIrXCI9PT1iLmNoYXJBdCgwKT9cIiBcIitiLnN1YnN0cigyKTpcIlwiKSxhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsZy5lKSxqPWRhKGEsayxjYShhKSxpLG0pLGEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIixvKSxnLmRhdGE9ai5maXJzdE1QVCxhLnN0eWxlLmNzc1RleHQ9cCxnPWcueGZpcnN0PWYucGFyc2UoYSxqLmRpZnMsZyxoKX19KTt2YXIgWGE9ZnVuY3Rpb24oYSl7aWYoKDE9PT1hfHwwPT09YSkmJnRoaXMuZGF0YS5fdG90YWxUaW1lPT09dGhpcy5kYXRhLl90b3RhbER1cmF0aW9uJiZcImlzRnJvbVN0YXJ0XCIhPT10aGlzLmRhdGEuZGF0YSl7dmFyIGIsYyxkLGUsZixnPXRoaXMudC5zdHlsZSxoPWkudHJhbnNmb3JtLnBhcnNlO2lmKFwiYWxsXCI9PT10aGlzLmUpZy5jc3NUZXh0PVwiXCIsZT0hMDtlbHNlIGZvcihiPXRoaXMuZS5zcGxpdChcIiBcIikuam9pbihcIlwiKS5zcGxpdChcIixcIiksZD1iLmxlbmd0aDstLWQ+LTE7KWM9YltkXSxpW2NdJiYoaVtjXS5wYXJzZT09PWg/ZT0hMDpjPVwidHJhbnNmb3JtT3JpZ2luXCI9PT1jP0VhOmlbY10ucCksVmEoZyxjKTtlJiYoVmEoZyxDYSksZj10aGlzLnQuX2dzVHJhbnNmb3JtLGYmJihmLnN2ZyYmKHRoaXMudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXN2Zy1vcmlnaW5cIiksdGhpcy50LnJlbW92ZUF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSksZGVsZXRlIHRoaXMudC5fZ3NUcmFuc2Zvcm0pKX19O2Zvcih5YShcImNsZWFyUHJvcHNcIix7cGFyc2VyOmZ1bmN0aW9uKGEsYixkLGUsZil7cmV0dXJuIGY9bmV3IHRhKGEsZCwwLDAsZiwyKSxmLnNldFJhdGlvPVhhLGYuZT1iLGYucHI9LTEwLGYuZGF0YT1lLl90d2VlbixjPSEwLGZ9fSksaj1cImJlemllcix0aHJvd1Byb3BzLHBoeXNpY3NQcm9wcyxwaHlzaWNzMkRcIi5zcGxpdChcIixcIiksd2E9ai5sZW5ndGg7d2EtLTspemEoalt3YV0pO2o9Zy5wcm90b3R5cGUsai5fZmlyc3RQVD1qLl9sYXN0UGFyc2VkVHJhbnNmb3JtPWouX3RyYW5zZm9ybT1udWxsLGouX29uSW5pdFR3ZWVuPWZ1bmN0aW9uKGEsYixoLGope2lmKCFhLm5vZGVUeXBlKXJldHVybiExO3RoaXMuX3RhcmdldD1xPWEsdGhpcy5fdHdlZW49aCx0aGlzLl92YXJzPWIscj1qLGs9Yi5hdXRvUm91bmQsYz0hMSxkPWIuc3VmZml4TWFwfHxnLnN1ZmZpeE1hcCxlPSQoYSxcIlwiKSxmPXRoaXMuX292ZXJ3cml0ZVByb3BzO3ZhciBuLHAscyx0LHUsdix3LHgseixBPWEuc3R5bGU7aWYobCYmXCJcIj09PUEuekluZGV4JiYobj1fKGEsXCJ6SW5kZXhcIixlKSwoXCJhdXRvXCI9PT1ufHxcIlwiPT09bikmJnRoaXMuX2FkZExhenlTZXQoQSxcInpJbmRleFwiLDApKSxcInN0cmluZ1wiPT10eXBlb2YgYiYmKHQ9QS5jc3NUZXh0LG49Y2EoYSxlKSxBLmNzc1RleHQ9dCtcIjtcIitiLG49ZGEoYSxuLGNhKGEpKS5kaWZzLCFVJiZ5LnRlc3QoYikmJihuLm9wYWNpdHk9cGFyc2VGbG9hdChSZWdFeHAuJDEpKSxiPW4sQS5jc3NUZXh0PXQpLGIuY2xhc3NOYW1lP3RoaXMuX2ZpcnN0UFQ9cD1pLmNsYXNzTmFtZS5wYXJzZShhLGIuY2xhc3NOYW1lLFwiY2xhc3NOYW1lXCIsdGhpcyxudWxsLG51bGwsYik6dGhpcy5fZmlyc3RQVD1wPXRoaXMucGFyc2UoYSxiLG51bGwpLHRoaXMuX3RyYW5zZm9ybVR5cGUpe2Zvcih6PTM9PT10aGlzLl90cmFuc2Zvcm1UeXBlLENhP20mJihsPSEwLFwiXCI9PT1BLnpJbmRleCYmKHc9XyhhLFwiekluZGV4XCIsZSksKFwiYXV0b1wiPT09d3x8XCJcIj09PXcpJiZ0aGlzLl9hZGRMYXp5U2V0KEEsXCJ6SW5kZXhcIiwwKSksbyYmdGhpcy5fYWRkTGF6eVNldChBLFwiV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5XCIsdGhpcy5fdmFycy5XZWJraXRCYWNrZmFjZVZpc2liaWxpdHl8fCh6P1widmlzaWJsZVwiOlwiaGlkZGVuXCIpKSk6QS56b29tPTEscz1wO3MmJnMuX25leHQ7KXM9cy5fbmV4dDt4PW5ldyB0YShhLFwidHJhbnNmb3JtXCIsMCwwLG51bGwsMiksdGhpcy5fbGlua0NTU1AoeCxudWxsLHMpLHguc2V0UmF0aW89Q2E/VGE6U2EseC5kYXRhPXRoaXMuX3RyYW5zZm9ybXx8UmEoYSxlLCEwKSx4LnR3ZWVuPWgseC5wcj0tMSxmLnBvcCgpfWlmKGMpe2Zvcig7cDspe2Zvcih2PXAuX25leHQscz10O3MmJnMucHI+cC5wcjspcz1zLl9uZXh0OyhwLl9wcmV2PXM/cy5fcHJldjp1KT9wLl9wcmV2Ll9uZXh0PXA6dD1wLChwLl9uZXh0PXMpP3MuX3ByZXY9cDp1PXAscD12fXRoaXMuX2ZpcnN0UFQ9dH1yZXR1cm4hMH0sai5wYXJzZT1mdW5jdGlvbihhLGIsYyxmKXt2YXIgZyxoLGosbCxtLG4sbyxwLHMsdCx1PWEuc3R5bGU7Zm9yKGcgaW4gYil7aWYobj1iW2ddLFwiZnVuY3Rpb25cIj09dHlwZW9mIG4mJihuPW4ocixxKSksaD1pW2ddKWM9aC5wYXJzZShhLG4sZyx0aGlzLGMsZixiKTtlbHNle2lmKFwiLS1cIj09PWcuc3Vic3RyKDAsMikpe3RoaXMuX3R3ZWVuLl9wcm9wTG9va3VwW2ddPXRoaXMuX2FkZFR3ZWVuLmNhbGwodGhpcy5fdHdlZW4sYS5zdHlsZSxcInNldFByb3BlcnR5XCIsJChhKS5nZXRQcm9wZXJ0eVZhbHVlKGcpK1wiXCIsbitcIlwiLGcsITEsZyk7Y29udGludWV9bT1fKGEsZyxlKStcIlwiLHM9XCJzdHJpbmdcIj09dHlwZW9mIG4sXCJjb2xvclwiPT09Z3x8XCJmaWxsXCI9PT1nfHxcInN0cm9rZVwiPT09Z3x8LTEhPT1nLmluZGV4T2YoXCJDb2xvclwiKXx8cyYmQS50ZXN0KG4pPyhzfHwobj1uYShuKSxuPShuLmxlbmd0aD4zP1wicmdiYShcIjpcInJnYihcIikrbi5qb2luKFwiLFwiKStcIilcIiksYz12YSh1LGcsbSxuLCEwLFwidHJhbnNwYXJlbnRcIixjLDAsZikpOnMmJkoudGVzdChuKT9jPXZhKHUsZyxtLG4sITAsbnVsbCxjLDAsZik6KGo9cGFyc2VGbG9hdChtKSxvPWp8fDA9PT1qP20uc3Vic3RyKChqK1wiXCIpLmxlbmd0aCk6XCJcIiwoXCJcIj09PW18fFwiYXV0b1wiPT09bSkmJihcIndpZHRoXCI9PT1nfHxcImhlaWdodFwiPT09Zz8oaj1nYShhLGcsZSksbz1cInB4XCIpOlwibGVmdFwiPT09Z3x8XCJ0b3BcIj09PWc/KGo9YmEoYSxnLGUpLG89XCJweFwiKTooaj1cIm9wYWNpdHlcIiE9PWc/MDoxLG89XCJcIikpLHQ9cyYmXCI9XCI9PT1uLmNoYXJBdCgxKSx0PyhsPXBhcnNlSW50KG4uY2hhckF0KDApK1wiMVwiLDEwKSxuPW4uc3Vic3RyKDIpLGwqPXBhcnNlRmxvYXQobikscD1uLnJlcGxhY2UodyxcIlwiKSk6KGw9cGFyc2VGbG9hdChuKSxwPXM/bi5yZXBsYWNlKHcsXCJcIik6XCJcIiksXCJcIj09PXAmJihwPWcgaW4gZD9kW2ddOm8pLG49bHx8MD09PWw/KHQ/bCtqOmwpK3A6YltnXSxvIT09cCYmKFwiXCIhPT1wfHxcImxpbmVIZWlnaHRcIj09PWcpJiYobHx8MD09PWwpJiZqJiYoaj1hYShhLGcsaixvKSxcIiVcIj09PXA/KGovPWFhKGEsZywxMDAsXCIlXCIpLzEwMCxiLnN0cmljdFVuaXRzIT09ITAmJihtPWorXCIlXCIpKTpcImVtXCI9PT1wfHxcInJlbVwiPT09cHx8XCJ2d1wiPT09cHx8XCJ2aFwiPT09cD9qLz1hYShhLGcsMSxwKTpcInB4XCIhPT1wJiYobD1hYShhLGcsbCxwKSxwPVwicHhcIiksdCYmKGx8fDA9PT1sKSYmKG49bCtqK3ApKSx0JiYobCs9aiksIWomJjAhPT1qfHwhbCYmMCE9PWw/dm9pZCAwIT09dVtnXSYmKG58fG4rXCJcIiE9XCJOYU5cIiYmbnVsbCE9bik/KGM9bmV3IHRhKHUsZyxsfHxqfHwwLDAsYywtMSxnLCExLDAsbSxuKSxjLnhzMD1cIm5vbmVcIiE9PW58fFwiZGlzcGxheVwiIT09ZyYmLTE9PT1nLmluZGV4T2YoXCJTdHlsZVwiKT9uOm0pOlcoXCJpbnZhbGlkIFwiK2crXCIgdHdlZW4gdmFsdWU6IFwiK2JbZ10pOihjPW5ldyB0YSh1LGcsaixsLWosYywwLGcsayE9PSExJiYoXCJweFwiPT09cHx8XCJ6SW5kZXhcIj09PWcpLDAsbSxuKSxjLnhzMD1wKSl9ZiYmYyYmIWMucGx1Z2luJiYoYy5wbHVnaW49Zil9cmV0dXJuIGN9LGouc2V0UmF0aW89ZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9dGhpcy5fZmlyc3RQVCxmPTFlLTY7aWYoMSE9PWF8fHRoaXMuX3R3ZWVuLl90aW1lIT09dGhpcy5fdHdlZW4uX2R1cmF0aW9uJiYwIT09dGhpcy5fdHdlZW4uX3RpbWUpaWYoYXx8dGhpcy5fdHdlZW4uX3RpbWUhPT10aGlzLl90d2Vlbi5fZHVyYXRpb24mJjAhPT10aGlzLl90d2Vlbi5fdGltZXx8dGhpcy5fdHdlZW4uX3Jhd1ByZXZUaW1lPT09LTFlLTYpZm9yKDtlOyl7aWYoYj1lLmMqYStlLnMsZS5yP2I9TWF0aC5yb3VuZChiKTpmPmImJmI+LWYmJihiPTApLGUudHlwZSlpZigxPT09ZS50eXBlKWlmKGQ9ZS5sLDI9PT1kKWUudFtlLnBdPWUueHMwK2IrZS54czErZS54bjErZS54czI7ZWxzZSBpZigzPT09ZCllLnRbZS5wXT1lLnhzMCtiK2UueHMxK2UueG4xK2UueHMyK2UueG4yK2UueHMzO2Vsc2UgaWYoND09PWQpZS50W2UucF09ZS54czArYitlLnhzMStlLnhuMStlLnhzMitlLnhuMitlLnhzMytlLnhuMytlLnhzNDtlbHNlIGlmKDU9PT1kKWUudFtlLnBdPWUueHMwK2IrZS54czErZS54bjErZS54czIrZS54bjIrZS54czMrZS54bjMrZS54czQrZS54bjQrZS54czU7ZWxzZXtmb3IoYz1lLnhzMCtiK2UueHMxLGQ9MTtkPGUubDtkKyspYys9ZVtcInhuXCIrZF0rZVtcInhzXCIrKGQrMSldO2UudFtlLnBdPWN9ZWxzZS0xPT09ZS50eXBlP2UudFtlLnBdPWUueHMwOmUuc2V0UmF0aW8mJmUuc2V0UmF0aW8oYSk7ZWxzZSBlLnRbZS5wXT1iK2UueHMwO2U9ZS5fbmV4dH1lbHNlIGZvcig7ZTspMiE9PWUudHlwZT9lLnRbZS5wXT1lLmI6ZS5zZXRSYXRpbyhhKSxlPWUuX25leHQ7ZWxzZSBmb3IoO2U7KXtpZigyIT09ZS50eXBlKWlmKGUuciYmLTEhPT1lLnR5cGUpaWYoYj1NYXRoLnJvdW5kKGUucytlLmMpLGUudHlwZSl7aWYoMT09PWUudHlwZSl7Zm9yKGQ9ZS5sLGM9ZS54czArYitlLnhzMSxkPTE7ZDxlLmw7ZCsrKWMrPWVbXCJ4blwiK2RdK2VbXCJ4c1wiKyhkKzEpXTtlLnRbZS5wXT1jfX1lbHNlIGUudFtlLnBdPWIrZS54czA7ZWxzZSBlLnRbZS5wXT1lLmU7ZWxzZSBlLnNldFJhdGlvKGEpO2U9ZS5fbmV4dH19LGouX2VuYWJsZVRyYW5zZm9ybXM9ZnVuY3Rpb24oYSl7dGhpcy5fdHJhbnNmb3JtPXRoaXMuX3RyYW5zZm9ybXx8UmEodGhpcy5fdGFyZ2V0LGUsITApLHRoaXMuX3RyYW5zZm9ybVR5cGU9dGhpcy5fdHJhbnNmb3JtLnN2ZyYmQWF8fCFhJiYzIT09dGhpcy5fdHJhbnNmb3JtVHlwZT8yOjN9O3ZhciBZYT1mdW5jdGlvbihhKXt0aGlzLnRbdGhpcy5wXT10aGlzLmUsdGhpcy5kYXRhLl9saW5rQ1NTUCh0aGlzLHRoaXMuX25leHQsbnVsbCwhMCl9O2ouX2FkZExhenlTZXQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkPXRoaXMuX2ZpcnN0UFQ9bmV3IHRhKGEsYiwwLDAsdGhpcy5fZmlyc3RQVCwyKTtkLmU9YyxkLnNldFJhdGlvPVlhLGQuZGF0YT10aGlzfSxqLl9saW5rQ1NTUD1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gYSYmKGImJihiLl9wcmV2PWEpLGEuX25leHQmJihhLl9uZXh0Ll9wcmV2PWEuX3ByZXYpLGEuX3ByZXY/YS5fcHJldi5fbmV4dD1hLl9uZXh0OnRoaXMuX2ZpcnN0UFQ9PT1hJiYodGhpcy5fZmlyc3RQVD1hLl9uZXh0LGQ9ITApLGM/Yy5fbmV4dD1hOmR8fG51bGwhPT10aGlzLl9maXJzdFBUfHwodGhpcy5fZmlyc3RQVD1hKSxhLl9uZXh0PWIsYS5fcHJldj1jKSxhfSxqLl9tb2Q9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPXRoaXMuX2ZpcnN0UFQ7YjspXCJmdW5jdGlvblwiPT10eXBlb2YgYVtiLnBdJiZhW2IucF09PT1NYXRoLnJvdW5kJiYoYi5yPTEpLGI9Yi5fbmV4dH0sai5fa2lsbD1mdW5jdGlvbihiKXt2YXIgYyxkLGUsZj1iO2lmKGIuYXV0b0FscGhhfHxiLmFscGhhKXtmPXt9O2ZvcihkIGluIGIpZltkXT1iW2RdO2Yub3BhY2l0eT0xLGYuYXV0b0FscGhhJiYoZi52aXNpYmlsaXR5PTEpfWZvcihiLmNsYXNzTmFtZSYmKGM9dGhpcy5fY2xhc3NOYW1lUFQpJiYoZT1jLnhmaXJzdCxlJiZlLl9wcmV2P3RoaXMuX2xpbmtDU1NQKGUuX3ByZXYsYy5fbmV4dCxlLl9wcmV2Ll9wcmV2KTplPT09dGhpcy5fZmlyc3RQVCYmKHRoaXMuX2ZpcnN0UFQ9Yy5fbmV4dCksYy5fbmV4dCYmdGhpcy5fbGlua0NTU1AoYy5fbmV4dCxjLl9uZXh0Ll9uZXh0LGUuX3ByZXYpLHRoaXMuX2NsYXNzTmFtZVBUPW51bGwpLGM9dGhpcy5fZmlyc3RQVDtjOyljLnBsdWdpbiYmYy5wbHVnaW4hPT1kJiZjLnBsdWdpbi5fa2lsbCYmKGMucGx1Z2luLl9raWxsKGIpLGQ9Yy5wbHVnaW4pLGM9Yy5fbmV4dDtyZXR1cm4gYS5wcm90b3R5cGUuX2tpbGwuY2FsbCh0aGlzLGYpfTt2YXIgWmE9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnO2lmKGEuc2xpY2UpZm9yKGU9YS5sZW5ndGg7LS1lPi0xOylaYShhW2VdLGIsYyk7ZWxzZSBmb3IoZD1hLmNoaWxkTm9kZXMsZT1kLmxlbmd0aDstLWU+LTE7KWY9ZFtlXSxnPWYudHlwZSxmLnN0eWxlJiYoYi5wdXNoKGNhKGYpKSxjJiZjLnB1c2goZikpLDEhPT1nJiY5IT09ZyYmMTEhPT1nfHwhZi5jaGlsZE5vZGVzLmxlbmd0aHx8WmEoZixiLGMpfTtyZXR1cm4gZy5jYXNjYWRlVG89ZnVuY3Rpb24oYSxjLGQpe3ZhciBlLGYsZyxoLGk9Yi50byhhLGMsZCksaj1baV0saz1bXSxsPVtdLG09W10sbj1iLl9pbnRlcm5hbHMucmVzZXJ2ZWRQcm9wcztmb3IoYT1pLl90YXJnZXRzfHxpLnRhcmdldCxaYShhLGssbSksaS5yZW5kZXIoYywhMCwhMCksWmEoYSxsKSxpLnJlbmRlcigwLCEwLCEwKSxpLl9lbmFibGVkKCEwKSxlPW0ubGVuZ3RoOy0tZT4tMTspaWYoZj1kYShtW2VdLGtbZV0sbFtlXSksZi5maXJzdE1QVCl7Zj1mLmRpZnM7Zm9yKGcgaW4gZCluW2ddJiYoZltnXT1kW2ddKTtoPXt9O2ZvcihnIGluIGYpaFtnXT1rW2VdW2ddO2oucHVzaChiLmZyb21UbyhtW2VdLGMsaCxmKSl9cmV0dXJuIGp9LGEuYWN0aXZhdGUoW2ddKSxnfSwhMCl9KSxfZ3NTY29wZS5fZ3NEZWZpbmUmJl9nc1Njb3BlLl9nc1F1ZXVlLnBvcCgpKCksZnVuY3Rpb24oYSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIGI9ZnVuY3Rpb24oKXtyZXR1cm4oX2dzU2NvcGUuR3JlZW5Tb2NrR2xvYmFsc3x8X2dzU2NvcGUpW2FdfTtcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz8ocmVxdWlyZShcIi4uL1R3ZWVuTGl0ZS5taW4uanNcIiksbW9kdWxlLmV4cG9ydHM9YigpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQmJmRlZmluZShbXCJUd2VlbkxpdGVcIl0sYil9KFwiQ1NTUGx1Z2luXCIpOyIsIi8qIVxuICogVkVSU0lPTjogMS4xNS42XG4gKiBEQVRFOiAyMDE3LTA2LTE5XG4gKiBVUERBVEVTIEFORCBET0NTIEFUOiBodHRwOi8vZ3JlZW5zb2NrLmNvbVxuICpcbiAqIEBsaWNlbnNlIENvcHlyaWdodCAoYykgMjAwOC0yMDE3LCBHcmVlblNvY2suIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIHdvcmsgaXMgc3ViamVjdCB0byB0aGUgdGVybXMgYXQgaHR0cDovL2dyZWVuc29jay5jb20vc3RhbmRhcmQtbGljZW5zZSBvciBmb3JcbiAqIENsdWIgR3JlZW5Tb2NrIG1lbWJlcnMsIHRoZSBzb2Z0d2FyZSBhZ3JlZW1lbnQgdGhhdCB3YXMgaXNzdWVkIHdpdGggeW91ciBtZW1iZXJzaGlwLlxuICogXG4gKiBAYXV0aG9yOiBKYWNrIERveWxlLCBqYWNrQGdyZWVuc29jay5jb21cbiAqKi9cbnZhciBfZ3NTY29wZT1cInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9nbG9iYWw6dGhpc3x8d2luZG93OyhfZ3NTY29wZS5fZ3NRdWV1ZXx8KF9nc1Njb3BlLl9nc1F1ZXVlPVtdKSkucHVzaChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO19nc1Njb3BlLl9nc0RlZmluZShcImVhc2luZy5CYWNrXCIsW1wiZWFzaW5nLkVhc2VcIl0sZnVuY3Rpb24oYSl7dmFyIGIsYyxkLGU9X2dzU2NvcGUuR3JlZW5Tb2NrR2xvYmFsc3x8X2dzU2NvcGUsZj1lLmNvbS5ncmVlbnNvY2ssZz0yKk1hdGguUEksaD1NYXRoLlBJLzIsaT1mLl9jbGFzcyxqPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9aShcImVhc2luZy5cIitiLGZ1bmN0aW9uKCl7fSwhMCksZT1kLnByb3RvdHlwZT1uZXcgYTtyZXR1cm4gZS5jb25zdHJ1Y3Rvcj1kLGUuZ2V0UmF0aW89YyxkfSxrPWEucmVnaXN0ZXJ8fGZ1bmN0aW9uKCl7fSxsPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY9aShcImVhc2luZy5cIithLHtlYXNlT3V0Om5ldyBiLGVhc2VJbjpuZXcgYyxlYXNlSW5PdXQ6bmV3IGR9LCEwKTtyZXR1cm4gayhmLGEpLGZ9LG09ZnVuY3Rpb24oYSxiLGMpe3RoaXMudD1hLHRoaXMudj1iLGMmJih0aGlzLm5leHQ9YyxjLnByZXY9dGhpcyx0aGlzLmM9Yy52LWIsdGhpcy5nYXA9Yy50LWEpfSxuPWZ1bmN0aW9uKGIsYyl7dmFyIGQ9aShcImVhc2luZy5cIitiLGZ1bmN0aW9uKGEpe3RoaXMuX3AxPWF8fDA9PT1hP2E6MS43MDE1OCx0aGlzLl9wMj0xLjUyNSp0aGlzLl9wMX0sITApLGU9ZC5wcm90b3R5cGU9bmV3IGE7cmV0dXJuIGUuY29uc3RydWN0b3I9ZCxlLmdldFJhdGlvPWMsZS5jb25maWc9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBkKGEpfSxkfSxvPWwoXCJCYWNrXCIsbihcIkJhY2tPdXRcIixmdW5jdGlvbihhKXtyZXR1cm4oYS09MSkqYSooKHRoaXMuX3AxKzEpKmErdGhpcy5fcDEpKzF9KSxuKFwiQmFja0luXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGEqYSooKHRoaXMuX3AxKzEpKmEtdGhpcy5fcDEpfSksbihcIkJhY2tJbk91dFwiLGZ1bmN0aW9uKGEpe3JldHVybihhKj0yKTwxPy41KmEqYSooKHRoaXMuX3AyKzEpKmEtdGhpcy5fcDIpOi41KigoYS09MikqYSooKHRoaXMuX3AyKzEpKmErdGhpcy5fcDIpKzIpfSkpLHA9aShcImVhc2luZy5TbG93TW9cIixmdW5jdGlvbihhLGIsYyl7Yj1ifHwwPT09Yj9iOi43LG51bGw9PWE/YT0uNzphPjEmJihhPTEpLHRoaXMuX3A9MSE9PWE/YjowLHRoaXMuX3AxPSgxLWEpLzIsdGhpcy5fcDI9YSx0aGlzLl9wMz10aGlzLl9wMSt0aGlzLl9wMix0aGlzLl9jYWxjRW5kPWM9PT0hMH0sITApLHE9cC5wcm90b3R5cGU9bmV3IGE7cmV0dXJuIHEuY29uc3RydWN0b3I9cCxxLmdldFJhdGlvPWZ1bmN0aW9uKGEpe3ZhciBiPWErKC41LWEpKnRoaXMuX3A7cmV0dXJuIGE8dGhpcy5fcDE/dGhpcy5fY2FsY0VuZD8xLShhPTEtYS90aGlzLl9wMSkqYTpiLShhPTEtYS90aGlzLl9wMSkqYSphKmEqYjphPnRoaXMuX3AzP3RoaXMuX2NhbGNFbmQ/MS0oYT0oYS10aGlzLl9wMykvdGhpcy5fcDEpKmE6YisoYS1iKSooYT0oYS10aGlzLl9wMykvdGhpcy5fcDEpKmEqYSphOnRoaXMuX2NhbGNFbmQ/MTpifSxwLmVhc2U9bmV3IHAoLjcsLjcpLHEuY29uZmlnPXAuY29uZmlnPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IHAoYSxiLGMpfSxiPWkoXCJlYXNpbmcuU3RlcHBlZEVhc2VcIixmdW5jdGlvbihhLGIpe2E9YXx8MSx0aGlzLl9wMT0xL2EsdGhpcy5fcDI9YSsoYj8wOjEpLHRoaXMuX3AzPWI/MTowfSwhMCkscT1iLnByb3RvdHlwZT1uZXcgYSxxLmNvbnN0cnVjdG9yPWIscS5nZXRSYXRpbz1mdW5jdGlvbihhKXtyZXR1cm4gMD5hP2E9MDphPj0xJiYoYT0uOTk5OTk5OTk5KSwoKHRoaXMuX3AyKmF8MCkrdGhpcy5fcDMpKnRoaXMuX3AxfSxxLmNvbmZpZz1iLmNvbmZpZz1mdW5jdGlvbihhLGMpe3JldHVybiBuZXcgYihhLGMpfSxjPWkoXCJlYXNpbmcuUm91Z2hFYXNlXCIsZnVuY3Rpb24oYil7Yj1ifHx7fTtmb3IodmFyIGMsZCxlLGYsZyxoLGk9Yi50YXBlcnx8XCJub25lXCIsaj1bXSxrPTAsbD0wfChiLnBvaW50c3x8MjApLG49bCxvPWIucmFuZG9taXplIT09ITEscD1iLmNsYW1wPT09ITAscT1iLnRlbXBsYXRlIGluc3RhbmNlb2YgYT9iLnRlbXBsYXRlOm51bGwscj1cIm51bWJlclwiPT10eXBlb2YgYi5zdHJlbmd0aD8uNCpiLnN0cmVuZ3RoOi40Oy0tbj4tMTspYz1vP01hdGgucmFuZG9tKCk6MS9sKm4sZD1xP3EuZ2V0UmF0aW8oYyk6YyxcIm5vbmVcIj09PWk/ZT1yOlwib3V0XCI9PT1pPyhmPTEtYyxlPWYqZipyKTpcImluXCI9PT1pP2U9YypjKnI6LjU+Yz8oZj0yKmMsZT1mKmYqLjUqcik6KGY9MiooMS1jKSxlPWYqZiouNSpyKSxvP2QrPU1hdGgucmFuZG9tKCkqZS0uNSplOm4lMj9kKz0uNSplOmQtPS41KmUscCYmKGQ+MT9kPTE6MD5kJiYoZD0wKSksaltrKytdPXt4OmMseTpkfTtmb3Ioai5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEueC1iLnh9KSxoPW5ldyBtKDEsMSxudWxsKSxuPWw7LS1uPi0xOylnPWpbbl0saD1uZXcgbShnLngsZy55LGgpO3RoaXMuX3ByZXY9bmV3IG0oMCwwLDAhPT1oLnQ/aDpoLm5leHQpfSwhMCkscT1jLnByb3RvdHlwZT1uZXcgYSxxLmNvbnN0cnVjdG9yPWMscS5nZXRSYXRpbz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLl9wcmV2O2lmKGE+Yi50KXtmb3IoO2IubmV4dCYmYT49Yi50OyliPWIubmV4dDtiPWIucHJldn1lbHNlIGZvcig7Yi5wcmV2JiZhPD1iLnQ7KWI9Yi5wcmV2O3JldHVybiB0aGlzLl9wcmV2PWIsYi52KyhhLWIudCkvYi5nYXAqYi5jfSxxLmNvbmZpZz1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IGMoYSl9LGMuZWFzZT1uZXcgYyxsKFwiQm91bmNlXCIsaihcIkJvdW5jZU91dFwiLGZ1bmN0aW9uKGEpe3JldHVybiAxLzIuNzU+YT83LjU2MjUqYSphOjIvMi43NT5hPzcuNTYyNSooYS09MS41LzIuNzUpKmErLjc1OjIuNS8yLjc1PmE/Ny41NjI1KihhLT0yLjI1LzIuNzUpKmErLjkzNzU6Ny41NjI1KihhLT0yLjYyNS8yLjc1KSphKy45ODQzNzV9KSxqKFwiQm91bmNlSW5cIixmdW5jdGlvbihhKXtyZXR1cm4oYT0xLWEpPDEvMi43NT8xLTcuNTYyNSphKmE6Mi8yLjc1PmE/MS0oNy41NjI1KihhLT0xLjUvMi43NSkqYSsuNzUpOjIuNS8yLjc1PmE/MS0oNy41NjI1KihhLT0yLjI1LzIuNzUpKmErLjkzNzUpOjEtKDcuNTYyNSooYS09Mi42MjUvMi43NSkqYSsuOTg0Mzc1KX0pLGooXCJCb3VuY2VJbk91dFwiLGZ1bmN0aW9uKGEpe3ZhciBiPS41PmE7cmV0dXJuIGE9Yj8xLTIqYToyKmEtMSxhPTEvMi43NT5hPzcuNTYyNSphKmE6Mi8yLjc1PmE/Ny41NjI1KihhLT0xLjUvMi43NSkqYSsuNzU6Mi41LzIuNzU+YT83LjU2MjUqKGEtPTIuMjUvMi43NSkqYSsuOTM3NTo3LjU2MjUqKGEtPTIuNjI1LzIuNzUpKmErLjk4NDM3NSxiPy41KigxLWEpOi41KmErLjV9KSksbChcIkNpcmNcIixqKFwiQ2lyY091dFwiLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnNxcnQoMS0oYS09MSkqYSl9KSxqKFwiQ2lyY0luXCIsZnVuY3Rpb24oYSl7cmV0dXJuLShNYXRoLnNxcnQoMS1hKmEpLTEpfSksaihcIkNpcmNJbk91dFwiLGZ1bmN0aW9uKGEpe3JldHVybihhKj0yKTwxPy0uNSooTWF0aC5zcXJ0KDEtYSphKS0xKTouNSooTWF0aC5zcXJ0KDEtKGEtPTIpKmEpKzEpfSkpLGQ9ZnVuY3Rpb24oYixjLGQpe3ZhciBlPWkoXCJlYXNpbmcuXCIrYixmdW5jdGlvbihhLGIpe3RoaXMuX3AxPWE+PTE/YToxLHRoaXMuX3AyPShifHxkKS8oMT5hP2E6MSksdGhpcy5fcDM9dGhpcy5fcDIvZyooTWF0aC5hc2luKDEvdGhpcy5fcDEpfHwwKSx0aGlzLl9wMj1nL3RoaXMuX3AyfSwhMCksZj1lLnByb3RvdHlwZT1uZXcgYTtyZXR1cm4gZi5jb25zdHJ1Y3Rvcj1lLGYuZ2V0UmF0aW89YyxmLmNvbmZpZz1mdW5jdGlvbihhLGIpe3JldHVybiBuZXcgZShhLGIpfSxlfSxsKFwiRWxhc3RpY1wiLGQoXCJFbGFzdGljT3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3AxKk1hdGgucG93KDIsLTEwKmEpKk1hdGguc2luKChhLXRoaXMuX3AzKSp0aGlzLl9wMikrMX0sLjMpLGQoXCJFbGFzdGljSW5cIixmdW5jdGlvbihhKXtyZXR1cm4tKHRoaXMuX3AxKk1hdGgucG93KDIsMTAqKGEtPTEpKSpNYXRoLnNpbigoYS10aGlzLl9wMykqdGhpcy5fcDIpKX0sLjMpLGQoXCJFbGFzdGljSW5PdXRcIixmdW5jdGlvbihhKXtyZXR1cm4oYSo9Mik8MT8tLjUqKHRoaXMuX3AxKk1hdGgucG93KDIsMTAqKGEtPTEpKSpNYXRoLnNpbigoYS10aGlzLl9wMykqdGhpcy5fcDIpKTp0aGlzLl9wMSpNYXRoLnBvdygyLC0xMCooYS09MSkpKk1hdGguc2luKChhLXRoaXMuX3AzKSp0aGlzLl9wMikqLjUrMX0sLjQ1KSksbChcIkV4cG9cIixqKFwiRXhwb091dFwiLGZ1bmN0aW9uKGEpe3JldHVybiAxLU1hdGgucG93KDIsLTEwKmEpfSksaihcIkV4cG9JblwiLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnBvdygyLDEwKihhLTEpKS0uMDAxfSksaihcIkV4cG9Jbk91dFwiLGZ1bmN0aW9uKGEpe3JldHVybihhKj0yKTwxPy41Kk1hdGgucG93KDIsMTAqKGEtMSkpOi41KigyLU1hdGgucG93KDIsLTEwKihhLTEpKSl9KSksbChcIlNpbmVcIixqKFwiU2luZU91dFwiLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnNpbihhKmgpfSksaihcIlNpbmVJblwiLGZ1bmN0aW9uKGEpe3JldHVybi1NYXRoLmNvcyhhKmgpKzF9KSxqKFwiU2luZUluT3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJuLS41KihNYXRoLmNvcyhNYXRoLlBJKmEpLTEpfSkpLGkoXCJlYXNpbmcuRWFzZUxvb2t1cFwiLHtmaW5kOmZ1bmN0aW9uKGIpe3JldHVybiBhLm1hcFtiXX19LCEwKSxrKGUuU2xvd01vLFwiU2xvd01vXCIsXCJlYXNlLFwiKSxrKGMsXCJSb3VnaEVhc2VcIixcImVhc2UsXCIpLGsoYixcIlN0ZXBwZWRFYXNlXCIsXCJlYXNlLFwiKSxvfSwhMCl9KSxfZ3NTY29wZS5fZ3NEZWZpbmUmJl9nc1Njb3BlLl9nc1F1ZXVlLnBvcCgpKCksZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgYT1mdW5jdGlvbigpe3JldHVybiBfZ3NTY29wZS5HcmVlblNvY2tHbG9iYWxzfHxfZ3NTY29wZX07XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHM/KHJlcXVpcmUoXCIuLi9Ud2VlbkxpdGUubWluLmpzXCIpLG1vZHVsZS5leHBvcnRzPWEoKSk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoW1wiVHdlZW5MaXRlXCJdLGEpfSgpOyIsIlxyXG47KGZ1bmN0aW9uKGZhY3RvcnkpIHtcclxuICAgICd1c2Ugc3RyaWN0JztcclxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuICAgICAgICBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZhY3RvcnkoalF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbn0oZnVuY3Rpb24oJCkge1xyXG4gICAgJ3VzZSBzdHJpY3QnO1xyXG4gICAgdmFyIFNsaWNrID0gd2luZG93LlNsaWNrIHx8IHt9O1xyXG5cclxuICAgIFNsaWNrID0gKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgaW5zdGFuY2VVaWQgPSAwO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBTbGljayhlbGVtZW50LCBzZXR0aW5ncykge1xyXG5cclxuICAgICAgICAgICAgdmFyIF8gPSB0aGlzLCBkYXRhU2V0dGluZ3M7XHJcblxyXG4gICAgICAgICAgICBfLmRlZmF1bHRzID0ge1xyXG4gICAgICAgICAgICAgICAgYWNjZXNzaWJpbGl0eTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZEFycm93czogJChlbGVtZW50KSxcclxuICAgICAgICAgICAgICAgIGFwcGVuZERvdHM6ICQoZWxlbWVudCksXHJcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhc05hdkZvcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1wcmV2XCIgYXJpYS1sYWJlbD1cIlByZXZpb3VzXCIgdHlwZT1cImJ1dHRvblwiPlByZXZpb3VzPC9idXR0b24+JyxcclxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gY2xhc3M9XCJzbGljay1uZXh0XCIgYXJpYS1sYWJlbD1cIk5leHRcIiB0eXBlPVwiYnV0dG9uXCI+TmV4dDwvYnV0dG9uPicsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnZWFzZScsXHJcbiAgICAgICAgICAgICAgICBjdXN0b21QYWdpbmc6IGZ1bmN0aW9uKHNsaWRlciwgaSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAkKCc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiAvPicpLnRleHQoaSArIDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZG90c0NsYXNzOiAnc2xpY2stZG90cycsXHJcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBlYXNpbmc6ICdsaW5lYXInLFxyXG4gICAgICAgICAgICAgICAgZWRnZUZyaWN0aW9uOiAwLjM1LFxyXG4gICAgICAgICAgICAgICAgZmFkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZvY3VzT25DaGFuZ2U6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsU2xpZGU6IDAsXHJcbiAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcclxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Ib3ZlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Gb2N1czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhdXNlT25Eb3RzSG92ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uZFRvOiAnd2luZG93JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IG51bGwsXHJcbiAgICAgICAgICAgICAgICByb3dzOiAxLFxyXG4gICAgICAgICAgICAgICAgcnRsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlOiAnJyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1BlclJvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICAgICAgICAgIHN3aXBlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgc3dpcGVUb1NsaWRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoTW92ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRvdWNoVGhyZXNob2xkOiA1LFxyXG4gICAgICAgICAgICAgICAgdXNlQ1NTOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdXNlVHJhbnNmb3JtOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmFyaWFibGVXaWR0aDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbFN3aXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgd2FpdEZvckFuaW1hdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IDEwMDBcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIF8uaW5pdGlhbHMgPSB7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZHJhZ2dpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYXV0b1BsYXlUaW1lcjogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREaXJlY3Rpb246IDAsXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50TGVmdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTbGlkZTogMCxcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogMSxcclxuICAgICAgICAgICAgICAgICRkb3RzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGlzdFdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgbGlzdEhlaWdodDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGxvYWRJbmRleDogMCxcclxuICAgICAgICAgICAgICAgICRuZXh0QXJyb3c6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkcHJldkFycm93OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNsaWRlQ291bnQ6IG51bGwsXHJcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlVHJhY2s6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAkc2xpZGVzOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgc2xpZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldDogMCxcclxuICAgICAgICAgICAgICAgIHN3aXBlTGVmdDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN3aXBpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgJGxpc3Q6IG51bGwsXHJcbiAgICAgICAgICAgICAgICB0b3VjaE9iamVjdDoge30sXHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm1zRW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bnNsaWNrZWQ6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAkLmV4dGVuZChfLCBfLmluaXRpYWxzKTtcclxuXHJcbiAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSBudWxsO1xyXG4gICAgICAgICAgICBfLmFuaW1Qcm9wID0gbnVsbDtcclxuICAgICAgICAgICAgXy5icmVha3BvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRTZXR0aW5ncyA9IFtdO1xyXG4gICAgICAgICAgICBfLmNzc1RyYW5zaXRpb25zID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBfLmhpZGRlbiA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIF8ucG9zaXRpb25Qcm9wID0gbnVsbDtcclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBudWxsO1xyXG4gICAgICAgICAgICBfLnJvd0NvdW50ID0gMTtcclxuICAgICAgICAgICAgXy5zaG91bGRDbGljayA9IHRydWU7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlciA9ICQoZWxlbWVudCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlc0NhY2hlID0gbnVsbDtcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gbnVsbDtcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9IG51bGw7XHJcbiAgICAgICAgICAgIF8udmlzaWJpbGl0eUNoYW5nZSA9ICd2aXNpYmlsaXR5Y2hhbmdlJztcclxuICAgICAgICAgICAgXy53aW5kb3dXaWR0aCA9IDA7XHJcbiAgICAgICAgICAgIF8ud2luZG93VGltZXIgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZGF0YVNldHRpbmdzID0gJChlbGVtZW50KS5kYXRhKCdzbGljaycpIHx8IHt9O1xyXG5cclxuICAgICAgICAgICAgXy5vcHRpb25zID0gJC5leHRlbmQoe30sIF8uZGVmYXVsdHMsIHNldHRpbmdzLCBkYXRhU2V0dGluZ3MpO1xyXG5cclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG5cclxuICAgICAgICAgICAgXy5vcmlnaW5hbFNldHRpbmdzID0gXy5vcHRpb25zO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICdtb3pIaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ21venZpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkb2N1bWVudC53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBfLmhpZGRlbiA9ICd3ZWJraXRIaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgXy52aXNpYmlsaXR5Q2hhbmdlID0gJ3dlYmtpdHZpc2liaWxpdHljaGFuZ2UnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmF1dG9QbGF5ID0gJC5wcm94eShfLmF1dG9QbGF5LCBfKTtcclxuICAgICAgICAgICAgXy5hdXRvUGxheUNsZWFyID0gJC5wcm94eShfLmF1dG9QbGF5Q2xlYXIsIF8pO1xyXG4gICAgICAgICAgICBfLmF1dG9QbGF5SXRlcmF0b3IgPSAkLnByb3h5KF8uYXV0b1BsYXlJdGVyYXRvciwgXyk7XHJcbiAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUgPSAkLnByb3h5KF8uY2hhbmdlU2xpZGUsIF8pO1xyXG4gICAgICAgICAgICBfLmNsaWNrSGFuZGxlciA9ICQucHJveHkoXy5jbGlja0hhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLnNlbGVjdEhhbmRsZXIgPSAkLnByb3h5KF8uc2VsZWN0SGFuZGxlciwgXyk7XHJcbiAgICAgICAgICAgIF8uc2V0UG9zaXRpb24gPSAkLnByb3h5KF8uc2V0UG9zaXRpb24sIF8pO1xyXG4gICAgICAgICAgICBfLnN3aXBlSGFuZGxlciA9ICQucHJveHkoXy5zd2lwZUhhbmRsZXIsIF8pO1xyXG4gICAgICAgICAgICBfLmRyYWdIYW5kbGVyID0gJC5wcm94eShfLmRyYWdIYW5kbGVyLCBfKTtcclxuICAgICAgICAgICAgXy5rZXlIYW5kbGVyID0gJC5wcm94eShfLmtleUhhbmRsZXIsIF8pO1xyXG5cclxuICAgICAgICAgICAgXy5pbnN0YW5jZVVpZCA9IGluc3RhbmNlVWlkKys7XHJcblxyXG4gICAgICAgICAgICAvLyBBIHNpbXBsZSB3YXkgdG8gY2hlY2sgZm9yIEhUTUwgc3RyaW5nc1xyXG4gICAgICAgICAgICAvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAobXVzdCBzdGFydCB3aXRoIDwpXHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3RlZCBmcm9tIGpRdWVyeSB2MS4xMSBzb3VyY2VcclxuICAgICAgICAgICAgXy5odG1sRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKikkLztcclxuXHJcblxyXG4gICAgICAgICAgICBfLnJlZ2lzdGVyQnJlYWtwb2ludHMoKTtcclxuICAgICAgICAgICAgXy5pbml0KHRydWUpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBTbGljaztcclxuXHJcbiAgICB9KCkpO1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hY3RpdmF0ZUFEQSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stYWN0aXZlJykuYXR0cih7XHJcbiAgICAgICAgICAgICdhcmlhLWhpZGRlbic6ICdmYWxzZSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYWRkU2xpZGUgPSBTbGljay5wcm90b3R5cGUuc2xpY2tBZGQgPSBmdW5jdGlvbihtYXJrdXAsIGluZGV4LCBhZGRCZWZvcmUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mKGluZGV4KSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgICAgICAgIGFkZEJlZm9yZSA9IGluZGV4O1xyXG4gICAgICAgICAgICBpbmRleCA9IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA8IDAgfHwgKGluZGV4ID49IF8uc2xpZGVDb3VudCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiBfLiRzbGlkZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYWRkQmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAkKG1hcmt1cCkuaW5zZXJ0QmVmb3JlKF8uJHNsaWRlcy5lcShpbmRleCkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLmluc2VydEFmdGVyKF8uJHNsaWRlcy5lcShpbmRleCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGFkZEJlZm9yZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgJChtYXJrdXApLnByZXBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQobWFya3VwKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID0gXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suYXBwZW5kKF8uJHNsaWRlcyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lYWNoKGZ1bmN0aW9uKGluZGV4LCBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzQ2FjaGUgPSBfLiRzbGlkZXM7XHJcblxyXG4gICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZUhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSAmJiBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgJiYgXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0SGVpZ2h0ID0gXy4kc2xpZGVzLmVxKF8uY3VycmVudFNsaWRlKS5vdXRlckhlaWdodCh0cnVlKTtcclxuICAgICAgICAgICAgXy4kbGlzdC5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogdGFyZ2V0SGVpZ2h0XHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYW5pbWF0ZVNsaWRlID0gZnVuY3Rpb24odGFyZ2V0TGVmdCwgY2FsbGJhY2spIHtcclxuXHJcbiAgICAgICAgdmFyIGFuaW1Qcm9wcyA9IHt9LFxyXG4gICAgICAgICAgICBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hbmltYXRlSGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlICYmIF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IC10YXJnZXRMZWZ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoXy50cmFuc2Zvcm1zRW5hYmxlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogdGFyZ2V0TGVmdFxyXG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogdGFyZ2V0TGVmdFxyXG4gICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkLCBfLm9wdGlvbnMuZWFzaW5nLCBjYWxsYmFjayk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmN1cnJlbnRMZWZ0ID0gLShfLmN1cnJlbnRMZWZ0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1TdGFydDogXy5jdXJyZW50TGVmdFxyXG4gICAgICAgICAgICAgICAgfSkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVN0YXJ0OiB0YXJnZXRMZWZ0XHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IF8ub3B0aW9ucy5zcGVlZCxcclxuICAgICAgICAgICAgICAgICAgICBlYXNpbmc6IF8ub3B0aW9ucy5lYXNpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcDogZnVuY3Rpb24obm93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdyA9IE1hdGguY2VpbChub3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZSgnICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3cgKyAncHgsIDBweCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoMHB4LCcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdyArICdweCknO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3MoYW5pbVByb3BzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IE1hdGguY2VpbCh0YXJnZXRMZWZ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLnZlcnRpY2FsID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4LCAwcHgpJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbVByb3BzW18uYW5pbVR5cGVdID0gJ3RyYW5zbGF0ZTNkKDBweCwnICsgdGFyZ2V0TGVmdCArICdweCwgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhhbmltUHJvcHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmRpc2FibGVUcmFuc2l0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjay5jYWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgXy5vcHRpb25zLnNwZWVkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdlRhcmdldCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGFzTmF2Rm9yID0gXy5vcHRpb25zLmFzTmF2Rm9yO1xyXG5cclxuICAgICAgICBpZiAoIGFzTmF2Rm9yICYmIGFzTmF2Rm9yICE9PSBudWxsICkge1xyXG4gICAgICAgICAgICBhc05hdkZvciA9ICQoYXNOYXZGb3IpLm5vdChfLiRzbGlkZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFzTmF2Rm9yO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFzTmF2Rm9yID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBhc05hdkZvciA9IF8uZ2V0TmF2VGFyZ2V0KCk7XHJcblxyXG4gICAgICAgIGlmICggYXNOYXZGb3IgIT09IG51bGwgJiYgdHlwZW9mIGFzTmF2Rm9yID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICAgICAgYXNOYXZGb3IuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMpLnNsaWNrKCdnZXRTbGljaycpO1xyXG4gICAgICAgICAgICAgICAgaWYoIXRhcmdldC51bnNsaWNrZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc2xpZGVIYW5kbGVyKGluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmFwcGx5VHJhbnNpdGlvbiA9IGZ1bmN0aW9uKHNsaWRlKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbiA9IHt9O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSBfLnRyYW5zZm9ybVR5cGUgKyAnICcgKyBfLm9wdGlvbnMuc3BlZWQgKyAnbXMgJyArIF8ub3B0aW9ucy5jc3NFYXNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb25bXy50cmFuc2l0aW9uVHlwZV0gPSAnb3BhY2l0eSAnICsgXy5vcHRpb25zLnNwZWVkICsgJ21zICcgKyBfLm9wdGlvbnMuY3NzRWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlKS5jc3ModHJhbnNpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5hdXRvUGxheUNsZWFyKCk7XHJcblxyXG4gICAgICAgIGlmICggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcclxuICAgICAgICAgICAgXy5hdXRvUGxheVRpbWVyID0gc2V0SW50ZXJ2YWwoIF8uYXV0b1BsYXlJdGVyYXRvciwgXy5vcHRpb25zLmF1dG9wbGF5U3BlZWQgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYXV0b1BsYXlDbGVhciA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLmF1dG9QbGF5VGltZXIpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5hdXRvUGxheUl0ZXJhdG9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICBpZiAoICFfLnBhdXNlZCAmJiAhXy5pbnRlcnJ1cHRlZCAmJiAhXy5mb2N1c3NlZCApIHtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIF8uZGlyZWN0aW9uID09PSAxICYmICggXy5jdXJyZW50U2xpZGUgKyAxICkgPT09ICggXy5zbGlkZUNvdW50IC0gMSApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKCBfLmRpcmVjdGlvbiA9PT0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVUbyA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIF8uY3VycmVudFNsaWRlIC0gMSA9PT0gMCApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLnNsaWRlSGFuZGxlciggc2xpZGVUbyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRBcnJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFycm93cyA9PT0gdHJ1ZSApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdyA9ICQoXy5vcHRpb25zLnByZXZBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyA9ICQoXy5vcHRpb25zLm5leHRBcnJvdykuYWRkQ2xhc3MoJ3NsaWNrLWFycm93Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiggXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWhpZGRlbicpLnJlbW92ZUF0dHIoJ2FyaWEtaGlkZGVuIHRhYmluZGV4Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5wcmVwZW5kVG8oXy5vcHRpb25zLmFwcGVuZEFycm93cyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hcHBlbmRUbyhfLm9wdGlvbnMuYXBwZW5kQXJyb3dzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5hZGQoIF8uJG5leHRBcnJvdyApXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgICAgICAuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdhcmlhLWRpc2FibGVkJzogJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZERvdHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBpLCBkb3Q7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1kb3R0ZWQnKTtcclxuXHJcbiAgICAgICAgICAgIGRvdCA9ICQoJzx1bCAvPicpLmFkZENsYXNzKF8ub3B0aW9ucy5kb3RzQ2xhc3MpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8PSBfLmdldERvdENvdW50KCk7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgZG90LmFwcGVuZCgkKCc8bGkgLz4nKS5hcHBlbmQoXy5vcHRpb25zLmN1c3RvbVBhZ2luZy5jYWxsKHRoaXMsIF8sIGkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMgPSBkb3QuYXBwZW5kVG8oXy5vcHRpb25zLmFwcGVuZERvdHMpO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5maW5kKCdsaScpLmZpcnN0KCkuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuYnVpbGRPdXQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMgPVxyXG4gICAgICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlbiggXy5vcHRpb25zLnNsaWRlICsgJzpub3QoLnNsaWNrLWNsb25lZCknKVxyXG4gICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1zbGlkZScpO1xyXG5cclxuICAgICAgICBfLnNsaWRlQ291bnQgPSBfLiRzbGlkZXMubGVuZ3RoO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXMuZWFjaChmdW5jdGlvbihpbmRleCwgZWxlbWVudCkge1xyXG4gICAgICAgICAgICAkKGVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAuYXR0cignZGF0YS1zbGljay1pbmRleCcsIGluZGV4KVxyXG4gICAgICAgICAgICAgICAgLmRhdGEoJ29yaWdpbmFsU3R5bGluZycsICQoZWxlbWVudCkuYXR0cignc3R5bGUnKSB8fCAnJyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci5hZGRDbGFzcygnc2xpY2stc2xpZGVyJyk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2sgPSAoXy5zbGlkZUNvdW50ID09PSAwKSA/XHJcbiAgICAgICAgICAgICQoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5hcHBlbmRUbyhfLiRzbGlkZXIpIDpcclxuICAgICAgICAgICAgXy4kc2xpZGVzLndyYXBBbGwoJzxkaXYgY2xhc3M9XCJzbGljay10cmFja1wiLz4nKS5wYXJlbnQoKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdCA9IF8uJHNsaWRlVHJhY2sud3JhcChcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJzbGljay1saXN0XCIvPicpLnBhcmVudCgpO1xyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKCdvcGFjaXR5JywgMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMuc3dpcGVUb1NsaWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlcikubm90KCdbc3JjXScpLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgIF8uc2V0dXBJbmZpbml0ZSgpO1xyXG5cclxuICAgICAgICBfLmJ1aWxkQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIF8uYnVpbGREb3RzKCk7XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG5cclxuXHJcbiAgICAgICAgXy5zZXRTbGlkZUNsYXNzZXModHlwZW9mIF8uY3VycmVudFNsaWRlID09PSAnbnVtYmVyJyA/IF8uY3VycmVudFNsaWRlIDogMCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uJGxpc3QuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5idWlsZFJvd3MgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBhLCBiLCBjLCBuZXdTbGlkZXMsIG51bU9mU2xpZGVzLCBvcmlnaW5hbFNsaWRlcyxzbGlkZXNQZXJTZWN0aW9uO1xyXG5cclxuICAgICAgICBuZXdTbGlkZXMgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgb3JpZ2luYWxTbGlkZXMgPSBfLiRzbGlkZXIuY2hpbGRyZW4oKTtcclxuXHJcbiAgICAgICAgaWYoXy5vcHRpb25zLnJvd3MgPiAxKSB7XHJcblxyXG4gICAgICAgICAgICBzbGlkZXNQZXJTZWN0aW9uID0gXy5vcHRpb25zLnNsaWRlc1BlclJvdyAqIF8ub3B0aW9ucy5yb3dzO1xyXG4gICAgICAgICAgICBudW1PZlNsaWRlcyA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLmxlbmd0aCAvIHNsaWRlc1BlclNlY3Rpb25cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGZvcihhID0gMDsgYSA8IG51bU9mU2xpZGVzOyBhKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHNsaWRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBmb3IoYiA9IDA7IGIgPCBfLm9wdGlvbnMucm93czsgYisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjID0gMDsgYyA8IF8ub3B0aW9ucy5zbGlkZXNQZXJSb3c7IGMrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gKGEgKiBzbGlkZXNQZXJTZWN0aW9uICsgKChiICogXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFNsaWRlcy5nZXQodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93LmFwcGVuZENoaWxkKG9yaWdpbmFsU2xpZGVzLmdldCh0YXJnZXQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZS5hcHBlbmRDaGlsZChyb3cpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbmV3U2xpZGVzLmFwcGVuZENoaWxkKHNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmVtcHR5KCkuYXBwZW5kKG5ld1NsaWRlcyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5jaGlsZHJlbigpLmNoaWxkcmVuKCkuY2hpbGRyZW4oKVxyXG4gICAgICAgICAgICAgICAgLmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzooMTAwIC8gXy5vcHRpb25zLnNsaWRlc1BlclJvdykgKyAnJScsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2Rpc3BsYXknOiAnaW5saW5lLWJsb2NrJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja1Jlc3BvbnNpdmUgPSBmdW5jdGlvbihpbml0aWFsLCBmb3JjZVVwZGF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQsIHRhcmdldEJyZWFrcG9pbnQsIHJlc3BvbmRUb1dpZHRoLCB0cmlnZ2VyQnJlYWtwb2ludCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBzbGlkZXJXaWR0aCA9IF8uJHNsaWRlci53aWR0aCgpO1xyXG4gICAgICAgIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8ICQod2luZG93KS53aWR0aCgpO1xyXG5cclxuICAgICAgICBpZiAoXy5yZXNwb25kVG8gPT09ICd3aW5kb3cnKSB7XHJcbiAgICAgICAgICAgIHJlc3BvbmRUb1dpZHRoID0gd2luZG93V2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLnJlc3BvbmRUbyA9PT0gJ3NsaWRlcicpIHtcclxuICAgICAgICAgICAgcmVzcG9uZFRvV2lkdGggPSBzbGlkZXJXaWR0aDtcclxuICAgICAgICB9IGVsc2UgaWYgKF8ucmVzcG9uZFRvID09PSAnbWluJykge1xyXG4gICAgICAgICAgICByZXNwb25kVG9XaWR0aCA9IE1hdGgubWluKHdpbmRvd1dpZHRoLCBzbGlkZXJXaWR0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5yZXNwb25zaXZlICYmXHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSAhPT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGJyZWFrcG9pbnQgaW4gXy5icmVha3BvaW50cykge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYnJlYWtwb2ludHMuaGFzT3duUHJvcGVydHkoYnJlYWtwb2ludCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXy5vcmlnaW5hbFNldHRpbmdzLm1vYmlsZUZpcnN0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uZFRvV2lkdGggPCBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50ID0gXy5icmVha3BvaW50c1ticmVha3BvaW50XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25kVG9XaWR0aCA+IF8uYnJlYWtwb2ludHNbYnJlYWtwb2ludF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQgPSBfLmJyZWFrcG9pbnRzW2JyZWFrcG9pbnRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0QnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRCcmVha3BvaW50ICE9PSBfLmFjdGl2ZUJyZWFrcG9pbnQgfHwgZm9yY2VVcGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5hY3RpdmVCcmVha3BvaW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLnVuc2xpY2sodGFyZ2V0QnJlYWtwb2ludCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRCcmVha3BvaW50XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQnJlYWtwb2ludCA9IHRhcmdldEJyZWFrcG9pbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFjdGl2ZUJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmJyZWFrcG9pbnRTZXR0aW5nc1t0YXJnZXRCcmVha3BvaW50XSA9PT0gJ3Vuc2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8udW5zbGljayh0YXJnZXRCcmVha3BvaW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgXy5vcmlnaW5hbFNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50U2V0dGluZ3NbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0QnJlYWtwb2ludF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdGlhbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBfLm9wdGlvbnMuaW5pdGlhbFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucmVmcmVzaChpbml0aWFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckJyZWFrcG9pbnQgPSB0YXJnZXRCcmVha3BvaW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKF8uYWN0aXZlQnJlYWtwb2ludCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYWN0aXZlQnJlYWtwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zID0gXy5vcmlnaW5hbFNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbml0aWFsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gXy5vcHRpb25zLmluaXRpYWxTbGlkZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXy5yZWZyZXNoKGluaXRpYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJCcmVha3BvaW50ID0gdGFyZ2V0QnJlYWtwb2ludDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gb25seSB0cmlnZ2VyIGJyZWFrcG9pbnRzIGR1cmluZyBhbiBhY3R1YWwgYnJlYWsuIG5vdCBvbiBpbml0aWFsaXplLlxyXG4gICAgICAgICAgICBpZiggIWluaXRpYWwgJiYgdHJpZ2dlckJyZWFrcG9pbnQgIT09IGZhbHNlICkge1xyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2JyZWFrcG9pbnQnLCBbXywgdHJpZ2dlckJyZWFrcG9pbnRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGFuZ2VTbGlkZSA9IGZ1bmN0aW9uKGV2ZW50LCBkb250QW5pbWF0ZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLFxyXG4gICAgICAgICAgICBpbmRleE9mZnNldCwgc2xpZGVPZmZzZXQsIHVuZXZlbk9mZnNldDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGFyZ2V0IGlzIGEgbGluaywgcHJldmVudCBkZWZhdWx0IGFjdGlvbi5cclxuICAgICAgICBpZigkdGFyZ2V0LmlzKCdhJykpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIHRhcmdldCBpcyBub3QgdGhlIDxsaT4gZWxlbWVudCAoaWU6IGEgY2hpbGQpLCBmaW5kIHRoZSA8bGk+LlxyXG4gICAgICAgIGlmKCEkdGFyZ2V0LmlzKCdsaScpKSB7XHJcbiAgICAgICAgICAgICR0YXJnZXQgPSAkdGFyZ2V0LmNsb3Nlc3QoJ2xpJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bmV2ZW5PZmZzZXQgPSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKTtcclxuICAgICAgICBpbmRleE9mZnNldCA9IHVuZXZlbk9mZnNldCA/IDAgOiAoXy5zbGlkZUNvdW50IC0gXy5jdXJyZW50U2xpZGUpICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmRhdGEubWVzc2FnZSkge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAncHJldmlvdXMnOlxyXG4gICAgICAgICAgICAgICAgc2xpZGVPZmZzZXQgPSBpbmRleE9mZnNldCA9PT0gMCA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSBpbmRleE9mZnNldDtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoXy5jdXJyZW50U2xpZGUgLSBzbGlkZU9mZnNldCwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbmV4dCc6XHJcbiAgICAgICAgICAgICAgICBzbGlkZU9mZnNldCA9IGluZGV4T2Zmc2V0ID09PSAwID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogaW5kZXhPZmZzZXQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIF8uc2xpZGVIYW5kbGVyKF8uY3VycmVudFNsaWRlICsgc2xpZGVPZmZzZXQsIGZhbHNlLCBkb250QW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2luZGV4JzpcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmRhdGEuaW5kZXggPT09IDAgPyAwIDpcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5kYXRhLmluZGV4IHx8ICR0YXJnZXQuaW5kZXgoKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuXHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlSGFuZGxlcihfLmNoZWNrTmF2aWdhYmxlKGluZGV4KSwgZmFsc2UsIGRvbnRBbmltYXRlKTtcclxuICAgICAgICAgICAgICAgICR0YXJnZXQuY2hpbGRyZW4oKS50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5jaGVja05hdmlnYWJsZSA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgbmF2aWdhYmxlcywgcHJldk5hdmlnYWJsZTtcclxuXHJcbiAgICAgICAgbmF2aWdhYmxlcyA9IF8uZ2V0TmF2aWdhYmxlSW5kZXhlcygpO1xyXG4gICAgICAgIHByZXZOYXZpZ2FibGUgPSAwO1xyXG4gICAgICAgIGlmIChpbmRleCA+IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IG5hdmlnYWJsZXNbbmF2aWdhYmxlcy5sZW5ndGggLSAxXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBuIGluIG5hdmlnYWJsZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA8IG5hdmlnYWJsZXNbbl0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHByZXZOYXZpZ2FibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcmV2TmF2aWdhYmxlID0gbmF2aWdhYmxlc1tuXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyAmJiBfLiRkb3RzICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdtb3VzZWxlYXZlLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgZmFsc2UpKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kZG90cy5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIub2ZmKCdmb2N1cy5zbGljayBibHVyLnNsaWNrJyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93ICYmIF8uJHByZXZBcnJvdy5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jaGFuZ2VTbGlkZSk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdyAmJiBfLiRuZXh0QXJyb3cub2ZmKCdjbGljay5zbGljaycsIF8uY2hhbmdlU2xpZGUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5hY2Nlc3NpYmlsaXR5ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cgJiYgXy4kcHJldkFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cgJiYgXy4kbmV4dEFycm93Lm9mZigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub2ZmKCd0b3VjaHN0YXJ0LnNsaWNrIG1vdXNlZG93bi5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2htb3ZlLnNsaWNrIG1vdXNlbW92ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hlbmQuc2xpY2sgbW91c2V1cC5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9mZigndG91Y2hjYW5jZWwuc2xpY2sgbW91c2VsZWF2ZS5zbGljaycsIF8uc3dpcGVIYW5kbGVyKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vZmYoXy52aXNpYmlsaXR5Q2hhbmdlLCBfLnZpc2liaWxpdHkpO1xyXG5cclxuICAgICAgICBfLmNsZWFuVXBTbGlkZUV2ZW50cygpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy4kbGlzdC5vZmYoJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uU2VsZWN0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICQoXy4kc2xpZGVUcmFjaykuY2hpbGRyZW4oKS5vZmYoJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5vZmYoJ29yaWVudGF0aW9uY2hhbmdlLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLm9yaWVudGF0aW9uQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncmVzaXplLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnJlc2l6ZSk7XHJcblxyXG4gICAgICAgICQoJ1tkcmFnZ2FibGUhPXRydWVdJywgXy4kc2xpZGVUcmFjaykub2ZmKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9mZignbG9hZC5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgXy5zZXRQb3NpdGlvbik7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuY2xlYW5VcFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlZW50ZXIuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCB0cnVlKSk7XHJcbiAgICAgICAgXy4kbGlzdC5vZmYoJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsZWFuVXBSb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcywgb3JpZ2luYWxTbGlkZXM7XHJcblxyXG4gICAgICAgIGlmKF8ub3B0aW9ucy5yb3dzID4gMSkge1xyXG4gICAgICAgICAgICBvcmlnaW5hbFNsaWRlcyA9IF8uJHNsaWRlcy5jaGlsZHJlbigpLmNoaWxkcmVuKCk7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsU2xpZGVzLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci5lbXB0eSgpLmFwcGVuZChvcmlnaW5hbFNsaWRlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uc2hvdWxkQ2xpY2sgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKHJlZnJlc2gpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdCA9IHt9O1xyXG5cclxuICAgICAgICBfLmNsZWFuVXBFdmVudHMoKTtcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XHJcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8uJHByZXZBcnJvdyAmJiBfLiRwcmV2QXJyb3cubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkIHNsaWNrLWFycm93IHNsaWNrLWhpZGRlbicpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4gYXJpYS1kaXNhYmxlZCB0YWJpbmRleCcpXHJcbiAgICAgICAgICAgICAgICAuY3NzKCdkaXNwbGF5JywnJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8uaHRtbEV4cHIudGVzdCggXy5vcHRpb25zLnByZXZBcnJvdyApKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy4kbmV4dEFycm93ICYmIF8uJG5leHRBcnJvdy5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQgc2xpY2stYXJyb3cgc2xpY2staGlkZGVuJylcclxuICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdhcmlhLWhpZGRlbiBhcmlhLWRpc2FibGVkIHRhYmluZGV4JylcclxuICAgICAgICAgICAgICAgIC5jc3MoJ2Rpc3BsYXknLCcnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICggXy5odG1sRXhwci50ZXN0KCBfLm9wdGlvbnMubmV4dEFycm93ICkpIHtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmIChfLiRzbGlkZXMpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlc1xyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stY2VudGVyIHNsaWNrLXZpc2libGUgc2xpY2stY3VycmVudCcpXHJcbiAgICAgICAgICAgICAgICAucmVtb3ZlQXR0cignYXJpYS1oaWRkZW4nKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKVxyXG4gICAgICAgICAgICAgICAgLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3N0eWxlJywgJCh0aGlzKS5kYXRhKCdvcmlnaW5hbFN0eWxpbmcnKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKS5kZXRhY2goKTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRsaXN0LmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLmFwcGVuZChfLiRzbGlkZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5jbGVhblVwUm93cygpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLXNsaWRlcicpO1xyXG4gICAgICAgIF8uJHNsaWRlci5yZW1vdmVDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKTtcclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRvdHRlZCcpO1xyXG5cclxuICAgICAgICBfLnVuc2xpY2tlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmKCFyZWZyZXNoKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdkZXN0cm95JywgW19dKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZGlzYWJsZVRyYW5zaXRpb24gPSBmdW5jdGlvbihzbGlkZSkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gPSB7fTtcclxuXHJcbiAgICAgICAgdHJhbnNpdGlvbltfLnRyYW5zaXRpb25UeXBlXSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZSkuY3NzKHRyYW5zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mYWRlU2xpZGUgPSBmdW5jdGlvbihzbGlkZUluZGV4LCBjYWxsYmFjaykge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzLmVxKHNsaWRlSW5kZXgpLmNzcyh7XHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuYW5pbWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxXHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZywgY2FsbGJhY2spO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy5hcHBseVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXMuZXEoc2xpZGVJbmRleCkuY3NzKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXhcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF8uZGlzYWJsZVRyYW5zaXRpb24oc2xpZGVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwoKTtcclxuICAgICAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmZhZGVTbGlkZU91dCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoXy5jc3NUcmFuc2l0aW9ucyA9PT0gZmFsc2UpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyXHJcbiAgICAgICAgICAgIH0sIF8ub3B0aW9ucy5zcGVlZCwgXy5vcHRpb25zLmVhc2luZyk7XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBfLmFwcGx5VHJhbnNpdGlvbihzbGlkZUluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShzbGlkZUluZGV4KS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIHpJbmRleDogXy5vcHRpb25zLnpJbmRleCAtIDJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5maWx0ZXJTbGlkZXMgPSBTbGljay5wcm90b3R5cGUuc2xpY2tGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXIpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgICAgIF8udW5sb2FkKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5zbGlkZSkuZGV0YWNoKCk7XHJcblxyXG4gICAgICAgICAgICBfLiRzbGlkZXNDYWNoZS5maWx0ZXIoZmlsdGVyKS5hcHBlbmRUbyhfLiRzbGlkZVRyYWNrKTtcclxuXHJcbiAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5mb2N1c0hhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLm9mZignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycpXHJcbiAgICAgICAgICAgIC5vbignZm9jdXMuc2xpY2sgYmx1ci5zbGljaycsICcqJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHZhciAkc2YgPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMucGF1c2VPbkZvY3VzICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLmZvY3Vzc2VkID0gJHNmLmlzKCc6Zm9jdXMnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5hdXRvUGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0Q3VycmVudCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0N1cnJlbnRTbGlkZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcbiAgICAgICAgcmV0dXJuIF8uY3VycmVudFNsaWRlO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldERvdENvdW50ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgdmFyIGJyZWFrUG9pbnQgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuICAgICAgICB2YXIgcGFnZXJRdHkgPSAwO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChicmVha1BvaW50IDwgXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgICAgICAgICBicmVha1BvaW50ID0gY291bnRlciArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcGFnZXJRdHkgPSBfLnNsaWRlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIGlmKCFfLm9wdGlvbnMuYXNOYXZGb3IpIHtcclxuICAgICAgICAgICAgcGFnZXJRdHkgPSAxICsgTWF0aC5jZWlsKChfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAvIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IF8uc2xpZGVDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgKytwYWdlclF0eTtcclxuICAgICAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICAgICAgY291bnRlciArPSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA/IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA6IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwYWdlclF0eSAtIDE7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0TGVmdCA9IGZ1bmN0aW9uKHNsaWRlSW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICB2ZXJ0aWNhbEhlaWdodCxcclxuICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAwLFxyXG4gICAgICAgICAgICB0YXJnZXRTbGlkZSxcclxuICAgICAgICAgICAgY29lZjtcclxuXHJcbiAgICAgICAgXy5zbGlkZU9mZnNldCA9IDA7XHJcbiAgICAgICAgdmVydGljYWxIZWlnaHQgPSBfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9IChfLnNsaWRlV2lkdGggKiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgY29lZiA9IC0xXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZWYgPSAtMS41O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2VmID0gLTJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9ICh2ZXJ0aWNhbEhlaWdodCAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpICogY29lZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVJbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA+IF8uc2xpZGVDb3VudCAmJiBfLnNsaWRlQ291bnQgPiBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAtIChzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KSkgKiBfLnNsaWRlV2lkdGgpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC0gKHNsaWRlSW5kZXggLSBfLnNsaWRlQ291bnQpKSAqIHZlcnRpY2FsSGVpZ2h0KSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAoKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkgKiBfLnNsaWRlV2lkdGgpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsT2Zmc2V0ID0gKChfLnNsaWRlQ291bnQgJSBfLm9wdGlvbnMuc2xpZGVzVG9TY3JvbGwpICogdmVydGljYWxIZWlnaHQpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID4gXy5zbGlkZUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gKChzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykgLSBfLnNsaWRlQ291bnQpICogXy5zbGlkZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWxPZmZzZXQgPSAoKHNsaWRlSW5kZXggKyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSAtIF8uc2xpZGVDb3VudCkgKiB2ZXJ0aWNhbEhlaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgPSAwO1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbE9mZnNldCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCA9ICgoXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSkgLyAyKSAtICgoXy5zbGlkZVdpZHRoICogXy5zbGlkZUNvdW50KSAvIDIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUgJiYgXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVPZmZzZXQgKz0gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgLSBfLnNsaWRlV2lkdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlT2Zmc2V0ID0gMDtcclxuICAgICAgICAgICAgXy5zbGlkZU9mZnNldCArPSBfLnNsaWRlV2lkdGggKiBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldExlZnQgPSAoKHNsaWRlSW5kZXggKiBfLnNsaWRlV2lkdGgpICogLTEpICsgXy5zbGlkZU9mZnNldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKChzbGlkZUluZGV4ICogdmVydGljYWxIZWlnaHQpICogLTEpICsgdmVydGljYWxPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnZhcmlhYmxlV2lkdGggPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmVxKHNsaWRlSW5kZXgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0U2xpZGVbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gKF8uJHNsaWRlVHJhY2sud2lkdGgoKSAtIHRhcmdldFNsaWRlWzBdLm9mZnNldExlZnQgLSB0YXJnZXRTbGlkZS53aWR0aCgpKSAqIC0xO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ID0gdGFyZ2V0U2xpZGVbMF0gPyB0YXJnZXRTbGlkZVswXS5vZmZzZXRMZWZ0ICogLTEgOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyB8fCBfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0U2xpZGUgPSBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5lcShzbGlkZUluZGV4ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMucnRsID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFNsaWRlWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExlZnQgPSAoXy4kc2xpZGVUcmFjay53aWR0aCgpIC0gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAtIHRhcmdldFNsaWRlLndpZHRoKCkpICogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9ICAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IHRhcmdldFNsaWRlWzBdID8gdGFyZ2V0U2xpZGVbMF0ub2Zmc2V0TGVmdCAqIC0xIDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRMZWZ0ICs9IChfLiRsaXN0LndpZHRoKCkgLSB0YXJnZXRTbGlkZS5vdXRlcldpZHRoKCkpIC8gMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldExlZnQ7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ2V0T3B0aW9uID0gU2xpY2sucHJvdG90eXBlLnNsaWNrR2V0T3B0aW9uID0gZnVuY3Rpb24ob3B0aW9uKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIF8ub3B0aW9uc1tvcHRpb25dO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldE5hdmlnYWJsZUluZGV4ZXMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBicmVha1BvaW50ID0gMCxcclxuICAgICAgICAgICAgY291bnRlciA9IDAsXHJcbiAgICAgICAgICAgIGluZGV4ZXMgPSBbXSxcclxuICAgICAgICAgICAgbWF4O1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBtYXggPSBfLnNsaWRlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnJlYWtQb2ludCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAqIC0xO1xyXG4gICAgICAgICAgICBjb3VudGVyID0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICogLTE7XHJcbiAgICAgICAgICAgIG1heCA9IF8uc2xpZGVDb3VudCAqIDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aGlsZSAoYnJlYWtQb2ludCA8IG1heCkge1xyXG4gICAgICAgICAgICBpbmRleGVzLnB1c2goYnJlYWtQb2ludCk7XHJcbiAgICAgICAgICAgIGJyZWFrUG9pbnQgPSBjb3VudGVyICsgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgICAgICBjb3VudGVyICs9IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsIDogXy5vcHRpb25zLnNsaWRlc1RvU2hvdztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbmRleGVzO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWNrID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmdldFNsaWRlQ291bnQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBzbGlkZXNUcmF2ZXJzZWQsIHN3aXBlZFNsaWRlLCBjZW50ZXJPZmZzZXQ7XHJcblxyXG4gICAgICAgIGNlbnRlck9mZnNldCA9IF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlID8gXy5zbGlkZVdpZHRoICogTWF0aC5mbG9vcihfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMikgOiAwO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmZpbmQoJy5zbGljay1zbGlkZScpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHNsaWRlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGUub2Zmc2V0TGVmdCAtIGNlbnRlck9mZnNldCArICgkKHNsaWRlKS5vdXRlcldpZHRoKCkgLyAyKSA+IChfLnN3aXBlTGVmdCAqIC0xKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXBlZFNsaWRlID0gc2xpZGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNsaWRlc1RyYXZlcnNlZCA9IE1hdGguYWJzKCQoc3dpcGVkU2xpZGUpLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnKSAtIF8uY3VycmVudFNsaWRlKSB8fCAxO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNsaWRlc1RyYXZlcnNlZDtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuZ29UbyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja0dvVG8gPSBmdW5jdGlvbihzbGlkZSwgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBwYXJzZUludChzbGlkZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIGRvbnRBbmltYXRlKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oY3JlYXRpb24pIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoISQoXy4kc2xpZGVyKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xyXG5cclxuICAgICAgICAgICAgJChfLiRzbGlkZXIpLmFkZENsYXNzKCdzbGljay1pbml0aWFsaXplZCcpO1xyXG5cclxuICAgICAgICAgICAgXy5idWlsZFJvd3MoKTtcclxuICAgICAgICAgICAgXy5idWlsZE91dCgpO1xyXG4gICAgICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgICAgIF8uc3RhcnRMb2FkKCk7XHJcbiAgICAgICAgICAgIF8ubG9hZFNsaWRlcigpO1xyXG4gICAgICAgICAgICBfLmluaXRpYWxpemVFdmVudHMoKTtcclxuICAgICAgICAgICAgXy51cGRhdGVBcnJvd3MoKTtcclxuICAgICAgICAgICAgXy51cGRhdGVEb3RzKCk7XHJcbiAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKHRydWUpO1xyXG4gICAgICAgICAgICBfLmZvY3VzSGFuZGxlcigpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjcmVhdGlvbikge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignaW5pdCcsIFtfXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuXHJcbiAgICAgICAgICAgIF8ucGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBREEgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIG51bURvdEdyb3VwcyA9IE1hdGguY2VpbChfLnNsaWRlQ291bnQgLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSxcclxuICAgICAgICAgICAgdGFiQ29udHJvbEluZGV4ZXMgPSBfLmdldE5hdmlnYWJsZUluZGV4ZXMoKS5maWx0ZXIoZnVuY3Rpb24odmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHZhbCA+PSAwKSAmJiAodmFsIDwgXy5zbGlkZUNvdW50KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5hZGQoXy4kc2xpZGVUcmFjay5maW5kKCcuc2xpY2stY2xvbmVkJykpLmF0dHIoe1xyXG4gICAgICAgICAgICAnYXJpYS1oaWRkZW4nOiAndHJ1ZScsXHJcbiAgICAgICAgICAgICd0YWJpbmRleCc6ICctMSdcclxuICAgICAgICB9KS5maW5kKCdhLCBpbnB1dCwgYnV0dG9uLCBzZWxlY3QnKS5hdHRyKHtcclxuICAgICAgICAgICAgJ3RhYmluZGV4JzogJy0xJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoXy4kZG90cyAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXMubm90KF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpKS5lYWNoKGZ1bmN0aW9uKGkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBzbGlkZUNvbnRyb2xJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzLmluZGV4T2YoaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAncm9sZSc6ICd0YWJwYW5lbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlJyArIF8uaW5zdGFuY2VVaWQgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgICd0YWJpbmRleCc6IC0xXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVDb250cm9sSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2FyaWEtZGVzY3JpYmVkYnknOiAnc2xpY2stc2xpZGUtY29udHJvbCcgKyBfLmluc3RhbmNlVWlkICsgc2xpZGVDb250cm9sSW5kZXhcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzLmF0dHIoJ3JvbGUnLCAndGFibGlzdCcpLmZpbmQoJ2xpJykuZWFjaChmdW5jdGlvbihpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgbWFwcGVkU2xpZGVJbmRleCA9IHRhYkNvbnRyb2xJbmRleGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cih7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3JvbGUnOiAncHJlc2VudGF0aW9uJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdidXR0b24nKS5maXJzdCgpLmF0dHIoe1xyXG4gICAgICAgICAgICAgICAgICAgICdyb2xlJzogJ3RhYicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ3NsaWNrLXNsaWRlLWNvbnRyb2wnICsgXy5pbnN0YW5jZVVpZCArIGksXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtY29udHJvbHMnOiAnc2xpY2stc2xpZGUnICsgXy5pbnN0YW5jZVVpZCArIG1hcHBlZFNsaWRlSW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FyaWEtbGFiZWwnOiAoaSArIDEpICsgJyBvZiAnICsgbnVtRG90R3JvdXBzLFxyXG4gICAgICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAndGFiaW5kZXgnOiAnLTEnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH0pLmVxKF8uY3VycmVudFNsaWRlKS5maW5kKCdidXR0b24nKS5hdHRyKHtcclxuICAgICAgICAgICAgICAgICdhcmlhLXNlbGVjdGVkJzogJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgJ3RhYmluZGV4JzogJzAnXHJcbiAgICAgICAgICAgIH0pLmVuZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaT1fLmN1cnJlbnRTbGlkZSwgbWF4PWkrXy5vcHRpb25zLnNsaWRlc1RvU2hvdzsgaSA8IG1heDsgaSsrKSB7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlcy5lcShpKS5hdHRyKCd0YWJpbmRleCcsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5hY3RpdmF0ZUFEQSgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRBcnJvd0V2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgXy4kcHJldkFycm93XHJcbiAgICAgICAgICAgICAgICAub2ZmKCdjbGljay5zbGljaycpXHJcbiAgICAgICAgICAgICAgICAub24oJ2NsaWNrLnNsaWNrJywge1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdwcmV2aW91cydcclxuICAgICAgICAgICAgICAgIH0sIF8uY2hhbmdlU2xpZGUpO1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3dcclxuICAgICAgICAgICAgICAgIC5vZmYoJ2NsaWNrLnNsaWNrJylcclxuICAgICAgICAgICAgICAgIC5vbignY2xpY2suc2xpY2snLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXHJcbiAgICAgICAgICAgICAgICB9LCBfLmNoYW5nZVNsaWRlKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy4kcHJldkFycm93Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5vbigna2V5ZG93bi5zbGljaycsIF8ua2V5SGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdERvdEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZG90cyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKCdsaScsIF8uJGRvdHMpLm9uKCdjbGljay5zbGljaycsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdpbmRleCdcclxuICAgICAgICAgICAgfSwgXy5jaGFuZ2VTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGRvdHMub24oJ2tleWRvd24uc2xpY2snLCBfLmtleUhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8ub3B0aW9ucy5wYXVzZU9uRG90c0hvdmVyID09PSB0cnVlICkge1xyXG5cclxuICAgICAgICAgICAgJCgnbGknLCBfLiRkb3RzKVxyXG4gICAgICAgICAgICAgICAgLm9uKCdtb3VzZWVudGVyLnNsaWNrJywgJC5wcm94eShfLmludGVycnVwdCwgXywgdHJ1ZSkpXHJcbiAgICAgICAgICAgICAgICAub24oJ21vdXNlbGVhdmUuc2xpY2snLCAkLnByb3h5KF8uaW50ZXJydXB0LCBfLCBmYWxzZSkpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuaW5pdFNsaWRlRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMucGF1c2VPbkhvdmVyICkge1xyXG5cclxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VlbnRlci5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIHRydWUpKTtcclxuICAgICAgICAgICAgXy4kbGlzdC5vbignbW91c2VsZWF2ZS5zbGljaycsICQucHJveHkoXy5pbnRlcnJ1cHQsIF8sIGZhbHNlKSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5pbml0aWFsaXplRXZlbnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5pbml0RG90RXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy4kbGlzdC5vbigndG91Y2hzdGFydC5zbGljayBtb3VzZWRvd24uc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ3N0YXJ0J1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaG1vdmUuc2xpY2sgbW91c2Vtb3ZlLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdtb3ZlJ1xyXG4gICAgICAgIH0sIF8uc3dpcGVIYW5kbGVyKTtcclxuICAgICAgICBfLiRsaXN0Lm9uKCd0b3VjaGVuZC5zbGljayBtb3VzZXVwLnNsaWNrJywge1xyXG4gICAgICAgICAgICBhY3Rpb246ICdlbmQnXHJcbiAgICAgICAgfSwgXy5zd2lwZUhhbmRsZXIpO1xyXG4gICAgICAgIF8uJGxpc3Qub24oJ3RvdWNoY2FuY2VsLnNsaWNrIG1vdXNlbGVhdmUuc2xpY2snLCB7XHJcbiAgICAgICAgICAgIGFjdGlvbjogJ2VuZCdcclxuICAgICAgICB9LCBfLnN3aXBlSGFuZGxlcik7XHJcblxyXG4gICAgICAgIF8uJGxpc3Qub24oJ2NsaWNrLnNsaWNrJywgXy5jbGlja0hhbmRsZXIpO1xyXG5cclxuICAgICAgICAkKGRvY3VtZW50KS5vbihfLnZpc2liaWxpdHlDaGFuZ2UsICQucHJveHkoXy52aXNpYmlsaXR5LCBfKSk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRsaXN0Lm9uKCdrZXlkb3duLnNsaWNrJywgXy5rZXlIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZm9jdXNPblNlbGVjdCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAkKF8uJHNsaWRlVHJhY2spLmNoaWxkcmVuKCkub24oJ2NsaWNrLnNsaWNrJywgXy5zZWxlY3RIYW5kbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQod2luZG93KS5vbignb3JpZW50YXRpb25jaGFuZ2Uuc2xpY2suc2xpY2stJyArIF8uaW5zdGFuY2VVaWQsICQucHJveHkoXy5vcmllbnRhdGlvbkNoYW5nZSwgXykpO1xyXG5cclxuICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5zbGljay5zbGljay0nICsgXy5pbnN0YW5jZVVpZCwgJC5wcm94eShfLnJlc2l6ZSwgXykpO1xyXG5cclxuICAgICAgICAkKCdbZHJhZ2dhYmxlIT10cnVlXScsIF8uJHNsaWRlVHJhY2spLm9uKCdkcmFnc3RhcnQnLCBfLnByZXZlbnREZWZhdWx0KTtcclxuXHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdsb2FkLnNsaWNrLnNsaWNrLScgKyBfLmluc3RhbmNlVWlkLCBfLnNldFBvc2l0aW9uKTtcclxuICAgICAgICAkKF8uc2V0UG9zaXRpb24pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmluaXRVSSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5zaG93KCk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5zaG93KCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5kb3RzID09PSB0cnVlICYmIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgIF8uJGRvdHMuc2hvdygpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUua2V5SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuICAgICAgICAvL0RvbnQgc2xpZGUgaWYgdGhlIGN1cnNvciBpcyBpbnNpZGUgdGhlIGZvcm0gZmllbGRzIGFuZCBhcnJvdyBrZXlzIGFyZSBwcmVzc2VkXHJcbiAgICAgICAgaWYoIWV2ZW50LnRhcmdldC50YWdOYW1lLm1hdGNoKCdURVhUQVJFQXxJTlBVVHxTRUxFQ1QnKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzcgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICduZXh0JyA6ICAncHJldmlvdXMnXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgJiYgXy5vcHRpb25zLmFjY2Vzc2liaWxpdHkgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY2hhbmdlU2xpZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXy5vcHRpb25zLnJ0bCA9PT0gdHJ1ZSA/ICdwcmV2aW91cycgOiAnbmV4dCdcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5sYXp5TG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGxvYWRSYW5nZSwgY2xvbmVSYW5nZSwgcmFuZ2VTdGFydCwgcmFuZ2VFbmQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGxvYWRJbWFnZXMoaW1hZ2VzU2NvcGUpIHtcclxuXHJcbiAgICAgICAgICAgICQoJ2ltZ1tkYXRhLWxhenldJywgaW1hZ2VzU2NvcGUpLmVhY2goZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGltYWdlID0gJCh0aGlzKSxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZVNvdXJjZSA9ICQodGhpcykuYXR0cignZGF0YS1sYXp5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmNTZXQgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc3Jjc2V0JyksXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtc2l6ZXMnKSB8fCBfLiRzbGlkZXIuYXR0cignZGF0YS1zaXplcycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1hZ2VUb0xvYWQub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbmltYXRlKHsgb3BhY2l0eTogMCB9LCAxMDAsIGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmMnLCBpbWFnZVNvdXJjZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSh7IG9wYWNpdHk6IDEgfSwgMjAwLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgW18sIGltYWdlLCBpbWFnZVNvdXJjZV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHJhbmdlU3RhcnQgPSBfLmN1cnJlbnRTbGlkZSArIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93IC8gMiArIDEpO1xyXG4gICAgICAgICAgICAgICAgcmFuZ2VFbmQgPSByYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyArIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByYW5nZVN0YXJ0ID0gTWF0aC5tYXgoMCwgXy5jdXJyZW50U2xpZGUgLSAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICByYW5nZUVuZCA9IDIgKyAoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIgKyAxKSArIF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmFuZ2VTdGFydCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBfLmN1cnJlbnRTbGlkZSA6IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICByYW5nZUVuZCA9IE1hdGguY2VpbChyYW5nZVN0YXJ0ICsgXy5vcHRpb25zLnNsaWRlc1RvU2hvdyk7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJhbmdlU3RhcnQgPiAwKSByYW5nZVN0YXJ0LS07XHJcbiAgICAgICAgICAgICAgICBpZiAocmFuZ2VFbmQgPD0gXy5zbGlkZUNvdW50KSByYW5nZUVuZCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsb2FkUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlJykuc2xpY2UocmFuZ2VTdGFydCwgcmFuZ2VFbmQpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIHZhciBwcmV2U2xpZGUgPSByYW5nZVN0YXJ0IC0gMSxcclxuICAgICAgICAgICAgICAgIG5leHRTbGlkZSA9IHJhbmdlRW5kLFxyXG4gICAgICAgICAgICAgICAgJHNsaWRlcyA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcmV2U2xpZGUgPCAwKSBwcmV2U2xpZGUgPSBfLnNsaWRlQ291bnQgLSAxO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKHByZXZTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgbG9hZFJhbmdlID0gbG9hZFJhbmdlLmFkZCgkc2xpZGVzLmVxKG5leHRTbGlkZSkpO1xyXG4gICAgICAgICAgICAgICAgcHJldlNsaWRlLS07XHJcbiAgICAgICAgICAgICAgICBuZXh0U2xpZGUrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbG9hZEltYWdlcyhsb2FkUmFuZ2UpO1xyXG5cclxuICAgICAgICBpZiAoXy5zbGlkZUNvdW50IDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgY2xvbmVSYW5nZSA9IF8uJHNsaWRlci5maW5kKCcuc2xpY2stc2xpZGUnKTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2VcclxuICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPj0gXy5zbGlkZUNvdW50IC0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG4gICAgICAgICAgICBjbG9uZVJhbmdlID0gXy4kc2xpZGVyLmZpbmQoJy5zbGljay1jbG9uZWQnKS5zbGljZSgwLCBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgbG9hZEltYWdlcyhjbG9uZVJhbmdlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNsb25lUmFuZ2UgPSBfLiRzbGlkZXIuZmluZCgnLnNsaWNrLWNsb25lZCcpLnNsaWNlKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKiAtMSk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoY2xvbmVSYW5nZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmxvYWRTbGlkZXIgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLnNldFBvc2l0aW9uKCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXIucmVtb3ZlQ2xhc3MoJ3NsaWNrLWxvYWRpbmcnKTtcclxuXHJcbiAgICAgICAgXy5pbml0VUkoKTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5sYXp5TG9hZCA9PT0gJ3Byb2dyZXNzaXZlJykge1xyXG4gICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUubmV4dCA9IFNsaWNrLnByb3RvdHlwZS5zbGlja05leHQgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ25leHQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5vcmllbnRhdGlvbkNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnBhdXNlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUGF1c2UgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5Q2xlYXIoKTtcclxuICAgICAgICBfLnBhdXNlZCA9IHRydWU7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucGxheSA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1BsYXkgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgXy5vcHRpb25zLmF1dG9wbGF5ID0gdHJ1ZTtcclxuICAgICAgICBfLnBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIF8uZm9jdXNzZWQgPSBmYWxzZTtcclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucG9zdFNsaWRlID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggIV8udW5zbGlja2VkICkge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FmdGVyQ2hhbmdlJywgW18sIGluZGV4XSk7XHJcblxyXG4gICAgICAgICAgICBfLmFuaW1hdGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuICAgICAgICAgICAgICAgIF8uc2V0UG9zaXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcbiAgICAgICAgICAgICAgICBfLmF1dG9QbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuYWNjZXNzaWJpbGl0eSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgXy5pbml0QURBKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5mb2N1c09uQ2hhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyICRjdXJyZW50U2xpZGUgPSAkKF8uJHNsaWRlcy5nZXQoXy5jdXJyZW50U2xpZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAkY3VycmVudFNsaWRlLmF0dHIoJ3RhYmluZGV4JywgMCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldiA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1ByZXYgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICBfLmNoYW5nZVNsaWRlKHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ3ByZXZpb3VzJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnByb2dyZXNzaXZlTGF6eUxvYWQgPSBmdW5jdGlvbiggdHJ5Q291bnQgKSB7XHJcblxyXG4gICAgICAgIHRyeUNvdW50ID0gdHJ5Q291bnQgfHwgMTtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICAkaW1nc1RvTG9hZCA9ICQoICdpbWdbZGF0YS1sYXp5XScsIF8uJHNsaWRlciApLFxyXG4gICAgICAgICAgICBpbWFnZSxcclxuICAgICAgICAgICAgaW1hZ2VTb3VyY2UsXHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0LFxyXG4gICAgICAgICAgICBpbWFnZVNpemVzLFxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZDtcclxuXHJcbiAgICAgICAgaWYgKCAkaW1nc1RvTG9hZC5sZW5ndGggKSB7XHJcblxyXG4gICAgICAgICAgICBpbWFnZSA9ICRpbWdzVG9Mb2FkLmZpcnN0KCk7XHJcbiAgICAgICAgICAgIGltYWdlU291cmNlID0gaW1hZ2UuYXR0cignZGF0YS1sYXp5Jyk7XHJcbiAgICAgICAgICAgIGltYWdlU3JjU2V0ID0gaW1hZ2UuYXR0cignZGF0YS1zcmNzZXQnKTtcclxuICAgICAgICAgICAgaW1hZ2VTaXplcyAgPSBpbWFnZS5hdHRyKCdkYXRhLXNpemVzJykgfHwgXy4kc2xpZGVyLmF0dHIoJ2RhdGEtc2l6ZXMnKTtcclxuICAgICAgICAgICAgaW1hZ2VUb0xvYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbWFnZVNyY1NldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzcmNzZXQnLCBpbWFnZVNyY1NldCApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VTaXplcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3NpemVzJywgaW1hZ2VTaXplcyApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCAnc3JjJywgaW1hZ2VTb3VyY2UgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZW1vdmVBdHRyKCdkYXRhLWxhenkgZGF0YS1zcmNzZXQgZGF0YS1zaXplcycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCBfLm9wdGlvbnMuYWRhcHRpdmVIZWlnaHQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdsYXp5TG9hZGVkJywgWyBfLCBpbWFnZSwgaW1hZ2VTb3VyY2UgXSk7XHJcbiAgICAgICAgICAgICAgICBfLnByb2dyZXNzaXZlTGF6eUxvYWQoKTtcclxuXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpbWFnZVRvTG9hZC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0cnlDb3VudCA8IDMgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgICAgICAgICAqIHRyeSB0byBsb2FkIHRoZSBpbWFnZSAzIHRpbWVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAqIGxlYXZlIGEgc2xpZ2h0IGRlbGF5IHNvIHdlIGRvbid0IGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAqIHNlcnZlcnMgYmxvY2tpbmcgdGhlIHJlcXVlc3QuXHJcbiAgICAgICAgICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ucHJvZ3Jlc3NpdmVMYXp5TG9hZCggdHJ5Q291bnQgKyAxICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwICk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUF0dHIoICdkYXRhLWxhenknIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCAnc2xpY2stbG9hZGluZycgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoICdzbGljay1sYXp5bG9hZC1lcnJvcicgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2xhenlMb2FkRXJyb3InLCBbIF8sIGltYWdlLCBpbWFnZVNvdXJjZSBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5wcm9ncmVzc2l2ZUxhenlMb2FkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGltYWdlVG9Mb2FkLnNyYyA9IGltYWdlU291cmNlO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVyLnRyaWdnZXIoJ2FsbEltYWdlc0xvYWRlZCcsIFsgXyBdKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZnJlc2ggPSBmdW5jdGlvbiggaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsIGN1cnJlbnRTbGlkZSwgbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgICAgbGFzdFZpc2libGVJbmRleCA9IF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcblxyXG4gICAgICAgIC8vIGluIG5vbi1pbmZpbml0ZSBzbGlkZXJzLCB3ZSBkb24ndCB3YW50IHRvIGdvIHBhc3QgdGhlXHJcbiAgICAgICAgLy8gbGFzdCB2aXNpYmxlIGluZGV4LlxyXG4gICAgICAgIGlmKCAhXy5vcHRpb25zLmluZmluaXRlICYmICggXy5jdXJyZW50U2xpZGUgPiBsYXN0VmlzaWJsZUluZGV4ICkpIHtcclxuICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgPSBsYXN0VmlzaWJsZUluZGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgbGVzcyBzbGlkZXMgdGhhbiB0byBzaG93LCBnbyB0byBzdGFydC5cclxuICAgICAgICBpZiAoIF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VycmVudFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcblxyXG4gICAgICAgIF8uZGVzdHJveSh0cnVlKTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoXywgXy5pbml0aWFscywgeyBjdXJyZW50U2xpZGU6IGN1cnJlbnRTbGlkZSB9KTtcclxuXHJcbiAgICAgICAgXy5pbml0KCk7XHJcblxyXG4gICAgICAgIGlmKCAhaW5pdGlhbGl6aW5nICkge1xyXG5cclxuICAgICAgICAgICAgXy5jaGFuZ2VTbGlkZSh7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudFNsaWRlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlZ2lzdGVyQnJlYWtwb2ludHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLCBicmVha3BvaW50LCBjdXJyZW50QnJlYWtwb2ludCwgbCxcclxuICAgICAgICAgICAgcmVzcG9uc2l2ZVNldHRpbmdzID0gXy5vcHRpb25zLnJlc3BvbnNpdmUgfHwgbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCAkLnR5cGUocmVzcG9uc2l2ZVNldHRpbmdzKSA9PT0gJ2FycmF5JyAmJiByZXNwb25zaXZlU2V0dGluZ3MubGVuZ3RoICkge1xyXG5cclxuICAgICAgICAgICAgXy5yZXNwb25kVG8gPSBfLm9wdGlvbnMucmVzcG9uZFRvIHx8ICd3aW5kb3cnO1xyXG5cclxuICAgICAgICAgICAgZm9yICggYnJlYWtwb2ludCBpbiByZXNwb25zaXZlU2V0dGluZ3MgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbCA9IF8uYnJlYWtwb2ludHMubGVuZ3RoLTE7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNpdmVTZXR0aW5ncy5oYXNPd25Qcm9wZXJ0eShicmVha3BvaW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRCcmVha3BvaW50ID0gcmVzcG9uc2l2ZVNldHRpbmdzW2JyZWFrcG9pbnRdLmJyZWFrcG9pbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYnJlYWtwb2ludHMgYW5kIGN1dCBvdXQgYW55IGV4aXN0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25lcyB3aXRoIHRoZSBzYW1lIGJyZWFrcG9pbnQgbnVtYmVyLCB3ZSBkb24ndCB3YW50IGR1cGVzLlxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlKCBsID49IDAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCBfLmJyZWFrcG9pbnRzW2xdICYmIF8uYnJlYWtwb2ludHNbbF0gPT09IGN1cnJlbnRCcmVha3BvaW50ICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5icmVha3BvaW50cy5zcGxpY2UobCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsLS07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnB1c2goY3VycmVudEJyZWFrcG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8uYnJlYWtwb2ludFNldHRpbmdzW2N1cnJlbnRCcmVha3BvaW50XSA9IHJlc3BvbnNpdmVTZXR0aW5nc1ticmVha3BvaW50XS5zZXR0aW5ncztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBfLmJyZWFrcG9pbnRzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICggXy5vcHRpb25zLm1vYmlsZUZpcnN0ICkgPyBhLWIgOiBiLWE7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUucmVpbml0ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzID1cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFja1xyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuKF8ub3B0aW9ucy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgXy5zbGlkZUNvdW50ID0gXy4kc2xpZGVzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAmJiBfLmN1cnJlbnRTbGlkZSAhPT0gMCkge1xyXG4gICAgICAgICAgICBfLmN1cnJlbnRTbGlkZSA9IF8uY3VycmVudFNsaWRlIC0gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8uY3VycmVudFNsaWRlID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8ucmVnaXN0ZXJCcmVha3BvaW50cygpO1xyXG5cclxuICAgICAgICBfLnNldFByb3BzKCk7XHJcbiAgICAgICAgXy5zZXR1cEluZmluaXRlKCk7XHJcbiAgICAgICAgXy5idWlsZEFycm93cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcbiAgICAgICAgXy5pbml0QXJyb3dFdmVudHMoKTtcclxuICAgICAgICBfLmJ1aWxkRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8uaW5pdERvdEV2ZW50cygpO1xyXG4gICAgICAgIF8uY2xlYW5VcFNsaWRlRXZlbnRzKCk7XHJcbiAgICAgICAgXy5pbml0U2xpZGVFdmVudHMoKTtcclxuXHJcbiAgICAgICAgXy5jaGVja1Jlc3BvbnNpdmUoZmFsc2UsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZvY3VzT25TZWxlY3QgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgJChfLiRzbGlkZVRyYWNrKS5jaGlsZHJlbigpLm9uKCdjbGljay5zbGljaycsIF8uc2VsZWN0SGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3Nlcyh0eXBlb2YgXy5jdXJyZW50U2xpZGUgPT09ICdudW1iZXInID8gXy5jdXJyZW50U2xpZGUgOiAwKTtcclxuXHJcbiAgICAgICAgXy5zZXRQb3NpdGlvbigpO1xyXG4gICAgICAgIF8uZm9jdXNIYW5kbGVyKCk7XHJcblxyXG4gICAgICAgIF8ucGF1c2VkID0gIV8ub3B0aW9ucy5hdXRvcGxheTtcclxuICAgICAgICBfLmF1dG9QbGF5KCk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdyZUluaXQnLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSAhPT0gXy53aW5kb3dXaWR0aCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoXy53aW5kb3dEZWxheSk7XHJcbiAgICAgICAgICAgIF8ud2luZG93RGVsYXkgPSB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIF8ud2luZG93V2lkdGggPSAkKHdpbmRvdykud2lkdGgoKTtcclxuICAgICAgICAgICAgICAgIF8uY2hlY2tSZXNwb25zaXZlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiggIV8udW5zbGlja2VkICkgeyBfLnNldFBvc2l0aW9uKCk7IH1cclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnJlbW92ZVNsaWRlID0gU2xpY2sucHJvdG90eXBlLnNsaWNrUmVtb3ZlID0gZnVuY3Rpb24oaW5kZXgsIHJlbW92ZUJlZm9yZSwgcmVtb3ZlQWxsKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZihpbmRleCkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICByZW1vdmVCZWZvcmUgPSBpbmRleDtcclxuICAgICAgICAgICAgaW5kZXggPSByZW1vdmVCZWZvcmUgPT09IHRydWUgPyAwIDogXy5zbGlkZUNvdW50IC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbmRleCA9IHJlbW92ZUJlZm9yZSA9PT0gdHJ1ZSA/IC0taW5kZXggOiBpbmRleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPCAxIHx8IGluZGV4IDwgMCB8fCBpbmRleCA+IF8uc2xpZGVDb3VudCAtIDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy51bmxvYWQoKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbW92ZUFsbCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCkucmVtb3ZlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmVxKGluZGV4KS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcyA9IF8uJHNsaWRlVHJhY2suY2hpbGRyZW4odGhpcy5vcHRpb25zLnNsaWRlKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZVRyYWNrLmFwcGVuZChfLiRzbGlkZXMpO1xyXG5cclxuICAgICAgICBfLiRzbGlkZXNDYWNoZSA9IF8uJHNsaWRlcztcclxuXHJcbiAgICAgICAgXy5yZWluaXQoKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRDU1MgPSBmdW5jdGlvbihwb3NpdGlvbikge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uUHJvcHMgPSB7fSxcclxuICAgICAgICAgICAgeCwgeTtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAtcG9zaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHggPSBfLnBvc2l0aW9uUHJvcCA9PSAnbGVmdCcgPyBNYXRoLmNlaWwocG9zaXRpb24pICsgJ3B4JyA6ICcwcHgnO1xyXG4gICAgICAgIHkgPSBfLnBvc2l0aW9uUHJvcCA9PSAndG9wJyA/IE1hdGguY2VpbChwb3NpdGlvbikgKyAncHgnIDogJzBweCc7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uUHJvcHNbXy5wb3NpdGlvblByb3BdID0gcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChfLnRyYW5zZm9ybXNFbmFibGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvblByb3BzID0ge307XHJcbiAgICAgICAgICAgIGlmIChfLmNzc1RyYW5zaXRpb25zID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUoJyArIHggKyAnLCAnICsgeSArICcpJztcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suY3NzKHBvc2l0aW9uUHJvcHMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25Qcm9wc1tfLmFuaW1UeXBlXSA9ICd0cmFuc2xhdGUzZCgnICsgeCArICcsICcgKyB5ICsgJywgMHB4KSc7XHJcbiAgICAgICAgICAgICAgICBfLiRzbGlkZVRyYWNrLmNzcyhwb3NpdGlvblByb3BzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXREaW1lbnNpb25zID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBfLiRsaXN0LmNzcyh7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogKCcwcHggJyArIF8ub3B0aW9ucy5jZW50ZXJQYWRkaW5nKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLiRsaXN0LmhlaWdodChfLiRzbGlkZXMuZmlyc3QoKS5vdXRlckhlaWdodCh0cnVlKSAqIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpO1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uJGxpc3QuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAoXy5vcHRpb25zLmNlbnRlclBhZGRpbmcgKyAnIDBweCcpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy5saXN0V2lkdGggPSBfLiRsaXN0LndpZHRoKCk7XHJcbiAgICAgICAgXy5saXN0SGVpZ2h0ID0gXy4kbGlzdC5oZWlnaHQoKTtcclxuXHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlICYmIF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLnNsaWRlV2lkdGggPSBNYXRoLmNlaWwoXy5saXN0V2lkdGggLyBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KTtcclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay53aWR0aChNYXRoLmNlaWwoKF8uc2xpZGVXaWR0aCAqIF8uJHNsaWRlVHJhY2suY2hpbGRyZW4oJy5zbGljay1zbGlkZScpLmxlbmd0aCkpKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMudmFyaWFibGVXaWR0aCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZVRyYWNrLndpZHRoKDUwMDAgKiBfLnNsaWRlQ291bnQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIF8uc2xpZGVXaWR0aCA9IE1hdGguY2VpbChfLmxpc3RXaWR0aCk7XHJcbiAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suaGVpZ2h0KE1hdGguY2VpbCgoXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJIZWlnaHQodHJ1ZSkgKiBfLiRzbGlkZVRyYWNrLmNoaWxkcmVuKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2Zmc2V0ID0gXy4kc2xpZGVzLmZpcnN0KCkub3V0ZXJXaWR0aCh0cnVlKSAtIF8uJHNsaWRlcy5maXJzdCgpLndpZHRoKCk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52YXJpYWJsZVdpZHRoID09PSBmYWxzZSkgXy4kc2xpZGVUcmFjay5jaGlsZHJlbignLnNsaWNrLXNsaWRlJykud2lkdGgoXy5zbGlkZVdpZHRoIC0gb2Zmc2V0KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRGYWRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdDtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzLmVhY2goZnVuY3Rpb24oaW5kZXgsIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0TGVmdCA9IChfLnNsaWRlV2lkdGggKiBpbmRleCkgKiAtMTtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5ydGwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogdGFyZ2V0TGVmdCxcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMixcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuY3NzKHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiB0YXJnZXRMZWZ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgICAgICAgICB6SW5kZXg6IF8ub3B0aW9ucy56SW5kZXggLSAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlcy5lcShfLmN1cnJlbnRTbGlkZSkuY3NzKHtcclxuICAgICAgICAgICAgekluZGV4OiBfLm9wdGlvbnMuekluZGV4IC0gMSxcclxuICAgICAgICAgICAgb3BhY2l0eTogMVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldEhlaWdodCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09PSAxICYmIF8ub3B0aW9ucy5hZGFwdGl2ZUhlaWdodCA9PT0gdHJ1ZSAmJiBfLm9wdGlvbnMudmVydGljYWwgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXRIZWlnaHQgPSBfLiRzbGlkZXMuZXEoXy5jdXJyZW50U2xpZGUpLm91dGVySGVpZ2h0KHRydWUpO1xyXG4gICAgICAgICAgICBfLiRsaXN0LmNzcygnaGVpZ2h0JywgdGFyZ2V0SGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc2V0T3B0aW9uID1cclxuICAgICAgICBTbGljay5wcm90b3R5cGUuc2xpY2tTZXRPcHRpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBhY2NlcHRzIGFyZ3VtZW50cyBpbiBmb3JtYXQgb2Y6XHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqICAtIGZvciBjaGFuZ2luZyBhIHNpbmdsZSBvcHRpb24ncyB2YWx1ZTpcclxuICAgICAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCBvcHRpb24sIHZhbHVlLCByZWZyZXNoIClcclxuICAgICAgICAgICAgICpcclxuICAgICAgICAgICAgICogIC0gZm9yIGNoYW5naW5nIGEgc2V0IG9mIHJlc3BvbnNpdmUgb3B0aW9uczpcclxuICAgICAgICAgICAgICogICAgIC5zbGljayhcInNldE9wdGlvblwiLCAncmVzcG9uc2l2ZScsIFt7fSwgLi4uXSwgcmVmcmVzaCApXHJcbiAgICAgICAgICAgICAqXHJcbiAgICAgICAgICAgICAqICAtIGZvciB1cGRhdGluZyBtdWx0aXBsZSB2YWx1ZXMgYXQgb25jZSAobm90IHJlc3BvbnNpdmUpXHJcbiAgICAgICAgICAgICAqICAgICAuc2xpY2soXCJzZXRPcHRpb25cIiwgeyAnb3B0aW9uJzogdmFsdWUsIC4uLiB9LCByZWZyZXNoIClcclxuICAgICAgICAgICAgICovXHJcblxyXG4gICAgICAgICAgICB2YXIgXyA9IHRoaXMsIGwsIGl0ZW0sIG9wdGlvbiwgdmFsdWUsIHJlZnJlc2ggPSBmYWxzZSwgdHlwZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCAkLnR5cGUoIGFyZ3VtZW50c1swXSApID09PSAnb2JqZWN0JyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBvcHRpb24gPSAgYXJndW1lbnRzWzBdO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1sxXTtcclxuICAgICAgICAgICAgICAgIHR5cGUgPSAnbXVsdGlwbGUnO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggJC50eXBlKCBhcmd1bWVudHNbMF0gKSA9PT0gJ3N0cmluZycgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9uID0gIGFyZ3VtZW50c1swXTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gYXJndW1lbnRzWzFdO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaCA9IGFyZ3VtZW50c1syXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIGFyZ3VtZW50c1swXSA9PT0gJ3Jlc3BvbnNpdmUnICYmICQudHlwZSggYXJndW1lbnRzWzFdICkgPT09ICdhcnJheScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAncmVzcG9uc2l2ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZW9mIGFyZ3VtZW50c1sxXSAhPT0gJ3VuZGVmaW5lZCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPSAnc2luZ2xlJztcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHR5cGUgPT09ICdzaW5nbGUnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8ub3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ211bHRpcGxlJyApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAkLmVhY2goIG9wdGlvbiAsIGZ1bmN0aW9uKCBvcHQsIHZhbCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zW29wdF0gPSB2YWw7XHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICggdHlwZSA9PT0gJ3Jlc3BvbnNpdmUnICkge1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoIGl0ZW0gaW4gdmFsdWUgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCAkLnR5cGUoIF8ub3B0aW9ucy5yZXNwb25zaXZlICkgIT09ICdhcnJheScgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMucmVzcG9uc2l2ZSA9IFsgdmFsdWVbaXRlbV0gXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGwgPSBfLm9wdGlvbnMucmVzcG9uc2l2ZS5sZW5ndGgtMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzcG9uc2l2ZSBvYmplY3QgYW5kIHNwbGljZSBvdXQgZHVwbGljYXRlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUoIGwgPj0gMCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiggXy5vcHRpb25zLnJlc3BvbnNpdmVbbF0uYnJlYWtwb2ludCA9PT0gdmFsdWVbaXRlbV0uYnJlYWtwb2ludCApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnJlc3BvbnNpdmUuc3BsaWNlKGwsMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGwtLTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF8ub3B0aW9ucy5yZXNwb25zaXZlLnB1c2goIHZhbHVlW2l0ZW1dICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHJlZnJlc2ggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy51bmxvYWQoKTtcclxuICAgICAgICAgICAgICAgIF8ucmVpbml0KCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFBvc2l0aW9uID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgXy5zZXREaW1lbnNpb25zKCk7XHJcblxyXG4gICAgICAgIF8uc2V0SGVpZ2h0KCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zZXRDU1MoXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5zZXRGYWRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignc2V0UG9zaXRpb24nLCBbX10pO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnNldFByb3BzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgYm9keVN0eWxlID0gZG9jdW1lbnQuYm9keS5zdHlsZTtcclxuXHJcbiAgICAgICAgXy5wb3NpdGlvblByb3AgPSBfLm9wdGlvbnMudmVydGljYWwgPT09IHRydWUgPyAndG9wJyA6ICdsZWZ0JztcclxuXHJcbiAgICAgICAgaWYgKF8ucG9zaXRpb25Qcm9wID09PSAndG9wJykge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIuYWRkQ2xhc3MoJ3NsaWNrLXZlcnRpY2FsJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy4kc2xpZGVyLnJlbW92ZUNsYXNzKCdzbGljay12ZXJ0aWNhbCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5XZWJraXRUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgYm9keVN0eWxlLk1velRyYW5zaXRpb24gIT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBib2R5U3R5bGUubXNUcmFuc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy51c2VDU1MgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIF8uY3NzVHJhbnNpdGlvbnMgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5mYWRlICkge1xyXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBfLm9wdGlvbnMuekluZGV4ID09PSAnbnVtYmVyJyApIHtcclxuICAgICAgICAgICAgICAgIGlmKCBfLm9wdGlvbnMuekluZGV4IDwgMyApIHtcclxuICAgICAgICAgICAgICAgICAgICBfLm9wdGlvbnMuekluZGV4ID0gMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIF8ub3B0aW9ucy56SW5kZXggPSBfLmRlZmF1bHRzLnpJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS5PVHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgXy5hbmltVHlwZSA9ICdPVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1vLXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnT1RyYW5zaXRpb24nO1xyXG4gICAgICAgICAgICBpZiAoYm9keVN0eWxlLnBlcnNwZWN0aXZlUHJvcGVydHkgPT09IHVuZGVmaW5lZCAmJiBib2R5U3R5bGUud2Via2l0UGVyc3BlY3RpdmUgPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLk1velRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAnTW96VHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tb3otdHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2l0aW9uVHlwZSA9ICdNb3pUcmFuc2l0aW9uJztcclxuICAgICAgICAgICAgaWYgKGJvZHlTdHlsZS5wZXJzcGVjdGl2ZVByb3BlcnR5ID09PSB1bmRlZmluZWQgJiYgYm9keVN0eWxlLk1velBlcnNwZWN0aXZlID09PSB1bmRlZmluZWQpIF8uYW5pbVR5cGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlTdHlsZS53ZWJraXRUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ3dlYmtpdFRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNmb3JtVHlwZSA9ICctd2Via2l0LXRyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAnd2Via2l0VHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUucGVyc3BlY3RpdmVQcm9wZXJ0eSA9PT0gdW5kZWZpbmVkICYmIGJvZHlTdHlsZS53ZWJraXRQZXJzcGVjdGl2ZSA9PT0gdW5kZWZpbmVkKSBfLmFuaW1UeXBlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBfLmFuaW1UeXBlID0gJ21zVHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJy1tcy10cmFuc2Zvcm0nO1xyXG4gICAgICAgICAgICBfLnRyYW5zaXRpb25UeXBlID0gJ21zVHJhbnNpdGlvbic7XHJcbiAgICAgICAgICAgIGlmIChib2R5U3R5bGUubXNUcmFuc2Zvcm0gPT09IHVuZGVmaW5lZCkgXy5hbmltVHlwZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYm9keVN0eWxlLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbVR5cGUgPSAndHJhbnNmb3JtJztcclxuICAgICAgICAgICAgXy50cmFuc2Zvcm1UeXBlID0gJ3RyYW5zZm9ybSc7XHJcbiAgICAgICAgICAgIF8udHJhbnNpdGlvblR5cGUgPSAndHJhbnNpdGlvbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF8udHJhbnNmb3Jtc0VuYWJsZWQgPSBfLm9wdGlvbnMudXNlVHJhbnNmb3JtICYmIChfLmFuaW1UeXBlICE9PSBudWxsICYmIF8uYW5pbVR5cGUgIT09IGZhbHNlKTtcclxuICAgIH07XHJcblxyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXRTbGlkZUNsYXNzZXMgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXMsXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCwgYWxsU2xpZGVzLCBpbmRleE9mZnNldCwgcmVtYWluZGVyO1xyXG5cclxuICAgICAgICBhbGxTbGlkZXMgPSBfLiRzbGlkZXJcclxuICAgICAgICAgICAgLmZpbmQoJy5zbGljay1zbGlkZScpXHJcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc2xpY2stYWN0aXZlIHNsaWNrLWNlbnRlciBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcclxuXHJcbiAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgIC5lcShpbmRleClcclxuICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1jdXJyZW50Jyk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGV2ZW5Db2VmID0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAlIDIgPT09IDAgPyAxIDogMDtcclxuXHJcbiAgICAgICAgICAgIGNlbnRlck9mZnNldCA9IE1hdGguZmxvb3IoXy5vcHRpb25zLnNsaWRlc1RvU2hvdyAvIDIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+PSBjZW50ZXJPZmZzZXQgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIDEpIC0gY2VudGVyT2Zmc2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleCAtIGNlbnRlck9mZnNldCArIGV2ZW5Db2VmLCBpbmRleCArIGNlbnRlck9mZnNldCArIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhPZmZzZXQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgaW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZShpbmRleE9mZnNldCAtIGNlbnRlck9mZnNldCArIDEgKyBldmVuQ29lZiwgaW5kZXhPZmZzZXQgKyBjZW50ZXJPZmZzZXQgKyAyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxsU2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5lcShhbGxTbGlkZXMubGVuZ3RoIC0gMSAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gXy5zbGlkZUNvdW50IC0gMSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmVxKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stY2VudGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAuZXEoaW5kZXgpXHJcbiAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWNlbnRlcicpO1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPD0gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy4kc2xpZGVzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4LCBpbmRleCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChhbGxTbGlkZXMubGVuZ3RoIDw9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ3NsaWNrLWFjdGl2ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJlbWFpbmRlciA9IF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICBpbmRleE9mZnNldCA9IF8ub3B0aW9ucy5pbmZpbml0ZSA9PT0gdHJ1ZSA/IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgKyBpbmRleCA6IGluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuc2xpZGVzVG9TaG93ID09IF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAmJiAoXy5zbGlkZUNvdW50IC0gaW5kZXgpIDwgXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0IC0gKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLSByZW1haW5kZXIpLCBpbmRleE9mZnNldCArIHJlbWFpbmRlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCAnZmFsc2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbGxTbGlkZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKGluZGV4T2Zmc2V0LCBpbmRleE9mZnNldCArIF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMubGF6eUxvYWQgPT09ICdvbmRlbWFuZCcgfHwgXy5vcHRpb25zLmxhenlMb2FkID09PSAnYW50aWNpcGF0ZWQnKSB7XHJcbiAgICAgICAgICAgIF8ubGF6eUxvYWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZXR1cEluZmluaXRlID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgaSwgc2xpZGVJbmRleCwgaW5maW5pdGVDb3VudDtcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5mYWRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8ub3B0aW9ucy5jZW50ZXJNb2RlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSB0cnVlICYmIF8ub3B0aW9ucy5mYWRlID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgc2xpZGVJbmRleCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlQ291bnQgPSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICsgMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCA9IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3c7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChpID0gXy5zbGlkZUNvdW50OyBpID4gKF8uc2xpZGVDb3VudCAtXHJcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGVDb3VudCk7IGkgLT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlSW5kZXggPSBpIC0gMTtcclxuICAgICAgICAgICAgICAgICAgICAkKF8uJHNsaWRlc1tzbGlkZUluZGV4XSkuY2xvbmUodHJ1ZSkuYXR0cignaWQnLCAnJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2RhdGEtc2xpY2staW5kZXgnLCBzbGlkZUluZGV4IC0gXy5zbGlkZUNvdW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucHJlcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbmZpbml0ZUNvdW50ICArIF8uc2xpZGVDb3VudDsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVJbmRleCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgJChfLiRzbGlkZXNbc2xpZGVJbmRleF0pLmNsb25lKHRydWUpLmF0dHIoJ2lkJywgJycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4Jywgc2xpZGVJbmRleCArIF8uc2xpZGVDb3VudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZFRvKF8uJHNsaWRlVHJhY2spLmFkZENsYXNzKCdzbGljay1jbG9uZWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlVHJhY2suZmluZCgnLnNsaWNrLWNsb25lZCcpLmZpbmQoJ1tpZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYXR0cignaWQnLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLmludGVycnVwdCA9IGZ1bmN0aW9uKCB0b2dnbGUgKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoICF0b2dnbGUgKSB7XHJcbiAgICAgICAgICAgIF8uYXV0b1BsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRvZ2dsZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zZWxlY3RIYW5kbGVyID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgdGFyZ2V0RWxlbWVudCA9XHJcbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5pcygnLnNsaWNrLXNsaWRlJykgP1xyXG4gICAgICAgICAgICAgICAgJChldmVudC50YXJnZXQpIDpcclxuICAgICAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5wYXJlbnRzKCcuc2xpY2stc2xpZGUnKTtcclxuXHJcbiAgICAgICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGFyZ2V0RWxlbWVudC5hdHRyKCdkYXRhLXNsaWNrLWluZGV4JykpO1xyXG5cclxuICAgICAgICBpZiAoIWluZGV4KSBpbmRleCA9IDA7XHJcblxyXG4gICAgICAgIGlmIChfLnNsaWRlQ291bnQgPD0gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoaW5kZXgsIGZhbHNlLCB0cnVlKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8uc2xpZGVIYW5kbGVyKGluZGV4KTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zbGlkZUhhbmRsZXIgPSBmdW5jdGlvbihpbmRleCwgc3luYywgZG9udEFuaW1hdGUpIHtcclxuXHJcbiAgICAgICAgdmFyIHRhcmdldFNsaWRlLCBhbmltU2xpZGUsIG9sZFNsaWRlLCBzbGlkZUxlZnQsIHRhcmdldExlZnQgPSBudWxsLFxyXG4gICAgICAgICAgICBfID0gdGhpcywgbmF2VGFyZ2V0O1xyXG5cclxuICAgICAgICBzeW5jID0gc3luYyB8fCBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKF8uYW5pbWF0aW5nID09PSB0cnVlICYmIF8ub3B0aW9ucy53YWl0Rm9yQW5pbWF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IHRydWUgJiYgXy5jdXJyZW50U2xpZGUgPT09IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChzeW5jID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBfLmFzTmF2Rm9yKGluZGV4KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRhcmdldFNsaWRlID0gaW5kZXg7XHJcbiAgICAgICAgdGFyZ2V0TGVmdCA9IF8uZ2V0TGVmdCh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgc2xpZGVMZWZ0ID0gXy5nZXRMZWZ0KF8uY3VycmVudFNsaWRlKTtcclxuXHJcbiAgICAgICAgXy5jdXJyZW50TGVmdCA9IF8uc3dpcGVMZWZ0ID09PSBudWxsID8gc2xpZGVMZWZ0IDogXy5zd2lwZUxlZnQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuaW5maW5pdGUgPT09IGZhbHNlICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gXy5nZXREb3RDb3VudCgpICogXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSkge1xyXG4gICAgICAgICAgICBpZiAoXy5vcHRpb25zLmZhZGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgXy5hbmltYXRlU2xpZGUoc2xpZGVMZWZ0LCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUodGFyZ2V0U2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSAmJiBfLm9wdGlvbnMuY2VudGVyTW9kZSA9PT0gdHJ1ZSAmJiAoaW5kZXggPCAwIHx8IGluZGV4ID4gKF8uc2xpZGVDb3VudCAtIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCkpKSB7XHJcbiAgICAgICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFNsaWRlID0gXy5jdXJyZW50U2xpZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLmFuaW1hdGVTbGlkZShzbGlkZUxlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZSh0YXJnZXRTbGlkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIF8ucG9zdFNsaWRlKHRhcmdldFNsaWRlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8ub3B0aW9ucy5hdXRvcGxheSApIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChfLmF1dG9QbGF5VGltZXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRhcmdldFNsaWRlIDwgMCkge1xyXG4gICAgICAgICAgICBpZiAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsICE9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhbmltU2xpZGUgPSBfLnNsaWRlQ291bnQgLSAoXy5zbGlkZUNvdW50ICUgXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IF8uc2xpZGVDb3VudCArIHRhcmdldFNsaWRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTbGlkZSA+PSBfLnNsaWRlQ291bnQpIHtcclxuICAgICAgICAgICAgaWYgKF8uc2xpZGVDb3VudCAlIF8ub3B0aW9ucy5zbGlkZXNUb1Njcm9sbCAhPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgYW5pbVNsaWRlID0gMDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFuaW1TbGlkZSA9IHRhcmdldFNsaWRlIC0gXy5zbGlkZUNvdW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pbVNsaWRlID0gdGFyZ2V0U2xpZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmFuaW1hdGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdiZWZvcmVDaGFuZ2UnLCBbXywgXy5jdXJyZW50U2xpZGUsIGFuaW1TbGlkZV0pO1xyXG5cclxuICAgICAgICBvbGRTbGlkZSA9IF8uY3VycmVudFNsaWRlO1xyXG4gICAgICAgIF8uY3VycmVudFNsaWRlID0gYW5pbVNsaWRlO1xyXG5cclxuICAgICAgICBfLnNldFNsaWRlQ2xhc3NlcyhfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIGlmICggXy5vcHRpb25zLmFzTmF2Rm9yICkge1xyXG5cclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gXy5nZXROYXZUYXJnZXQoKTtcclxuICAgICAgICAgICAgbmF2VGFyZ2V0ID0gbmF2VGFyZ2V0LnNsaWNrKCdnZXRTbGljaycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCBuYXZUYXJnZXQuc2xpZGVDb3VudCA8PSBuYXZUYXJnZXQub3B0aW9ucy5zbGlkZXNUb1Nob3cgKSB7XHJcbiAgICAgICAgICAgICAgICBuYXZUYXJnZXQuc2V0U2xpZGVDbGFzc2VzKF8uY3VycmVudFNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udXBkYXRlRG90cygpO1xyXG4gICAgICAgIF8udXBkYXRlQXJyb3dzKCk7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAoZG9udEFuaW1hdGUgIT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmZhZGVTbGlkZU91dChvbGRTbGlkZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5mYWRlU2xpZGUoYW5pbVNsaWRlLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICBfLnBvc3RTbGlkZShhbmltU2xpZGUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBfLmFuaW1hdGVIZWlnaHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGRvbnRBbmltYXRlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8uYW5pbWF0ZVNsaWRlKHRhcmdldExlZnQsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgXy5wb3N0U2xpZGUoYW5pbVNsaWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3RhcnRMb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy5hcnJvd3MgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kcHJldkFycm93LmhpZGUoKTtcclxuICAgICAgICAgICAgXy4kbmV4dEFycm93LmhpZGUoKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmRvdHMgPT09IHRydWUgJiYgXy5zbGlkZUNvdW50ID4gXy5vcHRpb25zLnNsaWRlc1RvU2hvdykge1xyXG5cclxuICAgICAgICAgICAgXy4kZG90cy5oaWRlKCk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy4kc2xpZGVyLmFkZENsYXNzKCdzbGljay1sb2FkaW5nJyk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVEaXJlY3Rpb24gPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgdmFyIHhEaXN0LCB5RGlzdCwgciwgc3dpcGVBbmdsZSwgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIHhEaXN0ID0gXy50b3VjaE9iamVjdC5zdGFydFggLSBfLnRvdWNoT2JqZWN0LmN1clg7XHJcbiAgICAgICAgeURpc3QgPSBfLnRvdWNoT2JqZWN0LnN0YXJ0WSAtIF8udG91Y2hPYmplY3QuY3VyWTtcclxuICAgICAgICByID0gTWF0aC5hdGFuMih5RGlzdCwgeERpc3QpO1xyXG5cclxuICAgICAgICBzd2lwZUFuZ2xlID0gTWF0aC5yb3VuZChyICogMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgaWYgKHN3aXBlQW5nbGUgPCAwKSB7XHJcbiAgICAgICAgICAgIHN3aXBlQW5nbGUgPSAzNjAgLSBNYXRoLmFicyhzd2lwZUFuZ2xlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgoc3dpcGVBbmdsZSA8PSA0NSkgJiYgKHN3aXBlQW5nbGUgPj0gMCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIChfLm9wdGlvbnMucnRsID09PSBmYWxzZSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKHN3aXBlQW5nbGUgPD0gMzYwKSAmJiAoc3dpcGVBbmdsZSA+PSAzMTUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXy5vcHRpb25zLnJ0bCA9PT0gZmFsc2UgPyAnbGVmdCcgOiAncmlnaHQnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChzd2lwZUFuZ2xlID49IDEzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMjI1KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gJ3JpZ2h0JyA6ICdsZWZ0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICgoc3dpcGVBbmdsZSA+PSAzNSkgJiYgKHN3aXBlQW5nbGUgPD0gMTM1KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICdkb3duJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAndXAnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUVuZCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgc2xpZGVDb3VudCxcclxuICAgICAgICAgICAgZGlyZWN0aW9uO1xyXG5cclxuICAgICAgICBfLmRyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgXy5zd2lwaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChfLnNjcm9sbGluZykge1xyXG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLmludGVycnVwdGVkID0gZmFsc2U7XHJcbiAgICAgICAgXy5zaG91bGRDbGljayA9ICggXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDEwICkgPyBmYWxzZSA6IHRydWU7XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5jdXJYID09PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICggXy50b3VjaE9iamVjdC5lZGdlSGl0ID09PSB0cnVlICkge1xyXG4gICAgICAgICAgICBfLiRzbGlkZXIudHJpZ2dlcignZWRnZScsIFtfLCBfLnN3aXBlRGlyZWN0aW9uKCkgXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPj0gXy50b3VjaE9iamVjdC5taW5Td2lwZSApIHtcclxuXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IF8uc3dpcGVEaXJlY3Rpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoIGRpcmVjdGlvbiApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2Rvd24nOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSArIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgKyBfLmdldFNsaWRlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAndXAnOlxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzbGlkZUNvdW50ID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXy5vcHRpb25zLnN3aXBlVG9TbGlkZSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfLmNoZWNrTmF2aWdhYmxlKCBfLmN1cnJlbnRTbGlkZSAtIF8uZ2V0U2xpZGVDb3VudCgpICkgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50U2xpZGUgLSBfLmdldFNsaWRlQ291bnQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXy5jdXJyZW50RGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiggZGlyZWN0aW9uICE9ICd2ZXJ0aWNhbCcgKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIHNsaWRlQ291bnQgKTtcclxuICAgICAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCdzd2lwZScsIFtfLCBkaXJlY3Rpb24gXSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIF8udG91Y2hPYmplY3Quc3RhcnRYICE9PSBfLnRvdWNoT2JqZWN0LmN1clggKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5zbGlkZUhhbmRsZXIoIF8uY3VycmVudFNsaWRlICk7XHJcbiAgICAgICAgICAgICAgICBfLnRvdWNoT2JqZWN0ID0ge307XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS5zd2lwZUhhbmRsZXIgPSBmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICgoXy5vcHRpb25zLnN3aXBlID09PSBmYWxzZSkgfHwgKCdvbnRvdWNoZW5kJyBpbiBkb2N1bWVudCAmJiBfLm9wdGlvbnMuc3dpcGUgPT09IGZhbHNlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIGlmIChfLm9wdGlvbnMuZHJhZ2dhYmxlID09PSBmYWxzZSAmJiBldmVudC50eXBlLmluZGV4T2YoJ21vdXNlJykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QuZmluZ2VyQ291bnQgPSBldmVudC5vcmlnaW5hbEV2ZW50ICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQudG91Y2hlcyAhPT0gdW5kZWZpbmVkID9cclxuICAgICAgICAgICAgZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzLmxlbmd0aCA6IDE7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RXaWR0aCAvIF8ub3B0aW9uc1xyXG4gICAgICAgICAgICAudG91Y2hUaHJlc2hvbGQ7XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QubWluU3dpcGUgPSBfLmxpc3RIZWlnaHQgLyBfLm9wdGlvbnNcclxuICAgICAgICAgICAgICAgIC50b3VjaFRocmVzaG9sZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoZXZlbnQuZGF0YS5hY3Rpb24pIHtcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0JzpcclxuICAgICAgICAgICAgICAgIF8uc3dpcGVTdGFydChldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ21vdmUnOlxyXG4gICAgICAgICAgICAgICAgXy5zd2lwZU1vdmUoZXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlbmQnOlxyXG4gICAgICAgICAgICAgICAgXy5zd2lwZUVuZChldmVudCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH07XHJcblxyXG4gICAgU2xpY2sucHJvdG90eXBlLnN3aXBlTW92ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgZWRnZVdhc0hpdCA9IGZhbHNlLFxyXG4gICAgICAgICAgICBjdXJMZWZ0LCBzd2lwZURpcmVjdGlvbiwgc3dpcGVMZW5ndGgsIHBvc2l0aW9uT2Zmc2V0LCB0b3VjaGVzLCB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xyXG5cclxuICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudCAhPT0gdW5kZWZpbmVkID8gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKCFfLmRyYWdnaW5nIHx8IF8uc2Nyb2xsaW5nIHx8IHRvdWNoZXMgJiYgdG91Y2hlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3VyTGVmdCA9IF8uZ2V0TGVmdChfLmN1cnJlbnRTbGlkZSk7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWCA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVggOiBldmVudC5jbGllbnRYO1xyXG4gICAgICAgIF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXNbMF0ucGFnZVkgOiBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWCAtIF8udG91Y2hPYmplY3Quc3RhcnRYLCAyKSkpO1xyXG5cclxuICAgICAgICB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID0gTWF0aC5yb3VuZChNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgIE1hdGgucG93KF8udG91Y2hPYmplY3QuY3VyWSAtIF8udG91Y2hPYmplY3Quc3RhcnRZLCAyKSkpO1xyXG5cclxuICAgICAgICBpZiAoIV8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgJiYgIV8uc3dpcGluZyAmJiB2ZXJ0aWNhbFN3aXBlTGVuZ3RoID4gNCkge1xyXG4gICAgICAgICAgICBfLnNjcm9sbGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMudmVydGljYWxTd2lwaW5nID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggPSB2ZXJ0aWNhbFN3aXBlTGVuZ3RoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpcGVEaXJlY3Rpb24gPSBfLnN3aXBlRGlyZWN0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChldmVudC5vcmlnaW5hbEV2ZW50ICE9PSB1bmRlZmluZWQgJiYgXy50b3VjaE9iamVjdC5zd2lwZUxlbmd0aCA+IDQpIHtcclxuICAgICAgICAgICAgXy5zd2lwaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc2l0aW9uT2Zmc2V0ID0gKF8ub3B0aW9ucy5ydGwgPT09IGZhbHNlID8gMSA6IC0xKSAqIChfLnRvdWNoT2JqZWN0LmN1clggPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WCA/IDEgOiAtMSk7XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgcG9zaXRpb25PZmZzZXQgPSBfLnRvdWNoT2JqZWN0LmN1clkgPiBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA/IDEgOiAtMTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGg7XHJcblxyXG4gICAgICAgIF8udG91Y2hPYmplY3QuZWRnZUhpdCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAoXy5vcHRpb25zLmluZmluaXRlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpZiAoKF8uY3VycmVudFNsaWRlID09PSAwICYmIHN3aXBlRGlyZWN0aW9uID09PSAncmlnaHQnKSB8fCAoXy5jdXJyZW50U2xpZGUgPj0gXy5nZXREb3RDb3VudCgpICYmIHN3aXBlRGlyZWN0aW9uID09PSAnbGVmdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBzd2lwZUxlbmd0aCA9IF8udG91Y2hPYmplY3Quc3dpcGVMZW5ndGggKiBfLm9wdGlvbnMuZWRnZUZyaWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgXy50b3VjaE9iamVjdC5lZGdlSGl0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBfLnN3aXBlTGVmdCA9IGN1ckxlZnQgKyAoc3dpcGVMZW5ndGggKiAoXy4kbGlzdC5oZWlnaHQoKSAvIF8ubGlzdFdpZHRoKSkgKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKF8ub3B0aW9ucy52ZXJ0aWNhbFN3aXBpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBjdXJMZWZ0ICsgc3dpcGVMZW5ndGggKiBwb3NpdGlvbk9mZnNldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChfLm9wdGlvbnMuZmFkZSA9PT0gdHJ1ZSB8fCBfLm9wdGlvbnMudG91Y2hNb3ZlID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy5hbmltYXRpbmcgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgXy5zd2lwZUxlZnQgPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLnNldENTUyhfLnN3aXBlTGVmdCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUuc3dpcGVTdGFydCA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgdG91Y2hlcztcclxuXHJcbiAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGlmIChfLnRvdWNoT2JqZWN0LmZpbmdlckNvdW50ICE9PSAxIHx8IF8uc2xpZGVDb3VudCA8PSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93KSB7XHJcbiAgICAgICAgICAgIF8udG91Y2hPYmplY3QgPSB7fTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGV2ZW50Lm9yaWdpbmFsRXZlbnQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQub3JpZ2luYWxFdmVudC50b3VjaGVzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXy50b3VjaE9iamVjdC5zdGFydFggPSBfLnRvdWNoT2JqZWN0LmN1clggPSB0b3VjaGVzICE9PSB1bmRlZmluZWQgPyB0b3VjaGVzLnBhZ2VYIDogZXZlbnQuY2xpZW50WDtcclxuICAgICAgICBfLnRvdWNoT2JqZWN0LnN0YXJ0WSA9IF8udG91Y2hPYmplY3QuY3VyWSA9IHRvdWNoZXMgIT09IHVuZGVmaW5lZCA/IHRvdWNoZXMucGFnZVkgOiBldmVudC5jbGllbnRZO1xyXG5cclxuICAgICAgICBfLmRyYWdnaW5nID0gdHJ1ZTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bmZpbHRlclNsaWRlcyA9IFNsaWNrLnByb3RvdHlwZS5zbGlja1VuZmlsdGVyID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKF8uJHNsaWRlc0NhY2hlICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLnVubG9hZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVUcmFjay5jaGlsZHJlbih0aGlzLm9wdGlvbnMuc2xpZGUpLmRldGFjaCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kc2xpZGVzQ2FjaGUuYXBwZW5kVG8oXy4kc2xpZGVUcmFjayk7XHJcblxyXG4gICAgICAgICAgICBfLnJlaW5pdCgpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudW5sb2FkID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgJCgnLnNsaWNrLWNsb25lZCcsIF8uJHNsaWRlcikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzKSB7XHJcbiAgICAgICAgICAgIF8uJGRvdHMucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy4kcHJldkFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMucHJldkFycm93KSkge1xyXG4gICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoXy4kbmV4dEFycm93ICYmIF8uaHRtbEV4cHIudGVzdChfLm9wdGlvbnMubmV4dEFycm93KSkge1xyXG4gICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBfLiRzbGlkZXNcclxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1zbGlkZSBzbGljay1hY3RpdmUgc2xpY2stdmlzaWJsZSBzbGljay1jdXJyZW50JylcclxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKVxyXG4gICAgICAgICAgICAuY3NzKCd3aWR0aCcsICcnKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS51bnNsaWNrID0gZnVuY3Rpb24oZnJvbUJyZWFrcG9pbnQpIHtcclxuXHJcbiAgICAgICAgdmFyIF8gPSB0aGlzO1xyXG4gICAgICAgIF8uJHNsaWRlci50cmlnZ2VyKCd1bnNsaWNrJywgW18sIGZyb21CcmVha3BvaW50XSk7XHJcbiAgICAgICAgXy5kZXN0cm95KCk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlQXJyb3dzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcyxcclxuICAgICAgICAgICAgY2VudGVyT2Zmc2V0O1xyXG5cclxuICAgICAgICBjZW50ZXJPZmZzZXQgPSBNYXRoLmZsb29yKF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgLyAyKTtcclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXJyb3dzID09PSB0cnVlICYmXHJcbiAgICAgICAgICAgIF8uc2xpZGVDb3VudCA+IF8ub3B0aW9ucy5zbGlkZXNUb1Nob3cgJiZcclxuICAgICAgICAgICAgIV8ub3B0aW9ucy5pbmZpbml0ZSApIHtcclxuXHJcbiAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcbiAgICAgICAgICAgIF8uJG5leHRBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoXy5jdXJyZW50U2xpZGUgPT09IDApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChfLmN1cnJlbnRTbGlkZSA+PSBfLnNsaWRlQ291bnQgLSBfLm9wdGlvbnMuc2xpZGVzVG9TaG93ICYmIF8ub3B0aW9ucy5jZW50ZXJNb2RlID09PSBmYWxzZSkge1xyXG5cclxuICAgICAgICAgICAgICAgIF8uJG5leHRBcnJvdy5hZGRDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcclxuICAgICAgICAgICAgICAgIF8uJHByZXZBcnJvdy5yZW1vdmVDbGFzcygnc2xpY2stZGlzYWJsZWQnKS5hdHRyKCdhcmlhLWRpc2FibGVkJywgJ2ZhbHNlJyk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKF8uY3VycmVudFNsaWRlID49IF8uc2xpZGVDb3VudCAtIDEgJiYgXy5vcHRpb25zLmNlbnRlck1vZGUgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLiRuZXh0QXJyb3cuYWRkQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XHJcbiAgICAgICAgICAgICAgICBfLiRwcmV2QXJyb3cucmVtb3ZlQ2xhc3MoJ3NsaWNrLWRpc2FibGVkJykuYXR0cignYXJpYS1kaXNhYmxlZCcsICdmYWxzZScpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBTbGljay5wcm90b3R5cGUudXBkYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICB2YXIgXyA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChfLiRkb3RzICE9PSBudWxsKSB7XHJcblxyXG4gICAgICAgICAgICBfLiRkb3RzXHJcbiAgICAgICAgICAgICAgICAuZmluZCgnbGknKVxyXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzbGljay1hY3RpdmUnKVxyXG4gICAgICAgICAgICAgICAgLmVuZCgpO1xyXG5cclxuICAgICAgICAgICAgXy4kZG90c1xyXG4gICAgICAgICAgICAgICAgLmZpbmQoJ2xpJylcclxuICAgICAgICAgICAgICAgIC5lcShNYXRoLmZsb29yKF8uY3VycmVudFNsaWRlIC8gXy5vcHRpb25zLnNsaWRlc1RvU2Nyb2xsKSlcclxuICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnc2xpY2stYWN0aXZlJyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9O1xyXG5cclxuICAgIFNsaWNrLnByb3RvdHlwZS52aXNpYmlsaXR5ID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgICAgIHZhciBfID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKCBfLm9wdGlvbnMuYXV0b3BsYXkgKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIGRvY3VtZW50W18uaGlkZGVuXSApIHtcclxuXHJcbiAgICAgICAgICAgICAgICBfLmludGVycnVwdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgXy5pbnRlcnJ1cHRlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICAkLmZuLnNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdmFyIF8gPSB0aGlzLFxyXG4gICAgICAgICAgICBvcHQgPSBhcmd1bWVudHNbMF0sXHJcbiAgICAgICAgICAgIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxyXG4gICAgICAgICAgICBsID0gXy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGksXHJcbiAgICAgICAgICAgIHJldDtcclxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0ID09ICdvYmplY3QnIHx8IHR5cGVvZiBvcHQgPT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICBfW2ldLnNsaWNrID0gbmV3IFNsaWNrKF9baV0sIG9wdCk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHJldCA9IF9baV0uc2xpY2tbb3B0XS5hcHBseShfW2ldLnNsaWNrLCBhcmdzKTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiByZXQgIT0gJ3VuZGVmaW5lZCcpIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBfO1xyXG4gICAgfTtcclxuXHJcbn0pKTtcclxuIiwiLyohXG4gKiBWRVJTSU9OOiAxLjIwLjJcbiAqIERBVEU6IDIwMTctMDYtMzBcbiAqIFVQREFURVMgQU5EIERPQ1MgQVQ6IGh0dHA6Ly9ncmVlbnNvY2suY29tXG4gKiBcbiAqIEluY2x1ZGVzIGFsbCBvZiB0aGUgZm9sbG93aW5nOiBUd2VlbkxpdGUsIFR3ZWVuTWF4LCBUaW1lbGluZUxpdGUsIFRpbWVsaW5lTWF4LCBFYXNlUGFjaywgQ1NTUGx1Z2luLCBSb3VuZFByb3BzUGx1Z2luLCBCZXppZXJQbHVnaW4sIEF0dHJQbHVnaW4sIERpcmVjdGlvbmFsUm90YXRpb25QbHVnaW5cbiAqXG4gKiBAbGljZW5zZSBDb3B5cmlnaHQgKGMpIDIwMDgtMjAxNywgR3JlZW5Tb2NrLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyB3b3JrIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIGF0IGh0dHA6Ly9ncmVlbnNvY2suY29tL3N0YW5kYXJkLWxpY2Vuc2Ugb3IgZm9yXG4gKiBDbHViIEdyZWVuU29jayBtZW1iZXJzLCB0aGUgc29mdHdhcmUgYWdyZWVtZW50IHRoYXQgd2FzIGlzc3VlZCB3aXRoIHlvdXIgbWVtYmVyc2hpcC5cbiAqIFxuICogQGF1dGhvcjogSmFjayBEb3lsZSwgamFja0BncmVlbnNvY2suY29tXG4gKiovXG52YXIgX2dzU2NvcGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSYmbW9kdWxlLmV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOnRoaXN8fHdpbmRvdzsoX2dzU2NvcGUuX2dzUXVldWV8fChfZ3NTY29wZS5fZ3NRdWV1ZT1bXSkpLnB1c2goZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjtfZ3NTY29wZS5fZ3NEZWZpbmUoXCJUd2Vlbk1heFwiLFtcImNvcmUuQW5pbWF0aW9uXCIsXCJjb3JlLlNpbXBsZVRpbWVsaW5lXCIsXCJUd2VlbkxpdGVcIl0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGEpe3ZhciBiLGM9W10sZD1hLmxlbmd0aDtmb3IoYj0wO2IhPT1kO2MucHVzaChhW2IrK10pKTtyZXR1cm4gY30sZT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZSxmPWEuY3ljbGU7Zm9yKGQgaW4gZillPWZbZF0sYVtkXT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBlP2UoYyxiW2NdKTplW2MlZS5sZW5ndGhdO2RlbGV0ZSBhLmN5Y2xlfSxmPWZ1bmN0aW9uKGEsYixkKXtjLmNhbGwodGhpcyxhLGIsZCksdGhpcy5fY3ljbGU9MCx0aGlzLl95b3lvPXRoaXMudmFycy55b3lvPT09ITB8fCEhdGhpcy52YXJzLnlveW9FYXNlLHRoaXMuX3JlcGVhdD10aGlzLnZhcnMucmVwZWF0fHwwLHRoaXMuX3JlcGVhdERlbGF5PXRoaXMudmFycy5yZXBlYXREZWxheXx8MCx0aGlzLl9kaXJ0eT0hMCx0aGlzLnJlbmRlcj1mLnByb3RvdHlwZS5yZW5kZXJ9LGc9MWUtMTAsaD1jLl9pbnRlcm5hbHMsaT1oLmlzU2VsZWN0b3Isaj1oLmlzQXJyYXksaz1mLnByb3RvdHlwZT1jLnRvKHt9LC4xLHt9KSxsPVtdO2YudmVyc2lvbj1cIjEuMjAuMlwiLGsuY29uc3RydWN0b3I9ZixrLmtpbGwoKS5fZ2M9ITEsZi5raWxsVHdlZW5zT2Y9Zi5raWxsRGVsYXllZENhbGxzVG89Yy5raWxsVHdlZW5zT2YsZi5nZXRUd2VlbnNPZj1jLmdldFR3ZWVuc09mLGYubGFnU21vb3RoaW5nPWMubGFnU21vb3RoaW5nLGYudGlja2VyPWMudGlja2VyLGYucmVuZGVyPWMucmVuZGVyLGsuaW52YWxpZGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl95b3lvPXRoaXMudmFycy55b3lvPT09ITB8fCEhdGhpcy52YXJzLnlveW9FYXNlLHRoaXMuX3JlcGVhdD10aGlzLnZhcnMucmVwZWF0fHwwLHRoaXMuX3JlcGVhdERlbGF5PXRoaXMudmFycy5yZXBlYXREZWxheXx8MCx0aGlzLl95b3lvRWFzZT1udWxsLHRoaXMuX3VuY2FjaGUoITApLGMucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKX0say51cGRhdGVUbz1mdW5jdGlvbihhLGIpe3ZhciBkLGU9dGhpcy5yYXRpbyxmPXRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXJ8fGEuaW1tZWRpYXRlUmVuZGVyO2ImJnRoaXMuX3N0YXJ0VGltZTx0aGlzLl90aW1lbGluZS5fdGltZSYmKHRoaXMuX3N0YXJ0VGltZT10aGlzLl90aW1lbGluZS5fdGltZSx0aGlzLl91bmNhY2hlKCExKSx0aGlzLl9nYz90aGlzLl9lbmFibGVkKCEwLCExKTp0aGlzLl90aW1lbGluZS5pbnNlcnQodGhpcyx0aGlzLl9zdGFydFRpbWUtdGhpcy5fZGVsYXkpKTtmb3IoZCBpbiBhKXRoaXMudmFyc1tkXT1hW2RdO2lmKHRoaXMuX2luaXR0ZWR8fGYpaWYoYil0aGlzLl9pbml0dGVkPSExLGYmJnRoaXMucmVuZGVyKDAsITAsITApO2Vsc2UgaWYodGhpcy5fZ2MmJnRoaXMuX2VuYWJsZWQoITAsITEpLHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQmJnRoaXMuX2ZpcnN0UFQmJmMuX29uUGx1Z2luRXZlbnQoXCJfb25EaXNhYmxlXCIsdGhpcyksdGhpcy5fdGltZS90aGlzLl9kdXJhdGlvbj4uOTk4KXt2YXIgZz10aGlzLl90b3RhbFRpbWU7dGhpcy5yZW5kZXIoMCwhMCwhMSksdGhpcy5faW5pdHRlZD0hMSx0aGlzLnJlbmRlcihnLCEwLCExKX1lbHNlIGlmKHRoaXMuX2luaXR0ZWQ9ITEsdGhpcy5faW5pdCgpLHRoaXMuX3RpbWU+MHx8Zilmb3IodmFyIGgsaT0xLygxLWUpLGo9dGhpcy5fZmlyc3RQVDtqOyloPWoucytqLmMsai5jKj1pLGoucz1oLWouYyxqPWouX25leHQ7cmV0dXJuIHRoaXN9LGsucmVuZGVyPWZ1bmN0aW9uKGEsYixkKXt0aGlzLl9pbml0dGVkfHwwPT09dGhpcy5fZHVyYXRpb24mJnRoaXMudmFycy5yZXBlYXQmJnRoaXMuaW52YWxpZGF0ZSgpO3ZhciBlLGYsaSxqLGssbCxtLG4sbyxwPXRoaXMuX2RpcnR5P3RoaXMudG90YWxEdXJhdGlvbigpOnRoaXMuX3RvdGFsRHVyYXRpb24scT10aGlzLl90aW1lLHI9dGhpcy5fdG90YWxUaW1lLHM9dGhpcy5fY3ljbGUsdD10aGlzLl9kdXJhdGlvbix1PXRoaXMuX3Jhd1ByZXZUaW1lO2lmKGE+PXAtMWUtNyYmYT49MD8odGhpcy5fdG90YWxUaW1lPXAsdGhpcy5fY3ljbGU9dGhpcy5fcmVwZWF0LHRoaXMuX3lveW8mJjAhPT0oMSZ0aGlzLl9jeWNsZSk/KHRoaXMuX3RpbWU9MCx0aGlzLnJhdGlvPXRoaXMuX2Vhc2UuX2NhbGNFbmQ/dGhpcy5fZWFzZS5nZXRSYXRpbygwKTowKToodGhpcy5fdGltZT10LHRoaXMucmF0aW89dGhpcy5fZWFzZS5fY2FsY0VuZD90aGlzLl9lYXNlLmdldFJhdGlvKDEpOjEpLHRoaXMuX3JldmVyc2VkfHwoZT0hMCxmPVwib25Db21wbGV0ZVwiLGQ9ZHx8dGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuKSwwPT09dCYmKHRoaXMuX2luaXR0ZWR8fCF0aGlzLnZhcnMubGF6eXx8ZCkmJih0aGlzLl9zdGFydFRpbWU9PT10aGlzLl90aW1lbGluZS5fZHVyYXRpb24mJihhPTApLCgwPnV8fDA+PWEmJmE+PS0xZS03fHx1PT09ZyYmXCJpc1BhdXNlXCIhPT10aGlzLmRhdGEpJiZ1IT09YSYmKGQ9ITAsdT5nJiYoZj1cIm9uUmV2ZXJzZUNvbXBsZXRlXCIpKSx0aGlzLl9yYXdQcmV2VGltZT1uPSFifHxhfHx1PT09YT9hOmcpKToxZS03PmE/KHRoaXMuX3RvdGFsVGltZT10aGlzLl90aW1lPXRoaXMuX2N5Y2xlPTAsdGhpcy5yYXRpbz10aGlzLl9lYXNlLl9jYWxjRW5kP3RoaXMuX2Vhc2UuZ2V0UmF0aW8oMCk6MCwoMCE9PXJ8fDA9PT10JiZ1PjApJiYoZj1cIm9uUmV2ZXJzZUNvbXBsZXRlXCIsZT10aGlzLl9yZXZlcnNlZCksMD5hJiYodGhpcy5fYWN0aXZlPSExLDA9PT10JiYodGhpcy5faW5pdHRlZHx8IXRoaXMudmFycy5sYXp5fHxkKSYmKHU+PTAmJihkPSEwKSx0aGlzLl9yYXdQcmV2VGltZT1uPSFifHxhfHx1PT09YT9hOmcpKSx0aGlzLl9pbml0dGVkfHwoZD0hMCkpOih0aGlzLl90b3RhbFRpbWU9dGhpcy5fdGltZT1hLDAhPT10aGlzLl9yZXBlYXQmJihqPXQrdGhpcy5fcmVwZWF0RGVsYXksdGhpcy5fY3ljbGU9dGhpcy5fdG90YWxUaW1lL2o+PjAsMCE9PXRoaXMuX2N5Y2xlJiZ0aGlzLl9jeWNsZT09PXRoaXMuX3RvdGFsVGltZS9qJiZhPj1yJiZ0aGlzLl9jeWNsZS0tLHRoaXMuX3RpbWU9dGhpcy5fdG90YWxUaW1lLXRoaXMuX2N5Y2xlKmosdGhpcy5feW95byYmMCE9PSgxJnRoaXMuX2N5Y2xlKSYmKHRoaXMuX3RpbWU9dC10aGlzLl90aW1lLG89dGhpcy5feW95b0Vhc2V8fHRoaXMudmFycy55b3lvRWFzZSxvJiYodGhpcy5feW95b0Vhc2V8fChvIT09ITB8fHRoaXMuX2luaXR0ZWQ/dGhpcy5feW95b0Vhc2U9bz1vPT09ITA/dGhpcy5fZWFzZTpvIGluc3RhbmNlb2YgRWFzZT9vOkVhc2UubWFwW29dOihvPXRoaXMudmFycy5lYXNlLHRoaXMuX3lveW9FYXNlPW89bz9vIGluc3RhbmNlb2YgRWFzZT9vOlwiZnVuY3Rpb25cIj09dHlwZW9mIG8/bmV3IEVhc2Uobyx0aGlzLnZhcnMuZWFzZVBhcmFtcyk6RWFzZS5tYXBbb118fGMuZGVmYXVsdEVhc2U6Yy5kZWZhdWx0RWFzZSkpLHRoaXMucmF0aW89bz8xLW8uZ2V0UmF0aW8oKHQtdGhpcy5fdGltZSkvdCk6MCkpLHRoaXMuX3RpbWU+dD90aGlzLl90aW1lPXQ6dGhpcy5fdGltZTwwJiYodGhpcy5fdGltZT0wKSksdGhpcy5fZWFzZVR5cGUmJiFvPyhrPXRoaXMuX3RpbWUvdCxsPXRoaXMuX2Vhc2VUeXBlLG09dGhpcy5fZWFzZVBvd2VyLCgxPT09bHx8Mz09PWwmJms+PS41KSYmKGs9MS1rKSwzPT09bCYmKGsqPTIpLDE9PT1tP2sqPWs6Mj09PW0/ayo9ayprOjM9PT1tP2sqPWsqayprOjQ9PT1tJiYoayo9ayprKmsqayksMT09PWw/dGhpcy5yYXRpbz0xLWs6Mj09PWw/dGhpcy5yYXRpbz1rOnRoaXMuX3RpbWUvdDwuNT90aGlzLnJhdGlvPWsvMjp0aGlzLnJhdGlvPTEtay8yKTpvfHwodGhpcy5yYXRpbz10aGlzLl9lYXNlLmdldFJhdGlvKHRoaXMuX3RpbWUvdCkpKSxxPT09dGhpcy5fdGltZSYmIWQmJnM9PT10aGlzLl9jeWNsZSlyZXR1cm4gdm9pZChyIT09dGhpcy5fdG90YWxUaW1lJiZ0aGlzLl9vblVwZGF0ZSYmKGJ8fHRoaXMuX2NhbGxiYWNrKFwib25VcGRhdGVcIikpKTtpZighdGhpcy5faW5pdHRlZCl7aWYodGhpcy5faW5pdCgpLCF0aGlzLl9pbml0dGVkfHx0aGlzLl9nYylyZXR1cm47aWYoIWQmJnRoaXMuX2ZpcnN0UFQmJih0aGlzLnZhcnMubGF6eSE9PSExJiZ0aGlzLl9kdXJhdGlvbnx8dGhpcy52YXJzLmxhenkmJiF0aGlzLl9kdXJhdGlvbikpcmV0dXJuIHRoaXMuX3RpbWU9cSx0aGlzLl90b3RhbFRpbWU9cix0aGlzLl9yYXdQcmV2VGltZT11LHRoaXMuX2N5Y2xlPXMsaC5sYXp5VHdlZW5zLnB1c2godGhpcyksdm9pZCh0aGlzLl9sYXp5PVthLGJdKTshdGhpcy5fdGltZXx8ZXx8bz9lJiZ0aGlzLl9lYXNlLl9jYWxjRW5kJiYhbyYmKHRoaXMucmF0aW89dGhpcy5fZWFzZS5nZXRSYXRpbygwPT09dGhpcy5fdGltZT8wOjEpKTp0aGlzLnJhdGlvPXRoaXMuX2Vhc2UuZ2V0UmF0aW8odGhpcy5fdGltZS90KX1mb3IodGhpcy5fbGF6eSE9PSExJiYodGhpcy5fbGF6eT0hMSksdGhpcy5fYWN0aXZlfHwhdGhpcy5fcGF1c2VkJiZ0aGlzLl90aW1lIT09cSYmYT49MCYmKHRoaXMuX2FjdGl2ZT0hMCksMD09PXImJigyPT09dGhpcy5faW5pdHRlZCYmYT4wJiZ0aGlzLl9pbml0KCksdGhpcy5fc3RhcnRBdCYmKGE+PTA/dGhpcy5fc3RhcnRBdC5yZW5kZXIoYSxiLGQpOmZ8fChmPVwiX2R1bW15R1NcIikpLHRoaXMudmFycy5vblN0YXJ0JiYoMCE9PXRoaXMuX3RvdGFsVGltZXx8MD09PXQpJiYoYnx8dGhpcy5fY2FsbGJhY2soXCJvblN0YXJ0XCIpKSksaT10aGlzLl9maXJzdFBUO2k7KWkuZj9pLnRbaS5wXShpLmMqdGhpcy5yYXRpbytpLnMpOmkudFtpLnBdPWkuYyp0aGlzLnJhdGlvK2kucyxpPWkuX25leHQ7dGhpcy5fb25VcGRhdGUmJigwPmEmJnRoaXMuX3N0YXJ0QXQmJnRoaXMuX3N0YXJ0VGltZSYmdGhpcy5fc3RhcnRBdC5yZW5kZXIoYSxiLGQpLGJ8fCh0aGlzLl90b3RhbFRpbWUhPT1yfHxmKSYmdGhpcy5fY2FsbGJhY2soXCJvblVwZGF0ZVwiKSksdGhpcy5fY3ljbGUhPT1zJiYoYnx8dGhpcy5fZ2N8fHRoaXMudmFycy5vblJlcGVhdCYmdGhpcy5fY2FsbGJhY2soXCJvblJlcGVhdFwiKSksZiYmKCF0aGlzLl9nY3x8ZCkmJigwPmEmJnRoaXMuX3N0YXJ0QXQmJiF0aGlzLl9vblVwZGF0ZSYmdGhpcy5fc3RhcnRUaW1lJiZ0aGlzLl9zdGFydEF0LnJlbmRlcihhLGIsZCksZSYmKHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiYmdGhpcy5fZW5hYmxlZCghMSwhMSksdGhpcy5fYWN0aXZlPSExKSwhYiYmdGhpcy52YXJzW2ZdJiZ0aGlzLl9jYWxsYmFjayhmKSwwPT09dCYmdGhpcy5fcmF3UHJldlRpbWU9PT1nJiZuIT09ZyYmKHRoaXMuX3Jhd1ByZXZUaW1lPTApKX0sZi50bz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyBmKGEsYixjKX0sZi5mcm9tPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYy5ydW5CYWNrd2FyZHM9ITAsYy5pbW1lZGlhdGVSZW5kZXI9MCE9Yy5pbW1lZGlhdGVSZW5kZXIsbmV3IGYoYSxiLGMpfSxmLmZyb21Ubz1mdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gZC5zdGFydEF0PWMsZC5pbW1lZGlhdGVSZW5kZXI9MCE9ZC5pbW1lZGlhdGVSZW5kZXImJjAhPWMuaW1tZWRpYXRlUmVuZGVyLG5ldyBmKGEsYixkKX0sZi5zdGFnZ2VyVG89Zi5hbGxUbz1mdW5jdGlvbihhLGIsZyxoLGssbSxuKXtoPWh8fDA7dmFyIG8scCxxLHIscz0wLHQ9W10sdT1mdW5jdGlvbigpe2cub25Db21wbGV0ZSYmZy5vbkNvbXBsZXRlLmFwcGx5KGcub25Db21wbGV0ZVNjb3BlfHx0aGlzLGFyZ3VtZW50cyksay5hcHBseShufHxnLmNhbGxiYWNrU2NvcGV8fHRoaXMsbXx8bCl9LHY9Zy5jeWNsZSx3PWcuc3RhcnRBdCYmZy5zdGFydEF0LmN5Y2xlO2ZvcihqKGEpfHwoXCJzdHJpbmdcIj09dHlwZW9mIGEmJihhPWMuc2VsZWN0b3IoYSl8fGEpLGkoYSkmJihhPWQoYSkpKSxhPWF8fFtdLDA+aCYmKGE9ZChhKSxhLnJldmVyc2UoKSxoKj0tMSksbz1hLmxlbmd0aC0xLHE9MDtvPj1xO3ErKyl7cD17fTtmb3IociBpbiBnKXBbcl09Z1tyXTtpZih2JiYoZShwLGEscSksbnVsbCE9cC5kdXJhdGlvbiYmKGI9cC5kdXJhdGlvbixkZWxldGUgcC5kdXJhdGlvbikpLHcpe3c9cC5zdGFydEF0PXt9O2ZvcihyIGluIGcuc3RhcnRBdCl3W3JdPWcuc3RhcnRBdFtyXTtlKHAuc3RhcnRBdCxhLHEpfXAuZGVsYXk9cysocC5kZWxheXx8MCkscT09PW8mJmsmJihwLm9uQ29tcGxldGU9dSksdFtxXT1uZXcgZihhW3FdLGIscCkscys9aH1yZXR1cm4gdH0sZi5zdGFnZ2VyRnJvbT1mLmFsbEZyb209ZnVuY3Rpb24oYSxiLGMsZCxlLGcsaCl7cmV0dXJuIGMucnVuQmFja3dhcmRzPSEwLGMuaW1tZWRpYXRlUmVuZGVyPTAhPWMuaW1tZWRpYXRlUmVuZGVyLGYuc3RhZ2dlclRvKGEsYixjLGQsZSxnLGgpfSxmLnN0YWdnZXJGcm9tVG89Zi5hbGxGcm9tVG89ZnVuY3Rpb24oYSxiLGMsZCxlLGcsaCxpKXtyZXR1cm4gZC5zdGFydEF0PWMsZC5pbW1lZGlhdGVSZW5kZXI9MCE9ZC5pbW1lZGlhdGVSZW5kZXImJjAhPWMuaW1tZWRpYXRlUmVuZGVyLGYuc3RhZ2dlclRvKGEsYixkLGUsZyxoLGkpfSxmLmRlbGF5ZWRDYWxsPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBmKGIsMCx7ZGVsYXk6YSxvbkNvbXBsZXRlOmIsb25Db21wbGV0ZVBhcmFtczpjLGNhbGxiYWNrU2NvcGU6ZCxvblJldmVyc2VDb21wbGV0ZTpiLG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOmMsaW1tZWRpYXRlUmVuZGVyOiExLHVzZUZyYW1lczplLG92ZXJ3cml0ZTowfSl9LGYuc2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIG5ldyBmKGEsMCxiKX0sZi5pc1R3ZWVuaW5nPWZ1bmN0aW9uKGEpe3JldHVybiBjLmdldFR3ZWVuc09mKGEsITApLmxlbmd0aD4wfTt2YXIgbT1mdW5jdGlvbihhLGIpe2Zvcih2YXIgZD1bXSxlPTAsZj1hLl9maXJzdDtmOylmIGluc3RhbmNlb2YgYz9kW2UrK109ZjooYiYmKGRbZSsrXT1mKSxkPWQuY29uY2F0KG0oZixiKSksZT1kLmxlbmd0aCksZj1mLl9uZXh0O3JldHVybiBkfSxuPWYuZ2V0QWxsVHdlZW5zPWZ1bmN0aW9uKGIpe3JldHVybiBtKGEuX3Jvb3RUaW1lbGluZSxiKS5jb25jYXQobShhLl9yb290RnJhbWVzVGltZWxpbmUsYikpfTtmLmtpbGxBbGw9ZnVuY3Rpb24oYSxjLGQsZSl7bnVsbD09YyYmKGM9ITApLG51bGw9PWQmJihkPSEwKTt2YXIgZixnLGgsaT1uKDAhPWUpLGo9aS5sZW5ndGgsaz1jJiZkJiZlO2ZvcihoPTA7aj5oO2grKylnPWlbaF0sKGt8fGcgaW5zdGFuY2VvZiBifHwoZj1nLnRhcmdldD09PWcudmFycy5vbkNvbXBsZXRlKSYmZHx8YyYmIWYpJiYoYT9nLnRvdGFsVGltZShnLl9yZXZlcnNlZD8wOmcudG90YWxEdXJhdGlvbigpKTpnLl9lbmFibGVkKCExLCExKSl9LGYua2lsbENoaWxkVHdlZW5zT2Y9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1hKXt2YXIgZSxnLGssbCxtLG49aC50d2Vlbkxvb2t1cDtpZihcInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9Yy5zZWxlY3RvcihhKXx8YSksaShhKSYmKGE9ZChhKSksaihhKSlmb3IobD1hLmxlbmd0aDstLWw+LTE7KWYua2lsbENoaWxkVHdlZW5zT2YoYVtsXSxiKTtlbHNle2U9W107Zm9yKGsgaW4gbilmb3IoZz1uW2tdLnRhcmdldC5wYXJlbnROb2RlO2c7KWc9PT1hJiYoZT1lLmNvbmNhdChuW2tdLnR3ZWVucykpLGc9Zy5wYXJlbnROb2RlO2ZvcihtPWUubGVuZ3RoLGw9MDttPmw7bCsrKWImJmVbbF0udG90YWxUaW1lKGVbbF0udG90YWxEdXJhdGlvbigpKSxlW2xdLl9lbmFibGVkKCExLCExKX19fTt2YXIgbz1mdW5jdGlvbihhLGMsZCxlKXtjPWMhPT0hMSxkPWQhPT0hMSxlPWUhPT0hMTtmb3IodmFyIGYsZyxoPW4oZSksaT1jJiZkJiZlLGo9aC5sZW5ndGg7LS1qPi0xOylnPWhbal0sKGl8fGcgaW5zdGFuY2VvZiBifHwoZj1nLnRhcmdldD09PWcudmFycy5vbkNvbXBsZXRlKSYmZHx8YyYmIWYpJiZnLnBhdXNlZChhKX07cmV0dXJuIGYucGF1c2VBbGw9ZnVuY3Rpb24oYSxiLGMpe28oITAsYSxiLGMpfSxmLnJlc3VtZUFsbD1mdW5jdGlvbihhLGIsYyl7byghMSxhLGIsYyl9LGYuZ2xvYmFsVGltZVNjYWxlPWZ1bmN0aW9uKGIpe3ZhciBkPWEuX3Jvb3RUaW1lbGluZSxlPWMudGlja2VyLnRpbWU7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGI9Ynx8ZyxkLl9zdGFydFRpbWU9ZS0oZS1kLl9zdGFydFRpbWUpKmQuX3RpbWVTY2FsZS9iLGQ9YS5fcm9vdEZyYW1lc1RpbWVsaW5lLGU9Yy50aWNrZXIuZnJhbWUsZC5fc3RhcnRUaW1lPWUtKGUtZC5fc3RhcnRUaW1lKSpkLl90aW1lU2NhbGUvYixkLl90aW1lU2NhbGU9YS5fcm9vdFRpbWVsaW5lLl90aW1lU2NhbGU9YixiKTpkLl90aW1lU2NhbGV9LGsucHJvZ3Jlc3M9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD90aGlzLnRvdGFsVGltZSh0aGlzLmR1cmF0aW9uKCkqKHRoaXMuX3lveW8mJjAhPT0oMSZ0aGlzLl9jeWNsZSk/MS1hOmEpK3RoaXMuX2N5Y2xlKih0aGlzLl9kdXJhdGlvbit0aGlzLl9yZXBlYXREZWxheSksYik6dGhpcy5fdGltZS90aGlzLmR1cmF0aW9uKCl9LGsudG90YWxQcm9ncmVzcz1mdW5jdGlvbihhLGIpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMudG90YWxUaW1lKHRoaXMudG90YWxEdXJhdGlvbigpKmEsYik6dGhpcy5fdG90YWxUaW1lL3RoaXMudG90YWxEdXJhdGlvbigpfSxrLnRpbWU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZGlydHkmJnRoaXMudG90YWxEdXJhdGlvbigpLGE+dGhpcy5fZHVyYXRpb24mJihhPXRoaXMuX2R1cmF0aW9uKSx0aGlzLl95b3lvJiYwIT09KDEmdGhpcy5fY3ljbGUpP2E9dGhpcy5fZHVyYXRpb24tYSt0aGlzLl9jeWNsZSoodGhpcy5fZHVyYXRpb24rdGhpcy5fcmVwZWF0RGVsYXkpOjAhPT10aGlzLl9yZXBlYXQmJihhKz10aGlzLl9jeWNsZSoodGhpcy5fZHVyYXRpb24rdGhpcy5fcmVwZWF0RGVsYXkpKSx0aGlzLnRvdGFsVGltZShhLGIpKTp0aGlzLl90aW1lfSxrLmR1cmF0aW9uPWZ1bmN0aW9uKGIpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP2EucHJvdG90eXBlLmR1cmF0aW9uLmNhbGwodGhpcyxiKTp0aGlzLl9kdXJhdGlvbn0say50b3RhbER1cmF0aW9uPWZ1bmN0aW9uKGEpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPy0xPT09dGhpcy5fcmVwZWF0P3RoaXM6dGhpcy5kdXJhdGlvbigoYS10aGlzLl9yZXBlYXQqdGhpcy5fcmVwZWF0RGVsYXkpLyh0aGlzLl9yZXBlYXQrMSkpOih0aGlzLl9kaXJ0eSYmKHRoaXMuX3RvdGFsRHVyYXRpb249LTE9PT10aGlzLl9yZXBlYXQ/OTk5OTk5OTk5OTk5OnRoaXMuX2R1cmF0aW9uKih0aGlzLl9yZXBlYXQrMSkrdGhpcy5fcmVwZWF0RGVsYXkqdGhpcy5fcmVwZWF0LHRoaXMuX2RpcnR5PSExKSx0aGlzLl90b3RhbER1cmF0aW9uKX0say5yZXBlYXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX3JlcGVhdD1hLHRoaXMuX3VuY2FjaGUoITApKTp0aGlzLl9yZXBlYXR9LGsucmVwZWF0RGVsYXk9ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX3JlcGVhdERlbGF5PWEsdGhpcy5fdW5jYWNoZSghMCkpOnRoaXMuX3JlcGVhdERlbGF5fSxrLnlveW89ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX3lveW89YSx0aGlzKTp0aGlzLl95b3lvfSxmfSwhMCksX2dzU2NvcGUuX2dzRGVmaW5lKFwiVGltZWxpbmVMaXRlXCIsW1wiY29yZS5BbmltYXRpb25cIixcImNvcmUuU2ltcGxlVGltZWxpbmVcIixcIlR3ZWVuTGl0ZVwiXSxmdW5jdGlvbihhLGIsYyl7dmFyIGQ9ZnVuY3Rpb24oYSl7Yi5jYWxsKHRoaXMsYSksdGhpcy5fbGFiZWxzPXt9LHRoaXMuYXV0b1JlbW92ZUNoaWxkcmVuPXRoaXMudmFycy5hdXRvUmVtb3ZlQ2hpbGRyZW49PT0hMCx0aGlzLnNtb290aENoaWxkVGltaW5nPXRoaXMudmFycy5zbW9vdGhDaGlsZFRpbWluZz09PSEwLHRoaXMuX3NvcnRDaGlsZHJlbj0hMCx0aGlzLl9vblVwZGF0ZT10aGlzLnZhcnMub25VcGRhdGU7dmFyIGMsZCxlPXRoaXMudmFycztmb3IoZCBpbiBlKWM9ZVtkXSxpKGMpJiYtMSE9PWMuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpJiYoZVtkXT10aGlzLl9zd2FwU2VsZkluUGFyYW1zKGMpKTtpKGUudHdlZW5zKSYmdGhpcy5hZGQoZS50d2VlbnMsMCxlLmFsaWduLGUuc3RhZ2dlcil9LGU9MWUtMTAsZj1jLl9pbnRlcm5hbHMsZz1kLl9pbnRlcm5hbHM9e30saD1mLmlzU2VsZWN0b3IsaT1mLmlzQXJyYXksaj1mLmxhenlUd2VlbnMsaz1mLmxhenlSZW5kZXIsbD1fZ3NTY29wZS5fZ3NEZWZpbmUuZ2xvYmFscyxtPWZ1bmN0aW9uKGEpe3ZhciBiLGM9e307Zm9yKGIgaW4gYSljW2JdPWFbYl07cmV0dXJuIGN9LG49ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLmN5Y2xlO2ZvcihkIGluIGYpZT1mW2RdLGFbZF09XCJmdW5jdGlvblwiPT10eXBlb2YgZT9lKGMsYltjXSk6ZVtjJWUubGVuZ3RoXTtkZWxldGUgYS5jeWNsZX0sbz1nLnBhdXNlQ2FsbGJhY2s9ZnVuY3Rpb24oKXt9LHA9ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPWEubGVuZ3RoO2ZvcihiPTA7YiE9PWQ7Yy5wdXNoKGFbYisrXSkpO3JldHVybiBjfSxxPWQucHJvdG90eXBlPW5ldyBiO3JldHVybiBkLnZlcnNpb249XCIxLjIwLjJcIixxLmNvbnN0cnVjdG9yPWQscS5raWxsKCkuX2djPXEuX2ZvcmNpbmdQbGF5aGVhZD1xLl9oYXNQYXVzZT0hMSxxLnRvPWZ1bmN0aW9uKGEsYixkLGUpe3ZhciBmPWQucmVwZWF0JiZsLlR3ZWVuTWF4fHxjO3JldHVybiBiP3RoaXMuYWRkKG5ldyBmKGEsYixkKSxlKTp0aGlzLnNldChhLGQsZSl9LHEuZnJvbT1mdW5jdGlvbihhLGIsZCxlKXtyZXR1cm4gdGhpcy5hZGQoKGQucmVwZWF0JiZsLlR3ZWVuTWF4fHxjKS5mcm9tKGEsYixkKSxlKX0scS5mcm9tVG89ZnVuY3Rpb24oYSxiLGQsZSxmKXt2YXIgZz1lLnJlcGVhdCYmbC5Ud2Vlbk1heHx8YztyZXR1cm4gYj90aGlzLmFkZChnLmZyb21UbyhhLGIsZCxlKSxmKTp0aGlzLnNldChhLGUsZil9LHEuc3RhZ2dlclRvPWZ1bmN0aW9uKGEsYixlLGYsZyxpLGosayl7dmFyIGwsbyxxPW5ldyBkKHtvbkNvbXBsZXRlOmksb25Db21wbGV0ZVBhcmFtczpqLGNhbGxiYWNrU2NvcGU6ayxzbW9vdGhDaGlsZFRpbWluZzp0aGlzLnNtb290aENoaWxkVGltaW5nfSkscj1lLmN5Y2xlO2ZvcihcInN0cmluZ1wiPT10eXBlb2YgYSYmKGE9Yy5zZWxlY3RvcihhKXx8YSksYT1hfHxbXSxoKGEpJiYoYT1wKGEpKSxmPWZ8fDAsMD5mJiYoYT1wKGEpLGEucmV2ZXJzZSgpLGYqPS0xKSxvPTA7bzxhLmxlbmd0aDtvKyspbD1tKGUpLGwuc3RhcnRBdCYmKGwuc3RhcnRBdD1tKGwuc3RhcnRBdCksbC5zdGFydEF0LmN5Y2xlJiZuKGwuc3RhcnRBdCxhLG8pKSxyJiYobihsLGEsbyksbnVsbCE9bC5kdXJhdGlvbiYmKGI9bC5kdXJhdGlvbixkZWxldGUgbC5kdXJhdGlvbikpLHEudG8oYVtvXSxiLGwsbypmKTtyZXR1cm4gdGhpcy5hZGQocSxnKX0scS5zdGFnZ2VyRnJvbT1mdW5jdGlvbihhLGIsYyxkLGUsZixnLGgpe3JldHVybiBjLmltbWVkaWF0ZVJlbmRlcj0wIT1jLmltbWVkaWF0ZVJlbmRlcixjLnJ1bkJhY2t3YXJkcz0hMCx0aGlzLnN0YWdnZXJUbyhhLGIsYyxkLGUsZixnLGgpfSxxLnN0YWdnZXJGcm9tVG89ZnVuY3Rpb24oYSxiLGMsZCxlLGYsZyxoLGkpe3JldHVybiBkLnN0YXJ0QXQ9YyxkLmltbWVkaWF0ZVJlbmRlcj0wIT1kLmltbWVkaWF0ZVJlbmRlciYmMCE9Yy5pbW1lZGlhdGVSZW5kZXIsdGhpcy5zdGFnZ2VyVG8oYSxiLGQsZSxmLGcsaCxpKX0scS5jYWxsPWZ1bmN0aW9uKGEsYixkLGUpe3JldHVybiB0aGlzLmFkZChjLmRlbGF5ZWRDYWxsKDAsYSxiLGQpLGUpfSxxLnNldD1mdW5jdGlvbihhLGIsZCl7cmV0dXJuIGQ9dGhpcy5fcGFyc2VUaW1lT3JMYWJlbChkLDAsITApLG51bGw9PWIuaW1tZWRpYXRlUmVuZGVyJiYoYi5pbW1lZGlhdGVSZW5kZXI9ZD09PXRoaXMuX3RpbWUmJiF0aGlzLl9wYXVzZWQpLHRoaXMuYWRkKG5ldyBjKGEsMCxiKSxkKX0sZC5leHBvcnRSb290PWZ1bmN0aW9uKGEsYil7YT1hfHx7fSxudWxsPT1hLnNtb290aENoaWxkVGltaW5nJiYoYS5zbW9vdGhDaGlsZFRpbWluZz0hMCk7dmFyIGUsZixnPW5ldyBkKGEpLGg9Zy5fdGltZWxpbmU7Zm9yKG51bGw9PWImJihiPSEwKSxoLl9yZW1vdmUoZywhMCksZy5fc3RhcnRUaW1lPTAsZy5fcmF3UHJldlRpbWU9Zy5fdGltZT1nLl90b3RhbFRpbWU9aC5fdGltZSxlPWguX2ZpcnN0O2U7KWY9ZS5fbmV4dCxiJiZlIGluc3RhbmNlb2YgYyYmZS50YXJnZXQ9PT1lLnZhcnMub25Db21wbGV0ZXx8Zy5hZGQoZSxlLl9zdGFydFRpbWUtZS5fZGVsYXkpLGU9ZjtyZXR1cm4gaC5hZGQoZywwKSxnfSxxLmFkZD1mdW5jdGlvbihlLGYsZyxoKXt2YXIgaixrLGwsbSxuLG87aWYoXCJudW1iZXJcIiE9dHlwZW9mIGYmJihmPXRoaXMuX3BhcnNlVGltZU9yTGFiZWwoZiwwLCEwLGUpKSwhKGUgaW5zdGFuY2VvZiBhKSl7aWYoZSBpbnN0YW5jZW9mIEFycmF5fHxlJiZlLnB1c2gmJmkoZSkpe2ZvcihnPWd8fFwibm9ybWFsXCIsaD1ofHwwLGo9ZixrPWUubGVuZ3RoLGw9MDtrPmw7bCsrKWkobT1lW2xdKSYmKG09bmV3IGQoe3R3ZWVuczptfSkpLHRoaXMuYWRkKG0saiksXCJzdHJpbmdcIiE9dHlwZW9mIG0mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG0mJihcInNlcXVlbmNlXCI9PT1nP2o9bS5fc3RhcnRUaW1lK20udG90YWxEdXJhdGlvbigpL20uX3RpbWVTY2FsZTpcInN0YXJ0XCI9PT1nJiYobS5fc3RhcnRUaW1lLT1tLmRlbGF5KCkpKSxqKz1oO3JldHVybiB0aGlzLl91bmNhY2hlKCEwKX1pZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gdGhpcy5hZGRMYWJlbChlLGYpO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGUpdGhyb3dcIkNhbm5vdCBhZGQgXCIrZStcIiBpbnRvIHRoZSB0aW1lbGluZTsgaXQgaXMgbm90IGEgdHdlZW4sIHRpbWVsaW5lLCBmdW5jdGlvbiwgb3Igc3RyaW5nLlwiO2U9Yy5kZWxheWVkQ2FsbCgwLGUpfWlmKGIucHJvdG90eXBlLmFkZC5jYWxsKHRoaXMsZSxmKSxlLl90aW1lJiZlLnJlbmRlcigodGhpcy5yYXdUaW1lKCktZS5fc3RhcnRUaW1lKSplLl90aW1lU2NhbGUsITEsITEpLCh0aGlzLl9nY3x8dGhpcy5fdGltZT09PXRoaXMuX2R1cmF0aW9uKSYmIXRoaXMuX3BhdXNlZCYmdGhpcy5fZHVyYXRpb248dGhpcy5kdXJhdGlvbigpKWZvcihuPXRoaXMsbz1uLnJhd1RpbWUoKT5lLl9zdGFydFRpbWU7bi5fdGltZWxpbmU7KW8mJm4uX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nP24udG90YWxUaW1lKG4uX3RvdGFsVGltZSwhMCk6bi5fZ2MmJm4uX2VuYWJsZWQoITAsITEpLG49bi5fdGltZWxpbmU7cmV0dXJuIHRoaXN9LHEucmVtb3ZlPWZ1bmN0aW9uKGIpe2lmKGIgaW5zdGFuY2VvZiBhKXt0aGlzLl9yZW1vdmUoYiwhMSk7dmFyIGM9Yi5fdGltZWxpbmU9Yi52YXJzLnVzZUZyYW1lcz9hLl9yb290RnJhbWVzVGltZWxpbmU6YS5fcm9vdFRpbWVsaW5lO3JldHVybiBiLl9zdGFydFRpbWU9KGIuX3BhdXNlZD9iLl9wYXVzZVRpbWU6Yy5fdGltZSktKGIuX3JldmVyc2VkP2IudG90YWxEdXJhdGlvbigpLWIuX3RvdGFsVGltZTpiLl90b3RhbFRpbWUpL2IuX3RpbWVTY2FsZSx0aGlzfWlmKGIgaW5zdGFuY2VvZiBBcnJheXx8YiYmYi5wdXNoJiZpKGIpKXtmb3IodmFyIGQ9Yi5sZW5ndGg7LS1kPi0xOyl0aGlzLnJlbW92ZShiW2RdKTtyZXR1cm4gdGhpc31yZXR1cm5cInN0cmluZ1wiPT10eXBlb2YgYj90aGlzLnJlbW92ZUxhYmVsKGIpOnRoaXMua2lsbChudWxsLGIpfSxxLl9yZW1vdmU9ZnVuY3Rpb24oYSxjKXtiLnByb3RvdHlwZS5fcmVtb3ZlLmNhbGwodGhpcyxhLGMpO3ZhciBkPXRoaXMuX2xhc3Q7cmV0dXJuIGQ/dGhpcy5fdGltZT50aGlzLmR1cmF0aW9uKCkmJih0aGlzLl90aW1lPXRoaXMuX2R1cmF0aW9uLHRoaXMuX3RvdGFsVGltZT10aGlzLl90b3RhbER1cmF0aW9uKTp0aGlzLl90aW1lPXRoaXMuX3RvdGFsVGltZT10aGlzLl9kdXJhdGlvbj10aGlzLl90b3RhbER1cmF0aW9uPTAsdGhpc30scS5hcHBlbmQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5hZGQoYSx0aGlzLl9wYXJzZVRpbWVPckxhYmVsKG51bGwsYiwhMCxhKSl9LHEuaW5zZXJ0PXEuaW5zZXJ0TXVsdGlwbGU9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIHRoaXMuYWRkKGEsYnx8MCxjLGQpfSxxLmFwcGVuZE11bHRpcGxlPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLmFkZChhLHRoaXMuX3BhcnNlVGltZU9yTGFiZWwobnVsbCxiLCEwLGEpLGMsZCl9LHEuYWRkTGFiZWw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5fbGFiZWxzW2FdPXRoaXMuX3BhcnNlVGltZU9yTGFiZWwoYiksdGhpc30scS5hZGRQYXVzZT1mdW5jdGlvbihhLGIsZCxlKXt2YXIgZj1jLmRlbGF5ZWRDYWxsKDAsbyxkLGV8fHRoaXMpO3JldHVybiBmLnZhcnMub25Db21wbGV0ZT1mLnZhcnMub25SZXZlcnNlQ29tcGxldGU9YixmLmRhdGE9XCJpc1BhdXNlXCIsdGhpcy5faGFzUGF1c2U9ITAsdGhpcy5hZGQoZixhKX0scS5yZW1vdmVMYWJlbD1mdW5jdGlvbihhKXtyZXR1cm4gZGVsZXRlIHRoaXMuX2xhYmVsc1thXSx0aGlzfSxxLmdldExhYmVsVGltZT1mdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9dGhpcy5fbGFiZWxzW2FdP3RoaXMuX2xhYmVsc1thXTotMX0scS5fcGFyc2VUaW1lT3JMYWJlbD1mdW5jdGlvbihiLGMsZCxlKXt2YXIgZixnO2lmKGUgaW5zdGFuY2VvZiBhJiZlLnRpbWVsaW5lPT09dGhpcyl0aGlzLnJlbW92ZShlKTtlbHNlIGlmKGUmJihlIGluc3RhbmNlb2YgQXJyYXl8fGUucHVzaCYmaShlKSkpZm9yKGc9ZS5sZW5ndGg7LS1nPi0xOyllW2ddaW5zdGFuY2VvZiBhJiZlW2ddLnRpbWVsaW5lPT09dGhpcyYmdGhpcy5yZW1vdmUoZVtnXSk7aWYoZj10aGlzLmR1cmF0aW9uKCk+OTk5OTk5OTk5OTk/dGhpcy5yZWNlbnQoKS5lbmRUaW1lKCExKTp0aGlzLl9kdXJhdGlvbixcInN0cmluZ1wiPT10eXBlb2YgYylyZXR1cm4gdGhpcy5fcGFyc2VUaW1lT3JMYWJlbChjLGQmJlwibnVtYmVyXCI9PXR5cGVvZiBiJiZudWxsPT10aGlzLl9sYWJlbHNbY10/Yi1mOjAsZCk7aWYoYz1jfHwwLFwic3RyaW5nXCIhPXR5cGVvZiBifHwhaXNOYU4oYikmJm51bGw9PXRoaXMuX2xhYmVsc1tiXSludWxsPT1iJiYoYj1mKTtlbHNle2lmKGc9Yi5pbmRleE9mKFwiPVwiKSwtMT09PWcpcmV0dXJuIG51bGw9PXRoaXMuX2xhYmVsc1tiXT9kP3RoaXMuX2xhYmVsc1tiXT1mK2M6Yzp0aGlzLl9sYWJlbHNbYl0rYztjPXBhcnNlSW50KGIuY2hhckF0KGctMSkrXCIxXCIsMTApKk51bWJlcihiLnN1YnN0cihnKzEpKSxiPWc+MT90aGlzLl9wYXJzZVRpbWVPckxhYmVsKGIuc3Vic3RyKDAsZy0xKSwwLGQpOmZ9cmV0dXJuIE51bWJlcihiKStjfSxxLnNlZWs9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy50b3RhbFRpbWUoXCJudW1iZXJcIj09dHlwZW9mIGE/YTp0aGlzLl9wYXJzZVRpbWVPckxhYmVsKGEpLGIhPT0hMSl9LHEuc3RvcD1mdW5jdGlvbigpe3JldHVybiB0aGlzLnBhdXNlZCghMCl9LHEuZ290b0FuZFBsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wbGF5KGEsYil9LHEuZ290b0FuZFN0b3A9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5wYXVzZShhLGIpfSxxLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7dGhpcy5fZ2MmJnRoaXMuX2VuYWJsZWQoITAsITEpO3ZhciBkLGYsZyxoLGksbCxtLG49dGhpcy5fZGlydHk/dGhpcy50b3RhbER1cmF0aW9uKCk6dGhpcy5fdG90YWxEdXJhdGlvbixvPXRoaXMuX3RpbWUscD10aGlzLl9zdGFydFRpbWUscT10aGlzLl90aW1lU2NhbGUscj10aGlzLl9wYXVzZWQ7aWYoYT49bi0xZS03JiZhPj0wKXRoaXMuX3RvdGFsVGltZT10aGlzLl90aW1lPW4sdGhpcy5fcmV2ZXJzZWR8fHRoaXMuX2hhc1BhdXNlZENoaWxkKCl8fChmPSEwLGg9XCJvbkNvbXBsZXRlXCIsaT0hIXRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiwwPT09dGhpcy5fZHVyYXRpb24mJigwPj1hJiZhPj0tMWUtN3x8dGhpcy5fcmF3UHJldlRpbWU8MHx8dGhpcy5fcmF3UHJldlRpbWU9PT1lKSYmdGhpcy5fcmF3UHJldlRpbWUhPT1hJiZ0aGlzLl9maXJzdCYmKGk9ITAsdGhpcy5fcmF3UHJldlRpbWU+ZSYmKGg9XCJvblJldmVyc2VDb21wbGV0ZVwiKSkpLHRoaXMuX3Jhd1ByZXZUaW1lPXRoaXMuX2R1cmF0aW9ufHwhYnx8YXx8dGhpcy5fcmF3UHJldlRpbWU9PT1hP2E6ZSxhPW4rMWUtNDtlbHNlIGlmKDFlLTc+YSlpZih0aGlzLl90b3RhbFRpbWU9dGhpcy5fdGltZT0wLCgwIT09b3x8MD09PXRoaXMuX2R1cmF0aW9uJiZ0aGlzLl9yYXdQcmV2VGltZSE9PWUmJih0aGlzLl9yYXdQcmV2VGltZT4wfHwwPmEmJnRoaXMuX3Jhd1ByZXZUaW1lPj0wKSkmJihoPVwib25SZXZlcnNlQ29tcGxldGVcIixmPXRoaXMuX3JldmVyc2VkKSwwPmEpdGhpcy5fYWN0aXZlPSExLHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiYmdGhpcy5fcmV2ZXJzZWQ/KGk9Zj0hMCxoPVwib25SZXZlcnNlQ29tcGxldGVcIik6dGhpcy5fcmF3UHJldlRpbWU+PTAmJnRoaXMuX2ZpcnN0JiYoaT0hMCksdGhpcy5fcmF3UHJldlRpbWU9YTtlbHNle2lmKHRoaXMuX3Jhd1ByZXZUaW1lPXRoaXMuX2R1cmF0aW9ufHwhYnx8YXx8dGhpcy5fcmF3UHJldlRpbWU9PT1hP2E6ZSwwPT09YSYmZilmb3IoZD10aGlzLl9maXJzdDtkJiYwPT09ZC5fc3RhcnRUaW1lOylkLl9kdXJhdGlvbnx8KGY9ITEpLGQ9ZC5fbmV4dDthPTAsdGhpcy5faW5pdHRlZHx8KGk9ITApfWVsc2V7aWYodGhpcy5faGFzUGF1c2UmJiF0aGlzLl9mb3JjaW5nUGxheWhlYWQmJiFiKXtpZihhPj1vKWZvcihkPXRoaXMuX2ZpcnN0O2QmJmQuX3N0YXJ0VGltZTw9YSYmIWw7KWQuX2R1cmF0aW9ufHxcImlzUGF1c2VcIiE9PWQuZGF0YXx8ZC5yYXRpb3x8MD09PWQuX3N0YXJ0VGltZSYmMD09PXRoaXMuX3Jhd1ByZXZUaW1lfHwobD1kKSxkPWQuX25leHQ7ZWxzZSBmb3IoZD10aGlzLl9sYXN0O2QmJmQuX3N0YXJ0VGltZT49YSYmIWw7KWQuX2R1cmF0aW9ufHxcImlzUGF1c2VcIj09PWQuZGF0YSYmZC5fcmF3UHJldlRpbWU+MCYmKGw9ZCksZD1kLl9wcmV2O2wmJih0aGlzLl90aW1lPWE9bC5fc3RhcnRUaW1lLHRoaXMuX3RvdGFsVGltZT1hK3RoaXMuX2N5Y2xlKih0aGlzLl90b3RhbER1cmF0aW9uK3RoaXMuX3JlcGVhdERlbGF5KSl9dGhpcy5fdG90YWxUaW1lPXRoaXMuX3RpbWU9dGhpcy5fcmF3UHJldlRpbWU9YX1pZih0aGlzLl90aW1lIT09byYmdGhpcy5fZmlyc3R8fGN8fGl8fGwpe2lmKHRoaXMuX2luaXR0ZWR8fCh0aGlzLl9pbml0dGVkPSEwKSx0aGlzLl9hY3RpdmV8fCF0aGlzLl9wYXVzZWQmJnRoaXMuX3RpbWUhPT1vJiZhPjAmJih0aGlzLl9hY3RpdmU9ITApLDA9PT1vJiZ0aGlzLnZhcnMub25TdGFydCYmKDA9PT10aGlzLl90aW1lJiZ0aGlzLl9kdXJhdGlvbnx8Ynx8dGhpcy5fY2FsbGJhY2soXCJvblN0YXJ0XCIpKSxtPXRoaXMuX3RpbWUsbT49bylmb3IoZD10aGlzLl9maXJzdDtkJiYoZz1kLl9uZXh0LG09PT10aGlzLl90aW1lJiYoIXRoaXMuX3BhdXNlZHx8cikpOykoZC5fYWN0aXZlfHxkLl9zdGFydFRpbWU8PW0mJiFkLl9wYXVzZWQmJiFkLl9nYykmJihsPT09ZCYmdGhpcy5wYXVzZSgpLGQuX3JldmVyc2VkP2QucmVuZGVyKChkLl9kaXJ0eT9kLnRvdGFsRHVyYXRpb24oKTpkLl90b3RhbER1cmF0aW9uKS0oYS1kLl9zdGFydFRpbWUpKmQuX3RpbWVTY2FsZSxiLGMpOmQucmVuZGVyKChhLWQuX3N0YXJ0VGltZSkqZC5fdGltZVNjYWxlLGIsYykpLGQ9ZztlbHNlIGZvcihkPXRoaXMuX2xhc3Q7ZCYmKGc9ZC5fcHJldixtPT09dGhpcy5fdGltZSYmKCF0aGlzLl9wYXVzZWR8fHIpKTspe2lmKGQuX2FjdGl2ZXx8ZC5fc3RhcnRUaW1lPD1vJiYhZC5fcGF1c2VkJiYhZC5fZ2Mpe2lmKGw9PT1kKXtmb3IobD1kLl9wcmV2O2wmJmwuZW5kVGltZSgpPnRoaXMuX3RpbWU7KWwucmVuZGVyKGwuX3JldmVyc2VkP2wudG90YWxEdXJhdGlvbigpLShhLWwuX3N0YXJ0VGltZSkqbC5fdGltZVNjYWxlOihhLWwuX3N0YXJ0VGltZSkqbC5fdGltZVNjYWxlLGIsYyksbD1sLl9wcmV2O2w9bnVsbCx0aGlzLnBhdXNlKCl9ZC5fcmV2ZXJzZWQ/ZC5yZW5kZXIoKGQuX2RpcnR5P2QudG90YWxEdXJhdGlvbigpOmQuX3RvdGFsRHVyYXRpb24pLShhLWQuX3N0YXJ0VGltZSkqZC5fdGltZVNjYWxlLGIsYyk6ZC5yZW5kZXIoKGEtZC5fc3RhcnRUaW1lKSpkLl90aW1lU2NhbGUsYixjKX1kPWd9dGhpcy5fb25VcGRhdGUmJihifHwoai5sZW5ndGgmJmsoKSx0aGlzLl9jYWxsYmFjayhcIm9uVXBkYXRlXCIpKSksaCYmKHRoaXMuX2djfHwocD09PXRoaXMuX3N0YXJ0VGltZXx8cSE9PXRoaXMuX3RpbWVTY2FsZSkmJigwPT09dGhpcy5fdGltZXx8bj49dGhpcy50b3RhbER1cmF0aW9uKCkpJiYoZiYmKGoubGVuZ3RoJiZrKCksdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuJiZ0aGlzLl9lbmFibGVkKCExLCExKSx0aGlzLl9hY3RpdmU9ITEpLCFiJiZ0aGlzLnZhcnNbaF0mJnRoaXMuX2NhbGxiYWNrKGgpKSl9fSxxLl9oYXNQYXVzZWRDaGlsZD1mdW5jdGlvbigpe2Zvcih2YXIgYT10aGlzLl9maXJzdDthOyl7aWYoYS5fcGF1c2VkfHxhIGluc3RhbmNlb2YgZCYmYS5faGFzUGF1c2VkQ2hpbGQoKSlyZXR1cm4hMDthPWEuX25leHR9cmV0dXJuITF9LHEuZ2V0Q2hpbGRyZW49ZnVuY3Rpb24oYSxiLGQsZSl7ZT1lfHwtOTk5OTk5OTk5OTtmb3IodmFyIGY9W10sZz10aGlzLl9maXJzdCxoPTA7ZzspZy5fc3RhcnRUaW1lPGV8fChnIGluc3RhbmNlb2YgYz9iIT09ITEmJihmW2grK109Zyk6KGQhPT0hMSYmKGZbaCsrXT1nKSxhIT09ITEmJihmPWYuY29uY2F0KGcuZ2V0Q2hpbGRyZW4oITAsYixkKSksaD1mLmxlbmd0aCkpKSxnPWcuX25leHQ7cmV0dXJuIGZ9LHEuZ2V0VHdlZW5zT2Y9ZnVuY3Rpb24oYSxiKXt2YXIgZCxlLGY9dGhpcy5fZ2MsZz1bXSxoPTA7Zm9yKGYmJnRoaXMuX2VuYWJsZWQoITAsITApLGQ9Yy5nZXRUd2VlbnNPZihhKSxlPWQubGVuZ3RoOy0tZT4tMTspKGRbZV0udGltZWxpbmU9PT10aGlzfHxiJiZ0aGlzLl9jb250YWlucyhkW2VdKSkmJihnW2grK109ZFtlXSk7cmV0dXJuIGYmJnRoaXMuX2VuYWJsZWQoITEsITApLGd9LHEucmVjZW50PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX3JlY2VudH0scS5fY29udGFpbnM9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEudGltZWxpbmU7Yjspe2lmKGI9PT10aGlzKXJldHVybiEwO2I9Yi50aW1lbGluZX1yZXR1cm4hMX0scS5zaGlmdENoaWxkcmVuPWZ1bmN0aW9uKGEsYixjKXtjPWN8fDA7Zm9yKHZhciBkLGU9dGhpcy5fZmlyc3QsZj10aGlzLl9sYWJlbHM7ZTspZS5fc3RhcnRUaW1lPj1jJiYoZS5fc3RhcnRUaW1lKz1hKSxlPWUuX25leHQ7aWYoYilmb3IoZCBpbiBmKWZbZF0+PWMmJihmW2RdKz1hKTtyZXR1cm4gdGhpcy5fdW5jYWNoZSghMCl9LHEuX2tpbGw9ZnVuY3Rpb24oYSxiKXtpZighYSYmIWIpcmV0dXJuIHRoaXMuX2VuYWJsZWQoITEsITEpO2Zvcih2YXIgYz1iP3RoaXMuZ2V0VHdlZW5zT2YoYik6dGhpcy5nZXRDaGlsZHJlbighMCwhMCwhMSksZD1jLmxlbmd0aCxlPSExOy0tZD4tMTspY1tkXS5fa2lsbChhLGIpJiYoZT0hMCk7cmV0dXJuIGV9LHEuY2xlYXI9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5nZXRDaGlsZHJlbighMSwhMCwhMCksYz1iLmxlbmd0aDtmb3IodGhpcy5fdGltZT10aGlzLl90b3RhbFRpbWU9MDstLWM+LTE7KWJbY10uX2VuYWJsZWQoITEsITEpO3JldHVybiBhIT09ITEmJih0aGlzLl9sYWJlbHM9e30pLHRoaXMuX3VuY2FjaGUoITApfSxxLmludmFsaWRhdGU9ZnVuY3Rpb24oKXtmb3IodmFyIGI9dGhpcy5fZmlyc3Q7YjspYi5pbnZhbGlkYXRlKCksYj1iLl9uZXh0O3JldHVybiBhLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyl9LHEuX2VuYWJsZWQ9ZnVuY3Rpb24oYSxjKXtpZihhPT09dGhpcy5fZ2MpZm9yKHZhciBkPXRoaXMuX2ZpcnN0O2Q7KWQuX2VuYWJsZWQoYSwhMCksZD1kLl9uZXh0O3JldHVybiBiLnByb3RvdHlwZS5fZW5hYmxlZC5jYWxsKHRoaXMsYSxjKX0scS50b3RhbFRpbWU9ZnVuY3Rpb24oYixjLGQpe3RoaXMuX2ZvcmNpbmdQbGF5aGVhZD0hMDt2YXIgZT1hLnByb3RvdHlwZS50b3RhbFRpbWUuYXBwbHkodGhpcyxhcmd1bWVudHMpO3JldHVybiB0aGlzLl9mb3JjaW5nUGxheWhlYWQ9ITEsZX0scS5kdXJhdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oMCE9PXRoaXMuZHVyYXRpb24oKSYmMCE9PWEmJnRoaXMudGltZVNjYWxlKHRoaXMuX2R1cmF0aW9uL2EpLHRoaXMpOih0aGlzLl9kaXJ0eSYmdGhpcy50b3RhbER1cmF0aW9uKCksdGhpcy5fZHVyYXRpb24pfSxxLnRvdGFsRHVyYXRpb249ZnVuY3Rpb24oYSl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpe2lmKHRoaXMuX2RpcnR5KXtmb3IodmFyIGIsYyxkPTAsZT10aGlzLl9sYXN0LGY9OTk5OTk5OTk5OTk5O2U7KWI9ZS5fcHJldixlLl9kaXJ0eSYmZS50b3RhbER1cmF0aW9uKCksZS5fc3RhcnRUaW1lPmYmJnRoaXMuX3NvcnRDaGlsZHJlbiYmIWUuX3BhdXNlZD90aGlzLmFkZChlLGUuX3N0YXJ0VGltZS1lLl9kZWxheSk6Zj1lLl9zdGFydFRpbWUsZS5fc3RhcnRUaW1lPDAmJiFlLl9wYXVzZWQmJihkLT1lLl9zdGFydFRpbWUsdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcmJih0aGlzLl9zdGFydFRpbWUrPWUuX3N0YXJ0VGltZS90aGlzLl90aW1lU2NhbGUpLHRoaXMuc2hpZnRDaGlsZHJlbigtZS5fc3RhcnRUaW1lLCExLC05OTk5OTk5OTk5KSxmPTApLGM9ZS5fc3RhcnRUaW1lK2UuX3RvdGFsRHVyYXRpb24vZS5fdGltZVNjYWxlLGM+ZCYmKGQ9YyksZT1iO3RoaXMuX2R1cmF0aW9uPXRoaXMuX3RvdGFsRHVyYXRpb249ZCx0aGlzLl9kaXJ0eT0hMX1yZXR1cm4gdGhpcy5fdG90YWxEdXJhdGlvbn1yZXR1cm4gYSYmdGhpcy50b3RhbER1cmF0aW9uKCk/dGhpcy50aW1lU2NhbGUodGhpcy5fdG90YWxEdXJhdGlvbi9hKTp0aGlzfSxxLnBhdXNlZD1mdW5jdGlvbihiKXtpZighYilmb3IodmFyIGM9dGhpcy5fZmlyc3QsZD10aGlzLl90aW1lO2M7KWMuX3N0YXJ0VGltZT09PWQmJlwiaXNQYXVzZVwiPT09Yy5kYXRhJiYoYy5fcmF3UHJldlRpbWU9MCksYz1jLl9uZXh0O3JldHVybiBhLnByb3RvdHlwZS5wYXVzZWQuYXBwbHkodGhpcyxhcmd1bWVudHMpfSxxLnVzZXNGcmFtZXM9ZnVuY3Rpb24oKXtmb3IodmFyIGI9dGhpcy5fdGltZWxpbmU7Yi5fdGltZWxpbmU7KWI9Yi5fdGltZWxpbmU7cmV0dXJuIGI9PT1hLl9yb290RnJhbWVzVGltZWxpbmV9LHEucmF3VGltZT1mdW5jdGlvbihhKXtyZXR1cm4gYSYmKHRoaXMuX3BhdXNlZHx8dGhpcy5fcmVwZWF0JiZ0aGlzLnRpbWUoKT4wJiZ0aGlzLnRvdGFsUHJvZ3Jlc3MoKTwxKT90aGlzLl90b3RhbFRpbWUlKHRoaXMuX2R1cmF0aW9uK3RoaXMuX3JlcGVhdERlbGF5KTp0aGlzLl9wYXVzZWQ/dGhpcy5fdG90YWxUaW1lOih0aGlzLl90aW1lbGluZS5yYXdUaW1lKGEpLXRoaXMuX3N0YXJ0VGltZSkqdGhpcy5fdGltZVNjYWxlfSxkfSwhMCksX2dzU2NvcGUuX2dzRGVmaW5lKFwiVGltZWxpbmVNYXhcIixbXCJUaW1lbGluZUxpdGVcIixcIlR3ZWVuTGl0ZVwiLFwiZWFzaW5nLkVhc2VcIl0sZnVuY3Rpb24oYSxiLGMpe3ZhciBkPWZ1bmN0aW9uKGIpe2EuY2FsbCh0aGlzLGIpLHRoaXMuX3JlcGVhdD10aGlzLnZhcnMucmVwZWF0fHwwLHRoaXMuX3JlcGVhdERlbGF5PXRoaXMudmFycy5yZXBlYXREZWxheXx8MCx0aGlzLl9jeWNsZT0wLHRoaXMuX3lveW89dGhpcy52YXJzLnlveW89PT0hMCx0aGlzLl9kaXJ0eT0hMH0sZT0xZS0xMCxmPWIuX2ludGVybmFscyxnPWYubGF6eVR3ZWVucyxoPWYubGF6eVJlbmRlcixpPV9nc1Njb3BlLl9nc0RlZmluZS5nbG9iYWxzLGo9bmV3IGMobnVsbCxudWxsLDEsMCksaz1kLnByb3RvdHlwZT1uZXcgYTtyZXR1cm4gay5jb25zdHJ1Y3Rvcj1kLGsua2lsbCgpLl9nYz0hMSxkLnZlcnNpb249XCIxLjIwLjJcIixrLmludmFsaWRhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5feW95bz10aGlzLnZhcnMueW95bz09PSEwLHRoaXMuX3JlcGVhdD10aGlzLnZhcnMucmVwZWF0fHwwLHRoaXMuX3JlcGVhdERlbGF5PXRoaXMudmFycy5yZXBlYXREZWxheXx8MCx0aGlzLl91bmNhY2hlKCEwKSxhLnByb3RvdHlwZS5pbnZhbGlkYXRlLmNhbGwodGhpcyl9LGsuYWRkQ2FsbGJhY2s9ZnVuY3Rpb24oYSxjLGQsZSl7cmV0dXJuIHRoaXMuYWRkKGIuZGVsYXllZENhbGwoMCxhLGQsZSksYyl9LGsucmVtb3ZlQ2FsbGJhY2s9ZnVuY3Rpb24oYSxiKXtpZihhKWlmKG51bGw9PWIpdGhpcy5fa2lsbChudWxsLGEpO2Vsc2UgZm9yKHZhciBjPXRoaXMuZ2V0VHdlZW5zT2YoYSwhMSksZD1jLmxlbmd0aCxlPXRoaXMuX3BhcnNlVGltZU9yTGFiZWwoYik7LS1kPi0xOyljW2RdLl9zdGFydFRpbWU9PT1lJiZjW2RdLl9lbmFibGVkKCExLCExKTtyZXR1cm4gdGhpc30say5yZW1vdmVQYXVzZT1mdW5jdGlvbihiKXtyZXR1cm4gdGhpcy5yZW1vdmVDYWxsYmFjayhhLl9pbnRlcm5hbHMucGF1c2VDYWxsYmFjayxiKX0say50d2VlblRvPWZ1bmN0aW9uKGEsYyl7Yz1jfHx7fTt2YXIgZCxlLGYsZz17ZWFzZTpqLHVzZUZyYW1lczp0aGlzLnVzZXNGcmFtZXMoKSxpbW1lZGlhdGVSZW5kZXI6ITF9LGg9Yy5yZXBlYXQmJmkuVHdlZW5NYXh8fGI7Zm9yKGUgaW4gYylnW2VdPWNbZV07cmV0dXJuIGcudGltZT10aGlzLl9wYXJzZVRpbWVPckxhYmVsKGEpLGQ9TWF0aC5hYnMoTnVtYmVyKGcudGltZSktdGhpcy5fdGltZSkvdGhpcy5fdGltZVNjYWxlfHwuMDAxLGY9bmV3IGgodGhpcyxkLGcpLGcub25TdGFydD1mdW5jdGlvbigpe2YudGFyZ2V0LnBhdXNlZCghMCksZi52YXJzLnRpbWUhPT1mLnRhcmdldC50aW1lKCkmJmQ9PT1mLmR1cmF0aW9uKCkmJmYuZHVyYXRpb24oTWF0aC5hYnMoZi52YXJzLnRpbWUtZi50YXJnZXQudGltZSgpKS9mLnRhcmdldC5fdGltZVNjYWxlKSxjLm9uU3RhcnQmJmMub25TdGFydC5hcHBseShjLm9uU3RhcnRTY29wZXx8Yy5jYWxsYmFja1Njb3BlfHxmLGMub25TdGFydFBhcmFtc3x8W10pfSxmfSxrLnR3ZWVuRnJvbVRvPWZ1bmN0aW9uKGEsYixjKXtjPWN8fHt9LGE9dGhpcy5fcGFyc2VUaW1lT3JMYWJlbChhKSxjLnN0YXJ0QXQ9e29uQ29tcGxldGU6dGhpcy5zZWVrLG9uQ29tcGxldGVQYXJhbXM6W2FdLGNhbGxiYWNrU2NvcGU6dGhpc30sYy5pbW1lZGlhdGVSZW5kZXI9Yy5pbW1lZGlhdGVSZW5kZXIhPT0hMTt2YXIgZD10aGlzLnR3ZWVuVG8oYixjKTtyZXR1cm4gZC5kdXJhdGlvbihNYXRoLmFicyhkLnZhcnMudGltZS1hKS90aGlzLl90aW1lU2NhbGV8fC4wMDEpfSxrLnJlbmRlcj1mdW5jdGlvbihhLGIsYyl7dGhpcy5fZ2MmJnRoaXMuX2VuYWJsZWQoITAsITEpO3ZhciBkLGYsaSxqLGssbCxtLG4sbz10aGlzLl9kaXJ0eT90aGlzLnRvdGFsRHVyYXRpb24oKTp0aGlzLl90b3RhbER1cmF0aW9uLHA9dGhpcy5fZHVyYXRpb24scT10aGlzLl90aW1lLHI9dGhpcy5fdG90YWxUaW1lLHM9dGhpcy5fc3RhcnRUaW1lLHQ9dGhpcy5fdGltZVNjYWxlLHU9dGhpcy5fcmF3UHJldlRpbWUsdj10aGlzLl9wYXVzZWQsdz10aGlzLl9jeWNsZTtpZihhPj1vLTFlLTcmJmE+PTApdGhpcy5fbG9ja2VkfHwodGhpcy5fdG90YWxUaW1lPW8sdGhpcy5fY3ljbGU9dGhpcy5fcmVwZWF0KSx0aGlzLl9yZXZlcnNlZHx8dGhpcy5faGFzUGF1c2VkQ2hpbGQoKXx8KGY9ITAsaj1cIm9uQ29tcGxldGVcIixrPSEhdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuLDA9PT10aGlzLl9kdXJhdGlvbiYmKDA+PWEmJmE+PS0xZS03fHwwPnV8fHU9PT1lKSYmdSE9PWEmJnRoaXMuX2ZpcnN0JiYoaz0hMCx1PmUmJihqPVwib25SZXZlcnNlQ29tcGxldGVcIikpKSx0aGlzLl9yYXdQcmV2VGltZT10aGlzLl9kdXJhdGlvbnx8IWJ8fGF8fHRoaXMuX3Jhd1ByZXZUaW1lPT09YT9hOmUsdGhpcy5feW95byYmMCE9PSgxJnRoaXMuX2N5Y2xlKT90aGlzLl90aW1lPWE9MDoodGhpcy5fdGltZT1wLGE9cCsxZS00KTtlbHNlIGlmKDFlLTc+YSlpZih0aGlzLl9sb2NrZWR8fCh0aGlzLl90b3RhbFRpbWU9dGhpcy5fY3ljbGU9MCksdGhpcy5fdGltZT0wLCgwIT09cXx8MD09PXAmJnUhPT1lJiYodT4wfHwwPmEmJnU+PTApJiYhdGhpcy5fbG9ja2VkKSYmKGo9XCJvblJldmVyc2VDb21wbGV0ZVwiLGY9dGhpcy5fcmV2ZXJzZWQpLDA+YSl0aGlzLl9hY3RpdmU9ITEsdGhpcy5fdGltZWxpbmUuYXV0b1JlbW92ZUNoaWxkcmVuJiZ0aGlzLl9yZXZlcnNlZD8oaz1mPSEwLGo9XCJvblJldmVyc2VDb21wbGV0ZVwiKTp1Pj0wJiZ0aGlzLl9maXJzdCYmKGs9ITApLHRoaXMuX3Jhd1ByZXZUaW1lPWE7ZWxzZXtpZih0aGlzLl9yYXdQcmV2VGltZT1wfHwhYnx8YXx8dGhpcy5fcmF3UHJldlRpbWU9PT1hP2E6ZSwwPT09YSYmZilmb3IoZD10aGlzLl9maXJzdDtkJiYwPT09ZC5fc3RhcnRUaW1lOylkLl9kdXJhdGlvbnx8KGY9ITEpLGQ9ZC5fbmV4dDthPTAsdGhpcy5faW5pdHRlZHx8KGs9ITApfWVsc2UgaWYoMD09PXAmJjA+dSYmKGs9ITApLHRoaXMuX3RpbWU9dGhpcy5fcmF3UHJldlRpbWU9YSx0aGlzLl9sb2NrZWR8fCh0aGlzLl90b3RhbFRpbWU9YSwwIT09dGhpcy5fcmVwZWF0JiYobD1wK3RoaXMuX3JlcGVhdERlbGF5LHRoaXMuX2N5Y2xlPXRoaXMuX3RvdGFsVGltZS9sPj4wLDAhPT10aGlzLl9jeWNsZSYmdGhpcy5fY3ljbGU9PT10aGlzLl90b3RhbFRpbWUvbCYmYT49ciYmdGhpcy5fY3ljbGUtLSx0aGlzLl90aW1lPXRoaXMuX3RvdGFsVGltZS10aGlzLl9jeWNsZSpsLHRoaXMuX3lveW8mJjAhPT0oMSZ0aGlzLl9jeWNsZSkmJih0aGlzLl90aW1lPXAtdGhpcy5fdGltZSksdGhpcy5fdGltZT5wPyh0aGlzLl90aW1lPXAsYT1wKzFlLTQpOnRoaXMuX3RpbWU8MD90aGlzLl90aW1lPWE9MDphPXRoaXMuX3RpbWUpKSx0aGlzLl9oYXNQYXVzZSYmIXRoaXMuX2ZvcmNpbmdQbGF5aGVhZCYmIWIpe2lmKGE9dGhpcy5fdGltZSxhPj1xfHx0aGlzLl9yZXBlYXQmJnchPT10aGlzLl9jeWNsZSlmb3IoZD10aGlzLl9maXJzdDtkJiZkLl9zdGFydFRpbWU8PWEmJiFtOylkLl9kdXJhdGlvbnx8XCJpc1BhdXNlXCIhPT1kLmRhdGF8fGQucmF0aW98fDA9PT1kLl9zdGFydFRpbWUmJjA9PT10aGlzLl9yYXdQcmV2VGltZXx8KG09ZCksZD1kLl9uZXh0O2Vsc2UgZm9yKGQ9dGhpcy5fbGFzdDtkJiZkLl9zdGFydFRpbWU+PWEmJiFtOylkLl9kdXJhdGlvbnx8XCJpc1BhdXNlXCI9PT1kLmRhdGEmJmQuX3Jhd1ByZXZUaW1lPjAmJihtPWQpLGQ9ZC5fcHJldjttJiZtLl9zdGFydFRpbWU8cCYmKHRoaXMuX3RpbWU9YT1tLl9zdGFydFRpbWUsdGhpcy5fdG90YWxUaW1lPWErdGhpcy5fY3ljbGUqKHRoaXMuX3RvdGFsRHVyYXRpb24rdGhpcy5fcmVwZWF0RGVsYXkpKX1pZih0aGlzLl9jeWNsZSE9PXcmJiF0aGlzLl9sb2NrZWQpe3ZhciB4PXRoaXMuX3lveW8mJjAhPT0oMSZ3KSx5PXg9PT0odGhpcy5feW95byYmMCE9PSgxJnRoaXMuX2N5Y2xlKSksej10aGlzLl90b3RhbFRpbWUsQT10aGlzLl9jeWNsZSxCPXRoaXMuX3Jhd1ByZXZUaW1lLEM9dGhpcy5fdGltZTtpZih0aGlzLl90b3RhbFRpbWU9dypwLHRoaXMuX2N5Y2xlPHc/eD0heDp0aGlzLl90b3RhbFRpbWUrPXAsdGhpcy5fdGltZT1xLHRoaXMuX3Jhd1ByZXZUaW1lPTA9PT1wP3UtMWUtNDp1LHRoaXMuX2N5Y2xlPXcsdGhpcy5fbG9ja2VkPSEwLHE9eD8wOnAsdGhpcy5yZW5kZXIocSxiLDA9PT1wKSxifHx0aGlzLl9nY3x8dGhpcy52YXJzLm9uUmVwZWF0JiYodGhpcy5fY3ljbGU9QSx0aGlzLl9sb2NrZWQ9ITEsdGhpcy5fY2FsbGJhY2soXCJvblJlcGVhdFwiKSkscSE9PXRoaXMuX3RpbWUpcmV0dXJuO2lmKHkmJih0aGlzLl9jeWNsZT13LHRoaXMuX2xvY2tlZD0hMCxxPXg/cCsxZS00Oi0xZS00LHRoaXMucmVuZGVyKHEsITAsITEpKSx0aGlzLl9sb2NrZWQ9ITEsdGhpcy5fcGF1c2VkJiYhdilyZXR1cm47dGhpcy5fdGltZT1DLHRoaXMuX3RvdGFsVGltZT16LHRoaXMuX2N5Y2xlPUEsdGhpcy5fcmF3UHJldlRpbWU9Qn1pZighKHRoaXMuX3RpbWUhPT1xJiZ0aGlzLl9maXJzdHx8Y3x8a3x8bSkpcmV0dXJuIHZvaWQociE9PXRoaXMuX3RvdGFsVGltZSYmdGhpcy5fb25VcGRhdGUmJihifHx0aGlzLl9jYWxsYmFjayhcIm9uVXBkYXRlXCIpKSk7aWYodGhpcy5faW5pdHRlZHx8KHRoaXMuX2luaXR0ZWQ9ITApLHRoaXMuX2FjdGl2ZXx8IXRoaXMuX3BhdXNlZCYmdGhpcy5fdG90YWxUaW1lIT09ciYmYT4wJiYodGhpcy5fYWN0aXZlPSEwKSwwPT09ciYmdGhpcy52YXJzLm9uU3RhcnQmJigwPT09dGhpcy5fdG90YWxUaW1lJiZ0aGlzLl90b3RhbER1cmF0aW9ufHxifHx0aGlzLl9jYWxsYmFjayhcIm9uU3RhcnRcIikpLG49dGhpcy5fdGltZSxuPj1xKWZvcihkPXRoaXMuX2ZpcnN0O2QmJihpPWQuX25leHQsbj09PXRoaXMuX3RpbWUmJighdGhpcy5fcGF1c2VkfHx2KSk7KShkLl9hY3RpdmV8fGQuX3N0YXJ0VGltZTw9dGhpcy5fdGltZSYmIWQuX3BhdXNlZCYmIWQuX2djKSYmKG09PT1kJiZ0aGlzLnBhdXNlKCksZC5fcmV2ZXJzZWQ/ZC5yZW5kZXIoKGQuX2RpcnR5P2QudG90YWxEdXJhdGlvbigpOmQuX3RvdGFsRHVyYXRpb24pLShhLWQuX3N0YXJ0VGltZSkqZC5fdGltZVNjYWxlLGIsYyk6ZC5yZW5kZXIoKGEtZC5fc3RhcnRUaW1lKSpkLl90aW1lU2NhbGUsYixjKSksZD1pO2Vsc2UgZm9yKGQ9dGhpcy5fbGFzdDtkJiYoaT1kLl9wcmV2LG49PT10aGlzLl90aW1lJiYoIXRoaXMuX3BhdXNlZHx8dikpOyl7aWYoZC5fYWN0aXZlfHxkLl9zdGFydFRpbWU8PXEmJiFkLl9wYXVzZWQmJiFkLl9nYyl7aWYobT09PWQpe2ZvcihtPWQuX3ByZXY7bSYmbS5lbmRUaW1lKCk+dGhpcy5fdGltZTspbS5yZW5kZXIobS5fcmV2ZXJzZWQ/bS50b3RhbER1cmF0aW9uKCktKGEtbS5fc3RhcnRUaW1lKSptLl90aW1lU2NhbGU6KGEtbS5fc3RhcnRUaW1lKSptLl90aW1lU2NhbGUsYixjKSxtPW0uX3ByZXY7bT1udWxsLHRoaXMucGF1c2UoKX1kLl9yZXZlcnNlZD9kLnJlbmRlcigoZC5fZGlydHk/ZC50b3RhbER1cmF0aW9uKCk6ZC5fdG90YWxEdXJhdGlvbiktKGEtZC5fc3RhcnRUaW1lKSpkLl90aW1lU2NhbGUsYixjKTpkLnJlbmRlcigoYS1kLl9zdGFydFRpbWUpKmQuX3RpbWVTY2FsZSxiLGMpfWQ9aX10aGlzLl9vblVwZGF0ZSYmKGJ8fChnLmxlbmd0aCYmaCgpLHRoaXMuX2NhbGxiYWNrKFwib25VcGRhdGVcIikpKSxqJiYodGhpcy5fbG9ja2VkfHx0aGlzLl9nY3x8KHM9PT10aGlzLl9zdGFydFRpbWV8fHQhPT10aGlzLl90aW1lU2NhbGUpJiYoMD09PXRoaXMuX3RpbWV8fG8+PXRoaXMudG90YWxEdXJhdGlvbigpKSYmKGYmJihnLmxlbmd0aCYmaCgpLHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiYmdGhpcy5fZW5hYmxlZCghMSwhMSksdGhpcy5fYWN0aXZlPSExKSwhYiYmdGhpcy52YXJzW2pdJiZ0aGlzLl9jYWxsYmFjayhqKSkpfSxrLmdldEFjdGl2ZT1mdW5jdGlvbihhLGIsYyl7bnVsbD09YSYmKGE9ITApLG51bGw9PWImJihiPSEwKSxudWxsPT1jJiYoYz0hMSk7dmFyIGQsZSxmPVtdLGc9dGhpcy5nZXRDaGlsZHJlbihhLGIsYyksaD0wLGk9Zy5sZW5ndGg7Zm9yKGQ9MDtpPmQ7ZCsrKWU9Z1tkXSxlLmlzQWN0aXZlKCkmJihmW2grK109ZSk7cmV0dXJuIGZ9LGsuZ2V0TGFiZWxBZnRlcj1mdW5jdGlvbihhKXthfHwwIT09YSYmKGE9dGhpcy5fdGltZSk7dmFyIGIsYz10aGlzLmdldExhYmVsc0FycmF5KCksZD1jLmxlbmd0aDtmb3IoYj0wO2Q+YjtiKyspaWYoY1tiXS50aW1lPmEpcmV0dXJuIGNbYl0ubmFtZTtyZXR1cm4gbnVsbH0say5nZXRMYWJlbEJlZm9yZT1mdW5jdGlvbihhKXtudWxsPT1hJiYoYT10aGlzLl90aW1lKTtmb3IodmFyIGI9dGhpcy5nZXRMYWJlbHNBcnJheSgpLGM9Yi5sZW5ndGg7LS1jPi0xOylpZihiW2NdLnRpbWU8YSlyZXR1cm4gYltjXS5uYW1lO3JldHVybiBudWxsfSxrLmdldExhYmVsc0FycmF5PWZ1bmN0aW9uKCl7dmFyIGEsYj1bXSxjPTA7Zm9yKGEgaW4gdGhpcy5fbGFiZWxzKWJbYysrXT17dGltZTp0aGlzLl9sYWJlbHNbYV0sbmFtZTphfTtyZXR1cm4gYi5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEudGltZS1iLnRpbWV9KSxifSxrLmludmFsaWRhdGU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5fbG9ja2VkPSExLGEucHJvdG90eXBlLmludmFsaWRhdGUuY2FsbCh0aGlzKX0say5wcm9ncmVzcz1mdW5jdGlvbihhLGIpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMudG90YWxUaW1lKHRoaXMuZHVyYXRpb24oKSoodGhpcy5feW95byYmMCE9PSgxJnRoaXMuX2N5Y2xlKT8xLWE6YSkrdGhpcy5fY3ljbGUqKHRoaXMuX2R1cmF0aW9uK3RoaXMuX3JlcGVhdERlbGF5KSxiKTp0aGlzLl90aW1lL3RoaXMuZHVyYXRpb24oKXx8MH0say50b3RhbFByb2dyZXNzPWZ1bmN0aW9uKGEsYil7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy50b3RhbFRpbWUodGhpcy50b3RhbER1cmF0aW9uKCkqYSxiKTp0aGlzLl90b3RhbFRpbWUvdGhpcy50b3RhbER1cmF0aW9uKCl8fDB9LGsudG90YWxEdXJhdGlvbj1mdW5jdGlvbihiKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8tMSE9PXRoaXMuX3JlcGVhdCYmYj90aGlzLnRpbWVTY2FsZSh0aGlzLnRvdGFsRHVyYXRpb24oKS9iKTp0aGlzOih0aGlzLl9kaXJ0eSYmKGEucHJvdG90eXBlLnRvdGFsRHVyYXRpb24uY2FsbCh0aGlzKSx0aGlzLl90b3RhbER1cmF0aW9uPS0xPT09dGhpcy5fcmVwZWF0Pzk5OTk5OTk5OTk5OTp0aGlzLl9kdXJhdGlvbioodGhpcy5fcmVwZWF0KzEpK3RoaXMuX3JlcGVhdERlbGF5KnRoaXMuX3JlcGVhdCksdGhpcy5fdG90YWxEdXJhdGlvbil9LGsudGltZT1mdW5jdGlvbihhLGIpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9kaXJ0eSYmdGhpcy50b3RhbER1cmF0aW9uKCksYT50aGlzLl9kdXJhdGlvbiYmKGE9dGhpcy5fZHVyYXRpb24pLHRoaXMuX3lveW8mJjAhPT0oMSZ0aGlzLl9jeWNsZSk/YT10aGlzLl9kdXJhdGlvbi1hK3RoaXMuX2N5Y2xlKih0aGlzLl9kdXJhdGlvbit0aGlzLl9yZXBlYXREZWxheSk6MCE9PXRoaXMuX3JlcGVhdCYmKGErPXRoaXMuX2N5Y2xlKih0aGlzLl9kdXJhdGlvbit0aGlzLl9yZXBlYXREZWxheSkpLHRoaXMudG90YWxUaW1lKGEsYikpOnRoaXMuX3RpbWV9LGsucmVwZWF0PWZ1bmN0aW9uKGEpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9yZXBlYXQ9YSx0aGlzLl91bmNhY2hlKCEwKSk6dGhpcy5fcmVwZWF0fSxrLnJlcGVhdERlbGF5PWZ1bmN0aW9uKGEpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl9yZXBlYXREZWxheT1hLHRoaXMuX3VuY2FjaGUoITApKTp0aGlzLl9yZXBlYXREZWxheX0say55b3lvPWZ1bmN0aW9uKGEpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyh0aGlzLl95b3lvPWEsdGhpcyk6dGhpcy5feW95b30say5jdXJyZW50TGFiZWw9ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5zZWVrKGEsITApOnRoaXMuZ2V0TGFiZWxCZWZvcmUodGhpcy5fdGltZSsxZS04KX0sZH0sITApLGZ1bmN0aW9uKCl7dmFyIGE9MTgwL01hdGguUEksYj1bXSxjPVtdLGQ9W10sZT17fSxmPV9nc1Njb3BlLl9nc0RlZmluZS5nbG9iYWxzLGc9ZnVuY3Rpb24oYSxiLGMsZCl7Yz09PWQmJihjPWQtKGQtYikvMWU2KSxhPT09YiYmKGI9YSsoYy1hKS8xZTYpLHRoaXMuYT1hLHRoaXMuYj1iLHRoaXMuYz1jLHRoaXMuZD1kLHRoaXMuZGE9ZC1hLHRoaXMuY2E9Yy1hLHRoaXMuYmE9Yi1hfSxoPVwiLHgseSx6LGxlZnQsdG9wLHJpZ2h0LGJvdHRvbSxtYXJnaW5Ub3AsbWFyZ2luTGVmdCxtYXJnaW5SaWdodCxtYXJnaW5Cb3R0b20scGFkZGluZ0xlZnQscGFkZGluZ1RvcCxwYWRkaW5nUmlnaHQscGFkZGluZ0JvdHRvbSxiYWNrZ3JvdW5kUG9zaXRpb24sYmFja2dyb3VuZFBvc2l0aW9uX3ksXCIsaT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZT17YTphfSxmPXt9LGc9e30saD17YzpkfSxpPShhK2IpLzIsaj0oYitjKS8yLGs9KGMrZCkvMixsPShpK2opLzIsbT0oaitrKS8yLG49KG0tbCkvODtyZXR1cm4gZS5iPWkrKGEtaSkvNCxmLmI9bCtuLGUuYz1mLmE9KGUuYitmLmIpLzIsZi5jPWcuYT0obCttKS8yLGcuYj1tLW4saC5iPWsrKGQtaykvNCxnLmM9aC5hPShnLmIraC5iKS8yLFtlLGYsZyxoXX0saj1mdW5jdGlvbihhLGUsZixnLGgpe3ZhciBqLGssbCxtLG4sbyxwLHEscixzLHQsdSx2LHc9YS5sZW5ndGgtMSx4PTAseT1hWzBdLmE7Zm9yKGo9MDt3Pmo7aisrKW49YVt4XSxrPW4uYSxsPW4uZCxtPWFbeCsxXS5kLGg/KHQ9YltqXSx1PWNbal0sdj0odSt0KSplKi4yNS8oZz8uNTpkW2pdfHwuNSksbz1sLShsLWspKihnPy41KmU6MCE9PXQ/di90OjApLHA9bCsobS1sKSooZz8uNSplOjAhPT11P3YvdTowKSxxPWwtKG8rKChwLW8pKigzKnQvKHQrdSkrLjUpLzR8fDApKSk6KG89bC0obC1rKSplKi41LHA9bCsobS1sKSplKi41LHE9bC0obytwKS8yKSxvKz1xLHArPXEsbi5jPXI9bywwIT09aj9uLmI9eTpuLmI9eT1uLmErLjYqKG4uYy1uLmEpLG4uZGE9bC1rLG4uY2E9ci1rLG4uYmE9eS1rLGY/KHM9aShrLHkscixsKSxhLnNwbGljZSh4LDEsc1swXSxzWzFdLHNbMl0sc1szXSkseCs9NCk6eCsrLHk9cDtuPWFbeF0sbi5iPXksbi5jPXkrLjQqKG4uZC15KSxuLmRhPW4uZC1uLmEsbi5jYT1uLmMtbi5hLG4uYmE9eS1uLmEsZiYmKHM9aShuLmEseSxuLmMsbi5kKSxhLnNwbGljZSh4LDEsc1swXSxzWzFdLHNbMl0sc1szXSkpfSxrPWZ1bmN0aW9uKGEsZCxlLGYpe3ZhciBoLGksaixrLGwsbSxuPVtdO2lmKGYpZm9yKGE9W2ZdLmNvbmNhdChhKSxpPWEubGVuZ3RoOy0taT4tMTspXCJzdHJpbmdcIj09dHlwZW9mKG09YVtpXVtkXSkmJlwiPVwiPT09bS5jaGFyQXQoMSkmJihhW2ldW2RdPWZbZF0rTnVtYmVyKG0uY2hhckF0KDApK20uc3Vic3RyKDIpKSk7aWYoaD1hLmxlbmd0aC0yLDA+aClyZXR1cm4gblswXT1uZXcgZyhhWzBdW2RdLDAsMCxhWzBdW2RdKSxuO2ZvcihpPTA7aD5pO2krKylqPWFbaV1bZF0saz1hW2krMV1bZF0sbltpXT1uZXcgZyhqLDAsMCxrKSxlJiYobD1hW2krMl1bZF0sYltpXT0oYltpXXx8MCkrKGstaikqKGstaiksY1tpXT0oY1tpXXx8MCkrKGwtaykqKGwtaykpO3JldHVybiBuW2ldPW5ldyBnKGFbaV1bZF0sMCwwLGFbaSsxXVtkXSksbn0sbD1mdW5jdGlvbihhLGYsZyxpLGwsbSl7dmFyIG4sbyxwLHEscixzLHQsdSx2PXt9LHc9W10seD1tfHxhWzBdO2w9XCJzdHJpbmdcIj09dHlwZW9mIGw/XCIsXCIrbCtcIixcIjpoLG51bGw9PWYmJihmPTEpO2ZvcihvIGluIGFbMF0pdy5wdXNoKG8pO2lmKGEubGVuZ3RoPjEpe2Zvcih1PWFbYS5sZW5ndGgtMV0sdD0hMCxuPXcubGVuZ3RoOy0tbj4tMTspaWYobz13W25dLE1hdGguYWJzKHhbb10tdVtvXSk+LjA1KXt0PSExO2JyZWFrfXQmJihhPWEuY29uY2F0KCksbSYmYS51bnNoaWZ0KG0pLGEucHVzaChhWzFdKSxtPWFbYS5sZW5ndGgtM10pfWZvcihiLmxlbmd0aD1jLmxlbmd0aD1kLmxlbmd0aD0wLG49dy5sZW5ndGg7LS1uPi0xOylvPXdbbl0sZVtvXT0tMSE9PWwuaW5kZXhPZihcIixcIitvK1wiLFwiKSx2W29dPWsoYSxvLGVbb10sbSk7Zm9yKG49Yi5sZW5ndGg7LS1uPi0xOyliW25dPU1hdGguc3FydChiW25dKSxjW25dPU1hdGguc3FydChjW25dKTtpZighaSl7Zm9yKG49dy5sZW5ndGg7LS1uPi0xOylpZihlW29dKWZvcihwPXZbd1tuXV0scz1wLmxlbmd0aC0xLHE9MDtzPnE7cSsrKXI9cFtxKzFdLmRhL2NbcV0rcFtxXS5kYS9iW3FdfHwwLGRbcV09KGRbcV18fDApK3Iqcjtmb3Iobj1kLmxlbmd0aDstLW4+LTE7KWRbbl09TWF0aC5zcXJ0KGRbbl0pfWZvcihuPXcubGVuZ3RoLHE9Zz80OjE7LS1uPi0xOylvPXdbbl0scD12W29dLGoocCxmLGcsaSxlW29dKSx0JiYocC5zcGxpY2UoMCxxKSxwLnNwbGljZShwLmxlbmd0aC1xLHEpKTtyZXR1cm4gdn0sbT1mdW5jdGlvbihhLGIsYyl7Yj1ifHxcInNvZnRcIjt2YXIgZCxlLGYsaCxpLGosayxsLG0sbixvLHA9e30scT1cImN1YmljXCI9PT1iPzM6MixyPVwic29mdFwiPT09YixzPVtdO2lmKHImJmMmJihhPVtjXS5jb25jYXQoYSkpLG51bGw9PWF8fGEubGVuZ3RoPHErMSl0aHJvd1wiaW52YWxpZCBCZXppZXIgZGF0YVwiO1xuZm9yKG0gaW4gYVswXSlzLnB1c2gobSk7Zm9yKGo9cy5sZW5ndGg7LS1qPi0xOyl7Zm9yKG09c1tqXSxwW21dPWk9W10sbj0wLGw9YS5sZW5ndGgsaz0wO2w+aztrKyspZD1udWxsPT1jP2Fba11bbV06XCJzdHJpbmdcIj09dHlwZW9mKG89YVtrXVttXSkmJlwiPVwiPT09by5jaGFyQXQoMSk/Y1ttXStOdW1iZXIoby5jaGFyQXQoMCkrby5zdWJzdHIoMikpOk51bWJlcihvKSxyJiZrPjEmJmwtMT5rJiYoaVtuKytdPShkK2lbbi0yXSkvMiksaVtuKytdPWQ7Zm9yKGw9bi1xKzEsbj0wLGs9MDtsPms7ays9cSlkPWlba10sZT1pW2srMV0sZj1pW2srMl0saD0yPT09cT8wOmlbayszXSxpW24rK109bz0zPT09cT9uZXcgZyhkLGUsZixoKTpuZXcgZyhkLCgyKmUrZCkvMywoMiplK2YpLzMsZik7aS5sZW5ndGg9bn1yZXR1cm4gcH0sbj1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkLGUsZixnLGgsaSxqLGssbCxtLG4sbz0xL2MscD1hLmxlbmd0aDstLXA+LTE7KWZvcihtPWFbcF0sZj1tLmEsZz1tLmQtZixoPW0uYy1mLGk9bS5iLWYsZD1lPTAsaz0xO2M+PWs7aysrKWo9byprLGw9MS1qLGQ9ZS0oZT0oaipqKmcrMypsKihqKmgrbCppKSkqaiksbj1wKmMray0xLGJbbl09KGJbbl18fDApK2QqZH0sbz1mdW5jdGlvbihhLGIpe2I9Yj4+MHx8Njt2YXIgYyxkLGUsZixnPVtdLGg9W10saT0wLGo9MCxrPWItMSxsPVtdLG09W107Zm9yKGMgaW4gYSluKGFbY10sZyxiKTtmb3IoZT1nLmxlbmd0aCxkPTA7ZT5kO2QrKylpKz1NYXRoLnNxcnQoZ1tkXSksZj1kJWIsbVtmXT1pLGY9PT1rJiYoais9aSxmPWQvYj4+MCxsW2ZdPW0saFtmXT1qLGk9MCxtPVtdKTtyZXR1cm57bGVuZ3RoOmosbGVuZ3RoczpoLHNlZ21lbnRzOmx9fSxwPV9nc1Njb3BlLl9nc0RlZmluZS5wbHVnaW4oe3Byb3BOYW1lOlwiYmV6aWVyXCIscHJpb3JpdHk6LTEsdmVyc2lvbjpcIjEuMy44XCIsQVBJOjIsZ2xvYmFsOiEwLGluaXQ6ZnVuY3Rpb24oYSxiLGMpe3RoaXMuX3RhcmdldD1hLGIgaW5zdGFuY2VvZiBBcnJheSYmKGI9e3ZhbHVlczpifSksdGhpcy5fZnVuYz17fSx0aGlzLl9tb2Q9e30sdGhpcy5fcHJvcHM9W10sdGhpcy5fdGltZVJlcz1udWxsPT1iLnRpbWVSZXNvbHV0aW9uPzY6cGFyc2VJbnQoYi50aW1lUmVzb2x1dGlvbiwxMCk7dmFyIGQsZSxmLGcsaCxpPWIudmFsdWVzfHxbXSxqPXt9LGs9aVswXSxuPWIuYXV0b1JvdGF0ZXx8Yy52YXJzLm9yaWVudFRvQmV6aWVyO3RoaXMuX2F1dG9Sb3RhdGU9bj9uIGluc3RhbmNlb2YgQXJyYXk/bjpbW1wieFwiLFwieVwiLFwicm90YXRpb25cIixuPT09ITA/MDpOdW1iZXIobil8fDBdXTpudWxsO2ZvcihkIGluIGspdGhpcy5fcHJvcHMucHVzaChkKTtmb3IoZj10aGlzLl9wcm9wcy5sZW5ndGg7LS1mPi0xOylkPXRoaXMuX3Byb3BzW2ZdLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goZCksZT10aGlzLl9mdW5jW2RdPVwiZnVuY3Rpb25cIj09dHlwZW9mIGFbZF0saltkXT1lP2FbZC5pbmRleE9mKFwic2V0XCIpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBhW1wiZ2V0XCIrZC5zdWJzdHIoMyldP2Q6XCJnZXRcIitkLnN1YnN0cigzKV0oKTpwYXJzZUZsb2F0KGFbZF0pLGh8fGpbZF0hPT1pWzBdW2RdJiYoaD1qKTtpZih0aGlzLl9iZXppZXJzPVwiY3ViaWNcIiE9PWIudHlwZSYmXCJxdWFkcmF0aWNcIiE9PWIudHlwZSYmXCJzb2Z0XCIhPT1iLnR5cGU/bChpLGlzTmFOKGIuY3VydmluZXNzKT8xOmIuY3VydmluZXNzLCExLFwidGhydUJhc2ljXCI9PT1iLnR5cGUsYi5jb3JyZWxhdGUsaCk6bShpLGIudHlwZSxqKSx0aGlzLl9zZWdDb3VudD10aGlzLl9iZXppZXJzW2RdLmxlbmd0aCx0aGlzLl90aW1lUmVzKXt2YXIgcD1vKHRoaXMuX2JlemllcnMsdGhpcy5fdGltZVJlcyk7dGhpcy5fbGVuZ3RoPXAubGVuZ3RoLHRoaXMuX2xlbmd0aHM9cC5sZW5ndGhzLHRoaXMuX3NlZ21lbnRzPXAuc2VnbWVudHMsdGhpcy5fbDE9dGhpcy5fbGk9dGhpcy5fczE9dGhpcy5fc2k9MCx0aGlzLl9sMj10aGlzLl9sZW5ndGhzWzBdLHRoaXMuX2N1clNlZz10aGlzLl9zZWdtZW50c1swXSx0aGlzLl9zMj10aGlzLl9jdXJTZWdbMF0sdGhpcy5fcHJlYz0xL3RoaXMuX2N1clNlZy5sZW5ndGh9aWYobj10aGlzLl9hdXRvUm90YXRlKWZvcih0aGlzLl9pbml0aWFsUm90YXRpb25zPVtdLG5bMF1pbnN0YW5jZW9mIEFycmF5fHwodGhpcy5fYXV0b1JvdGF0ZT1uPVtuXSksZj1uLmxlbmd0aDstLWY+LTE7KXtmb3IoZz0wOzM+ZztnKyspZD1uW2ZdW2ddLHRoaXMuX2Z1bmNbZF09XCJmdW5jdGlvblwiPT10eXBlb2YgYVtkXT9hW2QuaW5kZXhPZihcInNldFwiKXx8XCJmdW5jdGlvblwiIT10eXBlb2YgYVtcImdldFwiK2Quc3Vic3RyKDMpXT9kOlwiZ2V0XCIrZC5zdWJzdHIoMyldOiExO2Q9bltmXVsyXSx0aGlzLl9pbml0aWFsUm90YXRpb25zW2ZdPSh0aGlzLl9mdW5jW2RdP3RoaXMuX2Z1bmNbZF0uY2FsbCh0aGlzLl90YXJnZXQpOnRoaXMuX3RhcmdldFtkXSl8fDAsdGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChkKX1yZXR1cm4gdGhpcy5fc3RhcnRSYXRpbz1jLnZhcnMucnVuQmFja3dhcmRzPzE6MCwhMH0sc2V0OmZ1bmN0aW9uKGIpe3ZhciBjLGQsZSxmLGcsaCxpLGosayxsLG09dGhpcy5fc2VnQ291bnQsbj10aGlzLl9mdW5jLG89dGhpcy5fdGFyZ2V0LHA9YiE9PXRoaXMuX3N0YXJ0UmF0aW87aWYodGhpcy5fdGltZVJlcyl7aWYoaz10aGlzLl9sZW5ndGhzLGw9dGhpcy5fY3VyU2VnLGIqPXRoaXMuX2xlbmd0aCxlPXRoaXMuX2xpLGI+dGhpcy5fbDImJm0tMT5lKXtmb3Ioaj1tLTE7aj5lJiYodGhpcy5fbDI9a1srK2VdKTw9YjspO3RoaXMuX2wxPWtbZS0xXSx0aGlzLl9saT1lLHRoaXMuX2N1clNlZz1sPXRoaXMuX3NlZ21lbnRzW2VdLHRoaXMuX3MyPWxbdGhpcy5fczE9dGhpcy5fc2k9MF19ZWxzZSBpZihiPHRoaXMuX2wxJiZlPjApe2Zvcig7ZT4wJiYodGhpcy5fbDE9a1stLWVdKT49YjspOzA9PT1lJiZiPHRoaXMuX2wxP3RoaXMuX2wxPTA6ZSsrLHRoaXMuX2wyPWtbZV0sdGhpcy5fbGk9ZSx0aGlzLl9jdXJTZWc9bD10aGlzLl9zZWdtZW50c1tlXSx0aGlzLl9zMT1sWyh0aGlzLl9zaT1sLmxlbmd0aC0xKS0xXXx8MCx0aGlzLl9zMj1sW3RoaXMuX3NpXX1pZihjPWUsYi09dGhpcy5fbDEsZT10aGlzLl9zaSxiPnRoaXMuX3MyJiZlPGwubGVuZ3RoLTEpe2ZvcihqPWwubGVuZ3RoLTE7aj5lJiYodGhpcy5fczI9bFsrK2VdKTw9YjspO3RoaXMuX3MxPWxbZS0xXSx0aGlzLl9zaT1lfWVsc2UgaWYoYjx0aGlzLl9zMSYmZT4wKXtmb3IoO2U+MCYmKHRoaXMuX3MxPWxbLS1lXSk+PWI7KTswPT09ZSYmYjx0aGlzLl9zMT90aGlzLl9zMT0wOmUrKyx0aGlzLl9zMj1sW2VdLHRoaXMuX3NpPWV9aD0oZSsoYi10aGlzLl9zMSkvKHRoaXMuX3MyLXRoaXMuX3MxKSkqdGhpcy5fcHJlY3x8MH1lbHNlIGM9MD5iPzA6Yj49MT9tLTE6bSpiPj4wLGg9KGItYyooMS9tKSkqbTtmb3IoZD0xLWgsZT10aGlzLl9wcm9wcy5sZW5ndGg7LS1lPi0xOylmPXRoaXMuX3Byb3BzW2VdLGc9dGhpcy5fYmV6aWVyc1tmXVtjXSxpPShoKmgqZy5kYSszKmQqKGgqZy5jYStkKmcuYmEpKSpoK2cuYSx0aGlzLl9tb2RbZl0mJihpPXRoaXMuX21vZFtmXShpLG8pKSxuW2ZdP29bZl0oaSk6b1tmXT1pO2lmKHRoaXMuX2F1dG9Sb3RhdGUpe3ZhciBxLHIscyx0LHUsdix3LHg9dGhpcy5fYXV0b1JvdGF0ZTtmb3IoZT14Lmxlbmd0aDstLWU+LTE7KWY9eFtlXVsyXSx2PXhbZV1bM118fDAsdz14W2VdWzRdPT09ITA/MTphLGc9dGhpcy5fYmV6aWVyc1t4W2VdWzBdXSxxPXRoaXMuX2JlemllcnNbeFtlXVsxXV0sZyYmcSYmKGc9Z1tjXSxxPXFbY10scj1nLmErKGcuYi1nLmEpKmgsdD1nLmIrKGcuYy1nLmIpKmgscis9KHQtcikqaCx0Kz0oZy5jKyhnLmQtZy5jKSpoLXQpKmgscz1xLmErKHEuYi1xLmEpKmgsdT1xLmIrKHEuYy1xLmIpKmgscys9KHUtcykqaCx1Kz0ocS5jKyhxLmQtcS5jKSpoLXUpKmgsaT1wP01hdGguYXRhbjIodS1zLHQtcikqdyt2OnRoaXMuX2luaXRpYWxSb3RhdGlvbnNbZV0sdGhpcy5fbW9kW2ZdJiYoaT10aGlzLl9tb2RbZl0oaSxvKSksbltmXT9vW2ZdKGkpOm9bZl09aSl9fX0pLHE9cC5wcm90b3R5cGU7cC5iZXppZXJUaHJvdWdoPWwscC5jdWJpY1RvUXVhZHJhdGljPWkscC5fYXV0b0NTUz0hMCxwLnF1YWRyYXRpY1RvQ3ViaWM9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBuZXcgZyhhLCgyKmIrYSkvMywoMipiK2MpLzMsYyl9LHAuX2Nzc1JlZ2lzdGVyPWZ1bmN0aW9uKCl7dmFyIGE9Zi5DU1NQbHVnaW47aWYoYSl7dmFyIGI9YS5faW50ZXJuYWxzLGM9Yi5fcGFyc2VUb1Byb3h5LGQ9Yi5fc2V0UGx1Z2luUmF0aW8sZT1iLkNTU1Byb3BUd2VlbjtiLl9yZWdpc3RlckNvbXBsZXhTcGVjaWFsUHJvcChcImJlemllclwiLHtwYXJzZXI6ZnVuY3Rpb24oYSxiLGYsZyxoLGkpe2IgaW5zdGFuY2VvZiBBcnJheSYmKGI9e3ZhbHVlczpifSksaT1uZXcgcDt2YXIgaixrLGwsbT1iLnZhbHVlcyxuPW0ubGVuZ3RoLTEsbz1bXSxxPXt9O2lmKDA+bilyZXR1cm4gaDtmb3Ioaj0wO24+PWo7aisrKWw9YyhhLG1bal0sZyxoLGksbiE9PWopLG9bal09bC5lbmQ7Zm9yKGsgaW4gYilxW2tdPWJba107cmV0dXJuIHEudmFsdWVzPW8saD1uZXcgZShhLFwiYmV6aWVyXCIsMCwwLGwucHQsMiksaC5kYXRhPWwsaC5wbHVnaW49aSxoLnNldFJhdGlvPWQsMD09PXEuYXV0b1JvdGF0ZSYmKHEuYXV0b1JvdGF0ZT0hMCksIXEuYXV0b1JvdGF0ZXx8cS5hdXRvUm90YXRlIGluc3RhbmNlb2YgQXJyYXl8fChqPXEuYXV0b1JvdGF0ZT09PSEwPzA6TnVtYmVyKHEuYXV0b1JvdGF0ZSkscS5hdXRvUm90YXRlPW51bGwhPWwuZW5kLmxlZnQ/W1tcImxlZnRcIixcInRvcFwiLFwicm90YXRpb25cIixqLCExXV06bnVsbCE9bC5lbmQueD9bW1wieFwiLFwieVwiLFwicm90YXRpb25cIixqLCExXV06ITEpLHEuYXV0b1JvdGF0ZSYmKGcuX3RyYW5zZm9ybXx8Zy5fZW5hYmxlVHJhbnNmb3JtcyghMSksbC5hdXRvUm90YXRlPWcuX3RhcmdldC5fZ3NUcmFuc2Zvcm0sbC5wcm94eS5yb3RhdGlvbj1sLmF1dG9Sb3RhdGUucm90YXRpb258fDAsZy5fb3ZlcndyaXRlUHJvcHMucHVzaChcInJvdGF0aW9uXCIpKSxpLl9vbkluaXRUd2VlbihsLnByb3h5LHEsZy5fdHdlZW4pLGh9fSl9fSxxLl9tb2Q9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiLGM9dGhpcy5fb3ZlcndyaXRlUHJvcHMsZD1jLmxlbmd0aDstLWQ+LTE7KWI9YVtjW2RdXSxiJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYodGhpcy5fbW9kW2NbZF1dPWIpfSxxLl9raWxsPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZD10aGlzLl9wcm9wcztmb3IoYiBpbiB0aGlzLl9iZXppZXJzKWlmKGIgaW4gYSlmb3IoZGVsZXRlIHRoaXMuX2JlemllcnNbYl0sZGVsZXRlIHRoaXMuX2Z1bmNbYl0sYz1kLmxlbmd0aDstLWM+LTE7KWRbY109PT1iJiZkLnNwbGljZShjLDEpO2lmKGQ9dGhpcy5fYXV0b1JvdGF0ZSlmb3IoYz1kLmxlbmd0aDstLWM+LTE7KWFbZFtjXVsyXV0mJmQuc3BsaWNlKGMsMSk7cmV0dXJuIHRoaXMuX3N1cGVyLl9raWxsLmNhbGwodGhpcyxhKX19KCksX2dzU2NvcGUuX2dzRGVmaW5lKFwicGx1Z2lucy5DU1NQbHVnaW5cIixbXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsXCJUd2VlbkxpdGVcIl0sZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnPWZ1bmN0aW9uKCl7YS5jYWxsKHRoaXMsXCJjc3NcIiksdGhpcy5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoPTAsdGhpcy5zZXRSYXRpbz1nLnByb3RvdHlwZS5zZXRSYXRpb30saD1fZ3NTY29wZS5fZ3NEZWZpbmUuZ2xvYmFscyxpPXt9LGo9Zy5wcm90b3R5cGU9bmV3IGEoXCJjc3NcIik7ai5jb25zdHJ1Y3Rvcj1nLGcudmVyc2lvbj1cIjEuMjAuMFwiLGcuQVBJPTIsZy5kZWZhdWx0VHJhbnNmb3JtUGVyc3BlY3RpdmU9MCxnLmRlZmF1bHRTa2V3VHlwZT1cImNvbXBlbnNhdGVkXCIsZy5kZWZhdWx0U21vb3RoT3JpZ2luPSEwLGo9XCJweFwiLGcuc3VmZml4TWFwPXt0b3A6aixyaWdodDpqLGJvdHRvbTpqLGxlZnQ6aix3aWR0aDpqLGhlaWdodDpqLGZvbnRTaXplOmoscGFkZGluZzpqLG1hcmdpbjpqLHBlcnNwZWN0aXZlOmosbGluZUhlaWdodDpcIlwifTt2YXIgayxsLG0sbixvLHAscSxyLHM9Lyg/OlxcLXxcXC58XFxiKShcXGR8XFwufGVcXC0pKy9nLHQ9Lyg/OlxcZHxcXC1cXGR8XFwuXFxkfFxcLVxcLlxcZHxcXCs9XFxkfFxcLT1cXGR8XFwrPS5cXGR8XFwtPVxcLlxcZCkrL2csdT0vKD86XFwrPXxcXC09fFxcLXxcXGIpW1xcZFxcLVxcLl0rW2EtekEtWjAtOV0qKD86JXxcXGIpL2dpLHY9Lyg/IVsrLV0/XFxkKlxcLj9cXGQrfFsrLV18ZVsrLV1cXGQrKVteMC05XS9nLHc9Lyg/OlxcZHxcXC18XFwrfD18I3xcXC4pKi9nLHg9L29wYWNpdHkgKj0gKihbXildKikvaSx5PS9vcGFjaXR5OihbXjtdKikvaSx6PS9hbHBoYVxcKG9wYWNpdHkgKj0uKz9cXCkvaSxBPS9eKHJnYnxoc2wpLyxCPS8oW0EtWl0pL2csQz0vLShbYS16XSkvZ2ksRD0vKF4oPzp1cmxcXChcXFwifHVybFxcKCkpfCg/OihcXFwiXFwpKSR8XFwpJCkvZ2ksRT1mdW5jdGlvbihhLGIpe3JldHVybiBiLnRvVXBwZXJDYXNlKCl9LEY9Lyg/OkxlZnR8UmlnaHR8V2lkdGgpL2ksRz0vKE0xMXxNMTJ8TTIxfE0yMik9W1xcZFxcLVxcLmVdKy9naSxIPS9wcm9naWRcXDpEWEltYWdlVHJhbnNmb3JtXFwuTWljcm9zb2Z0XFwuTWF0cml4XFwoLis/XFwpL2ksST0vLCg/PVteXFwpXSooPzpcXCh8JCkpL2dpLEo9L1tcXHMsXFwoXS9pLEs9TWF0aC5QSS8xODAsTD0xODAvTWF0aC5QSSxNPXt9LE49e3N0eWxlOnt9fSxPPV9nc1Njb3BlLmRvY3VtZW50fHx7Y3JlYXRlRWxlbWVudDpmdW5jdGlvbigpe3JldHVybiBOfX0sUD1mdW5jdGlvbihhLGIpe3JldHVybiBPLmNyZWF0ZUVsZW1lbnROUz9PLmNyZWF0ZUVsZW1lbnROUyhifHxcImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWxcIixhKTpPLmNyZWF0ZUVsZW1lbnQoYSl9LFE9UChcImRpdlwiKSxSPVAoXCJpbWdcIiksUz1nLl9pbnRlcm5hbHM9e19zcGVjaWFsUHJvcHM6aX0sVD0oX2dzU2NvcGUubmF2aWdhdG9yfHx7fSkudXNlckFnZW50fHxcIlwiLFU9ZnVuY3Rpb24oKXt2YXIgYT1ULmluZGV4T2YoXCJBbmRyb2lkXCIpLGI9UChcImFcIik7cmV0dXJuIG09LTEhPT1ULmluZGV4T2YoXCJTYWZhcmlcIikmJi0xPT09VC5pbmRleE9mKFwiQ2hyb21lXCIpJiYoLTE9PT1hfHxwYXJzZUZsb2F0KFQuc3Vic3RyKGErOCwyKSk+Myksbz1tJiZwYXJzZUZsb2F0KFQuc3Vic3RyKFQuaW5kZXhPZihcIlZlcnNpb24vXCIpKzgsMikpPDYsbj0tMSE9PVQuaW5kZXhPZihcIkZpcmVmb3hcIiksKC9NU0lFIChbMC05XXsxLH1bXFwuMC05XXswLH0pLy5leGVjKFQpfHwvVHJpZGVudFxcLy4qcnY6KFswLTldezEsfVtcXC4wLTldezAsfSkvLmV4ZWMoVCkpJiYocD1wYXJzZUZsb2F0KFJlZ0V4cC4kMSkpLGI/KGIuc3R5bGUuY3NzVGV4dD1cInRvcDoxcHg7b3BhY2l0eTouNTU7XCIsL14wLjU1Ly50ZXN0KGIuc3R5bGUub3BhY2l0eSkpOiExfSgpLFY9ZnVuY3Rpb24oYSl7cmV0dXJuIHgudGVzdChcInN0cmluZ1wiPT10eXBlb2YgYT9hOihhLmN1cnJlbnRTdHlsZT9hLmN1cnJlbnRTdHlsZS5maWx0ZXI6YS5zdHlsZS5maWx0ZXIpfHxcIlwiKT9wYXJzZUZsb2F0KFJlZ0V4cC4kMSkvMTAwOjF9LFc9ZnVuY3Rpb24oYSl7X2dzU2NvcGUuY29uc29sZSYmY29uc29sZS5sb2coYSl9LFg9XCJcIixZPVwiXCIsWj1mdW5jdGlvbihhLGIpe2I9Ynx8UTt2YXIgYyxkLGU9Yi5zdHlsZTtpZih2b2lkIDAhPT1lW2FdKXJldHVybiBhO2ZvcihhPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHIoMSksYz1bXCJPXCIsXCJNb3pcIixcIm1zXCIsXCJNc1wiLFwiV2Via2l0XCJdLGQ9NTstLWQ+LTEmJnZvaWQgMD09PWVbY1tkXSthXTspO3JldHVybiBkPj0wPyhZPTM9PT1kP1wibXNcIjpjW2RdLFg9XCItXCIrWS50b0xvd2VyQ2FzZSgpK1wiLVwiLFkrYSk6bnVsbH0sJD1PLmRlZmF1bHRWaWV3P08uZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZTpmdW5jdGlvbigpe30sXz1nLmdldFN0eWxlPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGY7cmV0dXJuIFV8fFwib3BhY2l0eVwiIT09Yj8oIWQmJmEuc3R5bGVbYl0/Zj1hLnN0eWxlW2JdOihjPWN8fCQoYSkpP2Y9Y1tiXXx8Yy5nZXRQcm9wZXJ0eVZhbHVlKGIpfHxjLmdldFByb3BlcnR5VmFsdWUoYi5yZXBsYWNlKEIsXCItJDFcIikudG9Mb3dlckNhc2UoKSk6YS5jdXJyZW50U3R5bGUmJihmPWEuY3VycmVudFN0eWxlW2JdKSxudWxsPT1lfHxmJiZcIm5vbmVcIiE9PWYmJlwiYXV0b1wiIT09ZiYmXCJhdXRvIGF1dG9cIiE9PWY/ZjplKTpWKGEpfSxhYT1TLmNvbnZlcnRUb1BpeGVscz1mdW5jdGlvbihhLGMsZCxlLGYpe2lmKFwicHhcIj09PWV8fCFlJiZcImxpbmVIZWlnaHRcIiE9PWMpcmV0dXJuIGQ7aWYoXCJhdXRvXCI9PT1lfHwhZClyZXR1cm4gMDt2YXIgaCxpLGosaz1GLnRlc3QoYyksbD1hLG09US5zdHlsZSxuPTA+ZCxvPTE9PT1kO2lmKG4mJihkPS1kKSxvJiYoZCo9MTAwKSxcImxpbmVIZWlnaHRcIiE9PWN8fGUpaWYoXCIlXCI9PT1lJiYtMSE9PWMuaW5kZXhPZihcImJvcmRlclwiKSloPWQvMTAwKihrP2EuY2xpZW50V2lkdGg6YS5jbGllbnRIZWlnaHQpO2Vsc2V7aWYobS5jc3NUZXh0PVwiYm9yZGVyOjAgc29saWQgcmVkO3Bvc2l0aW9uOlwiK18oYSxcInBvc2l0aW9uXCIpK1wiO2xpbmUtaGVpZ2h0OjA7XCIsXCIlXCIhPT1lJiZsLmFwcGVuZENoaWxkJiZcInZcIiE9PWUuY2hhckF0KDApJiZcInJlbVwiIT09ZSltW2s/XCJib3JkZXJMZWZ0V2lkdGhcIjpcImJvcmRlclRvcFdpZHRoXCJdPWQrZTtlbHNle2lmKGw9YS5wYXJlbnROb2RlfHxPLmJvZHksLTEhPT1fKGwsXCJkaXNwbGF5XCIpLmluZGV4T2YoXCJmbGV4XCIpJiYobS5wb3NpdGlvbj1cImFic29sdXRlXCIpLGk9bC5fZ3NDYWNoZSxqPWIudGlja2VyLmZyYW1lLGkmJmsmJmkudGltZT09PWopcmV0dXJuIGkud2lkdGgqZC8xMDA7bVtrP1wid2lkdGhcIjpcImhlaWdodFwiXT1kK2V9bC5hcHBlbmRDaGlsZChRKSxoPXBhcnNlRmxvYXQoUVtrP1wib2Zmc2V0V2lkdGhcIjpcIm9mZnNldEhlaWdodFwiXSksbC5yZW1vdmVDaGlsZChRKSxrJiZcIiVcIj09PWUmJmcuY2FjaGVXaWR0aHMhPT0hMSYmKGk9bC5fZ3NDYWNoZT1sLl9nc0NhY2hlfHx7fSxpLnRpbWU9aixpLndpZHRoPWgvZCoxMDApLDAhPT1ofHxmfHwoaD1hYShhLGMsZCxlLCEwKSl9ZWxzZSBpPSQoYSkubGluZUhlaWdodCxhLnN0eWxlLmxpbmVIZWlnaHQ9ZCxoPXBhcnNlRmxvYXQoJChhKS5saW5lSGVpZ2h0KSxhLnN0eWxlLmxpbmVIZWlnaHQ9aTtyZXR1cm4gbyYmKGgvPTEwMCksbj8taDpofSxiYT1TLmNhbGN1bGF0ZU9mZnNldD1mdW5jdGlvbihhLGIsYyl7aWYoXCJhYnNvbHV0ZVwiIT09XyhhLFwicG9zaXRpb25cIixjKSlyZXR1cm4gMDt2YXIgZD1cImxlZnRcIj09PWI/XCJMZWZ0XCI6XCJUb3BcIixlPV8oYSxcIm1hcmdpblwiK2QsYyk7cmV0dXJuIGFbXCJvZmZzZXRcIitkXS0oYWEoYSxiLHBhcnNlRmxvYXQoZSksZS5yZXBsYWNlKHcsXCJcIikpfHwwKX0sY2E9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZj17fTtpZihiPWJ8fCQoYSxudWxsKSlpZihjPWIubGVuZ3RoKWZvcig7LS1jPi0xOyllPWJbY10sKC0xPT09ZS5pbmRleE9mKFwiLXRyYW5zZm9ybVwiKXx8RGE9PT1lKSYmKGZbZS5yZXBsYWNlKEMsRSldPWIuZ2V0UHJvcGVydHlWYWx1ZShlKSk7ZWxzZSBmb3IoYyBpbiBiKSgtMT09PWMuaW5kZXhPZihcIlRyYW5zZm9ybVwiKXx8Q2E9PT1jKSYmKGZbY109YltjXSk7ZWxzZSBpZihiPWEuY3VycmVudFN0eWxlfHxhLnN0eWxlKWZvcihjIGluIGIpXCJzdHJpbmdcIj09dHlwZW9mIGMmJnZvaWQgMD09PWZbY10mJihmW2MucmVwbGFjZShDLEUpXT1iW2NdKTtyZXR1cm4gVXx8KGYub3BhY2l0eT1WKGEpKSxkPVJhKGEsYiwhMSksZi5yb3RhdGlvbj1kLnJvdGF0aW9uLGYuc2tld1g9ZC5za2V3WCxmLnNjYWxlWD1kLnNjYWxlWCxmLnNjYWxlWT1kLnNjYWxlWSxmLng9ZC54LGYueT1kLnksRmEmJihmLno9ZC56LGYucm90YXRpb25YPWQucm90YXRpb25YLGYucm90YXRpb25ZPWQucm90YXRpb25ZLGYuc2NhbGVaPWQuc2NhbGVaKSxmLmZpbHRlcnMmJmRlbGV0ZSBmLmZpbHRlcnMsZn0sZGE9ZnVuY3Rpb24oYSxiLGMsZCxlKXt2YXIgZixnLGgsaT17fSxqPWEuc3R5bGU7Zm9yKGcgaW4gYylcImNzc1RleHRcIiE9PWcmJlwibGVuZ3RoXCIhPT1nJiZpc05hTihnKSYmKGJbZ10hPT0oZj1jW2ddKXx8ZSYmZVtnXSkmJi0xPT09Zy5pbmRleE9mKFwiT3JpZ2luXCIpJiYoXCJudW1iZXJcIj09dHlwZW9mIGZ8fFwic3RyaW5nXCI9PXR5cGVvZiBmKSYmKGlbZ109XCJhdXRvXCIhPT1mfHxcImxlZnRcIiE9PWcmJlwidG9wXCIhPT1nP1wiXCIhPT1mJiZcImF1dG9cIiE9PWYmJlwibm9uZVwiIT09Znx8XCJzdHJpbmdcIiE9dHlwZW9mIGJbZ118fFwiXCI9PT1iW2ddLnJlcGxhY2UodixcIlwiKT9mOjA6YmEoYSxnKSx2b2lkIDAhPT1qW2ddJiYoaD1uZXcgc2EoaixnLGpbZ10saCkpKTtpZihkKWZvcihnIGluIGQpXCJjbGFzc05hbWVcIiE9PWcmJihpW2ddPWRbZ10pO3JldHVybntkaWZzOmksZmlyc3RNUFQ6aH19LGVhPXt3aWR0aDpbXCJMZWZ0XCIsXCJSaWdodFwiXSxoZWlnaHQ6W1wiVG9wXCIsXCJCb3R0b21cIl19LGZhPVtcIm1hcmdpbkxlZnRcIixcIm1hcmdpblJpZ2h0XCIsXCJtYXJnaW5Ub3BcIixcIm1hcmdpbkJvdHRvbVwiXSxnYT1mdW5jdGlvbihhLGIsYyl7aWYoXCJzdmdcIj09PShhLm5vZGVOYW1lK1wiXCIpLnRvTG93ZXJDYXNlKCkpcmV0dXJuKGN8fCQoYSkpW2JdfHwwO2lmKGEuZ2V0Q1RNJiZPYShhKSlyZXR1cm4gYS5nZXRCQm94KClbYl18fDA7dmFyIGQ9cGFyc2VGbG9hdChcIndpZHRoXCI9PT1iP2Eub2Zmc2V0V2lkdGg6YS5vZmZzZXRIZWlnaHQpLGU9ZWFbYl0sZj1lLmxlbmd0aDtmb3IoYz1jfHwkKGEsbnVsbCk7LS1mPi0xOylkLT1wYXJzZUZsb2F0KF8oYSxcInBhZGRpbmdcIitlW2ZdLGMsITApKXx8MCxkLT1wYXJzZUZsb2F0KF8oYSxcImJvcmRlclwiK2VbZl0rXCJXaWR0aFwiLGMsITApKXx8MDtyZXR1cm4gZH0saGE9ZnVuY3Rpb24oYSxiKXtpZihcImNvbnRhaW5cIj09PWF8fFwiYXV0b1wiPT09YXx8XCJhdXRvIGF1dG9cIj09PWEpcmV0dXJuIGErXCIgXCI7KG51bGw9PWF8fFwiXCI9PT1hKSYmKGE9XCIwIDBcIik7dmFyIGMsZD1hLnNwbGl0KFwiIFwiKSxlPS0xIT09YS5pbmRleE9mKFwibGVmdFwiKT9cIjAlXCI6LTEhPT1hLmluZGV4T2YoXCJyaWdodFwiKT9cIjEwMCVcIjpkWzBdLGY9LTEhPT1hLmluZGV4T2YoXCJ0b3BcIik/XCIwJVwiOi0xIT09YS5pbmRleE9mKFwiYm90dG9tXCIpP1wiMTAwJVwiOmRbMV07aWYoZC5sZW5ndGg+MyYmIWIpe2ZvcihkPWEuc3BsaXQoXCIsIFwiKS5qb2luKFwiLFwiKS5zcGxpdChcIixcIiksYT1bXSxjPTA7YzxkLmxlbmd0aDtjKyspYS5wdXNoKGhhKGRbY10pKTtyZXR1cm4gYS5qb2luKFwiLFwiKX1yZXR1cm4gbnVsbD09Zj9mPVwiY2VudGVyXCI9PT1lP1wiNTAlXCI6XCIwXCI6XCJjZW50ZXJcIj09PWYmJihmPVwiNTAlXCIpLChcImNlbnRlclwiPT09ZXx8aXNOYU4ocGFyc2VGbG9hdChlKSkmJi0xPT09KGUrXCJcIikuaW5kZXhPZihcIj1cIikpJiYoZT1cIjUwJVwiKSxhPWUrXCIgXCIrZisoZC5sZW5ndGg+Mj9cIiBcIitkWzJdOlwiXCIpLGImJihiLm94cD0tMSE9PWUuaW5kZXhPZihcIiVcIiksYi5veXA9LTEhPT1mLmluZGV4T2YoXCIlXCIpLGIub3hyPVwiPVwiPT09ZS5jaGFyQXQoMSksYi5veXI9XCI9XCI9PT1mLmNoYXJBdCgxKSxiLm94PXBhcnNlRmxvYXQoZS5yZXBsYWNlKHYsXCJcIikpLGIub3k9cGFyc2VGbG9hdChmLnJlcGxhY2UodixcIlwiKSksYi52PWEpLGJ8fGF9LGlhPWZ1bmN0aW9uKGEsYil7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgYSYmKGE9YShyLHEpKSxcInN0cmluZ1wiPT10eXBlb2YgYSYmXCI9XCI9PT1hLmNoYXJBdCgxKT9wYXJzZUludChhLmNoYXJBdCgwKStcIjFcIiwxMCkqcGFyc2VGbG9hdChhLnN1YnN0cigyKSk6cGFyc2VGbG9hdChhKS1wYXJzZUZsb2F0KGIpfHwwfSxqYT1mdW5jdGlvbihhLGIpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEocixxKSksbnVsbD09YT9iOlwic3RyaW5nXCI9PXR5cGVvZiBhJiZcIj1cIj09PWEuY2hhckF0KDEpP3BhcnNlSW50KGEuY2hhckF0KDApK1wiMVwiLDEwKSpwYXJzZUZsb2F0KGEuc3Vic3RyKDIpKStiOnBhcnNlRmxvYXQoYSl8fDB9LGthPWZ1bmN0aW9uKGEsYixjLGQpe3ZhciBlLGYsZyxoLGksaj0xZS02O3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGEmJihhPWEocixxKSksbnVsbD09YT9oPWI6XCJudW1iZXJcIj09dHlwZW9mIGE/aD1hOihlPTM2MCxmPWEuc3BsaXQoXCJfXCIpLGk9XCI9XCI9PT1hLmNoYXJBdCgxKSxnPShpP3BhcnNlSW50KGEuY2hhckF0KDApK1wiMVwiLDEwKSpwYXJzZUZsb2F0KGZbMF0uc3Vic3RyKDIpKTpwYXJzZUZsb2F0KGZbMF0pKSooLTE9PT1hLmluZGV4T2YoXCJyYWRcIik/MTpMKS0oaT8wOmIpLGYubGVuZ3RoJiYoZCYmKGRbY109YitnKSwtMSE9PWEuaW5kZXhPZihcInNob3J0XCIpJiYoZyU9ZSxnIT09ZyUoZS8yKSYmKGc9MD5nP2crZTpnLWUpKSwtMSE9PWEuaW5kZXhPZihcIl9jd1wiKSYmMD5nP2c9KGcrOTk5OTk5OTk5OSplKSVlLShnL2V8MCkqZTotMSE9PWEuaW5kZXhPZihcImNjd1wiKSYmZz4wJiYoZz0oZy05OTk5OTk5OTk5KmUpJWUtKGcvZXwwKSplKSksaD1iK2cpLGo+aCYmaD4taiYmKGg9MCksaH0sbGE9e2FxdWE6WzAsMjU1LDI1NV0sbGltZTpbMCwyNTUsMF0sc2lsdmVyOlsxOTIsMTkyLDE5Ml0sYmxhY2s6WzAsMCwwXSxtYXJvb246WzEyOCwwLDBdLHRlYWw6WzAsMTI4LDEyOF0sYmx1ZTpbMCwwLDI1NV0sbmF2eTpbMCwwLDEyOF0sd2hpdGU6WzI1NSwyNTUsMjU1XSxmdWNoc2lhOlsyNTUsMCwyNTVdLG9saXZlOlsxMjgsMTI4LDBdLHllbGxvdzpbMjU1LDI1NSwwXSxvcmFuZ2U6WzI1NSwxNjUsMF0sZ3JheTpbMTI4LDEyOCwxMjhdLHB1cnBsZTpbMTI4LDAsMTI4XSxncmVlbjpbMCwxMjgsMF0scmVkOlsyNTUsMCwwXSxwaW5rOlsyNTUsMTkyLDIwM10sY3lhbjpbMCwyNTUsMjU1XSx0cmFuc3BhcmVudDpbMjU1LDI1NSwyNTUsMF19LG1hPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYT0wPmE/YSsxOmE+MT9hLTE6YSwyNTUqKDE+NiphP2IrKGMtYikqYSo2Oi41PmE/YzoyPjMqYT9iKyhjLWIpKigyLzMtYSkqNjpiKSsuNXwwfSxuYT1nLnBhcnNlQ29sb3I9ZnVuY3Rpb24oYSxiKXt2YXIgYyxkLGUsZixnLGgsaSxqLGssbCxtO2lmKGEpaWYoXCJudW1iZXJcIj09dHlwZW9mIGEpYz1bYT4+MTYsYT4+OCYyNTUsMjU1JmFdO2Vsc2V7aWYoXCIsXCI9PT1hLmNoYXJBdChhLmxlbmd0aC0xKSYmKGE9YS5zdWJzdHIoMCxhLmxlbmd0aC0xKSksbGFbYV0pYz1sYVthXTtlbHNlIGlmKFwiI1wiPT09YS5jaGFyQXQoMCkpND09PWEubGVuZ3RoJiYoZD1hLmNoYXJBdCgxKSxlPWEuY2hhckF0KDIpLGY9YS5jaGFyQXQoMyksYT1cIiNcIitkK2QrZStlK2YrZiksYT1wYXJzZUludChhLnN1YnN0cigxKSwxNiksYz1bYT4+MTYsYT4+OCYyNTUsMjU1JmFdO2Vsc2UgaWYoXCJoc2xcIj09PWEuc3Vic3RyKDAsMykpaWYoYz1tPWEubWF0Y2gocyksYil7aWYoLTEhPT1hLmluZGV4T2YoXCI9XCIpKXJldHVybiBhLm1hdGNoKHQpfWVsc2UgZz1OdW1iZXIoY1swXSklMzYwLzM2MCxoPU51bWJlcihjWzFdKS8xMDAsaT1OdW1iZXIoY1syXSkvMTAwLGU9LjU+PWk/aSooaCsxKTppK2gtaSpoLGQ9MippLWUsYy5sZW5ndGg+MyYmKGNbM109TnVtYmVyKGFbM10pKSxjWzBdPW1hKGcrMS8zLGQsZSksY1sxXT1tYShnLGQsZSksY1syXT1tYShnLTEvMyxkLGUpO2Vsc2UgYz1hLm1hdGNoKHMpfHxsYS50cmFuc3BhcmVudDtjWzBdPU51bWJlcihjWzBdKSxjWzFdPU51bWJlcihjWzFdKSxjWzJdPU51bWJlcihjWzJdKSxjLmxlbmd0aD4zJiYoY1szXT1OdW1iZXIoY1szXSkpfWVsc2UgYz1sYS5ibGFjaztyZXR1cm4gYiYmIW0mJihkPWNbMF0vMjU1LGU9Y1sxXS8yNTUsZj1jWzJdLzI1NSxqPU1hdGgubWF4KGQsZSxmKSxrPU1hdGgubWluKGQsZSxmKSxpPShqK2spLzIsaj09PWs/Zz1oPTA6KGw9ai1rLGg9aT4uNT9sLygyLWotayk6bC8oaitrKSxnPWo9PT1kPyhlLWYpL2wrKGY+ZT82OjApOmo9PT1lPyhmLWQpL2wrMjooZC1lKS9sKzQsZyo9NjApLGNbMF09ZysuNXwwLGNbMV09MTAwKmgrLjV8MCxjWzJdPTEwMCppKy41fDApLGN9LG9hPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGY9YS5tYXRjaChwYSl8fFtdLGc9MCxoPVwiXCI7aWYoIWYubGVuZ3RoKXJldHVybiBhO2ZvcihjPTA7YzxmLmxlbmd0aDtjKyspZD1mW2NdLGU9YS5zdWJzdHIoZyxhLmluZGV4T2YoZCxnKS1nKSxnKz1lLmxlbmd0aCtkLmxlbmd0aCxkPW5hKGQsYiksMz09PWQubGVuZ3RoJiZkLnB1c2goMSksaCs9ZSsoYj9cImhzbGEoXCIrZFswXStcIixcIitkWzFdK1wiJSxcIitkWzJdK1wiJSxcIitkWzNdOlwicmdiYShcIitkLmpvaW4oXCIsXCIpKStcIilcIjtyZXR1cm4gaCthLnN1YnN0cihnKX0scGE9XCIoPzpcXFxcYig/Oig/OnJnYnxyZ2JhfGhzbHxoc2xhKVxcXFwoLis/XFxcXCkpfFxcXFxCIyg/OlswLTlhLWZdezN9KXsxLDJ9XFxcXGJcIjtmb3IoaiBpbiBsYSlwYSs9XCJ8XCIraitcIlxcXFxiXCI7cGE9bmV3IFJlZ0V4cChwYStcIilcIixcImdpXCIpLGcuY29sb3JTdHJpbmdGaWx0ZXI9ZnVuY3Rpb24oYSl7dmFyIGIsYz1hWzBdK1wiIFwiK2FbMV07cGEudGVzdChjKSYmKGI9LTEhPT1jLmluZGV4T2YoXCJoc2woXCIpfHwtMSE9PWMuaW5kZXhPZihcImhzbGEoXCIpLGFbMF09b2EoYVswXSxiKSxhWzFdPW9hKGFbMV0sYikpLHBhLmxhc3RJbmRleD0wfSxiLmRlZmF1bHRTdHJpbmdGaWx0ZXJ8fChiLmRlZmF1bHRTdHJpbmdGaWx0ZXI9Zy5jb2xvclN0cmluZ0ZpbHRlcik7dmFyIHFhPWZ1bmN0aW9uKGEsYixjLGQpe2lmKG51bGw9PWEpcmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiBhfTt2YXIgZSxmPWI/KGEubWF0Y2gocGEpfHxbXCJcIl0pWzBdOlwiXCIsZz1hLnNwbGl0KGYpLmpvaW4oXCJcIikubWF0Y2godSl8fFtdLGg9YS5zdWJzdHIoMCxhLmluZGV4T2YoZ1swXSkpLGk9XCIpXCI9PT1hLmNoYXJBdChhLmxlbmd0aC0xKT9cIilcIjpcIlwiLGo9LTEhPT1hLmluZGV4T2YoXCIgXCIpP1wiIFwiOlwiLFwiLGs9Zy5sZW5ndGgsbD1rPjA/Z1swXS5yZXBsYWNlKHMsXCJcIik6XCJcIjtyZXR1cm4gaz9lPWI/ZnVuY3Rpb24oYSl7dmFyIGIsbSxuLG87aWYoXCJudW1iZXJcIj09dHlwZW9mIGEpYSs9bDtlbHNlIGlmKGQmJkkudGVzdChhKSl7Zm9yKG89YS5yZXBsYWNlKEksXCJ8XCIpLnNwbGl0KFwifFwiKSxuPTA7bjxvLmxlbmd0aDtuKyspb1tuXT1lKG9bbl0pO3JldHVybiBvLmpvaW4oXCIsXCIpfWlmKGI9KGEubWF0Y2gocGEpfHxbZl0pWzBdLG09YS5zcGxpdChiKS5qb2luKFwiXCIpLm1hdGNoKHUpfHxbXSxuPW0ubGVuZ3RoLGs+bi0tKWZvcig7KytuPGs7KW1bbl09Yz9tWyhuLTEpLzJ8MF06Z1tuXTtyZXR1cm4gaCttLmpvaW4oaikraitiK2krKC0xIT09YS5pbmRleE9mKFwiaW5zZXRcIik/XCIgaW5zZXRcIjpcIlwiKX06ZnVuY3Rpb24oYSl7dmFyIGIsZixtO2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhKWErPWw7ZWxzZSBpZihkJiZJLnRlc3QoYSkpe2ZvcihmPWEucmVwbGFjZShJLFwifFwiKS5zcGxpdChcInxcIiksbT0wO208Zi5sZW5ndGg7bSsrKWZbbV09ZShmW21dKTtyZXR1cm4gZi5qb2luKFwiLFwiKX1pZihiPWEubWF0Y2godSl8fFtdLG09Yi5sZW5ndGgsaz5tLS0pZm9yKDsrK208azspYlttXT1jP2JbKG0tMSkvMnwwXTpnW21dO3JldHVybiBoK2Iuam9pbihqKStpfTpmdW5jdGlvbihhKXtyZXR1cm4gYX19LHJhPWZ1bmN0aW9uKGEpe3JldHVybiBhPWEuc3BsaXQoXCIsXCIpLGZ1bmN0aW9uKGIsYyxkLGUsZixnLGgpe3ZhciBpLGo9KGMrXCJcIikuc3BsaXQoXCIgXCIpO2ZvcihoPXt9LGk9MDs0Pmk7aSsrKWhbYVtpXV09altpXT1qW2ldfHxqWyhpLTEpLzI+PjBdO3JldHVybiBlLnBhcnNlKGIsaCxmLGcpfX0sc2E9KFMuX3NldFBsdWdpblJhdGlvPWZ1bmN0aW9uKGEpe3RoaXMucGx1Z2luLnNldFJhdGlvKGEpO2Zvcih2YXIgYixjLGQsZSxmLGc9dGhpcy5kYXRhLGg9Zy5wcm94eSxpPWcuZmlyc3RNUFQsaj0xZS02O2k7KWI9aFtpLnZdLGkucj9iPU1hdGgucm91bmQoYik6aj5iJiZiPi1qJiYoYj0wKSxpLnRbaS5wXT1iLGk9aS5fbmV4dDtpZihnLmF1dG9Sb3RhdGUmJihnLmF1dG9Sb3RhdGUucm90YXRpb249Zy5tb2Q/Zy5tb2QoaC5yb3RhdGlvbix0aGlzLnQpOmgucm90YXRpb24pLDE9PT1hfHwwPT09YSlmb3IoaT1nLmZpcnN0TVBULGY9MT09PWE/XCJlXCI6XCJiXCI7aTspe2lmKGM9aS50LGMudHlwZSl7aWYoMT09PWMudHlwZSl7Zm9yKGU9Yy54czArYy5zK2MueHMxLGQ9MTtkPGMubDtkKyspZSs9Y1tcInhuXCIrZF0rY1tcInhzXCIrKGQrMSldO2NbZl09ZX19ZWxzZSBjW2ZdPWMucytjLnhzMDtpPWkuX25leHR9fSxmdW5jdGlvbihhLGIsYyxkLGUpe3RoaXMudD1hLHRoaXMucD1iLHRoaXMudj1jLHRoaXMucj1lLGQmJihkLl9wcmV2PXRoaXMsdGhpcy5fbmV4dD1kKX0pLHRhPShTLl9wYXJzZVRvUHJveHk9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnLGgsaSxqLGssbD1kLG09e30sbj17fSxvPWMuX3RyYW5zZm9ybSxwPU07Zm9yKGMuX3RyYW5zZm9ybT1udWxsLE09YixkPWs9Yy5wYXJzZShhLGIsZCxlKSxNPXAsZiYmKGMuX3RyYW5zZm9ybT1vLGwmJihsLl9wcmV2PW51bGwsbC5fcHJldiYmKGwuX3ByZXYuX25leHQ9bnVsbCkpKTtkJiZkIT09bDspe2lmKGQudHlwZTw9MSYmKGg9ZC5wLG5baF09ZC5zK2QuYyxtW2hdPWQucyxmfHwoaj1uZXcgc2EoZCxcInNcIixoLGosZC5yKSxkLmM9MCksMT09PWQudHlwZSkpZm9yKGc9ZC5sOy0tZz4wOylpPVwieG5cIitnLGg9ZC5wK1wiX1wiK2ksbltoXT1kLmRhdGFbaV0sbVtoXT1kW2ldLGZ8fChqPW5ldyBzYShkLGksaCxqLGQucnhwW2ldKSk7ZD1kLl9uZXh0fXJldHVybntwcm94eTptLGVuZDpuLGZpcnN0TVBUOmoscHQ6a319LFMuQ1NTUHJvcFR3ZWVuPWZ1bmN0aW9uKGEsYixkLGUsZyxoLGksaixrLGwsbSl7dGhpcy50PWEsdGhpcy5wPWIsdGhpcy5zPWQsdGhpcy5jPWUsdGhpcy5uPWl8fGIsYSBpbnN0YW5jZW9mIHRhfHxmLnB1c2godGhpcy5uKSx0aGlzLnI9aix0aGlzLnR5cGU9aHx8MCxrJiYodGhpcy5wcj1rLGM9ITApLHRoaXMuYj12b2lkIDA9PT1sP2Q6bCx0aGlzLmU9dm9pZCAwPT09bT9kK2U6bSxnJiYodGhpcy5fbmV4dD1nLGcuX3ByZXY9dGhpcyl9KSx1YT1mdW5jdGlvbihhLGIsYyxkLGUsZil7dmFyIGc9bmV3IHRhKGEsYixjLGQtYyxlLC0xLGYpO3JldHVybiBnLmI9YyxnLmU9Zy54czA9ZCxnfSx2YT1nLnBhcnNlQ29tcGxleD1mdW5jdGlvbihhLGIsYyxkLGUsZixoLGksaixsKXtjPWN8fGZ8fFwiXCIsXCJmdW5jdGlvblwiPT10eXBlb2YgZCYmKGQ9ZChyLHEpKSxoPW5ldyB0YShhLGIsMCwwLGgsbD8yOjEsbnVsbCwhMSxpLGMsZCksZCs9XCJcIixlJiZwYS50ZXN0KGQrYykmJihkPVtjLGRdLGcuY29sb3JTdHJpbmdGaWx0ZXIoZCksYz1kWzBdLGQ9ZFsxXSk7dmFyIG0sbixvLHAsdSx2LHcseCx5LHosQSxCLEMsRD1jLnNwbGl0KFwiLCBcIikuam9pbihcIixcIikuc3BsaXQoXCIgXCIpLEU9ZC5zcGxpdChcIiwgXCIpLmpvaW4oXCIsXCIpLnNwbGl0KFwiIFwiKSxGPUQubGVuZ3RoLEc9ayE9PSExO2ZvcigoLTEhPT1kLmluZGV4T2YoXCIsXCIpfHwtMSE9PWMuaW5kZXhPZihcIixcIikpJiYoRD1ELmpvaW4oXCIgXCIpLnJlcGxhY2UoSSxcIiwgXCIpLnNwbGl0KFwiIFwiKSxFPUUuam9pbihcIiBcIikucmVwbGFjZShJLFwiLCBcIikuc3BsaXQoXCIgXCIpLEY9RC5sZW5ndGgpLEYhPT1FLmxlbmd0aCYmKEQ9KGZ8fFwiXCIpLnNwbGl0KFwiIFwiKSxGPUQubGVuZ3RoKSxoLnBsdWdpbj1qLGguc2V0UmF0aW89bCxwYS5sYXN0SW5kZXg9MCxtPTA7Rj5tO20rKylpZihwPURbbV0sdT1FW21dLHg9cGFyc2VGbG9hdChwKSx4fHwwPT09eCloLmFwcGVuZFh0cmEoXCJcIix4LGlhKHUseCksdS5yZXBsYWNlKHQsXCJcIiksRyYmLTEhPT11LmluZGV4T2YoXCJweFwiKSwhMCk7ZWxzZSBpZihlJiZwYS50ZXN0KHApKUI9dS5pbmRleE9mKFwiKVwiKSsxLEI9XCIpXCIrKEI/dS5zdWJzdHIoQik6XCJcIiksQz0tMSE9PXUuaW5kZXhPZihcImhzbFwiKSYmVSx6PXUscD1uYShwLEMpLHU9bmEodSxDKSx5PXAubGVuZ3RoK3UubGVuZ3RoPjYseSYmIVUmJjA9PT11WzNdPyhoW1wieHNcIitoLmxdKz1oLmw/XCIgdHJhbnNwYXJlbnRcIjpcInRyYW5zcGFyZW50XCIsaC5lPWguZS5zcGxpdChFW21dKS5qb2luKFwidHJhbnNwYXJlbnRcIikpOihVfHwoeT0hMSksQz9oLmFwcGVuZFh0cmEoei5zdWJzdHIoMCx6LmluZGV4T2YoXCJoc2xcIikpKyh5P1wiaHNsYShcIjpcImhzbChcIikscFswXSxpYSh1WzBdLHBbMF0pLFwiLFwiLCExLCEwKS5hcHBlbmRYdHJhKFwiXCIscFsxXSxpYSh1WzFdLHBbMV0pLFwiJSxcIiwhMSkuYXBwZW5kWHRyYShcIlwiLHBbMl0saWEodVsyXSxwWzJdKSx5P1wiJSxcIjpcIiVcIitCLCExKTpoLmFwcGVuZFh0cmEoei5zdWJzdHIoMCx6LmluZGV4T2YoXCJyZ2JcIikpKyh5P1wicmdiYShcIjpcInJnYihcIikscFswXSx1WzBdLXBbMF0sXCIsXCIsITAsITApLmFwcGVuZFh0cmEoXCJcIixwWzFdLHVbMV0tcFsxXSxcIixcIiwhMCkuYXBwZW5kWHRyYShcIlwiLHBbMl0sdVsyXS1wWzJdLHk/XCIsXCI6QiwhMCkseSYmKHA9cC5sZW5ndGg8ND8xOnBbM10saC5hcHBlbmRYdHJhKFwiXCIscCwodS5sZW5ndGg8ND8xOnVbM10pLXAsQiwhMSkpKSxwYS5sYXN0SW5kZXg9MDtlbHNlIGlmKHY9cC5tYXRjaChzKSl7aWYodz11Lm1hdGNoKHQpLCF3fHx3Lmxlbmd0aCE9PXYubGVuZ3RoKXJldHVybiBoO2ZvcihvPTAsbj0wO248di5sZW5ndGg7bisrKUE9dltuXSx6PXAuaW5kZXhPZihBLG8pLGguYXBwZW5kWHRyYShwLnN1YnN0cihvLHotbyksTnVtYmVyKEEpLGlhKHdbbl0sQSksXCJcIixHJiZcInB4XCI9PT1wLnN1YnN0cih6K0EubGVuZ3RoLDIpLDA9PT1uKSxvPXorQS5sZW5ndGg7aFtcInhzXCIraC5sXSs9cC5zdWJzdHIobyl9ZWxzZSBoW1wieHNcIitoLmxdKz1oLmx8fGhbXCJ4c1wiK2gubF0/XCIgXCIrdTp1O2lmKC0xIT09ZC5pbmRleE9mKFwiPVwiKSYmaC5kYXRhKXtmb3IoQj1oLnhzMCtoLmRhdGEucyxtPTE7bTxoLmw7bSsrKUIrPWhbXCJ4c1wiK21dK2guZGF0YVtcInhuXCIrbV07aC5lPUIraFtcInhzXCIrbV19cmV0dXJuIGgubHx8KGgudHlwZT0tMSxoLnhzMD1oLmUpLGgueGZpcnN0fHxofSx3YT05O2ZvcihqPXRhLnByb3RvdHlwZSxqLmw9ai5wcj0wOy0td2E+MDspaltcInhuXCIrd2FdPTAsaltcInhzXCIrd2FdPVwiXCI7ai54czA9XCJcIixqLl9uZXh0PWouX3ByZXY9ai54Zmlyc3Q9ai5kYXRhPWoucGx1Z2luPWouc2V0UmF0aW89ai5yeHA9bnVsbCxqLmFwcGVuZFh0cmE9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnPXRoaXMsaD1nLmw7cmV0dXJuIGdbXCJ4c1wiK2hdKz1mJiYoaHx8Z1tcInhzXCIraF0pP1wiIFwiK2E6YXx8XCJcIixjfHwwPT09aHx8Zy5wbHVnaW4/KGcubCsrLGcudHlwZT1nLnNldFJhdGlvPzI6MSxnW1wieHNcIitnLmxdPWR8fFwiXCIsaD4wPyhnLmRhdGFbXCJ4blwiK2hdPWIrYyxnLnJ4cFtcInhuXCIraF09ZSxnW1wieG5cIitoXT1iLGcucGx1Z2lufHwoZy54Zmlyc3Q9bmV3IHRhKGcsXCJ4blwiK2gsYixjLGcueGZpcnN0fHxnLDAsZy5uLGUsZy5wciksZy54Zmlyc3QueHMwPTApLGcpOihnLmRhdGE9e3M6YitjfSxnLnJ4cD17fSxnLnM9YixnLmM9YyxnLnI9ZSxnKSk6KGdbXCJ4c1wiK2hdKz1iKyhkfHxcIlwiKSxnKX07dmFyIHhhPWZ1bmN0aW9uKGEsYil7Yj1ifHx7fSx0aGlzLnA9Yi5wcmVmaXg/WihhKXx8YTphLGlbYV09aVt0aGlzLnBdPXRoaXMsdGhpcy5mb3JtYXQ9Yi5mb3JtYXR0ZXJ8fHFhKGIuZGVmYXVsdFZhbHVlLGIuY29sb3IsYi5jb2xsYXBzaWJsZSxiLm11bHRpKSxiLnBhcnNlciYmKHRoaXMucGFyc2U9Yi5wYXJzZXIpLHRoaXMuY2xycz1iLmNvbG9yLHRoaXMubXVsdGk9Yi5tdWx0aSx0aGlzLmtleXdvcmQ9Yi5rZXl3b3JkLHRoaXMuZGZsdD1iLmRlZmF1bHRWYWx1ZSx0aGlzLnByPWIucHJpb3JpdHl8fDB9LHlhPVMuX3JlZ2lzdGVyQ29tcGxleFNwZWNpYWxQcm9wPWZ1bmN0aW9uKGEsYixjKXtcIm9iamVjdFwiIT10eXBlb2YgYiYmKGI9e3BhcnNlcjpjfSk7dmFyIGQsZSxmPWEuc3BsaXQoXCIsXCIpLGc9Yi5kZWZhdWx0VmFsdWU7Zm9yKGM9Y3x8W2ddLGQ9MDtkPGYubGVuZ3RoO2QrKyliLnByZWZpeD0wPT09ZCYmYi5wcmVmaXgsYi5kZWZhdWx0VmFsdWU9Y1tkXXx8ZyxlPW5ldyB4YShmW2RdLGIpfSx6YT1TLl9yZWdpc3RlclBsdWdpblByb3A9ZnVuY3Rpb24oYSl7aWYoIWlbYV0pe3ZhciBiPWEuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYS5zdWJzdHIoMSkrXCJQbHVnaW5cIjt5YShhLHtwYXJzZXI6ZnVuY3Rpb24oYSxjLGQsZSxmLGcsail7dmFyIGs9aC5jb20uZ3JlZW5zb2NrLnBsdWdpbnNbYl07cmV0dXJuIGs/KGsuX2Nzc1JlZ2lzdGVyKCksaVtkXS5wYXJzZShhLGMsZCxlLGYsZyxqKSk6KFcoXCJFcnJvcjogXCIrYitcIiBqcyBmaWxlIG5vdCBsb2FkZWQuXCIpLGYpfX0pfX07aj14YS5wcm90b3R5cGUsai5wYXJzZUNvbXBsZXg9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBnLGgsaSxqLGssbCxtPXRoaXMua2V5d29yZDtpZih0aGlzLm11bHRpJiYoSS50ZXN0KGMpfHxJLnRlc3QoYik/KGg9Yi5yZXBsYWNlKEksXCJ8XCIpLnNwbGl0KFwifFwiKSxpPWMucmVwbGFjZShJLFwifFwiKS5zcGxpdChcInxcIikpOm0mJihoPVtiXSxpPVtjXSkpLGkpe2ZvcihqPWkubGVuZ3RoPmgubGVuZ3RoP2kubGVuZ3RoOmgubGVuZ3RoLGc9MDtqPmc7ZysrKWI9aFtnXT1oW2ddfHx0aGlzLmRmbHQsYz1pW2ddPWlbZ118fHRoaXMuZGZsdCxtJiYoaz1iLmluZGV4T2YobSksbD1jLmluZGV4T2YobSksayE9PWwmJigtMT09PWw/aFtnXT1oW2ddLnNwbGl0KG0pLmpvaW4oXCJcIik6LTE9PT1rJiYoaFtnXSs9XCIgXCIrbSkpKTtiPWguam9pbihcIiwgXCIpLGM9aS5qb2luKFwiLCBcIil9cmV0dXJuIHZhKGEsdGhpcy5wLGIsYyx0aGlzLmNscnMsdGhpcy5kZmx0LGQsdGhpcy5wcixlLGYpfSxqLnBhcnNlPWZ1bmN0aW9uKGEsYixjLGQsZixnLGgpe3JldHVybiB0aGlzLnBhcnNlQ29tcGxleChhLnN0eWxlLHRoaXMuZm9ybWF0KF8oYSx0aGlzLnAsZSwhMSx0aGlzLmRmbHQpKSx0aGlzLmZvcm1hdChiKSxmLGcpfSxnLnJlZ2lzdGVyU3BlY2lhbFByb3A9ZnVuY3Rpb24oYSxiLGMpe3lhKGEse3BhcnNlcjpmdW5jdGlvbihhLGQsZSxmLGcsaCxpKXt2YXIgaj1uZXcgdGEoYSxlLDAsMCxnLDIsZSwhMSxjKTtyZXR1cm4gai5wbHVnaW49aCxqLnNldFJhdGlvPWIoYSxkLGYuX3R3ZWVuLGUpLGp9LHByaW9yaXR5OmN9KX0sZy51c2VTVkdUcmFuc2Zvcm1BdHRyPSEwO3ZhciBBYSxCYT1cInNjYWxlWCxzY2FsZVksc2NhbGVaLHgseSx6LHNrZXdYLHNrZXdZLHJvdGF0aW9uLHJvdGF0aW9uWCxyb3RhdGlvblkscGVyc3BlY3RpdmUseFBlcmNlbnQseVBlcmNlbnRcIi5zcGxpdChcIixcIiksQ2E9WihcInRyYW5zZm9ybVwiKSxEYT1YK1widHJhbnNmb3JtXCIsRWE9WihcInRyYW5zZm9ybU9yaWdpblwiKSxGYT1udWxsIT09WihcInBlcnNwZWN0aXZlXCIpLEdhPVMuVHJhbnNmb3JtPWZ1bmN0aW9uKCl7dGhpcy5wZXJzcGVjdGl2ZT1wYXJzZUZsb2F0KGcuZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlKXx8MCx0aGlzLmZvcmNlM0Q9Zy5kZWZhdWx0Rm9yY2UzRCE9PSExJiZGYT9nLmRlZmF1bHRGb3JjZTNEfHxcImF1dG9cIjohMX0sSGE9X2dzU2NvcGUuU1ZHRWxlbWVudCxJYT1mdW5jdGlvbihhLGIsYyl7dmFyIGQsZT1PLmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsYSksZj0vKFthLXpdKShbQS1aXSkvZztmb3IoZCBpbiBjKWUuc2V0QXR0cmlidXRlTlMobnVsbCxkLnJlcGxhY2UoZixcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCksY1tkXSk7cmV0dXJuIGIuYXBwZW5kQ2hpbGQoZSksZX0sSmE9Ty5kb2N1bWVudEVsZW1lbnR8fHt9LEthPWZ1bmN0aW9uKCl7dmFyIGEsYixjLGQ9cHx8L0FuZHJvaWQvaS50ZXN0KFQpJiYhX2dzU2NvcGUuY2hyb21lO3JldHVybiBPLmNyZWF0ZUVsZW1lbnROUyYmIWQmJihhPUlhKFwic3ZnXCIsSmEpLGI9SWEoXCJyZWN0XCIsYSx7d2lkdGg6MTAwLGhlaWdodDo1MCx4OjEwMH0pLGM9Yi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCxiLnN0eWxlW0VhXT1cIjUwJSA1MCVcIixiLnN0eWxlW0NhXT1cInNjYWxlWCgwLjUpXCIsZD1jPT09Yi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCYmIShuJiZGYSksSmEucmVtb3ZlQ2hpbGQoYSkpLGR9KCksTGE9ZnVuY3Rpb24oYSxiLGMsZCxlLGYpe3ZhciBoLGksaixrLGwsbSxuLG8scCxxLHIscyx0LHUsdj1hLl9nc1RyYW5zZm9ybSx3PVFhKGEsITApO3YmJih0PXYueE9yaWdpbix1PXYueU9yaWdpbiksKCFkfHwoaD1kLnNwbGl0KFwiIFwiKSkubGVuZ3RoPDIpJiYobj1hLmdldEJCb3goKSwwPT09bi54JiYwPT09bi55JiZuLndpZHRoK24uaGVpZ2h0PT09MCYmKG49e3g6cGFyc2VGbG9hdChhLmhhc0F0dHJpYnV0ZShcInhcIik/YS5nZXRBdHRyaWJ1dGUoXCJ4XCIpOmEuaGFzQXR0cmlidXRlKFwiY3hcIik/YS5nZXRBdHRyaWJ1dGUoXCJjeFwiKTowKXx8MCx5OnBhcnNlRmxvYXQoYS5oYXNBdHRyaWJ1dGUoXCJ5XCIpP2EuZ2V0QXR0cmlidXRlKFwieVwiKTphLmhhc0F0dHJpYnV0ZShcImN5XCIpP2EuZ2V0QXR0cmlidXRlKFwiY3lcIik6MCl8fDAsd2lkdGg6MCxoZWlnaHQ6MH0pLGI9aGEoYikuc3BsaXQoXCIgXCIpLGg9WygtMSE9PWJbMF0uaW5kZXhPZihcIiVcIik/cGFyc2VGbG9hdChiWzBdKS8xMDAqbi53aWR0aDpwYXJzZUZsb2F0KGJbMF0pKStuLngsKC0xIT09YlsxXS5pbmRleE9mKFwiJVwiKT9wYXJzZUZsb2F0KGJbMV0pLzEwMCpuLmhlaWdodDpwYXJzZUZsb2F0KGJbMV0pKStuLnldKSxjLnhPcmlnaW49az1wYXJzZUZsb2F0KGhbMF0pLGMueU9yaWdpbj1sPXBhcnNlRmxvYXQoaFsxXSksZCYmdyE9PVBhJiYobT13WzBdLG49d1sxXSxvPXdbMl0scD13WzNdLHE9d1s0XSxyPXdbNV0scz1tKnAtbipvLHMmJihpPWsqKHAvcykrbCooLW8vcykrKG8qci1wKnEpL3Msaj1rKigtbi9zKStsKihtL3MpLShtKnItbipxKS9zLGs9Yy54T3JpZ2luPWhbMF09aSxsPWMueU9yaWdpbj1oWzFdPWopKSx2JiYoZiYmKGMueE9mZnNldD12LnhPZmZzZXQsYy55T2Zmc2V0PXYueU9mZnNldCx2PWMpLGV8fGUhPT0hMSYmZy5kZWZhdWx0U21vb3RoT3JpZ2luIT09ITE/KGk9ay10LGo9bC11LHYueE9mZnNldCs9aSp3WzBdK2oqd1syXS1pLHYueU9mZnNldCs9aSp3WzFdK2oqd1szXS1qKTp2LnhPZmZzZXQ9di55T2Zmc2V0PTApLGZ8fGEuc2V0QXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIsaC5qb2luKFwiIFwiKSl9LE1hPWZ1bmN0aW9uKGEpe3ZhciBiLGM9UChcInN2Z1wiLHRoaXMub3duZXJTVkdFbGVtZW50LmdldEF0dHJpYnV0ZShcInhtbG5zXCIpfHxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIpLGQ9dGhpcy5wYXJlbnROb2RlLGU9dGhpcy5uZXh0U2libGluZyxmPXRoaXMuc3R5bGUuY3NzVGV4dDtpZihKYS5hcHBlbmRDaGlsZChjKSxjLmFwcGVuZENoaWxkKHRoaXMpLHRoaXMuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsYSl0cnl7Yj10aGlzLmdldEJCb3goKSx0aGlzLl9vcmlnaW5hbEdldEJCb3g9dGhpcy5nZXRCQm94LHRoaXMuZ2V0QkJveD1NYX1jYXRjaChnKXt9ZWxzZSB0aGlzLl9vcmlnaW5hbEdldEJCb3gmJihiPXRoaXMuX29yaWdpbmFsR2V0QkJveCgpKTtyZXR1cm4gZT9kLmluc2VydEJlZm9yZSh0aGlzLGUpOmQuYXBwZW5kQ2hpbGQodGhpcyksSmEucmVtb3ZlQ2hpbGQoYyksdGhpcy5zdHlsZS5jc3NUZXh0PWYsYn0sTmE9ZnVuY3Rpb24oYSl7dHJ5e3JldHVybiBhLmdldEJCb3goKX1jYXRjaChiKXtyZXR1cm4gTWEuY2FsbChhLCEwKX19LE9hPWZ1bmN0aW9uKGEpe3JldHVybiEoIShIYSYmYS5nZXRDVE0mJk5hKGEpKXx8YS5wYXJlbnROb2RlJiYhYS5vd25lclNWR0VsZW1lbnQpfSxQYT1bMSwwLDAsMSwwLDBdLFFhPWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoLGk9YS5fZ3NUcmFuc2Zvcm18fG5ldyBHYSxqPTFlNSxrPWEuc3R5bGU7aWYoQ2E/ZD1fKGEsRGEsbnVsbCwhMCk6YS5jdXJyZW50U3R5bGUmJihkPWEuY3VycmVudFN0eWxlLmZpbHRlci5tYXRjaChHKSxkPWQmJjQ9PT1kLmxlbmd0aD9bZFswXS5zdWJzdHIoNCksTnVtYmVyKGRbMl0uc3Vic3RyKDQpKSxOdW1iZXIoZFsxXS5zdWJzdHIoNCkpLGRbM10uc3Vic3RyKDQpLGkueHx8MCxpLnl8fDBdLmpvaW4oXCIsXCIpOlwiXCIpLGM9IWR8fFwibm9uZVwiPT09ZHx8XCJtYXRyaXgoMSwgMCwgMCwgMSwgMCwgMClcIj09PWQsIUNhfHwhKGg9XCJub25lXCI9PT0kKGEpLmRpc3BsYXkpJiZhLnBhcmVudE5vZGV8fChoJiYoZj1rLmRpc3BsYXksay5kaXNwbGF5PVwiYmxvY2tcIiksYS5wYXJlbnROb2RlfHwoZz0xLEphLmFwcGVuZENoaWxkKGEpKSxkPV8oYSxEYSxudWxsLCEwKSxjPSFkfHxcIm5vbmVcIj09PWR8fFwibWF0cml4KDEsIDAsIDAsIDEsIDAsIDApXCI9PT1kLGY/ay5kaXNwbGF5PWY6aCYmVmEoayxcImRpc3BsYXlcIiksZyYmSmEucmVtb3ZlQ2hpbGQoYSkpLChpLnN2Z3x8YS5nZXRDVE0mJk9hKGEpKSYmKGMmJi0xIT09KGtbQ2FdK1wiXCIpLmluZGV4T2YoXCJtYXRyaXhcIikmJihkPWtbQ2FdLGM9MCksZT1hLmdldEF0dHJpYnV0ZShcInRyYW5zZm9ybVwiKSxjJiZlJiYoLTEhPT1lLmluZGV4T2YoXCJtYXRyaXhcIik/KGQ9ZSxjPTApOi0xIT09ZS5pbmRleE9mKFwidHJhbnNsYXRlXCIpJiYoZD1cIm1hdHJpeCgxLDAsMCwxLFwiK2UubWF0Y2goLyg/OlxcLXxcXGIpW1xcZFxcLVxcLmVdK1xcYi9naSkuam9pbihcIixcIikrXCIpXCIsYz0wKSkpLGMpcmV0dXJuIFBhO2ZvcihlPShkfHxcIlwiKS5tYXRjaChzKXx8W10sd2E9ZS5sZW5ndGg7LS13YT4tMTspZj1OdW1iZXIoZVt3YV0pLGVbd2FdPShnPWYtKGZ8PTApKT8oZypqKygwPmc/LS41Oi41KXwwKS9qK2Y6ZjtyZXR1cm4gYiYmZS5sZW5ndGg+Nj9bZVswXSxlWzFdLGVbNF0sZVs1XSxlWzEyXSxlWzEzXV06ZX0sUmE9Uy5nZXRUcmFuc2Zvcm09ZnVuY3Rpb24oYSxjLGQsZSl7aWYoYS5fZ3NUcmFuc2Zvcm0mJmQmJiFlKXJldHVybiBhLl9nc1RyYW5zZm9ybTt2YXIgZixoLGksaixrLGwsbT1kP2EuX2dzVHJhbnNmb3JtfHxuZXcgR2E6bmV3IEdhLG49bS5zY2FsZVg8MCxvPTJlLTUscD0xZTUscT1GYT9wYXJzZUZsb2F0KF8oYSxFYSxjLCExLFwiMCAwIDBcIikuc3BsaXQoXCIgXCIpWzJdKXx8bS56T3JpZ2lufHwwOjAscj1wYXJzZUZsb2F0KGcuZGVmYXVsdFRyYW5zZm9ybVBlcnNwZWN0aXZlKXx8MDtpZihtLnN2Zz0hKCFhLmdldENUTXx8IU9hKGEpKSxtLnN2ZyYmKExhKGEsXyhhLEVhLGMsITEsXCI1MCUgNTAlXCIpK1wiXCIsbSxhLmdldEF0dHJpYnV0ZShcImRhdGEtc3ZnLW9yaWdpblwiKSksQWE9Zy51c2VTVkdUcmFuc2Zvcm1BdHRyfHxLYSksZj1RYShhKSxmIT09UGEpe2lmKDE2PT09Zi5sZW5ndGgpe3ZhciBzLHQsdSx2LHcseD1mWzBdLHk9ZlsxXSx6PWZbMl0sQT1mWzNdLEI9Zls0XSxDPWZbNV0sRD1mWzZdLEU9Zls3XSxGPWZbOF0sRz1mWzldLEg9ZlsxMF0sST1mWzEyXSxKPWZbMTNdLEs9ZlsxNF0sTT1mWzExXSxOPU1hdGguYXRhbjIoRCxIKTttLnpPcmlnaW4mJihLPS1tLnpPcmlnaW4sST1GKkstZlsxMl0sSj1HKkstZlsxM10sSz1IKksrbS56T3JpZ2luLWZbMTRdKSxtLnJvdGF0aW9uWD1OKkwsTiYmKHY9TWF0aC5jb3MoLU4pLHc9TWF0aC5zaW4oLU4pLHM9Qip2K0Yqdyx0PUMqditHKncsdT1EKnYrSCp3LEY9QiotdytGKnYsRz1DKi13K0cqdixIPUQqLXcrSCp2LE09RSotdytNKnYsQj1zLEM9dCxEPXUpLE49TWF0aC5hdGFuMigteixIKSxtLnJvdGF0aW9uWT1OKkwsTiYmKHY9TWF0aC5jb3MoLU4pLHc9TWF0aC5zaW4oLU4pLHM9eCp2LUYqdyx0PXkqdi1HKncsdT16KnYtSCp3LEc9eSp3K0cqdixIPXoqdytIKnYsTT1BKncrTSp2LHg9cyx5PXQsej11KSxOPU1hdGguYXRhbjIoeSx4KSxtLnJvdGF0aW9uPU4qTCxOJiYodj1NYXRoLmNvcyhOKSx3PU1hdGguc2luKE4pLHM9eCp2K3kqdyx0PUIqditDKncsdT1GKnYrRyp3LHk9eSp2LXgqdyxDPUMqdi1CKncsRz1HKnYtRip3LHg9cyxCPXQsRj11KSxtLnJvdGF0aW9uWCYmTWF0aC5hYnMobS5yb3RhdGlvblgpK01hdGguYWJzKG0ucm90YXRpb24pPjM1OS45JiYobS5yb3RhdGlvblg9bS5yb3RhdGlvbj0wLG0ucm90YXRpb25ZPTE4MC1tLnJvdGF0aW9uWSksTj1NYXRoLmF0YW4yKEIsQyksbS5zY2FsZVg9KE1hdGguc3FydCh4KngreSp5K3oqeikqcCsuNXwwKS9wLG0uc2NhbGVZPShNYXRoLnNxcnQoQypDK0QqRCkqcCsuNXwwKS9wLG0uc2NhbGVaPShNYXRoLnNxcnQoRipGK0cqRytIKkgpKnArLjV8MCkvcCx4Lz1tLnNjYWxlWCxCLz1tLnNjYWxlWSx5Lz1tLnNjYWxlWCxDLz1tLnNjYWxlWSxNYXRoLmFicyhOKT5vPyhtLnNrZXdYPU4qTCxCPTAsXCJzaW1wbGVcIiE9PW0uc2tld1R5cGUmJihtLnNjYWxlWSo9MS9NYXRoLmNvcyhOKSkpOm0uc2tld1g9MCxtLnBlcnNwZWN0aXZlPU0/MS8oMD5NPy1NOk0pOjAsbS54PUksbS55PUosbS56PUssbS5zdmcmJihtLngtPW0ueE9yaWdpbi0obS54T3JpZ2luKngtbS55T3JpZ2luKkIpLG0ueS09bS55T3JpZ2luLShtLnlPcmlnaW4qeS1tLnhPcmlnaW4qQykpfWVsc2UgaWYoIUZhfHxlfHwhZi5sZW5ndGh8fG0ueCE9PWZbNF18fG0ueSE9PWZbNV18fCFtLnJvdGF0aW9uWCYmIW0ucm90YXRpb25ZKXt2YXIgTz1mLmxlbmd0aD49NixQPU8/ZlswXToxLFE9ZlsxXXx8MCxSPWZbMl18fDAsUz1PP2ZbM106MTttLng9Zls0XXx8MCxtLnk9Zls1XXx8MCxpPU1hdGguc3FydChQKlArUSpRKSxqPU1hdGguc3FydChTKlMrUipSKSxrPVB8fFE/TWF0aC5hdGFuMihRLFApKkw6bS5yb3RhdGlvbnx8MCxsPVJ8fFM/TWF0aC5hdGFuMihSLFMpKkwrazptLnNrZXdYfHwwLG0uc2NhbGVYPWksbS5zY2FsZVk9aixtLnJvdGF0aW9uPWssbS5za2V3WD1sLEZhJiYobS5yb3RhdGlvblg9bS5yb3RhdGlvblk9bS56PTAsbS5wZXJzcGVjdGl2ZT1yLG0uc2NhbGVaPTEpLG0uc3ZnJiYobS54LT1tLnhPcmlnaW4tKG0ueE9yaWdpbipQK20ueU9yaWdpbipSKSxtLnktPW0ueU9yaWdpbi0obS54T3JpZ2luKlErbS55T3JpZ2luKlMpKX1NYXRoLmFicyhtLnNrZXdYKT45MCYmTWF0aC5hYnMobS5za2V3WCk8MjcwJiYobj8obS5zY2FsZVgqPS0xLG0uc2tld1grPW0ucm90YXRpb248PTA/MTgwOi0xODAsbS5yb3RhdGlvbis9bS5yb3RhdGlvbjw9MD8xODA6LTE4MCk6KG0uc2NhbGVZKj0tMSxtLnNrZXdYKz1tLnNrZXdYPD0wPzE4MDotMTgwKSksbS56T3JpZ2luPXE7Zm9yKGggaW4gbSltW2hdPG8mJm1baF0+LW8mJihtW2hdPTApfXJldHVybiBkJiYoYS5fZ3NUcmFuc2Zvcm09bSxtLnN2ZyYmKEFhJiZhLnN0eWxlW0NhXT9iLmRlbGF5ZWRDYWxsKC4wMDEsZnVuY3Rpb24oKXtWYShhLnN0eWxlLENhKX0pOiFBYSYmYS5nZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikmJmIuZGVsYXllZENhbGwoLjAwMSxmdW5jdGlvbigpe2EucmVtb3ZlQXR0cmlidXRlKFwidHJhbnNmb3JtXCIpfSkpKSxtfSxTYT1mdW5jdGlvbihhKXt2YXIgYixjLGQ9dGhpcy5kYXRhLGU9LWQucm90YXRpb24qSyxmPWUrZC5za2V3WCpLLGc9MWU1LGg9KE1hdGguY29zKGUpKmQuc2NhbGVYKmd8MCkvZyxpPShNYXRoLnNpbihlKSpkLnNjYWxlWCpnfDApL2csaj0oTWF0aC5zaW4oZikqLWQuc2NhbGVZKmd8MCkvZyxrPShNYXRoLmNvcyhmKSpkLnNjYWxlWSpnfDApL2csbD10aGlzLnQuc3R5bGUsbT10aGlzLnQuY3VycmVudFN0eWxlO2lmKG0pe2M9aSxpPS1qLGo9LWMsYj1tLmZpbHRlcixsLmZpbHRlcj1cIlwiO3ZhciBuLG8scT10aGlzLnQub2Zmc2V0V2lkdGgscj10aGlzLnQub2Zmc2V0SGVpZ2h0LHM9XCJhYnNvbHV0ZVwiIT09bS5wb3NpdGlvbix0PVwicHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChNMTE9XCIraCtcIiwgTTEyPVwiK2krXCIsIE0yMT1cIitqK1wiLCBNMjI9XCIrayx1PWQueCtxKmQueFBlcmNlbnQvMTAwLHY9ZC55K3IqZC55UGVyY2VudC8xMDA7aWYobnVsbCE9ZC5veCYmKG49KGQub3hwP3EqZC5veCouMDE6ZC5veCktcS8yLG89KGQub3lwP3IqZC5veSouMDE6ZC5veSktci8yLHUrPW4tKG4qaCtvKmkpLHYrPW8tKG4qaitvKmspKSxzPyhuPXEvMixvPXIvMix0Kz1cIiwgRHg9XCIrKG4tKG4qaCtvKmkpK3UpK1wiLCBEeT1cIisoby0obipqK28qaykrdikrXCIpXCIpOnQrPVwiLCBzaXppbmdNZXRob2Q9J2F1dG8gZXhwYW5kJylcIiwtMSE9PWIuaW5kZXhPZihcIkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0Lk1hdHJpeChcIik/bC5maWx0ZXI9Yi5yZXBsYWNlKEgsdCk6bC5maWx0ZXI9dCtcIiBcIitiLCgwPT09YXx8MT09PWEpJiYxPT09aCYmMD09PWkmJjA9PT1qJiYxPT09ayYmKHMmJi0xPT09dC5pbmRleE9mKFwiRHg9MCwgRHk9MFwiKXx8eC50ZXN0KGIpJiYxMDAhPT1wYXJzZUZsb2F0KFJlZ0V4cC4kMSl8fC0xPT09Yi5pbmRleE9mKGIuaW5kZXhPZihcIkFscGhhXCIpKSYmbC5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIikpLCFzKXt2YXIgeSx6LEEsQj04PnA/MTotMTtmb3Iobj1kLmllT2Zmc2V0WHx8MCxvPWQuaWVPZmZzZXRZfHwwLGQuaWVPZmZzZXRYPU1hdGgucm91bmQoKHEtKCgwPmg/LWg6aCkqcSsoMD5pPy1pOmkpKnIpKS8yK3UpLGQuaWVPZmZzZXRZPU1hdGgucm91bmQoKHItKCgwPms/LWs6aykqcisoMD5qPy1qOmopKnEpKS8yK3YpLHdhPTA7ND53YTt3YSsrKXo9ZmFbd2FdLHk9bVt6XSxjPS0xIT09eS5pbmRleE9mKFwicHhcIik/cGFyc2VGbG9hdCh5KTphYSh0aGlzLnQseixwYXJzZUZsb2F0KHkpLHkucmVwbGFjZSh3LFwiXCIpKXx8MCxBPWMhPT1kW3pdPzI+d2E/LWQuaWVPZmZzZXRYOi1kLmllT2Zmc2V0WToyPndhP24tZC5pZU9mZnNldFg6by1kLmllT2Zmc2V0WSxsW3pdPShkW3pdPU1hdGgucm91bmQoYy1BKigwPT09d2F8fDI9PT13YT8xOkIpKSkrXCJweFwifX19LFRhPVMuc2V0M0RUcmFuc2Zvcm1SYXRpbz1TLnNldFRyYW5zZm9ybVJhdGlvPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlLGYsZyxoLGksaixrLGwsbSxvLHAscSxyLHMsdCx1LHYsdyx4LHksej10aGlzLmRhdGEsQT10aGlzLnQuc3R5bGUsQj16LnJvdGF0aW9uLEM9ei5yb3RhdGlvblgsRD16LnJvdGF0aW9uWSxFPXouc2NhbGVYLEY9ei5zY2FsZVksRz16LnNjYWxlWixIPXoueCxJPXoueSxKPXoueixMPXouc3ZnLE09ei5wZXJzcGVjdGl2ZSxOPXouZm9yY2UzRCxPPXouc2tld1ksUD16LnNrZXdYO2lmKE8mJihQKz1PLEIrPU8pLCgoMT09PWF8fDA9PT1hKSYmXCJhdXRvXCI9PT1OJiYodGhpcy50d2Vlbi5fdG90YWxUaW1lPT09dGhpcy50d2Vlbi5fdG90YWxEdXJhdGlvbnx8IXRoaXMudHdlZW4uX3RvdGFsVGltZSl8fCFOKSYmIUomJiFNJiYhRCYmIUMmJjE9PT1HfHxBYSYmTHx8IUZhKXJldHVybiB2b2lkKEJ8fFB8fEw/KEIqPUsseD1QKksseT0xZTUsYz1NYXRoLmNvcyhCKSpFLGY9TWF0aC5zaW4oQikqRSxkPU1hdGguc2luKEIteCkqLUYsZz1NYXRoLmNvcyhCLXgpKkYseCYmXCJzaW1wbGVcIj09PXouc2tld1R5cGUmJihiPU1hdGgudGFuKHgtTypLKSxiPU1hdGguc3FydCgxK2IqYiksZCo9YixnKj1iLE8mJihiPU1hdGgudGFuKE8qSyksYj1NYXRoLnNxcnQoMStiKmIpLGMqPWIsZio9YikpLEwmJihIKz16LnhPcmlnaW4tKHoueE9yaWdpbipjK3oueU9yaWdpbipkKSt6LnhPZmZzZXQsSSs9ei55T3JpZ2luLSh6LnhPcmlnaW4qZit6LnlPcmlnaW4qZykrei55T2Zmc2V0LEFhJiYoei54UGVyY2VudHx8ei55UGVyY2VudCkmJihxPXRoaXMudC5nZXRCQm94KCksSCs9LjAxKnoueFBlcmNlbnQqcS53aWR0aCxJKz0uMDEqei55UGVyY2VudCpxLmhlaWdodCkscT0xZS02LHE+SCYmSD4tcSYmKEg9MCkscT5JJiZJPi1xJiYoST0wKSksdT0oYyp5fDApL3krXCIsXCIrKGYqeXwwKS95K1wiLFwiKyhkKnl8MCkveStcIixcIisoZyp5fDApL3krXCIsXCIrSCtcIixcIitJK1wiKVwiLEwmJkFhP3RoaXMudC5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIixcIm1hdHJpeChcIit1KTpBW0NhXT0oei54UGVyY2VudHx8ei55UGVyY2VudD9cInRyYW5zbGF0ZShcIit6LnhQZXJjZW50K1wiJSxcIit6LnlQZXJjZW50K1wiJSkgbWF0cml4KFwiOlwibWF0cml4KFwiKSt1KTpBW0NhXT0oei54UGVyY2VudHx8ei55UGVyY2VudD9cInRyYW5zbGF0ZShcIit6LnhQZXJjZW50K1wiJSxcIit6LnlQZXJjZW50K1wiJSkgbWF0cml4KFwiOlwibWF0cml4KFwiKStFK1wiLDAsMCxcIitGK1wiLFwiK0grXCIsXCIrSStcIilcIik7aWYobiYmKHE9MWUtNCxxPkUmJkU+LXEmJihFPUc9MmUtNSkscT5GJiZGPi1xJiYoRj1HPTJlLTUpLCFNfHx6Lnp8fHoucm90YXRpb25YfHx6LnJvdGF0aW9uWXx8KE09MCkpLEJ8fFApQio9SyxyPWM9TWF0aC5jb3MoQikscz1mPU1hdGguc2luKEIpLFAmJihCLT1QKksscj1NYXRoLmNvcyhCKSxzPU1hdGguc2luKEIpLFwic2ltcGxlXCI9PT16LnNrZXdUeXBlJiYoYj1NYXRoLnRhbigoUC1PKSpLKSxiPU1hdGguc3FydCgxK2IqYikscio9YixzKj1iLHouc2tld1kmJihiPU1hdGgudGFuKE8qSyksYj1NYXRoLnNxcnQoMStiKmIpLGMqPWIsZio9YikpKSxkPS1zLGc9cjtlbHNle2lmKCEoRHx8Q3x8MSE9PUd8fE18fEwpKXJldHVybiB2b2lkKEFbQ2FdPSh6LnhQZXJjZW50fHx6LnlQZXJjZW50P1widHJhbnNsYXRlKFwiK3oueFBlcmNlbnQrXCIlLFwiK3oueVBlcmNlbnQrXCIlKSB0cmFuc2xhdGUzZChcIjpcInRyYW5zbGF0ZTNkKFwiKStIK1wicHgsXCIrSStcInB4LFwiK0orXCJweClcIisoMSE9PUV8fDEhPT1GP1wiIHNjYWxlKFwiK0UrXCIsXCIrRitcIilcIjpcIlwiKSk7Yz1nPTEsZD1mPTB9az0xLGU9aD1pPWo9bD1tPTAsbz1NPy0xL006MCxwPXouek9yaWdpbixxPTFlLTYsdj1cIixcIix3PVwiMFwiLEI9RCpLLEImJihyPU1hdGguY29zKEIpLHM9TWF0aC5zaW4oQiksaT0tcyxsPW8qLXMsZT1jKnMsaD1mKnMsaz1yLG8qPXIsYyo9cixmKj1yKSxCPUMqSyxCJiYocj1NYXRoLmNvcyhCKSxzPU1hdGguc2luKEIpLGI9ZCpyK2Uqcyx0PWcqcitoKnMsaj1rKnMsbT1vKnMsZT1kKi1zK2UqcixoPWcqLXMraCpyLGsqPXIsbyo9cixkPWIsZz10KSwxIT09RyYmKGUqPUcsaCo9RyxrKj1HLG8qPUcpLDEhPT1GJiYoZCo9RixnKj1GLGoqPUYsbSo9RiksMSE9PUUmJihjKj1FLGYqPUUsaSo9RSxsKj1FKSwocHx8TCkmJihwJiYoSCs9ZSotcCxJKz1oKi1wLEorPWsqLXArcCksTCYmKEgrPXoueE9yaWdpbi0oei54T3JpZ2luKmMrei55T3JpZ2luKmQpK3oueE9mZnNldCxJKz16LnlPcmlnaW4tKHoueE9yaWdpbipmK3oueU9yaWdpbipnKSt6LnlPZmZzZXQpLHE+SCYmSD4tcSYmKEg9dykscT5JJiZJPi1xJiYoST13KSxxPkomJko+LXEmJihKPTApKSx1PXoueFBlcmNlbnR8fHoueVBlcmNlbnQ/XCJ0cmFuc2xhdGUoXCIrei54UGVyY2VudCtcIiUsXCIrei55UGVyY2VudCtcIiUpIG1hdHJpeDNkKFwiOlwibWF0cml4M2QoXCIsdSs9KHE+YyYmYz4tcT93OmMpK3YrKHE+ZiYmZj4tcT93OmYpK3YrKHE+aSYmaT4tcT93OmkpLHUrPXYrKHE+bCYmbD4tcT93OmwpK3YrKHE+ZCYmZD4tcT93OmQpK3YrKHE+ZyYmZz4tcT93OmcpLEN8fER8fDEhPT1HPyh1Kz12KyhxPmomJmo+LXE/dzpqKSt2KyhxPm0mJm0+LXE/dzptKSt2KyhxPmUmJmU+LXE/dzplKSx1Kz12KyhxPmgmJmg+LXE/dzpoKSt2KyhxPmsmJms+LXE/dzprKSt2KyhxPm8mJm8+LXE/dzpvKSt2KTp1Kz1cIiwwLDAsMCwwLDEsMCxcIix1Kz1IK3YrSSt2K0ordisoTT8xKy1KL006MSkrXCIpXCIsQVtDYV09dX07aj1HYS5wcm90b3R5cGUsai54PWoueT1qLno9ai5za2V3WD1qLnNrZXdZPWoucm90YXRpb249ai5yb3RhdGlvblg9ai5yb3RhdGlvblk9ai56T3JpZ2luPWoueFBlcmNlbnQ9ai55UGVyY2VudD1qLnhPZmZzZXQ9ai55T2Zmc2V0PTAsai5zY2FsZVg9ai5zY2FsZVk9ai5zY2FsZVo9MSx5YShcInRyYW5zZm9ybSxzY2FsZSxzY2FsZVgsc2NhbGVZLHNjYWxlWix4LHkseixyb3RhdGlvbixyb3RhdGlvblgscm90YXRpb25ZLHJvdGF0aW9uWixza2V3WCxza2V3WSxzaG9ydFJvdGF0aW9uLHNob3J0Um90YXRpb25YLHNob3J0Um90YXRpb25ZLHNob3J0Um90YXRpb25aLHRyYW5zZm9ybU9yaWdpbixzdmdPcmlnaW4sdHJhbnNmb3JtUGVyc3BlY3RpdmUsZGlyZWN0aW9uYWxSb3RhdGlvbixwYXJzZVRyYW5zZm9ybSxmb3JjZTNELHNrZXdUeXBlLHhQZXJjZW50LHlQZXJjZW50LHNtb290aE9yaWdpblwiLHtwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZCxmLGgsaSl7aWYoZC5fbGFzdFBhcnNlZFRyYW5zZm9ybT09PWkpcmV0dXJuIGY7ZC5fbGFzdFBhcnNlZFRyYW5zZm9ybT1pO3ZhciBqLGs9aS5zY2FsZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgaS5zY2FsZT9pLnNjYWxlOjA7XCJmdW5jdGlvblwiPT10eXBlb2YgaVtjXSYmKGo9aVtjXSxpW2NdPWIpLGsmJihpLnNjYWxlPWsocixhKSk7dmFyIGwsbSxuLG8scCxzLHQsdSx2LHc9YS5fZ3NUcmFuc2Zvcm0seD1hLnN0eWxlLHk9MWUtNix6PUJhLmxlbmd0aCxBPWksQj17fSxDPVwidHJhbnNmb3JtT3JpZ2luXCIsRD1SYShhLGUsITAsQS5wYXJzZVRyYW5zZm9ybSksRT1BLnRyYW5zZm9ybSYmKFwiZnVuY3Rpb25cIj09dHlwZW9mIEEudHJhbnNmb3JtP0EudHJhbnNmb3JtKHIscSk6QS50cmFuc2Zvcm0pO2lmKEQuc2tld1R5cGU9QS5za2V3VHlwZXx8RC5za2V3VHlwZXx8Zy5kZWZhdWx0U2tld1R5cGUsZC5fdHJhbnNmb3JtPUQsRSYmXCJzdHJpbmdcIj09dHlwZW9mIEUmJkNhKW09US5zdHlsZSxcbm1bQ2FdPUUsbS5kaXNwbGF5PVwiYmxvY2tcIixtLnBvc2l0aW9uPVwiYWJzb2x1dGVcIixPLmJvZHkuYXBwZW5kQ2hpbGQoUSksbD1SYShRLG51bGwsITEpLFwic2ltcGxlXCI9PT1ELnNrZXdUeXBlJiYobC5zY2FsZVkqPU1hdGguY29zKGwuc2tld1gqSykpLEQuc3ZnJiYocz1ELnhPcmlnaW4sdD1ELnlPcmlnaW4sbC54LT1ELnhPZmZzZXQsbC55LT1ELnlPZmZzZXQsKEEudHJhbnNmb3JtT3JpZ2lufHxBLnN2Z09yaWdpbikmJihFPXt9LExhKGEsaGEoQS50cmFuc2Zvcm1PcmlnaW4pLEUsQS5zdmdPcmlnaW4sQS5zbW9vdGhPcmlnaW4sITApLHM9RS54T3JpZ2luLHQ9RS55T3JpZ2luLGwueC09RS54T2Zmc2V0LUQueE9mZnNldCxsLnktPUUueU9mZnNldC1ELnlPZmZzZXQpLChzfHx0KSYmKHU9UWEoUSwhMCksbC54LT1zLShzKnVbMF0rdCp1WzJdKSxsLnktPXQtKHMqdVsxXSt0KnVbM10pKSksTy5ib2R5LnJlbW92ZUNoaWxkKFEpLGwucGVyc3BlY3RpdmV8fChsLnBlcnNwZWN0aXZlPUQucGVyc3BlY3RpdmUpLG51bGwhPUEueFBlcmNlbnQmJihsLnhQZXJjZW50PWphKEEueFBlcmNlbnQsRC54UGVyY2VudCkpLG51bGwhPUEueVBlcmNlbnQmJihsLnlQZXJjZW50PWphKEEueVBlcmNlbnQsRC55UGVyY2VudCkpO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIEEpe2lmKGw9e3NjYWxlWDpqYShudWxsIT1BLnNjYWxlWD9BLnNjYWxlWDpBLnNjYWxlLEQuc2NhbGVYKSxzY2FsZVk6amEobnVsbCE9QS5zY2FsZVk/QS5zY2FsZVk6QS5zY2FsZSxELnNjYWxlWSksc2NhbGVaOmphKEEuc2NhbGVaLEQuc2NhbGVaKSx4OmphKEEueCxELngpLHk6amEoQS55LEQueSksejpqYShBLnosRC56KSx4UGVyY2VudDpqYShBLnhQZXJjZW50LEQueFBlcmNlbnQpLHlQZXJjZW50OmphKEEueVBlcmNlbnQsRC55UGVyY2VudCkscGVyc3BlY3RpdmU6amEoQS50cmFuc2Zvcm1QZXJzcGVjdGl2ZSxELnBlcnNwZWN0aXZlKX0scD1BLmRpcmVjdGlvbmFsUm90YXRpb24sbnVsbCE9cClpZihcIm9iamVjdFwiPT10eXBlb2YgcClmb3IobSBpbiBwKUFbbV09cFttXTtlbHNlIEEucm90YXRpb249cDtcInN0cmluZ1wiPT10eXBlb2YgQS54JiYtMSE9PUEueC5pbmRleE9mKFwiJVwiKSYmKGwueD0wLGwueFBlcmNlbnQ9amEoQS54LEQueFBlcmNlbnQpKSxcInN0cmluZ1wiPT10eXBlb2YgQS55JiYtMSE9PUEueS5pbmRleE9mKFwiJVwiKSYmKGwueT0wLGwueVBlcmNlbnQ9amEoQS55LEQueVBlcmNlbnQpKSxsLnJvdGF0aW9uPWthKFwicm90YXRpb25cImluIEE/QS5yb3RhdGlvbjpcInNob3J0Um90YXRpb25cImluIEE/QS5zaG9ydFJvdGF0aW9uK1wiX3Nob3J0XCI6XCJyb3RhdGlvblpcImluIEE/QS5yb3RhdGlvblo6RC5yb3RhdGlvbixELnJvdGF0aW9uLFwicm90YXRpb25cIixCKSxGYSYmKGwucm90YXRpb25YPWthKFwicm90YXRpb25YXCJpbiBBP0Eucm90YXRpb25YOlwic2hvcnRSb3RhdGlvblhcImluIEE/QS5zaG9ydFJvdGF0aW9uWCtcIl9zaG9ydFwiOkQucm90YXRpb25YfHwwLEQucm90YXRpb25YLFwicm90YXRpb25YXCIsQiksbC5yb3RhdGlvblk9a2EoXCJyb3RhdGlvbllcImluIEE/QS5yb3RhdGlvblk6XCJzaG9ydFJvdGF0aW9uWVwiaW4gQT9BLnNob3J0Um90YXRpb25ZK1wiX3Nob3J0XCI6RC5yb3RhdGlvbll8fDAsRC5yb3RhdGlvblksXCJyb3RhdGlvbllcIixCKSksbC5za2V3WD1rYShBLnNrZXdYLEQuc2tld1gpLGwuc2tld1k9a2EoQS5za2V3WSxELnNrZXdZKX1mb3IoRmEmJm51bGwhPUEuZm9yY2UzRCYmKEQuZm9yY2UzRD1BLmZvcmNlM0Qsbz0hMCksbj1ELmZvcmNlM0R8fEQuenx8RC5yb3RhdGlvblh8fEQucm90YXRpb25ZfHxsLnp8fGwucm90YXRpb25YfHxsLnJvdGF0aW9uWXx8bC5wZXJzcGVjdGl2ZSxufHxudWxsPT1BLnNjYWxlfHwobC5zY2FsZVo9MSk7LS16Pi0xOyl2PUJhW3pdLEU9bFt2XS1EW3ZdLChFPnl8fC15PkV8fG51bGwhPUFbdl18fG51bGwhPU1bdl0pJiYobz0hMCxmPW5ldyB0YShELHYsRFt2XSxFLGYpLHYgaW4gQiYmKGYuZT1CW3ZdKSxmLnhzMD0wLGYucGx1Z2luPWgsZC5fb3ZlcndyaXRlUHJvcHMucHVzaChmLm4pKTtyZXR1cm4gRT1BLnRyYW5zZm9ybU9yaWdpbixELnN2ZyYmKEV8fEEuc3ZnT3JpZ2luKSYmKHM9RC54T2Zmc2V0LHQ9RC55T2Zmc2V0LExhKGEsaGEoRSksbCxBLnN2Z09yaWdpbixBLnNtb290aE9yaWdpbiksZj11YShELFwieE9yaWdpblwiLCh3P0Q6bCkueE9yaWdpbixsLnhPcmlnaW4sZixDKSxmPXVhKEQsXCJ5T3JpZ2luXCIsKHc/RDpsKS55T3JpZ2luLGwueU9yaWdpbixmLEMpLChzIT09RC54T2Zmc2V0fHx0IT09RC55T2Zmc2V0KSYmKGY9dWEoRCxcInhPZmZzZXRcIix3P3M6RC54T2Zmc2V0LEQueE9mZnNldCxmLEMpLGY9dWEoRCxcInlPZmZzZXRcIix3P3Q6RC55T2Zmc2V0LEQueU9mZnNldCxmLEMpKSxFPVwiMHB4IDBweFwiKSwoRXx8RmEmJm4mJkQuek9yaWdpbikmJihDYT8obz0hMCx2PUVhLEU9KEV8fF8oYSx2LGUsITEsXCI1MCUgNTAlXCIpKStcIlwiLGY9bmV3IHRhKHgsdiwwLDAsZiwtMSxDKSxmLmI9eFt2XSxmLnBsdWdpbj1oLEZhPyhtPUQuek9yaWdpbixFPUUuc3BsaXQoXCIgXCIpLEQuek9yaWdpbj0oRS5sZW5ndGg+MiYmKDA9PT1tfHxcIjBweFwiIT09RVsyXSk/cGFyc2VGbG9hdChFWzJdKTptKXx8MCxmLnhzMD1mLmU9RVswXStcIiBcIisoRVsxXXx8XCI1MCVcIikrXCIgMHB4XCIsZj1uZXcgdGEoRCxcInpPcmlnaW5cIiwwLDAsZiwtMSxmLm4pLGYuYj1tLGYueHMwPWYuZT1ELnpPcmlnaW4pOmYueHMwPWYuZT1FKTpoYShFK1wiXCIsRCkpLG8mJihkLl90cmFuc2Zvcm1UeXBlPUQuc3ZnJiZBYXx8IW4mJjMhPT10aGlzLl90cmFuc2Zvcm1UeXBlPzI6MyksaiYmKGlbY109aiksayYmKGkuc2NhbGU9ayksZn0scHJlZml4OiEwfSkseWEoXCJib3hTaGFkb3dcIix7ZGVmYXVsdFZhbHVlOlwiMHB4IDBweCAwcHggMHB4ICM5OTlcIixwcmVmaXg6ITAsY29sb3I6ITAsbXVsdGk6ITAsa2V5d29yZDpcImluc2V0XCJ9KSx5YShcImJvcmRlclJhZGl1c1wiLHtkZWZhdWx0VmFsdWU6XCIwcHhcIixwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZixnLGgpe2I9dGhpcy5mb3JtYXQoYik7dmFyIGksaixrLGwsbSxuLG8scCxxLHIscyx0LHUsdix3LHgseT1bXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIl0sej1hLnN0eWxlO2ZvcihxPXBhcnNlRmxvYXQoYS5vZmZzZXRXaWR0aCkscj1wYXJzZUZsb2F0KGEub2Zmc2V0SGVpZ2h0KSxpPWIuc3BsaXQoXCIgXCIpLGo9MDtqPHkubGVuZ3RoO2orKyl0aGlzLnAuaW5kZXhPZihcImJvcmRlclwiKSYmKHlbal09Wih5W2pdKSksbT1sPV8oYSx5W2pdLGUsITEsXCIwcHhcIiksLTEhPT1tLmluZGV4T2YoXCIgXCIpJiYobD1tLnNwbGl0KFwiIFwiKSxtPWxbMF0sbD1sWzFdKSxuPWs9aVtqXSxvPXBhcnNlRmxvYXQobSksdD1tLnN1YnN0cigobytcIlwiKS5sZW5ndGgpLHU9XCI9XCI9PT1uLmNoYXJBdCgxKSx1PyhwPXBhcnNlSW50KG4uY2hhckF0KDApK1wiMVwiLDEwKSxuPW4uc3Vic3RyKDIpLHAqPXBhcnNlRmxvYXQobikscz1uLnN1YnN0cigocCtcIlwiKS5sZW5ndGgtKDA+cD8xOjApKXx8XCJcIik6KHA9cGFyc2VGbG9hdChuKSxzPW4uc3Vic3RyKChwK1wiXCIpLmxlbmd0aCkpLFwiXCI9PT1zJiYocz1kW2NdfHx0KSxzIT09dCYmKHY9YWEoYSxcImJvcmRlckxlZnRcIixvLHQpLHc9YWEoYSxcImJvcmRlclRvcFwiLG8sdCksXCIlXCI9PT1zPyhtPXYvcSoxMDArXCIlXCIsbD13L3IqMTAwK1wiJVwiKTpcImVtXCI9PT1zPyh4PWFhKGEsXCJib3JkZXJMZWZ0XCIsMSxcImVtXCIpLG09di94K1wiZW1cIixsPXcveCtcImVtXCIpOihtPXYrXCJweFwiLGw9dytcInB4XCIpLHUmJihuPXBhcnNlRmxvYXQobSkrcCtzLGs9cGFyc2VGbG9hdChsKStwK3MpKSxnPXZhKHoseVtqXSxtK1wiIFwiK2wsbitcIiBcIitrLCExLFwiMHB4XCIsZyk7cmV0dXJuIGd9LHByZWZpeDohMCxmb3JtYXR0ZXI6cWEoXCIwcHggMHB4IDBweCAwcHhcIiwhMSwhMCl9KSx5YShcImJvcmRlckJvdHRvbUxlZnRSYWRpdXMsYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMsYm9yZGVyVG9wTGVmdFJhZGl1cyxib3JkZXJUb3BSaWdodFJhZGl1c1wiLHtkZWZhdWx0VmFsdWU6XCIwcHhcIixwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZCxmLGcpe3JldHVybiB2YShhLnN0eWxlLGMsdGhpcy5mb3JtYXQoXyhhLGMsZSwhMSxcIjBweCAwcHhcIikpLHRoaXMuZm9ybWF0KGIpLCExLFwiMHB4XCIsZil9LHByZWZpeDohMCxmb3JtYXR0ZXI6cWEoXCIwcHggMHB4XCIsITEsITApfSkseWEoXCJiYWNrZ3JvdW5kUG9zaXRpb25cIix7ZGVmYXVsdFZhbHVlOlwiMCAwXCIscGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZixnKXt2YXIgaCxpLGosayxsLG0sbj1cImJhY2tncm91bmQtcG9zaXRpb25cIixvPWV8fCQoYSxudWxsKSxxPXRoaXMuZm9ybWF0KChvP3A/by5nZXRQcm9wZXJ0eVZhbHVlKG4rXCIteFwiKStcIiBcIitvLmdldFByb3BlcnR5VmFsdWUobitcIi15XCIpOm8uZ2V0UHJvcGVydHlWYWx1ZShuKTphLmN1cnJlbnRTdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb25YK1wiIFwiK2EuY3VycmVudFN0eWxlLmJhY2tncm91bmRQb3NpdGlvblkpfHxcIjAgMFwiKSxyPXRoaXMuZm9ybWF0KGIpO2lmKC0xIT09cS5pbmRleE9mKFwiJVwiKSE9KC0xIT09ci5pbmRleE9mKFwiJVwiKSkmJnIuc3BsaXQoXCIsXCIpLmxlbmd0aDwyJiYobT1fKGEsXCJiYWNrZ3JvdW5kSW1hZ2VcIikucmVwbGFjZShELFwiXCIpLG0mJlwibm9uZVwiIT09bSkpe2ZvcihoPXEuc3BsaXQoXCIgXCIpLGk9ci5zcGxpdChcIiBcIiksUi5zZXRBdHRyaWJ1dGUoXCJzcmNcIixtKSxqPTI7LS1qPi0xOylxPWhbal0saz0tMSE9PXEuaW5kZXhPZihcIiVcIiksayE9PSgtMSE9PWlbal0uaW5kZXhPZihcIiVcIikpJiYobD0wPT09aj9hLm9mZnNldFdpZHRoLVIud2lkdGg6YS5vZmZzZXRIZWlnaHQtUi5oZWlnaHQsaFtqXT1rP3BhcnNlRmxvYXQocSkvMTAwKmwrXCJweFwiOnBhcnNlRmxvYXQocSkvbCoxMDArXCIlXCIpO3E9aC5qb2luKFwiIFwiKX1yZXR1cm4gdGhpcy5wYXJzZUNvbXBsZXgoYS5zdHlsZSxxLHIsZixnKX0sZm9ybWF0dGVyOmhhfSkseWEoXCJiYWNrZ3JvdW5kU2l6ZVwiLHtkZWZhdWx0VmFsdWU6XCIwIDBcIixmb3JtYXR0ZXI6ZnVuY3Rpb24oYSl7cmV0dXJuIGErPVwiXCIsaGEoLTE9PT1hLmluZGV4T2YoXCIgXCIpP2ErXCIgXCIrYTphKX19KSx5YShcInBlcnNwZWN0aXZlXCIse2RlZmF1bHRWYWx1ZTpcIjBweFwiLHByZWZpeDohMH0pLHlhKFwicGVyc3BlY3RpdmVPcmlnaW5cIix7ZGVmYXVsdFZhbHVlOlwiNTAlIDUwJVwiLHByZWZpeDohMH0pLHlhKFwidHJhbnNmb3JtU3R5bGVcIix7cHJlZml4OiEwfSkseWEoXCJiYWNrZmFjZVZpc2liaWxpdHlcIix7cHJlZml4OiEwfSkseWEoXCJ1c2VyU2VsZWN0XCIse3ByZWZpeDohMH0pLHlhKFwibWFyZ2luXCIse3BhcnNlcjpyYShcIm1hcmdpblRvcCxtYXJnaW5SaWdodCxtYXJnaW5Cb3R0b20sbWFyZ2luTGVmdFwiKX0pLHlhKFwicGFkZGluZ1wiLHtwYXJzZXI6cmEoXCJwYWRkaW5nVG9wLHBhZGRpbmdSaWdodCxwYWRkaW5nQm90dG9tLHBhZGRpbmdMZWZ0XCIpfSkseWEoXCJjbGlwXCIse2RlZmF1bHRWYWx1ZTpcInJlY3QoMHB4LDBweCwwcHgsMHB4KVwiLHBhcnNlcjpmdW5jdGlvbihhLGIsYyxkLGYsZyl7dmFyIGgsaSxqO3JldHVybiA5PnA/KGk9YS5jdXJyZW50U3R5bGUsaj04PnA/XCIgXCI6XCIsXCIsaD1cInJlY3QoXCIraS5jbGlwVG9wK2oraS5jbGlwUmlnaHQraitpLmNsaXBCb3R0b20raitpLmNsaXBMZWZ0K1wiKVwiLGI9dGhpcy5mb3JtYXQoYikuc3BsaXQoXCIsXCIpLmpvaW4oaikpOihoPXRoaXMuZm9ybWF0KF8oYSx0aGlzLnAsZSwhMSx0aGlzLmRmbHQpKSxiPXRoaXMuZm9ybWF0KGIpKSx0aGlzLnBhcnNlQ29tcGxleChhLnN0eWxlLGgsYixmLGcpfX0pLHlhKFwidGV4dFNoYWRvd1wiLHtkZWZhdWx0VmFsdWU6XCIwcHggMHB4IDBweCAjOTk5XCIsY29sb3I6ITAsbXVsdGk6ITB9KSx5YShcImF1dG9Sb3VuZCxzdHJpY3RVbml0c1wiLHtwYXJzZXI6ZnVuY3Rpb24oYSxiLGMsZCxlKXtyZXR1cm4gZX19KSx5YShcImJvcmRlclwiLHtkZWZhdWx0VmFsdWU6XCIwcHggc29saWQgIzAwMFwiLHBhcnNlcjpmdW5jdGlvbihhLGIsYyxkLGYsZyl7dmFyIGg9XyhhLFwiYm9yZGVyVG9wV2lkdGhcIixlLCExLFwiMHB4XCIpLGk9dGhpcy5mb3JtYXQoYikuc3BsaXQoXCIgXCIpLGo9aVswXS5yZXBsYWNlKHcsXCJcIik7cmV0dXJuXCJweFwiIT09aiYmKGg9cGFyc2VGbG9hdChoKS9hYShhLFwiYm9yZGVyVG9wV2lkdGhcIiwxLGopK2opLHRoaXMucGFyc2VDb21wbGV4KGEuc3R5bGUsdGhpcy5mb3JtYXQoaCtcIiBcIitfKGEsXCJib3JkZXJUb3BTdHlsZVwiLGUsITEsXCJzb2xpZFwiKStcIiBcIitfKGEsXCJib3JkZXJUb3BDb2xvclwiLGUsITEsXCIjMDAwXCIpKSxpLmpvaW4oXCIgXCIpLGYsZyl9LGNvbG9yOiEwLGZvcm1hdHRlcjpmdW5jdGlvbihhKXt2YXIgYj1hLnNwbGl0KFwiIFwiKTtyZXR1cm4gYlswXStcIiBcIisoYlsxXXx8XCJzb2xpZFwiKStcIiBcIisoYS5tYXRjaChwYSl8fFtcIiMwMDBcIl0pWzBdfX0pLHlhKFwiYm9yZGVyV2lkdGhcIix7cGFyc2VyOnJhKFwiYm9yZGVyVG9wV2lkdGgsYm9yZGVyUmlnaHRXaWR0aCxib3JkZXJCb3R0b21XaWR0aCxib3JkZXJMZWZ0V2lkdGhcIil9KSx5YShcImZsb2F0LGNzc0Zsb2F0LHN0eWxlRmxvYXRcIix7cGFyc2VyOmZ1bmN0aW9uKGEsYixjLGQsZSxmKXt2YXIgZz1hLnN0eWxlLGg9XCJjc3NGbG9hdFwiaW4gZz9cImNzc0Zsb2F0XCI6XCJzdHlsZUZsb2F0XCI7cmV0dXJuIG5ldyB0YShnLGgsMCwwLGUsLTEsYywhMSwwLGdbaF0sYil9fSk7dmFyIFVhPWZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy50LGQ9Yy5maWx0ZXJ8fF8odGhpcy5kYXRhLFwiZmlsdGVyXCIpfHxcIlwiLGU9dGhpcy5zK3RoaXMuYyphfDA7MTAwPT09ZSYmKC0xPT09ZC5pbmRleE9mKFwiYXRyaXgoXCIpJiYtMT09PWQuaW5kZXhPZihcInJhZGllbnQoXCIpJiYtMT09PWQuaW5kZXhPZihcIm9hZGVyKFwiKT8oYy5yZW1vdmVBdHRyaWJ1dGUoXCJmaWx0ZXJcIiksYj0hXyh0aGlzLmRhdGEsXCJmaWx0ZXJcIikpOihjLmZpbHRlcj1kLnJlcGxhY2UoeixcIlwiKSxiPSEwKSksYnx8KHRoaXMueG4xJiYoYy5maWx0ZXI9ZD1kfHxcImFscGhhKG9wYWNpdHk9XCIrZStcIilcIiksLTE9PT1kLmluZGV4T2YoXCJwYWNpdHlcIik/MD09PWUmJnRoaXMueG4xfHwoYy5maWx0ZXI9ZCtcIiBhbHBoYShvcGFjaXR5PVwiK2UrXCIpXCIpOmMuZmlsdGVyPWQucmVwbGFjZSh4LFwib3BhY2l0eT1cIitlKSl9O3lhKFwib3BhY2l0eSxhbHBoYSxhdXRvQWxwaGFcIix7ZGVmYXVsdFZhbHVlOlwiMVwiLHBhcnNlcjpmdW5jdGlvbihhLGIsYyxkLGYsZyl7dmFyIGg9cGFyc2VGbG9hdChfKGEsXCJvcGFjaXR5XCIsZSwhMSxcIjFcIikpLGk9YS5zdHlsZSxqPVwiYXV0b0FscGhhXCI9PT1jO3JldHVyblwic3RyaW5nXCI9PXR5cGVvZiBiJiZcIj1cIj09PWIuY2hhckF0KDEpJiYoYj0oXCItXCI9PT1iLmNoYXJBdCgwKT8tMToxKSpwYXJzZUZsb2F0KGIuc3Vic3RyKDIpKStoKSxqJiYxPT09aCYmXCJoaWRkZW5cIj09PV8oYSxcInZpc2liaWxpdHlcIixlKSYmMCE9PWImJihoPTApLFU/Zj1uZXcgdGEoaSxcIm9wYWNpdHlcIixoLGItaCxmKTooZj1uZXcgdGEoaSxcIm9wYWNpdHlcIiwxMDAqaCwxMDAqKGItaCksZiksZi54bjE9aj8xOjAsaS56b29tPTEsZi50eXBlPTIsZi5iPVwiYWxwaGEob3BhY2l0eT1cIitmLnMrXCIpXCIsZi5lPVwiYWxwaGEob3BhY2l0eT1cIisoZi5zK2YuYykrXCIpXCIsZi5kYXRhPWEsZi5wbHVnaW49ZyxmLnNldFJhdGlvPVVhKSxqJiYoZj1uZXcgdGEoaSxcInZpc2liaWxpdHlcIiwwLDAsZiwtMSxudWxsLCExLDAsMCE9PWg/XCJpbmhlcml0XCI6XCJoaWRkZW5cIiwwPT09Yj9cImhpZGRlblwiOlwiaW5oZXJpdFwiKSxmLnhzMD1cImluaGVyaXRcIixkLl9vdmVyd3JpdGVQcm9wcy5wdXNoKGYubiksZC5fb3ZlcndyaXRlUHJvcHMucHVzaChjKSksZn19KTt2YXIgVmE9ZnVuY3Rpb24oYSxiKXtiJiYoYS5yZW1vdmVQcm9wZXJ0eT8oKFwibXNcIj09PWIuc3Vic3RyKDAsMil8fFwid2Via2l0XCI9PT1iLnN1YnN0cigwLDYpKSYmKGI9XCItXCIrYiksYS5yZW1vdmVQcm9wZXJ0eShiLnJlcGxhY2UoQixcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKSk6YS5yZW1vdmVBdHRyaWJ1dGUoYikpfSxXYT1mdW5jdGlvbihhKXtpZih0aGlzLnQuX2dzQ2xhc3NQVD10aGlzLDE9PT1hfHwwPT09YSl7dGhpcy50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsMD09PWE/dGhpcy5iOnRoaXMuZSk7Zm9yKHZhciBiPXRoaXMuZGF0YSxjPXRoaXMudC5zdHlsZTtiOyliLnY/Y1tiLnBdPWIudjpWYShjLGIucCksYj1iLl9uZXh0OzE9PT1hJiZ0aGlzLnQuX2dzQ2xhc3NQVD09PXRoaXMmJih0aGlzLnQuX2dzQ2xhc3NQVD1udWxsKX1lbHNlIHRoaXMudC5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSE9PXRoaXMuZSYmdGhpcy50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsdGhpcy5lKX07eWEoXCJjbGFzc05hbWVcIix7cGFyc2VyOmZ1bmN0aW9uKGEsYixkLGYsZyxoLGkpe3ZhciBqLGssbCxtLG4sbz1hLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpfHxcIlwiLHA9YS5zdHlsZS5jc3NUZXh0O2lmKGc9Zi5fY2xhc3NOYW1lUFQ9bmV3IHRhKGEsZCwwLDAsZywyKSxnLnNldFJhdGlvPVdhLGcucHI9LTExLGM9ITAsZy5iPW8saz1jYShhLGUpLGw9YS5fZ3NDbGFzc1BUKXtmb3IobT17fSxuPWwuZGF0YTtuOyltW24ucF09MSxuPW4uX25leHQ7bC5zZXRSYXRpbygxKX1yZXR1cm4gYS5fZ3NDbGFzc1BUPWcsZy5lPVwiPVwiIT09Yi5jaGFyQXQoMSk/YjpvLnJlcGxhY2UobmV3IFJlZ0V4cChcIig/OlxcXFxzfF4pXCIrYi5zdWJzdHIoMikrXCIoPyFbXFxcXHctXSlcIiksXCJcIikrKFwiK1wiPT09Yi5jaGFyQXQoMCk/XCIgXCIrYi5zdWJzdHIoMik6XCJcIiksYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLGcuZSksaj1kYShhLGssY2EoYSksaSxtKSxhLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsbyksZy5kYXRhPWouZmlyc3RNUFQsYS5zdHlsZS5jc3NUZXh0PXAsZz1nLnhmaXJzdD1mLnBhcnNlKGEsai5kaWZzLGcsaCl9fSk7dmFyIFhhPWZ1bmN0aW9uKGEpe2lmKCgxPT09YXx8MD09PWEpJiZ0aGlzLmRhdGEuX3RvdGFsVGltZT09PXRoaXMuZGF0YS5fdG90YWxEdXJhdGlvbiYmXCJpc0Zyb21TdGFydFwiIT09dGhpcy5kYXRhLmRhdGEpe3ZhciBiLGMsZCxlLGYsZz10aGlzLnQuc3R5bGUsaD1pLnRyYW5zZm9ybS5wYXJzZTtpZihcImFsbFwiPT09dGhpcy5lKWcuY3NzVGV4dD1cIlwiLGU9ITA7ZWxzZSBmb3IoYj10aGlzLmUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIikuc3BsaXQoXCIsXCIpLGQ9Yi5sZW5ndGg7LS1kPi0xOyljPWJbZF0saVtjXSYmKGlbY10ucGFyc2U9PT1oP2U9ITA6Yz1cInRyYW5zZm9ybU9yaWdpblwiPT09Yz9FYTppW2NdLnApLFZhKGcsYyk7ZSYmKFZhKGcsQ2EpLGY9dGhpcy50Ll9nc1RyYW5zZm9ybSxmJiYoZi5zdmcmJih0aGlzLnQucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1zdmctb3JpZ2luXCIpLHRoaXMudC5yZW1vdmVBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIikpLGRlbGV0ZSB0aGlzLnQuX2dzVHJhbnNmb3JtKSl9fTtmb3IoeWEoXCJjbGVhclByb3BzXCIse3BhcnNlcjpmdW5jdGlvbihhLGIsZCxlLGYpe3JldHVybiBmPW5ldyB0YShhLGQsMCwwLGYsMiksZi5zZXRSYXRpbz1YYSxmLmU9YixmLnByPS0xMCxmLmRhdGE9ZS5fdHdlZW4sYz0hMCxmfX0pLGo9XCJiZXppZXIsdGhyb3dQcm9wcyxwaHlzaWNzUHJvcHMscGh5c2ljczJEXCIuc3BsaXQoXCIsXCIpLHdhPWoubGVuZ3RoO3dhLS07KXphKGpbd2FdKTtqPWcucHJvdG90eXBlLGouX2ZpcnN0UFQ9ai5fbGFzdFBhcnNlZFRyYW5zZm9ybT1qLl90cmFuc2Zvcm09bnVsbCxqLl9vbkluaXRUd2Vlbj1mdW5jdGlvbihhLGIsaCxqKXtpZighYS5ub2RlVHlwZSlyZXR1cm4hMTt0aGlzLl90YXJnZXQ9cT1hLHRoaXMuX3R3ZWVuPWgsdGhpcy5fdmFycz1iLHI9aixrPWIuYXV0b1JvdW5kLGM9ITEsZD1iLnN1ZmZpeE1hcHx8Zy5zdWZmaXhNYXAsZT0kKGEsXCJcIiksZj10aGlzLl9vdmVyd3JpdGVQcm9wczt2YXIgbixwLHMsdCx1LHYsdyx4LHosQT1hLnN0eWxlO2lmKGwmJlwiXCI9PT1BLnpJbmRleCYmKG49XyhhLFwiekluZGV4XCIsZSksKFwiYXV0b1wiPT09bnx8XCJcIj09PW4pJiZ0aGlzLl9hZGRMYXp5U2V0KEEsXCJ6SW5kZXhcIiwwKSksXCJzdHJpbmdcIj09dHlwZW9mIGImJih0PUEuY3NzVGV4dCxuPWNhKGEsZSksQS5jc3NUZXh0PXQrXCI7XCIrYixuPWRhKGEsbixjYShhKSkuZGlmcywhVSYmeS50ZXN0KGIpJiYobi5vcGFjaXR5PXBhcnNlRmxvYXQoUmVnRXhwLiQxKSksYj1uLEEuY3NzVGV4dD10KSxiLmNsYXNzTmFtZT90aGlzLl9maXJzdFBUPXA9aS5jbGFzc05hbWUucGFyc2UoYSxiLmNsYXNzTmFtZSxcImNsYXNzTmFtZVwiLHRoaXMsbnVsbCxudWxsLGIpOnRoaXMuX2ZpcnN0UFQ9cD10aGlzLnBhcnNlKGEsYixudWxsKSx0aGlzLl90cmFuc2Zvcm1UeXBlKXtmb3Ioej0zPT09dGhpcy5fdHJhbnNmb3JtVHlwZSxDYT9tJiYobD0hMCxcIlwiPT09QS56SW5kZXgmJih3PV8oYSxcInpJbmRleFwiLGUpLChcImF1dG9cIj09PXd8fFwiXCI9PT13KSYmdGhpcy5fYWRkTGF6eVNldChBLFwiekluZGV4XCIsMCkpLG8mJnRoaXMuX2FkZExhenlTZXQoQSxcIldlYmtpdEJhY2tmYWNlVmlzaWJpbGl0eVwiLHRoaXMuX3ZhcnMuV2Via2l0QmFja2ZhY2VWaXNpYmlsaXR5fHwoej9cInZpc2libGVcIjpcImhpZGRlblwiKSkpOkEuem9vbT0xLHM9cDtzJiZzLl9uZXh0OylzPXMuX25leHQ7eD1uZXcgdGEoYSxcInRyYW5zZm9ybVwiLDAsMCxudWxsLDIpLHRoaXMuX2xpbmtDU1NQKHgsbnVsbCxzKSx4LnNldFJhdGlvPUNhP1RhOlNhLHguZGF0YT10aGlzLl90cmFuc2Zvcm18fFJhKGEsZSwhMCkseC50d2Vlbj1oLHgucHI9LTEsZi5wb3AoKX1pZihjKXtmb3IoO3A7KXtmb3Iodj1wLl9uZXh0LHM9dDtzJiZzLnByPnAucHI7KXM9cy5fbmV4dDsocC5fcHJldj1zP3MuX3ByZXY6dSk/cC5fcHJldi5fbmV4dD1wOnQ9cCwocC5fbmV4dD1zKT9zLl9wcmV2PXA6dT1wLHA9dn10aGlzLl9maXJzdFBUPXR9cmV0dXJuITB9LGoucGFyc2U9ZnVuY3Rpb24oYSxiLGMsZil7dmFyIGcsaCxqLGwsbSxuLG8scCxzLHQsdT1hLnN0eWxlO2ZvcihnIGluIGIpe2lmKG49YltnXSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHIscSkpLGg9aVtnXSljPWgucGFyc2UoYSxuLGcsdGhpcyxjLGYsYik7ZWxzZXtpZihcIi0tXCI9PT1nLnN1YnN0cigwLDIpKXt0aGlzLl90d2Vlbi5fcHJvcExvb2t1cFtnXT10aGlzLl9hZGRUd2Vlbi5jYWxsKHRoaXMuX3R3ZWVuLGEuc3R5bGUsXCJzZXRQcm9wZXJ0eVwiLCQoYSkuZ2V0UHJvcGVydHlWYWx1ZShnKStcIlwiLG4rXCJcIixnLCExLGcpO2NvbnRpbnVlfW09XyhhLGcsZSkrXCJcIixzPVwic3RyaW5nXCI9PXR5cGVvZiBuLFwiY29sb3JcIj09PWd8fFwiZmlsbFwiPT09Z3x8XCJzdHJva2VcIj09PWd8fC0xIT09Zy5pbmRleE9mKFwiQ29sb3JcIil8fHMmJkEudGVzdChuKT8oc3x8KG49bmEobiksbj0obi5sZW5ndGg+Mz9cInJnYmEoXCI6XCJyZ2IoXCIpK24uam9pbihcIixcIikrXCIpXCIpLGM9dmEodSxnLG0sbiwhMCxcInRyYW5zcGFyZW50XCIsYywwLGYpKTpzJiZKLnRlc3Qobik/Yz12YSh1LGcsbSxuLCEwLG51bGwsYywwLGYpOihqPXBhcnNlRmxvYXQobSksbz1qfHwwPT09aj9tLnN1YnN0cigoaitcIlwiKS5sZW5ndGgpOlwiXCIsKFwiXCI9PT1tfHxcImF1dG9cIj09PW0pJiYoXCJ3aWR0aFwiPT09Z3x8XCJoZWlnaHRcIj09PWc/KGo9Z2EoYSxnLGUpLG89XCJweFwiKTpcImxlZnRcIj09PWd8fFwidG9wXCI9PT1nPyhqPWJhKGEsZyxlKSxvPVwicHhcIik6KGo9XCJvcGFjaXR5XCIhPT1nPzA6MSxvPVwiXCIpKSx0PXMmJlwiPVwiPT09bi5jaGFyQXQoMSksdD8obD1wYXJzZUludChuLmNoYXJBdCgwKStcIjFcIiwxMCksbj1uLnN1YnN0cigyKSxsKj1wYXJzZUZsb2F0KG4pLHA9bi5yZXBsYWNlKHcsXCJcIikpOihsPXBhcnNlRmxvYXQobikscD1zP24ucmVwbGFjZSh3LFwiXCIpOlwiXCIpLFwiXCI9PT1wJiYocD1nIGluIGQ/ZFtnXTpvKSxuPWx8fDA9PT1sPyh0P2wrajpsKStwOmJbZ10sbyE9PXAmJihcIlwiIT09cHx8XCJsaW5lSGVpZ2h0XCI9PT1nKSYmKGx8fDA9PT1sKSYmaiYmKGo9YWEoYSxnLGosbyksXCIlXCI9PT1wPyhqLz1hYShhLGcsMTAwLFwiJVwiKS8xMDAsYi5zdHJpY3RVbml0cyE9PSEwJiYobT1qK1wiJVwiKSk6XCJlbVwiPT09cHx8XCJyZW1cIj09PXB8fFwidndcIj09PXB8fFwidmhcIj09PXA/ai89YWEoYSxnLDEscCk6XCJweFwiIT09cCYmKGw9YWEoYSxnLGwscCkscD1cInB4XCIpLHQmJihsfHwwPT09bCkmJihuPWwraitwKSksdCYmKGwrPWopLCFqJiYwIT09anx8IWwmJjAhPT1sP3ZvaWQgMCE9PXVbZ10mJihufHxuK1wiXCIhPVwiTmFOXCImJm51bGwhPW4pPyhjPW5ldyB0YSh1LGcsbHx8anx8MCwwLGMsLTEsZywhMSwwLG0sbiksYy54czA9XCJub25lXCIhPT1ufHxcImRpc3BsYXlcIiE9PWcmJi0xPT09Zy5pbmRleE9mKFwiU3R5bGVcIik/bjptKTpXKFwiaW52YWxpZCBcIitnK1wiIHR3ZWVuIHZhbHVlOiBcIitiW2ddKTooYz1uZXcgdGEodSxnLGosbC1qLGMsMCxnLGshPT0hMSYmKFwicHhcIj09PXB8fFwiekluZGV4XCI9PT1nKSwwLG0sbiksYy54czA9cCkpfWYmJmMmJiFjLnBsdWdpbiYmKGMucGx1Z2luPWYpfXJldHVybiBjfSxqLnNldFJhdGlvPWZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPXRoaXMuX2ZpcnN0UFQsZj0xZS02O2lmKDEhPT1hfHx0aGlzLl90d2Vlbi5fdGltZSE9PXRoaXMuX3R3ZWVuLl9kdXJhdGlvbiYmMCE9PXRoaXMuX3R3ZWVuLl90aW1lKWlmKGF8fHRoaXMuX3R3ZWVuLl90aW1lIT09dGhpcy5fdHdlZW4uX2R1cmF0aW9uJiYwIT09dGhpcy5fdHdlZW4uX3RpbWV8fHRoaXMuX3R3ZWVuLl9yYXdQcmV2VGltZT09PS0xZS02KWZvcig7ZTspe2lmKGI9ZS5jKmErZS5zLGUucj9iPU1hdGgucm91bmQoYik6Zj5iJiZiPi1mJiYoYj0wKSxlLnR5cGUpaWYoMT09PWUudHlwZSlpZihkPWUubCwyPT09ZCllLnRbZS5wXT1lLnhzMCtiK2UueHMxK2UueG4xK2UueHMyO2Vsc2UgaWYoMz09PWQpZS50W2UucF09ZS54czArYitlLnhzMStlLnhuMStlLnhzMitlLnhuMitlLnhzMztlbHNlIGlmKDQ9PT1kKWUudFtlLnBdPWUueHMwK2IrZS54czErZS54bjErZS54czIrZS54bjIrZS54czMrZS54bjMrZS54czQ7ZWxzZSBpZig1PT09ZCllLnRbZS5wXT1lLnhzMCtiK2UueHMxK2UueG4xK2UueHMyK2UueG4yK2UueHMzK2UueG4zK2UueHM0K2UueG40K2UueHM1O2Vsc2V7Zm9yKGM9ZS54czArYitlLnhzMSxkPTE7ZDxlLmw7ZCsrKWMrPWVbXCJ4blwiK2RdK2VbXCJ4c1wiKyhkKzEpXTtlLnRbZS5wXT1jfWVsc2UtMT09PWUudHlwZT9lLnRbZS5wXT1lLnhzMDplLnNldFJhdGlvJiZlLnNldFJhdGlvKGEpO2Vsc2UgZS50W2UucF09YitlLnhzMDtlPWUuX25leHR9ZWxzZSBmb3IoO2U7KTIhPT1lLnR5cGU/ZS50W2UucF09ZS5iOmUuc2V0UmF0aW8oYSksZT1lLl9uZXh0O2Vsc2UgZm9yKDtlOyl7aWYoMiE9PWUudHlwZSlpZihlLnImJi0xIT09ZS50eXBlKWlmKGI9TWF0aC5yb3VuZChlLnMrZS5jKSxlLnR5cGUpe2lmKDE9PT1lLnR5cGUpe2ZvcihkPWUubCxjPWUueHMwK2IrZS54czEsZD0xO2Q8ZS5sO2QrKyljKz1lW1wieG5cIitkXStlW1wieHNcIisoZCsxKV07ZS50W2UucF09Y319ZWxzZSBlLnRbZS5wXT1iK2UueHMwO2Vsc2UgZS50W2UucF09ZS5lO2Vsc2UgZS5zZXRSYXRpbyhhKTtlPWUuX25leHR9fSxqLl9lbmFibGVUcmFuc2Zvcm1zPWZ1bmN0aW9uKGEpe3RoaXMuX3RyYW5zZm9ybT10aGlzLl90cmFuc2Zvcm18fFJhKHRoaXMuX3RhcmdldCxlLCEwKSx0aGlzLl90cmFuc2Zvcm1UeXBlPXRoaXMuX3RyYW5zZm9ybS5zdmcmJkFhfHwhYSYmMyE9PXRoaXMuX3RyYW5zZm9ybVR5cGU/MjozfTt2YXIgWWE9ZnVuY3Rpb24oYSl7dGhpcy50W3RoaXMucF09dGhpcy5lLHRoaXMuZGF0YS5fbGlua0NTU1AodGhpcyx0aGlzLl9uZXh0LG51bGwsITApfTtqLl9hZGRMYXp5U2V0PWZ1bmN0aW9uKGEsYixjKXt2YXIgZD10aGlzLl9maXJzdFBUPW5ldyB0YShhLGIsMCwwLHRoaXMuX2ZpcnN0UFQsMik7ZC5lPWMsZC5zZXRSYXRpbz1ZYSxkLmRhdGE9dGhpc30sai5fbGlua0NTU1A9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIGEmJihiJiYoYi5fcHJldj1hKSxhLl9uZXh0JiYoYS5fbmV4dC5fcHJldj1hLl9wcmV2KSxhLl9wcmV2P2EuX3ByZXYuX25leHQ9YS5fbmV4dDp0aGlzLl9maXJzdFBUPT09YSYmKHRoaXMuX2ZpcnN0UFQ9YS5fbmV4dCxkPSEwKSxjP2MuX25leHQ9YTpkfHxudWxsIT09dGhpcy5fZmlyc3RQVHx8KHRoaXMuX2ZpcnN0UFQ9YSksYS5fbmV4dD1iLGEuX3ByZXY9YyksYX0sai5fbW9kPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj10aGlzLl9maXJzdFBUO2I7KVwiZnVuY3Rpb25cIj09dHlwZW9mIGFbYi5wXSYmYVtiLnBdPT09TWF0aC5yb3VuZCYmKGIucj0xKSxiPWIuX25leHR9LGouX2tpbGw9ZnVuY3Rpb24oYil7dmFyIGMsZCxlLGY9YjtpZihiLmF1dG9BbHBoYXx8Yi5hbHBoYSl7Zj17fTtmb3IoZCBpbiBiKWZbZF09YltkXTtmLm9wYWNpdHk9MSxmLmF1dG9BbHBoYSYmKGYudmlzaWJpbGl0eT0xKX1mb3IoYi5jbGFzc05hbWUmJihjPXRoaXMuX2NsYXNzTmFtZVBUKSYmKGU9Yy54Zmlyc3QsZSYmZS5fcHJldj90aGlzLl9saW5rQ1NTUChlLl9wcmV2LGMuX25leHQsZS5fcHJldi5fcHJldik6ZT09PXRoaXMuX2ZpcnN0UFQmJih0aGlzLl9maXJzdFBUPWMuX25leHQpLGMuX25leHQmJnRoaXMuX2xpbmtDU1NQKGMuX25leHQsYy5fbmV4dC5fbmV4dCxlLl9wcmV2KSx0aGlzLl9jbGFzc05hbWVQVD1udWxsKSxjPXRoaXMuX2ZpcnN0UFQ7YzspYy5wbHVnaW4mJmMucGx1Z2luIT09ZCYmYy5wbHVnaW4uX2tpbGwmJihjLnBsdWdpbi5fa2lsbChiKSxkPWMucGx1Z2luKSxjPWMuX25leHQ7cmV0dXJuIGEucHJvdG90eXBlLl9raWxsLmNhbGwodGhpcyxmKX07dmFyIFphPWZ1bmN0aW9uKGEsYixjKXt2YXIgZCxlLGYsZztpZihhLnNsaWNlKWZvcihlPWEubGVuZ3RoOy0tZT4tMTspWmEoYVtlXSxiLGMpO2Vsc2UgZm9yKGQ9YS5jaGlsZE5vZGVzLGU9ZC5sZW5ndGg7LS1lPi0xOylmPWRbZV0sZz1mLnR5cGUsZi5zdHlsZSYmKGIucHVzaChjYShmKSksYyYmYy5wdXNoKGYpKSwxIT09ZyYmOSE9PWcmJjExIT09Z3x8IWYuY2hpbGROb2Rlcy5sZW5ndGh8fFphKGYsYixjKX07cmV0dXJuIGcuY2FzY2FkZVRvPWZ1bmN0aW9uKGEsYyxkKXt2YXIgZSxmLGcsaCxpPWIudG8oYSxjLGQpLGo9W2ldLGs9W10sbD1bXSxtPVtdLG49Yi5faW50ZXJuYWxzLnJlc2VydmVkUHJvcHM7Zm9yKGE9aS5fdGFyZ2V0c3x8aS50YXJnZXQsWmEoYSxrLG0pLGkucmVuZGVyKGMsITAsITApLFphKGEsbCksaS5yZW5kZXIoMCwhMCwhMCksaS5fZW5hYmxlZCghMCksZT1tLmxlbmd0aDstLWU+LTE7KWlmKGY9ZGEobVtlXSxrW2VdLGxbZV0pLGYuZmlyc3RNUFQpe2Y9Zi5kaWZzO2ZvcihnIGluIGQpbltnXSYmKGZbZ109ZFtnXSk7aD17fTtmb3IoZyBpbiBmKWhbZ109a1tlXVtnXTtqLnB1c2goYi5mcm9tVG8obVtlXSxjLGgsZikpfXJldHVybiBqfSxhLmFjdGl2YXRlKFtnXSksZ30sITApLGZ1bmN0aW9uKCl7dmFyIGE9X2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7cHJvcE5hbWU6XCJyb3VuZFByb3BzXCIsdmVyc2lvbjpcIjEuNi4wXCIscHJpb3JpdHk6LTEsQVBJOjIsaW5pdDpmdW5jdGlvbihhLGIsYyl7cmV0dXJuIHRoaXMuX3R3ZWVuPWMsITB9fSksYj1mdW5jdGlvbihhKXtmb3IoO2E7KWEuZnx8YS5ibG9ifHwoYS5tPU1hdGgucm91bmQpLGE9YS5fbmV4dH0sYz1hLnByb3RvdHlwZTtjLl9vbkluaXRBbGxQcm9wcz1mdW5jdGlvbigpe2Zvcih2YXIgYSxjLGQsZT10aGlzLl90d2VlbixmPWUudmFycy5yb3VuZFByb3BzLmpvaW4/ZS52YXJzLnJvdW5kUHJvcHM6ZS52YXJzLnJvdW5kUHJvcHMuc3BsaXQoXCIsXCIpLGc9Zi5sZW5ndGgsaD17fSxpPWUuX3Byb3BMb29rdXAucm91bmRQcm9wczstLWc+LTE7KWhbZltnXV09TWF0aC5yb3VuZDtmb3IoZz1mLmxlbmd0aDstLWc+LTE7KWZvcihhPWZbZ10sYz1lLl9maXJzdFBUO2M7KWQ9Yy5fbmV4dCxjLnBnP2MudC5fbW9kKGgpOmMubj09PWEmJigyPT09Yy5mJiZjLnQ/YihjLnQuX2ZpcnN0UFQpOih0aGlzLl9hZGQoYy50LGEsYy5zLGMuYyksZCYmKGQuX3ByZXY9Yy5fcHJldiksYy5fcHJldj9jLl9wcmV2Ll9uZXh0PWQ6ZS5fZmlyc3RQVD09PWMmJihlLl9maXJzdFBUPWQpLGMuX25leHQ9Yy5fcHJldj1udWxsLGUuX3Byb3BMb29rdXBbYV09aSkpLGM9ZDtyZXR1cm4hMX0sYy5fYWRkPWZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuX2FkZFR3ZWVuKGEsYixjLGMrZCxiLE1hdGgucm91bmQpLHRoaXMuX292ZXJ3cml0ZVByb3BzLnB1c2goYil9fSgpLGZ1bmN0aW9uKCl7X2dzU2NvcGUuX2dzRGVmaW5lLnBsdWdpbih7cHJvcE5hbWU6XCJhdHRyXCIsQVBJOjIsdmVyc2lvbjpcIjAuNi4xXCIsaW5pdDpmdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmO2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIGEuc2V0QXR0cmlidXRlKXJldHVybiExO2ZvcihlIGluIGIpZj1iW2VdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGYmJihmPWYoZCxhKSksdGhpcy5fYWRkVHdlZW4oYSxcInNldEF0dHJpYnV0ZVwiLGEuZ2V0QXR0cmlidXRlKGUpK1wiXCIsZitcIlwiLGUsITEsZSksdGhpcy5fb3ZlcndyaXRlUHJvcHMucHVzaChlKTtyZXR1cm4hMH19KX0oKSxfZ3NTY29wZS5fZ3NEZWZpbmUucGx1Z2luKHtwcm9wTmFtZTpcImRpcmVjdGlvbmFsUm90YXRpb25cIix2ZXJzaW9uOlwiMC4zLjFcIixBUEk6Mixpbml0OmZ1bmN0aW9uKGEsYixjLGQpe1wib2JqZWN0XCIhPXR5cGVvZiBiJiYoYj17cm90YXRpb246Yn0pLHRoaXMuZmluYWxzPXt9O3ZhciBlLGYsZyxoLGksaixrPWIudXNlUmFkaWFucz09PSEwPzIqTWF0aC5QSTozNjAsbD0xZS02O2ZvcihlIGluIGIpXCJ1c2VSYWRpYW5zXCIhPT1lJiYoaD1iW2VdLFwiZnVuY3Rpb25cIj09dHlwZW9mIGgmJihoPWgoZCxhKSksaj0oaCtcIlwiKS5zcGxpdChcIl9cIiksZj1qWzBdLGc9cGFyc2VGbG9hdChcImZ1bmN0aW9uXCIhPXR5cGVvZiBhW2VdP2FbZV06YVtlLmluZGV4T2YoXCJzZXRcIil8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIGFbXCJnZXRcIitlLnN1YnN0cigzKV0/ZTpcImdldFwiK2Uuc3Vic3RyKDMpXSgpKSxoPXRoaXMuZmluYWxzW2VdPVwic3RyaW5nXCI9PXR5cGVvZiBmJiZcIj1cIj09PWYuY2hhckF0KDEpP2crcGFyc2VJbnQoZi5jaGFyQXQoMCkrXCIxXCIsMTApKk51bWJlcihmLnN1YnN0cigyKSk6TnVtYmVyKGYpfHwwLGk9aC1nLGoubGVuZ3RoJiYoZj1qLmpvaW4oXCJfXCIpLC0xIT09Zi5pbmRleE9mKFwic2hvcnRcIikmJihpJT1rLGkhPT1pJShrLzIpJiYoaT0wPmk/aStrOmktaykpLC0xIT09Zi5pbmRleE9mKFwiX2N3XCIpJiYwPmk/aT0oaSs5OTk5OTk5OTk5KmspJWstKGkva3wwKSprOi0xIT09Zi5pbmRleE9mKFwiY2N3XCIpJiZpPjAmJihpPShpLTk5OTk5OTk5OTkqayklay0oaS9rfDApKmspKSwoaT5sfHwtbD5pKSYmKHRoaXMuX2FkZFR3ZWVuKGEsZSxnLGcraSxlKSx0aGlzLl9vdmVyd3JpdGVQcm9wcy5wdXNoKGUpKSk7cmV0dXJuITB9LHNldDpmdW5jdGlvbihhKXt2YXIgYjtpZigxIT09YSl0aGlzLl9zdXBlci5zZXRSYXRpby5jYWxsKHRoaXMsYSk7ZWxzZSBmb3IoYj10aGlzLl9maXJzdFBUO2I7KWIuZj9iLnRbYi5wXSh0aGlzLmZpbmFsc1tiLnBdKTpiLnRbYi5wXT10aGlzLmZpbmFsc1tiLnBdLGI9Yi5fbmV4dH19KS5fYXV0b0NTUz0hMCxfZ3NTY29wZS5fZ3NEZWZpbmUoXCJlYXNpbmcuQmFja1wiLFtcImVhc2luZy5FYXNlXCJdLGZ1bmN0aW9uKGEpe3ZhciBiLGMsZCxlPV9nc1Njb3BlLkdyZWVuU29ja0dsb2JhbHN8fF9nc1Njb3BlLGY9ZS5jb20uZ3JlZW5zb2NrLGc9MipNYXRoLlBJLGg9TWF0aC5QSS8yLGk9Zi5fY2xhc3Msaj1mdW5jdGlvbihiLGMpe3ZhciBkPWkoXCJlYXNpbmcuXCIrYixmdW5jdGlvbigpe30sITApLGU9ZC5wcm90b3R5cGU9bmV3IGE7cmV0dXJuIGUuY29uc3RydWN0b3I9ZCxlLmdldFJhdGlvPWMsZH0saz1hLnJlZ2lzdGVyfHxmdW5jdGlvbigpe30sbD1mdW5jdGlvbihhLGIsYyxkLGUpe3ZhciBmPWkoXCJlYXNpbmcuXCIrYSx7ZWFzZU91dDpuZXcgYixlYXNlSW46bmV3IGMsZWFzZUluT3V0Om5ldyBkfSwhMCk7cmV0dXJuIGsoZixhKSxmfSxtPWZ1bmN0aW9uKGEsYixjKXt0aGlzLnQ9YSx0aGlzLnY9YixjJiYodGhpcy5uZXh0PWMsYy5wcmV2PXRoaXMsdGhpcy5jPWMudi1iLHRoaXMuZ2FwPWMudC1hKX0sbj1mdW5jdGlvbihiLGMpe3ZhciBkPWkoXCJlYXNpbmcuXCIrYixmdW5jdGlvbihhKXt0aGlzLl9wMT1hfHwwPT09YT9hOjEuNzAxNTgsdGhpcy5fcDI9MS41MjUqdGhpcy5fcDF9LCEwKSxlPWQucHJvdG90eXBlPW5ldyBhO3JldHVybiBlLmNvbnN0cnVjdG9yPWQsZS5nZXRSYXRpbz1jLGUuY29uZmlnPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgZChhKX0sZH0sbz1sKFwiQmFja1wiLG4oXCJCYWNrT3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJuKGEtPTEpKmEqKCh0aGlzLl9wMSsxKSphK3RoaXMuX3AxKSsxfSksbihcIkJhY2tJblwiLGZ1bmN0aW9uKGEpe3JldHVybiBhKmEqKCh0aGlzLl9wMSsxKSphLXRoaXMuX3AxKX0pLG4oXCJCYWNrSW5PdXRcIixmdW5jdGlvbihhKXtyZXR1cm4oYSo9Mik8MT8uNSphKmEqKCh0aGlzLl9wMisxKSphLXRoaXMuX3AyKTouNSooKGEtPTIpKmEqKCh0aGlzLl9wMisxKSphK3RoaXMuX3AyKSsyKX0pKSxwPWkoXCJlYXNpbmcuU2xvd01vXCIsZnVuY3Rpb24oYSxiLGMpe2I9Ynx8MD09PWI/YjouNyxudWxsPT1hP2E9Ljc6YT4xJiYoYT0xKSx0aGlzLl9wPTEhPT1hP2I6MCx0aGlzLl9wMT0oMS1hKS8yLHRoaXMuX3AyPWEsdGhpcy5fcDM9dGhpcy5fcDErdGhpcy5fcDIsdGhpcy5fY2FsY0VuZD1jPT09ITB9LCEwKSxxPXAucHJvdG90eXBlPW5ldyBhO3JldHVybiBxLmNvbnN0cnVjdG9yPXAscS5nZXRSYXRpbz1mdW5jdGlvbihhKXt2YXIgYj1hKyguNS1hKSp0aGlzLl9wO3JldHVybiBhPHRoaXMuX3AxP3RoaXMuX2NhbGNFbmQ/MS0oYT0xLWEvdGhpcy5fcDEpKmE6Yi0oYT0xLWEvdGhpcy5fcDEpKmEqYSphKmI6YT50aGlzLl9wMz90aGlzLl9jYWxjRW5kPzEtKGE9KGEtdGhpcy5fcDMpL3RoaXMuX3AxKSphOmIrKGEtYikqKGE9KGEtdGhpcy5fcDMpL3RoaXMuX3AxKSphKmEqYTp0aGlzLl9jYWxjRW5kPzE6Yn0scC5lYXNlPW5ldyBwKC43LC43KSxxLmNvbmZpZz1wLmNvbmZpZz1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIG5ldyBwKGEsYixjKX0sYj1pKFwiZWFzaW5nLlN0ZXBwZWRFYXNlXCIsZnVuY3Rpb24oYSxiKXthPWF8fDEsdGhpcy5fcDE9MS9hLHRoaXMuX3AyPWErKGI/MDoxKSx0aGlzLl9wMz1iPzE6MH0sITApLHE9Yi5wcm90b3R5cGU9bmV3IGEscS5jb25zdHJ1Y3Rvcj1iLHEuZ2V0UmF0aW89ZnVuY3Rpb24oYSl7cmV0dXJuIDA+YT9hPTA6YT49MSYmKGE9Ljk5OTk5OTk5OSksKCh0aGlzLl9wMiphfDApK3RoaXMuX3AzKSp0aGlzLl9wMX0scS5jb25maWc9Yi5jb25maWc9ZnVuY3Rpb24oYSxjKXtyZXR1cm4gbmV3IGIoYSxjKX0sYz1pKFwiZWFzaW5nLlJvdWdoRWFzZVwiLGZ1bmN0aW9uKGIpe2I9Ynx8e307Zm9yKHZhciBjLGQsZSxmLGcsaCxpPWIudGFwZXJ8fFwibm9uZVwiLGo9W10saz0wLGw9MHwoYi5wb2ludHN8fDIwKSxuPWwsbz1iLnJhbmRvbWl6ZSE9PSExLHA9Yi5jbGFtcD09PSEwLHE9Yi50ZW1wbGF0ZSBpbnN0YW5jZW9mIGE/Yi50ZW1wbGF0ZTpudWxsLHI9XCJudW1iZXJcIj09dHlwZW9mIGIuc3RyZW5ndGg/LjQqYi5zdHJlbmd0aDouNDstLW4+LTE7KWM9bz9NYXRoLnJhbmRvbSgpOjEvbCpuLGQ9cT9xLmdldFJhdGlvKGMpOmMsXCJub25lXCI9PT1pP2U9cjpcIm91dFwiPT09aT8oZj0xLWMsZT1mKmYqcik6XCJpblwiPT09aT9lPWMqYypyOi41PmM/KGY9MipjLGU9ZipmKi41KnIpOihmPTIqKDEtYyksZT1mKmYqLjUqciksbz9kKz1NYXRoLnJhbmRvbSgpKmUtLjUqZTpuJTI/ZCs9LjUqZTpkLT0uNSplLHAmJihkPjE/ZD0xOjA+ZCYmKGQ9MCkpLGpbaysrXT17eDpjLHk6ZH07Zm9yKGouc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLngtYi54fSksaD1uZXcgbSgxLDEsbnVsbCksbj1sOy0tbj4tMTspZz1qW25dLGg9bmV3IG0oZy54LGcueSxoKTt0aGlzLl9wcmV2PW5ldyBtKDAsMCwwIT09aC50P2g6aC5uZXh0KX0sITApLHE9Yy5wcm90b3R5cGU9bmV3IGEscS5jb25zdHJ1Y3Rvcj1jLHEuZ2V0UmF0aW89ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5fcHJldjtpZihhPmIudCl7Zm9yKDtiLm5leHQmJmE+PWIudDspYj1iLm5leHQ7Yj1iLnByZXZ9ZWxzZSBmb3IoO2IucHJldiYmYTw9Yi50OyliPWIucHJldjtyZXR1cm4gdGhpcy5fcHJldj1iLGIudisoYS1iLnQpL2IuZ2FwKmIuY30scS5jb25maWc9ZnVuY3Rpb24oYSl7cmV0dXJuIG5ldyBjKGEpfSxjLmVhc2U9bmV3IGMsbChcIkJvdW5jZVwiLGooXCJCb3VuY2VPdXRcIixmdW5jdGlvbihhKXtyZXR1cm4gMS8yLjc1PmE/Ny41NjI1KmEqYToyLzIuNzU+YT83LjU2MjUqKGEtPTEuNS8yLjc1KSphKy43NToyLjUvMi43NT5hPzcuNTYyNSooYS09Mi4yNS8yLjc1KSphKy45Mzc1OjcuNTYyNSooYS09Mi42MjUvMi43NSkqYSsuOTg0Mzc1fSksaihcIkJvdW5jZUluXCIsZnVuY3Rpb24oYSl7cmV0dXJuKGE9MS1hKTwxLzIuNzU/MS03LjU2MjUqYSphOjIvMi43NT5hPzEtKDcuNTYyNSooYS09MS41LzIuNzUpKmErLjc1KToyLjUvMi43NT5hPzEtKDcuNTYyNSooYS09Mi4yNS8yLjc1KSphKy45Mzc1KToxLSg3LjU2MjUqKGEtPTIuNjI1LzIuNzUpKmErLjk4NDM3NSl9KSxqKFwiQm91bmNlSW5PdXRcIixmdW5jdGlvbihhKXt2YXIgYj0uNT5hO3JldHVybiBhPWI/MS0yKmE6MiphLTEsYT0xLzIuNzU+YT83LjU2MjUqYSphOjIvMi43NT5hPzcuNTYyNSooYS09MS41LzIuNzUpKmErLjc1OjIuNS8yLjc1PmE/Ny41NjI1KihhLT0yLjI1LzIuNzUpKmErLjkzNzU6Ny41NjI1KihhLT0yLjYyNS8yLjc1KSphKy45ODQzNzUsYj8uNSooMS1hKTouNSphKy41fSkpLGwoXCJDaXJjXCIsaihcIkNpcmNPdXRcIixmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5zcXJ0KDEtKGEtPTEpKmEpfSksaihcIkNpcmNJblwiLGZ1bmN0aW9uKGEpe3JldHVybi0oTWF0aC5zcXJ0KDEtYSphKS0xKX0pLGooXCJDaXJjSW5PdXRcIixmdW5jdGlvbihhKXtyZXR1cm4oYSo9Mik8MT8tLjUqKE1hdGguc3FydCgxLWEqYSktMSk6LjUqKE1hdGguc3FydCgxLShhLT0yKSphKSsxKX0pKSxkPWZ1bmN0aW9uKGIsYyxkKXt2YXIgZT1pKFwiZWFzaW5nLlwiK2IsZnVuY3Rpb24oYSxiKXt0aGlzLl9wMT1hPj0xP2E6MSx0aGlzLl9wMj0oYnx8ZCkvKDE+YT9hOjEpLHRoaXMuX3AzPXRoaXMuX3AyL2cqKE1hdGguYXNpbigxL3RoaXMuX3AxKXx8MCksdGhpcy5fcDI9Zy90aGlzLl9wMn0sITApLGY9ZS5wcm90b3R5cGU9bmV3IGE7cmV0dXJuIGYuY29uc3RydWN0b3I9ZSxmLmdldFJhdGlvPWMsZi5jb25maWc9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IGUoYSxiKX0sZX0sbChcIkVsYXN0aWNcIixkKFwiRWxhc3RpY091dFwiLGZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLl9wMSpNYXRoLnBvdygyLC0xMCphKSpNYXRoLnNpbigoYS10aGlzLl9wMykqdGhpcy5fcDIpKzF9LC4zKSxkKFwiRWxhc3RpY0luXCIsZnVuY3Rpb24oYSl7cmV0dXJuLSh0aGlzLl9wMSpNYXRoLnBvdygyLDEwKihhLT0xKSkqTWF0aC5zaW4oKGEtdGhpcy5fcDMpKnRoaXMuX3AyKSl9LC4zKSxkKFwiRWxhc3RpY0luT3V0XCIsZnVuY3Rpb24oYSl7cmV0dXJuKGEqPTIpPDE/LS41Kih0aGlzLl9wMSpNYXRoLnBvdygyLDEwKihhLT0xKSkqTWF0aC5zaW4oKGEtdGhpcy5fcDMpKnRoaXMuX3AyKSk6dGhpcy5fcDEqTWF0aC5wb3coMiwtMTAqKGEtPTEpKSpNYXRoLnNpbigoYS10aGlzLl9wMykqdGhpcy5fcDIpKi41KzF9LC40NSkpLGwoXCJFeHBvXCIsaihcIkV4cG9PdXRcIixmdW5jdGlvbihhKXtyZXR1cm4gMS1NYXRoLnBvdygyLC0xMCphKX0pLGooXCJFeHBvSW5cIixmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5wb3coMiwxMCooYS0xKSktLjAwMX0pLGooXCJFeHBvSW5PdXRcIixmdW5jdGlvbihhKXtyZXR1cm4oYSo9Mik8MT8uNSpNYXRoLnBvdygyLDEwKihhLTEpKTouNSooMi1NYXRoLnBvdygyLC0xMCooYS0xKSkpfSkpLGwoXCJTaW5lXCIsaihcIlNpbmVPdXRcIixmdW5jdGlvbihhKXtyZXR1cm4gTWF0aC5zaW4oYSpoKX0pLGooXCJTaW5lSW5cIixmdW5jdGlvbihhKXtyZXR1cm4tTWF0aC5jb3MoYSpoKSsxfSksaihcIlNpbmVJbk91dFwiLGZ1bmN0aW9uKGEpe3JldHVybi0uNSooTWF0aC5jb3MoTWF0aC5QSSphKS0xKX0pKSxpKFwiZWFzaW5nLkVhc2VMb29rdXBcIix7ZmluZDpmdW5jdGlvbihiKXtyZXR1cm4gYS5tYXBbYl19fSwhMCksayhlLlNsb3dNbyxcIlNsb3dNb1wiLFwiZWFzZSxcIiksayhjLFwiUm91Z2hFYXNlXCIsXCJlYXNlLFwiKSxrKGIsXCJTdGVwcGVkRWFzZVwiLFwiZWFzZSxcIiksb30sITApfSksX2dzU2NvcGUuX2dzRGVmaW5lJiZfZ3NTY29wZS5fZ3NRdWV1ZS5wb3AoKSgpLGZ1bmN0aW9uKGEsYil7XCJ1c2Ugc3RyaWN0XCI7dmFyIGM9e30sZD1hLmRvY3VtZW50LGU9YS5HcmVlblNvY2tHbG9iYWxzPWEuR3JlZW5Tb2NrR2xvYmFsc3x8YTtpZighZS5Ud2VlbkxpdGUpe3ZhciBmLGcsaCxpLGosaz1mdW5jdGlvbihhKXt2YXIgYixjPWEuc3BsaXQoXCIuXCIpLGQ9ZTtmb3IoYj0wO2I8Yy5sZW5ndGg7YisrKWRbY1tiXV09ZD1kW2NbYl1dfHx7fTtyZXR1cm4gZH0sbD1rKFwiY29tLmdyZWVuc29ja1wiKSxtPTFlLTEwLG49ZnVuY3Rpb24oYSl7dmFyIGIsYz1bXSxkPWEubGVuZ3RoO2ZvcihiPTA7YiE9PWQ7Yy5wdXNoKGFbYisrXSkpO3JldHVybiBjfSxvPWZ1bmN0aW9uKCl7fSxwPWZ1bmN0aW9uKCl7dmFyIGE9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxiPWEuY2FsbChbXSk7cmV0dXJuIGZ1bmN0aW9uKGMpe3JldHVybiBudWxsIT1jJiYoYyBpbnN0YW5jZW9mIEFycmF5fHxcIm9iamVjdFwiPT10eXBlb2YgYyYmISFjLnB1c2gmJmEuY2FsbChjKT09PWIpfX0oKSxxPXt9LHI9ZnVuY3Rpb24oZCxmLGcsaCl7dGhpcy5zYz1xW2RdP3FbZF0uc2M6W10scVtkXT10aGlzLHRoaXMuZ3NDbGFzcz1udWxsLHRoaXMuZnVuYz1nO3ZhciBpPVtdO3RoaXMuY2hlY2s9ZnVuY3Rpb24oail7Zm9yKHZhciBsLG0sbixvLHA9Zi5sZW5ndGgscz1wOy0tcD4tMTspKGw9cVtmW3BdXXx8bmV3IHIoZltwXSxbXSkpLmdzQ2xhc3M/KGlbcF09bC5nc0NsYXNzLHMtLSk6aiYmbC5zYy5wdXNoKHRoaXMpO2lmKDA9PT1zJiZnKXtpZihtPShcImNvbS5ncmVlbnNvY2suXCIrZCkuc3BsaXQoXCIuXCIpLG49bS5wb3AoKSxvPWsobS5qb2luKFwiLlwiKSlbbl09dGhpcy5nc0NsYXNzPWcuYXBwbHkoZyxpKSxoKWlmKGVbbl09Y1tuXT1vLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzKWlmKGQ9PT1iKXttb2R1bGUuZXhwb3J0cz1jW2JdPW87Zm9yKHAgaW4gYylvW3BdPWNbcF19ZWxzZSBjW2JdJiYoY1tiXVtuXT1vKTtlbHNlXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kJiZkZWZpbmUoKGEuR3JlZW5Tb2NrQU1EUGF0aD9hLkdyZWVuU29ja0FNRFBhdGgrXCIvXCI6XCJcIikrZC5zcGxpdChcIi5cIikucG9wKCksW10sZnVuY3Rpb24oKXtyZXR1cm4gb30pO2ZvcihwPTA7cDx0aGlzLnNjLmxlbmd0aDtwKyspdGhpcy5zY1twXS5jaGVjaygpfX0sdGhpcy5jaGVjayghMCl9LHM9YS5fZ3NEZWZpbmU9ZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIG5ldyByKGEsYixjLGQpfSx0PWwuX2NsYXNzPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gYj1ifHxmdW5jdGlvbigpe30scyhhLFtdLGZ1bmN0aW9uKCl7cmV0dXJuIGJ9LGMpLGJ9O3MuZ2xvYmFscz1lO3ZhciB1PVswLDAsMSwxXSx2PXQoXCJlYXNpbmcuRWFzZVwiLGZ1bmN0aW9uKGEsYixjLGQpe3RoaXMuX2Z1bmM9YSx0aGlzLl90eXBlPWN8fDAsdGhpcy5fcG93ZXI9ZHx8MCx0aGlzLl9wYXJhbXM9Yj91LmNvbmNhdChiKTp1fSwhMCksdz12Lm1hcD17fSx4PXYucmVnaXN0ZXI9ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBlLGYsZyxoLGk9Yi5zcGxpdChcIixcIiksaj1pLmxlbmd0aCxrPShjfHxcImVhc2VJbixlYXNlT3V0LGVhc2VJbk91dFwiKS5zcGxpdChcIixcIik7LS1qPi0xOylmb3IoZj1pW2pdLGU9ZD90KFwiZWFzaW5nLlwiK2YsbnVsbCwhMCk6bC5lYXNpbmdbZl18fHt9LGc9ay5sZW5ndGg7LS1nPi0xOyloPWtbZ10sd1tmK1wiLlwiK2hdPXdbaCtmXT1lW2hdPWEuZ2V0UmF0aW8/YTphW2hdfHxuZXcgYX07Zm9yKGg9di5wcm90b3R5cGUsaC5fY2FsY0VuZD0hMSxoLmdldFJhdGlvPWZ1bmN0aW9uKGEpe2lmKHRoaXMuX2Z1bmMpcmV0dXJuIHRoaXMuX3BhcmFtc1swXT1hLHRoaXMuX2Z1bmMuYXBwbHkobnVsbCx0aGlzLl9wYXJhbXMpO3ZhciBiPXRoaXMuX3R5cGUsYz10aGlzLl9wb3dlcixkPTE9PT1iPzEtYToyPT09Yj9hOi41PmE/MiphOjIqKDEtYSk7cmV0dXJuIDE9PT1jP2QqPWQ6Mj09PWM/ZCo9ZCpkOjM9PT1jP2QqPWQqZCpkOjQ9PT1jJiYoZCo9ZCpkKmQqZCksMT09PWI/MS1kOjI9PT1iP2Q6LjU+YT9kLzI6MS1kLzJ9LGY9W1wiTGluZWFyXCIsXCJRdWFkXCIsXCJDdWJpY1wiLFwiUXVhcnRcIixcIlF1aW50LFN0cm9uZ1wiXSxnPWYubGVuZ3RoOy0tZz4tMTspaD1mW2ddK1wiLFBvd2VyXCIrZyx4KG5ldyB2KG51bGwsbnVsbCwxLGcpLGgsXCJlYXNlT3V0XCIsITApLHgobmV3IHYobnVsbCxudWxsLDIsZyksaCxcImVhc2VJblwiKygwPT09Zz9cIixlYXNlTm9uZVwiOlwiXCIpKSx4KG5ldyB2KG51bGwsbnVsbCwzLGcpLGgsXCJlYXNlSW5PdXRcIik7dy5saW5lYXI9bC5lYXNpbmcuTGluZWFyLmVhc2VJbix3LnN3aW5nPWwuZWFzaW5nLlF1YWQuZWFzZUluT3V0O3ZhciB5PXQoXCJldmVudHMuRXZlbnREaXNwYXRjaGVyXCIsZnVuY3Rpb24oYSl7dGhpcy5fbGlzdGVuZXJzPXt9LHRoaXMuX2V2ZW50VGFyZ2V0PWF8fHRoaXN9KTtoPXkucHJvdG90eXBlLGguYWRkRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkLGUpe2U9ZXx8MDt2YXIgZixnLGg9dGhpcy5fbGlzdGVuZXJzW2FdLGs9MDtmb3IodGhpcyE9PWl8fGp8fGkud2FrZSgpLG51bGw9PWgmJih0aGlzLl9saXN0ZW5lcnNbYV09aD1bXSksZz1oLmxlbmd0aDstLWc+LTE7KWY9aFtnXSxmLmM9PT1iJiZmLnM9PT1jP2guc3BsaWNlKGcsMSk6MD09PWsmJmYucHI8ZSYmKGs9ZysxKTtoLnNwbGljZShrLDAse2M6YixzOmMsdXA6ZCxwcjplfSl9LGgucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9dGhpcy5fbGlzdGVuZXJzW2FdO2lmKGQpZm9yKGM9ZC5sZW5ndGg7LS1jPi0xOylpZihkW2NdLmM9PT1iKXJldHVybiB2b2lkIGQuc3BsaWNlKGMsMSl9LGguZGlzcGF0Y2hFdmVudD1mdW5jdGlvbihhKXt2YXIgYixjLGQsZT10aGlzLl9saXN0ZW5lcnNbYV07aWYoZSlmb3IoYj1lLmxlbmd0aCxiPjEmJihlPWUuc2xpY2UoMCkpLGM9dGhpcy5fZXZlbnRUYXJnZXQ7LS1iPi0xOylkPWVbYl0sZCYmKGQudXA/ZC5jLmNhbGwoZC5zfHxjLHt0eXBlOmEsdGFyZ2V0OmN9KTpkLmMuY2FsbChkLnN8fGMpKX07dmFyIHo9YS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsQT1hLmNhbmNlbEFuaW1hdGlvbkZyYW1lLEI9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9LEM9QigpO2ZvcihmPVtcIm1zXCIsXCJtb3pcIixcIndlYmtpdFwiLFwib1wiXSxnPWYubGVuZ3RoOy0tZz4tMSYmIXo7KXo9YVtmW2ddK1wiUmVxdWVzdEFuaW1hdGlvbkZyYW1lXCJdLEE9YVtmW2ddK1wiQ2FuY2VsQW5pbWF0aW9uRnJhbWVcIl18fGFbZltnXStcIkNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZVwiXTt0KFwiVGlja2VyXCIsZnVuY3Rpb24oYSxiKXt2YXIgYyxlLGYsZyxoLGs9dGhpcyxsPUIoKSxuPWIhPT0hMSYmej9cImF1dG9cIjohMSxwPTUwMCxxPTMzLHI9XCJ0aWNrXCIscz1mdW5jdGlvbihhKXt2YXIgYixkLGk9QigpLUM7aT5wJiYobCs9aS1xKSxDKz1pLGsudGltZT0oQy1sKS8xZTMsYj1rLnRpbWUtaCwoIWN8fGI+MHx8YT09PSEwKSYmKGsuZnJhbWUrKyxoKz1iKyhiPj1nPy4wMDQ6Zy1iKSxkPSEwKSxhIT09ITAmJihmPWUocykpLGQmJmsuZGlzcGF0Y2hFdmVudChyKX07eS5jYWxsKGspLGsudGltZT1rLmZyYW1lPTAsay50aWNrPWZ1bmN0aW9uKCl7cyghMCl9LGsubGFnU21vb3RoaW5nPWZ1bmN0aW9uKGEsYil7cD1hfHwxL20scT1NYXRoLm1pbihiLHAsMCl9LGsuc2xlZXA9ZnVuY3Rpb24oKXtudWxsIT1mJiYobiYmQT9BKGYpOmNsZWFyVGltZW91dChmKSxlPW8sZj1udWxsLGs9PT1pJiYoaj0hMSkpfSxrLndha2U9ZnVuY3Rpb24oYSl7bnVsbCE9PWY/ay5zbGVlcCgpOmE/bCs9LUMrKEM9QigpKTprLmZyYW1lPjEwJiYoQz1CKCktcCs1KSxlPTA9PT1jP286biYmej96OmZ1bmN0aW9uKGEpe3JldHVybiBzZXRUaW1lb3V0KGEsMWUzKihoLWsudGltZSkrMXwwKX0saz09PWkmJihqPSEwKSxzKDIpfSxrLmZwcz1mdW5jdGlvbihhKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYz1hLGc9MS8oY3x8NjApLGg9dGhpcy50aW1lK2csdm9pZCBrLndha2UoKSk6Y30say51c2VSQUY9ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KGsuc2xlZXAoKSxuPWEsdm9pZCBrLmZwcyhjKSk6bn0say5mcHMoYSksc2V0VGltZW91dChmdW5jdGlvbigpe1wiYXV0b1wiPT09biYmay5mcmFtZTw1JiZcImhpZGRlblwiIT09ZC52aXNpYmlsaXR5U3RhdGUmJmsudXNlUkFGKCExKX0sMTUwMCl9KSxoPWwuVGlja2VyLnByb3RvdHlwZT1uZXcgbC5ldmVudHMuRXZlbnREaXNwYXRjaGVyLGguY29uc3RydWN0b3I9bC5UaWNrZXI7dmFyIEQ9dChcImNvcmUuQW5pbWF0aW9uXCIsZnVuY3Rpb24oYSxiKXtpZih0aGlzLnZhcnM9Yj1ifHx7fSx0aGlzLl9kdXJhdGlvbj10aGlzLl90b3RhbER1cmF0aW9uPWF8fDAsdGhpcy5fZGVsYXk9TnVtYmVyKGIuZGVsYXkpfHwwLHRoaXMuX3RpbWVTY2FsZT0xLHRoaXMuX2FjdGl2ZT1iLmltbWVkaWF0ZVJlbmRlcj09PSEwLHRoaXMuZGF0YT1iLmRhdGEsdGhpcy5fcmV2ZXJzZWQ9Yi5yZXZlcnNlZD09PSEwLFgpe2p8fGkud2FrZSgpO3ZhciBjPXRoaXMudmFycy51c2VGcmFtZXM/VzpYO2MuYWRkKHRoaXMsYy5fdGltZSksdGhpcy52YXJzLnBhdXNlZCYmdGhpcy5wYXVzZWQoITApfX0pO2k9RC50aWNrZXI9bmV3IGwuVGlja2VyLGg9RC5wcm90b3R5cGUsaC5fZGlydHk9aC5fZ2M9aC5faW5pdHRlZD1oLl9wYXVzZWQ9ITEsaC5fdG90YWxUaW1lPWguX3RpbWU9MCxoLl9yYXdQcmV2VGltZT0tMSxoLl9uZXh0PWguX2xhc3Q9aC5fb25VcGRhdGU9aC5fdGltZWxpbmU9aC50aW1lbGluZT1udWxsLGguX3BhdXNlZD0hMTt2YXIgRT1mdW5jdGlvbigpe2omJkIoKS1DPjJlMyYmXCJoaWRkZW5cIiE9PWQudmlzaWJpbGl0eVN0YXRlJiZpLndha2UoKTt2YXIgYT1zZXRUaW1lb3V0KEUsMmUzKTthLnVucmVmJiZhLnVucmVmKCl9O0UoKSxoLnBsYXk9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9YSYmdGhpcy5zZWVrKGEsYiksdGhpcy5yZXZlcnNlZCghMSkucGF1c2VkKCExKX0saC5wYXVzZT1mdW5jdGlvbihhLGIpe3JldHVybiBudWxsIT1hJiZ0aGlzLnNlZWsoYSxiKSx0aGlzLnBhdXNlZCghMCl9LGgucmVzdW1lPWZ1bmN0aW9uKGEsYil7cmV0dXJuIG51bGwhPWEmJnRoaXMuc2VlayhhLGIpLHRoaXMucGF1c2VkKCExKX0saC5zZWVrPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMudG90YWxUaW1lKE51bWJlcihhKSxiIT09ITEpfSxoLnJlc3RhcnQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5yZXZlcnNlZCghMSkucGF1c2VkKCExKS50b3RhbFRpbWUoYT8tdGhpcy5fZGVsYXk6MCxiIT09ITEsITApfSxoLnJldmVyc2U9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbnVsbCE9YSYmdGhpcy5zZWVrKGF8fHRoaXMudG90YWxEdXJhdGlvbigpLGIpLHRoaXMucmV2ZXJzZWQoITApLnBhdXNlZCghMSl9LGgucmVuZGVyPWZ1bmN0aW9uKGEsYixjKXt9LGguaW52YWxpZGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl90aW1lPXRoaXMuX3RvdGFsVGltZT0wLHRoaXMuX2luaXR0ZWQ9dGhpcy5fZ2M9ITEsdGhpcy5fcmF3UHJldlRpbWU9LTEsKHRoaXMuX2djfHwhdGhpcy50aW1lbGluZSkmJnRoaXMuX2VuYWJsZWQoITApLHRoaXN9LGguaXNBY3RpdmU9ZnVuY3Rpb24oKXt2YXIgYSxiPXRoaXMuX3RpbWVsaW5lLGM9dGhpcy5fc3RhcnRUaW1lO3JldHVybiFifHwhdGhpcy5fZ2MmJiF0aGlzLl9wYXVzZWQmJmIuaXNBY3RpdmUoKSYmKGE9Yi5yYXdUaW1lKCEwKSk+PWMmJmE8Yyt0aGlzLnRvdGFsRHVyYXRpb24oKS90aGlzLl90aW1lU2NhbGUtMWUtN30saC5fZW5hYmxlZD1mdW5jdGlvbihhLGIpe3JldHVybiBqfHxpLndha2UoKSx0aGlzLl9nYz0hYSx0aGlzLl9hY3RpdmU9dGhpcy5pc0FjdGl2ZSgpLGIhPT0hMCYmKGEmJiF0aGlzLnRpbWVsaW5lP3RoaXMuX3RpbWVsaW5lLmFkZCh0aGlzLHRoaXMuX3N0YXJ0VGltZS10aGlzLl9kZWxheSk6IWEmJnRoaXMudGltZWxpbmUmJnRoaXMuX3RpbWVsaW5lLl9yZW1vdmUodGhpcywhMCkpLCExfSxoLl9raWxsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuX2VuYWJsZWQoITEsITEpfSxoLmtpbGw9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gdGhpcy5fa2lsbChhLGIpLHRoaXN9LGguX3VuY2FjaGU9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWE/dGhpczp0aGlzLnRpbWVsaW5lO2I7KWIuX2RpcnR5PSEwLGI9Yi50aW1lbGluZTtyZXR1cm4gdGhpc30saC5fc3dhcFNlbGZJblBhcmFtcz1mdW5jdGlvbihhKXtmb3IodmFyIGI9YS5sZW5ndGgsYz1hLmNvbmNhdCgpOy0tYj4tMTspXCJ7c2VsZn1cIj09PWFbYl0mJihjW2JdPXRoaXMpO3JldHVybiBjfSxoLl9jYWxsYmFjaz1mdW5jdGlvbihhKXt2YXIgYj10aGlzLnZhcnMsYz1iW2FdLGQ9YlthK1wiUGFyYW1zXCJdLGU9YlthK1wiU2NvcGVcIl18fGIuY2FsbGJhY2tTY29wZXx8dGhpcyxmPWQ/ZC5sZW5ndGg6MDtzd2l0Y2goZil7Y2FzZSAwOmMuY2FsbChlKTticmVhaztjYXNlIDE6Yy5jYWxsKGUsZFswXSk7YnJlYWs7Y2FzZSAyOmMuY2FsbChlLGRbMF0sZFsxXSk7YnJlYWs7ZGVmYXVsdDpjLmFwcGx5KGUsZCl9fSxoLmV2ZW50Q2FsbGJhY2s9ZnVuY3Rpb24oYSxiLGMsZCl7aWYoXCJvblwiPT09KGF8fFwiXCIpLnN1YnN0cigwLDIpKXt2YXIgZT10aGlzLnZhcnM7aWYoMT09PWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIGVbYV07bnVsbD09Yj9kZWxldGUgZVthXTooZVthXT1iLGVbYStcIlBhcmFtc1wiXT1wKGMpJiYtMSE9PWMuam9pbihcIlwiKS5pbmRleE9mKFwie3NlbGZ9XCIpP3RoaXMuX3N3YXBTZWxmSW5QYXJhbXMoYyk6YyxlW2ErXCJTY29wZVwiXT1kKSxcIm9uVXBkYXRlXCI9PT1hJiYodGhpcy5fb25VcGRhdGU9Yil9cmV0dXJuIHRoaXN9LGguZGVsYXk9ZnVuY3Rpb24oYSl7cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGg/KHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nJiZ0aGlzLnN0YXJ0VGltZSh0aGlzLl9zdGFydFRpbWUrYS10aGlzLl9kZWxheSksdGhpcy5fZGVsYXk9YSx0aGlzKTp0aGlzLl9kZWxheX0saC5kdXJhdGlvbj1mdW5jdGlvbihhKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZHVyYXRpb249dGhpcy5fdG90YWxEdXJhdGlvbj1hLHRoaXMuX3VuY2FjaGUoITApLHRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nJiZ0aGlzLl90aW1lPjAmJnRoaXMuX3RpbWU8dGhpcy5fZHVyYXRpb24mJjAhPT1hJiZ0aGlzLnRvdGFsVGltZSh0aGlzLl90b3RhbFRpbWUqKGEvdGhpcy5fZHVyYXRpb24pLCEwKSx0aGlzKToodGhpcy5fZGlydHk9ITEsdGhpcy5fZHVyYXRpb24pfSxoLnRvdGFsRHVyYXRpb249ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX2RpcnR5PSExLGFyZ3VtZW50cy5sZW5ndGg/dGhpcy5kdXJhdGlvbihhKTp0aGlzLl90b3RhbER1cmF0aW9ufSxoLnRpbWU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8odGhpcy5fZGlydHkmJnRoaXMudG90YWxEdXJhdGlvbigpLHRoaXMudG90YWxUaW1lKGE+dGhpcy5fZHVyYXRpb24/dGhpcy5fZHVyYXRpb246YSxiKSk6dGhpcy5fdGltZX0saC50b3RhbFRpbWU9ZnVuY3Rpb24oYSxiLGMpe2lmKGp8fGkud2FrZSgpLCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLl90b3RhbFRpbWU7aWYodGhpcy5fdGltZWxpbmUpe2lmKDA+YSYmIWMmJihhKz10aGlzLnRvdGFsRHVyYXRpb24oKSksdGhpcy5fdGltZWxpbmUuc21vb3RoQ2hpbGRUaW1pbmcpe3RoaXMuX2RpcnR5JiZ0aGlzLnRvdGFsRHVyYXRpb24oKTt2YXIgZD10aGlzLl90b3RhbER1cmF0aW9uLGU9dGhpcy5fdGltZWxpbmU7aWYoYT5kJiYhYyYmKGE9ZCksdGhpcy5fc3RhcnRUaW1lPSh0aGlzLl9wYXVzZWQ/dGhpcy5fcGF1c2VUaW1lOmUuX3RpbWUpLSh0aGlzLl9yZXZlcnNlZD9kLWE6YSkvdGhpcy5fdGltZVNjYWxlLGUuX2RpcnR5fHx0aGlzLl91bmNhY2hlKCExKSxlLl90aW1lbGluZSlmb3IoO2UuX3RpbWVsaW5lOyllLl90aW1lbGluZS5fdGltZSE9PShlLl9zdGFydFRpbWUrZS5fdG90YWxUaW1lKS9lLl90aW1lU2NhbGUmJmUudG90YWxUaW1lKGUuX3RvdGFsVGltZSwhMCksZT1lLl90aW1lbGluZX10aGlzLl9nYyYmdGhpcy5fZW5hYmxlZCghMCwhMSksKHRoaXMuX3RvdGFsVGltZSE9PWF8fDA9PT10aGlzLl9kdXJhdGlvbikmJihKLmxlbmd0aCYmWigpLHRoaXMucmVuZGVyKGEsYiwhMSksSi5sZW5ndGgmJlooKSl9cmV0dXJuIHRoaXN9LGgucHJvZ3Jlc3M9aC50b3RhbFByb2dyZXNzPWZ1bmN0aW9uKGEsYil7dmFyIGM9dGhpcy5kdXJhdGlvbigpO3JldHVybiBhcmd1bWVudHMubGVuZ3RoP3RoaXMudG90YWxUaW1lKGMqYSxiKTpjP3RoaXMuX3RpbWUvYzp0aGlzLnJhdGlvfSxoLnN0YXJ0VGltZT1mdW5jdGlvbihhKXtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD8oYSE9PXRoaXMuX3N0YXJ0VGltZSYmKHRoaXMuX3N0YXJ0VGltZT1hLHRoaXMudGltZWxpbmUmJnRoaXMudGltZWxpbmUuX3NvcnRDaGlsZHJlbiYmdGhpcy50aW1lbGluZS5hZGQodGhpcyxhLXRoaXMuX2RlbGF5KSksdGhpcyk6dGhpcy5fc3RhcnRUaW1lfSxoLmVuZFRpbWU9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMuX3N0YXJ0VGltZSsoMCE9YT90aGlzLnRvdGFsRHVyYXRpb24oKTp0aGlzLmR1cmF0aW9uKCkpL3RoaXMuX3RpbWVTY2FsZX0saC50aW1lU2NhbGU9ZnVuY3Rpb24oYSl7aWYoIWFyZ3VtZW50cy5sZW5ndGgpcmV0dXJuIHRoaXMuX3RpbWVTY2FsZTtpZihhPWF8fG0sdGhpcy5fdGltZWxpbmUmJnRoaXMuX3RpbWVsaW5lLnNtb290aENoaWxkVGltaW5nKXt2YXIgYj10aGlzLl9wYXVzZVRpbWUsYz1ifHwwPT09Yj9iOnRoaXMuX3RpbWVsaW5lLnRvdGFsVGltZSgpO3RoaXMuX3N0YXJ0VGltZT1jLShjLXRoaXMuX3N0YXJ0VGltZSkqdGhpcy5fdGltZVNjYWxlL2F9cmV0dXJuIHRoaXMuX3RpbWVTY2FsZT1hLHRoaXMuX3VuY2FjaGUoITEpfSxoLnJldmVyc2VkPWZ1bmN0aW9uKGEpe3JldHVybiBhcmd1bWVudHMubGVuZ3RoPyhhIT10aGlzLl9yZXZlcnNlZCYmKHRoaXMuX3JldmVyc2VkPWEsdGhpcy50b3RhbFRpbWUodGhpcy5fdGltZWxpbmUmJiF0aGlzLl90aW1lbGluZS5zbW9vdGhDaGlsZFRpbWluZz90aGlzLnRvdGFsRHVyYXRpb24oKS10aGlzLl90b3RhbFRpbWU6dGhpcy5fdG90YWxUaW1lLCEwKSksdGhpcyk6dGhpcy5fcmV2ZXJzZWR9LGgucGF1c2VkPWZ1bmN0aW9uKGEpe2lmKCFhcmd1bWVudHMubGVuZ3RoKXJldHVybiB0aGlzLl9wYXVzZWQ7dmFyIGIsYyxkPXRoaXMuX3RpbWVsaW5lO3JldHVybiBhIT10aGlzLl9wYXVzZWQmJmQmJihqfHxhfHxpLndha2UoKSxiPWQucmF3VGltZSgpLGM9Yi10aGlzLl9wYXVzZVRpbWUsIWEmJmQuc21vb3RoQ2hpbGRUaW1pbmcmJih0aGlzLl9zdGFydFRpbWUrPWMsdGhpcy5fdW5jYWNoZSghMSkpLHRoaXMuX3BhdXNlVGltZT1hP2I6bnVsbCx0aGlzLl9wYXVzZWQ9YSx0aGlzLl9hY3RpdmU9dGhpcy5pc0FjdGl2ZSgpLCFhJiYwIT09YyYmdGhpcy5faW5pdHRlZCYmdGhpcy5kdXJhdGlvbigpJiYoYj1kLnNtb290aENoaWxkVGltaW5nP3RoaXMuX3RvdGFsVGltZTooYi10aGlzLl9zdGFydFRpbWUpL3RoaXMuX3RpbWVTY2FsZSx0aGlzLnJlbmRlcihiLGI9PT10aGlzLl90b3RhbFRpbWUsITApKSksdGhpcy5fZ2MmJiFhJiZ0aGlzLl9lbmFibGVkKCEwLCExKSx0aGlzfTt2YXIgRj10KFwiY29yZS5TaW1wbGVUaW1lbGluZVwiLGZ1bmN0aW9uKGEpe0QuY2FsbCh0aGlzLDAsYSksdGhpcy5hdXRvUmVtb3ZlQ2hpbGRyZW49dGhpcy5zbW9vdGhDaGlsZFRpbWluZz0hMH0pO2g9Ri5wcm90b3R5cGU9bmV3IEQsaC5jb25zdHJ1Y3Rvcj1GLGgua2lsbCgpLl9nYz0hMSxoLl9maXJzdD1oLl9sYXN0PWguX3JlY2VudD1udWxsLGguX3NvcnRDaGlsZHJlbj0hMSxoLmFkZD1oLmluc2VydD1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmO2lmKGEuX3N0YXJ0VGltZT1OdW1iZXIoYnx8MCkrYS5fZGVsYXksYS5fcGF1c2VkJiZ0aGlzIT09YS5fdGltZWxpbmUmJihhLl9wYXVzZVRpbWU9YS5fc3RhcnRUaW1lKyh0aGlzLnJhd1RpbWUoKS1hLl9zdGFydFRpbWUpL2EuX3RpbWVTY2FsZSksXG5hLnRpbWVsaW5lJiZhLnRpbWVsaW5lLl9yZW1vdmUoYSwhMCksYS50aW1lbGluZT1hLl90aW1lbGluZT10aGlzLGEuX2djJiZhLl9lbmFibGVkKCEwLCEwKSxlPXRoaXMuX2xhc3QsdGhpcy5fc29ydENoaWxkcmVuKWZvcihmPWEuX3N0YXJ0VGltZTtlJiZlLl9zdGFydFRpbWU+ZjspZT1lLl9wcmV2O3JldHVybiBlPyhhLl9uZXh0PWUuX25leHQsZS5fbmV4dD1hKTooYS5fbmV4dD10aGlzLl9maXJzdCx0aGlzLl9maXJzdD1hKSxhLl9uZXh0P2EuX25leHQuX3ByZXY9YTp0aGlzLl9sYXN0PWEsYS5fcHJldj1lLHRoaXMuX3JlY2VudD1hLHRoaXMuX3RpbWVsaW5lJiZ0aGlzLl91bmNhY2hlKCEwKSx0aGlzfSxoLl9yZW1vdmU9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS50aW1lbGluZT09PXRoaXMmJihifHxhLl9lbmFibGVkKCExLCEwKSxhLl9wcmV2P2EuX3ByZXYuX25leHQ9YS5fbmV4dDp0aGlzLl9maXJzdD09PWEmJih0aGlzLl9maXJzdD1hLl9uZXh0KSxhLl9uZXh0P2EuX25leHQuX3ByZXY9YS5fcHJldjp0aGlzLl9sYXN0PT09YSYmKHRoaXMuX2xhc3Q9YS5fcHJldiksYS5fbmV4dD1hLl9wcmV2PWEudGltZWxpbmU9bnVsbCxhPT09dGhpcy5fcmVjZW50JiYodGhpcy5fcmVjZW50PXRoaXMuX2xhc3QpLHRoaXMuX3RpbWVsaW5lJiZ0aGlzLl91bmNhY2hlKCEwKSksdGhpc30saC5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGU9dGhpcy5fZmlyc3Q7Zm9yKHRoaXMuX3RvdGFsVGltZT10aGlzLl90aW1lPXRoaXMuX3Jhd1ByZXZUaW1lPWE7ZTspZD1lLl9uZXh0LChlLl9hY3RpdmV8fGE+PWUuX3N0YXJ0VGltZSYmIWUuX3BhdXNlZCYmIWUuX2djKSYmKGUuX3JldmVyc2VkP2UucmVuZGVyKChlLl9kaXJ0eT9lLnRvdGFsRHVyYXRpb24oKTplLl90b3RhbER1cmF0aW9uKS0oYS1lLl9zdGFydFRpbWUpKmUuX3RpbWVTY2FsZSxiLGMpOmUucmVuZGVyKChhLWUuX3N0YXJ0VGltZSkqZS5fdGltZVNjYWxlLGIsYykpLGU9ZH0saC5yYXdUaW1lPWZ1bmN0aW9uKCl7cmV0dXJuIGp8fGkud2FrZSgpLHRoaXMuX3RvdGFsVGltZX07dmFyIEc9dChcIlR3ZWVuTGl0ZVwiLGZ1bmN0aW9uKGIsYyxkKXtpZihELmNhbGwodGhpcyxjLGQpLHRoaXMucmVuZGVyPUcucHJvdG90eXBlLnJlbmRlcixudWxsPT1iKXRocm93XCJDYW5ub3QgdHdlZW4gYSBudWxsIHRhcmdldC5cIjt0aGlzLnRhcmdldD1iPVwic3RyaW5nXCIhPXR5cGVvZiBiP2I6Ry5zZWxlY3RvcihiKXx8Yjt2YXIgZSxmLGcsaD1iLmpxdWVyeXx8Yi5sZW5ndGgmJmIhPT1hJiZiWzBdJiYoYlswXT09PWF8fGJbMF0ubm9kZVR5cGUmJmJbMF0uc3R5bGUmJiFiLm5vZGVUeXBlKSxpPXRoaXMudmFycy5vdmVyd3JpdGU7aWYodGhpcy5fb3ZlcndyaXRlPWk9bnVsbD09aT9WW0cuZGVmYXVsdE92ZXJ3cml0ZV06XCJudW1iZXJcIj09dHlwZW9mIGk/aT4+MDpWW2ldLChofHxiIGluc3RhbmNlb2YgQXJyYXl8fGIucHVzaCYmcChiKSkmJlwibnVtYmVyXCIhPXR5cGVvZiBiWzBdKWZvcih0aGlzLl90YXJnZXRzPWc9bihiKSx0aGlzLl9wcm9wTG9va3VwPVtdLHRoaXMuX3NpYmxpbmdzPVtdLGU9MDtlPGcubGVuZ3RoO2UrKylmPWdbZV0sZj9cInN0cmluZ1wiIT10eXBlb2YgZj9mLmxlbmd0aCYmZiE9PWEmJmZbMF0mJihmWzBdPT09YXx8ZlswXS5ub2RlVHlwZSYmZlswXS5zdHlsZSYmIWYubm9kZVR5cGUpPyhnLnNwbGljZShlLS0sMSksdGhpcy5fdGFyZ2V0cz1nPWcuY29uY2F0KG4oZikpKToodGhpcy5fc2libGluZ3NbZV09JChmLHRoaXMsITEpLDE9PT1pJiZ0aGlzLl9zaWJsaW5nc1tlXS5sZW5ndGg+MSYmYWEoZix0aGlzLG51bGwsMSx0aGlzLl9zaWJsaW5nc1tlXSkpOihmPWdbZS0tXT1HLnNlbGVjdG9yKGYpLFwic3RyaW5nXCI9PXR5cGVvZiBmJiZnLnNwbGljZShlKzEsMSkpOmcuc3BsaWNlKGUtLSwxKTtlbHNlIHRoaXMuX3Byb3BMb29rdXA9e30sdGhpcy5fc2libGluZ3M9JChiLHRoaXMsITEpLDE9PT1pJiZ0aGlzLl9zaWJsaW5ncy5sZW5ndGg+MSYmYWEoYix0aGlzLG51bGwsMSx0aGlzLl9zaWJsaW5ncyk7KHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXJ8fDA9PT1jJiYwPT09dGhpcy5fZGVsYXkmJnRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXIhPT0hMSkmJih0aGlzLl90aW1lPS1tLHRoaXMucmVuZGVyKE1hdGgubWluKDAsLXRoaXMuX2RlbGF5KSkpfSwhMCksSD1mdW5jdGlvbihiKXtyZXR1cm4gYiYmYi5sZW5ndGgmJmIhPT1hJiZiWzBdJiYoYlswXT09PWF8fGJbMF0ubm9kZVR5cGUmJmJbMF0uc3R5bGUmJiFiLm5vZGVUeXBlKX0sST1mdW5jdGlvbihhLGIpe3ZhciBjLGQ9e307Zm9yKGMgaW4gYSlVW2NdfHxjIGluIGImJlwidHJhbnNmb3JtXCIhPT1jJiZcInhcIiE9PWMmJlwieVwiIT09YyYmXCJ3aWR0aFwiIT09YyYmXCJoZWlnaHRcIiE9PWMmJlwiY2xhc3NOYW1lXCIhPT1jJiZcImJvcmRlclwiIT09Y3x8ISghUltjXXx8UltjXSYmUltjXS5fYXV0b0NTUyl8fChkW2NdPWFbY10sZGVsZXRlIGFbY10pO2EuY3NzPWR9O2g9Ry5wcm90b3R5cGU9bmV3IEQsaC5jb25zdHJ1Y3Rvcj1HLGgua2lsbCgpLl9nYz0hMSxoLnJhdGlvPTAsaC5fZmlyc3RQVD1oLl90YXJnZXRzPWguX292ZXJ3cml0dGVuUHJvcHM9aC5fc3RhcnRBdD1udWxsLGguX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQ9aC5fbGF6eT0hMSxHLnZlcnNpb249XCIxLjIwLjJcIixHLmRlZmF1bHRFYXNlPWguX2Vhc2U9bmV3IHYobnVsbCxudWxsLDEsMSksRy5kZWZhdWx0T3ZlcndyaXRlPVwiYXV0b1wiLEcudGlja2VyPWksRy5hdXRvU2xlZXA9MTIwLEcubGFnU21vb3RoaW5nPWZ1bmN0aW9uKGEsYil7aS5sYWdTbW9vdGhpbmcoYSxiKX0sRy5zZWxlY3Rvcj1hLiR8fGEualF1ZXJ5fHxmdW5jdGlvbihiKXt2YXIgYz1hLiR8fGEualF1ZXJ5O3JldHVybiBjPyhHLnNlbGVjdG9yPWMsYyhiKSk6XCJ1bmRlZmluZWRcIj09dHlwZW9mIGQ/YjpkLnF1ZXJ5U2VsZWN0b3JBbGw/ZC5xdWVyeVNlbGVjdG9yQWxsKGIpOmQuZ2V0RWxlbWVudEJ5SWQoXCIjXCI9PT1iLmNoYXJBdCgwKT9iLnN1YnN0cigxKTpiKX07dmFyIEo9W10sSz17fSxMPS8oPzooLXwtPXxcXCs9KT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspPylbMC05XS9naSxNPS9bXFwrLV09LT9bXFwuXFxkXS8sTj1mdW5jdGlvbihhKXtmb3IodmFyIGIsYz10aGlzLl9maXJzdFBULGQ9MWUtNjtjOyliPWMuYmxvYj8xPT09YSYmdGhpcy5lbmQ/dGhpcy5lbmQ6YT90aGlzLmpvaW4oXCJcIik6dGhpcy5zdGFydDpjLmMqYStjLnMsYy5tP2I9Yy5tKGIsdGhpcy5fdGFyZ2V0fHxjLnQpOmQ+YiYmYj4tZCYmIWMuYmxvYiYmKGI9MCksYy5mP2MuZnA/Yy50W2MucF0oYy5mcCxiKTpjLnRbYy5wXShiKTpjLnRbYy5wXT1iLGM9Yy5fbmV4dH0sTz1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGcsaCxpLGosayxsPVtdLG09MCxuPVwiXCIsbz0wO2ZvcihsLnN0YXJ0PWEsbC5lbmQ9YixhPWxbMF09YStcIlwiLGI9bFsxXT1iK1wiXCIsYyYmKGMobCksYT1sWzBdLGI9bFsxXSksbC5sZW5ndGg9MCxlPWEubWF0Y2goTCl8fFtdLGY9Yi5tYXRjaChMKXx8W10sZCYmKGQuX25leHQ9bnVsbCxkLmJsb2I9MSxsLl9maXJzdFBUPWwuX2FwcGx5UFQ9ZCksaT1mLmxlbmd0aCxoPTA7aT5oO2grKylrPWZbaF0saj1iLnN1YnN0cihtLGIuaW5kZXhPZihrLG0pLW0pLG4rPWp8fCFoP2o6XCIsXCIsbSs9ai5sZW5ndGgsbz9vPShvKzEpJTU6XCJyZ2JhKFwiPT09ai5zdWJzdHIoLTUpJiYobz0xKSxrPT09ZVtoXXx8ZS5sZW5ndGg8PWg/bis9azoobiYmKGwucHVzaChuKSxuPVwiXCIpLGc9cGFyc2VGbG9hdChlW2hdKSxsLnB1c2goZyksbC5fZmlyc3RQVD17X25leHQ6bC5fZmlyc3RQVCx0OmwscDpsLmxlbmd0aC0xLHM6ZyxjOihcIj1cIj09PWsuY2hhckF0KDEpP3BhcnNlSW50KGsuY2hhckF0KDApK1wiMVwiLDEwKSpwYXJzZUZsb2F0KGsuc3Vic3RyKDIpKTpwYXJzZUZsb2F0KGspLWcpfHwwLGY6MCxtOm8mJjQ+bz9NYXRoLnJvdW5kOjB9KSxtKz1rLmxlbmd0aDtyZXR1cm4gbis9Yi5zdWJzdHIobSksbiYmbC5wdXNoKG4pLGwuc2V0UmF0aW89TixNLnRlc3QoYikmJihsLmVuZD0wKSxsfSxQPWZ1bmN0aW9uKGEsYixjLGQsZSxmLGcsaCxpKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkJiYoZD1kKGl8fDAsYSkpO3ZhciBqLGs9dHlwZW9mIGFbYl0sbD1cImZ1bmN0aW9uXCIhPT1rP1wiXCI6Yi5pbmRleE9mKFwic2V0XCIpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBhW1wiZ2V0XCIrYi5zdWJzdHIoMyldP2I6XCJnZXRcIitiLnN1YnN0cigzKSxtPVwiZ2V0XCIhPT1jP2M6bD9nP2FbbF0oZyk6YVtsXSgpOmFbYl0sbj1cInN0cmluZ1wiPT10eXBlb2YgZCYmXCI9XCI9PT1kLmNoYXJBdCgxKSxvPXt0OmEscDpiLHM6bSxmOlwiZnVuY3Rpb25cIj09PWsscGc6MCxuOmV8fGIsbTpmP1wiZnVuY3Rpb25cIj09dHlwZW9mIGY/ZjpNYXRoLnJvdW5kOjAscHI6MCxjOm4/cGFyc2VJbnQoZC5jaGFyQXQoMCkrXCIxXCIsMTApKnBhcnNlRmxvYXQoZC5zdWJzdHIoMikpOnBhcnNlRmxvYXQoZCktbXx8MH07cmV0dXJuKFwibnVtYmVyXCIhPXR5cGVvZiBtfHxcIm51bWJlclwiIT10eXBlb2YgZCYmIW4pJiYoZ3x8aXNOYU4obSl8fCFuJiZpc05hTihkKXx8XCJib29sZWFuXCI9PXR5cGVvZiBtfHxcImJvb2xlYW5cIj09dHlwZW9mIGQ/KG8uZnA9ZyxqPU8obSxuP3BhcnNlRmxvYXQoby5zKStvLmM6ZCxofHxHLmRlZmF1bHRTdHJpbmdGaWx0ZXIsbyksbz17dDpqLHA6XCJzZXRSYXRpb1wiLHM6MCxjOjEsZjoyLHBnOjAsbjplfHxiLHByOjAsbTowfSk6KG8ucz1wYXJzZUZsb2F0KG0pLG58fChvLmM9cGFyc2VGbG9hdChkKS1vLnN8fDApKSksby5jPygoby5fbmV4dD10aGlzLl9maXJzdFBUKSYmKG8uX25leHQuX3ByZXY9byksdGhpcy5fZmlyc3RQVD1vLG8pOnZvaWQgMH0sUT1HLl9pbnRlcm5hbHM9e2lzQXJyYXk6cCxpc1NlbGVjdG9yOkgsbGF6eVR3ZWVuczpKLGJsb2JEaWY6T30sUj1HLl9wbHVnaW5zPXt9LFM9US50d2Vlbkxvb2t1cD17fSxUPTAsVT1RLnJlc2VydmVkUHJvcHM9e2Vhc2U6MSxkZWxheToxLG92ZXJ3cml0ZToxLG9uQ29tcGxldGU6MSxvbkNvbXBsZXRlUGFyYW1zOjEsb25Db21wbGV0ZVNjb3BlOjEsdXNlRnJhbWVzOjEscnVuQmFja3dhcmRzOjEsc3RhcnRBdDoxLG9uVXBkYXRlOjEsb25VcGRhdGVQYXJhbXM6MSxvblVwZGF0ZVNjb3BlOjEsb25TdGFydDoxLG9uU3RhcnRQYXJhbXM6MSxvblN0YXJ0U2NvcGU6MSxvblJldmVyc2VDb21wbGV0ZToxLG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOjEsb25SZXZlcnNlQ29tcGxldGVTY29wZToxLG9uUmVwZWF0OjEsb25SZXBlYXRQYXJhbXM6MSxvblJlcGVhdFNjb3BlOjEsZWFzZVBhcmFtczoxLHlveW86MSxpbW1lZGlhdGVSZW5kZXI6MSxyZXBlYXQ6MSxyZXBlYXREZWxheToxLGRhdGE6MSxwYXVzZWQ6MSxyZXZlcnNlZDoxLGF1dG9DU1M6MSxsYXp5OjEsb25PdmVyd3JpdGU6MSxjYWxsYmFja1Njb3BlOjEsc3RyaW5nRmlsdGVyOjEsaWQ6MSx5b3lvRWFzZToxfSxWPXtub25lOjAsYWxsOjEsYXV0bzoyLGNvbmN1cnJlbnQ6MyxhbGxPblN0YXJ0OjQscHJlZXhpc3Rpbmc6NSxcInRydWVcIjoxLFwiZmFsc2VcIjowfSxXPUQuX3Jvb3RGcmFtZXNUaW1lbGluZT1uZXcgRixYPUQuX3Jvb3RUaW1lbGluZT1uZXcgRixZPTMwLFo9US5sYXp5UmVuZGVyPWZ1bmN0aW9uKCl7dmFyIGEsYj1KLmxlbmd0aDtmb3IoSz17fTstLWI+LTE7KWE9SltiXSxhJiZhLl9sYXp5IT09ITEmJihhLnJlbmRlcihhLl9sYXp5WzBdLGEuX2xhenlbMV0sITApLGEuX2xhenk9ITEpO0oubGVuZ3RoPTB9O1guX3N0YXJ0VGltZT1pLnRpbWUsVy5fc3RhcnRUaW1lPWkuZnJhbWUsWC5fYWN0aXZlPVcuX2FjdGl2ZT0hMCxzZXRUaW1lb3V0KFosMSksRC5fdXBkYXRlUm9vdD1HLnJlbmRlcj1mdW5jdGlvbigpe3ZhciBhLGIsYztpZihKLmxlbmd0aCYmWigpLFgucmVuZGVyKChpLnRpbWUtWC5fc3RhcnRUaW1lKSpYLl90aW1lU2NhbGUsITEsITEpLFcucmVuZGVyKChpLmZyYW1lLVcuX3N0YXJ0VGltZSkqVy5fdGltZVNjYWxlLCExLCExKSxKLmxlbmd0aCYmWigpLGkuZnJhbWU+PVkpe1k9aS5mcmFtZSsocGFyc2VJbnQoRy5hdXRvU2xlZXAsMTApfHwxMjApO2ZvcihjIGluIFMpe2ZvcihiPVNbY10udHdlZW5zLGE9Yi5sZW5ndGg7LS1hPi0xOyliW2FdLl9nYyYmYi5zcGxpY2UoYSwxKTswPT09Yi5sZW5ndGgmJmRlbGV0ZSBTW2NdfWlmKGM9WC5fZmlyc3QsKCFjfHxjLl9wYXVzZWQpJiZHLmF1dG9TbGVlcCYmIVcuX2ZpcnN0JiYxPT09aS5fbGlzdGVuZXJzLnRpY2subGVuZ3RoKXtmb3IoO2MmJmMuX3BhdXNlZDspYz1jLl9uZXh0O2N8fGkuc2xlZXAoKX19fSxpLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsRC5fdXBkYXRlUm9vdCk7dmFyICQ9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZj1hLl9nc1R3ZWVuSUQ7aWYoU1tmfHwoYS5fZ3NUd2VlbklEPWY9XCJ0XCIrVCsrKV18fChTW2ZdPXt0YXJnZXQ6YSx0d2VlbnM6W119KSxiJiYoZD1TW2ZdLnR3ZWVucyxkW2U9ZC5sZW5ndGhdPWIsYykpZm9yKDstLWU+LTE7KWRbZV09PT1iJiZkLnNwbGljZShlLDEpO3JldHVybiBTW2ZdLnR3ZWVuc30sXz1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZSxmLGc9YS52YXJzLm9uT3ZlcndyaXRlO3JldHVybiBnJiYoZT1nKGEsYixjLGQpKSxnPUcub25PdmVyd3JpdGUsZyYmKGY9ZyhhLGIsYyxkKSksZSE9PSExJiZmIT09ITF9LGFhPWZ1bmN0aW9uKGEsYixjLGQsZSl7dmFyIGYsZyxoLGk7aWYoMT09PWR8fGQ+PTQpe2ZvcihpPWUubGVuZ3RoLGY9MDtpPmY7ZisrKWlmKChoPWVbZl0pIT09YiloLl9nY3x8aC5fa2lsbChudWxsLGEsYikmJihnPSEwKTtlbHNlIGlmKDU9PT1kKWJyZWFrO3JldHVybiBnfXZhciBqLGs9Yi5fc3RhcnRUaW1lK20sbD1bXSxuPTAsbz0wPT09Yi5fZHVyYXRpb247Zm9yKGY9ZS5sZW5ndGg7LS1mPi0xOykoaD1lW2ZdKT09PWJ8fGguX2djfHxoLl9wYXVzZWR8fChoLl90aW1lbGluZSE9PWIuX3RpbWVsaW5lPyhqPWp8fGJhKGIsMCxvKSwwPT09YmEoaCxqLG8pJiYobFtuKytdPWgpKTpoLl9zdGFydFRpbWU8PWsmJmguX3N0YXJ0VGltZStoLnRvdGFsRHVyYXRpb24oKS9oLl90aW1lU2NhbGU+ayYmKChvfHwhaC5faW5pdHRlZCkmJmstaC5fc3RhcnRUaW1lPD0yZS0xMHx8KGxbbisrXT1oKSkpO2ZvcihmPW47LS1mPi0xOylpZihoPWxbZl0sMj09PWQmJmguX2tpbGwoYyxhLGIpJiYoZz0hMCksMiE9PWR8fCFoLl9maXJzdFBUJiZoLl9pbml0dGVkKXtpZigyIT09ZCYmIV8oaCxiKSljb250aW51ZTtoLl9lbmFibGVkKCExLCExKSYmKGc9ITApfXJldHVybiBnfSxiYT1mdW5jdGlvbihhLGIsYyl7Zm9yKHZhciBkPWEuX3RpbWVsaW5lLGU9ZC5fdGltZVNjYWxlLGY9YS5fc3RhcnRUaW1lO2QuX3RpbWVsaW5lOyl7aWYoZis9ZC5fc3RhcnRUaW1lLGUqPWQuX3RpbWVTY2FsZSxkLl9wYXVzZWQpcmV0dXJuLTEwMDtkPWQuX3RpbWVsaW5lfXJldHVybiBmLz1lLGY+Yj9mLWI6YyYmZj09PWJ8fCFhLl9pbml0dGVkJiYyKm0+Zi1iP206KGYrPWEudG90YWxEdXJhdGlvbigpL2EuX3RpbWVTY2FsZS9lKT5iK20/MDpmLWItbX07aC5faW5pdD1mdW5jdGlvbigpe3ZhciBhLGIsYyxkLGUsZixnPXRoaXMudmFycyxoPXRoaXMuX292ZXJ3cml0dGVuUHJvcHMsaT10aGlzLl9kdXJhdGlvbixqPSEhZy5pbW1lZGlhdGVSZW5kZXIsaz1nLmVhc2U7aWYoZy5zdGFydEF0KXt0aGlzLl9zdGFydEF0JiYodGhpcy5fc3RhcnRBdC5yZW5kZXIoLTEsITApLHRoaXMuX3N0YXJ0QXQua2lsbCgpKSxlPXt9O2ZvcihkIGluIGcuc3RhcnRBdCllW2RdPWcuc3RhcnRBdFtkXTtpZihlLm92ZXJ3cml0ZT0hMSxlLmltbWVkaWF0ZVJlbmRlcj0hMCxlLmxhenk9aiYmZy5sYXp5IT09ITEsZS5zdGFydEF0PWUuZGVsYXk9bnVsbCxlLm9uVXBkYXRlPWcub25VcGRhdGUsZS5vblVwZGF0ZVNjb3BlPWcub25VcGRhdGVTY29wZXx8Zy5jYWxsYmFja1Njb3BlfHx0aGlzLHRoaXMuX3N0YXJ0QXQ9Ry50byh0aGlzLnRhcmdldCwwLGUpLGopaWYodGhpcy5fdGltZT4wKXRoaXMuX3N0YXJ0QXQ9bnVsbDtlbHNlIGlmKDAhPT1pKXJldHVybn1lbHNlIGlmKGcucnVuQmFja3dhcmRzJiYwIT09aSlpZih0aGlzLl9zdGFydEF0KXRoaXMuX3N0YXJ0QXQucmVuZGVyKC0xLCEwKSx0aGlzLl9zdGFydEF0LmtpbGwoKSx0aGlzLl9zdGFydEF0PW51bGw7ZWxzZXswIT09dGhpcy5fdGltZSYmKGo9ITEpLGM9e307Zm9yKGQgaW4gZylVW2RdJiZcImF1dG9DU1NcIiE9PWR8fChjW2RdPWdbZF0pO2lmKGMub3ZlcndyaXRlPTAsYy5kYXRhPVwiaXNGcm9tU3RhcnRcIixjLmxhenk9aiYmZy5sYXp5IT09ITEsYy5pbW1lZGlhdGVSZW5kZXI9aix0aGlzLl9zdGFydEF0PUcudG8odGhpcy50YXJnZXQsMCxjKSxqKXtpZigwPT09dGhpcy5fdGltZSlyZXR1cm59ZWxzZSB0aGlzLl9zdGFydEF0Ll9pbml0KCksdGhpcy5fc3RhcnRBdC5fZW5hYmxlZCghMSksdGhpcy52YXJzLmltbWVkaWF0ZVJlbmRlciYmKHRoaXMuX3N0YXJ0QXQ9bnVsbCl9aWYodGhpcy5fZWFzZT1rPWs/ayBpbnN0YW5jZW9mIHY/azpcImZ1bmN0aW9uXCI9PXR5cGVvZiBrP25ldyB2KGssZy5lYXNlUGFyYW1zKTp3W2tdfHxHLmRlZmF1bHRFYXNlOkcuZGVmYXVsdEVhc2UsZy5lYXNlUGFyYW1zIGluc3RhbmNlb2YgQXJyYXkmJmsuY29uZmlnJiYodGhpcy5fZWFzZT1rLmNvbmZpZy5hcHBseShrLGcuZWFzZVBhcmFtcykpLHRoaXMuX2Vhc2VUeXBlPXRoaXMuX2Vhc2UuX3R5cGUsdGhpcy5fZWFzZVBvd2VyPXRoaXMuX2Vhc2UuX3Bvd2VyLHRoaXMuX2ZpcnN0UFQ9bnVsbCx0aGlzLl90YXJnZXRzKWZvcihmPXRoaXMuX3RhcmdldHMubGVuZ3RoLGE9MDtmPmE7YSsrKXRoaXMuX2luaXRQcm9wcyh0aGlzLl90YXJnZXRzW2FdLHRoaXMuX3Byb3BMb29rdXBbYV09e30sdGhpcy5fc2libGluZ3NbYV0saD9oW2FdOm51bGwsYSkmJihiPSEwKTtlbHNlIGI9dGhpcy5faW5pdFByb3BzKHRoaXMudGFyZ2V0LHRoaXMuX3Byb3BMb29rdXAsdGhpcy5fc2libGluZ3MsaCwwKTtpZihiJiZHLl9vblBsdWdpbkV2ZW50KFwiX29uSW5pdEFsbFByb3BzXCIsdGhpcyksaCYmKHRoaXMuX2ZpcnN0UFR8fFwiZnVuY3Rpb25cIiE9dHlwZW9mIHRoaXMudGFyZ2V0JiZ0aGlzLl9lbmFibGVkKCExLCExKSksZy5ydW5CYWNrd2FyZHMpZm9yKGM9dGhpcy5fZmlyc3RQVDtjOyljLnMrPWMuYyxjLmM9LWMuYyxjPWMuX25leHQ7dGhpcy5fb25VcGRhdGU9Zy5vblVwZGF0ZSx0aGlzLl9pbml0dGVkPSEwfSxoLl9pbml0UHJvcHM9ZnVuY3Rpb24oYixjLGQsZSxmKXt2YXIgZyxoLGksaixrLGw7aWYobnVsbD09YilyZXR1cm4hMTtLW2IuX2dzVHdlZW5JRF0mJlooKSx0aGlzLnZhcnMuY3NzfHxiLnN0eWxlJiZiIT09YSYmYi5ub2RlVHlwZSYmUi5jc3MmJnRoaXMudmFycy5hdXRvQ1NTIT09ITEmJkkodGhpcy52YXJzLGIpO2ZvcihnIGluIHRoaXMudmFycylpZihsPXRoaXMudmFyc1tnXSxVW2ddKWwmJihsIGluc3RhbmNlb2YgQXJyYXl8fGwucHVzaCYmcChsKSkmJi0xIT09bC5qb2luKFwiXCIpLmluZGV4T2YoXCJ7c2VsZn1cIikmJih0aGlzLnZhcnNbZ109bD10aGlzLl9zd2FwU2VsZkluUGFyYW1zKGwsdGhpcykpO2Vsc2UgaWYoUltnXSYmKGo9bmV3IFJbZ10pLl9vbkluaXRUd2VlbihiLHRoaXMudmFyc1tnXSx0aGlzLGYpKXtmb3IodGhpcy5fZmlyc3RQVD1rPXtfbmV4dDp0aGlzLl9maXJzdFBULHQ6aixwOlwic2V0UmF0aW9cIixzOjAsYzoxLGY6MSxuOmcscGc6MSxwcjpqLl9wcmlvcml0eSxtOjB9LGg9ai5fb3ZlcndyaXRlUHJvcHMubGVuZ3RoOy0taD4tMTspY1tqLl9vdmVyd3JpdGVQcm9wc1toXV09dGhpcy5fZmlyc3RQVDsoai5fcHJpb3JpdHl8fGouX29uSW5pdEFsbFByb3BzKSYmKGk9ITApLChqLl9vbkRpc2FibGV8fGouX29uRW5hYmxlKSYmKHRoaXMuX25vdGlmeVBsdWdpbnNPZkVuYWJsZWQ9ITApLGsuX25leHQmJihrLl9uZXh0Ll9wcmV2PWspfWVsc2UgY1tnXT1QLmNhbGwodGhpcyxiLGcsXCJnZXRcIixsLGcsMCxudWxsLHRoaXMudmFycy5zdHJpbmdGaWx0ZXIsZik7cmV0dXJuIGUmJnRoaXMuX2tpbGwoZSxiKT90aGlzLl9pbml0UHJvcHMoYixjLGQsZSxmKTp0aGlzLl9vdmVyd3JpdGU+MSYmdGhpcy5fZmlyc3RQVCYmZC5sZW5ndGg+MSYmYWEoYix0aGlzLGMsdGhpcy5fb3ZlcndyaXRlLGQpPyh0aGlzLl9raWxsKGMsYiksdGhpcy5faW5pdFByb3BzKGIsYyxkLGUsZikpOih0aGlzLl9maXJzdFBUJiYodGhpcy52YXJzLmxhenkhPT0hMSYmdGhpcy5fZHVyYXRpb258fHRoaXMudmFycy5sYXp5JiYhdGhpcy5fZHVyYXRpb24pJiYoS1tiLl9nc1R3ZWVuSURdPSEwKSxpKX0saC5yZW5kZXI9ZnVuY3Rpb24oYSxiLGMpe3ZhciBkLGUsZixnLGg9dGhpcy5fdGltZSxpPXRoaXMuX2R1cmF0aW9uLGo9dGhpcy5fcmF3UHJldlRpbWU7aWYoYT49aS0xZS03JiZhPj0wKXRoaXMuX3RvdGFsVGltZT10aGlzLl90aW1lPWksdGhpcy5yYXRpbz10aGlzLl9lYXNlLl9jYWxjRW5kP3RoaXMuX2Vhc2UuZ2V0UmF0aW8oMSk6MSx0aGlzLl9yZXZlcnNlZHx8KGQ9ITAsZT1cIm9uQ29tcGxldGVcIixjPWN8fHRoaXMuX3RpbWVsaW5lLmF1dG9SZW1vdmVDaGlsZHJlbiksMD09PWkmJih0aGlzLl9pbml0dGVkfHwhdGhpcy52YXJzLmxhenl8fGMpJiYodGhpcy5fc3RhcnRUaW1lPT09dGhpcy5fdGltZWxpbmUuX2R1cmF0aW9uJiYoYT0wKSwoMD5qfHwwPj1hJiZhPj0tMWUtN3x8aj09PW0mJlwiaXNQYXVzZVwiIT09dGhpcy5kYXRhKSYmaiE9PWEmJihjPSEwLGo+bSYmKGU9XCJvblJldmVyc2VDb21wbGV0ZVwiKSksdGhpcy5fcmF3UHJldlRpbWU9Zz0hYnx8YXx8aj09PWE/YTptKTtlbHNlIGlmKDFlLTc+YSl0aGlzLl90b3RhbFRpbWU9dGhpcy5fdGltZT0wLHRoaXMucmF0aW89dGhpcy5fZWFzZS5fY2FsY0VuZD90aGlzLl9lYXNlLmdldFJhdGlvKDApOjAsKDAhPT1ofHwwPT09aSYmaj4wKSYmKGU9XCJvblJldmVyc2VDb21wbGV0ZVwiLGQ9dGhpcy5fcmV2ZXJzZWQpLDA+YSYmKHRoaXMuX2FjdGl2ZT0hMSwwPT09aSYmKHRoaXMuX2luaXR0ZWR8fCF0aGlzLnZhcnMubGF6eXx8YykmJihqPj0wJiYoaiE9PW18fFwiaXNQYXVzZVwiIT09dGhpcy5kYXRhKSYmKGM9ITApLHRoaXMuX3Jhd1ByZXZUaW1lPWc9IWJ8fGF8fGo9PT1hP2E6bSkpLCghdGhpcy5faW5pdHRlZHx8dGhpcy5fc3RhcnRBdCYmdGhpcy5fc3RhcnRBdC5wcm9ncmVzcygpKSYmKGM9ITApO2Vsc2UgaWYodGhpcy5fdG90YWxUaW1lPXRoaXMuX3RpbWU9YSx0aGlzLl9lYXNlVHlwZSl7dmFyIGs9YS9pLGw9dGhpcy5fZWFzZVR5cGUsbj10aGlzLl9lYXNlUG93ZXI7KDE9PT1sfHwzPT09bCYmaz49LjUpJiYoaz0xLWspLDM9PT1sJiYoayo9MiksMT09PW4/ayo9azoyPT09bj9rKj1rKms6Mz09PW4/ayo9ayprKms6ND09PW4mJihrKj1rKmsqayprKSwxPT09bD90aGlzLnJhdGlvPTEtazoyPT09bD90aGlzLnJhdGlvPWs6LjU+YS9pP3RoaXMucmF0aW89ay8yOnRoaXMucmF0aW89MS1rLzJ9ZWxzZSB0aGlzLnJhdGlvPXRoaXMuX2Vhc2UuZ2V0UmF0aW8oYS9pKTtpZih0aGlzLl90aW1lIT09aHx8Yyl7aWYoIXRoaXMuX2luaXR0ZWQpe2lmKHRoaXMuX2luaXQoKSwhdGhpcy5faW5pdHRlZHx8dGhpcy5fZ2MpcmV0dXJuO2lmKCFjJiZ0aGlzLl9maXJzdFBUJiYodGhpcy52YXJzLmxhenkhPT0hMSYmdGhpcy5fZHVyYXRpb258fHRoaXMudmFycy5sYXp5JiYhdGhpcy5fZHVyYXRpb24pKXJldHVybiB0aGlzLl90aW1lPXRoaXMuX3RvdGFsVGltZT1oLHRoaXMuX3Jhd1ByZXZUaW1lPWosSi5wdXNoKHRoaXMpLHZvaWQodGhpcy5fbGF6eT1bYSxiXSk7dGhpcy5fdGltZSYmIWQ/dGhpcy5yYXRpbz10aGlzLl9lYXNlLmdldFJhdGlvKHRoaXMuX3RpbWUvaSk6ZCYmdGhpcy5fZWFzZS5fY2FsY0VuZCYmKHRoaXMucmF0aW89dGhpcy5fZWFzZS5nZXRSYXRpbygwPT09dGhpcy5fdGltZT8wOjEpKX1mb3IodGhpcy5fbGF6eSE9PSExJiYodGhpcy5fbGF6eT0hMSksdGhpcy5fYWN0aXZlfHwhdGhpcy5fcGF1c2VkJiZ0aGlzLl90aW1lIT09aCYmYT49MCYmKHRoaXMuX2FjdGl2ZT0hMCksMD09PWgmJih0aGlzLl9zdGFydEF0JiYoYT49MD90aGlzLl9zdGFydEF0LnJlbmRlcihhLGIsYyk6ZXx8KGU9XCJfZHVtbXlHU1wiKSksdGhpcy52YXJzLm9uU3RhcnQmJigwIT09dGhpcy5fdGltZXx8MD09PWkpJiYoYnx8dGhpcy5fY2FsbGJhY2soXCJvblN0YXJ0XCIpKSksZj10aGlzLl9maXJzdFBUO2Y7KWYuZj9mLnRbZi5wXShmLmMqdGhpcy5yYXRpbytmLnMpOmYudFtmLnBdPWYuYyp0aGlzLnJhdGlvK2YucyxmPWYuX25leHQ7dGhpcy5fb25VcGRhdGUmJigwPmEmJnRoaXMuX3N0YXJ0QXQmJmEhPT0tMWUtNCYmdGhpcy5fc3RhcnRBdC5yZW5kZXIoYSxiLGMpLGJ8fCh0aGlzLl90aW1lIT09aHx8ZHx8YykmJnRoaXMuX2NhbGxiYWNrKFwib25VcGRhdGVcIikpLGUmJighdGhpcy5fZ2N8fGMpJiYoMD5hJiZ0aGlzLl9zdGFydEF0JiYhdGhpcy5fb25VcGRhdGUmJmEhPT0tMWUtNCYmdGhpcy5fc3RhcnRBdC5yZW5kZXIoYSxiLGMpLGQmJih0aGlzLl90aW1lbGluZS5hdXRvUmVtb3ZlQ2hpbGRyZW4mJnRoaXMuX2VuYWJsZWQoITEsITEpLHRoaXMuX2FjdGl2ZT0hMSksIWImJnRoaXMudmFyc1tlXSYmdGhpcy5fY2FsbGJhY2soZSksMD09PWkmJnRoaXMuX3Jhd1ByZXZUaW1lPT09bSYmZyE9PW0mJih0aGlzLl9yYXdQcmV2VGltZT0wKSl9fSxoLl9raWxsPWZ1bmN0aW9uKGEsYixjKXtpZihcImFsbFwiPT09YSYmKGE9bnVsbCksbnVsbD09YSYmKG51bGw9PWJ8fGI9PT10aGlzLnRhcmdldCkpcmV0dXJuIHRoaXMuX2xhenk9ITEsdGhpcy5fZW5hYmxlZCghMSwhMSk7Yj1cInN0cmluZ1wiIT10eXBlb2YgYj9ifHx0aGlzLl90YXJnZXRzfHx0aGlzLnRhcmdldDpHLnNlbGVjdG9yKGIpfHxiO3ZhciBkLGUsZixnLGgsaSxqLGssbCxtPWMmJnRoaXMuX3RpbWUmJmMuX3N0YXJ0VGltZT09PXRoaXMuX3N0YXJ0VGltZSYmdGhpcy5fdGltZWxpbmU9PT1jLl90aW1lbGluZTtpZigocChiKXx8SChiKSkmJlwibnVtYmVyXCIhPXR5cGVvZiBiWzBdKWZvcihkPWIubGVuZ3RoOy0tZD4tMTspdGhpcy5fa2lsbChhLGJbZF0sYykmJihpPSEwKTtlbHNle2lmKHRoaXMuX3RhcmdldHMpe2ZvcihkPXRoaXMuX3RhcmdldHMubGVuZ3RoOy0tZD4tMTspaWYoYj09PXRoaXMuX3RhcmdldHNbZF0pe2g9dGhpcy5fcHJvcExvb2t1cFtkXXx8e30sdGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcz10aGlzLl9vdmVyd3JpdHRlblByb3BzfHxbXSxlPXRoaXMuX292ZXJ3cml0dGVuUHJvcHNbZF09YT90aGlzLl9vdmVyd3JpdHRlblByb3BzW2RdfHx7fTpcImFsbFwiO2JyZWFrfX1lbHNle2lmKGIhPT10aGlzLnRhcmdldClyZXR1cm4hMTtoPXRoaXMuX3Byb3BMb29rdXAsZT10aGlzLl9vdmVyd3JpdHRlblByb3BzPWE/dGhpcy5fb3ZlcndyaXR0ZW5Qcm9wc3x8e306XCJhbGxcIn1pZihoKXtpZihqPWF8fGgsaz1hIT09ZSYmXCJhbGxcIiE9PWUmJmEhPT1oJiYoXCJvYmplY3RcIiE9dHlwZW9mIGF8fCFhLl90ZW1wS2lsbCksYyYmKEcub25PdmVyd3JpdGV8fHRoaXMudmFycy5vbk92ZXJ3cml0ZSkpe2ZvcihmIGluIGopaFtmXSYmKGx8fChsPVtdKSxsLnB1c2goZikpO2lmKChsfHwhYSkmJiFfKHRoaXMsYyxiLGwpKXJldHVybiExfWZvcihmIGluIGopKGc9aFtmXSkmJihtJiYoZy5mP2cudFtnLnBdKGcucyk6Zy50W2cucF09Zy5zLGk9ITApLGcucGcmJmcudC5fa2lsbChqKSYmKGk9ITApLGcucGcmJjAhPT1nLnQuX292ZXJ3cml0ZVByb3BzLmxlbmd0aHx8KGcuX3ByZXY/Zy5fcHJldi5fbmV4dD1nLl9uZXh0Omc9PT10aGlzLl9maXJzdFBUJiYodGhpcy5fZmlyc3RQVD1nLl9uZXh0KSxnLl9uZXh0JiYoZy5fbmV4dC5fcHJldj1nLl9wcmV2KSxnLl9uZXh0PWcuX3ByZXY9bnVsbCksZGVsZXRlIGhbZl0pLGsmJihlW2ZdPTEpOyF0aGlzLl9maXJzdFBUJiZ0aGlzLl9pbml0dGVkJiZ0aGlzLl9lbmFibGVkKCExLCExKX19cmV0dXJuIGl9LGguaW52YWxpZGF0ZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkJiZHLl9vblBsdWdpbkV2ZW50KFwiX29uRGlzYWJsZVwiLHRoaXMpLHRoaXMuX2ZpcnN0UFQ9dGhpcy5fb3ZlcndyaXR0ZW5Qcm9wcz10aGlzLl9zdGFydEF0PXRoaXMuX29uVXBkYXRlPW51bGwsdGhpcy5fbm90aWZ5UGx1Z2luc09mRW5hYmxlZD10aGlzLl9hY3RpdmU9dGhpcy5fbGF6eT0hMSx0aGlzLl9wcm9wTG9va3VwPXRoaXMuX3RhcmdldHM/e306W10sRC5wcm90b3R5cGUuaW52YWxpZGF0ZS5jYWxsKHRoaXMpLHRoaXMudmFycy5pbW1lZGlhdGVSZW5kZXImJih0aGlzLl90aW1lPS1tLHRoaXMucmVuZGVyKE1hdGgubWluKDAsLXRoaXMuX2RlbGF5KSkpLHRoaXN9LGguX2VuYWJsZWQ9ZnVuY3Rpb24oYSxiKXtpZihqfHxpLndha2UoKSxhJiZ0aGlzLl9nYyl7dmFyIGMsZD10aGlzLl90YXJnZXRzO2lmKGQpZm9yKGM9ZC5sZW5ndGg7LS1jPi0xOyl0aGlzLl9zaWJsaW5nc1tjXT0kKGRbY10sdGhpcywhMCk7ZWxzZSB0aGlzLl9zaWJsaW5ncz0kKHRoaXMudGFyZ2V0LHRoaXMsITApfXJldHVybiBELnByb3RvdHlwZS5fZW5hYmxlZC5jYWxsKHRoaXMsYSxiKSx0aGlzLl9ub3RpZnlQbHVnaW5zT2ZFbmFibGVkJiZ0aGlzLl9maXJzdFBUP0cuX29uUGx1Z2luRXZlbnQoYT9cIl9vbkVuYWJsZVwiOlwiX29uRGlzYWJsZVwiLHRoaXMpOiExfSxHLnRvPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gbmV3IEcoYSxiLGMpfSxHLmZyb209ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBjLnJ1bkJhY2t3YXJkcz0hMCxjLmltbWVkaWF0ZVJlbmRlcj0wIT1jLmltbWVkaWF0ZVJlbmRlcixuZXcgRyhhLGIsYyl9LEcuZnJvbVRvPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiBkLnN0YXJ0QXQ9YyxkLmltbWVkaWF0ZVJlbmRlcj0wIT1kLmltbWVkaWF0ZVJlbmRlciYmMCE9Yy5pbW1lZGlhdGVSZW5kZXIsbmV3IEcoYSxiLGQpfSxHLmRlbGF5ZWRDYWxsPWZ1bmN0aW9uKGEsYixjLGQsZSl7cmV0dXJuIG5ldyBHKGIsMCx7ZGVsYXk6YSxvbkNvbXBsZXRlOmIsb25Db21wbGV0ZVBhcmFtczpjLGNhbGxiYWNrU2NvcGU6ZCxvblJldmVyc2VDb21wbGV0ZTpiLG9uUmV2ZXJzZUNvbXBsZXRlUGFyYW1zOmMsaW1tZWRpYXRlUmVuZGVyOiExLGxhenk6ITEsdXNlRnJhbWVzOmUsb3ZlcndyaXRlOjB9KX0sRy5zZXQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gbmV3IEcoYSwwLGIpfSxHLmdldFR3ZWVuc09mPWZ1bmN0aW9uKGEsYil7aWYobnVsbD09YSlyZXR1cm5bXTthPVwic3RyaW5nXCIhPXR5cGVvZiBhP2E6Ry5zZWxlY3RvcihhKXx8YTt2YXIgYyxkLGUsZjtpZigocChhKXx8SChhKSkmJlwibnVtYmVyXCIhPXR5cGVvZiBhWzBdKXtmb3IoYz1hLmxlbmd0aCxkPVtdOy0tYz4tMTspZD1kLmNvbmNhdChHLmdldFR3ZWVuc09mKGFbY10sYikpO2ZvcihjPWQubGVuZ3RoOy0tYz4tMTspZm9yKGY9ZFtjXSxlPWM7LS1lPi0xOylmPT09ZFtlXSYmZC5zcGxpY2UoYywxKX1lbHNlIGlmKGEuX2dzVHdlZW5JRClmb3IoZD0kKGEpLmNvbmNhdCgpLGM9ZC5sZW5ndGg7LS1jPi0xOykoZFtjXS5fZ2N8fGImJiFkW2NdLmlzQWN0aXZlKCkpJiZkLnNwbGljZShjLDEpO3JldHVybiBkfHxbXX0sRy5raWxsVHdlZW5zT2Y9Ry5raWxsRGVsYXllZENhbGxzVG89ZnVuY3Rpb24oYSxiLGMpe1wib2JqZWN0XCI9PXR5cGVvZiBiJiYoYz1iLGI9ITEpO2Zvcih2YXIgZD1HLmdldFR3ZWVuc09mKGEsYiksZT1kLmxlbmd0aDstLWU+LTE7KWRbZV0uX2tpbGwoYyxhKX07dmFyIGNhPXQoXCJwbHVnaW5zLlR3ZWVuUGx1Z2luXCIsZnVuY3Rpb24oYSxiKXt0aGlzLl9vdmVyd3JpdGVQcm9wcz0oYXx8XCJcIikuc3BsaXQoXCIsXCIpLHRoaXMuX3Byb3BOYW1lPXRoaXMuX292ZXJ3cml0ZVByb3BzWzBdLHRoaXMuX3ByaW9yaXR5PWJ8fDAsdGhpcy5fc3VwZXI9Y2EucHJvdG90eXBlfSwhMCk7aWYoaD1jYS5wcm90b3R5cGUsY2EudmVyc2lvbj1cIjEuMTkuMFwiLGNhLkFQST0yLGguX2ZpcnN0UFQ9bnVsbCxoLl9hZGRUd2Vlbj1QLGguc2V0UmF0aW89TixoLl9raWxsPWZ1bmN0aW9uKGEpe3ZhciBiLGM9dGhpcy5fb3ZlcndyaXRlUHJvcHMsZD10aGlzLl9maXJzdFBUO2lmKG51bGwhPWFbdGhpcy5fcHJvcE5hbWVdKXRoaXMuX292ZXJ3cml0ZVByb3BzPVtdO2Vsc2UgZm9yKGI9Yy5sZW5ndGg7LS1iPi0xOyludWxsIT1hW2NbYl1dJiZjLnNwbGljZShiLDEpO2Zvcig7ZDspbnVsbCE9YVtkLm5dJiYoZC5fbmV4dCYmKGQuX25leHQuX3ByZXY9ZC5fcHJldiksZC5fcHJldj8oZC5fcHJldi5fbmV4dD1kLl9uZXh0LGQuX3ByZXY9bnVsbCk6dGhpcy5fZmlyc3RQVD09PWQmJih0aGlzLl9maXJzdFBUPWQuX25leHQpKSxkPWQuX25leHQ7cmV0dXJuITF9LGguX21vZD1oLl9yb3VuZFByb3BzPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYixjPXRoaXMuX2ZpcnN0UFQ7YzspYj1hW3RoaXMuX3Byb3BOYW1lXXx8bnVsbCE9Yy5uJiZhW2Mubi5zcGxpdCh0aGlzLl9wcm9wTmFtZStcIl9cIikuam9pbihcIlwiKV0sYiYmXCJmdW5jdGlvblwiPT10eXBlb2YgYiYmKDI9PT1jLmY/Yy50Ll9hcHBseVBULm09YjpjLm09YiksYz1jLl9uZXh0fSxHLl9vblBsdWdpbkV2ZW50PWZ1bmN0aW9uKGEsYil7dmFyIGMsZCxlLGYsZyxoPWIuX2ZpcnN0UFQ7aWYoXCJfb25Jbml0QWxsUHJvcHNcIj09PWEpe2Zvcig7aDspe2ZvcihnPWguX25leHQsZD1lO2QmJmQucHI+aC5wcjspZD1kLl9uZXh0OyhoLl9wcmV2PWQ/ZC5fcHJldjpmKT9oLl9wcmV2Ll9uZXh0PWg6ZT1oLChoLl9uZXh0PWQpP2QuX3ByZXY9aDpmPWgsaD1nfWg9Yi5fZmlyc3RQVD1lfWZvcig7aDspaC5wZyYmXCJmdW5jdGlvblwiPT10eXBlb2YgaC50W2FdJiZoLnRbYV0oKSYmKGM9ITApLGg9aC5fbmV4dDtyZXR1cm4gY30sY2EuYWN0aXZhdGU9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPWEubGVuZ3RoOy0tYj4tMTspYVtiXS5BUEk9PT1jYS5BUEkmJihSWyhuZXcgYVtiXSkuX3Byb3BOYW1lXT1hW2JdKTtyZXR1cm4hMH0scy5wbHVnaW49ZnVuY3Rpb24oYSl7aWYoIShhJiZhLnByb3BOYW1lJiZhLmluaXQmJmEuQVBJKSl0aHJvd1wiaWxsZWdhbCBwbHVnaW4gZGVmaW5pdGlvbi5cIjt2YXIgYixjPWEucHJvcE5hbWUsZD1hLnByaW9yaXR5fHwwLGU9YS5vdmVyd3JpdGVQcm9wcyxmPXtpbml0OlwiX29uSW5pdFR3ZWVuXCIsc2V0Olwic2V0UmF0aW9cIixraWxsOlwiX2tpbGxcIixyb3VuZDpcIl9tb2RcIixtb2Q6XCJfbW9kXCIsaW5pdEFsbDpcIl9vbkluaXRBbGxQcm9wc1wifSxnPXQoXCJwbHVnaW5zLlwiK2MuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrYy5zdWJzdHIoMSkrXCJQbHVnaW5cIixmdW5jdGlvbigpe2NhLmNhbGwodGhpcyxjLGQpLHRoaXMuX292ZXJ3cml0ZVByb3BzPWV8fFtdfSxhLmdsb2JhbD09PSEwKSxoPWcucHJvdG90eXBlPW5ldyBjYShjKTtoLmNvbnN0cnVjdG9yPWcsZy5BUEk9YS5BUEk7Zm9yKGIgaW4gZilcImZ1bmN0aW9uXCI9PXR5cGVvZiBhW2JdJiYoaFtmW2JdXT1hW2JdKTtyZXR1cm4gZy52ZXJzaW9uPWEudmVyc2lvbixjYS5hY3RpdmF0ZShbZ10pLGd9LGY9YS5fZ3NRdWV1ZSl7Zm9yKGc9MDtnPGYubGVuZ3RoO2crKylmW2ddKCk7Zm9yKGggaW4gcSlxW2hdLmZ1bmN8fGEuY29uc29sZS5sb2coXCJHU0FQIGVuY291bnRlcmVkIG1pc3NpbmcgZGVwZW5kZW5jeTogXCIraCl9aj0hMX19KFwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGUmJm1vZHVsZS5leHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzfHx3aW5kb3csXCJUd2Vlbk1heFwiKTsiLCJcclxuJCgnLmF1dG9TbGlkZXInKS5zbGljayh7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBkb3RzQ2xhc3M6ICdkb3RzU2xpZGVyJyxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcmVzcG9uc2l2ZUNsYXNzOnRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA4MDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcblxyXG59KTtcclxuXHJcbi8vINGA0LDQsdC+0YLQsCDRhNC+0YDQvNGLINC4INGH0LXQutCx0L7QutGB0LBcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcclxuICAgICQoJy5maWVsZCcpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuY2xvc2VzdCgnLmZpZWxkX193cmFwJykuZmluZCgnLmNoZWNrLWJveCcpLmFkZENsYXNzKCdjaGVja2VkJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuZmllbGRfX3dyYXAnKS5maW5kKCcuY2hlY2stYm94JykucmVtb3ZlQ2xhc3MoJ2NoZWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vINCz0LDQvNCx0YPRgNCz0LXRgFxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICQoXCIuaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbiQoXCIuaGFtYnVyZ2VyXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJtZW51LW9uXCIpO1xyXG4gICAgJChcIi5uYXZcIikudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcblxyXG4vL9GF0LXQsNC00LXRgCDRhNC40LrRgdC40YDQvtCy0LDQvdGL0LlcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbiAgICAvLyDQpNC40LrQvNC40YDQvtCy0LDQvdC90LDRjyDRiNCw0L/QutCwINC/0YDQuCDRgdC60YDQvtC70LvQtVxyXG4gICAgJChcIiNoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJkZWZhdWx0XCIpO1xyXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgIGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMTUwKSB7XHJcbiAgICAgICAgICAgICQoXCIjaGVhZGVyXCIpLmFkZENsYXNzKFwiZGVmYXVsdFwiKS5mYWRlSW4oJ2Zhc3QnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKFwiI2hlYWRlclwiKS5yZW1vdmVDbGFzcyhcImRlZmF1bHRcIikuZmFkZUluKCdmYXN0Jyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyDQsNC90LjQvNCw0YbQuNC4ISEg0L3QsCDRgdGC0YDQsNC90LjRhtC1INGBINCw0LLRgtC+0LzQvtCx0LjQu9GM0L3Ri9C80Lgg0LzQsNGA0LrQsNC80LhcclxuICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLmF1dG9NYXJrJywgMC4zLCB7IG9wYWNpdHk6IDAsIHJvdGF0aW9uOiAtMzYwLCB5OiAtMTAwMCwgeDogLTEwMDAgfSwgMC4wOSk7XHJcblxyXG4gICAgICAgIC8v0LDQvdC40LzQsNGG0LjQuCDQvdCwINCz0LvQsNCy0L3QvtC5INGB0YLRgNCw0L3QuNGG0LVcclxuXHJcbiAgICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5sb2dvSG9tZScsIDAuOCwgeyBvcGFjaXR5OiAwLCB4OjEwMDAgfSwgMC4xKTtcclxuICAgICAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLmxvZ29UZXh0JywgMC44LCB7IG9wYWNpdHk6IDAsIHg6LTEwMDAgfSwgMC41KTtcclxuXHJcbiAgICAgICAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgLy8g0KTQuNC60LzQuNGA0L7QstCw0L3QvdCw0Y8g0YjQsNC/0LrQsCDQv9GA0Lgg0YHQutGA0L7Qu9C70LVcclxuICAgICAgICAgICAgJChcIi5hYm91dEltYWdlXCIpLnJlbW92ZUNsYXNzKFwiZGVmYXVsdFwiKTtcclxuICAgICAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA1NTApIHtcclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50bygnLmFib3V0SW1hZ2UnLCAxLjUsIHtvcGFjaXR5OiAxLCB4OiAtMTAwfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5hbGxBYm91dEluZm8nLCAwLjgsIHtvcGFjaXR5OiAxLCAgeDogLTEwMH0sIDIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiA4NTApIHtcclxuICAgICAgICAgICAgICAgICAgICBUd2Vlbk1heC50bygnLmFib3V0SW5mb1RpdGxlJywgMiwge29wYWNpdHk6IDEsIHg6IDEwMH0sIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuLy/QsNC90LjQvNCw0YbQuNC4INC90LAg0YHRgtGA0LDQvdC40YbQtSDQviDRgdC10YDQstC40YHQtVxyXG5cclxuICAgIFR3ZWVuTWF4LnN0YWdnZXJGcm9tKCcuQVMtYWxsSW5mb1RleHQnLCAwLjgsIHsgb3BhY2l0eTogMCwgIHk6IC0xMDAwLCB4OiAtMTAwMCB9LCAwLjEpO1xyXG4gICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5BUy1hbGxJbmZvQ29udGFjdCcsIDAuOCwgeyBvcGFjaXR5OiAwLCAgeTogMTAwMCwgeDogMTAwMCB9LCAwLjEpO1xyXG5cclxuICAgIC8v0YLQtdC60YHRgiDQsiDQutCw0YDRgtC+0YfQutC1INGBINGC0L7QstCw0YDQvtC8INC4INC40L3RhNC+0LlcclxuICAgIFR3ZWVuTWF4LnN0YWdnZXJGcm9tKCcuY2FyZEJhdHRvbkJhY2snLCAxLjIsIHsgIHg6IC0xMDAwIH0sIDAuMSk7XHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLm1hcmtDYXInLCAwLjUsIHsgIHk6IC0xMDAwIH0sIDAuMSk7XHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLm1hcmtJbWcnLCAxLjIsIHsgIHg6IDEwMDAgfSwgMC4xKTtcclxuXHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLmNhcmQtLWJvdHQtLWluZm8nLCAwLjUsIHsgIHg6IC0xMDAwIH0sIDAuMSk7XHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLmNhcmQtLWJvb3QtLW1hcmsnLCAxLjIsIHsgIHg6IDEwMDAgfSwgMC4xKTtcclxuXHJcblxyXG4gICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5jYXJkLS1ib3R0LWltZycsIDIsIHsgIHg6IDIwMCB9KTtcclxuXHJcblxyXG4gICAgVHdlZW5NYXguc3RhZ2dlckZyb20oJy5zaGFyZXNJbmZvVGV4dCcsIDEsIHsgYXV0b0FscGhhOiAwLCB5OiA1MCB9LDAuNSk7XHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLnNoYXJlc0ltZycsIDEsIHsgIGF1dG9BbHBoYTogMCwgeTogNTB9LDAuNSk7XHJcbiAgICBUd2Vlbk1heC5zdGFnZ2VyRnJvbSgnLnNoYXJlc0FsbFRleHQnLCAxLCB7ICBhdXRvQWxwaGE6IDAsIHk6IDUwLCBkZWxheTogMX0sMC41KTtcclxuXHJcblxyXG5cclxuICAgICQoJy5jYXJCYXR0b24nKS5tb3VzZW92ZXIoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKCcuY2FyTGVmdCcsIDAuNSwgeyAgeDogMjA1LCB5OjUsIHJvdGF0aW9uOjcyMH0pO1xyXG4gICAgICAgIFR3ZWVuTWF4LnRvKCcuY2FyTGVmdCcsIDAuNSwgeyAgc2NhbGU6IDEyLCBkZWxheTogMC42fSk7XHJcblxyXG4gICAgICAgIFR3ZWVuTWF4LnRvKCcuY2FyTGVmdDInLCAwLjUsIHsgIHg6IDY1LCByb3RhdGlvbjo3MjB9KTtcclxuICAgICAgICBUd2Vlbk1heC50bygnLmNhckxlZnQyJywgMC41LCB7ICBzY2FsZTogMTIsIGRlbGF5OiAwLjZ9KTtcclxuXHJcbiAgICAgICAgVHdlZW5NYXgudG8oJy5jYXJMZWZ0MycsIDAuNSwgeyAgeDogMzQ1LCByb3RhdGlvbjo3MjB9KTtcclxuICAgICAgICBUd2Vlbk1heC50bygnLmNhckxlZnQzJywgMC41LCB7ICBzY2FsZTogMTIsIGRlbGF5OiAwLjZ9KTtcclxuXHJcbiAgICB9KTtcclxuICAgICQoJy5jYXJCYXR0b24nKS5tb3VzZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgVHdlZW5NYXgudG8oJy5jYXJMZWZ0JywgMC41LCB7ICB4OiAtMzUsIHJvdGF0aW9uOi03MjAsIHNjYWxlOiAxICB9KTtcclxuXHJcbiAgICAgICAgVHdlZW5NYXgudG8oJy5jYXJMZWZ0MicsIDAuNSwgeyAgeDogLTM1LCByb3RhdGlvbjotNzIwLCBzY2FsZTogMSAgfSk7XHJcblxyXG4gICAgICAgIFR3ZWVuTWF4LnRvKCcuY2FyTGVmdDMnLCAwLjUsIHsgIHg6IC0zNSwgcm90YXRpb246LTcyMCwgc2NhbGU6IDEgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuIl19
