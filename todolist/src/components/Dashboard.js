import React from 'react';
import TodoItem from './TodoItem';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      newTodo: '',
      selected: ' '
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(todo) {
    this.setState({ selected: todo })
  }

  handleChange (event) {
    this.setState({newTodo: event.target.value});
  }
  
  handleSubmit (event) {
    event.preventDefault()
    const updated = this.state.data.concat([{title: this.state.newTodo, list: 'incompleted'}])
    this.setState({data: updated, newTodo: ''});
  }

  handleLeft () {
    const copyData = this.state.data.slice(0);

    copyData.forEach(todo => {
      if (todo.title === this.state.selected.title) {
        if (todo.list === 'inProgress') {
          todo.list = 'incompleted'
        } else if (todo.list === 'completed') {
          todo.list = 'inProgress'
        }
      }
    })

    this.setState({data: copyData, selected: ''})
  }

  handleRight () {
    const copyData = this.state.data.slice(0)
    
    copyData.forEach(todo => {
      if (todo.title === this.state.selected.title) {
        if (todo.list === 'incompleted') {
          todo.list = 'inProgress'
        } else if (todo.list === 'inProgress') {
          todo.list = 'completed'
        }
      }
    })

    this.setState({ data: copyData, selected: ''});
  }

   renderIncompleted () {
     const incomplete = this.state.data.filter (todo => {
       return todo.list === 'incompleted'
     })

     return incomplete.map((todo, idx) => {
       return <TodoItem key={idx} handleSelected={this.handleClick} todo={todo} />;
     })
   }

   renderinProgress () {
     const inProgress = this.state.data.filter (todo => {
       return todo.list === 'inProgress'
     })

     return inProgress.map((todo, idx) => {
       return <TodoItem key={idx} handleSelected={this.handleClick} todo={todo} />;
     })
   }

   renderCompleted () {
     const completed = this.state.data.filter (todo => {
       return todo.list === 'completed'
     })

     return completed.map( (todo,idx) => {
       return <TodoItem key={idx} handleSelected={this.handleClick} todo={todo} />;
     })
   }

   delete() {
     const copyData = this.state.data.slice(0);
     let deleteIndex;

     copyData.forEach( (todo, idx) => {
      if (todo.title === this.state.selected) {
        deleteIndex = idx;
      }
     })

     const updated = this.state.data.slice(0, deleteIndex).concat(this,state,data,slice(deleteIndex))
     this.setState({ data: updated })
    }


  render() {

    return <div>
        <div className="arrow-container">
          <button onClick={this.handleLeft}>Move Left</button>
          <button onClick={this.handleRight}>Move Right</button>
          <button onClick={this.delete}>Delete Todo</button>
        </div>
        <form className="todo-form" onSubmit={this.handleSubmit}>
          <label>
            Create Todo
            <input onChange={this.handleChange} value={this.state.newTodo} />
          </label>
        </form>
        Dashboard
        <div className="todolist-container">
          <div className='header-container'>
            <h2>Incomplete</h2>
            <ul className="todo-list">{this.renderIncompleted()}</ul>
          </div>
        <div className='header-container'>
            <h2>In Progress</h2>
            <ul className="todo-list">{this.renderinProgress()}</ul>
          </div>
        <div className='header-container'>
            <h2>Complete</h2>
          <ul className='todo-list'>{this.renderCompleted()}</ul>
          </div>
        </div>
      </div>;
  }
}

export default Dashboard;