import React, {Component} from 'react';
import { render } from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
import './study.css';
// import { Router, Route, Link, HashRouter } from 'react-router-dom';
export default class Study extends Component {
    constructor(props) {
        super(props)
        this.state = {
            childText: '学习计划'
        }
    }
    // clickFn(text) {
    //     this.props.pfn.getChildData(text)
    // }
    render() {
        // console.log(this.props)
        return (
            <div className='study'>
                <div className='study-header'>
                    <p className='title'>学习计划</p>
                    <div className='choose'>
                        <span className='block'></span>
                        <span className='change'>调整计划</span>
                    </div>
                </div>
                <div className='contain'>
                    <div className="contain-button">马上开始学习</div>
                </div>
                {/* {this.state.childText} */}
                {/* {this.props.username} */}
                {/* <button onClick={this.clickFn.bind(this, this.state.childText)}>传值</button> */}
            </div>
        )
    }
}