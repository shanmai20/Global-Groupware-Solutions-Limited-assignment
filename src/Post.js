import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Post.css"

function Post({ post }) {
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
      .then(res => setUser(res.data));
  }, [post.userId]);

  const handleCommentIconClick = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then(res => setComments(res.data));
    setShowComments(!showComments);
  };

  return (
    <div>
      <h2 className="title">{post.title}</h2>
      <p className="title_body">{post.body}</p>
      {user && (
        <>
          <p className="user_name">Author: {user.name}</p>
          <p className="user_email">Email: {user.email}</p>
          <p className="user_adress">Address: {user.address.street}, {user.address.street}, {user.address.suite}, {user.address.city}{user.address.zipcode}, {user.address.geo.lat}, {user.address.geo.lng}</p>
          <p className="user_phone">Phone: {user.phone}</p>
          <p className="user_website">Website: {user.website}</p>
          <p className="user_company">Company: {user.company.name}, {user.company.catchPhrase}, {user.company.bs}</p>

        </>
      )}
      <div>
        <button className="button" onClick={handleCommentIconClick}>
          {showComments ? "Hide" : "Show"} Comments
        </button>
        {showComments && (
          <>
            {comments.map(comment => (
              <div key={comment.id}>
                <h4 className="comment_name">{comment.name}</h4>
                <p className="comment_body">{comment.body}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Post;