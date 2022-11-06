# LiveGoods



## 一 、项目简介

    livegoods房屋海选平台，是一个前后端分离架构项目。客户端包含移动客户端、PC客户端的微服务项目。项目包含了用户在线房屋租赁、房屋买卖、和房屋相关的商城功能。

    只要是前后端分离的项目，就一定有前端团队和后端团队。前端团队负责编写客户端页面，后端团队（就是我们）负责实现服务端操作。

    使用的技术：Spring Boot、 Spring Cloud、  Spring Data MongoDB、 Spring Data Elasticsearch、 SpringMVC、Spring Cache、Vue.js等

软件及工具：IDEA 、FastDFS、Nginx、MongoDB、Elasticsearch、Redis、Docker。





## 二、启动前端项目

        前端工程师独立开发前端工程，前端工程可以**独立启动**，可以本地运行，可以本地测试，与后端服务代码解耦合。前端工程最终形成的基本都是基于HTML提供的类静态页面，页面中有若干框架，可以通过远程访问，获取后端工程提供的数据，进行动态展示。为了能够显示数据，前端多结合Mock.js进行模拟数据。

        后端工程师，是根据前端工程师和后端工程师协商出的访问接口（接口文档），进行代码的开发，提供若干服务接口，在接收到请求的时候，进行相应的服务处理，并返回约定好的数据结果。



### (2-1) 前端工程运行环境

    当前项目中的前端工程是使用vue开发的。需要在操作系统中安装NodeJS环境，提供前端应用的运行部署编译环境。在提供环境成功后，需要通过NodeJS提供的命令，实现前端工程源码的编译，并通过命令提供前端工程编译后的运行环境，启动工程。

在线下载

访问Node中文网，下载环境：http://nodejs.cn/download/

下载对应操作系统的环境安装文件。

##### (2-1-1)     安装Mock.js

前端开发人员通过Mock.js框架模拟服务器端接口。前端项目直接访问Mock.js就可以有数据，不用访问服务端。

安装淘宝镜像：（在Vue讲解中已经安装过了）

npm install -g cnpm --registry=https://registry.npm.taobao.org

使用淘宝镜像安装concurrently，普通安装（npm install -g concurrently）

cnpm install -g concurrently

使用淘宝镜像安装nodemon。nodemon命令作用是负责编译并执行Mock.js

cnpm install -g nodemon

### (2-2) 前端工程部署

本系统中的前端工程，提供的是一个压缩包。livegoods-vue.rar。vueJS开发的前端应用，安装部署非常方便。使用NodeJS提供的命令即可实现。

##### (2-2-1)     解压缩前端工程源码

解压到任意目录中即可。建议路径中不要有中文

##### (2-2-2)    编译前端工程

进入前端工程解压后的源码目录,启动CMD命令行

进入到解压后的根目录。在当前目录地址栏输入cmd后回车，自动命令行后进入当当前目录路径。

也可以直接启动cmd，通过cd 命令进入到项目根目录

编译

输入命令进行编译： cnpm install  或者输入  cnpm  i

再次强调：命令必须在项目根目录执行。

启动

编译成功后，在前端系统源码目录所在位置，输入命令： cnpm start 启动。此命令表示启动时同时把Mock.js也启动开了。如果只希望启动Vue项目，没有Mock.js数据使用cnpm run serve命令。

当前项目中的前端系统，默认使用的是静态服务访问，所以直接启动，所有的功能都可以本地测试。不需要其他的后端系统提供任何的数据和服务支撑。

测试

当前项目的前端系统，默认端口是80。可以通过浏览器访问： http://localhost:80/测试系统是否正常启动。

项目是基于H5的移动端项目。这个项目可以直接在移动端浏览器中打开，也可以内嵌到安卓或IOS的APP中。

浏览器设置





## 三、环境准备

安装好下列软件：所有软件都是安装到Docker中。

    Eureka ： 使用非打包单机版。在本机。聚合项目的子项目。

    Redis:  192.168.8.142

    MongoDB： 192.168.8.142

    Elasticsearch： 192.168.8.142

    FastDFS：192.168.8.142







## 四、项目总体结构

    整个项目使用微服务架构，并使用Spring Cloud作为微服务架构总体实现技术。拆分颗粒度为接口（接口文档一个接口），每个接口对应一个项目。使用Eureka作为注册中心，使用Gateway作为网关，使用Config作为分布式配置中心，使用OpenFeign进行接口通信，使用Hystrix进行服务容灾，搜索使用Elasticsearch提升搜索效率，缓存工具使用Redis，缓存技术使用Spring Cache，数据库使用MongoDB，数据访问技术使用Spring Data，分布式事务处理方案使用Tx-LCN，图片上传下载使用FastDFS.

MongoDB身为NoSQL数据库，又带有索引，本身读取性能就很高，此处可以使用redis作为缓存工具，也可以直接从MongoDB中取数据。在本次项目中使用redis作为缓存工具，Spring Cache作为缓存技术。



## 五、搭建父项目



## 六、搭建Eureka



## 七、实现Banner服务——轮播图片

livegoods_banner

livegoods_commons

livegoods_data_mongodb



## 八、搭建gateway





## 九、热销商品

livegoods_hot_product



## 十、热门推荐服务

livegoods_recommedation





## 十一、实现Elasticsearch数据初始化

livegoods_search





## 十二、使用Spring Security对初始化做认证







## 十三、实现详情接口

livegoods_details





## 十四、Redis

livegoods_data_redis





## 十五、评论

livegoods_comments





## 十六、倒计时

livegoods_buy_action





## 十七、发送验证码





## 十八、登录





## 十九、搭建Rabbitmq发送消息依赖





## 二十、实现预定时消息接收





## 二十一、实现订单创建接口





## 二十二、实现预定成功后发送创建队列消息





## 二十三、实现接收创建订单消息功能







## 二十四、实现订单信息显示功能





## 二十五、修改order集合添加houseID属性





## 二十六、编写评论新增接口





## 二十七、实现评论功能







## 二十八、搭建事务管理器

livegoods_lcn_tm





## 二十九、实现分布式事务
