import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => (
  <>
    <h3>Todo List</h3>
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
    <hr />
  </>
);
export default TodoList;
