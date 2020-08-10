import React, { Component } from 'react'
import MyNavList from '../../components/MyNavLink'
import News from '../News'
import Message from '../Message'
import {Switch,Route,Redirect} from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavList to="/home/news">News</MyNavList>
            </li>
            <li>
              <MyNavList to="/home/message">Message</MyNavList>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Redirect to="/home/news"/>
          </Switch>
        </div>
      </div>
    )
  }
}
