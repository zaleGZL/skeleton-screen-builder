# Skeleton-Screen-Builder

### 手写骨架屏辅助制作工具

该工具能够方面的管理和手写骨架屏。

该工具具备以下功能：

- [x] 模板快速生成
- [x] HTML 和 CSS 压缩和类名替换
- [x] 一键查看 HTML 和 CSS

---

手写骨架屏相比于自动生成骨架屏(业界有团队实现了)效率要低些(其实写一个骨架屏用不了多久的)，但是手写骨架屏相比于自动生成骨架屏有以下优势：

- 能够保证 HTML 和 CSS 的体积最小
  
    通常自动生成的方案是要基于页面真正内容的 HTML 和 CSS 来进行修改，所以势必会存在一些无意义的 HTML 和 CSS。

- 较方便的能够进行一些定制化的样式

    比如页面的顶部导航条，其实完全可以将真正的导航条，包括颜色、文字等等完全复刻上去。但是换成自动生成方案，机器是无法知道哪些内容是可以保留的，依然需要后期手动修改。

### 使用

```bash
# 下载项目到本地
git clone https://github.com/zaleGZL/skeleton-screen-builder.git

# 安装依赖包
yarn

# 创建模板
yarn run ske 参数一 参数二

# eg: yarn run ske SkeletonTemplate st
#
# 参数一：骨架屏名称(驼峰式命名 如 MainPage)
# 参数二：CSS前缀(需要保证在该项目里面是唯一的，1-3个字母组成，如 mp)
```

此时在 `src` 目录就生成了对应的组件。

![image-20180914200610747](http://p3ek8rd7p.bkt.clouddn.com/2018-09-14-120610.png)

打开 `src` 目录下的 `App.js` 文件，填写骨架屏基本信息。

![image-20180914201855188](http://p3ek8rd7p.bkt.clouddn.com/2018-09-14-121855.png)

```javascript
import SkeletonTemplate from './skeletonTemplate'; // 导入该骨架屏

const skeletonPage = [
    {
        name: 'SkeletonTemplate', // 骨架屏的名称，用于 url 显示的，使用组件的名称即可
        label: '骨架屏模板', // 在页面上显示的骨架屏的名称
        cssPrefix: 'ske-st-', // CSS 前缀，在组件目录的 index.css 中查看
        component: SkeletonTemplate // 引入组件
    },
    ...
]
```

执行 `yarn run start`，打开 [http://localhost:3000/](http://localhost:3000/)，点击进入控制台(或按下 Enter 键)。

在这里可以看到压缩和转换后的 HTML 和 CSS 以及它们的体积大小。

![image-20180914203652006](http://p3ek8rd7p.bkt.clouddn.com/2018-09-14-123652.png)



#### 修改 HTML 和 CSS

打开 skeletonTemplate 目录下的 index.js，在这里修改骨架屏的 html 内容。

![image-20180914201217394](http://p3ek8rd7p.bkt.clouddn.com/2018-09-14-121217.png)

打开 skeletonTemplate 目录下的 style.css ，在这里写骨架屏的样式。

注意所有样式都需要使用 CSS 类选择器，并且必须要带上唯一的前缀，如下面的 `ske-st-`。(该前缀是 'ske-' 加上刚刚创建骨架屏模板时输入的 CSS 前缀)。

![image-20180914201346192](http://p3ek8rd7p.bkt.clouddn.com/2018-09-14-121346.png)
