import React from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import Logo from './img/logo.png';
const {Header} = Layout;
class HeaderLayout extends React.Component {
  render () {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo">
              <img src={Logo} width={70} height={60} />
            </div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{lineHeight: '64px'}}
            >
              <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/home">Home</Link></Menu.Item>
              <Menu.Item key="3"><Link to="/Timesheet">Timesheet</Link></Menu.Item>
              <Menu.Item key="4"><Link to="/">logout</Link></Menu.Item>
            </Menu>
          </Header>
        </Layout>
      </div>
    );
  }
}

export default HeaderLayout;
