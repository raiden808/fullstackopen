import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () =>{
	//save clicks of each button to own state
	const [good,setGood]       = useState(0);
	const [neutral,setNeutral] = useState(0);
	const [bad,setBad]         = useState(0);
	let   totalScore           = good+bad+neutral;
	let   average              = (good-bad)/totalScore;
	let   positive             = (good/totalScore)*100
	let   renderLayout;

	const handleClick = (rating) =>{
		switch (rating) {
			case "good":
				setGood(good+1)
				break;
			case "neutral":
				setNeutral(neutral+1)
				break;
			case "bad":
				setBad(bad+1)
				break;
			default:
				// statements_def
				break;
		}
	}

	if(totalScore != 0){
		renderLayout = <>
			<h2>statistics</h2>
			
			<table>
				<Statistics text="good" value={good} />
				<Statistics text="neutral" value={neutral} />
				<Statistics text="bad" value={bad} />
				<Statistics text="average" value={average} />
				<Statistics text="positive" value={positive} />		
			</table>
		</>;
	}

	else {
		renderLayout = <>
			<p>No feedback given</p>
		</>
	}

	return (
		<div>
			<h2>give feedback</h2>
			<Button text="good" onClick={()=>{handleClick("good")}} />
			<Button text="neutral" onClick={()=>{handleClick("neutral")}} />
			<Button text="bad" onClick={()=>{handleClick("bad")}} />
			{renderLayout}
		</div>
	)
}

const Button = ({onClick,text}) =>{
	return (
		<>
			<button onClick={onClick}>
				{text}
			</button>
		</>
	)
}

const Statistics = ({text,value}) =>{
	return(
		<>
			<tr>
				<td>{text}</td>
				<td>{value}</td>
			</tr>
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));