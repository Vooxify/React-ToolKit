
// global imports
import Root from './components/Root';

// react 
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useState, useEffect, useMemo, createContext } from 'react';

// pages import
import LandingPage from './components/app/LandingPage/LandingPage';
import ErrorPage from './components/Errors/ErrorPage';

// style sheet
import "./App.css"


export const AppContext = createContext(null);

export default function App() {

	const [theme, setTheme] = useState("dark"); 


	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
	};


	useEffect(() => {
		document.documentElement.className = theme;
	}, [theme]);


	
	const appContextValue = useMemo(() => ({
		theme,
		toggleTheme,

	}), [

		theme,
		toggleTheme,
	]);

	const router = createBrowserRouter(
		[
			{
				path: "/",
				element: <Root/>,
				errorElement: <ErrorPage/>,
				children: [
					{	
						element: <LandingPage themeValue/>,
						path: "/"
					}
				]
			}
		]
	)
	return (
		<AppContext.Provider value={appContextValue}>
			<RouterProvider router={router}/>
		</AppContext.Provider>
	)

}


