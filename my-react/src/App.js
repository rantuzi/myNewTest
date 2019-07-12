import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css'; 
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
        },
        {
          name: 'af12',
          id: 2
        },{
          name: 'af3',
          id: 3
        },{
          name: 'af4',
          id: 4
        },{
          name: 'af5',
          id: 5
        },{
          name: 'af6',
          id: 6
        },
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
    const { isStatus, userList } = this.state;
    return (
      <div className="page">
        <Button onClick={this.toChangeStatus}>{isStatus ? '显示': '隐藏'}</Button>
        <p>{isStatus ? '显示': '隐藏'}</p>
        <ul>
          {
            userList.map((item) => {
              return (
                <li key={item.id}>{item.name}</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
} 

