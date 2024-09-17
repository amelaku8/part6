import { createAnecdote } from "../reducers/anecdoteReducer";
import { useDispatch} from "react-redux";

const AnecdoteForm  = () => {
  const dispatch = useDispatch()
  const newAnecdote = (event) => {
    event.preventDefault()
    useDispatch(createAnecdote(event.target.name.value))
    event.target.name.value = ""


  } 
  return(
    <>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name ="anecdote"/></div> 

        <button>create</button>
      </form>
      </>
  )
}
export default AnecdoteForm
