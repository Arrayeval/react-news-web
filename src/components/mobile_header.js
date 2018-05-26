import React from "react"
import {Row,Col} from 'antd'
import {Link} from "react-router-dom"

import logo from "../images/logo_word.png"
import { Menu, Icon ,Tabs,message,Form,Input,Button,CheckBox,Modal} from 'antd';
const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

class MobileHeader extends React.Component{
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
  handleClick(){
    console.log("ddd");
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
  login(){
    this.setModalVisible(true);
  };
  render(){
     
    let {getFieldProps} =this.props.form;
    let userShow=this.state.hasLogined ? <Link><Icon type="inbox"/></Link>:<Icon type="setting" onClick={this.login.bind(this)}/>;
    return(
      <div id="mobileHeader">
        <header>
          <img src={logo} alt="logoMobile" width="50" height="50"/>
          <span>ReactNews</span>
          {userShow}
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
        </header>
      </div>
    )
  }
}

export default MobileHeader =Form.create()(MobileHeader);
