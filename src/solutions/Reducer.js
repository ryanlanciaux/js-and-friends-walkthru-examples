import React, { useReducer } from "react";

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
}

function Reducer() {
  const [state, dispatch] = useReducer(reduceFunction, initialState);

  const onCheck = (title, checked) => {
    dispatch({ type: "TOGGLE_TODO", payload: { title, completed: checked } });
  };
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
              {item.title}{" "}
            </label>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Reducer;
