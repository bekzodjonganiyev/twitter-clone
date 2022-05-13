import './button.css';

const Button = ({ title, type, width,height, bgColor, mr }) => {
	return (
		<button className={`btn ${width} ${bgColor} ${height} ${mr}`} type={type} >
			{title}
		</button>
	);
};

export default Button;
