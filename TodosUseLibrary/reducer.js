import storage from './utils/storage.js';
const initialState = {
    todos: storage.get(),
    filter: 'all',
    filters: {
        all: () => true,
        active: todo => !todo.completed,
        completed: todo => todo.completed
    },
    editIndex: null
}

const actions = {
    add({todos}, title){
        todos.push({id: Math.floor(Math.random() * 10000),title, completed: false});
        storage.set(todos)
    },
    toggle({todos}, id){
        const todo = todos.find(todo => todo.id === id);
        todo.completed =! todo.completed;
        storage.set(todos);
    },
    toggleAll({todos}, completed){
        todos.forEach(todo => todo.completed = !todo.completed);
        storage.set(todos);
    },
    destroy({todos}, id){
        let todosNew = todos.filter(todo => todo.id !== id)
        storage.set(todosNew);
        location.reload();
    },
    switchFilter(state, type){
        state.filter = type
    },
    clearCompleted(state){
        state.todos = state.todos.filter(state.filters.active);
        storage.set(state.todos);
    },
    startEdit(state, id){
        state.editIndex = id;
    },
    endEdit(state, value){
        if(state.editIndex !== null){
            if(value){
                let todo = state.todos.find(todo => todo.id === state.editIndex);
                todo.title = value;
                storage.set(state.todos);
            }
            else{
                this.destroy(state, state.editIndex);
            }
        }
        state.editIndex = null;
        
    },
    cancelEdit(state) {
        state.editIndex = null;
    }
}

export default function reducer(state = initialState, action, args) {
    // console.log(action);
    actions[action] && actions[action](state, ...args);
    return state;
}