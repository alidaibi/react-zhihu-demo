import React, { Component } from 'react';
import propTypes from 'prop-types';
import 'assets/styles/todo.less';

const FilterBtn = (props) => {
  if (props.filter === props.visiable) {
    return <span><i className={`fa fa-${props.iconName}`} /></span>;
  }
  return <a href='javascript:;' onClick={() => props.onFilterTodoClick(props.visiable)}><i className={`fa fa-${props.iconName}`} /></a>;
};

FilterBtn.propTypes = {
  filter: propTypes.string,
  visiable: propTypes.string,
  iconName: propTypes.String,
  onFilterTodoClick: propTypes.func
};
const TodoList = (props) => {
  const todos = [];
  props.todos.map((todo) => {
    todos.push(
      <TodoItems
        todo={todo}
        key={todo.name}
        onTodoClick={props.onTodoClick}
        onRemoveClick={props.onRemoveClick}
      />);
  });
  return (
    <div id='TodoList'>
      {todos}
    </div>
  );
};
TodoList.propTypes = {
  todos: propTypes.array,
  onTodoClick: propTypes.func,
  onRemoveClick: propTypes.func
};
const TodoItems = (props) => {
  const name = props.todo.name;
  const completed = props.todo.completed;
  return (
    <div className={'todo ' + (completed ? 'todo-completed' : '')} >
      <i className={'fa ' + (completed ? 'fa-dot-circle-o' : 'fa-circle-o')} />
      <span onClick={() => props.onTodoClick(name)}>{ name }</span>
      <i className='fa fa-times' onClick={() => props.onRemoveClick(name)} />
    </div>
  );
};
TodoItems.propTypes = {
  todo: propTypes.object,
  onTodoClick: propTypes.func,
  onRemoveClick: propTypes.func
};
const AddTodo = (props) => {
  return (
    <div id='AddTodo'>
      <input type='text' value={props.addText} placeholder='Add a todo...' onChange={props.onInputChange} />
      <button onClick={props.onAddClick}><i className='fa fa-plus' /></button>
    </div>
  );
};
AddTodo.propTypes = {
  addText: propTypes.string,
  onAddClick: propTypes.func,
  onInputChange: propTypes.func
};

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      filterTodos: [],
      addText: '',
      filter: 'all'
    };
    this.onAddClick = this.onAddClick.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onTodoClick = this.onTodoClick.bind(this);
    this.onRemoveClick = this.onRemoveClick.bind(this);
    this.onFilterTodoClick = this.onFilterTodoClick.bind(this);
  }
  onTodoClick(name) {
    const todos = this.state.todos;
    todos.map(todo => {
      if (todo.name === name) {
        todo.completed = !todo.completed;
      }
    });
    this.setState({ todos });
  }
  onAddClick() {
    const todos = this.state.todos;
    const text = this.state.addText;
    todos.push({ name: text, completed: false });
    this.setState({ filterTodos: todos, todos, addText: '' });
  }
  onRemoveClick(name) {
    const todos = this.state.todos.filter(todo => {
      return todo.name !== name;
    });
    this.setState({ todos, filterTodos: todos });
  }
  onInputChange(e) {
    this.setState({ addText: e.target.value });
  }
  onFilterTodoClick(filter) {
    let filterTodos = [];
    switch (filter) {
      case 'all':
        filterTodos = this.state.todos;
        break;
      case 'active':
        filterTodos = this.state.todos.filter(todos => !todos.completed);
        break;
      default:
        filterTodos = this.state.todos.filter(todos => todos.completed);
    }
    this.setState({ filter, filterTodos });
  }
  render() {
    return (
      <div id='TodoApp'>
        <div id='Header'>
          <FilterBtn filter={this.state.filter} visiable='all' iconName='list' onFilterTodoClick={this.onFilterTodoClick} />
          <FilterBtn filter={this.state.filter} visiable='active' iconName='circle-o' onFilterTodoClick={this.onFilterTodoClick} />
          <FilterBtn filter={this.state.filter} visiable='completed' iconName='dot-circle-o' onFilterTodoClick={this.onFilterTodoClick} />
        </div>
        <TodoList
          todos={this.state.filterTodos}
          onTodoClick={this.onTodoClick}
          onRemoveClick={this.onRemoveClick}
        />
        <AddTodo
          onAddClick={this.onAddClick}
          onInputChange={this.onInputChange}
          addText={this.state.addText}
        />
      </div>
    );
  }
}

export default Todo;
