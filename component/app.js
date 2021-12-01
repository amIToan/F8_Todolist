import html from "../core.js";
import Header from "./header.js";
import Todolist from "./Todolist.js";
import footer from "./footer.js";
import { connect } from "../store.js";
function App({todos}) {
    return html`
    <section class="todoapp" >
        ${Header()}
        ${todos.length >0 && Todolist()}
        ${todos.length >0 && Todolist() && footer()}
    </section>
    `
}
export default connect()(App)