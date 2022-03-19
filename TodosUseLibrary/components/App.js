import html from '../core.js'
import {connect} from '../store.js';
import Header from './Header.js';
import Footer from './Footer.js';
import TodoList from './TodoList.js'
const App = (props) =>{
  const {todos} = props;
  const length = todos.length;
  return html`
    <section class="todoapp">
      ${Header()}
      ${length > 0 && TodoList()}
      ${length > 0 && Footer()}
    </section>
    `
}

export default connect()(App);

