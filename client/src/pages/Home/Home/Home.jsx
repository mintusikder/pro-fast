import React from 'react';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import LogoSlider from '../LogoSlider/LogoSlider';

const Home = () => {
    return (
        <div className='text-primary'>
            <Banner ></Banner>
            <Services></Services>
            <LogoSlider></LogoSlider>
        </div>
    );
};

export default Home;