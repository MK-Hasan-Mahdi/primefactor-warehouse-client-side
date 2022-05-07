import React from 'react';
import ClientFeedback from '../../ClientFeedback/ClientFeedback';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <ClientFeedback></ClientFeedback>
        </div>
    );
};

export default Home;