import React from 'react';
import {Link} from 'react-router-dom'

const BlogList = ({blogs, title }) => {

    return (
        <div className='blog-list'>
            <h2>{title}</h2>
            {blogs.map((blog) => (
            <div className='blog-preview' key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Category: {blog.category}</p>
                <p>Written by {blog.author}</p>
                </Link>
                <Link to={`/update/${blog.id}`}><p id="link">Update</p></Link>
            </div>
        ))}
        </div>
    );
}

export default BlogList;