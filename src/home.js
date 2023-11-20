import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageSlider from './image-slider'

import BlogList from './blog-list'

const Home = () => {
    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        fetch('https://capstone-api-ca07d2007022.herokuapp.com/blogs')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setBlogs(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [])

    const slides = [
        {url: 'https://wallpaperaccess.com/full/1533967.jpg', title: "Bucky Barnes"},
        {url: 'https://static0.cbrimages.com/wordpress/wp-content/uploads/2020/06/Captain-America-Cropped.jpg', title: "Captain America"},
        {url: 'https://getwallpapers.com/wallpaper/full/f/f/8/984685-vertical-the-hulk-wallpaper-1920x1200-mobile.jpg', title: "Hulk"},
        {url: 'https://www.fortressofsolitude.co.za/wp-content/uploads/2020/01/Tony-Stark-Iron-Man.jpg', title: "Tony Stark"},
        {url: 'https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg', title: "Thor"}
    ]

    return (
        <div className='home'>
            <div className='img-container'>
                <ImageSlider slides={slides}/>
            </div>
            {blogs && <BlogList blogs={blogs} title="All Blogs"/>}
        </div>
    );
}

export default Home;