import storage from "./util/storage.js";
const init = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.complete,
        complete: todo => todo.complete,
    },
    editedIndex: null,

}
const actions = {
    add({ todos }, title) {
        if (title) {
            todos.push({ title, complete: false });
            storage.set(todos);
        }
    },
    toggle({ todos }, index) {
        todos[index].complete = !todos[index].complete;
        storage.set(todos);
    },
    toggleAll({ todos }, completed) {
        todos.forEach(todo => todo.complete = completed);
        storage.set(todos);
    },
    destroy({ todos }, index) {
        todos.splice(index, 1);
        storage.set(todos);
    },
    switchLayer(state, args) {
        state.filter = args;
    },
    completedDele(state) {
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    editingValue(state, index) {
        console.log(index)
        state.editedIndex = index;
    },
    endedEdit(state, title) {
        if (state.editedIndex !== null) {
            if (title) {
                state.todos[state.editedIndex].title = title;
                storage.set(state.todos)
            } else {
                this.destroy(state, state.editedIndex)
            }
            state.editedIndex = null;
        }

    },
    cancelEditing(state) {
        state.editedIndex = null;
    }
}
export default function reducer(state = init, action, args) { //args is always an array
    actions[action] && actions[action](state, ...args) // invoke a methods of an object.
    return state
}