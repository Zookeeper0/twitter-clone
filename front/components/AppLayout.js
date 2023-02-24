import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';

const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

// pages에 있는 index, profile, signup 페이지가 공통적으로 사용할 레이아웃
const AppLayout = ({ children }) => {
    const { isLoggedIn } = useSelector(state => state.user);


    return (
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item key="signup"><Link href="/signup"><a>회원가입</a></Link></Menu.Item>
            </Menu>
            {/* gutter 컬럼 사이의 패딩 간격 */}
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://github.com/eastZoo" target="_blank" rel="noreferrer noopener">Made by eastZoo</a>
                </Col>
            </Row>
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout
