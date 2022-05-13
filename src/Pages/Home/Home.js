import React from 'react';
import Bennar from '../Shared/Bennar/Bennar';
import Items from '../Items/Items';
import Brand from '../Shared/Brand/Brand';
import Display from '../Shared/Display/Display';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <Items></Items>
            <Display></Display>
            <Brand></Brand>
        </div>
    );
};

export default Home;