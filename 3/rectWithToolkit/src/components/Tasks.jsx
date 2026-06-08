import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, removeTask } from "../redux/taskSlice";

export default function Tasks() {
    const [taskInput, setTaskInput] = useState("");

    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks);

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
                placeholder="Adicione uma tarefa"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={onPressAddTask}>+</button>

            <br/>

            <h1>tasks</h1>

            <section>
                <h5>Lista:</h5>
                <ul>
                    {tasks.map((task) => {
                        return (
                            <li key={task}>
                                <p>{task} <button onClick={() => onPressRemoveTask(task)}>X</button></p>
                            </li>
                        )
                    })}
                </ul>
            </section>

        </div>
    )
}