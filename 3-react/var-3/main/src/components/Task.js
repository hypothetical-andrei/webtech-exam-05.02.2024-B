function Task (props) {
  let { item, onSelect } = props

  return (
    <div>
      {item.description} {item.priority}
      {/* TODO */}
    </div>
  )

}

export default Task
