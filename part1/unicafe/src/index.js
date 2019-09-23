import React,{useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const App = () =>{
	//save clicks of each button to own state
	const [good,setGood] = useState(0);
	const [neutral,setNeutral] = useState(0);
	const [bad,setBad] = useState(0);

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

			<Statistics ratings={{good:good,neutral:neutral,bad:bad}} />
		</div>
	)
}

const Statistics = props =>{

	const ratings = props.ratings
	const totalScore = ratings.good+ratings.neutral+ratings.bad;

	let renderLayout;

	if(totalScore != 0){
		renderLayout = <>
			<p>good {ratings.good}</p>
			<p>neutral {ratings.neutral}</p>
			<p>bad {ratings.bad}</p>
			<p>all {totalScore}</p>
			<p>average {(ratings.good-ratings.bad)/totalScore}</p>
			<p>positive {(ratings.good/totalScore)*100}%</p>
		</>;
	}

	else {
		renderLayout = <>
			<p>No feedback given</p>
		</>
	}

	return (
		<>
			<h2>Statistics</h2>
			{renderLayout}
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));