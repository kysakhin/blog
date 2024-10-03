import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams
import Markdown from "react-markdown";

const Blog = () => {
  const { id } = useParams(); // Extract id from the URL
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/blog/${id}`); // Await the Axios request
        setContent(response.data); // Set content with the response data
      } catch (err) {
        console.log("Error", err);
      }
    };

    fetchContent();
  }, [id]); // Add id to the dependency array to refetch when it changes

  return (
    <div className="md">
      <Markdown>
        {content}
      </Markdown>
    </div>
  );
};

export default Blog;
