import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {

  // 全选按钮
  handleCheckAll = (event) => {
    const {target:{checked}} = event
    this.props.checkAll(checked)
  }

  // 清除所有已完成
  clearAllCompleted =() =>{
    const {clearAllCompleted} = this.props
    confirm(`确定清除所有已完成的吗`) && clearAllCompleted()
  }

  render() {
    const {todos} = this.props
    // 计算总数
    const total = todos.length
    // 计算已完成
    let completedCount = todos.reduce((pre,todo)=>{return pre + (todo.completed?1:0)},0)
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={total===completedCount && total>0} onChange={this.handleCheckAll} />
        </label>
        <span>
          <span>已完成{completedCount}</span> / 全部{total}
						</span>
        <button className="btn btn-danger" style={{display:completedCount>0?'block':'none'}} onClick={this.clearAllCompleted}>清除已完成任务</button>
      </div>
    )
  }
}
