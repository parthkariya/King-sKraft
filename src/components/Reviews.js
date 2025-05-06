import React, { useEffect } from 'react';

const Reviews = () => {
  useEffect(() => {
    // Function to load the script
    const loadScript = () => {
      // Check if the script is already loaded
      if (!document.querySelector('script[src="https://cdn.trustindex.io/loader.js?fbef8f03492159999d76dad7d09"]')) {
        const script = document.createElement('script');
        script.src = 'https://cdn.trustindex.io/loader.js?fbef8f03492159999d76dad7d09';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        
        // Optional: Clean up script when component unmounts
        return () => {
          document.body.removeChild(script);
        };
      }
    };

    // Load the script
    loadScript();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <h1>My Component</h1>
      <p>Content of my component goes here.</p>
    </div>
  );
};

export default Reviews;
