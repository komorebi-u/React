import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {

  state = {
    bgColor: 'white',
    isShowBtn: 'none'
  }

  handleChange =(id)=>{
    return (event) => {
      // 连续结构 获取勾选状态
      const {target:{checked}} = event
      // 获取App逐层传递过来的checkTodo
      const {checkTodo} = this.props
      // 调用checkTodo去勾选
      checkTodo(id,checked)
    }
  }

  // 鼠标移动的回调
  handleMouseMove =(flag)=>{
    return () => {
      this.setState({bgColor: flag? '#ddd' : 'white', isShowBtn: flag? 'block':'none'})
    }
  }

  // 删除按钮的回调
  handleDelete = (id,title) => {
    // 获取App逐层传递过来的deleteTodo
    const {deleteTodo} = this.props
    if(confirm(`确定删除 ${title} 吗`)){
      deleteTodo(id)
    }
  }

  render() {
    const {id,title,completed} = this.props
    const {bgColor,isShowBtn} = this.state
    return (
      <li onMouseEnter={this.handleMouseMove(true)} onMouseLeave={this.handleMouseMove(false)} style={{backgroundColor:bgColor}}>
        <label>
          <input type="checkbox" checked={completed} onChange={this.handleChange(id)} />
          <span>{title}</span>
        </label>
        <button onClick={() => this.handleDelete(id,title)} className="btn btn-danger" style={{ display: isShowBtn}}>删除</button>
      </li>
    )
  }
}
