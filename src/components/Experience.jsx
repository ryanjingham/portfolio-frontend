import React, { useEffect, useState } from 'react';
import axios from 'axios';
import experience from "../data/experience";
import ExperienceItem from "./ExperienceItem";
import Title from "./Title";
import { useInView } from 'react-intersection-observer';


function Experience() {
    const [items, setItems] = useState([]);
    const { ref, inView } = useInView({
      triggerOnce: true,
      threshold: 0.1, // Adjust based on when you want the section to start animating
    });

    useEffect(() => {
      // Replace the URL with your actual endpoint URL
      const apiUrl = 'https://rji-portfolio-backend-126d5f0ba5b9.herokuapp.com/api/experiences/';
      axios.get(apiUrl)
        .then((response) => {
          setItems(response.data);
        })
        .catch((error) => {
          console.error('There was an error fetching the portfolio items:', error);
        });
    }, []); // The empty array ensures this effect runs only once after initial render
  
    return (
      <div ref={ref} className="flex flex-col md:flex-row justify-center my-20">
          <div className="w-full md:w-7/12">
              <Title>Experience</Title>
              {inView && items.map((item, index) => (
                  <ExperienceItem
                      key={index} // Assuming item has no unique id, otherwise use it
                      year={item.year}
                      title={item.title}
                      organisation={item.organisation}
                      duration={item.duration}
                      details={item.details}
                  />
              ))}
            </div>
        </div>
    )
}

export default Experience;