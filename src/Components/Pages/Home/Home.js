import React from 'react';
import Blogs from '../Blogs/Blogs';
import Banner from './Banner/Banner'
import Services from './Services/Services';

const Home = () => {
    return (
        <div className='container'>
            <Banner></Banner>
            <Services></Services>
            <Blogs></Blogs>


        </div>
    );
};

export default Home;