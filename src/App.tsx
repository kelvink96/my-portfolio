import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import {MantineProvider} from "@mantine/core";
import {AboutPage, ContactPage, LandingPage, PortfolioPage} from './pages';
import {CustomFonts} from "./fonts/CustomFonts";
import {NavigationProgress} from "@mantine/nprogress";

function App() {
	return (
		<div className="App">
			<MantineProvider
				withNormalizeCSS
				withGlobalStyles
				theme={{
					fontFamily: 'Poppins',
					headings: {fontFamily: 'Poppins'},
					colors: {
						brand: ['#9ca276', '#8c926a', '#7d825e', '#6d7153', '#5e6147', '#4e513b', '#3e412f', '#2f3123', '#1f2018', '#10100c'],
					},
					primaryColor: 'brand',
				}}>
				<CustomFonts/>
				<NavigationProgress/>
				<Routes>
					<Route path="/" element={<LandingPage/>}/>
					<Route path="/portfolio" element={<PortfolioPage/>}/>
					<Route path="/about" element={<AboutPage/>}/>
					<Route path="/contact" element={<ContactPage/>}/>
				</Routes>
			</MantineProvider>
		</div>
	);
}

export default App;
