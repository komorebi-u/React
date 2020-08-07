import React, { Component } from 'react'
import './index.css'

export default class Add extends Component {

  handleKeyUp = (event) => {
    const {addTodo} = this.props
    // 连续解构赋值
    const {target:{value:userInput}} = event
    if (event.keyCode === 13) {
      if(!userInput.trim()){
        alert('不能为空')
        return
      }
      // 调用App传过来的addTodo 添加一个todo
      addTodo(userInput.trim())
      event.target.value = ''
    }
  }

  render() {
    return (
      <div className="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" onKeyUp={this.handleKeyUp} />
      </div>
    )
  }
}
