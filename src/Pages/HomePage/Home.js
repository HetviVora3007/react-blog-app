import { React, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './Home.css'
import BlogData from '../../BlogData'
import Footer from '../../Component/Footer/Footer'
import Navbar from '../../Component/Navbar/Navbar'
import homepageImg from '../../Assests/homepageImg.webp'
import thoughtsImg from '../../Assests/thoughtImg.webp'
import BlogCard from '../../Component/BlogCard/BlogCard'

const Home = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Navbar />
            <div className='homepage-container'>
                <div className='homepage-img-container'>
                    <img src={homepageImg} />
                </div>
                <div className='homepage-thought-container'>
                    <div className='thoughts-subcontainer'>
                        <p className='first-thoughts-title'>My Thoughts</p>
                        <img src={thoughtsImg} />
                        <p className='second-thoughts-title'>Detoxing my social media feed</p>
                        <p className='thoughts-containt'>Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading....</p>
                        <Link className='homepage-blog-link' to='/blog'>All Posts</Link>
                    </div>
                </div>
            </div>
            <div className='recent-post-container'>
                <div className='recent-post-subcontainer'>
                    <p className='recent-post-title'>Recent Posts</p>
                    <BlogCard />
                </div>
            </div>
            <div className='homepage-another-container'>
                <div className='container-blog-containt'>
                    <p className='blog-containt'>” I always get to where I'm going by walking away from where I have been.”</p>
                    <p className='blog-sub-title'><span className='span-horizontal-line'></span>Hetvi Vora</p>
                </div>
                <div className='container-image-container'></div>
            </div>
            <p className='image-container-title'>Always Makes Me Smile</p>
            <div className='image-container'>
                <div className='image-subcontainer'>
                    {BlogData.map((item) => {
                        return (
                            <img src={item.img} />
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home