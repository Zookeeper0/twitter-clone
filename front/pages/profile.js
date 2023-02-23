import React from 'react'
import AppLayout from '../components/AppLayout'
import Head from 'next/head';

const profile = () => {
    return (
        <>
            <Head>
                <title>내 프로필 | Twitter</title>
            </Head>
            <AppLayout>
                Hello profile!!
            </AppLayout>
        </>

    )
}

export default profile
