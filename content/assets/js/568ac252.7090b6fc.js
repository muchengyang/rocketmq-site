"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[7677],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,k=u["".concat(i,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(k,c(c({ref:n},d),{},{components:t})):r.createElement(k,c({ref:n},d))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[u]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<a;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},95768:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const a={},c="RocketMQ Connect in Action 3",s={unversionedId:"\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3",id:"version-5.0/\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3",title:"RocketMQ Connect in Action 3",description:"RocketMQ Connect Overview",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-5.0/08-\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3.md",sourceDirName:"08-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3",permalink:"/docs/\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/versioned_docs/version-5.0/08-\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3.md",tags:[],version:"5.0",frontMatter:{},sidebar:"version-5.0/myAutogeneratedSidebar",previous:{title:"RocketMQ Connect in Action 2",permalink:"/docs/\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2"},next:{title:"RocketMQ Connect in Action 4",permalink:"/docs/\u6570\u636e\u96c6\u6210/31RocketMQ Connect In Action4"}},i={},l=[{value:"Preparation",id:"preparation",level:2},{value:"Start RocketMQ",id:"start-rocketmq",level:3},{value:"Start Connect",id:"start-connect",level:3},{value:"Compiling Connector Plugin",id:"compiling-connector-plugin",level:4},{value:"Start Connect Runtime",id:"start-connect-runtime",level:4},{value:"Postgres image",id:"postgres-image",level:3},{value:"MySQL image",id:"mysql-image",level:3},{value:"Test data",id:"test-data",level:3},{value:"Start Connector",id:"start-connector",level:2},{value:"Start Debezium source connector",id:"start-debezium-source-connector",level:3},{value:"Start JDBC sink connector",id:"start-jdbc-sink-connector",level:3}],d={toc:l};function u(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rocketmq-connect-in-action-3"},"RocketMQ Connect in Action 3"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"RocketMQ Connect Overview",src:t(2638).Z,width:"2026",height:"628"})),(0,o.kt)("h2",{id:"preparation"},"Preparation"),(0,o.kt)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,o.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,o.kt)("li",{parentName:"ol"},"Maven 3.2.x+;"),(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME}  locational instructions"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"bin-release.zip version\uff1a/rocketmq-all-4.9.4-bin-release"),(0,o.kt)("p",{parentName:"blockquote"},"source-release.zip version\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,o.kt)("h3",{id:"start-connect"},"Start Connect"),(0,o.kt)("h4",{id:"compiling-connector-plugin"},"Compiling Connector Plugin"),(0,o.kt)("p",null,"Debezium RocketMQ Connector"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-debezium/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,o.kt)("p",null,"Compile the Debezium MySQL, PostgreSQL, and RocketMQ Connector packages and place them in the Runtime loading directory. The command is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-debezium-postgresql/target/rocketmq-connect-debezium-postgresql-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\ncp rocketmq-connect-debezium-mysql/target/rocketmq-connect-debezium-mysql-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\n")),(0,o.kt)("p",null,"JDBC Connector"),(0,o.kt)("p",null,"Move the compiled JDBC Connector package into the Runtime loading directory. The command is as follows\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-jdbc/\n$ mvn clean package -Dmaven.test.skip=true\ncp rocketmq-connect-jdbc/target/rocketmq-connect-jdbc-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\n")),(0,o.kt)("h4",{id:"start-connect-runtime"},"Start Connect Runtime"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,o.kt)("p",null,"Modify the configuration ",(0,o.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf"),", the main configuration is as follows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n#  Core configuration, configure the plugin directory of the previously compiled debezium package here\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,o.kt)("h3",{id:"postgres-image"},"Postgres image"),(0,o.kt)("p",null,"Use debezium's Postgres docker environment to set up the Postgres database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# starting a pg instance\ndocker run -d --name postgres -p 5432:5432 -e POSTGRES_USER=start_data_engineer -e POSTGRES_PASSWORD=password debezium/postgres:14\n\n# bash into postgres instance\ndocker exec -ti postgres /bin/bash\n")),(0,o.kt)("p",null,"Postgres information\nPort\uff1a5432\nAccount\uff1astart_data_engineer/password\nSynchronize the source database\uff1abank.user"),(0,o.kt)("h3",{id:"mysql-image"},"MySQL image"),(0,o.kt)("p",null,"Use debezium's MySQL docker environment to set up the MySQL database"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw quay.io/debezium/example-mysql:1.9\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw quay.io/debezium/example-mysql:1.9\n")),(0,o.kt)("p",null,"MySQL information"),(0,o.kt)("p",null,"Port\uff1a3306"),(0,o.kt)("p",null,"Account\uff1aroot/debezium\nSynchronize the source database\uff1abank.user"),(0,o.kt)("p",null,"Target database\uff1abank1.user"),(0,o.kt)("h3",{id:"test-data"},"Test data"),(0,o.kt)("p",null,"Login to the database using the root/debezium account"),(0,o.kt)("p",null," Source database table\uff1abank.user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create database bank;\nuse bank;\n\ncreate table bank.user\n(\n    id       bigint NOT NULL AUTO_INCREMENT,\n    user_id          integer,\n    name    varchar(8),\n    age integer,\n    birthday date,\n    datetime_created timestamp(3),\n    datetime_updated timestamp(3),\n    height           decimal(11, 2) null,\n    PRIMARY KEY (`id`)\n);\n\ninsert into bank.user values (1003, 1, 'lilei2', 10, now(), now(), now(), 1.72);\nupdate bank.user set user_id = 1003 where id = 1003;\n\n")),(0,o.kt)("p",null,"Login to the PostgreSQL database using the start_data_engineer/password account."),(0,o.kt)("p",null,"Source database table: bank.user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CREATE SCHEMA bank;\nSET search_path TO bank,public;\ncreate table bank.user\n(\n    id       integer not null\n        constraint user_pkey\n            primary key,\n    user_id          integer,\n    name    varchar(8),\n    age integer,\n    birthday date,\n    datetime_created timestamp(3),\n    datetime_updated timestamp(3),\n    height           numeric(11, 2)\n);\n\ninsert into bank.user values (1001, 1, 'lilei1', 10, now(), now(), now(), 1.72);\nupdate bank.user set user_id = 1001 where id = 1001;\n\n")),(0,o.kt)("p",null,"Target database table: bank1.user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"create database bank1;\ncreate table bank1.user\n(\n    id               bigint auto_increment\n        primary key,\n    user_id          int            null,\n    name             varchar(8)     null,\n    age              int            null,\n    birthday         date           null,\n    datetime_created timestamp(3)   null,\n    datetime_updated timestamp(3)   null,\n    height           decimal(11, 2) null\n);\n\n")),(0,o.kt)("h2",{id:"start-connector"},"Start Connector"),(0,o.kt)("h3",{id:"start-debezium-source-connector"},"Start Debezium source connector"),(0,o.kt)("p",null,"Synchronize the original table\uff1abank.user\nPurpose\uff1aParse the MySQL binlog and encapsulate it into a common ConnectRecord object, sent to the RocketMQ Topic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/MySQLCDCSource1000 -d \'{\n"connector.class": "org.apache.rocketmq.connect.debezium.mysql.DebeziumMysqlConnector",\n"max.task": "1",\n"connect.topicname": "debezium-source-topic1000",\n"kafka.transforms": "Unwrap",\n"kafka.transforms.Unwrap.delete.handling.mode": "none",\n"kafka.transforms.Unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n"kafka.transforms.Unwrap.add.headers": "op,source.db,source.table",\n"database.history.skip.unparseable.ddl": true,\n"database.history.name.srv.addr": "localhost:9876",\n"database.history.rocketmq.topic": "db-history-debezium-topic1000",\n"database.history.store.only.monitored.tables.ddl": true,\n"include.schema.changes": false,\n"database.server.name": "dbserver1",\n"database.port": 3306,\n"database.hostname": "database ip",\n"database.connectionTimeZone": "UTC",\n"database.user": "debezium",\n"database.password": "dbz",\n"table.include.list": "bank.user",\n"max.batch.size": 50,\n"database.include.list": "bank",\n"snapshot.mode": "when_needed",\n"database.server.id": "184054",\n"key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n"value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.kt)("p",null,"Synchronize the original table\uff1abank.user\nPurpose: Parse the Postgres binlog and encapsulate it into a common ConnectRecord object, sent to the RocketMQ Topic."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/postgres-connector1000 -d  \'{\n  "connector.class": "org.apache.rocketmq.connect.debezium.postgres.DebeziumPostgresConnector",\n  "max.task": "1",\n  "connect.topicname": "debezium-source-topic1000",\n  "kafka.transforms": "Unwrap",\n  "kafka.transforms.Unwrap.delete.handling.mode": "none",\n  "kafka.transforms.Unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n  "kafka.transforms.Unwrap.add.headers": "op,source.db,source.table",\n  "database.history.skip.unparseable.ddl": true,\n  "database.server.name": "bankserver1",\n  "database.port": 5432,\n  "database.hostname": "database ip",\n  "database.connectionTimeZone": "UTC",\n  "database.user": "start_data_engineer",\n  "database.dbname": "start_data_engineer",\n  "database.password": "password",\n  "table.whitelist": "bank.user",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,o.kt)("h3",{id:"start-jdbc-sink-connector"},"Start JDBC sink connector"),(0,o.kt)("p",null,"Purpose: Consume the data in the Topic and write it to the target table through JDBC protocol."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/jdbcmysqlsinktest1000 -d \'{\n  "connector.class": "org.apache.rocketmq.connect.jdbc.connector.JdbcSinkConnector",\n  "max.task": "2",\n  "connect.topicnames": "debezium-source-topic1000",\n  "connection.url": "jdbc:mysql://database ip:3306/bank1",\n  "connection.user": "root",\n  "connection.password": "debezium",\n  "pk.fields": "id",\n  "table.name.from.header": "true",\n  "pk.mode": "record_key",\n  "insert.mode": "UPSERT",\n  "db.timezone": "UTC",\n  "table.types": "TABLE",\n  "errors.deadletterqueue.topic.name": "dlq-topic",\n  "errors.log.enable": "true",\n  "errors.tolerance": "ALL",\n  "delete.enabled": "true",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n\n')),(0,o.kt)("p",null,"After the above three Connector tasks are created successfully, login to the PostgreSQL database using the start_data_engineer/password account or login to the MySQL database using the root/debezium account."),(0,o.kt)("p",null,"Modifying, deleting, or adding to the source database table bank.user will synchronize to the target MySQL table bank1.user."))}u.isMDXComponent=!0},2638:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/RocketMQ-Connect-Integration-Demo-71911f69343ac89f172b014950cb12e6.jpg"}}]);