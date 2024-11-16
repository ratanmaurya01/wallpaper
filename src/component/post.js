import React, { useState, useEffect } from 'react';

const TechCrunchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://techcrunch.com/wp-json/wp/v2/posts?per_page=100&context=embed');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching TechCrunch posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>TechCrunch Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechCrunchPosts;
