import { createStore} from "./core.js"
import reducer from "./reducer.js"
import logger from "./logger.js";
const { attach, connect, dispatch} = createStore(logger(reducer));// như này hàm đã logger đã chạy rồi <=>reducer = (preState,action,args)
window.dispatch = dispatch;
export { attach, connect}