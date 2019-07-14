import React, {Component} from 'react';
import { render } from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
// import { Router, Route, Link, HashRouter } from 'react-router-dom';
export default class Study extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childText: '子组件内容'
        }
    }
    clickFn(text) {
        this.props.pfn.getChildData(text)
    }
    render() {
        
        // console.log(this.props)
        return (
            <div className='study'>
                {this.props.username}
                <button onClick={this.clickFn.bind(this, this.state.childText)}>传值</button>
            </div>
        )
    }
}