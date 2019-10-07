import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
    return(
        <h1>{props.course}</h1>
    )
}

const Content = (props) => {
	//console.log(props)
    return (
        <div>
            <Part part={props.parts[0]} />
            <Part part={props.parts[1]} />
            <Part part={props.parts[2]} />
        </div>
    )
}

const Part = (props) => {
    return (
        <p>
            {props.part.name} {props.part.exercises}
        </p>
    )
}

const Total = (props) => {

    let partCount = 0;
     props.parts.forEach( function(item, index) {
         partCount += item.exercises;
     });

    return(
        <p>Number of excercises {partCount}</p>
    )
}

const Course = ({course}) => {

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course