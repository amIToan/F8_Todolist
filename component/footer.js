import html from "../core.js"
import {connect} from "../store.js"

function footer({ todos, filters, filter}) {
    return html`
    <footer class="footer">
    <span class="todo-count"><strong>${todos.filter(filters.active).length}</strong> item left</span>
    <ul class="filters">
        ${Object.keys(filters).map(type => html`
        <li>
        <a class=${filter === type && 'selected'} href="#/"
        onclick="dispatch('switchLayer', '${type}')">${type[0].toUpperCase(0) + type.slice(1)}</a>
        </li>
        `)}
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    ${todos.filter(filters.complete).length > 0 && html`
    <button class="clear-completed"
    onclick= "dispatch('completedDele')">Clear completed</button>
    </footer>
    `}
    `
}
export default connect()(footer)