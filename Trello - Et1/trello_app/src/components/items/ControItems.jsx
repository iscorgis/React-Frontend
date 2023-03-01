import React from 'react';
import { connect } from 'react-redux';
import './ControlItems.css';


function Controls(props) {
    const onKeyUpHandle = (e) => {
      console.log('key up', e.keyCode);
  
      if (e.keyCode === 13 && e.target.value.trim()) {
        props.addTodo(e.target.value.trim());
        e.target.value = '';
      }
    };

    return (
        <div className='controls'>
          <input
            type='text'
            placeholder='add todo here'
            onKeyUp={(e) => onKeyUpHandle(e)}
          />
        <button onClick={() => props.changeVisibility('Create')} >
            Create
        </button>

        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: (text) => {
      console.log('dispatch ADD_TODO');
  
      dispatch({
        type: 'ADD_TODO',
        payload: text,
        completed: false,
        id: Date.now(),
      });
    },
    changeVisibility: (setting) =>
      dispatch({
        type: 'CHANGE_VISIBILITY',
        payload: setting,
      }),
  });
  
  const connected = connect(null, mapDispatchToProps)(Controls);
  
export default connected;
// export default Controls;