"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(n),k=r,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return n?a.createElement(d,p(p({ref:t},u),{},{components:n})):a.createElement(d,p({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var c=2;c<l;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},70565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={},p="\u9886\u57df\u6a21\u578b\u6982\u8ff0",o={unversionedId:"domainModel/01main",id:"version-5.0/domainModel/01main",title:"\u9886\u57df\u6a21\u578b\u6982\u8ff0",description:"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u3002",source:"@site/versioned_docs/version-5.0/03-domainModel/01main.md",sourceDirName:"03-domainModel",slug:"/domainModel/01main",permalink:"/zh/docs/domainModel/01main",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/01main.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh/docs/quickStart/02quickstart"},next:{title:"\u4e3b\u9898\uff08Topic\uff09",permalink:"/zh/docs/domainModel/02topic"}},i={},c=[{value:"Apache RocketMQ\u9886\u57df\u6a21\u578b",id:"apache-rocketmq\u9886\u57df\u6a21\u578b",level:2},{value:"\u901a\u4fe1\u65b9\u5f0f\u4ecb\u7ecd",id:"\u901a\u4fe1\u65b9\u5f0f\u4ecb\u7ecd",level:2},{value:"\u6d88\u606f\u4f20\u8f93\u6a21\u578b\u4ecb\u7ecd",id:"\u6d88\u606f\u4f20\u8f93\u6a21\u578b\u4ecb\u7ecd",level:2}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u9886\u57df\u6a21\u578b\u6982\u8ff0"},"\u9886\u57df\u6a21\u578b\u6982\u8ff0"),(0,r.kt)("p",null,"\u672c\u6587\u4e3a\u60a8\u4ecb\u7ecd Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u3002"),(0,r.kt)("p",null,"Apache RocketMQ \u662f\u4e00\u6b3e\u5178\u578b\u7684\u5206\u5e03\u5f0f\u67b6\u6784\u4e0b\u7684\u4e2d\u95f4\u4ef6\u4ea7\u54c1\uff0c\u4f7f\u7528\u5f02\u6b65\u901a\u4fe1\u65b9\u5f0f\u548c\u53d1\u5e03\u8ba2\u9605\u7684\u6d88\u606f\u4f20\u8f93\u6a21\u578b\u3002\u901a\u4fe1\u65b9\u5f0f\u548c\u4f20\u8f93\u6a21\u578b\u7684\u5177\u4f53\u8bf4\u660e\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587",(0,r.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u65b9\u5f0f\u4ecb\u7ecd"),"\u548c",(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u4f20\u8f93\u6a21\u578b"),"\u4ecb\u7ecd\u3002\nApache RocketMQ \u4ea7\u54c1\u5177\u5907\u5f02\u6b65\u901a\u4fe1\u7684\u4f18\u52bf\uff0c\u7cfb\u7edf\u62d3\u6251\u7b80\u5355\u3001\u4e0a\u4e0b\u6e38\u8026\u5408\u8f83\u5f31\uff0c\u4e3b\u8981\u5e94\u7528\u4e8e\u5f02\u6b65\u89e3\u8026\uff0c\u6d41\u91cf\u524a\u5cf0\u586b\u8c37\u7b49\u573a\u666f\u3002"),(0,r.kt)("h2",{id:"apache-rocketmq\u9886\u57df\u6a21\u578b"},"Apache RocketMQ\u9886\u57df\u6a21\u578b"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u9886\u57df\u6a21\u578b",src:n(15907).Z,width:"2333",height:"856"})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0cApache RocketMQ \u4e2d\u6d88\u606f\u7684\u751f\u547d\u5468\u671f\u4e3b\u8981\u5206\u4e3a\u6d88\u606f\u751f\u4ea7\u3001\u6d88\u606f\u5b58\u50a8\u3001\u6d88\u606f\u6d88\u8d39\u8fd9\u4e09\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u751f\u4ea7\u8005\u751f\u4ea7\u6d88\u606f\u5e76\u53d1\u9001\u81f3 Apache RocketMQ \u670d\u52a1\u7aef\uff0c\u6d88\u606f\u88ab\u5b58\u50a8\u5728\u670d\u52a1\u7aef\u7684\u4e3b\u9898\u4e2d\uff0c\u6d88\u8d39\u8005\u901a\u8fc7\u8ba2\u9605\u4e3b\u9898\u6d88\u8d39\u6d88\u606f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u751f\u4ea7")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/04producer"},"\u751f\u4ea7\u8005\uff08Producer\uff09"),"\uff1a"),(0,r.kt)("p",null,"Apache RocketMQ \u4e2d\u7528\u4e8e\u4ea7\u751f\u6d88\u606f\u7684\u8fd0\u884c\u5b9e\u4f53\uff0c\u4e00\u822c\u96c6\u6210\u4e8e\u4e1a\u52a1\u8c03\u7528\u94fe\u8def\u7684\u4e0a\u6e38\u3002\u751f\u4ea7\u8005\u662f\u8f7b\u91cf\u7ea7\u533f\u540d\u65e0\u8eab\u4efd\u7684\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u5b58\u50a8")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/02topic"},"\u4e3b\u9898\uff08Topic\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u6d88\u606f\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u5206\u7ec4\u5bb9\u5668\uff0c\u4e3b\u9898\u5185\u90e8\u7531\u591a\u4e2a\u961f\u5217\u7ec4\u6210\uff0c\u6d88\u606f\u7684\u5b58\u50a8\u548c\u6c34\u5e73\u6269\u5c55\u5b9e\u9645\u662f\u901a\u8fc7\u4e3b\u9898\u5185\u7684\u961f\u5217\u5b9e\u73b0\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/03messagequeue"},"\u961f\u5217\uff08MessageQueue\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u6d88\u606f\u4f20\u8f93\u548c\u5b58\u50a8\u7684\u5b9e\u9645\u5355\u5143\u5bb9\u5668\uff0c\u7c7b\u6bd4\u4e8e\u5176\u4ed6\u6d88\u606f\u961f\u5217\u4e2d\u7684\u5206\u533a\u3002 Apache RocketMQ \u901a\u8fc7\u6d41\u5f0f\u7279\u6027\u7684\u65e0\u9650\u961f\u5217\u7ed3\u6784\u6765\u5b58\u50a8\u6d88\u606f\uff0c\u6d88\u606f\u5728\u961f\u5217\u5185\u5177\u5907\u987a\u5e8f\u6027\u5b58\u50a8\u7279\u5f81\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/04message"},"\u6d88\u606f\uff08Message\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u7684\u6700\u5c0f\u4f20\u8f93\u5355\u5143\u3002\u6d88\u606f\u5177\u5907\u4e0d\u53ef\u53d8\u6027\uff0c\u5728\u521d\u59cb\u5316\u53d1\u9001\u548c\u5b8c\u6210\u5b58\u50a8\u540e\u5373\u4e0d\u53ef\u53d8\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6d88\u606f\u6d88\u8d39")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/07consumergroup"},"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u4e2d\u5b9a\u4e49\u7684\u72ec\u7acb\u7684\u6d88\u8d39\u8eab\u4efd\u5206\u7ec4\uff0c\u7528\u4e8e\u7edf\u4e00\u7ba1\u7406\u5e95\u5c42\u8fd0\u884c\u7684\u591a\u4e2a\u6d88\u8d39\u8005\uff08Consumer\uff09\u3002\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u7684\u591a\u4e2a\u6d88\u8d39\u8005\u5fc5\u987b\u4fdd\u6301\u6d88\u8d39\u903b\u8f91\u548c\u914d\u7f6e\u4e00\u81f4\uff0c\u5171\u540c\u5206\u62c5\u8be5\u6d88\u8d39\u7ec4\u8ba2\u9605\u7684\u6d88\u606f\uff0c\u5b9e\u73b0\u6d88\u8d39\u80fd\u529b\u7684\u6c34\u5e73\u6269\u5c55\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/08consumer"},"\u6d88\u8d39\u8005\uff08Consumer\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u6d88\u8d39\u6d88\u606f\u7684\u8fd0\u884c\u5b9e\u4f53\uff0c\u4e00\u822c\u96c6\u6210\u5728\u4e1a\u52a1\u8c03\u7528\u94fe\u8def\u7684\u4e0b\u6e38\u3002\u6d88\u8d39\u8005\u5fc5\u987b\u88ab\u6307\u5b9a\u5230\u67d0\u4e00\u4e2a\u6d88\u8d39\u7ec4\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/09subscription"},"\u8ba2\u9605\u5173\u7cfb\uff08Subscription\uff09"),"\uff1a"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u4e2d\u6d88\u606f\u8fc7\u6ee4\u3001\u91cd\u8bd5\u3001\u6d88\u8d39\u8fdb\u5ea6\u7684\u89c4\u5219\u914d\u7f6e\u3002\u8ba2\u9605\u5173\u7cfb\u4ee5\u6d88\u8d39\u7ec4\u7c92\u5ea6\u8fdb\u884c\u7ba1\u7406\uff0c\u6d88\u8d39\u7ec4\u901a\u8fc7\u5b9a\u4e49\u8ba2\u9605\u5173\u7cfb\u63a7\u5236\u6307\u5b9a\u6d88\u8d39\u7ec4\u4e0b\u7684\u6d88\u8d39\u8005\u5982\u4f55\u5b9e\u73b0\u6d88\u606f\u8fc7\u6ee4\u3001\u6d88\u8d39\u91cd\u8bd5\u53ca\u6d88\u8d39\u8fdb\u5ea6\u6062\u590d\u7b49\u3002"),(0,r.kt)("p",{parentName:"li"},"Apache RocketMQ \u7684\u8ba2\u9605\u5173\u7cfb\u9664\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u4e4b\u5916\u90fd\u662f\u6301\u4e45\u5316\u7684\uff0c\u5373\u670d\u52a1\u7aef\u91cd\u542f\u6216\u8bf7\u6c42\u65ad\u5f00\uff0c\u8ba2\u9605\u5173\u7cfb\u4f9d\u7136\u4fdd\u7559\u3002"))),(0,r.kt)("h2",{id:"\u901a\u4fe1\u65b9\u5f0f\u4ecb\u7ecd"},"\u901a\u4fe1\u65b9\u5f0f\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u5206\u5e03\u5f0f\u7cfb\u7edf\u67b6\u6784\u601d\u60f3\u4e0b\uff0c\u5c06\u590d\u6742\u7cfb\u7edf\u62c6\u5206\u4e3a\u591a\u4e2a\u72ec\u7acb\u7684\u5b50\u6a21\u5757\uff0c\u4f8b\u5982\u5fae\u670d\u52a1\u6a21\u5757\u3002\u6b64\u65f6\u5c31\u9700\u8981\u8003\u8651\u5b50\u6a21\u5757\u95f4\u7684\u8fdc\u7a0b\u901a\u4fe1\uff0c\u5178\u578b\u7684\u901a\u4fe1\u6a21\u5f0f\u5206\u4e3a\u4ee5\u4e0b\u4e24\u79cd\uff0c\u4e00\u79cd\u662f\u540c\u6b65\u7684RPC\u8fdc\u7a0b\u8c03\u7528\uff1b\u4e00\u79cd\u662f\u57fa\u4e8e\u4e2d\u95f4\u4ef6\u4ee3\u7406\u7684\u5f02\u6b65\u901a\u4fe1\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,"\u540c\u6b65RPC\u8c03\u7528\u6a21\u578b\n",(0,r.kt)("img",{alt:"\u540c\u6b65\u8c03\u7528",src:n(63019).Z,width:"1258",height:"856"})),(0,r.kt)("p",null,"\u540c\u6b65RPC\u8c03\u7528\u6a21\u578b\u4e0b\uff0c\u4e0d\u540c\u7cfb\u7edf\u4e4b\u95f4\u76f4\u63a5\u8fdb\u884c\u8c03\u7528\u901a\u4fe1\uff0c\u6bcf\u4e2a\u8bf7\u6c42\u76f4\u63a5\u4ece\u8c03\u7528\u65b9\u53d1\u9001\u5230\u88ab\u8c03\u7528\u65b9\uff0c\u7136\u540e\u8981\u6c42\u88ab\u8c03\u7528\u65b9\u7acb\u5373\u8fd4\u56de\u54cd\u5e94\u7ed3\u679c\u7ed9\u8c03\u7528\u65b9\uff0c\u4ee5\u786e\u5b9a\u672c\u6b21\u8c03\u7528\u7ed3\u679c\u662f\u5426\u6210\u529f\u3002\n",(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f")," \u6b64\u5904\u7684\u540c\u6b65\u5e76\u4e0d\u4ee3\u8868RPC\u7684\u7f16\u7a0b\u63a5\u53e3\u65b9\u5f0f\uff0cRPC\u4e5f\u53ef\u4ee5\u6709\u5f02\u6b65\u975e\u963b\u585e\u8c03\u7528\u7684\u7f16\u7a0b\u65b9\u5f0f\uff0c\u4f46\u672c\u8d28\u4e0a\u4ecd\u7136\u662f\u9700\u8981\u5728\u6307\u5b9a\u65f6\u95f4\u5185\u5f97\u5230\u76ee\u6807\u7aef\u7684\u76f4\u63a5\u54cd\u5e94\u3002"),(0,r.kt)("p",null,"\u5f02\u6b65\u901a\u4fe1\u6a21\u578b\n",(0,r.kt)("img",{alt:"\u5f02\u6b65\u8c03\u7528",src:n(78587).Z,width:"1435",height:"856"})),(0,r.kt)("p",null,"\u5f02\u6b65\u6d88\u606f\u901a\u4fe1\u6a21\u5f0f\u4e0b\uff0c\u5404\u5b50\u7cfb\u7edf\u4e4b\u95f4\u65e0\u9700\u5f3a\u8026\u5408\u76f4\u63a5\u8fde\u63a5\uff0c\u8c03\u7528\u65b9\u53ea\u9700\u8981\u5c06\u8bf7\u6c42\u8f6c\u5316\u6210\u5f02\u6b65\u4e8b\u4ef6\uff08\u6d88\u606f\uff09\u53d1\u9001\u7ed9\u4e2d\u95f4\u4ee3\u7406\uff0c\u53d1\u9001\u6210\u529f\u5373\u53ef\u8ba4\u4e3a\u8be5\u5f02\u6b65\u94fe\u8def\u8c03\u7528\u5b8c\u6210\uff0c\u5269\u4e0b\u7684\u5de5\u4f5c\u4e2d\u95f4\u4ee3\u7406\u4f1a\u8d1f\u8d23\u5c06\u4e8b\u4ef6\u53ef\u9760\u901a\u77e5\u5230\u4e0b\u6e38\u7684\u8c03\u7528\u7cfb\u7edf\uff0c\u786e\u4fdd\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u3002\u8be5\u4e2d\u95f4\u4ee3\u7406\u4e00\u822c\u5c31\u662f\u6d88\u606f\u4e2d\u95f4\u4ef6\u3002"),(0,r.kt)("p",null,"\u5f02\u6b65\u901a\u4fe1\u7684\u4f18\u52bf\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u62d3\u6251\u7b80\u5355\u7531\u4e8e\u8c03\u7528\u65b9\u548c\u88ab\u8c03\u7528\u65b9\u7edf\u4e00\u548c\u4e2d\u95f4\u4ee3\u7406\u901a\u4fe1\uff0c\u7cfb\u7edf\u662f\u661f\u578b\u7ed3\u6784\uff0c\u6613\u4e8e\u7ef4\u62a4\u548c\u7ba1\u7406\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u4e0b\u6e38\u8026\u5408\u6027\u5f31\u4e0a\u4e0b\u6e38\u7cfb\u7edf\u4e4b\u95f4\u5f31\u8026\u5408\uff0c\u7ed3\u6784\u66f4\u7075\u6d3b\uff0c\u7531\u4e2d\u95f4\u4ee3\u7406\u8d1f\u8d23\u7f13\u51b2\u548c\u5f02\u6b65\u6062\u590d\u3002 \u4e0a\u4e0b\u6e38\u7cfb\u7edf\u95f4\u53ef\u4ee5\u72ec\u7acb\u5347\u7ea7\u548c\u53d8\u66f4\uff0c\u4e0d\u4f1a\u4e92\u76f8\u5f71\u54cd\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5bb9\u91cf\u524a\u5cf0\u586b\u8c37\u57fa\u4e8e\u6d88\u606f\u7684\u4e2d\u95f4\u4ee3\u7406\u5f80\u5f80\u5177\u5907\u5f88\u5f3a\u7684\u6d41\u91cf\u7f13\u51b2\u548c\u6574\u5f62\u80fd\u529b\uff0c\u4e1a\u52a1\u6d41\u91cf\u9ad8\u5cf0\u5230\u6765\u65f6\u4e0d\u4f1a\u51fb\u57ae\u4e0b\u6e38\u3002")),(0,r.kt)("h2",{id:"\u6d88\u606f\u4f20\u8f93\u6a21\u578b\u4ecb\u7ecd"},"\u6d88\u606f\u4f20\u8f93\u6a21\u578b\u4ecb\u7ecd"),(0,r.kt)("p",null,"\u4e3b\u6d41\u7684\u6d88\u606f\u4e2d\u95f4\u4ef6\u7684\u4f20\u8f93\u6a21\u578b\u4e3b\u8981\u4e3a\u70b9\u5bf9\u70b9\u6a21\u578b\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u3002"),(0,r.kt)("p",null,"\u70b9\u5bf9\u70b9\u6a21\u578b\n",(0,r.kt)("img",{alt:"\u70b9\u5bf9\u70b9\u6a21\u578b",src:n(87415).Z,width:"1162",height:"514"})),(0,r.kt)("p",null,"\u70b9\u5bf9\u70b9\u6a21\u578b\u4e5f\u53eb\u961f\u5217\u6a21\u578b\uff0c\u5177\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u8d39\u533f\u540d\uff1a\u6d88\u606f\u4e0a\u4e0b\u6e38\u6c9f\u901a\u7684\u552f\u4e00\u7684\u8eab\u4efd\u5c31\u662f\u961f\u5217\uff0c\u4e0b\u6e38\u6d88\u8d39\u8005\u4ece\u961f\u5217\u83b7\u53d6\u6d88\u606f\u65e0\u6cd5\u7533\u660e\u72ec\u7acb\u8eab\u4efd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u5bf9\u4e00\u901a\u4fe1\uff1a\u57fa\u4e8e\u6d88\u8d39\u533f\u540d\u7279\u70b9\uff0c\u4e0b\u6e38\u6d88\u8d39\u8005\u5373\u4f7f\u6709\u591a\u4e2a\uff0c\u4f46\u90fd\u6ca1\u6709\u81ea\u5df1\u72ec\u7acb\u7684\u8eab\u4efd\uff0c\u56e0\u6b64\u5171\u4eab\u961f\u5217\u4e2d\u7684\u6d88\u606f\uff0c\u6bcf\u4e00\u6761\u6d88\u606f\u90fd\u53ea\u4f1a\u88ab\u552f\u4e00\u4e00\u4e2a\u6d88\u8d39\u8005\u5904\u7406\u3002\u56e0\u6b64\u70b9\u5bf9\u70b9\u6a21\u578b\u53ea\u80fd\u5b9e\u73b0\u4e00\u5bf9\u4e00\u901a\u4fe1\u3002"))),(0,r.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\n",(0,r.kt)("img",{alt:"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b",src:n(22136).Z,width:"1220",height:"520"})),(0,r.kt)("p",null,"\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u5177\u6709\u5982\u4e0b\u7279\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u6d88\u8d39\u72ec\u7acb\uff1a\u76f8\u6bd4\u961f\u5217\u6a21\u578b\u7684\u533f\u540d\u6d88\u8d39\u65b9\u5f0f\uff0c\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u4e2d\u6d88\u8d39\u65b9\u90fd\u4f1a\u5177\u5907\u7684\u8eab\u4efd\uff0c\u4e00\u822c\u53eb\u505a\u8ba2\u9605\u7ec4\uff08\u8ba2\u9605\u5173\u7cfb\uff09\uff0c\u4e0d\u540c\u8ba2\u9605\u7ec4\u4e4b\u95f4\u76f8\u4e92\u72ec\u7acb\u4e0d\u4f1a\u76f8\u4e92\u5f71\u54cd\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4e00\u5bf9\u591a\u901a\u4fe1\uff1a\u57fa\u4e8e\u72ec\u7acb\u8eab\u4efd\u7684\u8bbe\u8ba1\uff0c\u540c\u4e00\u4e2a\u4e3b\u9898\u5185\u7684\u6d88\u606f\u53ef\u4ee5\u88ab\u591a\u4e2a\u8ba2\u9605\u7ec4\u5904\u7406\uff0c\u6bcf\u4e2a\u8ba2\u9605\u7ec4\u90fd\u53ef\u4ee5\u62ff\u5230\u5168\u91cf\u6d88\u606f\u3002\u56e0\u6b64\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u53ef\u4ee5\u5b9e\u73b0\u4e00\u5bf9\u591a\u901a\u4fe1\u3002"))),(0,r.kt)("p",null,"\u4f20\u8f93\u6a21\u578b\u5bf9\u6bd4"),(0,r.kt)("p",null,"\u70b9\u5bf9\u70b9\u6a21\u578b\u548c\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u5404\u6709\u4f18\u52bf\uff0c\u70b9\u5bf9\u70b9\u6a21\u578b\u66f4\u4e3a\u7b80\u5355\uff0c\u800c\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u7684\u6269\u5c55\u6027\u66f4\u9ad8\u3002 Apache RocketMQ \u4f7f\u7528\u7684\u4f20\u8f93\u6a21\u578b\u4e3a\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\uff0c\u56e0\u6b64\u4e5f\u5177\u6709\u53d1\u5e03\u8ba2\u9605\u6a21\u578b\u7684\u7279\u70b9\u3002"))}m.isMDXComponent=!0},78587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/asyncarchi-e7ee18dd77aca472fb80bb2238d9528b.png"},15907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/mainarchi-9b036e7ff5133d050950f25838367a17.png"},87415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/p2pmode-fefdc2fbe4792e757e26befc0b3acbff.png"},22136:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pubsub-042a4e5e5d76806943bd7dcfb730c5d5.png"},63019:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/syncarchi-ebbd41e1afd6adf432792ee2d7a91748.png"}}]);