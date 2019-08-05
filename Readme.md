# element-ui
## 安装
### 必要
```bash
安装 node
npm install vue
npm intall element-ui -S
```
---
## 使用
1. 简单使用 --- demo1
```
引入css
引入js
使用组件
```
2. vue-cli构建项目使用 --- demo2
```
引入css
------------------------
main.js中 
import ElementUI from ' element-ui'
Vue.use(ElementUI)
使用组件
```

## 修改样式
1. 样式覆盖
2. theme-chalk
```
新建一个样式文件，例如 element-variables.scss
/* 改变主题色变量 */
$--color-primary: teal;

/* 改变 icon 字体路径变量，必需 */
$--font-path: '~element-ui/lib/theme-chalk/fonts';

@import "~element-ui/packages/theme-chalk/src/index";
```