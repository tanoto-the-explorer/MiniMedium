import React, {useState, useEffect} from 'react';
import axios from 'axios';

const EditPost = (props) => {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState('');
  const [post, setPost] = useState('');
  const [tag, setTag] = useState('');
  const [category, setCategory] = useState(['Technology', 'Business', 'Engineering', 'Art'])
    
  //     axios
  //     .get(`http://localhost:3001/users/${props.match.params.id}`)
  //     .then(response => {
  //      setUsername(response.data.username);
  //      setTitle(response.data.title);
  //      setPost(response.data.content);
  //      setTag(response.data.category);
  //  })
  
  const handlePostChange = (event) => {setPost(event.target.value)}
  const handleTagChange = (event) => {setTag(event.target.value)}
  const handleTitleChange = (event) => {setTitle(event.target.value)}

  const updatePost = (event) => {
    event.preventDefault();
    const postObject = {
      title: title,
      content: post,
      category: tag,
      date: new Date().toISOString()
    }
    axios
    .put(`http://localhost:3001/posts/update/${props.match.params.id}`,postObject)
    .then(res => {
      console.log("Data updated!");
      window.location = "/posts";
    });

     window.location = '/search';
  }
     
    return (
        <div>
          <h3>Edit Posts</h3>
          <form onSubmit={updatePost}>
            <div className="form-group"> 
              <label>Title: </label>
              <input type="text"
                  value={title}
                  onChange={handleTitleChange}
                  />
            </div>
            <div className="form-group"> 
              <label>Content: </label>
              <input  type="text"
                  required
                  className="form-control"
                  value={post}
                  onChange={handlePostChange}
                  />
            </div>
            <div className="form-group">
            <label>Category: </label>
              <select
                  required
                  className="form-control"
                  value={tag}
                  onChange={handleTagChange}>
                  {
                    category.map(function(tag) {
                      return <option 
                        key={tag}
                        value={tag}>{tag}
                        </option>;
                    })
                  }
              </select>
            </div>
            <div className="form-group">
              <input type="submit" value="Edit Post" className="btn btn-primary" />
            </div>
          </form>
        </div>
        )
}

export default EditPost;