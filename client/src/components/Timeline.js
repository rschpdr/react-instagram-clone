import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../components/Post";

function Timeline() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = axios.get("http://localhost:4000/posts");
    })();
  }, []);

  return (
    <div>
      <Post />
    </div>
  );
}

export default Timeline;
