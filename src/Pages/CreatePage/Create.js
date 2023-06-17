import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Create.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer'

const Create = (props) => {

    const [formData, setFormData] = useState({})

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
    const createBlogHandler = (formData) => {
        props.createHandler(formData)
    }

    return (
        <>
            <Navbar />
            <div className='createpage-main-container'>
                <p className='createpage-title'>Create Your Blog</p>
                <p className='createpage-subtitle'>Fill the bellow details to create a blog</p>
                <div className='createpage-subcontainer'>
                    <div>
                        <label>Blog Title</label>
                        <input type="text" name="blog_title" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Image URL</label>
                        <input type="text" name="image_url" onChange={inputHandler} />
                    </div>
                    <div>
                        <label>Description</label>
                        <input type="text" name="description" onChange={inputHandler} />
                    </div>
                    <div className='create-button'>
                        <Link className='create-button-link' to='/blog'>
                            <button onClick={() => createBlogHandler(formData)}>Create</button>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Create