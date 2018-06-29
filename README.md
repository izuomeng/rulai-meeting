# rulai-meeting

一个会议管理平台

## 开始

依赖环境

```
node: >= 6.13
npm: >= 3.10
```

将项目克隆至本地后，切换到项目根目录下，打开终端运行下列指令

```shell
$ npm install cnpm -g
$ cnpm install
$ npm start
```

耐心等待编译过程, 完成后打开浏览器, 输入http://localhost:8000, 就能看到页面了

## 开发规则

### 页面

- 页面全部在 pages 文件夹下，文件夹名称即为对应的路由，比如 pages/user，在浏览器中对应http://localhost:8000/user
- 详情请参考[UmiJS](https://umijs.org/guide/app-structure.html#%E5%A4%8D%E6%9D%82%E5%BA%94%E7%94%A8)

### 组件

- 组件名请以大写字母开头，表述组件的作用，如 Header，StyledButton
- 公有组件写在 src/components 文件夹下，如 Search，这是多个页面都要使用的；私有组件写在对应页面的 components 文件夹下(没有的话自己新建)，作为内部组件使用

### 样式

- 推荐使用 [styled-components](https://www.styled-components.com/docs/basics#getting-started)
- 如果要结合 antd 使用，则一定要将组件用`utils/HOC.js`中的工具函数`InjectClass`包装起来再传入 styled 函数，否则样式不会生效，如

```javascript
import { InjectClass } from 'utils/HOC'
import styled from 'styled-components'
import { Button } from 'antd'

export const StyledButton = styled(InjectClass(Button))`
  width: 100px;
  background-color: green;
`
```

### 提交代码

- 请在自己的分支上书写代码，命名规则为 feature-名字拼音首字母，如 feature-cyf，提交代码时提交到自己的分支，需要 merge 时请提 merge request 到 dev 分支

## 学习资料

- [React](https://reactjs.org/docs/hello-world.html)
- [styled-components](https://www.styled-components.com/docs/basics#getting-started)
- [antd](https://ant.design/components/button-cn/)
