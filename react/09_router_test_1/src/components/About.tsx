import {useNavigate} from 'react-router';

const About = () => {
	
	const navigate = useNavigate();
	
	return(
	<>
		<h2>This is a React Router Example</h2>
		<button onClick={() => navigate("/secret")}>Go to Secret Page</button>
	</>
	)
	
}

export default About;