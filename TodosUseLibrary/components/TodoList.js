import html from "../core.js";
import TodoItem from "./TodoItem.js";
import { connect } from "../store.js";
const connector = connect();
const TodoList = ({todos, filters, filter}) => {
  const data = (filters[filter]);
  return html`
    <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" 
        onchange="dispatch('toggleAll', this.checked)" 
        ${todos.every(filters.completed) && 'checked'}/>
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        ${todos.filter(data).map(todo => TodoItem({todo}))}
      </ul>
    </section>
  `;
};
export default connector(TodoList);
