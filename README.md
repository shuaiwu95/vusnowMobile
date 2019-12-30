# vusnowMobile
## 一款基于vue架构的移动端框架
### 该框架提供项目的基本架构 包括路由、接口模型、常用组件、路由缓存、路由权限 等设计

#### 路由
```
{
    path: '/',
    name: 'Name',
    component: ComponentName,
    meta: {
        isCache: true // 该路由是否需要启动缓存机制
    }
}
```
#### 接口模型 $api
```
// 文件地址 src>api>modules 下创建自定义js文件
// 文件内定义接口模型
export const systemApi = {
  system: [
    {
      name: 'loginIn', // 接口模型名称
      method: 'POST', // 请求类型
      path: '/loginIn/getData', // 打包后请求路径
      mockPath: '/loginIn/getData', // 开发环境下的请求路径
      params: {
        role: []
      },
      desc: '用户登录'
    }
  ]
}
// 在.vue文件中使用此接口
this.$api['system.loginIn']({
    'user': 'admin',
    'psw': '123456'
}).then(res => {
    console.log(res)
})
```
#### 常用组件
```
待开发
```
#### 路由权限
```
待开发
```

