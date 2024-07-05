import { useEffect, useState } from 'react';
import ToDo from './components/ToDo';
import { getAllToDo, createToDo, updateToDo, deleteToDo } from './utils/HandleApi';

function App() {
    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        getAllToDo(setToDo);
    }, []);

    const handleAddTask = () => {
        if (newTask.trim()) {
            createToDo(newTask, setToDo, setNewTask);
        }
    };

    return (
        <div className="App">
            <h1>ToDo App</h1>
            <div className="container">
                <div className="top">
                    <input
                        type="text"
                        placeholder="Add ToDos"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <div className="add" onClick={handleAddTask}>Add</div>
                </div>
                <div className="section">
                    <div className="list">
                        {toDo.map((item) => (
                            <ToDo
                                key={item._id}
                                task={item}
                                setToDo={setToDo}
                            />
                        ))}
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default App;