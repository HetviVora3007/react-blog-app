import { React, useEffect } from 'react'

import './About.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'
import aboutPageImage from '../../Assests/aboutPageImage.webp'

const About = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className='aboutpage-maincontainer'>
                <div className='aboutpage-image-container'>
                    <img src={aboutPageImage} />
                </div>
                <div className='aboutpage-content'>
                    <div className='aboutpage-content-subcontainer'>
                        <p className='aboutpage-title-container'>Hi! I'm Hetvi,</p>
                        <p className='aboutpage-containt-title'>A mental health advocate & blogger </p>
                        <p className='aboutpage-containt'>I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.</p>
                        <p className='aboutpage-containt'>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. </p>
                        <p className='aboutpage-containt'>At Wix we're passionate about making templates that allow you to build fabulous websites and it's all thanks to the support and feedback from users like you! Keep up to date with New Releases and what's Coming Soon in Wix ellaneous in Support. Feel free to tell us what you think and give us feedback in the Wix Forum. If you'd like to benefit from a professional designer's touch, head to the Wix Arena and connect with one of our Wix Pro designers. Or if you need more help you can simply type your questions into the Support Forum and get instant answers. To keep up to date with everything Wix, including tips and things we think are cool, just head to the Wix Blog!</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About