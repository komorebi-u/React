//引入react核心库
import React, { Component } from 'react';
import List from './components/List'
import Search from './components/Search'

export default class App extends Component {

	state = {
		isFirst: true, // 标识是否第一次打开
		isLoading: false, // 标识是否处于加载中
		error: '', // 错误信息
		users: [], // 用户列表
	}

	/**此方法用于更新App的状态
	 * @param {*} obj
	 */
	updateAppState =(obj) => {
		this.setState({...obj})
	}

	render(){
		return (
			<div className="container">
				<Search updateAppState={this.updateAppState}/>
				<List {...this.state}/>
			</div>
		)
	}
}