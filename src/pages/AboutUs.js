import React from 'react';
import AboutSection from "../components/AboutSection.js";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import {motion} from "framer-motion";
import {pageAnimation} from "../animation";
import ScrollTop from "../components/ScrollTop";

const AboutUs = () => {
    return (
        <motion.div variants={pageAnimation} initial={'hidden'} animate={'show'} exit={'exit'}>
            <ScrollTop/>
            <AboutSection/>
            <ServicesSection/>
            <FaqSection/>
        </motion.div>
    );
}

export default AboutUs;