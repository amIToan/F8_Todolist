export default function html([first, ...strings], ...values) {
    return values.reduce((acc, current) => acc.concat(current, strings.shift()), [first]).filter( ele => ele && ele !== true || ele ===0).join('')
}
export function createStore(reducer) { // dc passed vs arguments : reducer = (preState,action,args)
    let state = reducer(); // (preState,action,args)() và trả ra Next State= {todos: Array(2)} tức là = int ban đầu 
    const roots = new Map();
    function render() {
        for( const [root, component] of roots) { // vì hàm map khi lặp nó sẽ trả ra 1 array tập hợp các key và value
            const output = component();
            root.innerHTML = output;
        }
    }
    return {
        attach(component, root){
            roots.set(root, component)
            render()
        },
        connect(selector = state => state){
            return component => (props, ...args) =>
            component(Object.assign({}, props, selector(state), ...args))
        },
        dispatch(action, ...args) {
            state = reducer(state,action, args); //state=preState |  reducer(state,action, args) = (preState,action,args)()
            // always an array; từ hàm reducer ở trên thì ta có state = nextState
            render()
        }
    }
}
