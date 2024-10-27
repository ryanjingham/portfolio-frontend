import React, { useEffect, useState, useRef } from 'react';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';

function App() {
	const [theme, setTheme] = useState('light'); // Default theme
	const [introScale, setIntroScale] = useState(1.8); // Start larger


	// Handle scroll to adjust introScale
	useEffect(() => {
	const handleScroll = () => {
		const newScale = Math.max(1, 1.8 - window.scrollY / 500);
		setIntroScale(newScale);
	};

	window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// Detect system theme on initial load
	useEffect(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		setTheme(mediaQuery.matches ? 'dark' : 'light');

		// Optional: Listen for system theme changes
		const handleChange = (e) => setTheme(e.matches ? 'dark' : 'light');
		mediaQuery.addListener(handleChange);
		return () => mediaQuery.removeListener(handleChange);
	}, []);

	// Apply theme class to document
	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);

  // Ensure page starts at the top
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleThemeSwitch = () => {
		setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
	};

	const ThemeIcon = theme === 'dark' ? moon : sun; // Toggle theme icon

	return (
		<>
			<button onClick={handleThemeSwitch} className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg p-1 rounded-md">
				{ThemeIcon}
			</button>
			<div className="bg-light-beige dark:bg-deep-maroon text-deep-maroon dark:text-light-beige min-h-screen font-inter">
			
			{/* Intro Section */}
			<div className="max-w-5xl w-11/12 mx-auto">
				<div id="intro" style={{ transform: `scale(${introScale})`, transition: 'transform 0.5s ease-out' }}>
					<Intro />
				</div>
			</div>
			

			{/* Portfolio Section */}
			<div className="max-w-5xl w-11/12 mx-auto">
				<div id="portfolio">
					<Portfolio />
				</div>
			</div>

			
			{/* Experience Section */}
			<div className="max-w-5xl w-11/12 mx-auto">
				<div id="experience">
					<Experience />
				</div>
			</div>
	  
			{/* Contact Section */}
			<div className="max-w-5xl w-11/12 mx-auto">
				<div id="contact">
					<Contact />
				</div>
			</div>

			{/* Footer Section */}
			<div className="max-w-5xl w-11/12 mx-auto">
				<div id='footer'>
					<Footer />
				</div>
			</div>
			
		</div>
	</>
	);
	}

const sun = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    {/* Sun SVG Path */}
  </svg>
);

const moon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
    {/* Moon SVG Path */}
  </svg>
);

export default App;