import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Call your backend API
    fetch("http://backend:5000/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message); // 'Hello from backend'
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}

export default App;
