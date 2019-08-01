import React, { useReducer } from "react";

/*
 In this one, we want to modify both the completed status of 
 the todos as well as track the next thing.

 1) Introduce the useReducer (reduceFunction, initialState)
    const [state, dispatch] = useReducer(reduceFunction, initialState);

 2) Update the onCheck method to use the dispatch 
    dispatch({ type: "TOGGLE_TODO", payload: { title, completed: checked } });

 3) Update the reduceFunction to use a switch
    The full body of the function is commented below
*/

const initialState = {
  todos: [
    { title: "Props", completed: false },
    { title: "State", completed: false },
    { title: "useEffect", completed: false },
    { title: "refs", completed: false },
    { title: "useReducer", completed: false }
  ],
  nextTodoTitle: "Props"
};

function reduceFunction(state, action) {
  return state;
}

function Reducer() {
  const state = { todos: [], nextTodoTitle: "Make this work" };
  const onCheck = (title, checked) => {};
  return (
    <>
      <h2>{state.nextTodoTitle}</h2>
      <ul>
        {state.todos.map(item => (
          <li>
            <label>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={e => onCheck(item.title, e.target.checked)}
              />
              {item.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Reducer;

/*

  switch (action.type) {
    case "TOGGLE_TODO":
      const todos = [
        action.payload,
        ...state.todos.filter(item => item.title !== action.payload.title)
      ];

      const unfinishedTodos = todos.filter(item => item.completed === false);

      const nextTodoTitle =
        unfinishedTodos.length > 0 ? unfinishedTodos[0].title : "Finished!";

      return { todos, nextTodoTitle };
    default:
      return state;
  }

*/
