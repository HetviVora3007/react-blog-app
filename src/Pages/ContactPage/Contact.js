import { React, useEffect } from 'react'
import Navbar from '../../Component/Navbar/Navbar'

import './Contact.css'
import Footer from '../../Component/Footer/Footer'

const Contact = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className='contactpage-maincontainer'>
                <div className='contactpage-subcontainer'>
                    <p className='contactpage-title'>Join the Conversations</p>
                    <p className='contactpage-subtitle'>Get the content you need, just when you need it</p>
                </div>
                <div className='contactpage-form-container'>
                    <div className='firstname-lastname-container'>
                        <div className='firstname'>
                            <label>First name</label>
                            <input type='text' />
                        </div>
                        <div className='lastname'>
                            <label>Last name</label>
                            <input type='text' />
                        </div>
                    </div>
                    <div className='email'>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className='subscribe-button-container'>
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Contact