import React, {Component} from 'react';
import { render } from 'react-dom'
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { Router, Route, Link, HashRouter } from 'react-router-dom';
import Bottom from './bottom/bottom'
import Home from './home/home'
// import logo from './logo.svg';
import './App.css';
const state = {
  showStatus: true
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStatus: false,
      userList: [
        {
          name: 'af',
          id: 1
        }
      ]
    }
  }
  toChangeStatus = () => {
    const { isStatus } = this.state;
    this.setState({
      isStatus: !isStatus
    })
  }
  render() {
    return (
      <div className="page">
      <HashRouter>
            <div>
                <Route path="/home" component={Home}/>
            </div>
        </HashRouter >
      <Bottom></Bottom>
      </div>
    )
  }
} 

