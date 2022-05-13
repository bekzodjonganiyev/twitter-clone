import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import {
	TwitterIcon,
	Home,
	Explore,
	Notifications,
	Messages,
	Bookmarks,
	Lists,
	Profile,
	More,
} from '../../Assets/Images/Icons/Icons';
import Button from '../Button/Button';

import './sidebar.css';

const Sidebar = () => {
	return (
		<div className='routes'>
			<a target='_blank' className={`link twitter-link`} href={'#'}>
				<TwitterIcon />
			</a>

			<div className='links'>
				<NavLink className={`link `} to='/'>
					<Home />
					<span className='joy'>Home</span>
				</NavLink>
				<NavLink className={`link`} to='/explore'>
					<Explore /> <span className='joy'>Explore</span>
				</NavLink>
				<NavLink className={`link`} to='/notifiation'>
					<Notifications />
					<span className='joy'>Notifications</span>
				</NavLink>
				<NavLink className={`link`} to='/messages'>
					<Messages /> <span className='joy'>Messages</span>
				</NavLink>
				<NavLink className={`link`} to='/bookmarks'>
					<Bookmarks /> <span className='joy'>Bookmarks</span>
				</NavLink>
				<NavLink className={`link`} to='/lists'>
					<Lists />
					<span className='joy'>Lists</span>
				</NavLink>
				<NavLink className={`link`} to='/profile'>
					<Profile /> <span className='joy'>Profile</span>
				</NavLink>
				<NavLink className={`link mb`} to='/more'>
					<More />
					<span className='joy'>More</span>
				</NavLink>
			</div>

			<Button
				className='mr'
				title={'Tweet'}
				type='button'
				width={'px_200'}
				bgColor={'blue'}
				height={'px_40'}
				mr={'mr'}
			/>
		</div>
	);
};

export default Sidebar;
