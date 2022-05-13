import React from 'react';
import { NavLink } from 'react-router-dom';
import TwImg from '../../Assets/Images/Images/twitter-logo.png';
import Button from '../../Components/Button/Button';
import useToken from '../../Hooks/useToken';

import './login.css';

const Login = () => {
	const [token, setToken] = useToken();

	const handleSubmit = (evt) => {
		evt.preventDefault();

		setToken({
			name: evt.target.elements.name.value,
			username: evt.target.elements.username.value,
			password: evt.target.elements.password.value,
		});

		window.localStorage.setItem('token', JSON.stringify(token));
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<img src={TwImg} alt='tw-logo' />

			<h1 className='lg-page-title'>Log in to Twitter</h1>

			<div>
				<input
					className='input'
					type='text'
					placeholder='Name'
					name='name'
					required
					autocomplate='off'
				/>
			</div>

			<div>
				<input
					className='input'
					type='email'
					placeholder='Phone number, email address'
					name='username'
					required
					autocomplate='off'
				/>
			</div>

			<div>
				<input
					className='input'
					type='password'
					placeholder='Password'
					name='password'
					required
					autocomplate='off'
				/>
			</div>

			<Button type='submit' title='Log In' bgColor='blue' width='px_450' />

			<div className='lg-page-footer'>
				<NavLink to='/' className='lg-page-link'>
					Forgot password?
				</NavLink>
				<NavLink to='/' className='lg-page-link'>
					Sign up to Twitter
				</NavLink>
			</div>
		</form>
	);
};

export default Login;
