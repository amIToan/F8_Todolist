import html from "../core.js";
import { connect } from "../store.js";
import todoItems from "./Todoitems.js";
function Todolist({todos, filters, filter, editedIndex}) {
    return html`
    <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox"
                onchange="dispatch('toggleAll', this.checked)"
                ${todos.every(filters.complete) && 'checked'}
                >
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
                    ${todos.filter(filters[filter]).map((todo, index) => todoItems(todo, index, editedIndex))}
                </ul>
    </section>
    `
}
export default connect()(Todolist);