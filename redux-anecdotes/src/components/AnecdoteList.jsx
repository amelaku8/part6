import { useSelector,useDispatch } from "react-redux";
import { vote } from "../reducers/anecdoteReducer";
  
const AnecdoteList = () => {
  const dispatch = useDispatch()
    
 const anecdotes = useSelector(state => {let anecdotes = state.anecdotes.sort((a,b) => b.votes - a.votes);

    anecdotes = anecdotes.filter(anecdote=> anecdote.content.match(new RegExp(state.filter,'i')))
    return anecdotes
  })
 
 return (anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => dispatch(vote(anecdote.id))}>vote</button>
          </div>
        </div>
  )
  )
}
export default AnecdoteList
