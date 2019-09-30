import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) =>{
	const [selected,setSelected] = useState(0);
  const [points, setPoints ] = useState([0, 0, 0, 0,0,0])

  //set state random generated number
  const handleClickRandom = () =>{
   
    setSelected(Math.round(Math.floor(Math.random() * props.anecdotes.length)))

    console.log(selected)
  }

  const handleClickVote = () =>{
    const copyPoints = [...points]

    copyPoints[selected] += 1;

    setPoints(copyPoints)
    console.log(copyPoints)
  }

  const displayHighestValue = allPoints =>{
    var highest = Math.max(...allPoints);

    return allPoints.indexOf(highest);
  }

	return(
		<div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <p>has {points[selected]}</p>
      <div>
        <button onClick={handleClickVote}>vote</button>
        <button onClick={handleClickRandom}>next anecdote</button>
      </div>
      <h2>Anecdote with most vote</h2>
      {props.anecdotes[displayHighestValue(points)]}
      <p>has {Math.max(...points)}</p>
    </div>
	);
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
