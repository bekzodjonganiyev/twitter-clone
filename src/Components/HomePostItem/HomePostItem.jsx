import {
	Comment,
	Like,
	Retweet,
	Share,
	Statistics,
} from '../../Assets/Images/Icons/Icons';

import './homePostItem.css';

const PostItem = ({ src, name, username, sentance }) => {
	return (
		<div className='post-item'>
			<div className='post-item-content'>
				<img className='post-item-img' src={src} alt='img' />

				<div className='post-item-body'>
					<strong className='poster-name'>{name}</strong>
					<span className='poster-username'>{username}</span>
					<p className='poster-sentace'>{sentance}</p>
				</div>
			</div>
			<div className='post-reactions'>
				<Comment />
				<Retweet />
				<Like />
				<Share />
				<Statistics />
			</div>
		</div>
	);
};

export default PostItem;
