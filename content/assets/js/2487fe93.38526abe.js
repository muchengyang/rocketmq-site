"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[9822],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),k=p(a),c=r,d=k["".concat(o,".").concat(c)]||k[c]||u[c]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},34033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={},i="RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",m={unversionedId:"strems/31RocketMQ Streams Concept",id:"strems/31RocketMQ Streams Concept",title:"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5",description:"DataStream",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07-strems/31RocketMQ Streams Concept.md",sourceDirName:"07-strems",slug:"/strems/31RocketMQ Streams Concept",permalink:"/docs/4.x/strems/31RocketMQ Streams Concept",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/07-strems/31RocketMQ Streams Concept.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Streams \u6982\u89c8",permalink:"/docs/4.x/strems/30RocketMQ Streams Overview"},next:{title:"RocketMQ Streams \u5feb\u901f\u5f00\u59cb",permalink:"/docs/4.x/strems/32RocketMQ Streams Quick Start"}},o={},p=[{value:"DataStream",id:"datastream",level:2},{value:"DataStreamSource",id:"datastreamsource",level:3},{value:"DataStream",id:"datastream-1",level:3},{value:"ChainPipeline",id:"chainpipeline",level:2},{value:"stage",id:"stage",level:2},{value:"shuffle",id:"shuffle",level:2},{value:"\u9886\u57df\u6a21\u578b",id:"\u9886\u57df\u6a21\u578b",level:2}],s={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-streams-\u6838\u5fc3\u6982\u5ff5"},"RocketMQ Streams \u6838\u5fc3\u6982\u5ff5"),(0,r.kt)("h2",{id:"datastream"},"DataStream"),(0,r.kt)("h3",{id:"datastreamsource"},"DataStreamSource"),(0,r.kt)("p",null,"DataStreamSource \u662f\u5206\u6bb5\u5f0f\u7f16\u7a0b\u7684\u6e90\u5934\u7c7b\uff0c\u7528\u4e8e\u5bf9\u63a5\u6570\u636e\u6e90RocketMQ\uff1b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataStream(nameSpaceName,pipelineName)")," \u8fd4\u56deDataStreamSource\u5b9e\u4f8b\uff0c\u7528\u4e8e\u5206\u6bb5\u7f16\u7a0b\u5b9e\u73b0\u6d41\u8ba1\u7b97\u4efb\u52a1\uff1b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fromRocketmq")," \u4ecerocketmq\u4e2d\u83b7\u53d6\u6570\u636e\uff0c\u5305\u542b\u56db\u4e2a\u53c2\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topic")," rocketmq\u6d88\u606f\u961f\u5217\u7684topic\u540d\u79f0\uff0c\u5fc5\u586b\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"groupName")," \u6d88\u8d39\u8005\u7ec4\u7684\u540d\u79f0\uff0c\u5fc5\u586b\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"namesrvAddress")," RocketMQ\u96c6\u7fa4\u7684namesrv\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isJson")," \u662f\u5426json\u683c\u5f0f\uff0c\u975e\u5fc5\u586b\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tags")," rocketmq\u6d88\u8d39\u7684tags\u503c\uff0c\u7528\u4e8e\u8fc7\u6ee4\u6d88\u606f\uff0c\u975e\u5fc5\u586b\u53c2\u6570")))),(0,r.kt)("h3",{id:"datastream-1"},"DataStream"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"map")," \u901a\u8fc7\u5c06\u6e90\u7684\u6bcf\u4e2a\u8bb0\u5f55\u4f20\u9012\u7ed9\u51fd\u6570func\u6765\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684DataStream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flatmap")," \u4e0emap\u7c7b\u4f3c\uff0c\u4e00\u4e2a\u8f93\u5165\u9879\u5bf9\u5e940\u4e2a\u6216\u8005\u591a\u4e2a\u8f93\u51fa\u9879"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"filter")," \u53ea\u9009\u62e9func\u8fd4\u56detrue\u7684\u6e90DStream\u7684\u8bb0\u5f55\u6765\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684DStream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"forEach")," \u5bf9\u6bcf\u4e2a\u8bb0\u5f55\u6267\u884c\u4e00\u6b21\u51fd\u6570func\uff0c \u8fd4\u56de\u4e00\u4e2a\u65b0\u7684DataStream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"script"),"  \u9488\u5bf9\u6bcf\u4e2a\u8bb0\u5f55\u7684\u5b57\u6bb5\u6267\u884c\u4e00\u6bb5\u811a\u672c\uff0c\u8fd4\u56de\u65b0\u7684\u5b57\u6bb5\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684DataStream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"selectFields")," \u5bf9\u6bcf\u4e2a\u8bb0\u5f55\u8fd4\u56de\u5bf9\u5e94\u7684\u5b57\u6bb5\u503c\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684DataStream"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toPrint")," \u5c06\u7ed3\u679c\u5728\u63a7\u5236\u53f0\u6253\u5370\uff0c\u751f\u6210\u65b0\u7684DataStream\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toFile")," \u5c06\u7ed3\u679c\u4fdd\u5b58\u4e3a\u6587\u4ef6\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684DataStream\u5b9e\u4f8b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"toRocketmq")," \u5c06\u7ed3\u679c\u8f93\u51fa\u5230rocketmq"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"window")," \u5728\u7a97\u53e3\u5185\u8fdb\u884c\u76f8\u5173\u7684\u7edf\u8ba1\u5206\u6790\uff0c\u4e00\u822c\u4f1a\u4e0e",(0,r.kt)("inlineCode",{parentName:"li"},"groupBy"),"\u8fde\u7528\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"window()"),"\u7528\u6765\u5b9a\u4e49\u7a97\u53e3\u7684\u5927\u5c0f\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"groupBy()"),"\u7528\u6765\u5b9a\u4e49\u7edf\u8ba1\u5206\u6790\u7684\u4e3bkey\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count")," \u5728\u7a97\u53e3\u5185\u8ba1\u6570"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"min")," \u83b7\u53d6\u7a97\u53e3\u5185\u7edf\u8ba1\u503c\u7684\u6700\u5c0f\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max")," \u83b7\u53d6\u7a97\u53e3\u5185\u7edf\u8ba1\u503c\u5f97\u6700\u5927\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"avg")," \u83b7\u53d6\u7a97\u53e3\u5185\u7edf\u8ba1\u503c\u7684\u5e73\u5747\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sum")," \u83b7\u53d6\u7a97\u53e3\u5185\u7edf\u8ba1\u503c\u7684\u52a0\u548c\u503c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reduce")," \u5728\u7a97\u53e3\u5185\u8fdb\u884c\u81ea\u5b9a\u4e49\u7684\u6c47\u603b\u8fd0\u7b97"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"join")," \u6839\u636e\u6761\u4ef6\u5c06\u4fe9\u4e2a\u6d41\u8fdb\u884c\u5185\u5173\u8054"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"leftJoin")," \u6839\u636e\u6761\u4ef6\u5c06\u4fe9\u4e2a\u6d41\u7684\u6570\u636e\u8fdb\u884c\u5de6\u5173\u8054"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"union")," \u5c06\u4fe9\u4e2a\u6d41\u8fdb\u884c\u5408\u5e76"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"split")," \u5c06\u4e00\u4e2a\u6570\u636e\u6d41\u6309\u7167\u6807\u7b7e\u8fdb\u884c\u62c6\u5206\uff0c\u5206\u4e3a\u4e0d\u540c\u7684\u6570\u636e\u6d41\u4f9b\u4e0b\u6e38\u8fdb\u884c\u5206\u6790\u8ba1\u7b97"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"setLocalStorageOnly")," \u72b6\u6001\u662f\u5426\u4f7f\u7528\u672c\u5730\u5b58\u50a8"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"with")," with\u7b97\u5b50\u7528\u6765\u6307\u5b9a\u8ba1\u7b97\u8fc7\u7a0b\u4e2d\u7684\u76f8\u5173\u7b56\u7565")),(0,r.kt)("h2",{id:"chainpipeline"},"ChainPipeline"),(0,r.kt)("p",null,"\u6570\u636e\u6d41\u8f6c\u7ba1\u9053\uff0cChainPipeline\u4ece\u4e00\u4e2a\u76ee\u6807\u6e90\u8bfb\u53d6\u6570\u636e\uff0c\u6570\u636e\u4e00\u6b21\u6d41\u8fc7\u591a\u4e2astage\uff0c\u7ec4\u6210\u4e00\u4e2a\u6570\u636e\u5904\u7406\u94fe\u6761\u3002ChainPipeline\u95f4\u53ef\u76f8\u4e92\u7ec4\u5408\u6210\u5904\u7406\u62d3\u6251\uff0c\u591a\u4e2aChainPipeline\u7ec4\u6210\u4e00\u4e2a\u6d41\u5904\u7406\u4efb\u52a1\uff0c\n\u4f8b\u5982\u4e00\u4e2a\u6d41\u5904\u7406\u4efb\u52a1\u4e2d\uff0c\u4ece\u4e24\u4e2atopic\u4e2d\u8bfb\u51fa\u6570\u636e\u7ecf\u8fc7\u5904\u7406\u540e\u5199\u5165\u5230\u7b2c\u4e09\u4e2atopic\uff0c\u867d\u7136\u53ea\u6709\u4e00\u4e2a\u6d41\u5904\u7406\u4efb\u52a1\uff0c\u4f46\u662f\u5374\u7531\u4e24\u4e2aChainPipeline\u7ec4\u6210\uff0c\u4e00\u4e2aChainPipeline\u5305\u542b\u4e00\u4e2asource\u5b9e\u4f8b\u548c\u82e5\u5e72\u5904\u7406\u6570\u636e\u7684stage\u7ec4\u6210\u3002"),(0,r.kt)("h2",{id:"stage"},"stage"),(0,r.kt)("p",null,"\u6570\u636e\u5177\u4f53\u8fd0\u7b97\u8282\u70b9\uff0c\u6240\u6709\u7684\u5176\u4ed6\u8fd0\u7b97\uff0c\u5305\u62ecmap,filter,script\uff0cwindow\u90fd\u4f1a\u5148\u6784\u5efa\u51fastage\uff0c\u7136\u540e\u4ee5stage\u7684\u8eab\u4efd\u8fdb\u5165ChainPipeline\u3002\u6d41\u8ba1\u7b97\u65f6\uff0c\u6df1\u5ea6\u4f18\u5148\u904d\u5386ChainPipeline\u4e2d\u7684\nstage\uff0cstage\u4e2d\u5c5e\u6027nextStageLabel\u6307\u5411\u4e0b\u6e38\u8ba1\u7b97\u8282\u70b9\u3002\n",(0,r.kt)("img",{alt:"img_2.png",src:a(61714).Z,width:"1741",height:"629"})),(0,r.kt)("h2",{id:"shuffle"},"shuffle"),(0,r.kt)("p",null,"\u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u5206\u7ec4\u7edf\u8ba1\u65f6\uff0c\u9700\u8981\u9488\u5bf9\u67d0\u4e2akey\u5c06\u6570\u636e\u5206\u5f00\uff0c\u7136\u540e\u5bf9\u76f8\u540c\u7684key\u8fdb\u884c\u7edf\u8ba1\u3002\u6d41\u8ba1\u7b97\u4e2d\uff0c\u5f80\u5f80\u5c06\u542b\u6709\u76f8\u540ckey\u7684\u6570\u636e\u53d1\u9001\u5230\u540c\u4e00\u8282\u70b9\u5904\u7406\u3002\u5728RocketMQ Streams\u4e2d\uff0c\u501f\u52a9RocketMQ\u6765\u5b9e\u73b0\u8fd9\u4e00\u8fc7\u7a0b\u80fd\u964d\u4f4e\u590d\u6742\u5ea6\uff0c\n\u4e0d\u9700\u8981\u52a8\u6001\u53d1\u73b0\u67d0\u4e2akey\u5e94\u8be5\u88ab\u53d1\u9001\u5230\u4e0b\u6709\u54ea\u4e2a\u5b9e\u4f8b\u8282\u70b9\u4e0a\u3002\n\u5c06\u9700\u8981\u5206\u7ec4\u7684\u6570\u636e\uff0c\u4f7f\u7528key\u4f5c\u8def\u7531\u5206\u7ec4\uff0c\u53d1\u9001\u56deRocketMQ\u7684topic\u4e2d\uff0c\u542b\u6709\u76f8\u540ckey\u7684\u6570\u636e\u90fd\u5728\u4e00\u4e2a\u5206\u533a\uff08messageQueue\uff09\u4e2d\uff0c\u8fd9\u4e2a\u8fc7\u7a0b\u6210\u4e3ashuffle\u3002\n\u4e0b\u6e38\u6d88\u8d39\u8005\u8282\u70b9\uff0c\u6309\u7167\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f\u6d88\u8d39\u6570\u636e\uff0c\u4e00\u4e2a\u6d88\u8d39\u8005\u80fd\u6d88\u8d39\u5230\u542b\u6709\u76f8\u540ckey\u7684\u6240\u6709\u6570\u636e\uff0c\u56e0\u6b64\u624d\u80fd\u505a\u51fa\u6b63\u786e\u7684\u8ba1\u7b97\u3002"),(0,r.kt)("h2",{id:"\u9886\u57df\u6a21\u578b"},"\u9886\u57df\u6a21\u578b"),(0,r.kt)("p",null,"\u9886\u57df\u6a21\u578b\u4e3a\u6570\u636e\u5728\u6d41\u5904\u7406\u7b97\u5b50\u4e4b\u95f4\u4f20\u9012\u7684\u6570\u636e\u6a21\u578b\u3002RocketMQ Streams\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684Message\u5bf9\u8c61\u4f5c\u4e3a\u7b97\u5b50\u95f4\u4fe1\u606f\u7684\u627f\u8f7d\uff0c\u5b83\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class Message {\n    private JSONObject message;\n\n    private boolean isJsonMessage = true;\n\n    protected ISystemMessage systemMessage;\n\n    protected MessageHeader header = new MessageHeader();\n    \n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"message\uff1a\u6570\u636e\u5185\u5bb9\uff0c\u5982\u679c\u539f\u59cb\u6570\u636e\u662fjson\u5f62\u5f0f\uff0c\u5219\u89e3\u6790\u6210JSONObject\uff0c\u5982\u679c\u539f\u59cb\u5bf9\u8c61\u4e0d\u662f\uff0c\u5219\u89e3\u6790\u6210\u81ea\u5b9a\u4e49\u7684\u5bf9\u8c61UserDefinedMessage\uff0c\u4ed6\u7ee7\u627f\u81eaJSONObject\uff1b"),(0,r.kt)("li",{parentName:"ul"},"systemMessage\uff1a\u8868\u5f81\u6570\u636e\u662f\u6570\u636e\u6d88\u606f\u8fd8\u662f\u7cfb\u7edf\u6d88\u606f\uff0c\u7cfb\u7edf\u6d88\u606f\u662f\u6307\u5728\u7279\u5b9a\u4e8b\u4ef6\u53d1\u751f\u65f6\uff0c\u5c06\u4ea7\u751f\u7279\u5b9a\u7c7b\u578b\u7684\u7cfb\u7edf\u6d88\u606f\uff0c\u4e0b\u6e38\u7ec4\u4ef6\u63a5\u6536\u5230\u5c06\u505a\u51fa\u7279\u5b9a\u5904\u7406\u3002\u76ee\u524d\u6709\u4e0b\u5217\u51e0\u79cd\u7cfb\u7edf\u6d88\u606f\uff1a\u53d1\u73b0\u6570\u636e\u6765\u81ea\u65b0\u5206\u533a\u4ea7\u751f\u7684\u65b0\u589e\u5206\u533a\u7cfb\u7edf\u6d88\u606f\u3001\u4e0d\u518d\u6d88\u8d39\u67d0\u4e2a\u5206\u533a\u6570\u636e\u7684\u5206\u533a\u5f02\u5e38\u7cfb\u7edf\u6d88\u606f\u3001\u6570\u636e\u6d88\u8d39\u4f4d\u70b9\u63d0\u4ea4\u65f6\u4ea7\u751f\u7684checkpoint\u7cfb\u7edf\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"header\uff1a\u6570\u636e\u5728\u5904\u7406\u8fc7\u7a0b\u4e2d\u4fdd\u7559\u7684\u989d\u5916\u4fe1\u606f\uff0c\u7528\u4e8e\u8f85\u52a9\u540e\u7eed\u8ba1\u7b97\u3002\u4ed6\u6709\u4ee5\u4e0b\u5c5e\u6027\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"JOIN_LEFT"),(0,r.kt)("td",{parentName:"tr",align:null},"join\u65f6\u6807\u8bb0\u5de6\u53f3\u7a97\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"JOIN_RIGHT"),(0,r.kt)("td",{parentName:"tr",align:null},"join\u65f6\u6807\u8bb0\u5de6\u53f3\u7a97\u53e3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ISource"),(0,r.kt)("td",{parentName:"tr",align:null},"source"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u6765\u81ea\u7684source\u5b9e\u4f8b")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"routeLabels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u6807\u7b7e\uff0c\u6807\u8bb0\u4f1a\u88ab\u54ea\u4e9b\u4e0b\u6e38\u8282\u70b9\u5904\u7406")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"filterLabels"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8def\u7531\u6807\u8bb0\uff0c\u6807\u8bb0\u4e0d\u4f1a\u88ab\u54ea\u4e9b\u4e0b\u6e38\u8282\u70b9\u5904\u7406")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MessageOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"messageOffset"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606foffset")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"needFlush"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u9700\u8981\u7acb\u5373\u5c06\u6d88\u606f\u4f20\u9012\u5230\u4e0b\u6e38")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"isSystemMessage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u662f\u7cfb\u7edf\u6d88\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"msgRouteFromLable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6765\u81ea\u54ea\u4e2alable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"originTable"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u606f\u6765\u81ea\u90a3\u5f20sql\u6e90\u8868")))))}u.isMDXComponent=!0},61714:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/stage-af66e5930540e21924d7f19008033f3a.png"}}]);