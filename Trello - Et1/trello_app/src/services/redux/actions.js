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


export const createItemAction = (dispatch,id,text) =>
  dispatch({
    type: 'ADD_ITEM',
    idItem : Date.now(),
    text : text,
    payload: id
  });