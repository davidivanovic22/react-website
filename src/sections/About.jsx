import React from 'react';
import "../styles/sections/About.scss";
import Title from "../components/Title";
import Button from "../components/Button";
import Card from "../components/Card";
import {HiLightBulb} from "react-icons/hi";
import {BsCalendarFill} from "react-icons/bs";
import {BiSupport} from "react-icons/bi";
import {SiGooglemessages} from "react-icons/si";
import {reveal} from "../Animation";
import {motion} from "framer-motion";
import {useScroll} from "../components/useScroll";

const About = () => {
    const [element, controls] = useScroll();

    return (
        <div className="about-container" id="about" ref={element}>
            <div className="container">
                <motion.div className="details"
                            animate={controls}
                            variants={reveal}
                            transition={{delay: .2, stiffness: 300}}
                >
                    <Title title="About CRYO" color="blue"/>
                    <p>
                        We Believe that everyone deserves to have a website or online store.
                        Innovation and simplicity make us happy. Our mission is to help
                        people achieve what they have passionate about it.
                    </p>
                    <p>
                        We are excited to simplify SEO for everyone through software,
                        education, or cimmunity.
                    </p>
                    <Button content="Why cryo?"/>
                </motion.div>
                <div className="cards" ref={element}>
                    <Card title="Innovative Ideas" logo={<HiLightBulb/>} animateCustom={controls}/>
                    <Card title="Planning" logo={<BsCalendarFill/>} animateCustom={controls}/>
                    <Card title="Communication" logo={<BiSupport/>} animateCustom={controls}/>
                    <Card title="24 * 7 Support" logo={<SiGooglemessages/>} animateCustom={controls}/>
                </div>
            </div>
        </div>
    );
};

export default About;
