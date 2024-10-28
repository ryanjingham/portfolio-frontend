import React, {useRef} from 'react';
import { useInView } from 'react-intersection-observer';
import FadeInText from '../utils/fadeInText.jsx';

function ExperienceItem({ year, title, organisation, duration, details }) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <FadeInText>
               <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
                  <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                     {year}
                  </span>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-light-beige">
                     {title}
                  </h3>
               </p>
            </FadeInText>
            <FadeInText>
               <p className="pl-16 pt-2 text-md font-semibold text-stone-900 dark:text-light-beige">
                  {organisation}
               </p>
            </FadeInText>
            <FadeInText>
               <p className="pl-16 my-2 text-base font-normal text-stone-500 dark:text-light-beige">
                  {details}
               </p>
            </FadeInText>
         </li>
      </ol>
   );
}

export default ExperienceItem;