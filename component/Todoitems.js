import html from "../core.js";
function todoItems(todo, index, editedIndex) {
    return html`
    <li class="${todo.complete && "completed"} ${editedIndex === index && 'editing'}">
						<div class="view">
							<input class="toggle" type="checkbox" ${todo.complete && "checked"}
							onchange="dispatch('toggle',${index})"
							>
							<label ondblclick ="dispatch('editingValue', ${index})">${todo.title}</label>
							<button class="destroy" onclick="dispatch('destroy', ${index})"></button>
						</div>
						<input class="edit" value="${todo.title}"
						onkeyup="event.keyCode ===  13  && dispatch('endedEdit', this.value.trim()) || event.keyCode === 27 && dispatch('cancelEditing', this.value.trim()) "
						onblur ="dispatch('endedEdit', this.value.trim())"
						>
	</li>
    `
}
export default todoItems