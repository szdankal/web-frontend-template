# dankal-mobile-template

## 1.介绍
该项目为目前移动端开发模板,主要基于Vue.js和Nuxt.js的服务器+客户端同构应用模式,解决了目前单页面应用不支持服务器端渲染的缺点。

## 2.项目架构目录说明

```cmd

├─assets 
│  ├─images   #存放图片资源
│  ├─jslibs   #存放个人或第三方类库资源
│  └─styles   #存放样式文件
├─api          #网络层
├─components  #存放可复用的组件
├─configs     #存放全局的配置文件
├─layouts     #nuxt.js定义默认模板及错误页的文件夹 
├─pages       #存放Vue页面
│  └─index
├─plugins     #存放拓展插件文件夹
├─server      #服务端相关代码
│  └─middleware #中间件
├─static        #不需要参与打包的资源文件夹
└─store         #Vuex相关


```
## 3.引用的第三方插件

| 组件名称        | github地址           | npm地址  |
| ------------- |:-------------:| -----:|
|vue-awesome-swiper     | https://github.com/surmon-china/vue-awesome-swiper | https://nodei.co/npm/vue-awesome-swiper |


## 4.项目重大需求变更历史(影响到原来模块而重构的)

| 功能名称        | 所属模块           | 备注  |
| ------------- |:-------------:| -----:|
|   微信支付       |    支付模块    | 由于客户没有备案域名，需求上删除了该模块

## 4.注意事项

 由于是基于服务器+客户端渲染模式,部分不支持服务器渲染的第三方插件在引用时会遇到Window或者Document is not defined该类型的报错

 ```javascript 
  //之前SPA模式引入是这样的
 import { swiper, swiperSlide } from 'vue-awesome-swiper'

//需更改成

let swiper,swiperSlide
    if(process.browser){
        swiper=require('vue-awesome-swiper').default.swiper
        swiperSlide=require('vue-awesome-swiper').default.swiperSlide
    }
 ```
