"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7733],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),i=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=i(e.components);return a.createElement(l.Provider,{value:n},e.children)},o={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=i(t),m=r,x=u["".concat(l,".").concat(m)]||u[m]||o[m]||s;return t?a.createElement(x,c(c({ref:n},d),{},{components:t})):a.createElement(x,c({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,c=new Array(s);c[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var i=2;i<s;i++)c[i]=t[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const s={},c="RocketMQ Streams \u5b9e\u6218",p={unversionedId:"streams/33RocketMQ Streams In Action",id:"version-5.0/streams/33RocketMQ Streams In Action",title:"RocketMQ Streams \u5b9e\u6218",description:"\u80cc\u666f",source:"@site/versioned_docs/version-5.0/07-streams/33RocketMQ Streams In Action.md",sourceDirName:"07-streams",slug:"/streams/33RocketMQ Streams In Action",permalink:"/docs/streams/33RocketMQ Streams In Action",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/07-streams/33RocketMQ Streams In Action.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Streams \u5feb\u901f\u5f00\u59cb",permalink:"/docs/streams/32RocketMQ Streams Quick Start"},next:{title:"RocketMQ Connect Overview",permalink:"/docs/\u6570\u636e\u96c6\u6210/25RocketMQ Connect Overview"}},l={},i=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"\u642d\u5efa\u96c6\u7fa4",id:"\u642d\u5efa\u96c6\u7fa4",level:2},{value:"\u542f\u52a8RocketMQ",id:"\u542f\u52a8rocketmq",level:3},{value:"\u672c\u5730\u5b89\u88c5RocketMQ-streams",id:"\u672c\u5730\u5b89\u88c5rocketmq-streams",level:3},{value:"\u6784\u5efa\u6d41\u8ba1\u7b97\u7a0b\u5e8f",id:"\u6784\u5efa\u6d41\u8ba1\u7b97\u7a0b\u5e8f",level:3}],d={toc:i};function o(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-streams-\u5b9e\u6218"},"RocketMQ Streams \u5b9e\u6218"),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("p",null,"\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u80fd\u5b9e\u65f6\u3001\u51c6\u786e\u7684\u8ffd\u8e2a\u6bcf\u4e00\u6b21\u8bf7\u6c42\u7ecf\u8fc7\u7684\u670d\u52a1\u8282\u70b9\u548c\u6bcf\u4e2a\u8282\u70b9\u7684\u8017\u65f6\uff0c\u80fd\u5e2e\u5fd9\u5feb\u901f\u5b9a\u4f4d\u9519\u8bef\u6839\u56e0\uff0c\u56e0\u6b64\u88ab\u5e7f\u6cdb\u5730\u8fd0\u7528\u5728\u667a\u80fd\u8fd0\u7ef4\u9886\u57df\u3002\u90a3\u4e48\uff0c\u5982\u4f55\u5c06\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u7cfb\u7edf\u4ea7\u751f\u7684\u6570\u636e\u5b9e\u65f6\u3001\u51c6\u786e\u7684\u8ba1\u7b97\u5c55\u793a\u51fa\u6765\uff0c\n\u5c31\u6210\u4e3a\u642d\u5efa\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u7cfb\u7edf\u7684\u5173\u952e\u6240\u5728\u3002"),(0,r.kt)("p",null,"\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u7cfb\u7edf\u4e2d\u6709\u4e0b\u9762\u51e0\u4e2a\u6838\u5fc3\u6982\u5ff5\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"traceId\uff1a\u552f\u4e00\u5bf9\u5e94\u4e00\u6b21\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"span\uff1a\u4e00\u6b21\u8bf7\u6c42\u4e2d\u67d0\u4e24\u4e2a\u5173\u952e\u65b9\u6cd5\u4e4b\u95f4\u7684\u8c03\u7528\uff0c\u4e00\u6b21\u8bf7\u6c42\u53ea\u6709\u4e00\u4e2atraceId\uff0c\u4f46\u662f\u53ef\u4ee5\u6709\u591a\u4e2aspan\u3002",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"spanId\uff1a \u552f\u4e00\u6807\u8bc6\u4e00\u4e2aspan\uff1b"),(0,r.kt)("li",{parentName:"ul"},"parentSpanId\uff1a\u6807\u8bc6\u5f53\u524dspan\u7684\u4e0a\u4e00\u4e2aspan\u7684spanId\u662f\u591a\u5c11\uff1b")))),(0,r.kt)("p",null,"\u8fd0\u7528\u4e0a\u8ff0\u6982\u5ff5\uff0c\u5c06\u4e00\u6b21\u8bf7\u6c42\u4e2d\u6240\u4ea7\u751f\u7684\u6570\u636e\uff0c\u5904\u7406\u6210\u8bf7\u6c42\u62d3\u6251\u56fe\u6216\u8005\u94fe\u5f0f\u8c03\u7528\u56fe\u3002\u7531\u4e8e\u5206\u5e03\u5f0f\u94fe\u8def\u8ffd\u8e2a\u7cfb\u7edf\u4ea7\u751f\u7684\u6570\u91cf\u5927\u3001\u5904\u7406\u5ef6\u8fdf\u8981\u6c42\u4f4e\uff08\u5ef6\u8fdf\u592a\u9ad8\u7684\u8bf7\u6c42\u94fe\u8def\u4fe1\u606f\u5bf9\u6392\u67e5\u7ebf\u4e0a\u95ee\u9898\u5e2e\u52a9\u4f1a\u51cf\u5f31\uff09\uff0c\u6279\u91cf\u5904\u7406\u5df2\u7ecf\u4e0d\u80fd\u6ee1\u8db3\u8981\u6c42\uff0c\u5fc5\u987b\u4f7f\u7528\u6d41\u8ba1\u7b97\u3002"),(0,r.kt)("p",null,"\u8f93\u5165\u6570\u636e\u5982\u4e0b\u6240\u793a\uff0c\u9700\u8981\u5c06\u4e0b\u5217\u6570\u636e\u5904\u7406\u6210\u4e00\u4e2a\u8c03\u7528\u94fe\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "empty":false,\n    "labels":[\n        "68e51083e737a3f7d9c9e7ab34b1f6a7"\n    ],\n    "spanIndex":{\n        "0.1.1":{\n            "appId":"1_1@811c06548ae3a13",\n            "clientAppId":"1_1@10b8d040e1d0f78",\n            "clientIp":"xx.xxx.xxx.xx",\n            "elapsed":1,\n            "httpStatusCode":"",\n            "kind":"sr",\n            "orgId":"1",\n            "parentSpanId":"0.1",\n            "resultCode":"0",\n            "serverAppId":"1_1@811c06548ae3a13",\n            "serverIp":"xx.xxx.xxx.xx",\n            "spanId":"0.1.1",\n            "timestamp":1657511940232,\n            "traceId":"ea1bef7f5a16575119402287990d0018"\n        }\n    },\n    "traceId":"ea1bef7f5a16575119402287990d0018"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "empty":false,\n    "labels":[\n        "68e51083e737a3f7d9c9e7ab34b1f6a7"\n    ],\n    "spanIndex":{\n        "0.1":{\n            "appId":"1_1@10b8d040e1d0f78",\n            "clientAppId":"1_1@a48b12f3ecc3d60",\n            "clientIp":"xx.xxx.xxx.xx",\n            "elapsed":14,\n            "httpStatusCode":"200",\n            "kind":"sr",\n            "orgId":"1",\n            "parentSpanId":"0",\n            "resultCode":"0",\n            "serverAppId":"1_1@10b8d040e1d0f78",\n            "serverIp":"xx.xxx.xxx.xx",\n            "spanId":"0.1",\n            "timestamp":1657511940232,\n            "traceId":"ea1bef7f5a16575119402287990d0018"\n        }\n    },\n    "traceId":"ea1bef7f5a16575119402287990d0018"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "empty":false,\n    "labels":[\n        "e118372a87c3d7af811e08c6eea829c6"\n    ],\n    "spanIndex":{\n        "0":{\n            "appId":"1_1@a48b12f3ecc3d60",\n            "clientAppId":"",\n            "clientIp":"",\n            "elapsed":20,\n            "httpStatusCode":"200",\n            "kind":"sr",\n            "orgId":"1",\n            "parentSpanId":"",\n            "resultCode":"0",\n            "serverAppId":"1_1@a48b12f3ecc3d60",\n            "serverIp":"xx.xxx.xxx.xx",\n            "spanId":"0",\n            "timestamp":1657511940228,\n            "traceId":"ea1bef7f5a16575119402287990d0018"\n        }\n    },\n    "traceId":"ea1bef7f5a16575119402287990d0018"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "empty":false,\n    "labels":[\n        "68e51083e737a3f7d9c9e7ab34b1f6a7"\n    ],\n    "spanIndex":{\n        "0.1.2":{\n            "appId":"1_1@811c06548ae3a13",\n            "clientAppId":"1_1@10b8d040e1d0f78",\n            "clientIp":"xx.xxx.xxx.xx",\n            "elapsed":5,\n            "httpStatusCode":"",\n            "kind":"sr",\n            "orgId":"1",\n            "parentSpanId":"0.1",\n            "resultCode":"0",\n            "serverAppId":"1_1@811c06548ae3a13",\n            "serverIp":"xx.xxx.xxx.xx",\n            "spanId":"0.1.2",\n            "timestamp":1657511940234,\n            "traceId":"ea1bef7f5a16575119402287990d0018"\n        }\n    },\n    "traceId":"ea1bef7f5a16575119402287990d0018"\n}\n')),(0,r.kt)("p",null,"\u4e0a\u8ff0\u6570\u636e\u7ecf\u8fc7\u4e00\u5b9a\u7b80\u5316\uff0c\u53bb\u6389\u4e0d\u5fc5\u8981\u5b57\u6bb5\uff0c\u4e5f\u53ea\u6709\u4e00\u4e2atraceId\uff0c\u5b9e\u9645\u751f\u4ea7\u4e2d\u4f1a\u540c\u65f6\u5b58\u5728\u591a\u4e2atraceId\uff0c\u4f46\u662f\u5904\u7406\u539f\u7406\u4e00\u6837\u3002\u4e3a\u4e86\u5f97\u5230\u8c03\u7528\u94fe\uff0c\u9700\u8981\u5148\u5bf9traceId\u8fdb\u884c\u5206\u7ec4\uff0c\n\u5206\u7ec4\u4e4b\u540e\uff0c\u540c\u4e00\u7ec4\u5185\u6570\u636etraceId\u76f8\u540c\uff0c\u9700\u8981\u5bf9\u591a\u4e2aspan\u6309\u7167\u8c03\u7528\u987a\u5e8f\u8fdb\u884c\u6392\u5e8f\uff0c\u6700\u540e\u8f93\u51fa\u3002\u8fd9\u6837\u7684\u8f93\u51fa\u7ed3\u679c\u4e2d\u5c31\u5305\u542b\u4e86\u4e00\u6b21\u8c03\u7528\u7684\u6240\u6709span\uff0c\u53ef\u4ee5\u6e05\u6670\u5730\u6807\u8bc6\u51fa\u8fd9\u6b21\u8bf7\u6c42\u6bcf\u4e2aspan\n\u8282\u70b9\u8017\u65f6\u591a\u4e45\uff0c\u5982\u679c\u8bf7\u6c42\u6709\u9519\u8bef\u53d1\u751f\uff0c\u4e5f\u4f1a\u77e5\u9053\u9519\u8bef\u53d1\u751f\u5728\u54ea\u91cc\u3002\u4e0b\u9762\u5c55\u793aRocketMQ Streams\u662f\u5982\u4f55\u5904\u7406\u8fd9\u4e9b\u6570\u636e\u7684\u3002"),(0,r.kt)("h2",{id:"\u642d\u5efa\u96c6\u7fa4"},"\u642d\u5efa\u96c6\u7fa4"),(0,r.kt)("h3",{id:"\u542f\u52a8rocketmq"},"\u542f\u52a8RocketMQ"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux/Unix/Mac "),(0,r.kt)("li",{parentName:"ul"},"64bit JDK 1.8+; "),(0,r.kt)("li",{parentName:"ul"},"Maven 3.2.x\u6216\u4ee5\u4e0a\u7248\u672c; "),(0,r.kt)("li",{parentName:"ul"},"\u542f\u52a8 ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,r.kt)("h3",{id:"\u672c\u5730\u5b89\u88c5rocketmq-streams"},"\u672c\u5730\u5b89\u88c5RocketMQ-streams"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/rocketmq-streams.git\ncd rocketmq-streams\nmvn clean -DskipTests install -U\n")),(0,r.kt)("h3",{id:"\u6784\u5efa\u6d41\u8ba1\u7b97\u7a0b\u5e8f"},"\u6784\u5efa\u6d41\u8ba1\u7b97\u7a0b\u5e8f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65b0\u5efaIDE\u5de5\u7a0b"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0pom\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencies>\n    <dependency>\n        <groupId>org.apache.rocketmq</groupId>\n        <artifactId>rocketmq-streams-clients</artifactId>\n          \x3c!--\u66ff\u6362\u6210\u672c\u5730install\u7684rocketmq-streams--\x3e\n        <version>${version}</version>\n    </dependency>\n</dependencies>\n\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-shade-plugin</artifactId>\n            <version>3.2.1</version>\n            <executions>\n                <execution>\n                    <phase>package</phase>\n                    <goals>\n                        <goal>shade</goal>\n                    </goals>\n                    <configuration>\n                        <minimizeJar>false</minimizeJar>\n                        <shadedArtifactAttached>true</shadedArtifactAttached>\n                        <artifactSet>\n                            <includes>\n                                <include>org.apache.rocketmq:rocketmq-streams-clients</include>\n                            </includes>\n                        </artifactSet>\n                    </configuration>\n                </execution>\n            </executions>\n        </plugin>\n    </plugins>\n</build>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7f16\u5199\u6d41\u8ba1\u7b97\u7a0b\u5e8f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class UserTest {\n    public static void main(String[] args) {\n        DataStreamSource source = StreamBuilder.dataStream("namespace", "pipeline");\n\n      source.fromRocketmq(\n                      "traceTopic",\n                      "traceGroup",\n                      true,\n                      "127.0.0.1:9876")\n              .map((message -> {\n                JSONObject spanIndex = (JSONObject) ((JSONObject) message).get("spanIndex");\n                JSONObject span = (JSONObject) spanIndex.getInnerMap().values().stream().findFirst().get();\n\n                Object spanId = span.get("spanId");\n                Object parentSpanId = span.get("parentSpanId");\n\n                ((JSONObject) message).put("spanId", spanId);\n                ((JSONObject) message).put("parentSpanId", parentSpanId);\n\n                return message;\n              }))\n              .window(SessionWindow.of(Time.seconds(5)))\n              .groupBy("traceId")\n              //\u540c\u4e00traceId\u4e2d\uff0c\u539f\u59cb\u6570\u636e\u4e2d\u7684spanIndex\u5b57\u6bb5\u6570\u636e\uff0c\u653e\u5728\u4e00\u8d77\u5f62\u6210\u65b0\u7684\u5b57\u6bb5traceList\uff0c\u8fbe\u5230\u4e00\u4e2atraceId\u5305\u542b\u5c5e\u4e8e\u8be5trace\u7684\u591a\u4e2aspan\u7684\u76ee\u7684\u3002\n              .addUDAF(new TestUDAF(), "traceList", "spanIndex")\n              .setLocalStorageOnly(true)\n              .toDataStream()\n              .forEach(new ForEachFunction<JSONObject>() {\n                  @Override\n                  public void foreach(JSONObject data) {\n                      //\u5bf9\u540c\u4e00trace\u4e2d\u7684span\u8fdb\u884c\u6392\u5e8f\uff0c\u4f7fspan\u987a\u5e8f\u7b26\u5408\u8bf7\u6c42\u53d1\u751f\u987a\u5e8f\n                      JSONArray traceList = (JSONArray) data.get("traceList");\n                      HashMap<String, Object> totalMap = new HashMap<>();\n  \n                      Iterator<Object> iterator = traceList.stream().iterator();\n                      while (iterator.hasNext()) {\n                          String next = (String) iterator.next();\n                          JSONObject spanItem = JSON.parseObject(next);\n    \n                          Set<String> keySet = spanItem.keySet();\n                          for (String key : keySet) {\n                            totalMap.put(key, spanItem);\n                          }\n                      }\n  \n                      ArrayList<String> temp = new ArrayList<>(totalMap.keySet());\n                      Collections.sort(temp);\n  \n                      traceList.clear();\n                      for (String sortKey : temp) {\n                          traceList.add(totalMap.get(sortKey));\n                      }\n                  }\n              })\n              .toPrint(1)\n              .with(WindowStrategy.highPerformance())\n              .start();\n    }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class TestUDAF implements IAccumulator<List<String>, TestUDAF.Trace> {\n    public static class Trace {\n        public List<String> result = new ArrayList<>();\n    }\n\n    @Override\n    public Trace createAccumulator() {\n        return new Trace();\n    }\n\n    @Override\n    public List<String> getValue(Trace accumulator) {\n        return accumulator.result;\n    }\n\n    @Override\n    public void accumulate(Trace accumulator, Object... parameters) {\n        if (parameters == null || parameters.length == 0) {\n            return;\n        }\n        if (parameters.length != 1) {\n            throw new IllegalArgumentException("parameters length must be one");\n        }\n\n        JSONObject param = (JSONObject) parameters[0];\n        String result = param.toJSONString();\n\n        if (accumulator == null) {\n            accumulator = new Trace();\n        }\n\n        accumulator.result.add(result);\n    }\n\n    @Override\n    public void merge(Trace accumulator, Iterable<Trace> its) {\n\n    }\n\n    @Override\n    public void retract(Trace accumulator, String... parameters) {\n\n    }\n    \n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u7ed3\u679c\uff1a\n\u7ed3\u679c\u4e2d\uff0c\u4e00\u6761\u6570\u636e\u5305\u542b\u4e00\u4e2atrace\uff0c\u5373\u4e00\u6b21\u8bf7\u6c42\u6240\u4ea7\u751f\u7684\u6570\u636e\uff0c\u8bf7\u6c42\u4e2d\u591a\u4e2aspan\u6309\u7167\u8bf7\u6c42\u53d1\u751f\u987a\u5e8f\u6392\u5217\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "traceId":"ea1bef7f5a16575119402287990d0018",\n    "start_time":"2022-10-08 15:56:22",\n    "traceList":[\n        {\n            "0":{\n                "traceId":"ea1bef7f5a16575119402287990d0018",\n                "kind":"sr",\n                "resultCode":"0",\n                "clientAppId":"",\n                "parentSpanId":"",\n                "orgId":"1",\n                "elapsed":20,\n                "spanId":"0",\n                "appId":"1_1@a48b12f3ecc3d60",\n                "clientIp":"",\n                "serverAppId":"1_1@a48b12f3ecc3d60",\n                "serverIp":"xx.xxx.xxx.xx",\n                "httpStatusCode":"200",\n                "timestamp":1657511940228\n            }\n        },\n        {\n            "0.1":{\n                "traceId":"ea1bef7f5a16575119402287990d0018",\n                "kind":"sr",\n                "resultCode":"0",\n                "clientAppId":"1_1@a48b12f3ecc3d60",\n                "parentSpanId":"0",\n                "orgId":"1",\n                "elapsed":14,\n                "spanId":"0.1",\n                "appId":"1_1@10b8d040e1d0f78",\n                "clientIp":"xx.xxx.xxx.xx",\n                "serverAppId":"1_1@10b8d040e1d0f78",\n                "serverIp":"xx.xxx.xxx.xx",\n                "httpStatusCode":"200",\n                "timestamp":1657511940232\n            }\n        },\n        {\n            "0.1.1":{\n                "traceId":"ea1bef7f5a16575119402287990d0018",\n                "kind":"sr",\n                "resultCode":"0",\n                "clientAppId":"1_1@10b8d040e1d0f78",\n                "parentSpanId":"0.1",\n                "orgId":"1",\n                "elapsed":1,\n                "spanId":"0.1.1",\n                "appId":"1_1@811c06548ae3a13",\n                "clientIp":"xx.xxx.xxx.xx",\n                "serverAppId":"1_1@811c06548ae3a13",\n                "serverIp":"xx.xxx.xxx.xx",\n                "httpStatusCode":"",\n                "timestamp":1657511940232\n            }\n        },\n        {\n            "0.1.2":{\n                "traceId":"ea1bef7f5a16575119402287990d0018",\n                "kind":"sr",\n                "resultCode":"0",\n                "clientAppId":"1_1@10b8d040e1d0f78",\n                "parentSpanId":"0.1",\n                "orgId":"1",\n                "elapsed":5,\n                "spanId":"0.1.2",\n                "appId":"1_1@811c06548ae3a13",\n                "clientIp":"xx.xxx.xxx.xx",\n                "serverAppId":"1_1@811c06548ae3a13",\n                "serverIp":"xx.xxx.xxx.xx",\n                "httpStatusCode":"",\n                "timestamp":1657511940234\n            }\n        }\n    ],\n    "fire_time":"2022-10-08 15:56:29",\n    "end_time":"2022-10-08 15:56:29"\n}\n')))}o.isMDXComponent=!0}}]);