import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () =>{
	//save clicks of each button to own state
	const [good,setGood] = useState(0);
	const [neutral,setNeutral] = useState(0);
	const [bad,setBad] = useState(0);
	const totalScore = good+neutral+bad;

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

	return (
		<div>
			<h2>give feedback</h2>

			<button onClick={()=>{handleClick("good")}} >good</button>
			<button onClick={()=>{handleClick("neutral")}} >neutral</button>
			<button onClick={()=>{handleClick("bad")}} >bad</button>

			<h2>Statistics</h2>
			<p>good {good}</p>
			<p>neutral {neutral}</p>
			<p>bad {bad}</p>
			<p>all {totalScore}</p>
			<p>average {(good-bad)/totalScore}</p>
			<p>positive </p>
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));