import React, { useEffect, useState } from "react";
import axios from "axios"; 

const Username = () => {
  const [username, setUsername] = useState(null); // State to hold the user's name

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        // Fetch the user details from the backend
        const res = await axios.get("http://localhost:5000/api/getUser", {
          //withCredentials: true, // Send credentials (cookies, etc.)
        });
        
        const data = res.data;
        
        setUsername(data.user.name); // Set the user's name from the response
      } catch (error) {
        console.error("Error fetching username:", error);
        // Handle error, possibly redirect if not authenticated
      }
    };

    fetchUsername();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-32 space-y-3">
      {/* Display a greeting with the user's name */}
      <h1 className="text-4xl font-bold">
        Hey, {username ? username : "Guest"}!
      </h1>
      <h3>Welcome to the pizza world.</h3>
    </div>
  );
};

export default Username;
