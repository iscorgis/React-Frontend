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
