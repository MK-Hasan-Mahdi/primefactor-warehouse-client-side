import React from 'react';
import OurServices from '../../OurServices/OurServices';
import TeamMembers from '../../TeamMembers/TeamMembers';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventories></Inventories>
            <TeamMembers></TeamMembers>
            <OurServices></OurServices>
        </div>
    );
};

export default Home;