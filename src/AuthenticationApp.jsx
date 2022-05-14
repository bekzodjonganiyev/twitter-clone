import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import { Settings, ThreeDot } from './Assets/Images/Icons/Icons';
import Main from './Components/Main/Main';
import Sidebar from './Components/Sidebar/Sidebar';
import { Trends } from './Components/Trends/Trends';

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
					<input type="text" placeholder='Search Twitter' />

					<div className='trends'>
						<div className="title">
							<h3>Trends for you</h3>
							<Settings />
						</div>

						<Trends />
						<Trends />
						<Trends />

					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthenticationApp;
