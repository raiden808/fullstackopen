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
			<Part />
			<Part />
			<Part />
		</div>
	)
}

const Part = (props) => {
	return (
		<p>
			Test
		</p>
	)
}



const App = () => {
	const course        = 'Half Stack application development'

	const parts = 
	{
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'tate of the component',
                exercises: 14
            }
        ]
    };

    // access single array
    console.log(parts.parts[0].name)

	const part1         = 'Fundamentals of React'
	const excercises1   = 10
	const part2         = 'Using props to pass data'
	const excercises2   = 7
	const part3         = 'State of the component'
	const excercises3   = 14;

	return (
		<div>
			<Header course={course} />
			<Content />
			<p>
				{part1} {excercises1}
			</p>
			<p>
				{part2} {excercises2}
			</p>
			<p>
				{part3} {excercises3}
			</p>
			<p>Number of excercises {excercises1 + excercises2 + excercises3}</p>
		</div>
	)
}

ReactDOM.render(<App />,document.getElementById('root'))