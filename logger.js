export default function logger(reducer) {
    return (preState,action,args) =>{
        console.group(action)
        console.log('Previous Stage', preState)
        console.log('Action Arguments:', args);
        const nextStage = reducer(preState,action,args)
        console.log('Next State:', nextStage)
        console.groupEnd()
        return nextStage // cai ham nay se tra ve 1 object chính la cai state
    }
}