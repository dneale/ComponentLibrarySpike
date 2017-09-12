import React, {Component} from 'react';

class TodoWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
      tasks: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:5000/api/todo/')
      .then((response) => response.json())
      .then((responseJson) => {
        const itemList = responseJson.map((item) => {
          return item;
        });
        this.setState({
          tasks: itemList
        })
      })
      .catch(e => {
        console.log(e);
      });
  };

  onSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      name: this.state.task,
      isComplete: false
    };
    fetch('http://localhost:5000/api/todo/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify(newTask)
    })
      .then((response) => response.json())
      .then(responseJson => {
        this.setState({
          tasks: [
            ...this.state.tasks,
            responseJson
          ],
          task: ''
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  updateTask = (id) => {
    const tasksCopy = this.state.tasks.map(task => {
      if (task.id === id) {
        task.isComplete = true;
      }
      return task;
    });
    this.setState({
      tasks: tasksCopy
    });
  };

  completeTask = (task) => {
    fetch(`http://localhost:5000/api/todo/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        ...task,
        isComplete: true
      })
    })
      .then((response) => response.json())
      .then(responseJson => {
        this.updateTask(task.id);
      })
      .catch(error => {
        console.log(error);
      });
  };

  displayTasks = (ListItem) => {
    return this.state.tasks.map((task) => {
      return (
        <ListItem task={task} onChange={this.completeTask.bind(null, task)} />
      )
    })
  };

  onChange = (event) => {
    this.setState({
      task: event.target.value
    })
  };

  render = () => {
    return (
      <this.props.ui task={this.state.task}
                     onChange={this.onChange}
                     displayTasks={this.displayTasks}
                     completeTask={this.completeTask}
                     onSubmit={this.onSubmit}
      />
    )
  }
}

export default TodoWrapper;