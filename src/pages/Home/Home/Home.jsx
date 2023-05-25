import React from 'react';
import Header from '../../../sheared/Header/Header';
import HomeBannar from '../HomeBannar/HomeBannar';
import OrderOnlineSec from '../OrderOnline/OrderOnlineSec';
import AboutBistro from '../AboutBistro/AboutBistro';
import CallusSec from '../CallusSec/CallusSec';
import Features from '../Features/Features';
import PopularMenu from '../PopularMenu/PopularMenu';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Testimonals from '../Testimonals/Testimonals';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>{"Home | BistroBoss"}</title>
            </Helmet>
            <HomeBannar/>
            <OrderOnlineSec></OrderOnlineSec>
            <AboutBistro></AboutBistro>
            <PopularMenu></PopularMenu>
            <CallusSec></CallusSec>
            <ChefRecommends></ChefRecommends>
            <Features></Features>
            <Testimonals></Testimonals>
        </div>
    );
};

export default Home;