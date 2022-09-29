"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[4385],{3905:(e,s,t)=>{t.d(s,{Zo:()=>p,kt:()=>d});var n=t(67294);function r(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function a(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?a(Object(t),!0).forEach((function(s){r(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function i(e,s){if(null==e)return{};var t,n,r=function(e,s){if(null==e)return{};var t,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||(r[t]=e[t]);return r}(e,s);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=n.createContext({}),u=function(e){var s=n.useContext(c),t=s;return e&&(t="function"==typeof e?e(s):o(o({},s),e)),t},p=function(e){var s=u(e.components);return n.createElement(c.Provider,{value:s},e.children)},l={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},m=n.forwardRef((function(e,s){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,g=m["".concat(c,".").concat(d)]||m[d]||l[d]||a;return t?n.createElement(g,o(o({ref:s},p),{},{components:t})):n.createElement(g,o({ref:s},p))}));function d(e,s){var t=arguments,r=s&&s.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var i={};for(var c in s)hasOwnProperty.call(s,c)&&(i[c]=s[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<a;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},30827:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const a={},o="Concepts",i={unversionedId:"\u57fa\u7840\u4ecb\u7ecd/02concepts",id:"version-5.0/\u57fa\u7840\u4ecb\u7ecd/02concepts",title:"Concepts",description:"This section describes the core concepts of Apache RocketMQ.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/01-\u57fa\u7840\u4ecb\u7ecd/02concepts.md",sourceDirName:"01-\u57fa\u7840\u4ecb\u7ecd",slug:"/\u57fa\u7840\u4ecb\u7ecd/02concepts",permalink:"/en/docs/\u57fa\u7840\u4ecb\u7ecd/02concepts",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/01-\u57fa\u7840\u4ecb\u7ecd/02concepts.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"Why choose RocketMQ",permalink:"/en/docs/"},next:{title:"Parameter constraints and suggestions",permalink:"/en/docs/\u57fa\u7840\u4ecb\u7ecd/03limits"}},c={},u=[{value:"Topic",id:"topic",level:2},{value:"MessageType",id:"messagetype",level:2},{value:"MessageQueue",id:"messagequeue",level:2},{value:"Message",id:"message",level:2},{value:"MessageView",id:"messageview",level:2},{value:"MessageTag",id:"messagetag",level:2},{value:"MessageOffset",id:"messageoffset",level:2},{value:"ConsumerOffset",id:"consumeroffset",level:2},{value:"MessageKey",id:"messagekey",level:2},{value:"Producer",id:"producer",level:2},{value:"TransactionChecker",id:"transactionchecker",level:2},{value:"ConsumerGroup",id:"consumergroup",level:2},{value:"Consumer",id:"consumer",level:2},{value:"Subscription",id:"subscription",level:2}],p={toc:u};function l(e){let{components:s,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:s,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"concepts"},"Concepts"),(0,r.kt)("p",null,"This section describes the core concepts of Apache RocketMQ."),(0,r.kt)("h2",{id:"topic"},"Topic"),(0,r.kt)("p",null,"A topic is a top-level container that is used in Apache RocketMQ to transfer and store messages that belong to the same business logic.Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/02topic"},"Topic"),"."),(0,r.kt)("h2",{id:"messagetype"},"MessageType"),(0,r.kt)("p",null,"Categories defined by message transfer characteristics for type management and security verification. Apache RocketMQ support NORMAL,FIFO,TRANSACTION and DELAY message type."),(0,r.kt)("h2",{id:"messagequeue"},"MessageQueue"),(0,r.kt)("p",null,"MessageQueue is a container that is used to store and transmit messages in Apache RocketMQ. MessageQueue is the smallest unit of storage for Apache RocketMQ messages. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/03messagequeue"},"MessageQueue"),"."),(0,r.kt)("h2",{id:"message"},"Message"),(0,r.kt)("p",null,"A message is the smallest unit of data transmission in Apache RocketMQ. A producer encapsulates the load and extended attributes of business data into messages and sends the messages to a Apache RocketMQ broker. Then, the broker delivers the messages to the consumer based on the relevant semantics. Learn more",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/04message"},"Message"),"."),(0,r.kt)("h2",{id:"messageview"},"MessageView"),(0,r.kt)("p",null,"MessageView is read-only interface to message from a development perspective. The message view allows you to read multiple properties and payload information inside a message, but you cannot make any changes to the message itself."),(0,r.kt)("h2",{id:"messagetag"},"MessageTag"),(0,r.kt)("p",null,"MessageTag is a fine-grained message classification property that allows message to be subdivided below the topic level. Consumers implement message filtering by subscribing to specific tags. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/07messagefilter"},"MessageFilter"),"."),(0,r.kt)("h2",{id:"messageoffset"},"MessageOffset"),(0,r.kt)("p",null,"Messages are stored in the queue in order of precedence, each message has a unique coordinate of type Long in the queue, which is defined as the message site. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/09consumerprogress"},"Consumer progress management"),"\u3002"),(0,r.kt)("h2",{id:"consumeroffset"},"ConsumerOffset"),(0,r.kt)("p",null,"A message is not removed from the queue immediately after it has been consumed by a consumer, Apache RocketMQ will record the last consumed message based on each consumer group. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/09consumerprogress"},"Consumer progress management"),"."),(0,r.kt)("h2",{id:"messagekey"},"MessageKey"),(0,r.kt)("p",null,"MessageKey is The message-oriented index property. By setting the message index, you can quickly find the corresponding message content."),(0,r.kt)("h2",{id:"producer"},"Producer"),(0,r.kt)("p",null,"A producer in Apache RocketMQ is a functional messaging entity that creates messages and sends them to the server. A producer is typically integrated on the business system and serves to encapsulate data as messages in Apache RocketMQ and send the messages to the server. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/04producer"},"Producer"),"\u3002"),(0,r.kt)("h2",{id:"transactionchecker"},"TransactionChecker"),(0,r.kt)("p",null,"Apache RocketMQ uses a transaction messaging mechanism that requires a producer to implement a transaction checker to ensure eventual consistency of transactions. Learn more",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E5%8A%9F%E8%83%BD%E8%A1%8C%E4%B8%BA/04transactionmessage"},"Transaction Message"),"\u3002"),(0,r.kt)("h2",{id:"consumergroup"},"ConsumerGroup"),(0,r.kt)("p",null,"A consumer group is a load balancing group that contains consumers that use the same consumption behaviors in Apache RocketMQ. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/07consumergroup"},"ConsumerGroup"),"\u3002"),(0,r.kt)("h2",{id:"consumer"},"Consumer"),(0,r.kt)("p",null,"A consumer is an entity that receives and processes messages in Apache RocketMQ. Consumers are usually integrated in business systems. They obtain messages from Apache RocketMQ brokers and convert the messages into information that can be perceived and processed by business logic. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/08consumer"},"Consumer"),"\u3002"),(0,r.kt)("h2",{id:"subscription"},"Subscription"),(0,r.kt)("p",null,"A subscription is the rule and status settings for consumers to obtain and process messages in Apache RocketMQ. Subscriptions are dynamically registered by consumer groups with brokers. Messages are then matched and consumed based on the filter rules defined by subscriptions. Learn more ",(0,r.kt)("a",{parentName:"p",href:"/en/docs/%E9%A2%86%E5%9F%9F%E6%A8%A1%E5%9E%8B/09subscription"},"Subscription"),"\u3002"))}l.isMDXComponent=!0}}]);