const displayTasks = ({ list, listItem }) => {
  return list.map((task) => {
    return (
      <listItem key={task.id} onChange={this.completeTask.bind(null, task)} checked={task.isComplete} label={task.name} />
    )
  })
};