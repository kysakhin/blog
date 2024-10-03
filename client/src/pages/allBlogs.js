import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "white"
};


const AllBlogs = () => {

  const [ uniq, setUniq ] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/');
        const categories = [...new Set(response.data.map(item => item.category))];
        setUniq(categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {uniq.map((category, index) => (
          <li key={index}>
            <Link to={`/category/${category}`} style={linkStyle}> {category} </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllBlogs;
