import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Explore from '../../Pages/Explore/Explore';
import Messages from '../../Pages/Messages/Messages';
import Bookmarks from '../../Pages/Bookmarks/Bookmarks';
import Lists from '../../Pages/Lists/Lists';
import Profile from '../../Pages/Profile/Profile';
import Notification from '../../Pages/Notification/Notification';
import More from '../../Pages/More/More';

import './mains.css';

const Main = () => {
	return (
		<React.Fragment >
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/explore' element={<Explore />} />
				<Route path='/notifiation' element={<Notification />} />
				<Route path='/messages' element={<Messages />} />
				<Route path='/bookmarks' element={<Bookmarks />} />
				<Route path='lists' element={<Lists />} />
				<Route path='/profile' element={<Profile />} />
				<Route path='/more' element={<More />} />
			</Routes>
		</React.Fragment>
	);
};

export default Main;
