import React, { Component } from 'react'
import axios from 'axios'
import PubSub from 'pubsub-js'

export default class Search extends Component {

  state = {
    keyWord: '' // 用户输入的关键字
  }

  // 向state中保存用户输入的关键字
  saveKeyWord = (event) =>{
    // 获取用户的输入
    const {target:{value:keyWord}} = event
    // 维护进状态
    this.setState({keyWord})
  }

  // 点击搜索的回调
  handleSearch = () =>{
    // 发布消息
    // PubSub.publish('MY TOPIC','123')
    // 获取用户的输入
    const {keyWord} = this.state
    // const {updateAppState} = this.props
    // 请求之前展示loading界面
    // updateAppState({isLoading:true,isFirst:false})
    PubSub.publish('UPDATE_LIST_STATE',{isLoading:true,isFirst:false})
    // 发起请求
    axios.get(`/api/search/users?q=${keyWord}`).then(
      // 请求成功后，存储用户列表，不显示loading
      response => {
        // updateAppState({users:response.data.items,isLoading:false})
        PubSub.publish('UPDATE_LIST_STATE',{users:response.data.items,isLoading:false})
      },
      err => {
        // updateAppState({error:err.message,isLoading:false})
        PubSub.publish('UPDATE_LIST_STATE',{error:err.message,isLoading:false})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.handleSearch}>Search</button>
        </div>
      </section>
    )
  }
}
