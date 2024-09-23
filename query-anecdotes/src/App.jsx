import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery,useMutation,useQueryClient} from '@tanstack/react-query'
import { getAnecdote,voteAnecdote  } from './request'
import { useNotificationDispatch} from './NotificationContext'
const App = () => {

  const queryClient = useQueryClient()

  const voteMutation = useMutation({
    mutationFn:voteAnecdote,
    onSuccess : (newAnecdote) => {

      let anecdotes = queryClient.getQueryData(['anecdotes'])
      console.log(newAnecdote)
      anecdotes = anecdotes.filter(anecdote => anecdote.id !== newAnecdote.id )
      anecdotes.push(newAnecdote)
      queryClient.setQueryData(['anecdotes'],anecdotes.sort((a,b) => b.votes - a.votes));

    }

  })

  const dispatch =useNotificationDispatch() 
  const handleVote = (anecdote) => {
    voteMutation.mutate(anecdote)
    dispatch({type:"SET",
      payload: `You voted for ${anecdote.content}`})
    setTimeout(() => dispatch({type:"CLEAR"}),5000)  
      
    }
  

  const result = useQuery({
    queryKey : ["anecdotes"],
    queryFn :  getAnecdote,
    retry:1,
    refetchOnWindowFocus:false

  })
  if (result.isPending) {
    return <div> loading anecdotes </div>
  }
  if (result.isError) {
    return <div> anecdote service not available due to problems in server </div>
  }
  const anecdotes = result.data.sort((a,b) => b.votes - a.votes)
 
  return (
    <div>
      <h3>Anecdote app</h3>
    
      <Notification />
      <AnecdoteForm />
    
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  ) 
}

export default App
