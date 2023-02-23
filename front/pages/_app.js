import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <title>Twitter</title>
            </Head>
            <Component />
        </>
    );
};

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default App;