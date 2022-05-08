import React from 'react';
import ClientsOur from '../../ClientsOur/ClientsOur';
import TeamMembers from '../../TeamMembers/TeamMembers';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <TeamMembers></TeamMembers>
            <ClientsOur></ClientsOur>
        </div>
    );
};

export default Home;