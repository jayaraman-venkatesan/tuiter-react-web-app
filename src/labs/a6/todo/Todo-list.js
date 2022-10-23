import todos from './todos.json';
import TodoItem from './todo-item';

const TodoList = () => {
    return (
     <>
        <h3>Todos</h3>
        <ul>
            {
                todos.map(todo=>{
                    return (<TodoItem todo={todo} />)
                })
            }
        </ul>
     </>
    );
   }
   export default TodoList;