"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(r),k=a,d=m["".concat(c,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(d,l(l({ref:t},p),{},{components:r})):n.createElement(d,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},48159:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},l="JVM/OS\u914d\u7f6e",i={unversionedId:"bestPractice/19JVMOS",id:"version-5.0/bestPractice/19JVMOS",title:"JVM/OS\u914d\u7f6e",description:"\u672c\u5c0f\u8282\u4e3b\u8981\u4ecb\u7ecd\u7cfb\u7edf\uff08JVM/OS\uff09\u76f8\u5173\u7684\u914d\u7f6e\u3002",source:"@site/versioned_docs/version-5.0/06-bestPractice/19JVMOS.md",sourceDirName:"06-bestPractice",slug:"/bestPractice/19JVMOS",permalink:"/zh/docs/bestPractice/19JVMOS",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/06-bestPractice/19JVMOS.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"\u6743\u9650\u63a7\u5236",permalink:"/zh/docs/bestPractice/18access"},next:{title:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",permalink:"/zh/docs/bestPractice/21subscribe"}},c={},s=[{value:"1 JVM\u9009\u9879",id:"1-jvm\u9009\u9879",level:2},{value:"2 Linux\u5185\u6838\u53c2\u6570",id:"2-linux\u5185\u6838\u53c2\u6570",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jvmos\u914d\u7f6e"},"JVM/OS\u914d\u7f6e"),(0,a.kt)("p",null,"\u672c\u5c0f\u8282\u4e3b\u8981\u4ecb\u7ecd\u7cfb\u7edf\uff08JVM/OS\uff09\u76f8\u5173\u7684\u914d\u7f6e\u3002"),(0,a.kt)("h2",{id:"1-jvm\u9009\u9879"},"1 JVM\u9009\u9879"),(0,a.kt)("p",null,"\u63a8\u8350\u4f7f\u7528\u6700\u65b0\u53d1\u5e03\u7684 JDK \u7248\u672c\u3002\u901a\u8fc7\u8bbe\u7f6e\u76f8\u540c\u7684 Xms \u548c Xmx \u503c\u6765\u9632\u6b62 JVM \u8c03\u6574\u5806\u5927\u5c0f\u4ee5\u83b7\u5f97\u66f4\u597d\u7684\u6027\u80fd\u3002\u751f\u4ea7\u73af\u5883 JVM \u914d\u7f6e\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-server -Xms8g -Xmx8g -Xmn4g \n")),(0,a.kt)("p",null,"\u5f53 JVM \u662f\u9ed8\u8ba4 8 \u5b57\u8282\u5bf9\u9f50\uff0c\u5efa\u8bae\u914d\u7f6e\u6700\u5927\u5806\u5185\u5b58\u4e0d\u8981\u8d85\u8fc7 32 G\uff0c\u5426\u5219\u4f1a\u5f71\u54cd JVM \u7684\u6307\u9488\u538b\u7f29\u6280\u672f\uff0c\u6d6a\u8d39\u5185\u5b58\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u5173\u5fc3 RocketMQ Broker \u7684\u542f\u52a8\u65f6\u95f4\uff0c\u8fd8\u6709\u4e00\u79cd\u66f4\u597d\u7684\u9009\u62e9\uff0c\u5c31\u662f\u901a\u8fc7 \u201c\u9884\u89e6\u6478\u201d Java \u5806\u4ee5\u786e\u4fdd\u5728JVM\u521d\u59cb\u5316\u671f\u95f4\u6bcf\u4e2a\u9875\u9762\u90fd\u5c06\u88ab\u5206\u914d\u3002\u90a3\u4e9b\u4e0d\u5173\u5fc3\u542f\u52a8\u65f6\u95f4\u7684\u4eba\u53ef\u4ee5\u542f\u7528\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+AlwaysPreTouch  \n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\u751f\u4ea7\u73af\u5883\u96c6\u7fa4 Broker \u4e00\u822c\u5efa\u8bae\u914d\u7f6e\u8db3\u591f\u7684\u5185\u5b58\uff0c\u907f\u514d\u4f7f\u7528\u5c0f\u89c4\u683c\u5185\u5b58\u673a\u5668\u90e8\u7f72\u3002\u56e0\u4e3aBroker\u662f\u91cd\u5ea6\u4f9d\u8d56\u5185\u5b58PageCache\u505a\u6027\u80fd\u4f18\u5316\u7684\uff0c\u5185\u5b58\u8fc7\u5c0f\u53ef\u80fd\u9020\u6210\u6027\u80fd\u4e0d\u7a33\u5b9a\u3002")),(0,a.kt)("p",null,"\u7981\u7528\u504f\u7f6e\u9501\u5b9a\u53ef\u80fd\u4f1a\u51cf\u5c11 JVM \u6682\u505c\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:-UseBiasedLocking   \n")),(0,a.kt)("p",null,"\u5783\u573e\u56de\u6536\uff0c\u5efa\u8bae\u4f7f\u7528 JDK 1.8 \u81ea\u5e26\u7684 G1 \u6536\u96c6\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+UseG1GC \n-XX:G1HeapRegionSize=16m   \n-XX:G1ReservePercent=25 \n-XX:InitiatingHeapOccupancyPercent=30\n")),(0,a.kt)("p",null,"\u8fd9\u4e9b GC \u9009\u9879\u770b\u8d77\u6765\u6709\u70b9\u6fc0\u8fdb\uff0c\u4f46\u4e8b\u5b9e\u8bc1\u660e\u5b83\u5728\u6211\u4eec\u7684\u751f\u4ea7\u73af\u5883\u4e2d\u5177\u6709\u826f\u597d\u7684\u6027\u80fd\u3002"),(0,a.kt)("p",null,"\u53e6\u5916\u4e0d\u8981\u628a -XX:MaxGCPauseMillis \u7684\u503c\u8bbe\u7f6e\u592a\u5c0f\uff0c\u5426\u5219 JVM \u5c06\u4f7f\u7528\u4e00\u4e2a\u5c0f\u7684\u5e74\u8f7b\u4ee3\u6765\u5b9e\u73b0\u8fd9\u4e2a\u76ee\u6807\uff0c\u8fd9\u5c06\u5bfc\u81f4\u975e\u5e38\u9891\u7e41\u7684 minor GC\uff0c\u6240\u4ee5\u5efa\u8bae\u4f7f\u7528 rolling GC \u65e5\u5fd7\u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-XX:+UseGCLogFileRotation   \n-XX:NumberOfGCLogFiles=5 \n-XX:GCLogFileSize=30m\n")),(0,a.kt)("p",null,"\u5982\u679c\u5199\u5165 GC \u6587\u4ef6\u4f1a\u589e\u52a0\u4ee3\u7406\u7684\u5ef6\u8fdf\uff0c\u53ef\u4ee5\u8003\u8651\u5c06 GC \u65e5\u5fd7\u6587\u4ef6\u91cd\u5b9a\u5411\u5230\u5185\u5b58\u6587\u4ef6\u7cfb\u7edf\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"-Xloggc:/dev/shm/mq_gc_%p.log123   \n")),(0,a.kt)("h2",{id:"2-linux\u5185\u6838\u53c2\u6570"},"2 Linux\u5185\u6838\u53c2\u6570"),(0,a.kt)("p",null," os.sh \u811a\u672c\u5728 bin \u6587\u4ef6\u5939\u4e2d\u5217\u51fa\u4e86\u8bb8\u591a\u5185\u6838\u53c2\u6570\uff0c\u53ef\u4ee5\u8fdb\u884c\u5fae\u5c0f\u7684\u66f4\u6539\u7136\u540e\u7528\u4e8e\u751f\u4ea7\u7528\u9014\u3002\u4e0b\u9762\u7684\u53c2\u6570\u9700\u8981\u6ce8\u610f\uff0c\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 /proc/sys/vm/*\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/Documentation/sysctl/vm.txt"},"\u6587\u6863")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.extra_free_kbytes"),"  \u544a\u8bc9 VM \u5728\u540e\u53f0\u56de\u6536\uff08kswapd\uff09\u542f\u52a8\u7684\u9608\u503c\u4e0e\u76f4\u63a5\u56de\u6536\uff08\u901a\u8fc7\u5206\u914d\u8fdb\u7a0b\uff09\u7684\u9608\u503c\u4e4b\u95f4\u4fdd\u7559\u989d\u5916\u7684\u53ef\u7528\u5185\u5b58\u3002RocketMQ \u4f7f\u7528\u6b64\u53c2\u6570\u6765\u907f\u514d\u5185\u5b58\u5206\u914d\u4e2d\u7684\u957f\u5ef6\u8fdf\u3002\uff08\u4e0e\u5177\u4f53\u5185\u6838\u7248\u672c\u76f8\u5173\uff09"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.min_free_kbytes"),"  \u5982\u679c\u5c06\u5176\u8bbe\u7f6e\u4e3a\u4f4e\u4e8e 1024 KB\uff0c\u5c06\u4f1a\u5de7\u5999\u7684\u5c06\u7cfb\u7edf\u7834\u574f\uff0c\u5e76\u4e14\u7cfb\u7edf\u5728\u9ad8\u8d1f\u8f7d\u4e0b\u5bb9\u6613\u51fa\u73b0\u6b7b\u9501\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.max_map_count"),"  \u9650\u5236\u4e00\u4e2a\u8fdb\u7a0b\u53ef\u80fd\u5177\u6709\u7684\u6700\u5927\u5185\u5b58\u6620\u5c04\u533a\u57df\u6570\u3002RocketMQ \u5c06\u4f7f\u7528 MMAP \u52a0\u8f7d CommitLog \u548c ConsumeQueue\uff0c\u56e0\u6b64\u5efa\u8bae\u5c06\u4e3a\u6b64\u53c2\u6570\u8bbe\u7f6e\u8f83\u5927\u7684\u503c\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"vm.swappiness"),"  \u5b9a\u4e49\u5185\u6838\u4ea4\u6362\u5185\u5b58\u9875\u9762\u7684\u79ef\u6781\u7a0b\u5ea6\u3002\u8f83\u9ad8\u7684\u503c\u4f1a\u589e\u52a0\u653b\u51fb\u6027\uff0c\u8f83\u4f4e\u7684\u503c\u4f1a\u51cf\u5c11\u4ea4\u6362\u91cf\u3002\u5efa\u8bae\u5c06\u503c\u8bbe\u7f6e\u4e3a 10 \u6765\u907f\u514d\u4ea4\u6362\u5ef6\u8fdf\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"File descriptor limits"),"  RocketMQ \u9700\u8981\u4e3a\u6587\u4ef6\uff08 CommitLog \u548c ConsumeQueue \uff09\u548c\u7f51\u7edc\u8fde\u63a5\u6253\u5f00\u6587\u4ef6\u63cf\u8ff0\u7b26\u3002\u6211\u4eec\u5efa\u8bae\u8bbe\u7f6e\u6587\u4ef6\u63cf\u8ff0\u7b26\u7684\u503c\u4e3a 655350\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Performance_Tuning_Guide/ch06s04s02.html"},"Disk scheduler"),"  RocketMQ\u5efa\u8bae\u4f7f\u7528I/O\u622a\u6b62\u65f6\u95f4\u8c03\u5ea6\u5668\uff0c\u5b83\u8bd5\u56fe\u4e3a\u8bf7\u6c42\u63d0\u4f9b\u6709\u4fdd\u8bc1\u7684\u5ef6\u8fdf\u3002")))}u.isMDXComponent=!0}}]);