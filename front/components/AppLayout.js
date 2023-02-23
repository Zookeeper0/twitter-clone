import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

// pages에 있는 index, profile, signup 페이지가 공통적으로 사용할 레이아웃
const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <Link href="/"><a>노드버드</a></Link>
                <Link href="/profile"><a>프로필</a></Link>
                <Link href="/signup"><a>회원가입</a></Link>
            </div>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout
