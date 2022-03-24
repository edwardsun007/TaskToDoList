import * as React from "react";
import "./style.css";

export const ToDoList = () => {
  const [toDoList, setToDoList] = React.useState([]);
  const [isTaskComplete, setIsTaskComplete] = React.useState([]);
  const [inputVal, setInputVal] = React.useState("");

  const handleOnChange = (e) => {
    setInputVal(e.target.value);
  };

  const validateInput = (input) => {
    return input !== "";
  };

  const onAddClick = () => {
    if (!validateInput(inputVal)) {
      return;
    }

    setToDoList([...toDoList, inputVal]);
    setIsTaskComplete([...isTaskComplete, false]);
  };

  const handleCheckTask = (idx) => {
    const status = isTaskComplete;
    status[idx] = !status[idx];
    setIsTaskComplete([...status]);
  };

  return (
    <div className="container">
      <header>
        <h2>ToDo List</h2>
      </header>
      <main>
        <div className="inputGroup">
          <input type="text" value={inputVal} onChange={handleOnChange} />
          <button onClick={onAddClick}>Add</button>
        </div>
        <section className="listGroup">
          <p>
            {isTaskComplete.filter((status) => status === false)} remaining out
            of {toDoList.length} tasks
          </p>
          <ul>
            {toDoList.map((toDo, idx) => (
              <div key={idx}>
                <input
                  type="checkbox"
                  name={toDo}
                  onChange={() => handleCheckTask(idx)}
                />
                <label
                  htmlFor={toDo}
                  className={isTaskComplete[idx] ? ".is-done" : ""}
                  style={
                    isTaskComplete[idx]
                      ? { textDecoration: "line-through" }
                      : null
                  }
                >
                  {toDo}
                </label>
              </div>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};
