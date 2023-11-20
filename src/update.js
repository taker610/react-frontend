import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect} from 'react';
import { useHistory} from 'react-router-dom';

const Update = () => {
    //FOR EDIT COMPONENT
    //editMode? <CreateNewBlog onClick={postRequest}/> : <UpdateExistingBlog onClick={putRequest}/>

    //setBlog(blog)
    //<input value={blog.title}/>
   // <input value={blog.content}></input>
   const [title, setTitle] = useState('');
   const [author, setAuthor] = useState('');
   const [category, setCategory] = useState('');
   const [content, setContent] = useState('');
   const history = useHistory();

   const handleSubmit = (e) => {
       e.preventDefault()
       const blog = { title, author, category, content}
       fetch(`https://capstone-api-ca07d2007022.herokuapp.com/blog/${id}` , {
           method: 'PUT',
           headers: { "Content-Type": "application/json"},
           body: JSON.stringify(blog)
       })
       history.push('/')
   }

   const [ blog, setBlog] = useState({});
   const { id } = useParams();
   
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
           setTitle(blog.title)
           setAuthor(blog.author)
           setCategory(blog.category)
           setContent(blog.content)
   }, [id, blog.title, blog.author, blog.category, blog.content])



        return (
            <div className='create'>
                <h2>Update this Blog</h2>
                <form onSubmit={handleSubmit}>
                    <label>Blog Title</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>Blog Author</label>
                    <input 
                        type="text"
                        required
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <label>Blog Category</label>
                    <input 
                        type="text"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <label>Blog Content</label>
                    <textarea
                        required
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    >
                    </textarea>
                    <button>Update Blog</button>
                </form>
            </div>
        );
}

export default Update;