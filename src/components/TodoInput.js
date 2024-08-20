function TodoInput(props) {
    const { addTodo } = props;

    function addTodoHandler() {
        addTodo('some text');
    }

    return (
        <div>
            <p onClick={addTodoHandler} >todo input</p>
        </div>
    )
};

export default TodoInput;