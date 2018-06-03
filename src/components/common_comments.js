import React from "react"
import {Row,Col} from 'antd'
import {Link} from "react-router-dom"

import logo from "../images/logo_word.png"
import { Menu, Icon ,Tabs,message,Form,Input,Button,CheckBox,Modal,Card,notification} from 'antd';
const FormItem =Form.Item;
const SubMenu =Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

 class CommonComments extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      comments:''
    };
  };
  handleSubmit (e){
    e.preventDefault()
    var myFetchOptions ={
      method:'GET'
    };
    var formdata = this.props.form.getFieldsValue();
    let url = "http://newsapi.gugujiankong.com/Handler.axhx?action=comment&userid="+localStorage.userId+"&uniquekey="+this.props.uniquekey+"&comment="+formdata.remark;
    fetch(url,myFetchOptions).then(response=>response.json()).then(json=>{
      // 刷新页面
      this.componentDidMount()
    }).catch((err)=>console.log(err))
  };
  addUserCollection(){
    notification['success']({
      message: 'ReactNews提醒',
      description: '收藏文章成功',
    });
    /*
     var myFetchOptions ={
       metod:"GET"
     };
     var url="http://newsapi.gugujiankong.com/Handler.ashx?action=uc&userid="+localStorage.userid+"&uniquekey="+this.props.match.uniquekey;
     fetch(url,myFetchOptions).then(response => response.json()).then(json=>{
       // 收藏成功，提醒
       notification['success']({
         message: 'ReactNews提醒',
         description: '收藏文章成功',
       });
     })
     */
  };
  componentDidMount(){
    var myFetchOptions ={
      method:'GET'
    };
    let url = "http://newsapi.gugujiankong.com/Handler.ashx??action=getnewsitem&uniquekey="+this.props.uniquekey;
    fetch(url,myFetchOptions).then(response=>response.json()).then(json=>{this.setState({comments:json});}).catch((err)=>console.log(err));
  };
  render(){
    let {getFieldProps} = this.props.form
    const {comments} =this.state
    const commentList = comments.length?
    comments.map((comment,index)=>{
      <Card key={index} title={comment.UserName} extra={<a href="#"> 发布与 {comment.datetime}</a>}>
        <p>
          {comment.Comments}
        </p>
      </Card>
    }): '没有加载到任何数据'
    return(
      <div className="comment">
       <Row>
        <Col span={24}>
        {commentList}
          <Form onSubmit={this.handleSubmit.bind(this)}>
           <FormItem label="你的评论">
            <Input type="textarea" placeholder="随便写" {...getFieldProps('remark',{initiaValue:''})}/>
           </FormItem>
           <Button type="primary" htmlType="submit"> 提交评论</Button>
           &nbsp;&nbsp;
           <Button type="primary" htmlType="button" onClick={this.addUserCollection.bind(this)}>收藏文章</Button>
          </Form>
        </Col>
       </Row>
      </div>
    )
  };
}

export default CommonComments =Form.create()(CommonComments);
