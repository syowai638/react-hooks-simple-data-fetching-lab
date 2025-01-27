import React, { useState, useEffect } from 'react';

function App() {
  // State for the dog image URL and loading status
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect hook to fetch the data
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())  // Parse the JSON from the response
      .then(data => {
        setDogImage(data.message);  // Set the dog image URL
        setLoading(false);          // Set loading to false after the fetch is complete
      })
      .catch(error => {
        console.error('Error fetching the dog image:', error);
        setLoading(false);  // Even if there is an error, stop loading
      });
  }, []);  // Empty dependency array means this effect runs once after the initial render

  // Render the component
  return (
    <div>
      {loading ? (
        <p>Loading...</p>  // Show loading text while fetching
      ) : (
        <img src={dogImage} alt="A Random Dog" />  // Show the dog image after loading
      )}
    </div>
  );
}

export default App;
