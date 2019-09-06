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




    let partCount = 0;
     props.parts.part.forEach( function(item, index) {
         partCount += item.exercises;
     });




    return(
        <p>Number of excercises {partCount}</p>
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




    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}




ReactDOM.render(<App />,document.getElementById('root'))