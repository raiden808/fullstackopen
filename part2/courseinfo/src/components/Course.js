import React from 'react';
import ReactDOM from 'react-dom';


const Header = ({courseName}) => {
    return(
        <h1>{courseName}</h1>
    )
}

const Parts = ({parts}) => {
  const theParts = parts.map((part, index) => {
    //console.log(part)
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
    //console.log(courses);

    const theCourse = courses.map((course, index) => {
      //console.log(course.name)
       return(
         <>
            <Header courseName={course.name} />
            <Parts parts={course.parts} />
            <Total parts={course.parts} />
         </>
       )
    })

    return(
       <>{theCourse}</>
    )
}

const Total = ({parts}) =>{

  const totalExercise = [];
  parts.forEach(function (item, index) {
    //console.log(item, index);
    totalExercise.push(item.exercises)
  });

  return(
    <p>
      Total {totalExercise.reduce((a, b) => a + b)}
    </p>
  )
}

const Course = ({course}) => {
    return (
        <div>
            <Content courses={course} />
        </div>
    )
}

export default Course