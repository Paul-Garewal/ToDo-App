import React from 'react';
//Import Components
import Todo from './Todo';


const ToDolist = ({ todos, setTodos, filteredTodos }) => {

    return(
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <Todo key={todo.id} todo={todo} text={todo.text} setTodos={setTodos} todos={todos}/>
        ))}
      </ul>
          
    </div>
    );
};

export default ToDolist;