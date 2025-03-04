import React, { useState, useEffect, useRef, useReducer, useMemo } from "react";
import './App.css'
const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, action.payload];
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
        case "DELETE":
            return state.filter(todo => todo.id !== action.payload);
        case "SET":
            return action.payload;
        default:
            return state;
    }
};

const App = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef();
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos) {
            dispatch({ type: "SET", payload: storedTodos });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const filteredTodos = useMemo(() => ({
        incomplete: todos.filter(todo => !todo.completed),
        completed: todos.filter(todo => todo.completed),
    }), [todos]);

    const handleAddToDo = () => {
        if (!inputValue.trim()) return;
        const newTodo = {
            id: Date.now(),
            text: inputValue,
            completed: false
        };

        dispatch({ type: "ADD", payload: newTodo });
        setInputValue("");
        inputRef.current.focus();
    };

    const handleToggleTodo = (id) => {
        dispatch({ type: "TOGGLE", payload: id });
    };

    const handleDeleteTodo = (id) => {
        dispatch({ type: "DELETE", payload: id });
    };

    return (
        <div className='container' style={{ textAlign: "center", fontFamily: "Arial",position:"absolute",left:"50%",top:"50%",transform: "translate(-50%, -50%)"}}>
            <h1>To-Do List</h1>
            <div>
                <input
                    type="text"
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Nhập công việc..."
                    style={{ padding: "8px", width: "200px", marginRight: "10px" }}
                />
                <button onClick={handleAddToDo} style={{ padding: "8px 15px" }}>Add Todo</button>
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2>Chưa hoàn thành</h2>
                {filteredTodos.incomplete.length > 0 ? (
                    filteredTodos.incomplete.map(todo => (
                        <div key={todo.id} style={{ marginBottom: "5px" }}>
                            <span
                                onClick={() => handleToggleTodo(todo.id)}
                                style={{ cursor: "pointer", marginRight: "10px" }}
                            >
                                {todo.text}
                            </span>
<button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>Không có công việc nào.</p>
                )}
            </div>

            <div style={{ marginTop: "20px" }}>
                <h2>Đã hoàn thành</h2>
                {filteredTodos.completed.length > 0 ? (
                    filteredTodos.completed.map(todo => (
                        <div key={todo.id} style={{ marginBottom: "5px" }}>
                            <span
                                onClick={() => handleToggleTodo(todo.id)}
                                style={{ cursor: "pointer", textDecoration: "line-through", marginRight: "10px" }}
                            >
                                {todo.text}
                            </span>
                            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>Không có công việc nào.</p>
                )}
            </div>
        </div>
    );
};

export default App;