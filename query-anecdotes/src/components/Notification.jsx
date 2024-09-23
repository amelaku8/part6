import { useNotificationValue} from "../NotificationContext"

const Notification = () => {

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 5
  }
  const value = useNotificationValue()

  if (!value ) {
    return
  }
  

  return (
    <div style={style}>
      {value}
      
    </div>
  )
}

export default Notification
