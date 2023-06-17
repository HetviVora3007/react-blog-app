import React, { useState, useEffect } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './Blog.css'
import Navbar from '../../Component/Navbar/Navbar'
import Footer from '../../Component/Footer/Footer';
import { Link } from 'react-router-dom';

const Blog = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const deleteHandler = (_id) => {
        props.deleteHandler(_id)
    }
    // const [isData, setIsData] = useState(false)

    // const clickHandler = (id) => {
    //     const data = BlogData.filter((d) => Number(d.id) == Number(id))
    //     console.log(data)
    //     setIsData(data)
    // }

    return (
        <>
            <Navbar />
            <div className='blogpage-title-maincontainer'>
                <div className='blogpage-title-subcontainer'>
                    <p>Blog</p>
                    <Link to='/create' className='create-blog-link'>Create</Link>
                </div>
            </div>
            <div className='blogpage-maincontainer'>
                <div className='blogpage-subcontainer'>
                    {props.blogData.map((item) => {
                        return (
                            <Link to={`/aboutblog/${item._id}`} className='blogpage-card-maincontainer'>
                                <div className='blogpage-card-container'>
                                    <img src={item.image_url} />
                                    <p className='blogcard-titlename'>{item.blog_title}</p>
                                    <p className='blogcard-horizontal-line'></p>
                                    <div className='blogcard-buttons'>
                                        <button className='blogcard-delete-button' onClick={() => deleteHandler(item._id)}><DeleteOutlineIcon /></button>
                                        <button className='blogcard-like-button' ><FavoriteBorderIcon /></button>
                                        {/* {isData == true && < button className='blogcard-like-button' > <FavoriteIcon /></button >} */}
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog