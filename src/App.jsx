// eslint-disable-next-line no-unused-vars
import React, {Component} from 'react'
import './App.css'

// Using class component to create to-do-list app
class ToDoList extends Component{
  constructor(props) {
    super(props)
  
    this.state = {
        tasks: [],
        newTask: ''
    }
  }

  handleChange = (event)=>{
    this.setState({newTask: event.target.value})
  }

  // TO add tasks
  addTask = ()=>{
    if (this.state.newTask !==''){
      this.setState({
        tasks: this.state.tasks.concat(this.state.newTask),
        newTask: ''
      })
      }
  }


// To update tasks
  handleTaskChange = (index, event) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks[index] = event.target.value;
    this.setState({ tasks: updatedTasks });
  };

  // To delete Tasks
  deleteTask = (index) => {
    const updatedTasks = [...this.state.tasks];
    updatedTasks.splice(index, 1);
    this.setState({ tasks: updatedTasks });
  };

// Render 
    render(){
      return(
        <div>
          <h1>To-Do List</h1>
          <div>
            <input type="text" placeholder='create a todo!' value={this.state.newTask} onChange={this.handleChange}/>
            <button onClick={this.addTask}>ADD</button>
          </div>
          <div className='all-list'>
          {this.state.tasks.map((task, index) => (
              <div key={index} className='task-column'>
                <input key={index} type='text' value = {task} onChange={(event)=>this.handleTaskChange(index, event)} />
                <button onClick={()=>this.deleteTask(index)}>Delete</button>
              </div>
          ))}
          </div>
        </div>
      )
    }
  }


export default ToDoList
