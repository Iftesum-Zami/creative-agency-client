import React from 'react';
import CarouselBody from '../CarouselBody/CarouselBody';
import Feedback from '../Feedback/Feedback';
import FooterArea from '../FooterArea/FooterArea';
import HeaderIcons from '../HeaderIcons/HeaderIcons';
import HomeMain from '../HomeMain/HomeMain';
import Navbar from '../Navbar/Navbar';
import ServiceCards from '../ServiceCards/ServiceCards';
import './home.css';

const Home = () => {
    return (
        <div>
            <div className="home-main pb-5">
                <div className="container">
                    <Navbar></Navbar>
                    <HomeMain></HomeMain>
                </div>
            </div>
            <div className="container">
                <HeaderIcons></HeaderIcons>
                <ServiceCards></ServiceCards>
            </div>
            <CarouselBody></CarouselBody>
            <Feedback></Feedback>
            <FooterArea></FooterArea>
        </div>
    );
};

export default Home;