// components/BlogPost.js
import React from 'react';

const BlogPost = ({ post }) => (
  <div className="bg-white shadow rounded p-6">
    <img src={post.image} alt={post.title} className="w-full h-40 object-cover mb-4" />
    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
    <p>{post.excerpt}</p>
  </div>
);

export default BlogPost;