import React from 'react';
// import { connect } from 'react-redux';
import './Controls.css';


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

        </div>
    );
}

export default Controls;