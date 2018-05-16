import React from "react"
import {Row,Col} from 'antd'
import {Link} from "react-router-dom"

import  logo from "../images/logo_sub.png"
import { Menu, Icon ,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class PCHeader extends React.Component{
constructor(props){
  super(props),
  this.state={
    current:'toutiao',
    modalVisible:false,
    action:"login",
    hasLogined:'',
    userNickName:'',
    userId:0
  }
}
setModalVisible(value){
  this.setState({modalVisible:value});
}
handleClick(e){
  if(e.key=="register"){
    this.setState({current:"register"});
    this.setModalVisible(true);
  }
  else{
    this.setState({current:e.key});
  }
}
handleSubmit(e){
  //页面开始向api 提交
  e.preventDefault();
  var myFetchOptions={
    method:'GET'
  };
  var formData = this.props.form.getFieldsValue();
  fetch("http://newsapi.gugujiankong.com/Handler.ashx?action=register&r_userName="+formData.r_userName+"&r_password="+formData.r_password+"&r_confirmPassword="+formData.r_confirmPassword,myFetchOptions)
  .then(response=>response.json()).then(json=>{
  			this.setState({userNickName:json.NickUserName,userid:json.UserId});
  		});
  		message.success("请求成功！");
  		this.setModalVisible(false);
}
render(){
  let {getFieldProps} =this.props.form;
  const userShow = this.state.hasLogined
  ?<Menu.Item key="loginout" className="register">
    <Button type="primary" htmlType="button">{this.state.userNickName}</Button>

    <Link target="_blank">
      <Button type="dashed" htmlType="button"> 个人中心</Button>
    </Link>
    &nbsp;&nbsp
    <Button type="ghost" htmlType="button">退出</Button>
   </Menu.Item>
   :
   <Menu.Item key="register" className="register">
    <Icon type="appstore"/>注册/登陆
   </Menu.Item>
  return(
    <header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
          <a   className="logo">
            <img src={logo} alt="logo"/>
            <span>ReactNews</span>
          </a>
        </Col>
        <Col span={16}>
          <Menu mode="horizontal"
                selectedKeys={[this.state.current]}
                onClick={this.handleClick.bind(this)}
                >
            <Menu.Item key="toutiao">
              <Icon type="appstore"/>头条
            </Menu.Item>
            <Menu.Item key="shehui">
              <Icon type="appstore"/>社会
            </Menu.Item>
            <Menu.Item key="guonei">
              <Icon type="appstore"/>国内
            </Menu.Item>
            <Menu.Item key="guoji">
              <Icon type="appstore"/>国际
            </Menu.Item>
            <Menu.Item key="yuele">
              <Icon type="appstore"/>娱乐
            </Menu.Item>
            <Menu.Item key="keji">
              <Icon type="appstore"/>科技
            </Menu.Item>
            <Menu.Item key="shishang">
              <Icon type="appstore"/>时尚
            </Menu.Item>
            {userShow}
          </Menu>

          <Modal title="用户中心" width="500px" wrapClassName="vertical-center-modal" visible={this.state.modalVisible}
            onCancel={()=>this.setModalVisible(false)}
            onOk ={()=>this.setModalVisible(false)} okText="关闭">
              <Tabs type="card">
                <TabPane tab="注册" key="2">
                  <Form  onSubmit={this.handleSubmit.bind(this)}>
                    <FormItem label="账户">
                      <Input placeholder="输入你的账号" {...getFieldProps("r_userName")}/>
                    </FormItem>
                    <FormItem label="密码">
                      <Input  type="password" placeholder="请输入你的密码" {...getFieldProps("r_password")}/>
                    </FormItem>
                    <FormItem label="确认密码">
                      <Input type="password" placeholder="请再次输入你的密码" {...getFieldProps("r_confirmPassword")}/>
                    </FormItem>
                    <Button type="primary" htmlType="submit">注册</Button>
                  </Form>
                </TabPane>
              </Tabs>
          </Modal>
        </Col>
        <Col span={2}></Col>
      </Row>
    </header>
  )
}
}


export default PCHeader =Form.create()(PCHeader);
