import React from 'react';
import ReactDOM from 'react-dom';


// const Header = ({props}) => {
//     return(
//         <h1>{props.course}</h1>
//     )
// }



// const Content = (props) => {
// 	//console.log(props)
//     return (
//         <div>
//             <Part part={props.parts[0]} />
//             <Part part={props.parts[1]} />
//             <Part part={props.parts[2]} />
//         </div>
//     )
// }

// const Part = (props) => {
//     return (
//         <p>
//             {props.part.name} {props.part.exercises}
//         </p>
//     )
// }

// const Total = (props) => {

//     let partCount = 0;
//      props.parts.forEach( function(item, index) {
//          partCount += item.exercises;
//      });

//     return(
//         <p>Number of excercises {partCount}</p>
//     )
// }

/*
* Experimental Content
*/


const Header = ({courseName}) => {
    return(
        <h1>{courseName}</h1>
    )
}

const Parts = ({parts}) => {

    console.log(parts)

    const theParts = parts.map((part, index) => {
      console.log(part)
       return(
         <>
            <p>
             {part.name} {part.exercises}
            </p>
         </>
       )
    })

    return(
        <>
          {theParts}
        </>
    )
}

const Content = ({courses}) =>{
    console.log(courses);

    const theCourse = courses.map((course, index) => {
      //console.log(course.name)
       return(
         <>
            <Header courseName={course.name} />
            <Parts parts={course.parts} />
         </>
       )
    })

    return(
       <>{theCourse}</>
    )
}

const Course = ({course}) => {
    return (
        <div>
            {/*<Header course={course.name} />*/}
            {/*<Content parts={course.parts} />*/}
            {/*  <Total parts={course.parts} />*/}
            <Content courses={course} />
        </div>
    )
}

export default Course