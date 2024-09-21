import {createNew} from "../reducers/anecdoteReducer"
import { useDispatch} from "react-redux";
import { notify } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes.js"

const AnecdoteForm  = () => {
  const dispatch = useDispatch()
  const newAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    dispatch(createNew(content))
    dispatch(notify(`new anecdote '${content}' added`,5000))
    event.target.anecdote.value = ""
    }


   
  return(
    <>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <input name ="anecdote" id =""/> 

        <button type="ii">create</button>
      </form>
      </>
  )
}
export default AnecdoteForm
