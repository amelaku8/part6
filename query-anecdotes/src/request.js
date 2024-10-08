import axios from "axios";

const baseUrl = "http://localhost:3001/anecdotes"
export const getAnecdote = async () => { 
  return axios.get(baseUrl).then(res => res.data)
}
export const  createAnecdote = async (anecdote) => {

  return axios.post(baseUrl,anecdote).then(res => res.data)
}
export const voteAnecdote = async (anecdote) => {
  return axios.put(`${baseUrl}/${anecdote.id}`,{...anecdote, votes :anecdote.votes + 1}).then(res => res.data) }
