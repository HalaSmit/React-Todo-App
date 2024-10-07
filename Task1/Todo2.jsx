import React, { useRef, useState } from 'react';

export default function TodoApp() {

    const [name, setName] = useState('');
    const [Todo, setTodo] = useState([]);
    const nameref = useRef(null)


    function AddTodo(e) {
        e.preventDefault();
        if (name !== "") {

            setTodo([...Todo, name]);
            setName('');
        }
        nameref.current.focus();
    }

    function deleteTodo(i) {
        var del = Todo.filter((el, index) => i !== index);
        setTodo(del);
    }

    function editTodo(i) {
        const newName = prompt("Edit Your Task : ", Todo[i]);
        if (newName !== null) {
            const nameEdit = [...Todo];
            nameEdit.splice(i, 1, newName);
            setTodo(nameEdit);
        }
    }

    return (
        <div>
            <h1>Todo</h1>
            <form>
                <input type="text" value={name} ref={nameref} placeholder='Enter Your Task...' onChange={((e) => setName(e.target.value))} />&nbsp;
                <button onClick={AddTodo}>Add</button>
            </form>

            <ul>
                {
                    Todo.map((el, i) => (
                        <li key={i}>
                            {el}&nbsp;
                            <button onClick={() => deleteTodo(i)}>Delete</button>&nbsp;
                            <button onClick={() => editTodo(i)}>Edit</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}