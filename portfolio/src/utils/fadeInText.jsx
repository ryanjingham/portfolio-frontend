import React from 'react';
import { useInView } from 'react-intersection-observer';

function FadeInText({ children }) {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    const style = {
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
    };

    // Generate a random delay to stagger the appearance of each item
    const delay = Math.random() * 0.5; // up to 0.5 seconds
    style.transitionDelay = `${delay}s`;

    return (
        <div ref={ref} style={style}>
            {children}
        </div>
    );
};

export default FadeInText;