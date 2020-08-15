import React from "react";
import ReactDOM from 'react-dom'

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Part = (props) => {
    return (
        <p>
            {props.part} {props.exercise}
        </p>
    );
};

const Content = (props) => {
    return (
        <>
            <Part part={props.part1} exercise={props.exercises1}/>
            <Part part={props.part2} exercise={props.exercises2} />
            <Part part={props.part3} exercise={props.exercises3} />
        </>
    );
};

const Total = (props) => {
    return (
        <>
            <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
        </>
    );
};

const App = () => {

    const course = 'Half Stack application development';
    const part = [
        {
            name: 'Fundamentals of React',
            exercises: 10
        },
        {
            name: 'Using props to pass data',
            exercises: 7
        },
        {
            name: 'State of a component',
            exercises: 14
        }
    ];

    return (
        <>
            <Header course={course}/>
            <Content part1={part[0].name} exercises1={part[0].exercises} part2={part[1].name} exercises2={part[1].exercises} part3={part[2].name}
                     exercises3={part[2].exercises}/>
            <Total exercises1={part[0].exercises} exercises2={part[1].exercises} exercises3={part[2].exercises}/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))