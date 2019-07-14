import React, {Component} from 'react';
import { render } from 'react-dom'
import 'antd-mobile/dist/antd-mobile.css';
export default class Mine extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='mine'>
                我的
            </div>
        )
    }
}