import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import { Col, Input, Menu, Row } from 'antd';

const dummy = {
    nickname: '제로초',
    Post: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
};

// pages에 있는 index, profile, signup 페이지가 공통적으로 사용할 레이아웃
const AppLayout = ({ children }) => {
    return (
        <div>
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
