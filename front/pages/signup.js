import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

const signup = () => {
    return (
        <>
            <Head>
                <title>회원가입 | Twitter</title>
            </Head>
            <AppLayout>
                Hello signup!!
            </AppLayout>
        </>
    )
}

export default signup
