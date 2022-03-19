import html from '../core.js';
import {connect} from '../store.js';
const connector = connect();
function App(props){
    const {cars, isAuthenticated} = props;
    
    return html`
        <ul>
            ${cars.map((car, index) => `<li>${index + 1} : ${car}</li>`)}
            <button onclick="dispatch('CREATE', 'Porsche')">Add car</button>
        </ul>
    `
}
export default connector(App);