export const deleteTodoAction = (dispatch, id) =>
  dispatch({
    type: 'DELETE_TODO',
    payload: id,
  });

export const toggleCompleteAction = (dispatch) => (id) =>
  dispatch({
    type: 'TOGGLE_COMPLETED_TODO',
    payload: id,
  });

  export const deleteItemAction = (dispatch, id, todoid) =>
  dispatch({
    type: 'DELETE_ITEM',
    payload: id,
    todoid: todoid,
  });

export const toggleCompleteItemAction = (dispatch) => (id, todoid) =>
  dispatch({
    type: 'TOGGLE_COMPLETEDITEM_TODO',
    payload: id,
    todoid: todoid,
  });


export const createItemAction = (dispatch,id,text) =>
  dispatch({
    type: 'ADD_ITEM',
    idItem : Date.now(),
    text : text,
    payload: id
  });