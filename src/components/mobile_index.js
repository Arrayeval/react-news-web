import React from "react"
import MobileHeader from "./mobile_header"
import MobileFooter from "./mobile_footer"
import "../css/mobile.css";
import MonlieList from "./mobile_list"
import carsouel from "../images/carousel_1.png"
import carsoue2 from "../images/carousel_2.png"
import carsoue3 from "../images/carousel_3.png"

import {Row,Col,Tabs,Carousel}  from "antd"
const TabPane =Tabs.TabPane;
export default class MobileIndex extends React.Component{
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
        <MobileHeader></MobileHeader>
        <Tabs  defaultActiveKey="1">
          <TabPane tab="头条" key="1">
            <div className="carousel">
                <Carousel   {...settings}>
                  <div><img src={carsouel}/></div>
                  <div><img src={require('../images/carousel_2.png')}/></div>
                  <div><img src={carsoue3}/></div>
                </Carousel>
            </div>
            <MonlieList count={20} type="top"></MonlieList>
          </TabPane>
          <TabPane tab="社会" key="2"  type="shehui">
            <MonlieList count={20} type="shehui"></MonlieList>
          </TabPane>
          <TabPane tab="国内" key="3">
            <MonlieList count={20} type="guonei"></MonlieList>
          </TabPane>
          <TabPane tab="国际" key="4">
            <MonlieList count={20} type="guoji"></MonlieList>
          </TabPane>
          <TabPane tab="娱乐" key="5"  type="yule">
            <MonlieList count={20}  type="yule"></MonlieList>
          </TabPane>
        </Tabs>
        <MobileFooter></MobileFooter>
      </div>
    )
  }
}
