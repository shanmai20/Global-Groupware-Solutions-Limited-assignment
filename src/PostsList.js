import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post";
import "./PostList.css"

function PostsList() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then(res => setPosts(res.data));
    }, []);
  
    return (
      <div className="post">
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    );
  }
  
  export default PostsList;