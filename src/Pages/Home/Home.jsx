import { useState } from 'react';
import Header from '../../Components/Header/Header';
import PostItem from '../../Components/HomePostItem/HomePostItem';

import Avatar from '../../Assets/Images/Images/avatar.png';
import Avatar_1 from '../../Assets/Images/Images/avatar-1.png';
import Avatar_2 from '../../Assets/Images/Images/avatar-2.png';
import Avatar_3 from '../../Assets/Images/Images/avatar-3.png';
import Food from '../../Assets/Images/Images/kebab.png';

import {
	TweetDiagram,
	TweetGif,
	TweetImg,
	TweetSchudle,
	TweetSmile,
} from '../../Assets/Images/Icons/Icons';

import './home.css';
import Button from '../../Components/Button/Button';

const Home = () => {
	const [post, setPost] = useState([]);

	const [img, setImg] = useState({
		img: Food,
		alt: 'img',
	});

	const handleInput = (evt) => {
		const newPost = {
			id: post[post.length - 1]?.id + 1 || 0,
			avatar: Avatar,
			name: JSON.parse(window.localStorage.getItem('token')).name,
			username: JSON.parse(window.localStorage.getItem('token')).username,
			sentance: evt.target.value,
			optionalImg: Avatar,
		};

		if (evt.code === 'Enter') {
			window.localStorage.setItem('posts', JSON.stringify([newPost, ...post]));
			evt.target.value = '';
			setPost([newPost, ...post]);
		}
	};

	return (
		<>
			<Header title={'Home'} />
			<div className='home-content'>
				<div className='input-field'>
					<div className='input-wrapper'>
						<img src={Avatar} alt='img' />

						<div>
							<input
								type='text'
								placeholder={`Tweet from ${
									JSON.parse(window.localStorage.getItem('token')).name
								}`}
								onKeyUp={handleInput}
							/>
							<div className='tweet-additional'>
								<label htmlFor='img'>
									<span>
										<TweetImg />
									</span>
									<input
										className='hidden'
										type='file'
										name=''
										id='img'
										onChange={(evt) => {
											setImg({
												img:window.URL.createObjectURL(evt.target.files[0]),
												alt:evt.target.files[0].name
											});
										}}
									/>
								</label>
								<TweetGif />
								<TweetDiagram />
								<TweetSmile />
								<TweetSchudle />
							</div>
						</div>

					</div>
				</div>
				{post.map((item) => (
					<PostItem
						key={item.id}
						src={item.avatar}
						name={item.name}
						username={item.username}
						sentance={item.sentance}
					/>
				))}

				<PostItem
					src={Avatar_1}
					name='Designsta'
					username='@inner · 25m'
					sentance="Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?"
				/>
				<PostItem
					src={Avatar_2}
					name='cloutexhibition'
					username='@RajLahoti · 22m'
					sentance='YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.'
				/>
				<PostItem
					src={Avatar_3}
					name='CreativePhoto'
					username='@cloutexhibition · 1h'
					sentance='Обетда.....  Кечиринглар'
				/>
			</div>
		</>
	);
};

export default Home;
