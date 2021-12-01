import html from "../core.js";

function Header() {
    return html`
    <header class="header">
    <h1>Todos</h1>
    <input
     class="new-todo" placeholder="What needs to be done?" 
     autofocus
     onkeyup = "event.keyCode === 13 && dispatch( 'add', this.value.trim()) "
     >
    </header>
    `
}
export default Header
// Khi ma dispatch thì sẽ như sau :
// dispatch('add', [123]) {
//     vậy thì state lúc này sẽ là : state = init và {title, complete:false}
//     render()
// }