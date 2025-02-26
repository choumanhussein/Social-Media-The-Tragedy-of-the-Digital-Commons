// components/Blog.js
import React from 'react';
import BlogPost from './BlogPost';

const blogPosts = [
  {
    title: '5 Creative Ways to Reuse Plastic Bottles',
    excerpt: 'Discover innovative ideas to give your plastic bottles a second life and reduce waste...',
    image: 'images/plastic-bottles.jpg',
  },
  // Add more blog posts...
];

const Blog = () => (
  <section id="blog" className="container mx-auto my-16">
    <h2 className="text-3xl font-bold mb-8">Blog</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {blogPosts.map((post, index) => (
        <BlogPost key={index} post={post} />
      ))}
    </div>
  </section>
);

export default Blog;