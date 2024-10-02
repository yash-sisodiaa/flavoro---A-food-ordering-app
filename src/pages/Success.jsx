import axios from "axios";
import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom"; // Import for routing
import toast from "react-hot-toast"; // Assuming you are using react-hot-toast for notifications
axios.defaults.withCredentials = true;

const Success = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // For programmatic navigation

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  const clearCart = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/clear-cart");
      const data = res.data;
      toast.success(data.message); // Show success toast
    } catch (error) {
      console.error("Error clearing cart:", error);
      toast.error("Failed to clear cart. Please try again.");
    }
  };

  useEffect(() => {
    clearCart(); // Clear cart when component mounts
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">Order Successful!</h2>
          <p className="mb-6">Your order has been successfully placed.</p>

          {/* Button to navigate back to home */}
          <button
            onClick={() => navigate("/")}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Go to Home
          </button>

        
        </div>
      )}
    </div>
  );
};

export default Success;
