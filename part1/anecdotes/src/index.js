import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = (props) =>{
	const [selected,setSelected] = useState(0);

  const handleClick = () =>{
    setSelected(Math.round(Math.floor(Math.random() * props.anecdotes.length)))

    console.log(selected)
  }

	return(
		<div>
      {props.anecdotes[selected]}
      <div>
        <button onClick={handleClick}>next anecdote</button>
      </div>
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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
