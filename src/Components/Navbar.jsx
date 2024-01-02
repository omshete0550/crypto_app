import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className="logo-container">
            
            <Typography.Title level={2} className='logo'>
                <Link to="/cryptoverse">CryptoVerse</Link>
            </Typography.Title>
            
            <Menu theme='dark'>
              <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
              </Menu.Item >

              <Menu.Item icon={<FundOutlined />}>
                <Link to="/cyrptocurrencies">Cyrptocurrencies</Link>
              </Menu.Item >

              <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
              </Menu.Item >

              <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
              </Menu.Item >
            </Menu>
        </div>
    </div>
  )
}

export default Navbar