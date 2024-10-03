import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const linkStyle = {
  textDecoration: "none",
  color: "#374375"
};

const HandleItems = () => {
  const { category } = useParams(); 
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/${category}`);
        console.log(response);
        setItems(response.data); 
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, [category]);

  return (
    <div>
      <h2>Items in Category: {category}</h2>
      <ul>
        {items.map((item, index) => (
          <li>
            <Link to={`/blog/${item.id}`} style={linkStyle}>{item.title}</Link> <br/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HandleItems;
