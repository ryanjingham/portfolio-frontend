import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PortfolioItem from './PortfolioItem';
import { useInView } from 'react-intersection-observer';

function Portfolio() {
   const [items, setItems] = useState([]);

   useEffect(() => {
      const apiUrl = 'https://rji-portfolio-backend-126d5f0ba5b9.herokuapp.com/api/portfolio/';
      axios.get(apiUrl)
         .then((response) => {
            setItems(response.data);
         })
         .catch((error) => {
            console.error('There was an error fetching the portfolio items:', error);
         });
   }, []);

   return (
      <div className="flex flex-col md:flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
               <PortfolioItem
                  key={item.id} // Assuming each item has a unique 'id' field
                  imgUrl={item.imgUrl}
                  title={item.title}
                  stack={item.stack}
                  link={item.link}
                  delay={index * 300} // Delay each item slightly more
               />
            ))}
         </div>
      </div>
   );
}

export default Portfolio;