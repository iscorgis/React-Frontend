import React from 'react'
import { connect } from 'react-redux';
import './TodoList.css';
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from 'react-icons/fa';

import { deleteTodoAction, toggleCompleteAction, createItemAction,deleteItemAction, toggleCompleteItemAction,
            toggleItemUpAction,toggleItemDownAction } from '../services/redux/actions';

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

function items(items = [], props,todoid) {
   console.log(items);
    return items.map((item) => 
          <div className='itemListData'>
            
            <div className={`itemHeader${
                item.itemState ? 'completed' : 'uncompleted'
                }`}>
             <h5>Item: {item.textItem} </h5>
            </div>
           
            <div className='itemListActions'>
              <button className={`itemListActionCompontent${
                item.itemState ? 'completed' : 'uncompleted'
                }`}
                onClick={() => props.toggleItemCompleted(item.idItem,todoid)}
                
              >
                {!item.itemState ? ' complete' : '✔️ uncomplete'}
              </button>

              <button className='itemListActionCompontent' onClick={() => props.deleteItem(item.idItem,todoid)}>
                {'❌ delete'}
              </button>
              
              <button className='itemListActionCompontent' onClick={() => props.toggleItemUp(item.idItem,todoid)}>
               <FaArrowAltCircleUp/> {' up'}
              </button>

              <button className='itemListActionCompontent' onClick={() => props.toggleItemDown(item.idItem,todoid)}>
              <FaArrowAltCircleDown/> {'  down'}
              </button>         
              
            </div>
          
          </div>
          )

}


function TodoList(props) {
  
  let inputItemValue = ""
  const onKeyUpHandle = (e,id) => {
    console.log('key up', e.keyCode);

    inputItemValue = e.target.value

    if (e.keyCode === 13 && e.target.value.trim()) {
        props.createItem(id, e.target.value.trim())
      e.target.value = '';
    }
  };
  
  
    return (
      
      <div className='flexTodoList'>
        {filterTodos(props.todos,props.filter).map((todo) => (
          <div
            className={`todo ${
              todo.completed ? 'completed' : 'uncompleted'
            }`}
            key={todo.id}
          >
 

          <div className='TodoHeader'>
              <div className='text'>{todo.text}</div>

              <div className='actions'>
              {/* <button
                onClick={() => props.toggleCompleted(todo.id)}
              >
                {!todo.completed ? ' complete' : '✔️ uncomplete'}
              </button> */}
              <button onClick={() => props.delete(todo.id)}>
                {'❌ delete '}
              </button>
            </div>
            
              <div className="Controlitems">
                <div className='controls'>
                  <input 
                    type='text'
                    placeholder='add item here'
                    onKeyUp={(e) => onKeyUpHandle(e,todo.id)}
                  />

                <button onClick={() => props.createItem(todo.id, inputItemValue) } >
                    Create
                </button>
                  
                </div>

                <div className="itemlist">
                {items(todo.items,props,todo.id)}
  
                </div>  


            </div>

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
  deleteItem: (id, todoid) => deleteItemAction(dispatch, id, todoid),
  toggleItemCompleted: (id,todoid) => toggleCompleteItemAction(dispatch, id, todoid),
  toggleItemUp: (id, todoid) => toggleItemUpAction(dispatch, id, todoid),
  toggleItemDown: (id, todoid) => toggleItemDownAction(dispatch, id, todoid),
});

const connected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default connected;
