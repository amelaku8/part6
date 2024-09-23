import {useMutation,useQueryClient } from '@tanstack/react-query'
import { createAnecdote } from '../request'
import { useNotificationDispatch } from '../NotificationContext'
const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const dispatch = useNotificationDispatch()
  const newAnecdoteMutation = useMutation({
    mutationFn:createAnecdote,
    onSuccess : (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'],anecdotes.concat(newAnecdote))
    }, 
    onError :() => { 
      dispatch({type:"SET", payload : "Invalid anecdote"})
      setTimeout(() => dispatch({type:"CLEAR"}),5000)  
    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
      newAnecdoteMutation.mutate({content,votes:0})
      event.target.anecdote.value = ''
      dispatch({type:"SET",
         payload: `New anecdote ${content} added`})
      setTimeout(() => dispatch({type:"CLEAR"}),5000)  

    
}


  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
