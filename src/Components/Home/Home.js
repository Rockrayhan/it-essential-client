import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Services from '../Services/Services';
import AboutUs from './AboutUs';
import Appointment from './Appointment';
const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <AboutUs></AboutUs>
            <Appointment></Appointment>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;