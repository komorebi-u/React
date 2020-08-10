import React, { Component } from 'react'
// 引入About路由组件
import About from './pages/About'
// 引入Home路由组件
import Home from './pages/Home'
// 引入Demo路由组件
import Demo from './pages/Demo'
// 引入Title普通组件===>经由withRouter加工后
import Title from './components/Title'
// NavLink->路由高亮样式 Switch->多个路由提高匹配效率(匹配上了，后边不再运行) Route->路由组件 Redirect->路由重定向
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
// 引入自定义的MyNavLink组件
import MyNavLink from './components/MyNavLink'
import Config from './config/route'
// 引入装饰器----->执行一次
import './decorator'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<Title/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/*<a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a>*/}

							{/* react中的写法 replace模式不会留下历史记录*/}
							<MyNavLink to="/about" replace>About</MyNavLink>
							<MyNavLink to="/home" replace>Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由 */}
								<Switch>
									{/* exact:Boolean 精准匹配 */}
									<Route path="/about" exact component={About} />
									<Route path="/about/demo" component={Demo} />
									<Route path="/home" component={Home} />
									{
										/* Config.map((route)=>{
											return <Route path={route.path} component={route.component} />
										}) */
									}
									{/* 路由重定向 */}
									<Redirect to="/about"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
