import React, {useState} from 'react'
import ReactDOM from 'react-dom'


const copy = [0, 0, 0, 0, 0, 0];
const App = (props) => {
    const [selected, setSelected] = useState({
        index: 0,
        arr: [0, 0, 0, 0, 0, 0]
    });
    return (
        <div>
            <h2>Anecdote of the day</h2>
            <p>{props.anecdotes[selected.index]}</p>
            <p>has {selected.arr[selected.index]} votes</p>
            <button onClick={() => {
                copy[selected.index]++;
                setSelected({...selected, arr: copy})
            }
            }>vote
            </button>
            <button onClick={() => {
                setSelected({...selected, index: Math.floor((Math.random() * 10) % props.anecdotes.length)})
            }}>next anecdote
            </button>
            <h2>Anecdote with most votes</h2>
            <p>{props.anecdotes[selected.arr.indexOf(Math.max(...selected.arr))]}</p>
        </div>
    )
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
    <App anecdotes={anecdotes}/>,
    document.getElementById('root')
)