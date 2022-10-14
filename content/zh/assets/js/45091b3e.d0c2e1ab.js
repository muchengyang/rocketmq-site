"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[285],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),c=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=c(r),k=n,d=s["".concat(i,".").concat(k)]||s[k]||m[k]||l;return r?a.createElement(d,p(p({ref:t},u),{},{components:r})):a.createElement(d,p({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,p=new Array(l);p[0]=s;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var c=2;c<l;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},27719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={},p="\u751f\u4ea7\u8005\uff08Producer\uff09",o={unversionedId:"domainModel/04producer",id:"version-5.0/domainModel/04producer",title:"\u751f\u4ea7\u8005\uff08Producer\uff09",description:"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u751f\u4ea7\u8005\uff08Producer\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002",source:"@site/versioned_docs/version-5.0/03-domainModel/04producer.md",sourceDirName:"03-domainModel",slug:"/domainModel/04producer",permalink:"/zh/docs/domainModel/04producer",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/03-domainModel/04producer.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6d88\u606f\uff08Message\uff09",permalink:"/zh/docs/domainModel/04message"},next:{title:"\u6d88\u8d39\u8005\u5206\u7ec4\uff08ConsumerGroup\uff09",permalink:"/zh/docs/domainModel/07consumergroup"}},i={},c=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",level:2},{value:"\u6a21\u578b\u5173\u7cfb",id:"\u6a21\u578b\u5173\u7cfb",level:2},{value:"\u5185\u90e8\u5c5e\u6027",id:"\u5185\u90e8\u5c5e\u6027",level:2},{value:"\u7248\u672c\u517c\u5bb9\u6027",id:"\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"\u4f7f\u7528\u5efa\u8bae",id:"\u4f7f\u7528\u5efa\u8bae",level:2}],u={toc:c};function m(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u751f\u4ea7\u8005producer"},"\u751f\u4ea7\u8005\uff08Producer\uff09"),(0,n.kt)("p",null,"\u672c\u6587\u4ecb\u7ecd Apache RocketMQ \u4e2d\u751f\u4ea7\u8005\uff08Producer\uff09\u7684\u5b9a\u4e49\u3001\u6a21\u578b\u5173\u7cfb\u3001\u5185\u90e8\u5c5e\u6027\u3001\u7248\u672c\u517c\u5bb9\u6027\u53ca\u4f7f\u7528\u5efa\u8bae\u3002"),(0,n.kt)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u662f Apache RocketMQ \u7cfb\u7edf\u4e2d\u7528\u6765\u6784\u5efa\u5e76\u4f20\u8f93\u6d88\u606f\u5230\u670d\u52a1\u7aef\u7684\u8fd0\u884c\u5b9e\u4f53\u3002"),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u901a\u5e38\u88ab\u96c6\u6210\u5728\u4e1a\u52a1\u7cfb\u7edf\u4e2d\uff0c\u5c06\u4e1a\u52a1\u6d88\u606f\u6309\u7167\u8981\u6c42\u5c01\u88c5\u6210 Apache RocketMQ \u7684",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/domainModel/04message"},"\u6d88\u606f\uff08Message\uff09"),"\u5e76\u53d1\u9001\u81f3\u670d\u52a1\u7aef\u3002"),(0,n.kt)("p",null,"\u5728\u6d88\u606f\u751f\u4ea7\u8005\u4e2d\uff0c\u53ef\u4ee5\u5b9a\u4e49\u5982\u4e0b\u4f20\u8f93\u884c\u4e3a\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u65b9\u5f0f\uff1a\u751f\u4ea7\u8005\u53ef\u901a\u8fc7API\u63a5\u53e3\u8bbe\u7f6e\u6d88\u606f\u53d1\u9001\u7684\u65b9\u5f0f\u3002Apache RocketMQ \u652f\u6301\u540c\u6b65\u4f20\u8f93\u548c\u5f02\u6b65\u4f20\u8f93\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6279\u91cf\u53d1\u9001\uff1a\u751f\u4ea7\u8005\u53ef\u901a\u8fc7API\u63a5\u53e3\u8bbe\u7f6e\u6d88\u606f\u6279\u91cf\u4f20\u8f93\u7684\u65b9\u5f0f\u3002\u4f8b\u5982\uff0c\u6279\u91cf\u53d1\u9001\u7684\u6d88\u606f\u6761\u6570\u6216\u6d88\u606f\u5927\u5c0f\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u884c\u4e3a\uff1aApache RocketMQ \u652f\u6301\u4e8b\u52a1\u6d88\u606f\uff0c\u5bf9\u4e8e\u4e8b\u52a1\u6d88\u606f\u9700\u8981\u751f\u4ea7\u8005\u914d\u5408\u8fdb\u884c\u4e8b\u52a1\u68c0\u67e5\u7b49\u884c\u4e3a\u4fdd\u969c\u4e8b\u52a1\u7684\u6700\u7ec8\u4e00\u81f4\u6027\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f"),"\u3002"))),(0,n.kt)("p",null,"\u751f\u4ea7\u8005\u548c\u4e3b\u9898\u7684\u5173\u7cfb\u4e3a\u591a\u5bf9\u591a\u5173\u7cfb\uff0c\u5373\u540c\u4e00\u4e2a\u751f\u4ea7\u8005\u53ef\u4ee5\u5411\u591a\u4e2a\u4e3b\u9898\u53d1\u9001\u6d88\u606f\uff0c\u5bf9\u4e8e\u5e73\u53f0\u7c7b\u573a\u666f\u5982\u679c\u9700\u8981\u53d1\u9001\u6d88\u606f\u5230\u591a\u4e2a\u4e3b\u9898\uff0c\u5e76\u4e0d\u9700\u8981\u521b\u5efa\u591a\u4e2a\u751f\u4ea7\u8005\uff1b\u540c\u4e00\u4e2a\u4e3b\u9898\u4e5f\u53ef\u4ee5\u63a5\u6536\u591a\u4e2a\u751f\u4ea7\u8005\u7684\u6d88\u606f\uff0c\u4ee5\u6b64\u53ef\u4ee5\u5b9e\u73b0\u751f\u4ea7\u8005\u6027\u80fd\u7684\u6c34\u5e73\u6269\u5c55\u548c\u5bb9\u707e\u3002\n",(0,n.kt)("img",{alt:"\u751f\u4ea7\u8005\u4e3b\u9898\u5173\u8054",src:r(66475).Z,width:"902",height:"481"})),(0,n.kt)("h2",{id:"\u6a21\u578b\u5173\u7cfb"},"\u6a21\u578b\u5173\u7cfb"),(0,n.kt)("p",null,"\u5728 Apache RocketMQ \u7684\u9886\u57df\u6a21\u578b\u4e2d\uff0c\u751f\u4ea7\u8005\u7684\u4f4d\u7f6e\u548c\u6d41\u7a0b\u5982\u4e0b\uff1a",(0,n.kt)("img",{alt:"\u751f\u4ea7\u8005",src:r(88177).Z,width:"1977",height:"877"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d88\u606f\u7531\u751f\u4ea7\u8005\u521d\u59cb\u5316\u5e76\u53d1\u9001\u5230Apache RocketMQ \u670d\u52a1\u7aef\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d88\u606f\u6309\u7167\u5230\u8fbeApache RocketMQ \u670d\u52a1\u7aef\u7684\u987a\u5e8f\u5b58\u50a8\u5230\u4e3b\u9898\u7684\u6307\u5b9a\u961f\u5217\u4e2d\u3002")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u6d88\u8d39\u8005\u6309\u7167\u6307\u5b9a\u7684\u8ba2\u9605\u5173\u7cfb\u4eceApache RocketMQ \u670d\u52a1\u7aef\u4e2d\u83b7\u53d6\u6d88\u606f\u5e76\u6d88\u8d39\u3002"))),(0,n.kt)("h2",{id:"\u5185\u90e8\u5c5e\u6027"},"\u5185\u90e8\u5c5e\u6027"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5ba2\u6237\u7aefID")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1a\u751f\u4ea7\u8005\u5ba2\u6237\u7aef\u7684\u6807\u8bc6\uff0c\u7528\u4e8e\u533a\u5206\u4e0d\u540c\u7684\u751f\u4ea7\u8005\u3002\u96c6\u7fa4\u5185\u5168\u5c40\u552f\u4e00\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53d6\u503c\uff1a\u5ba2\u6237\u7aefID\u7531Apache RocketMQ \u7684SDK\u81ea\u52a8\u751f\u6210\uff0c\u4e3b\u8981\u7528\u4e8e\u65e5\u5fd7\u67e5\u770b\u3001\u95ee\u9898\u5b9a\u4f4d\u7b49\u8fd0\u7ef4\u573a\u666f\uff0c\u4e0d\u652f\u6301\u4fee\u6539\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u901a\u4fe1\u53c2\u6570")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u63a5\u5165\u70b9\u4fe1\u606f ",(0,n.kt)("strong",{parentName:"li"},"\uff08\u5fc5\u9009\uff09")," \uff1a\u8fde\u63a5\u670d\u52a1\u7aef\u7684\u63a5\u5165\u5730\u5740\uff0c\u7528\u4e8e\u8bc6\u522b\u670d\u52a1\u7aef\u96c6\u7fa4\u3002 \u63a5\u5165\u70b9\u5fc5\u987b\u6309\u683c\u5f0f\u914d\u7f6e\uff0c\u5efa\u8bae\u4f7f\u7528\u57df\u540d\uff0c\u907f\u514d\u4f7f\u7528IP\u5730\u5740\uff0c\u9632\u6b62\u8282\u70b9\u53d8\u66f4\u65e0\u6cd5\u8fdb\u884c\u70ed\u70b9\u8fc1\u79fb\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8eab\u4efd\u8ba4\u8bc1\u4fe1\u606f ",(0,n.kt)("strong",{parentName:"li"},"\uff08\u53ef\u9009\uff09")," \uff1a\u5ba2\u6237\u7aef\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u7684\u51ed\u8bc1\u4fe1\u606f\u3002 \u4ec5\u5728\u670d\u52a1\u7aef\u5f00\u542f\u8eab\u4efd\u8bc6\u522b\u548c\u8ba4\u8bc1\u65f6\u9700\u8981\u4f20\u8f93\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4 ",(0,n.kt)("strong",{parentName:"li"},"\uff08\u53ef\u9009\uff09")," \uff1a\u5ba2\u6237\u7aef\u7f51\u7edc\u8bf7\u6c42\u8c03\u7528\u7684\u8d85\u65f6\u65f6\u95f4\u3002\u53d6\u503c\u8303\u56f4\u548c\u9ed8\u8ba4\u503c\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/introduction/03limits"},"\u53c2\u6570\u9650\u5236"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u9884\u7ed1\u5b9a\u4e3b\u9898\u5217\u8868")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1aApache RocketMQ \u7684\u751f\u4ea7\u8005\u9700\u8981\u5c06\u6d88\u606f\u53d1\u9001\u5230\u7684\u76ee\u6807\u4e3b\u9898\u5217\u8868\uff0c\u4e3b\u8981\u4f5c\u7528\u5982\u4e0b\uff1a"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4e8b\u52a1\u6d88\u606f ",(0,n.kt)("strong",{parentName:"p"},"\uff08\u5fc5\u987b\u8bbe\u7f6e\uff09")," \uff1a\u4e8b\u52a1\u6d88\u606f\u573a\u666f\u4e0b\uff0c\u751f\u4ea7\u8005\u5728\u6545\u969c\u3001\u91cd\u542f\u6062\u590d\u65f6\uff0c\u9700\u8981\u68c0\u67e5\u4e8b\u52a1\u6d88\u606f\u7684\u4e3b\u9898\u4e2d\u662f\u5426\u6709\u672a\u63d0\u4ea4\u7684\u4e8b\u52a1\u6d88\u606f\u3002\u907f\u514d\u751f\u4ea7\u8005\u53d1\u9001\u65b0\u6d88\u606f\u540e\uff0c\u4e3b\u9898\u4e2d\u7684\u65e7\u4e8b\u52a1\u6d88\u606f\u4e00\u76f4\u5904\u4e8e\u672a\u63d0\u4ea4\u72b6\u6001\uff0c\u9020\u6210\u4e1a\u52a1\u5ef6\u8fdf\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u975e\u4e8b\u52a1\u6d88\u606f ",(0,n.kt)("strong",{parentName:"p"},"\uff08\u5efa\u8bae\u8bbe\u7f6e\uff09")," \uff1a\u670d\u52a1\u7aef\u4f1a\u5728\u751f\u4ea7\u8005\u521d\u59cb\u5316\u65f6\u6839\u636e\u9884\u7ed1\u5b9a\u4e3b\u9898\u5217\u8868\uff0c\u68c0\u67e5\u76ee\u6807\u4e3b\u9898\u7684\u8bbf\u95ee\u6743\u9650\u548c\u5408\u6cd5\u6027\uff0c\u800c\u4e0d\u9700\u8981\u7b49\u5230\u5e94\u7528\u542f\u52a8\u540e\u518d\u68c0\u67e5\u3002"),(0,n.kt)("p",{parentName:"li"},"\u82e5\u672a\u8bbe\u7f6e\uff0c\u6216\u540e\u7eed\u6d88\u606f\u53d1\u9001\u7684\u76ee\u6807\u4e3b\u9898\u52a8\u6001\u53d8\u66f4\uff0c Apache RocketMQ \u4f1a\u5bf9\u76ee\u6807\u4e3b\u9898\u8fdb\u884c\u52a8\u6001\u8865\u5145\u68c0\u9a8c\u3002")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7ea6\u675f\uff1a\u5bf9\u4e8e\u4e8b\u52a1\u6d88\u606f\uff0c\u9884\u7ed1\u5b9a\u5217\u8868\u5fc5\u987b\u8bbe\u7f6e\uff0c\u4e14\u9700\u8981\u548c\u4e8b\u52a1\u68c0\u67e5\u5668\u4e00\u8d77\u914d\u5408\u4f7f\u7528\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e8b\u52a1\u68c0\u67e5\u5668")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5b9a\u4e49\uff1aApache RocketMQ \u7684\u4e8b\u52a1\u6d88\u606f\u673a\u5236\u4e2d\uff0c\u4e3a\u4fdd\u8bc1\u5f02\u5e38\u573a\u666f\u4e0b\u4e8b\u52a1\u7684\u6700\u7ec8\u4e00\u81f4\u6027\uff0c\u751f\u4ea7\u8005\u9700\u8981\u4e3b\u52a8\u5b9e\u73b0\u4e8b\u52a1\u68c0\u67e5\u5668\u7684\u63a5\u53e3\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"p",href:"/zh/docs/featureBehavior/04transactionmessage"},"\u4e8b\u52a1\u6d88\u606f"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53d1\u9001\u4e8b\u52a1\u6d88\u606f\u65f6\uff0c\u4e8b\u52a1\u68c0\u67e5\u5668\u5fc5\u987b\u8bbe\u7f6e\uff0c\u4e14\u9700\u8981\u548c\u9884\u7ed1\u5b9a\u4e3b\u9898\u5217\u8868\u4e00\u8d77\u914d\u5408\u4f7f\u7528\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u53d1\u9001\u91cd\u8bd5\u7b56\u7565"),"\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b9a\u4e49: \u751f\u4ea7\u8005\u5728\u6d88\u606f\u53d1\u9001\u5931\u8d25\u65f6\u7684\u91cd\u8bd5\u7b56\u7565\u3002\u5177\u4f53\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,n.kt)("a",{parentName:"li",href:"/zh/docs/featureBehavior/05sendretrypolicy"},"\u6d88\u606f\u53d1\u9001\u91cd\u8bd5\u673a\u5236"),"\u3002")),(0,n.kt)("h2",{id:"\u7248\u672c\u517c\u5bb9\u6027"},"\u7248\u672c\u517c\u5bb9\u6027"),(0,n.kt)("p",null,"Apache RocketMQ \u670d\u52a1\u7aef5.x\u7248\u672c\u5f00\u59cb\uff0c\u751f\u4ea7\u8005\u662f\u533f\u540d\u7684\uff0c\u65e0\u9700\u7ba1\u7406\u751f\u4ea7\u8005\u5206\u7ec4\uff08ProducerGroup\uff09\uff1b\u5bf9\u4e8e\u5386\u53f2\u7248\u672c\u670d\u52a1\u7aef3.x\u548c4.x\u7248\u672c\uff0c\u5df2\u7ecf\u4f7f\u7528\u7684\u751f\u4ea7\u8005\u5206\u7ec4\u53ef\u4ee5\u5e9f\u5f03\u65e0\u9700\u518d\u8bbe\u7f6e\uff0c\u4e14\u4e0d\u4f1a\u5bf9\u5f53\u524d\u4e1a\u52a1\u4ea7\u751f\u5f71\u54cd\u3002"),(0,n.kt)("h2",{id:"\u4f7f\u7528\u5efa\u8bae"},"\u4f7f\u7528\u5efa\u8bae"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae\u5355\u4e00\u8fdb\u7a0b\u521b\u5efa\u5927\u91cf\u751f\u4ea7\u8005")),(0,n.kt)("p",null,"Apache RocketMQ \u7684\u751f\u4ea7\u8005\u548c\u4e3b\u9898\u662f\u591a\u5bf9\u591a\u7684\u5173\u7cfb\uff0c\u652f\u6301\u540c\u4e00\u4e2a\u751f\u4ea7\u8005\u5411\u591a\u4e2a\u4e3b\u9898\u53d1\u9001\u6d88\u606f\u3002\u5bf9\u4e8e\u751f\u4ea7\u8005\u7684\u521b\u5efa\u548c\u521d\u59cb\u5316\uff0c\u5efa\u8bae\u9075\u5faa\u591f\u7528\u5373\u53ef\u3001\u6700\u5927\u5316\u590d\u7528\u539f\u5219\uff0c\u5982\u679c\u6709\u9700\u8981\u53d1\u9001\u6d88\u606f\u5230\u591a\u4e2a\u4e3b\u9898\u7684\u573a\u666f\uff0c\u65e0\u9700\u4e3a\u6bcf\u4e2a\u4e3b\u9898\u90fd\u521b\u5efa\u4e00\u4e2a\u751f\u4ea7\u8005\u3002"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u5efa\u8bae\u9891\u7e41\u521b\u5efa\u548c\u9500\u6bc1\u751f\u4ea7\u8005")),(0,n.kt)("p",null,"Apache RocketMQ \u7684\u751f\u4ea7\u8005\u662f\u53ef\u4ee5\u91cd\u590d\u5229\u7528\u7684\u5e95\u5c42\u8d44\u6e90\uff0c\u7c7b\u4f3c\u6570\u636e\u5e93\u7684\u8fde\u63a5\u6c60\u3002\u56e0\u6b64\u4e0d\u9700\u8981\u5728\u6bcf\u6b21\u53d1\u9001\u6d88\u606f\u65f6\u52a8\u6001\u521b\u5efa\u751f\u4ea7\u8005\uff0c\u4e14\u5728\u53d1\u9001\u7ed3\u675f\u540e\u9500\u6bc1\u751f\u4ea7\u8005\u3002\u8fd9\u6837\u9891\u7e41\u7684\u521b\u5efa\u9500\u6bc1\u4f1a\u5728\u670d\u52a1\u7aef\u4ea7\u751f\u5927\u91cf\u77ed\u8fde\u63a5\u8bf7\u6c42\uff0c\u4e25\u91cd\u5f71\u54cd\u7cfb\u7edf\u6027\u80fd\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6b63\u786e\u793a\u4f8b"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"Producer p = ProducerBuilder.build();\nfor (int i =0;i<n;i++){\n    Message m= MessageBuilder.build();\n    p.send(m);\n }\np.shutdown();\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5178\u578b\u9519\u8bef\u793a\u4f8b"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-java"},"for (int i =0;i<n;i++){\n    Producer p = ProducerBuilder.build();\n    Message m= MessageBuilder.build();\n    p.send(m);\n    p.shutdown();\n  }\n")))))}m.isMDXComponent=!0},88177:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/archiforproducer-ebb8ff832f6e857cbebc2c17c2044a3b.png"},66475:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/producer_topic-f9a6348396228a2976e34a5ad0774314.png"}}]);