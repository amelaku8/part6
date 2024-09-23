import { createContext,useReducer,useContext } from "react"

const notificationReducer = (state,action) => {
  switch (action.type) {
    case "CLEAR":
      return null;
    case "SET" :
      return action.payload

    default:
      return state

      
  }
}
export const useNotificationValue = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[0]
}
export const useNotificationDispatch = () => {
  const notificationAndDispatch = useContext(NotificationContext)
  return notificationAndDispatch[1]
}

const NotificationContext = createContext("")
export const NotificationContextProvider = ({children}) => {
  const [notification,notificationDispatch] = useReducer(notificationReducer)
  return (
  <NotificationContext.Provider value={[notification,notificationDispatch]}>
    {children}
  </NotificationContext.Provider> )
}

export default NotificationContext
