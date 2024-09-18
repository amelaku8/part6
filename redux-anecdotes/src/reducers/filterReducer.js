const filterReducer = (state = "",action) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload
      

    default:
      break;
  }

  return state 
}

export const filterChange = (content) => {
  return { type:"SEARCH", payload:content   }
}  
export default filterReducer
