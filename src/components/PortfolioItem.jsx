import React from 'react';
import { useInView } from 'react-intersection-observer';

function PortfolioItem({ title, imgUrl, stack, link, delay }) {
   const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5,    // Trigger when 75% of the item is in view
   });

   return (
      <a
         href={link}
         target="_blank"
         rel="noopener noreferrer"
         className={`border-2 border-stone-900 dark:border-white rounded-md overflow-hidden transition-opacity duration-700 ${inView ? 'opacity-100' : 'opacity-0'}`}
         ref={ref}
         style={{ transitionDelay: `${delay}ms` }} // Apply the delay based on the prop
      >
         <img
            src={imgUrl}
            alt={title}
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
         />
         <div className="w-full p-4">
            <h3 className="text-lg md:text-xl dark:text-white mb-2 md:mb-3 font-semibold">{title}</h3>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm dark:text-white">
               {stack.map((item, index) => (
                  <span key={index} className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-white rounded-md">
                     {item}
                  </span>
               ))}
            </p>
         </div>
      </a>
   );
}

export default PortfolioItem;
