import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

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
          <React.Fragment key={index}>
            <Link to={`/blog/${item.id}`}>{item.title}</Link> <br/>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default HandleItems;
