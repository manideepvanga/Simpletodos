// Write your code here
import './index.css'

const TodoItem = props => {
  const {item, deleted} = props
  const {title, id} = item

  const InitateDelete = () => {
    deleted(id)
  }
  return (
    <li className="listitem">
      <p>{title}</p>
      <button onClick={InitateDelete}>Delete</button>
    </li>
  )
}
export default TodoItem
