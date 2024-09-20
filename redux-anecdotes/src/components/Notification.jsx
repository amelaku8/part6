import { useSelector , useDispatch} from "react-redux"
import { notify } from "../reducers/notificationReducer"

const Notification = () => {
  const dispatch = useDispatch()
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  const notification = useSelector(state => state.notification)
  if (notification){
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
}

export default Notification
