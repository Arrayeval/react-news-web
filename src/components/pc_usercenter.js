import React from "react"
import {Row,Col} from 'antd'
import {Link} from "react-router-dom"
import PCHeader from "./pc_header"
import PCFooter from "./pc_footer"
import { Menu, Icon ,Tabs,message,Form,Input,Button,CheckBox,Modal,Card,notification,Upload} from 'antd';
const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;
export default class PCUserCenter extends React.Component{
  constructor(){
    super();
    this.state ={
      previewImage:'',
      previewVisible:false,
      usercomments:''
    }
  }
  render(){
    const props={
      action:'http://newsapi.gugujiankong.com/handler.ashx',
      headers:{
        "Access-Control-Allow-Origin":"*",
      },
      listType:"picture-card",
      defaultFieldList:[
        {
          uid:-1,
          name:'xxx.png',
          state:'done',

        }
      ]
    };
    return(
      <div>
      <PCHeader/>
      <Row>
        <Col span={2}></Col>
        <Col span={20}>
        <Tabs>
         <TabPane tab="我的收藏列表" key="1">   </TabPane>
         <TabPane tab="我的评论列表" key="2">   </TabPane>
         <TabPane tab="头像设置" key="3">
          <div className="clearFix">
            <Upload {...props}>
              <Icon type="plus"/>
              <div className="ant-upload-text">上传照片</div>
            </Upload>
            <Modal visible={this.state.previewVisible} footer={null}
            onCancel={this.handleCancel}>
              <img  alt="预览" src={this.state.previewImage}/>
            </Modal>
          </div>
         </TabPane>
        </Tabs>
        </Col>
      </Row>
      <Col span={2}></Col>
      <PCFooter/>
      </div>
    )
  }
}
