import React from "react"

import PCNewsBLock from "./pc_news_block"
import PCNewsImageBlock from "./pc_news_image_block"
import carsouel from "../images/carousel_1.png"
import carsoue2 from "../images/carousel_2.png"
import carsoue3 from "../images/carousel_3.png"
import {Row,Col,Tabs,Carousel}  from "antd"
const TabPane =Tabs.TabPane;


export  default class PCNewsContainer extends React.Component{
  render(){
    const settings={
      dots:true,
      infinite:true,
      speed:500,
      slidesToShow:1,
      autoplay:true
    };
    return(
      <div>
        <Row>
          <Col span={2}></Col>
          <Col span={20} className="container">
            <div className="leftContainer">
              <div className="carousel">
                  <Carousel   {...settings}>
                    <div><img src={carsouel}/></div>
                    <div><img src={require('../images/carousel_2.png')}/></div>
                    <div><img src={carsoue3}/></div>
                  </Carousel>
              </div>
              <PCNewsImageBlock count={6} type="guoji" width="400px" cartTitle="国际头条" imageWidth="112px"></PCNewsImageBlock>
            </div>
            <Tabs className="tabs_news">
              <TabPane tab="新闻" key="1">
                <PCNewsBLock count={22} type="top" width="100%"  bordered="false"/>
              </TabPane>
              <TabPane tab="国际" key="2">
                <PCNewsBLock count={22} type="guoji" width="100%"  bordered="false"/>
              </TabPane>
            </Tabs>
            <div>
              <PCNewsImageBlock count={8} type="guonei" width="100%" cartTitle="国内新闻" imageWidth="132px"></PCNewsImageBlock>
              <PCNewsImageBlock count={8} type="yule" width="100%" cartTitle="娱乐头条" imageWidth="132px"></PCNewsImageBlock>
            </div>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>

    )
  }

}
