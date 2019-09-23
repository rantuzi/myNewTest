import React, { Component } from 'react';
import { render } from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
{/* <script src="http://yx-web.nos.netease.com/official/websdk/NIM_Web_SDK_v4.8.0.js"></script> */}
// import { Router, Route, Link, HashRouter } from 'react-router-dom';
export default class Share extends Component {
    constructor(props) {
        super(props);
        this.state = {
            appkey: '',
            account: '',
            token: ''
        }
    }
    connectSDK = () => {
        // const {appkey, account, token} = this.state;
        // NIM.getInstance({
        //     appKey: appkey,
        //     account: account,
        //     token: token,
        //     onconnect: function () {
        //         alert('SDK 连接成功')
        //         // 连接成功后才能发消息
        //         window.nim.sendText({
        //             scene: 'p2p',
        //             to: 'account',
        //             text: 'hello',
        //             done: function sendMsgDone (msg) {
        //             }
        //         })
        //     },
        //     ondisconnect: function (obj) {
        //       console.log('SDK 连接断开', obj)
        //     },
        //     onerror: function (error) {
        //       console.log('SDK 连接失败', error)
        //     }
        // })
    }
    render() {
        return (
            <div className='share'>
                <div onClick={this.connectSDK}>
                    {/* <p>
                        <span>APPKEY:</span>
                        <input  type="text" id="appkey" value="45c6af3c98409b18a84451215d0bdd6e"/>
                    </p>
                    <p>
                        <span>ACCOUNT:</span>
                        <input  type="text" id="account" value="greatcs4"/>
                    </p>
                    <p>
                        <span>TOKEN:</span>
                        <input  type="text"  id="token" value="e10adc3949ba59abbe56e057f20f883e"/>
                    </p>
                    <button id="connect-sdk" onClick='connectSDK'>连接SDK</button> */}
                </div>
            </div>
        )
     }
}