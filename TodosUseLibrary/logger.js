export default function logger(reducer){
    return (prevState, action, args) => {
        console.log("PrevState: " + JSON.stringify(prevState));
        console.log("Action: " + action);
        console.log("Arguments: " + args);
        const nextState = reducer(prevState, action, args);
        console.log("Next state : " + JSON.stringify(nextState));
        return nextState;
    }
}