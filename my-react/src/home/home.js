
import React, {Component} from 'react';
import { render } from 'react-dom'
import { SearchBar, Button, WhiteSpace, WingBlank, Carousel } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import axios from 'axios';
import './home.css';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            banners: [],
            imgHeight: 200,
            iconData: [],
            inputText: ''
        };
    }
    componentDidMount () {
        this.getData();
        this.getIcon();
    }
    getData = ()=>{
        let url ='http://m-test.fxyishu.com/api/v2/banner/getBanners?show_in=103';
        axios.get(url)
            .then((response)=> {
                //请求成功
                if (response.data.code == 0) {
                    const { banners } = this.state;
                    this.setState({
                        banners: response.data.data.banners
                    });
                    console.log('111',response.data.data.banners)
                }
            })
            .catch(function (error) {
                //请求失败
                console.log(error);
            });
    }
    getIcon = () => {
        let url = 'http://m-test.fxyishu.com/api/v2/moduleIcon/getModuleIcons';
        axios.get(url)
            .then((response)=> {
                //请求成功
                    const { iconData } = this.state;
                    this.setState({
                        iconData: response.data.data.module_icons,
                        inputText: response.data.data.search_text
                    });
                    console.log('222',response.data.data.module_icons)
            })
            .catch(function (error) {
                //请求失败
                console.log(error);
            });
    }
    render() {
        // const {banners} = this.state;
        // console.log('000',banners)
        return (
            <div className='home'>
                <WingBlank><div className="sub-title"></div></WingBlank>
                    <SearchBar placeholder={this.state.inputText} maxLength={8} />
                <WhiteSpace />
                <WingBlank>
                    <Carousel
                        autoplay={false}
                        infinite
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                        >
                        {this.state.banners.map(val => (
                            <a
                            key={val.banner_id}
                            href={val.site_url}
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                            <img
                                key={val.banner_id}
                                src={val.img}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                // fire window resize event to change height
                                window.dispatchEvent(new Event('resize'));
                                this.setState({ imgHeight: 'auto' });
                                }}
                            />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <WingBlank>
                    <ul className='icon-ul'>
                        {this.state.iconData.map(val => (
                            <li key={val.icon_id} className='icon-li'>
                                 <img key={val.iconId} src={val.icon_url} className='icon-img'/>
                                <span  key={val.iconId} className='icon-title'>{val.title}</span>
                            </li>
                        ))}
                        
                    </ul>
                </WingBlank>
            </div>
        )
    }
}
