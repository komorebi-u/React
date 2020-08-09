import React, { Component } from 'react'
// 引入About路由组件
import About from './pages/About'
// 引入Home路由组件
import Home from './pages/Home'
// 引入Demo路由组件
import Demo from './pages/Demo'
// NavLink->路由高亮样式 Switch->多个路由提高匹配效率 Route->路由组件 Redirect->路由重定向
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Config from './config/route'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<h2>React Router Demo</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/*<a className="list-group-item active" href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a>*/}

							{/* react中的写法 */}
							<NavLink className="list-group-item" to="/about">About</NavLink>
							<NavLink className="list-group-item" to="/home">Home</NavLink>
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
