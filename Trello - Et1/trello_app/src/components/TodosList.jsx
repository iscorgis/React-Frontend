import React from 'react'
import { connect } from 'react-redux';
import './TodoList.css';
import { deleteTodoAction, toggleCompleteAction, createItemAction } from '../services/redux/actions';


// function Controls(props) {
//   const onKeyUpHandle = (e) => {
//     console.log('key up', e.keyCode);

//     if (e.keyCode === 13 && e.target.value.trim()) {
//       // props.addTodo(e.target.value.trim());
//       e.target.value = '';
//     }
//   };

//   return (
//       <div className='controls'>
//         <input
//           type='text'
//           placeholder='add item here'
//           onKeyUp={(e) => onKeyUpHandle(e)}
//         />
//       <button onClick={() => props.changeVisibility('Create')} >
//           Create
//       </button>

//       </div>
//   );
// }


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
    
  const onKeyUpHandle = (e,id) => {
    console.log('key up', e.keyCode);

    if (e.keyCode === 13 && e.target.value.trim()) {
      // props.addTodo(e.target.value.trim());
        props.createItem(id, e.target.value.trim())
      e.target.value = '';
    }
  };
  
  
    return (
      
      <div className='todoList'>
        {filterTodos(props.todos,props.filter).map((todo) => (
          <div
            className={`todo ${
              todo.completed ? 'completed' : 'uncompleted'
            }`}
            key={todo.id}
          >
   <div className="Controlitems">
        {/* <div className='text'>{todo.id}</div>
          <button onClick={() => props.createItem(todo.id,'aaa')}>
                {'create item'}
          </button> */}
        <div className='controls'>
          <input 
            type='text'
            placeholder='add item here'
            onKeyUp={(e) => onKeyUpHandle(e,todo.id)}
          />
        {/* <button onClick={() => props.createItem(todo.id,'Create')} > */}
        <button onClick={() => props.createItem(todo.id, 'element123') } >
            Create
        </button>

        </div>

    </div>

            <div className='data'>
              <div className='text'>{todo.text}</div>
            </div>
            <div className='actions'>
              <button
                onClick={() => props.toggleCompleted(todo.id)}
              >
                {!todo.completed ? ' complete' : '✔️ uncomplete'}
              </button>
              <button onClick={() => props.createItem(todo.id)}>
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
  createItem : (id,text) => createItemAction(dispatch, id, text),
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default connected;
