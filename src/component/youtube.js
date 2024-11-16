import React, { useState, useEffect } from 'react';

const YouTubeSearch = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNewUser();
  }, []);

  const fetchNewUser = () => {
    setLoading(true);
    fetch('https://randomuser.me/api/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUsers(prevUsers => [...prevUsers, data.results[0]]);
        setCurrentIndex(prevIndex => prevIndex + 1);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const handleNext = () => {
    if (currentIndex === users.length - 1) {
      fetchNewUser();
    } else {
      setCurrentIndex(prevIndex => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevIndex => prevIndex - 1);
    }
  };

  if (loading && currentIndex === users.length) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const user = users[currentIndex];

  return (
    <div>
      <h1>Random User</h1>
      {user && (
        <div>
          <img src={user.picture.large} alt={user.name.first} />
          <p>Name: {user.name.first} {user.name.last}</p>
          <p>Email: {user.email}</p>
          <p>Location: {user.location.city}, {user.location.country}</p>
        </div>
      )}
      <div>
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </button>
        <button onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default YouTubeSearch;
