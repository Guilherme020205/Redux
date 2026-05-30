import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTitle } from "../redux/Title/titleActions"
Teste Bobo
export default function Tasks() {
    const [titleInput, setTitleInput] = useState("");
    const [taskInput, setTaskInput] = useState("");
    const dispatch = useDispatch();

    const onPressAddTitle = () => {
        dispatch(addTitle);
    }

    const onPressAddTask = () => {
        console.log(taskInput);
    }

    const onPressRemoveTask = (task) => {
        console.log(task);
    }

    return (
        <div>
            <input 
                placeholder="Adicone um titulo"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
            />
            <button onClick={onPressAddTitle}>+</button>
        
            <br/>

            <input 
                placeholder="Adicione uma tarefa"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={onPressAddTask}>+</button>

            <br/>

            <h1>Titulo da minha lista</h1>

            <ul>
                <li>Item 1 <button>Feito</button></li>
            </ul>

        </div>
    )
}