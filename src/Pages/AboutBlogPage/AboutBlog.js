import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import './AboutBlog.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const AboutBlog = (props) => {

    const [Data, setData] = useState({})
    const params = useParams()

    useEffect(() => {
        const data = props.blogData
        const obj = data.filter(d => (d._id) == (params.id))
        setData(obj[0])
        console.log(obj[0])
    }, [])

    return (
        <>
            <Navbar />
            <div className='aboutblogpage-maincontainer'>
                <div className='aboutblogpage-subcontainer'>
                    <p className='aboutblogpage-blog-title'>{Data.blog_title}</p>
                    <div className='aboutblog-image-container'><img src={Data.image_url} /></div>
                    <p className='aboutblogpage-blog-description'>{Data.description}</p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default AboutBlog