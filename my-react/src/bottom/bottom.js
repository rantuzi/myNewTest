import React, {Component} from 'react';
import { render } from 'react-dom'
import { Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import './bottom.css';
import { Router, Route, Link, HashRouter, Redirect } from 'react-router-dom';
export default class Bottom extends Component {
    render() {
        return (
            <div className='footer'>
                 <HashRouter>
                    <div className='footer-contain'>
                        <Redirect path="/" exact={true} to="/home" />
                        <p><Link to='/home'>首页</Link></p>
                        <p><Link to='/study'>学习计划</Link></p>
                        <p><Link to='/share'>分享圈</Link></p>
                        <p><Link to='/mine'>我的</Link></p>
                    </div>
                 </HashRouter>
            </div>
        )
    }
}