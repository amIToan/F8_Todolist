const T0DOS_STORAGE_KEY = 'TODOS'
export default {
    get(){
        return JSON.parse(localStorage.getItem(T0DOS_STORAGE_KEY)) || []
    },
    set(todos){
        localStorage.setItem(T0DOS_STORAGE_KEY, JSON.stringify(todos))
    }
}