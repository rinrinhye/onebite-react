import TodoItem from "./TodoItem";

export default function List({todos, deleteTodo, updateTodo}) {
    return (
        <div className="list">
            <p>Todo List</p>
            <input type="text" placeholder="검색어 입력" />
            <ul>
                {todos.map((todo) => {
                    return <TodoItem todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} key={todo.id}/>
                })}
            </ul>
        </div>
    );
}

