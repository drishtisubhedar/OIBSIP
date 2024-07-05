import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { updateToDo, deleteToDo } from '../utils/HandleApi';

const ToDo = ({ task, setToDo }) => {

    const handleUpdate = () => {
        const newTask = prompt('Edit task:', task.task);
        if (newTask !== null) {
            // Update task logic
            updateToDo(task._id, { task: newTask }, setToDo);
        }
    };

    const handleCheckboxChange = () => {

    };

    return (
        <div className="todo">
            <input
                type="checkbox"
                // checked={completed}
                onChange={handleCheckboxChange}
            />
            <div className="text">{task.task}</div>
            <div className="icons">
                <BiEdit className="icon" onClick={handleUpdate} />
                <AiFillDelete className="icon" onClick={() => deleteToDo(task._id, setToDo)} />
            </div>
        </div>
    );
};

export default ToDo;