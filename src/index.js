//引入React核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//引入“外壳”组件——App
import App from './App'
//引入BrowserRouter/HashRouter
import {BrowserRouter,HashRouter} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>
  // 解决样式丢失的第二种方法  第一种-->修改index引入样式的路径，不要写./  要写/(如果项目部署到服务器上需要使用用('/')绝对路径)
  // <HashRouter><App/></HashRouter>
  ,document.getElementById('root'))