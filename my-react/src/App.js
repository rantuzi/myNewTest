import React, {Component} from 'react';
import { render } from 'react-dom'
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import { Router, Route, Link, HashRouter } from 'react-router-dom';
import Bottom from './bottom/bottom'
import Home from './home/home'
import Study from './study/study'
import Share from './share/share'
import Mine from './mine/mine'
// import logo from './logo.svg';
import './App.css';
const state = {
  showStatus: true
}
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '阿冉',
      propsChild: ''
    }
  }
  getChildData (data) {
    this.setState({
      propsChild: data
    },() => {

    })
  }
  // toChangeStatus = () => {
  //   const { isStatus } = this.state;
  //   this.setState({
  //     isStatus: !isStatus
  //   })
  // }
  render() {
    return (
      <div className="page">
      <HashRouter>
            <div>
                <Route path="/home" component={Home}/>
                <Route path="/study" component={Study}/>
                <Route path="/share" component={Share}/>
                <Route path="/mine" component={Mine}/>
            </div>
        </HashRouter >
        <Study username={this.state.username} pfn={this}></Study>
        <p>{this.state.propsChild}</p>
        {/* <Button>点击传值</Button> */}
      <Bottom></Bottom>
      </div>
    )
  }
} 

