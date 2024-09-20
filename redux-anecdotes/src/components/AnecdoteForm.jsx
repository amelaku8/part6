import {createAnecdote} from "../reducers/anecdoteReducer"
import { useDispatch} from "react-redux";
import { notify } from "../reducers/notificationReducer";
import anecdoteService from "../services/anecdotes.js"

const AnecdoteForm  = () => {
  const dispatch = useDispatch()
  const newAnecdote = (event) => {
    event.preventDefault()
    anecdoteService.createNew({content: event.target.anecdote.value,
                votes: 0}).then(response => {
    dispatch(createAnecdote(response))
    dispatch(notify(`'${response.content}' added`))
    setTimeout(() => dispatch(notify(null)),5000)
    event.target.anecdote.value = ""
    })


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
