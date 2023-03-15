const initialState = {
  visibility: 'ALL',
  todos: [
    {
      text: 'Lista demo 1',
      id: 1,
      completed: false,
      // items: [{idItem:1,textItem:'item demo 1', itemState: 'complete'},{idItem:2,textItem:'item demo 2',itemState: 'complete'}],
      items: [{idItem:1,textItem:'item demo 1', itemState: false},{idItem:2,textItem:'item demo 2',itemState: false}],
    },
    {
      text: 'Lista demo 2',
      id: 2,
      completed: false,
      items: [],
    },
    {
      text: 'Lista demo 3',
      id: 3,
      completed: false,
      items: [],
    },
  ],
};


function item_swap(arr, old_index, new_index) {
  while (old_index < 0) {
      old_index += arr.length;
  }
  while (new_index < 0) {
      new_index += arr.length;
  }
  if (new_index >= arr.length) {
      var k = new_index - arr.length + 1;
      while (k--) {
          arr.push(undefined);
      }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);

};


function reducer(state = initialState, action) {
  // console.log('main reducer. action:', action);

  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        todos: state.todos.map(
          (todo) => {
                 if (todo.id === action.payload) {
                  todo.items.push({idItem:action.idItem,textItem:action.text,itemState:false});
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
            items: [],
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

                 if (todo.id === action.todoid) {
                  const idx = todo.items.findIndex(({ idItem }) => idItem === action.payload);
                  if (idx >= 0 ){ 
                    todo.items.splice(idx,1);
                  }
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
      case 'TOGGLE_COMPLETEDITEM_TODO':
        return {
          ...state,
          todos: state.todos.map(
            (todo) => {             
                   if (todo.id === action.todoid) {
                    const idx = todo.items.findIndex(({ idItem }) => idItem === action.payload);
                    if (idx >= 0 ){                     
                      todo.items[idx].itemState = !todo.items[idx].itemState 
                    }    
                   }
                return todo
            },
          ),
        };
      case 'TOGGLE_UPITEM':
        return {
          ...state,
          todos: state.todos.map(
            (todo) => {             
                   if (todo.id === action.todoid) {
                    const idx = todo.items.findIndex(({ idItem }) => idItem === action.payload);
                    item_swap(todo.items,idx,idx-1 )
                   }
                return todo
            },
          ),
        };
        case 'TOGGLE_DOWNITEM':
          return {
            ...state,
            todos: state.todos.map(
              (todo) => {             
                     if (todo.id === action.todoid) {
                      const idx = todo.items.findIndex(({ idItem }) => idItem === action.payload);
                      item_swap(todo.items,idx,idx+1 )
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
