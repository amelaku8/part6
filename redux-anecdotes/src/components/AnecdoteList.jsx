import { useSelector,useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
import { notify } from "../reducers/notificationReducer";
  
const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(state => {
    let anecdotes = state.anecdotes
    anecdotes =  [...anecdotes].sort((a,b) => b.votes - a.votes);
    anecdotes = anecdotes.filter(anecdote=> anecdote.content.match(new RegExp(state.filter,'i')))
    return anecdotes
  })
  const handleVote = (anecdote) =>{
    dispatch(vote(anecdote))
    dispatch(notify(`you voted '${anecdote.content}'`,5000))
  }
 
 return (anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
  )
  )
}
export default AnecdoteList
