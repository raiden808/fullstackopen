import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
	return(
		<h1>{props.course}</h1>
	)
}

const Content = (props) => {
	return (
		<div>
			<Part part={props.parts.part[0]} />
			<Part part={props.parts.part[1]} />
			<Part part={props.parts.part[2]} />
		</div>
	)
}

const Part = (props) => {
	//console.log(props.part);
	return (
		<p>
			{props.part.name} {props.part.exercises}
		</p>
	)
}

const Total = (props) => {
	//console.log(props.parts)
	let partCount = 0;
	var totalCount = props.parts.part.map((part, index) => {
       partCount += part.exercises;
       return partCount
    })

    console.log(totalCount)

	return(
		<p>Test</p>
	)
}


const App = () => {
	const course = 'Half Stack application development'
	const parts  = 
	{
        part: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of the component',
                exercises: 14
            }
        ]
    };

	const part1         = 'Fundamentals of React'
	const excercises1   = 10
	const part2         = 'Using props to pass data'
	const excercises2   = 7
	const part3         = 'State of the component'
	const excercises3   = 14;

	return (
		<div>
			<Header course={course} />
			<Content parts={parts} />
			<Total parts={parts} />
			<p>Number of excercises {excercises1 + excercises2 + excercises3}</p>
		</div>
	)
}

ReactDOM.render(<App />,document.getElementById('root'))