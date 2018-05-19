import React from "react"

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
                    <div><img src="http://cms-bucket.nosdn.127.net/56354f1960c54343b403a1b8f329062f20180214103710.png?imageView&thumbnail=600y300"/></div>
                  </Carousel>
              </div>
            </div>

          </Col>
          <Col span={2}></Col>
        </Row>
      </div>

    )
  }

}
