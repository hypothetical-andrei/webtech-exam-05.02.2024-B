import { useState, useEffect } from 'react'
import store from '../stores/TaskStore'

function TaskForm (props) {
  const { item } = props
  const [ description, setDescription ] = useState(item.description)
  const [ priority, setPriority ] = useState(item.priority)

  // TODO
}

export default TaskForm