import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"
import { notify } from "./notificationReducer"
const anecdotesAtStart = [
  
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const anecdoteSlice = createSlice({
  name: "anecdotes",
  initialState : [],
  reducers : {
    createAnecdote : (state,action) =>  {
      const content = action.payload
      state.push(content)
    },
    votes : (state,action) => {
      const changedAnecdote = {...action.payload,votes : action.payload.votes +1}
      return state.map(anecdote =>anecdote.id !== changedAnecdote.id ? anecdote : changedAnecdote)

    },
    setAnecdotes : (state,action) => {
        return action.payload
      } 
  }
})
export const {votes,createAnecdote ,setAnecdotes} = anecdoteSlice.actions

export const initiliazeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}
export const vote = (anecdote) => {
  return async dispatch => {
     await anecdoteService.voteAnecdote(anecdote) 
    dispatch (votes(anecdote))
  }
}

export const createNew = (content) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.createNew({content:content,votes:0})
    dispatch(createAnecdote(anecdotes))
  }
}
export default anecdoteSlice.reducer
