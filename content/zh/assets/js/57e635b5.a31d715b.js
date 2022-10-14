"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5834],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},m=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=i(n),k=r,g=c["".concat(o,".").concat(k)]||c[k]||p[k]||l;return n?a.createElement(g,u(u({ref:t},m),{},{components:n})):a.createElement(g,u({ref:t},m))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,u=new Array(l);u[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,u[1]=s;for(var i=2;i<l;i++)u[i]=n[i];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42694:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const l={},u="Push\u6d88\u8d39",s={unversionedId:"consumer/12push",id:"consumer/12push",title:"Push\u6d88\u8d39",description:"RocketMQ Push\u6d88\u8d39\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b",source:"@site/docs/03-consumer/12push.md",sourceDirName:"03-consumer",slug:"/consumer/12push",permalink:"/zh/docs/4.x/consumer/12push",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/03-consumer/12push.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"\u57fa\u7840\u6982\u5ff5",permalink:"/zh/docs/4.x/consumer/11concept2"},next:{title:"Pull\u6d88\u8d39",permalink:"/zh/docs/4.x/consumer/13pull"}},o={},i=[{value:"\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f",id:"\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f",level:2},{value:"\u5e76\u53d1\u6d88\u8d39\u548c\u987a\u5e8f\u6d88\u8d39",id:"\u5e76\u53d1\u6d88\u8d39\u548c\u987a\u5e8f\u6d88\u8d39",level:2},{value:"\u6d88\u606f\u8fc7\u6ee4",id:"\u6d88\u606f\u8fc7\u6ee4",level:2},{value:"Tag\u8fc7\u6ee4",id:"tag\u8fc7\u6ee4",level:3},{value:"SQL92\u8fc7\u6ee4",id:"sql92\u8fc7\u6ee4",level:3},{value:"\u6d88\u606f\u91cd\u8bd5\u548c\u6b7b\u4fe1\u961f\u5217",id:"\u6d88\u606f\u91cd\u8bd5\u548c\u6b7b\u4fe1\u961f\u5217",level:2},{value:"\u6d88\u606f\u91cd\u8bd5",id:"\u6d88\u606f\u91cd\u8bd5",level:3},{value:"\u6b7b\u4fe1\u961f\u5217",id:"\u6b7b\u4fe1\u961f\u5217",level:3}],m={toc:i};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"push\u6d88\u8d39"},"Push\u6d88\u8d39"),(0,r.kt)("p",null,"RocketMQ Push\u6d88\u8d39\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class Consumer {\n  public static void main(String[] args) throws InterruptedException, MQClientException {\n    // \u521d\u59cb\u5316consumer\uff0c\u5e76\u8bbe\u7f6econsumer group name\n    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("please_rename_unique_group_name");\n   \n    // \u8bbe\u7f6eNameServer\u5730\u5740 \n    consumer.setNamesrvAddr("localhost:9876");\n    //\u8ba2\u9605\u4e00\u4e2a\u6216\u591a\u4e2atopic\uff0c\u5e76\u6307\u5b9atag\u8fc7\u6ee4\u6761\u4ef6\uff0c\u8fd9\u91cc\u6307\u5b9a*\u8868\u793a\u63a5\u6536\u6240\u6709tag\u7684\u6d88\u606f\n    consumer.subscribe("TopicTest", "*");\n    //\u6ce8\u518c\u56de\u8c03\u63a5\u53e3\u6765\u5904\u7406\u4eceBroker\u4e2d\u6536\u5230\u7684\u6d88\u606f\n    consumer.registerMessageListener(new MessageListenerConcurrently() {\n      @Override\n      public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {\n        System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n        // \u8fd4\u56de\u6d88\u606f\u6d88\u8d39\u72b6\u6001\uff0cConsumeConcurrentlyStatus.CONSUME_SUCCESS\u4e3a\u6d88\u8d39\u6210\u529f\n        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n      }\n    });\n    // \u542f\u52a8Consumer\n    consumer.start();\n    System.out.printf("Consumer Started.%n");\n  }\n}\n')),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u521d\u59cb\u5316\u6d88\u8d39\u8005\uff0c\u521d\u59cb\u5316\u6d88\u8d39\u8005\u65f6\uff0c\u5fc5\u987b\u586b\u5199ConsumerGroupName\uff0c\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u7684ConsumerGroupName\u662f\u76f8\u540c\u7684\uff0c\u8fd9\u662f\u5224\u65ad\u6d88\u8d39\u8005\u662f\u5426\u5c5e\u4e8e\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u7684\u91cd\u8981\u5c5e\u6027\u3002\u7136\u540e\u662f\u8bbe\u7f6eNameServer\u5730\u5740\uff0c\u8fd9\u91cc\u4e0eProducer\u4e00\u6837\u4e0d\u518d\u4ecb\u7ecd\u3002\u7136\u540e\u662f\u8c03\u7528subscribe\u65b9\u6cd5\u8ba2\u9605Topic\uff0csubscribe\u65b9\u6cd5\u9700\u8981\u6307\u5b9a\u9700\u8981\u8ba2\u9605\u7684Topic\u540d\uff0c\u4e5f\u53ef\u4ee5\u589e\u52a0\u6d88\u606f\u8fc7\u6ee4\u7684\u6761\u4ef6\uff0c\u6bd4\u5982TagA\u7b49\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u6307\u5b9a*\u8868\u793a\u63a5\u6536\u6240\u6709tag\u7684\u6d88\u606f\u3002\u9664\u4e86\u8ba2\u9605\u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u6ce8\u518c\u56de\u8c03\u63a5\u53e3\u7f16\u5199\u6d88\u8d39\u903b\u8f91\u6765\u5904\u7406\u4eceBroker\u4e2d\u6536\u5230\u7684\u6d88\u606f\uff0c\u8c03\u7528registerMessageListener\u65b9\u6cd5\uff0c\u9700\u8981\u4f20\u5165MessageListener\u7684\u5b9e\u73b0\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e2d\u662f\u5e76\u53d1\u6d88\u8d39\uff0c\u56e0\u6b64\u662fMessageListenerConcurrently\u7684\u5b9e\u73b0\uff0c\u5176\u63a5\u53e3\u5982\u4e0b"),(0,r.kt)("admonition",{title:"MessageListenerConcurrently \u63a5\u53e3",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * A MessageListenerConcurrently object is used to receive asynchronously delivered messages concurrently\n */\npublic interface MessageListenerConcurrently extends MessageListener {\n    /**\n     * It is not recommend to throw exception,rather than returning ConsumeConcurrentlyStatus.RECONSUME_LATER if\n     * consumption failure\n     *\n     * @param msgs msgs.size() >= 1<br> DefaultMQPushConsumer.consumeMessageBatchMaxSize=1,you can modify here\n     * @return The consume status\n     */\n    ConsumeConcurrentlyStatus consumeMessage(final List<MessageExt> msgs,\n        final ConsumeConcurrentlyContext context);\n}\n"))),(0,r.kt)("p",null,"\u5176\u4e2d\uff0cmsgs\u662f\u4eceBroker\u7aef\u83b7\u53d6\u7684\u9700\u8981\u88ab\u6d88\u8d39\u6d88\u606f\u5217\u8868\uff0c\u7528\u6237\u5b9e\u73b0\u8be5\u63a5\u53e3\uff0c\u5e76\u628a\u81ea\u5df1\u5bf9\u6d88\u606f\u7684\u6d88\u8d39\u903b\u8f91\u5199\u5728consumeMessage\u65b9\u6cd5\u4e2d\uff0c\u7136\u540e\u8fd4\u56de\u6d88\u8d39\u72b6\u6001\uff0cConsumeConcurrentlyStatus.CONSUME_SUCCESS\u8868\u793a\u6d88\u8d39\u6210\u529f\uff0c\u6216\u8005\u8868\u793aRECONSUME_LATER\u8868\u793a\u6d88\u8d39\u5931\u8d25\uff0c\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u91cd\u65b0\u6d88\u8d39\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u770b\u5230RocketMQ\u63d0\u4f9b\u7684\u6d88\u8d39\u8005API\u5374\u975e\u5e38\u7b80\u5355\uff0c\u7528\u6237\u5e76\u4e0d\u9700\u8981\u5173\u6ce8\u91cd\u5e73\u8861\u6216\u8005\u62c9\u53d6\u7684\u903b\u8f91\uff0c\u53ea\u9700\u8981\u5199\u597d\u81ea\u5df1\u7684\u6d88\u8d39\u903b\u8f91\u5373\u53ef\u3002"),(0,r.kt)("h2",{id:"\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f"},"\u96c6\u7fa4\u6a21\u5f0f\u548c\u5e7f\u64ad\u6a21\u5f0f"),(0,r.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u6765\u8bbe\u7f6e\u91c7\u7528\u96c6\u7fa4\u6a21\u5f0f\uff0cRocketMQ Push Consumer\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u6a21\u5f0f\uff0c\u540c\u4e00\u4e2a\u6d88\u8d39\u7ec4\u5185\u7684\u6d88\u8d39\u8005\u5206\u62c5\u6d88\u8d39\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMessageModel(MessageModel.CLUSTERING);\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0b\u4ee3\u7801\u6765\u8bbe\u7f6e\u91c7\u7528\u5e7f\u64ad\u6a21\u5f0f\uff0c\u5e7f\u64ad\u6a21\u5f0f\u4e0b\uff0c\u6d88\u8d39\u7ec4\u5185\u7684\u6bcf\u4e00\u4e2a\u6d88\u8d39\u8005\u90fd\u4f1a\u6d88\u8d39\u5168\u91cf\u6d88\u606f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMessageModel(MessageModel.BROADCASTING);\n")),(0,r.kt)("h2",{id:"\u5e76\u53d1\u6d88\u8d39\u548c\u987a\u5e8f\u6d88\u8d39"},"\u5e76\u53d1\u6d88\u8d39\u548c\u987a\u5e8f\u6d88\u8d39"),(0,r.kt)("p",null,"\u4e0a\u9762\u5df2\u7ecf\u4ecb\u7ecd\u8bbe\u7f6ePush Consumer\u5e76\u53d1\u6d88\u8d39\u7684\u65b9\u6cd5\uff0c\u901a\u8fc7\u5728\u6ce8\u518c\u6d88\u8d39\u56de\u8c03\u63a5\u53e3\u65f6\u4f20\u5165MessageListenerConcurrently\u63a5\u53e3\u7684\u5b9e\u73b0\u6765\u5b8c\u6210\u3002\u5728\u5e76\u53d1\u6d88\u8d39\u4e2d\uff0c\u53ef\u80fd\u4f1a\u6709\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u6d88\u8d39\u4e00\u4e2a\u961f\u5217\u7684\u6d88\u606f\uff0c\u56e0\u6b64\u5373\u4f7f\u53d1\u9001\u7aef\u901a\u8fc7\u53d1\u9001\u987a\u5e8f\u6d88\u606f\u4fdd\u8bc1\u6d88\u606f\u5728\u540c\u4e00\u4e2a\u961f\u5217\u4e2d\u6309\u7167FIFO\u7684\u987a\u5e8f\uff0c\u4e5f\u65e0\u6cd5\u4fdd\u8bc1\u6d88\u606f\u5b9e\u9645\u88ab\u987a\u5e8f\u6d88\u8d39\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64RocketMQ\u63d0\u4f9b\u4e86\u987a\u5e8f\u6d88\u8d39\u7684\u65b9\u5f0f\uff0c \u987a\u5e8f\u6d88\u8d39\u8bbe\u7f6e\u4e0e\u5e76\u53d1\u6d88\u8d39API\u5c42\u9762\u53ea\u6709\u4e00\u5904\u4e0d\u540c\uff0c\u5728\u6ce8\u518c\u6d88\u8d39\u56de\u8c03\u63a5\u53e3\u65f6\u4f20\u5165MessageListenerOrderly\u63a5\u53e3\u7684\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'consumer.registerMessageListener(new MessageListenerOrderly() {\n            AtomicLong consumeTimes = new AtomicLong(0);\n            @Override\n            public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs, ConsumeOrderlyContext context) {\n                System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n                this.consumeTimes.incrementAndGet();\n                if ((this.consumeTimes.get() % 2) == 0) {\n                    return ConsumeOrderlyStatus.SUCCESS;\n                } else if ((this.consumeTimes.get() % 5) == 0) {\n                    context.setSuspendCurrentQueueTimeMillis(3000);\n                    return ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT;\n                }\n                return ConsumeOrderlyStatus.SUCCESS;\n            }\n        });\n')),(0,r.kt)("p",null,"\u987a\u5e8f\u6d88\u8d39\u4e5f\u6709\u4e24\u79cd\u8fd4\u56de\u7ed3\u679c\uff0cConsumeOrderlyStatus.SUCCESS\u8868\u793a\u6d88\u8d39\u6210\u529f\uff0cConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT\u8868\u793a\u6d88\u8d39\u5931\u8d25\u3002"),(0,r.kt)("h2",{id:"\u6d88\u606f\u8fc7\u6ee4"},"\u6d88\u606f\u8fc7\u6ee4"),(0,r.kt)("p",null,"\u6d88\u606f\u8fc7\u6ee4\u662f\u6307\u6d88\u606f\u751f\u4ea7\u8005\u5411Topic\u4e2d\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u8bbe\u7f6e\u6d88\u606f\u5c5e\u6027\u5bf9\u6d88\u606f\u8fdb\u884c\u5206\u7c7b\uff0c\u6d88\u8d39\u8005\u8ba2\u9605Topic\u65f6\uff0c\u6839\u636e\u6d88\u606f\u5c5e\u6027\u8bbe\u7f6e\u8fc7\u6ee4\u6761\u4ef6\u5bf9\u6d88\u606f\u8fdb\u884c\u8fc7\u6ee4\uff0c\u53ea\u6709\u7b26\u5408\u8fc7\u6ee4\u6761\u4ef6\u7684\u6d88\u606f\u624d\u4f1a\u88ab\u6295\u9012\u5230\u6d88\u8d39\u7aef\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("p",null,"\u6d88\u8d39\u8005\u8ba2\u9605Topic\u65f6\u82e5\u672a\u8bbe\u7f6e\u8fc7\u6ee4\u6761\u4ef6\uff0c\u65e0\u8bba\u6d88\u606f\u53d1\u9001\u65f6\u662f\u5426\u6709\u8bbe\u7f6e\u8fc7\u6ee4\u5c5e\u6027\uff0cTopic\u4e2d\u7684\u6240\u6709\u6d88\u606f\u90fd\u5c06\u88ab\u6295\u9012\u5230\u6d88\u8d39\u7aef\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("p",null,"RocketMQ\u652f\u6301\u7684\u6d88\u606f\u8fc7\u6ee4\u65b9\u5f0f\u6709\u4e24\u79cd\uff0cTag\u8fc7\u6ee4\u548cSQL92\u8fc7\u6ee4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8fc7\u6ee4\u65b9\u5f0f"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u573a\u666f"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tag\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d88\u8d39\u8005\u8ba2\u9605\u7684Tag\u548c\u53d1\u9001\u8005\u8bbe\u7f6e\u7684\u6d88\u606fTag\u76f8\u4e92\u5339\u914d\uff0c\u5219\u6d88\u606f\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u7aef\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u8fc7\u6ee4\u573a\u666f\u3002\u4e00\u6761\u6d88\u606f\u652f\u6301\u8bbe\u7f6e\u4e00\u4e2aTag\uff0c\u4ec5\u9700\u8981\u5bf9Topic\u4e2d\u7684\u6d88\u606f\u8fdb\u884c\u4e00\u7ea7\u5206\u7c7b\u5e76\u8fc7\u6ee4\u65f6\u53ef\u4ee5\u4f7f\u7528\u6b64\u65b9\u5f0f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SQL92\u8fc7\u6ee4"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u8005\u8bbe\u7f6eTag\u6216\u6d88\u606f\u5c5e\u6027\uff0c\u6d88\u8d39\u8005\u8ba2\u9605\u6ee1\u8db3SQL92\u8fc7\u6ee4\u8868\u8fbe\u5f0f\u7684\u6d88\u606f\u88ab\u6295\u9012\u7ed9\u6d88\u8d39\u7aef\u8fdb\u884c\u6d88\u8d39\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"\u590d\u6742\u8fc7\u6ee4\u573a\u666f\u3002\u4e00\u6761\u6d88\u606f\u652f\u6301\u8bbe\u7f6e\u591a\u4e2a\u5c5e\u6027\uff0c\u53ef\u6839\u636eSQL\u8bed\u6cd5\u81ea\u5b9a\u4e49\u7ec4\u5408\u591a\u79cd\u7c7b\u578b\u7684\u8868\u8fbe\u5f0f\u5bf9\u6d88\u606f\u8fdb\u884c\u591a\u7ea7\u5206\u7c7b\u5e76\u5b9e\u73b0\u591a\u7ef4\u5ea6\u7684\u8fc7\u6ee4\u3002")))),(0,r.kt)("h3",{id:"tag\u8fc7\u6ee4"},"Tag\u8fc7\u6ee4"),(0,r.kt)("p",null,"Tag\u5728\u751f\u4ea7\u8005\u7ae0\u8282\u5df2\u7ecf\u4ecb\u7ecd\u8fc7\uff0c\u7528\u4e8e\u5bf9\u67d0\u4e2aTopic\u4e0b\u7684\u6d88\u606f\u8fdb\u884c\u5206\u7c7b\u3002\u751f\u4ea7\u8005\u5728\u53d1\u9001\u6d88\u606f\u65f6\uff0c\u6307\u5b9a\u6d88\u606f\u7684Tag\uff0c\u6d88\u8d39\u8005\u9700\u6839\u636e\u5df2\u7ecf\u6307\u5b9a\u7684Tag\u6765\u8fdb\u884c\u8ba2\u9605\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u56fe\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u4ece\u5ba2\u6237\u4e0b\u5355\u5230\u6536\u5230\u5546\u54c1\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u751f\u4ea7\u4e00\u7cfb\u5217\u6d88\u606f\uff0c\u4ee5\u5982\u4e0b\u6d88\u606f\u4e3a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u6d88\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u6d88\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u6d88\u606f")),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6d88\u606f\u4f1a\u53d1\u9001\u5230\u540d\u79f0\u4e3aTrade_Topic\u7684Topic\u4e2d\uff0c\u88ab\u5404\u4e2a\u4e0d\u540c\u7684\u7cfb\u7edf\u6240\u8ba2\u9605\uff0c\u4ee5\u5982\u4e0b\u7cfb\u7edf\u4e3a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u4ed8\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u652f\u4ed8\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u65f6\u8ba1\u7b97\u7cfb\u7edf\uff1a\u9700\u8981\u8ba2\u9605\u6240\u6709\u548c\u4ea4\u6613\u76f8\u5173\u7684\u6d88\u606f\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u6210\u529f\u7387\u5206\u6790\u7cfb\u7edf\uff1a\u9700\u8ba2\u9605\u8ba2\u5355\u548c\u652f\u4ed8\u6d88\u606f\u3002")),(0,r.kt)("p",null,"\u8fc7\u6ee4\u793a\u610f\u56fe\u5982\u4e0b\u6240\u793a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tag\u8fc7\u6ee4",src:n(53340).Z,width:"2009",height:"1320"})),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7269\u6d41\u7cfb\u7edf\u548c\u652f\u4ed8\u7cfb\u7edf\u6765\u8bf4\uff0c\u5b83\u4eec\u90fd\u53ea\u8ba2\u9605\u5355\u4e2aTag\uff0c\u6b64\u65f6\u53ea\u9700\u8981\u5728\u8c03\u7528subcribe\u63a5\u53e3\u65f6\u660e\u786e\u6807\u660eTag\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "TagA");\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e\u5b9e\u65f6\u8ba1\u7b97\u7cfb\u7edf\u6765\u8bf4\uff0c\u5b83\u8ba2\u9605\u4ea4\u6613Topic\u4e0b\u6240\u6709\u7684\u6d88\u606f\uff0cTag\u7528\u661f\u53f7\uff08*\uff09\u8868\u793a\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "*");\n')),(0,r.kt)("p",null,"\u5bf9\u4e8e\u4ea4\u6613\u6210\u529f\u7387\u5206\u6790\u7cfb\u7edf\u6765\u8bf4\uff0c\u5b83\u8ba2\u9605\u4e86\u8ba2\u5355\u548c\u652f\u4ed8\u4e24\u4e2aTag\u7684\u6d88\u606f\uff0c\u5728\u591a\u4e2aTag\u4e4b\u95f4\u7528\u4e24\u4e2a\u7ad6\u7ebf\uff08||\uff09\u5206\u9694\u5373\u53ef\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "TagA||TagB");\n')),(0,r.kt)("p",null,"\u8fd9\u91cc\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5982\u679c\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u591a\u6b21\u8ba2\u9605\u67d0\u4e2aTopic\u4e0b\u7684Tag\uff0c\u4ee5\u6700\u540e\u4e00\u6b21\u8ba2\u9605\u4e3a\u51c6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'//\u5982\u4e0b\u9519\u8bef\u4ee3\u7801\u4e2d\uff0cConsumer\u53ea\u80fd\u8ba2\u9605\u5230TagFilterTest\u4e0bTagB\u7684\u6d88\u606f\uff0c\u800c\u4e0d\u80fd\u8ba2\u9605TagA\u7684\u6d88\u606f\u3002\nconsumer.subscribe("TagFilterTest", "TagA");\nconsumer.subscribe("TagFilterTest", "TagB");\n')),(0,r.kt)("h3",{id:"sql92\u8fc7\u6ee4"},"SQL92\u8fc7\u6ee4"),(0,r.kt)("p",null,"SQL92\u8fc7\u6ee4\u662f\u5728\u6d88\u606f\u53d1\u9001\u65f6\u8bbe\u7f6e\u6d88\u606f\u7684Tag\u6216\u81ea\u5b9a\u4e49\u5c5e\u6027\uff0c\u6d88\u8d39\u8005\u8ba2\u9605\u65f6\u4f7f\u7528SQL\u8bed\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u6216Tag\u8fc7\u6ee4\u6d88\u606f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tag\u5c5e\u4e8e\u4e00\u79cd\u7279\u6b8a\u7684\u6d88\u606f\u5c5e\u6027\uff0c\u5728SQL\u8bed\u6cd5\u4e2d\uff0cTag\u7684\u5c5e\u6027\u503c\u4e3aTAGS\u3002\n\u5f00\u542f\u5c5e\u6027\u8fc7\u6ee4\u9996\u5148\u8981\u5728Broker\u7aef\u8bbe\u7f6e\u914d\u7f6eenablePropertyFilter=true\uff0c\u8be5\u503c\u9ed8\u8ba4\u4e3afalse\u3002")),(0,r.kt)("p",null,"\u4ee5\u4e0b\u56fe\u7535\u5546\u4ea4\u6613\u573a\u666f\u4e3a\u4f8b\uff0c\u4ece\u5ba2\u6237\u4e0b\u5355\u5230\u6536\u5230\u5546\u54c1\u8fd9\u4e00\u8fc7\u7a0b\u4f1a\u751f\u4ea7\u4e00\u7cfb\u5217\u6d88\u606f\uff0c\u6309\u7167\u7c7b\u578b\u5c06\u6d88\u606f\u5206\u4e3a\u8ba2\u5355\u6d88\u606f\u548c\u7269\u6d41\u6d88\u606f\uff0c\u5176\u4e2d\u7ed9\u7269\u6d41\u6d88\u606f\u5b9a\u4e49\u5730\u57df\u5c5e\u6027\uff0c\u6309\u7167\u5730\u57df\u5206\u4e3a\u676d\u5dde\u548c\u4e0a\u6d77\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u6d88\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u6d88\u606f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u6d88\u606f\u4e14\u5730\u57df\u4e3a\u676d\u5dde"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u6d88\u606f\u4e14\u5730\u57df\u4e3a\u4e0a\u6d77")))),(0,r.kt)("p",null,"\u8fd9\u4e9b\u6d88\u606f\u4f1a\u53d1\u9001\u5230\u540d\u79f0\u4e3aTrade_Topic\u7684Topic\u4e2d\uff0c\u88ab\u5404\u4e2a\u4e0d\u540c\u7684\u7cfb\u7edf\u6240\u8ba2\u9605\uff0c\u4ee5\u5982\u4e0b\u7cfb\u7edf\u4e3a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u7cfb\u7edf1\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u4e14\u6d88\u606f\u5730\u57df\u4e3a\u676d\u5dde\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7269\u6d41\u7cfb\u7edf2\uff1a\u53ea\u9700\u8ba2\u9605\u7269\u6d41\u6d88\u606f\u4e14\u6d88\u606f\u5730\u57df\u4e3a\u676d\u5dde\u6216\u4e0a\u6d77\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8ba2\u5355\u8ddf\u8e2a\u7cfb\u7edf\uff1a\u53ea\u9700\u8ba2\u9605\u8ba2\u5355\u6d88\u606f\u3002")),(0,r.kt)("p",null,"SQL92\u8fc7\u6ee4\u793a\u610f\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SQL92\u8fc7\u6ee4",src:n(75812).Z,width:"2012",height:"1369"})),(0,r.kt)("p",null,"\u5730\u57df\u5c06\u4f5c\u4e3a\u81ea\u5b9a\u4e49\u5c5e\u6027\u8bbe\u7f6e\u5728\u6d88\u606f\u4e2d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u606f\u53d1\u9001\u7aef\uff1a\n\u8bbe\u7f6e\u6d88\u606f\u7684\u81ea\u5b9a\u4e49\u5c5e\u6027\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'Message msg = new Message("topic", "tagA", "Hello MQ".getBytes());\n// \u8bbe\u7f6e\u81ea\u5b9a\u4e49\u5c5e\u6027A\uff0c\u5c5e\u6027\u503c\u4e3a1\u3002\nmsg.putUserProperties("a", "1");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6d88\u606f\u6d88\u8d39\u7aef\uff1a\n\u4f7f\u7528SQL\u8bed\u6cd5\u8bbe\u7f6e\u8fc7\u6ee4\u8868\u8fbe\u5f0f\uff0c\u5e76\u6839\u636e\u81ea\u5b9a\u4e49\u5c5e\u6027\u8fc7\u6ee4\u6d88\u606f\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("SqlFilterTest",\n    MessageSelector.bySql("(TAGS is not null and TAGS in (\'TagA\', \'TagB\'))" +\n        "and (a is not null and a between 0 and 3)"));\n')),(0,r.kt)("h2",{id:"\u6d88\u606f\u91cd\u8bd5\u548c\u6b7b\u4fe1\u961f\u5217"},"\u6d88\u606f\u91cd\u8bd5\u548c\u6b7b\u4fe1\u961f\u5217"),(0,r.kt)("h3",{id:"\u6d88\u606f\u91cd\u8bd5"},"\u6d88\u606f\u91cd\u8bd5"),(0,r.kt)("p",null,"\u82e5Consumer\u6d88\u8d39\u67d0\u6761\u6d88\u606f\u5931\u8d25\uff0c\u5219RocketMQ\u4f1a\u5728\u91cd\u8bd5\u95f4\u9694\u65f6\u95f4\u540e\uff0c\u5c06\u6d88\u606f\u91cd\u65b0\u6295\u9012\u7ed9Consumer\u6d88\u8d39\uff0c\u82e5\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u540e\u6d88\u606f\u8fd8\u6ca1\u6709\u6210\u529f\u88ab\u6d88\u8d39\uff0c\u5219\u6d88\u606f\u5c06\u88ab\u6295\u9012\u81f3\u6b7b\u4fe1\u961f\u5217"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6d88\u606f\u91cd\u8bd5\u53ea\u9488\u5bf9\u96c6\u7fa4\u6d88\u8d39\u6a21\u5f0f\u751f\u6548\uff1b\u5e7f\u64ad\u6d88\u8d39\u6a21\u5f0f\u4e0d\u63d0\u4f9b\u5931\u8d25\u91cd\u8bd5\u7279\u6027\uff0c\u5373\u6d88\u8d39\u5931\u8d25\u540e\uff0c\u5931\u8d25\u6d88\u606f\u4e0d\u518d\u91cd\u8bd5\uff0c\u7ee7\u7eed\u6d88\u8d39\u65b0\u7684\u6d88\u606f"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff1a\u6d88\u606f\u6d88\u8d39\u5931\u8d25\u540e\uff0c\u53ef\u88ab\u91cd\u590d\u6295\u9012\u7684\u6700\u5927\u6b21\u6570\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMaxReconsumeTimes(10);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u91cd\u8bd5\u95f4\u9694\uff1a\u6d88\u606f\u6d88\u8d39\u5931\u8d25\u540e\u518d\u6b21\u88ab\u6295\u9012\u7ed9Consumer\u6d88\u8d39\u7684\u95f4\u9694\u65f6\u95f4\uff0c\u53ea\u5728\u987a\u5e8f\u6d88\u8d39\u4e2d\u8d77\u4f5c\u7528\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setSuspendCurrentQueueTimeMillis(5000);\n")))),(0,r.kt)("p",null,"\u987a\u5e8f\u6d88\u8d39\u548c\u5e76\u53d1\u6d88\u8d39\u7684\u91cd\u8bd5\u673a\u5236\u5e76\u4e0d\u76f8\u540c\uff0c\u987a\u5e8f\u6d88\u8d39\u6d88\u8d39\u5931\u8d25\u540e\u4f1a\u5148\u5728\u5ba2\u6237\u7aef\u672c\u5730\u91cd\u8bd5\u76f4\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\uff0c\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u6d88\u8d39\u5931\u8d25\u7684\u6d88\u606f\u88ab\u8df3\u8fc7\uff0c\u6d88\u8d39\u4e0b\u4e00\u6761\u6d88\u606f\u800c\u6253\u4e71\u987a\u5e8f\u6d88\u8d39\u7684\u987a\u5e8f\uff0c\u800c\u5e76\u53d1\u6d88\u8d39\u6d88\u8d39\u5931\u8d25\u540e\u4f1a\u5c06\u6d88\u8d39\u5931\u8d25\u7684\u6d88\u606f\u91cd\u65b0\u6295\u9012\u56de\u670d\u52a1\u7aef\uff0c\u518d\u7b49\u5f85\u670d\u52a1\u7aef\u91cd\u65b0\u6295\u9012\u56de\u6765\uff0c\u5728\u8fd9\u671f\u95f4\u4f1a\u6b63\u5e38\u6d88\u8d39\u961f\u5217\u540e\u9762\u7684\u6d88\u606f\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5e76\u53d1\u6d88\u8d39\u5931\u8d25\u540e\u5e76\u4e0d\u662f\u6295\u9012\u56de\u539fTopic\uff0c\u800c\u662f\u6295\u9012\u5230\u4e00\u4e2a\u7279\u6b8aTopic\uff0c\u5176\u547d\u540d\u4e3a%RETRY%ConsumerGroupName\uff0c\u96c6\u7fa4\u6a21\u5f0f\u4e0b\u5e76\u53d1\u6d88\u8d39\u6bcf\u4e00\u4e2aConsumerGroup\u4f1a\u5bf9\u5e94\u4e00\u4e2a\u7279\u6b8aTopic\uff0c\u5e76\u4f1a\u8ba2\u9605\u8be5Topic\u3002\n\u4e24\u8005\u53c2\u6570\u5dee\u522b\u5982\u4e0b")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6d88\u8d39\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u91cd\u8bd5\u95f4\u9694"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u987a\u5e8f\u6d88\u8d39"),(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u65f6\u95f4\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49\u8bbe\u7f6e\uff0cSuspendCurrentQueueTimeMillis"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49\u53c2\u6570MaxReconsumeTimes\u53d6\u503c\u8fdb\u884c\u914d\u7f6e\u3002\u8be5\u53c2\u6570\u53d6\u503c\u65e0\u6700\u5927\u9650\u5236\u3002\u82e5\u672a\u8bbe\u7f6e\u53c2\u6570\u503c\uff0c\u9ed8\u8ba4\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u4e3aInteger.MAX")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e76\u53d1\u6d88\u8d39"),(0,r.kt)("td",{parentName:"tr",align:null},"\u95f4\u9694\u65f6\u95f4\u6839\u636e\u91cd\u8bd5\u6b21\u6570\u9636\u68af\u53d8\u5316\uff0c\u53d6\u503c\u8303\u56f4\uff1a1\u79d2\uff5e2\u5c0f\u65f6\u3002\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u53ef\u901a\u8fc7\u81ea\u5b9a\u4e49\u53c2\u6570MaxReconsumeTimes\u53d6\u503c\u8fdb\u884c\u914d\u7f6e\u3002\u9ed8\u8ba4\u503c\u4e3a16\u6b21\uff0c\u8be5\u53c2\u6570\u53d6\u503c\u65e0\u6700\u5927\u9650\u5236\uff0c\u5efa\u8bae\u4f7f\u7528\u9ed8\u8ba4\u503c")))),(0,r.kt)("p",null,"\u5e76\u53d1\u6d88\u8d39\u91cd\u8bd5\u95f4\u9694\u5982\u4e0b\uff0c\u53ef\u4ee5\u770b\u5230\u4e0e\u5ef6\u8fdf\u6d88\u606f\u7b2c\u4e09\u4e2a\u7b49\u7ea7\u5f00\u59cb\u7684\u65f6\u95f4\u5b8c\u5168\u4e00\u81f4\u3002"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u7b2c\u51e0\u6b21\u91cd\u8bd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e0e\u4e0a\u6b21\u91cd\u8bd5\u7684\u95f4\u9694\u65f6\u95f4"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7b2c\u51e0\u6b21\u91cd\u8bd5"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4e0e\u4e0a\u6b21\u91cd\u8bd5\u7684\u95f4\u9694\u65f6\u95f4"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"10s"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"7min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"30s"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"8min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"1min"),(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"9min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"2min"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"10min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"3min"),(0,r.kt)("td",{parentName:"tr",align:null},"13"),(0,r.kt)("td",{parentName:"tr",align:null},"20min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"4min"),(0,r.kt)("td",{parentName:"tr",align:null},"14"),(0,r.kt)("td",{parentName:"tr",align:null},"30min")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"5min"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"1h")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"6min"),(0,r.kt)("td",{parentName:"tr",align:null},"16"),(0,r.kt)("td",{parentName:"tr",align:null},"2h")))),(0,r.kt)("h3",{id:"\u6b7b\u4fe1\u961f\u5217"},"\u6b7b\u4fe1\u961f\u5217"),(0,r.kt)("p",null,"\u5f53\u4e00\u6761\u6d88\u606f\u521d\u6b21\u6d88\u8d39\u5931\u8d25\uff0cRocketMQ\u4f1a\u81ea\u52a8\u8fdb\u884c\u6d88\u606f\u91cd\u8bd5\uff0c\u8fbe\u5230\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u540e\uff0c\u82e5\u6d88\u8d39\u4f9d\u7136\u5931\u8d25\uff0c\u5219\u8868\u660e\u6d88\u8d39\u8005\u5728\u6b63\u5e38\u60c5\u51b5\u4e0b\u65e0\u6cd5\u6b63\u786e\u5730\u6d88\u8d39\u8be5\u6d88\u606f\u3002\u6b64\u65f6\uff0c\u8be5\u6d88\u606f\u4e0d\u4f1a\u7acb\u523b\u88ab\u4e22\u5f03\uff0c\u800c\u662f\u5c06\u5176\u53d1\u9001\u5230\u8be5\u6d88\u8d39\u8005\u5bf9\u5e94\u7684\u7279\u6b8a\u961f\u5217\u4e2d\uff0c\u8fd9\u7c7b\u6d88\u606f\u79f0\u4e3a\u6b7b\u4fe1\u6d88\u606f\uff08Dead-Letter Message\uff09\uff0c\u5b58\u50a8\u6b7b\u4fe1\u6d88\u606f\u7684\u7279\u6b8a\u961f\u5217\u79f0\u4e3a\u6b7b\u4fe1\u961f\u5217\uff08Dead-Letter Queue\uff09\uff0c\u6b7b\u4fe1\u961f\u5217\u662f\u6b7b\u4fe1Topic\u4e0b\u5206\u533a\u6570\u552f\u4e00\u7684\u5355\u72ec\u961f\u5217\u3002\u5982\u679c\u4ea7\u751f\u4e86\u6b7b\u4fe1\u6d88\u606f\uff0c\u90a3\u5bf9\u5e94\u7684ConsumerGroup\u7684\u6b7b\u4fe1Topic\u540d\u79f0\u4e3a%DLQ%ConsumerGroupName\uff0c\u6b7b\u4fe1\u961f\u5217\u7684\u6d88\u606f\u5c06\u4e0d\u4f1a\u518d\u88ab\u6d88\u8d39\u3002\u53ef\u4ee5\u5229\u7528RocketMQ Admin\u5de5\u5177\u6216\u8005RocketMQ Dashboard\u4e0a\u67e5\u8be2\u5230\u5bf9\u5e94\u6b7b\u4fe1\u6d88\u606f\u7684\u4fe1\u606f\u3002"))}p.isMDXComponent=!0},75812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/SQL92\u8fc7\u6ee4-716732acb1aad27fc8e7a9e218ebaa65.png"},53340:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Tag\u8fc7\u6ee4-844cfe6dd033746c7134bde843021ad6.png"}}]);