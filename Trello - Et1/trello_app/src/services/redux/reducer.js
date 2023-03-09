const initialState = {
  visibility: 'ALL',
  todos: [
    {
      text: 'tarea demo 1',
      id: 1,
      completed: true,
      items: [{idItem:1,textItem:'item demo 1', itemState: 'uncompleted'},{idItem:2,textItem:'item demo 2',itemState: 'uncompleted'}],
    },
    {
      text: 'tarea demo 2',
      id: 2,
      completed: false,
      items: [],
    },
    {
      text: 'tarea demo 3',
      id: 3,
      completed: true,
      items: [],
    },
  ],
};

function reducer(state = initialState, action) {
  console.log('main reducer. action:', action);

  switch (action.type) {
    case 'ADD_ITEM':
      // type: 'ADD_ITEM',
      // idItem : Date.now(),
      // text : text,
      // payload: id
      console.log('main reducer ADD_ITEM. action:', action);
      return {
        ...state,
        todos: state.todos.map(
          (todo) => {
            console.log('todoId',todo.id )
            console.log('payload',action.payload )
           
                 if (todo.id === action.payload) {
                  todo.items.push({idItem:action.idItem,textItem:action.text});
                 }
              return todo
          },
        ),
      };
 
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            text: action.payload,
            completed: action.completed || false,
            id: action.id,
          },
        ],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(
          (todo) => todo.id !== action.payload,
        ),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => {
            console.log('todoId',todo.id )
            console.log('action todo id',action.todoid )
            console.log('payload',action.payload )
            console.log('item id',action.id)
           
                 if (todo.id === action.todoid) {
                  const index = todo.items.indexOf(action.id);
                  todo.items.splice(index,1);
                 }
              return todo
          },
        ),
      };
    case 'TOGGLE_COMPLETED_TODO':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => {
              if (todo.id === action.payload) {
                  todo.completed = !todo.completed
              }
              return todo
          },
        ),
      };
    case 'CHANGE_VISIBILITY':
      return {
        ...state,
        visibility: action.payload,
      };

    default:
      return state;
  }
}

export default reducer;
