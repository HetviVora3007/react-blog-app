import React from 'react'

import './BlogCard.css'
import BlogData from '../../BlogData'
import blogOneImg from '../../Assests/blogOneImg.webp'

const BlogCard = () => {
    return (
        <>
            {BlogData.map((item) => {
                return (
                    <div className='blogcard-maincontainer'>
                        <div className='blogcard-img-container'>
                            <img src={item.img} />
                        </div>
                        <div className='about-blog-details-container'>
                            <div>
                                <p className='blog-title-container'>{item.title}</p>
                                <p className='blog-contant-container'>{item.contant}</p>
                                <p className='horizontal-line'></p>
                                <p className='comment'>0 comment</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default BlogCard