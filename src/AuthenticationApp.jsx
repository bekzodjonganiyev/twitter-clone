import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';

const AuthenticationApp = () => {
	return (
		<div className='app'>
			<div className='menu'>
				<Sidebar />
			</div>

			<div className='content'>
				<div className='main-content'>
					<Main />
				</div>
				<div className='right-content'>
					
				</div>
			</div>
		</div>
	);
};

export default AuthenticationApp;
