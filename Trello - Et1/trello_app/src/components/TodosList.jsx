import React from 'react'
import { connect } from 'react-redux';
import './TodoList.css';
import { deleteTodoAction, toggleCompleteAction } from '../services/redux/actions';

function filterTodos(todos = [], filter) {
  console.log(filter);


    if (filter === 'ALL') {
        return todos

    }
    if (filter === 'COMPLETED') {
        return todos.filter(todo => todo.completed)

    }
    if (filter === 'NO_COMPLETED') {
      return todos.filter((todo) => !todo.completed);
    }
    console.error('invalid filter', filter);

    return todos

}

function TodoList(props) {
    return (
      <div className='todoList'>
        {filterTodos(props.todos,props.filter).map((todo) => (
          <div
            className={`todo ${
              todo.completed ? 'completed' : 'uncompleted'
            }`}
            key={todo.id}
          >
            <div className='data'>
              <div className='text'>{todo.text}</div>
            </div>
            <div className='actions'>
              <button
                onClick={() => props.toggleCompleted(todo.id)}
              >
                {!todo.completed ? ' complete' : '✔️ uncomplete'}
              </button>
              <button onClick={() => props.delete(todo.id)}>
                {'❌ delete'}
              </button>
            </div>
          </div>
        ))}
      </div>
    );

}


const mapStateToProps = (state) => ({
  todos: state.todos,
  filter: state.visibility,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCompleted: toggleCompleteAction(dispatch),
  delete: (id) => deleteTodoAction(dispatch, id),
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default connected;
