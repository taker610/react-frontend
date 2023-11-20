import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'


const BlogDetails = () => {

    const [ blog, setBlog] = useState({});
    const { id } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        fetch(`https://capstone-api-ca07d2007022.herokuapp.com/blog/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data)
                setBlog(data)
            })
            .catch(err => {
                console.log(err.message)
            })
    }, [id, blog])

    const handleClick = () => {
        fetch(`https://capstone-api-ca07d2007022.herokuapp.com/blog/${id}`, {
            method: "DELETE"            
        }).then(() => {
            history.push('/')
        })
    }
    
    return (
        <div className='blog-details'>
            <article className='create'>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div className='blog-body'>{blog.content}</div>
                <button onClick={handleClick} className='delete'>Delete</button>
            </article>
        </div>
    );
}

export default BlogDetails;