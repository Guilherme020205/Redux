import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTitle } from "../redux/Title/titleActions"
import { addTask, removeTask } from "../redux/Task/taskActions"

export default function Tasks() {
    const [titleInput, setTitleInput] = useState("");
    const [taskInput, setTaskInput] = useState("");

    const dispatch = useDispatch();

    const title = useSelector((state) => state.title);
    const tasks = useSelector((state) => state.tasks);

    const onPressAddTitle = () => {
        if(titleInput == ""){
            return alert("Preencha o campo!")
        }else {
            dispatch(addTitle(titleInput));
        }
            setTitleInput("");
    }

    const onPressAddTask = () => {
        if(taskInput == ""){
            return alert("Preencha o campo!")
        }else {
            dispatch(addTask(taskInput));
        }
        setTaskInput("")
    }

    const onPressRemoveTask = (task) => {
        dispatch(removeTask(task));
    }

    return (
        <div>
            <input 
                placeholder="Adicone um titulo"
                value={titleInput}
                onChange={(e) => setTitleInput(e.target.value)}
            />
            <button onClick={onPressAddTitle}>+</button>
        
            <br/><br/>

            <input 
                placeholder="Adicione uma tarefa"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={onPressAddTask}>+</button>

            <br/>

            <h1>{title}</h1>

            <section>
                <h5>Lista:</h5>
                <ul>
                    {tasks.map((task) => {
                        return (
                            <li key={task}>
                                <p>{task}</p>
                                <button onClick={() => onPressRemoveTask(task)}>X</button>
                            </li>
                        )
                    })}
                </ul>
            </section>

        </div>
    )
}