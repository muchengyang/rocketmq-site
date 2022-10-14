"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[2892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>p});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,g=d["".concat(l,".").concat(p)]||d[p]||c[p]||r;return n?s.createElement(g,o(o({ref:t},m),{},{components:n})):s.createElement(g,o({ref:t},m))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var s=n(87462),a=(n(67294),n(3905));const r={},o="Push Consume",i={unversionedId:"consumer/12push",id:"consumer/12push",title:"Push Consume",description:"The simple code of RocketMQ Push Consumer is as follows:",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/03-consumer/12push.md",sourceDirName:"03-consumer",slug:"/consumer/12push",permalink:"/docs/4.x/consumer/12push",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/03-consumer/12push.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"Core Concept",permalink:"/docs/4.x/consumer/11concept2"},next:{title:"Pull Consume",permalink:"/docs/4.x/consumer/13pull"}},l={},u=[{value:"Cluster and Broadcast Mode",id:"cluster-and-broadcast-mode",level:2},{value:"Concurrent Consumption and Order Consumption",id:"concurrent-consumption-and-order-consumption",level:2},{value:"Message Filtering",id:"message-filtering",level:2},{value:"Tag Filtering",id:"tag-filtering",level:3},{value:"SQL92 Filtering",id:"sql92-filtering",level:3},{value:"Message Retry and Dead-Letter Queue",id:"message-retry-and-dead-letter-queue",level:2},{value:"Message Retry",id:"message-retry",level:3},{value:"Dead-Letter Queue",id:"dead-letter-queue",level:3}],m={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"push-consume"},"Push Consume"),(0,a.kt)("p",null,"The simple code of RocketMQ Push Consumer is as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'public class Consumer {\n  public static void main(String[] args) throws InterruptedException, MQClientException {\n    // Initialize Consumer and set Consumer Goup Name\n    DefaultMQPushConsumer consumer = new DefaultMQPushConsumer("please_rename_unique_group_name");\n   \n    // Set the address of NameServer \n    consumer.setNamesrvAddr("localhost:9876");\n    // Subscribe One or more of topics\uff0cand specify the tag filtering conditions, here specify * means receive all tag messages\n    consumer.subscribe("TopicTest", "*");\n    // Register a callback interface to handle messages received from the Broker\n    consumer.registerMessageListener(new MessageListenerConcurrently() {\n      @Override\n      public ConsumeConcurrentlyStatus consumeMessage(List<MessageExt> msgs, ConsumeConcurrentlyContext context) {\n        System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n        // Return to the message consumption status, ConsumeConcurrentlyStatus.CONSUME_SUCCESS for successful consumption\n        return ConsumeConcurrentlyStatus.CONSUME_SUCCESS;\n      }\n    });\n    // Start Consumer\n    consumer.start();\n    System.out.printf("Consumer Started.%n");\n  }\n}\n')),(0,a.kt)("p",null,"First, initialize the consumer.  When initializing the consumer, the consumer must with the ConsumerGroupName, the ConsumerGroupName of the same consumer group is the same, which is an important attribute to determine whether the consumer belongs to the same consumer group. Then, set the NameServer address, which is not introduced here as like Producer. Then, call the subscribe method to subscribe to Topic. The subscribe method needs to specify the Topic name needed to subscribe to, it can also add the message filtering conditions, such as TagA, etc. The above code to specify * means to receive all tag messages. In addition to subscribing, it also needs to register the callback interface to write the consumption logic to handle the messages received from the Broker. If call the registerMessageListener method, it needs to pass in the MessageListener implementation. The above code is concurrent consumption, so it is MessageListenerConcurrently implementation, its interface is as follows:"),(0,a.kt)("admonition",{title:"MessageListenerConcurrently Interface",type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"/**\n * A MessageListenerConcurrently object is used to receive asynchronously delivered messages concurrently\n */\npublic interface MessageListenerConcurrently extends MessageListener {\n    /**\n     * It is not recommend to throw exception,rather than returning ConsumeConcurrentlyStatus.RECONSUME_LATER if\n     * consumption failure\n     *\n     * @param msgs msgs.size() >= 1<br> DefaultMQPushConsumer.consumeMessageBatchMaxSize=1,you can modify here\n     * @return The consume status\n     */\n    ConsumeConcurrentlyStatus consumeMessage(final List<MessageExt> msgs,\n        final ConsumeConcurrentlyContext context);\n}\n"))),(0,a.kt)("p",null,"where msgs is the list of messages to be consumed obtained from the Broker, and the user implements the interface and writes the consumption logic for the messages in the consumeMessage method, and then returns the consumption status, ConsumeConcurrentlyStatus.CONSUME_SUCCESS indicates successful consumption, or CONSUME_LATER means that the consumption has failed and will be re-consumed after a period of time."),(0,a.kt)("p",null,"The RocketMQ provides a very simple consumer API, users don't need to focus on rebalancing or pulling logic, they just need to write their own consumption logic."),(0,a.kt)("h2",{id:"cluster-and-broadcast-mode"},"Cluster and Broadcast Mode"),(0,a.kt)("p",null,"We can set it to use cluster mode by the following code. RocketMQ Push Consumer uses cluster mode by default, where consumers in the same consumer group consume together."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMessageModel(MessageModel.CLUSTERING);\n")),(0,a.kt)("p",null,"Set up the use of broadcast mode with the following code. In broadcast mode, each consumer within the consumer group consumes the full messages."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMessageModel(MessageModel.BROADCASTING);\n")),(0,a.kt)("h2",{id:"concurrent-consumption-and-order-consumption"},"Concurrent Consumption and Order Consumption"),(0,a.kt)("p",null,"Setting up Push Consumer concurrent consumption has been described above and is accomplished by passing in the implementation of the MessageListenerConcurrently interface when registering the consumption callback interface. In concurrent consumption, there may be multiple threads consuming messages from a queue at the same time, so even if the sender ensures that messages are in the same queue in FIFO order by sending order messages, there is no guarantee that the messages are actually consumed orderly."),(0,a.kt)("p",null,"RocketMQ therefore provides a order consumption approach. The only difference between order consumption setup and concurrent consumption at the API level is that the implementation of the MessageListenerOrderly interface is passed in when registering the consumption callback interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'consumer.registerMessageListener(new MessageListenerOrderly() {\n            AtomicLong consumeTimes = new AtomicLong(0);\n            @Override\n            public ConsumeOrderlyStatus consumeMessage(List<MessageExt> msgs, ConsumeOrderlyContext context) {\n                System.out.printf("%s Receive New Messages: %s %n", Thread.currentThread().getName(), msgs);\n                this.consumeTimes.incrementAndGet();\n                if ((this.consumeTimes.get() % 2) == 0) {\n                    return ConsumeOrderlyStatus.SUCCESS;\n                } else if ((this.consumeTimes.get() % 5) == 0) {\n                    context.setSuspendCurrentQueueTimeMillis(3000);\n                    return ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT;\n                }\n                return ConsumeOrderlyStatus.SUCCESS;\n            }\n        });\n')),(0,a.kt)("p",null,"There are also two return results for order consumption, ConsumeOrderlyStatus.SUCCESS for successful consumption and ConsumeOrderlyStatus.SUSPEND_CURRENT_QUEUE_A_MOMENT for failed consumption."),(0,a.kt)("h2",{id:"message-filtering"},"Message Filtering"),(0,a.kt)("p",null,"Message filtering means that message producers set message attributes to classify messages when sending messages to a Topic, and consumers set filtering conditions according to the message attributes when subscribing to a Topic, so that only messages that meet the filtering conditions are delivered to the consumer side for consumption."),(0,a.kt)("p",null,"If the consumer subscribes to a Topic without setting filter conditions, all messages in the Topic will be delivered to the consumer for consumption, regardless of whether the filter attributes are set when the message is sent."),(0,a.kt)("p",null,"There are two types of message filtering supported by RocketMQ, Tag filtering and SQL92 filtering."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Message Filtering"),(0,a.kt)("th",{parentName:"tr",align:null},"Instruct"),(0,a.kt)("th",{parentName:"tr",align:null},"Scenario"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tag filtering"),(0,a.kt)("td",{parentName:"tr",align:null},"If the Tag subscribed by the consumer and the message Tag set by the sender match each other, the message is cast to the consumer for consumption."),(0,a.kt)("td",{parentName:"tr",align:null},"Simple filtering Scenario: a message supports setting one Tag, which can be used when only one level of classification and filtering of messages in Topic is required.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SQL92 filtering"),(0,a.kt)("td",{parentName:"tr",align:null},"The sender sets the Tag or message attribute, and the consumer subscribes to the message that satisfies the SQL92 filter expression is cast to the consumer for consumption."),(0,a.kt)("td",{parentName:"tr",align:null},"Complex filtering Scenarios: a message supports setting multiple attributes and can be customized to combine multiple types of expressions according to SQL syntax to classify messages at multiple levels and achieve multi-dimensional filtering.")))),(0,a.kt)("h3",{id:"tag-filtering"},"Tag Filtering"),(0,a.kt)("p",null,"Tag has been introduced in the Producers chapter and is used to classify messages under a certain Topic. When sending a message, the producer specifies the Tag of the message, and the consumer has to subscribe according to the Tag already specified."),(0,a.kt)("p",null,"Take the following e-commerce transaction scenario as an example, the process from the customer's order to the receipt of goods will produce a series of messages, as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Order News"),(0,a.kt)("li",{parentName:"ul"},"Payment News"),(0,a.kt)("li",{parentName:"ul"},"Logistics News")),(0,a.kt)("p",null,"These messages are sent to a Topic with the name Trade_Topic and are subscribed to by various systems, as exemplified by the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Payment system: subscribe to payment messages only."),(0,a.kt)("li",{parentName:"ul"},"Logistics system: subscribe to logistics messages only."),(0,a.kt)("li",{parentName:"ul"},"Real-time calculation system: subscribe to all transaction-related messages."),(0,a.kt)("li",{parentName:"ul"},"Transaction success rate analysis system: subscribe to order and payment messages.")),(0,a.kt)("p",null,"The filtering schematic is shown below"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Tag\u8fc7\u6ee4",src:n(70678).Z,width:"2009",height:"1320"})),(0,a.kt)("p",null,"For logistics systems and payment systems, they both subscribe to a single Tag, at which point it is sufficient to mark the Tag when calling the subcribe interface."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "TagA");\n')),(0,a.kt)("p",null,"For a real-time computing system, it subscribes to all messages under the transaction Topic, and the Tag is simply indicated by an asterisk (*)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "*");\n')),(0,a.kt)("p",null,"For the transaction success rate analysis system, it subscribes to messages for both Order and Payment Tags, and it is fine to separate multiple Tags with two vertical lines (||)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("TagFilterTest", "TagA||TagB");\n')),(0,a.kt)("p",null,"It should be noted here that if the same consumer subscribes to a Tag under a Topic multiple times, the last subscription will prevail."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'//In the following error code, the Consumer can only subscribe to the message of TagB under TagFilterTest, but not the message of TagA.\nconsumer.subscribe("TagFilterTest", "TagA");\nconsumer.subscribe("TagFilterTest", "TagB");\n')),(0,a.kt)("h3",{id:"sql92-filtering"},"SQL92 Filtering"),(0,a.kt)("p",null,"SQL92 filtering is to set the Tag or custom attribute of the message when the message is sent, and the consumer subscribes to set the filter expression using SQL syntax to filter the message based on the custom attribute or Tag."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Tag belongs to a special kind of message property, and the property value of Tag is TAGS in the SQL syntax.\nEnable property filtering first set the configuration enablePropertyFilter=true on the Broker side, the value is false by default.")),(0,a.kt)("p",null,"Take the following e-commerce transaction scenario as an example, the process from the customer's order to the receipt of goods will produce a series of messages, according to the type of messages into order messages and logistics messages, which define the geographical attributes of logistics messages, according to the region into Hangzhou and Shanghai:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Order News"),(0,a.kt)("li",{parentName:"ul"},"Logistics News",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Logistics information and the region is Hangzhou"),(0,a.kt)("li",{parentName:"ul"},"Logistics information and the region is Shanghai")))),(0,a.kt)("p",null,"These messages are sent to the Topic with the name Trade_Topic and are subscribed by various systems, as an example, the following system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Logistics system 1: only need to subscribe to the logistics message and the message area is Hangzhou."),(0,a.kt)("li",{parentName:"ul"},"Logistics system 2: only need to subscribe to the logistics news and the news area is Hangzhou or Shanghai."),(0,a.kt)("li",{parentName:"ul"},"Order tracking system: only need to subscribe to order information.")),(0,a.kt)("p",null,"The SQL92 filtering schematic is shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SQL92\u8fc7\u6ee4",src:n(55293).Z,width:"2012",height:"1369"})),(0,a.kt)("p",null,"The locale will be set as a custom property in the message."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message sender.\nSet the custom properties of the message.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'Message msg = new Message("topic", "tagA", "Hello MQ".getBytes());\n// Set custom property A with property value 1.\nmsg.putUserProperties("a", "1");\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message consumer.\nSet filter expressions using SQL syntax and filter messages based on custom properties.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'consumer.subscribe("SqlFilterTest",\n    MessageSelector.bySql("(TAGS is not null and TAGS in (\'TagA\', \'TagB\'))" +\n        "and (a is not null and a between 0 and 3)"));\n')),(0,a.kt)("h2",{id:"message-retry-and-dead-letter-queue"},"Message Retry and Dead-Letter Queue"),(0,a.kt)("h3",{id:"message-retry"},"Message Retry"),(0,a.kt)("p",null,"If the Consumer fails to consume a message, RocketMQ will re-pitch the message to the Consumer after the retry interval, and if the message is not successfully consumed after the maximum number of retries, the message will be pitched to the dead message queue."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Message retry is only effective for cluster mode; broadcast  mode does not provide the message retry feature. In the broadcast  mode, after a failed consumption, the failed message will not be retry and continue to consume new messages.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Maximum number of retries: the maximum number of times a message can be repeatedly delivered after a failed consumption.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setMaxReconsumeTimes(10);\n")),(0,a.kt)("p",null,"Retry interval: the interval after the message consumption fails to be cast to the Consumer again for consumption, which only works in sequential consumption."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"consumer.setSuspendCurrentQueueTimeMillis(5000);\n")),(0,a.kt)("p",null,"The retry mechanism of order consumption and concurrent consumption is not the same. After the order consumption fails to consume, it will first retry locally on the client side until the maximum number of retries, so as to avoid the failed messages being skipped and consuming the next message and disrupting the order of order consumption, while the concurrent consumption will re-cast the failed messages back to the server after the failed consumption, and then wait for the server to re-cast them back, during which it will normally consume the messages behind the queue."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When concurrent consumption fails, it is not cast back to the original Topic, but to a special Topic named %RETRY%ConsumerGroupName, and each ConsumerGroup in cluster mode will correspond to a special Topic and will subscribe to that Topic.\nThe difference between the two parameters is as follows")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Consumption type"),(0,a.kt)("th",{parentName:"tr",align:null},"Retry interval"),(0,a.kt)("th",{parentName:"tr",align:null},"Maximum number of retries"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Order consumption"),(0,a.kt)("td",{parentName:"tr",align:null},"The retry interval time is configured with the custom parameter SuspendCurrentQueueTimeMillis"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of retries can be configured with the custom parameter MaxReconsumeTimes. There is no maximum limit to the value of this parameter. If the parameter is not set, the default maximum number of retries is Integer.MAX .")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Concurrent consumption"),(0,a.kt)("td",{parentName:"tr",align:null},"The retry interval time changes in steps according to the number of retries, the value range: 1 second ~ 2 hours. Custom configuration is not supported"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum number of retries can be configured by the custom parameter MaxReconsumeTimes. The default value is 16 times. There is no maximum limit for this parameter, and it is recommended to use the default value.")))),(0,a.kt)("p",null,"The retry interval for concurrent consumption is as follows, which can be seen to be exactly the same as the time when the third level of delayed messages starts."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Retry number of times"),(0,a.kt)("th",{parentName:"tr",align:null},"The time between the last retry"),(0,a.kt)("th",{parentName:"tr",align:null},"Retry number of times"),(0,a.kt)("th",{parentName:"tr",align:null},"The time between the last retry"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"10s"),(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"7min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"30s"),(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"8min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"1min"),(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"9min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"2min"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"10min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"3min"),(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"20min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"4min"),(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"30min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"5min"),(0,a.kt)("td",{parentName:"tr",align:null},"15"),(0,a.kt)("td",{parentName:"tr",align:null},"1h")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"6min"),(0,a.kt)("td",{parentName:"tr",align:null},"16"),(0,a.kt)("td",{parentName:"tr",align:null},"2h")))),(0,a.kt)("h3",{id:"dead-letter-queue"},"Dead-Letter Queue"),(0,a.kt)("p",null,"When a message fails to be consumed for the first time, RocketMQ will automatically retry the message. After reaching the maximum number of retries, if the consumption still fails, it means that the consumer cannot consume the message correctly under normal circumstances. At this point, the message is not immediately discarded, but sent to a special queue corresponding to that consumer, which is called a Dead-Letter Message, and the special queue storing the dead message is called a Dead-Letter Queue, which is a separate queue with a unique number of partitions under the Dead-Letter Topic. If a Dead-Letter Message is generated, the corresponding ConsumerGroup's Dead-Letter Topic name is %DLQ%ConsumerGroupName, and the messages in the Dead-Letter Queue will not be consumed again. You can use RocketMQ Admin tool or RocketMQ Dashboard to find out the information of the corresponding dead message."))}c.isMDXComponent=!0},55293:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/SQL92\u8fc7\u6ee4-716732acb1aad27fc8e7a9e218ebaa65.png"},70678:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/Tag\u8fc7\u6ee4-844cfe6dd033746c7134bde843021ad6.png"}}]);