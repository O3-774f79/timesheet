import React from 'react';
import 'antd/dist/antd.css';

import {  Form, 
          Icon, 
          Input, 
          Button, 
          Checkbox, 
          Card, 
          Col, 
          Row,
          Alert,
          message,
        } from 'antd';
import {Link, Redirect } from 'react-router-dom';


import axios from 'axios';
const axiosConfig = {
                        withCredentials: true
                          };
const styles = {
   setcenter: {
     display:'flex',
     justifyContent:'center'
   }
}
export default class Login extends React.Component {
  state = {
    username:"",
    password:"",
    error:"",
    
  }
  async componentDidMount () {
   

    
    // try {
    //   await axios.post (
    //     `https://digitalsignature.herokuapp.com/api/Login`,
    //     {
    //       // username: 'nuttaphon@leaderplanet.co.th',
    //       // password: 'Admin',
    //       username: 'admin',
    //       password: 'admin',
    //     },
    //     axiosConfig
    //   );
    //   }catch (e) {
    //     console.log (e);
    //   }
    }
handleChange = event => {
  this.setState({
    [event.target.name]: event.target.value
  });

}

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.username)
    console.log(this.state.password)

    axios.post (
        `/Login`,
        {
          // username: 'nuttaphon@leaderplanet.co.th',
          // password: 'Admin',
          username: this.state.username,
          password: this.state.password,
        },
        axiosConfig
        )
        .then((result)=>{
          console.log(result)
          this.props.history.push('/timesheet')
        })
        .catch(error => {
          this.setState({error:"Username or Password is incorrect"})
        })
        

    // axios
    //     .get(`https://digitalsignature.herokuapp.com/api/Login`)
    //       .then((result)=>{
    //         this.setState(result.data[1]);
    //           console.log(result.data[1])
    //           result
    //         })
    //       })
    //         .catch(e){
    //           console.log(e);
    //         }
       
    
  }

  render () {
    
    return (
      <div classname="login-box" style={styles.setcenter}>
          
           <Row type="flex" align="middle" style={{marginTop:"100px"}}  >
         
             <Col className="login-box-body">
           <Card 
        title="Leader Planet Timesheet"
        // style={{width:"100%",height:"100%"}} 
        type="flex" justify="center" align="middle" >
        
        <Form onSubmit={this.handleSubmit} className="login-form" style={{width:"80%",height:"100%",textAlign:'center'}}>
        <Form.Item>
          {/* <Alert 
          
          message={this.state.error} 
          type="error" 
          showIcon /> */}
          <span style={{color:"red"}}>{this.state.error}</span>
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />,
          )} */}
          <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              name="username"
              onChange={this.handleChange}
            />
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )} */}
           <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)',textAlign:'center'}} />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
            />
        </Form.Item>
        <Form.Item>
          {/* {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)} */}
          
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            {/* Forgot password */}
          </a>

          <Button type="primary" 
          htmlType="submit" 
          className="login-form-button" 
          onClick={this.handleSubmit}
          >
            {/* <Link to="/timesheet">Log in</Link> */}
            Log in
          </Button>
          Or <Link to="/register">register now!</Link>
        </Form.Item>
      </Form>
     
      </Card>
      </Col>
     
      </Row>
      {/* <p>Error:{this.state.error}</p>
      <p>username:{this.state.username}</p>
      <p>password:{this.state.password}</p> */}
      
      </div>
    );
  }
}
