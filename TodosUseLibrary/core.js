//Tempalte
export default function html([first, ...strings], ...values){
    return values.reduce((acc, curr) => acc.concat(curr, strings.shift()),[first])
            .filter(x => x && x !== true || x === 0)
            .join('');
}
export function createStore(reducer){
    let state = reducer();
    let roots = new Map();

    function render(){
        for (const [root, component] of roots) {
            const output = component();
            root.innerHTML = output;
        }
    }
    return{
        attach(component, root){
            roots.set(root, component);
            render();
        },
        connect(selector = state => state){
            return component => (props, ...args) => component(Object.assign({}, props, selector(state), ...args));
            //Nhận đối số là component sau đó nhận đc props va args sau đó gọi lại hàm component và đưa dl cho component
        },
        dispatch(action, ...args) {
            state = reducer(state, action, args);
            render();
        }
    }
}