import axios from 'axios';

const baseUrl = 'http://localhost:4000';

const getAllToDo = (setToDo) => {
    axios.get(baseUrl + '/dailytask')
        .then((response) => {
            setToDo(response.data.data);
        })
        .catch((error) => {
            console.error('Error fetching tasks:', error);
        });
};

const createToDo = (task, setToDo, setNewTask) => {
    axios.post(baseUrl + '/dailytaskcreate', { task })
        .then(() => {
            getAllToDo(setToDo);
            setNewTask('');
        })
        .catch((error) => {
            console.error('Error creating task:', error);
        });
};

const updateToDo = (id, updatedTask, setToDo) => {
    axios.put(baseUrl + `/update/${id}`, updatedTask)
        .then(() => {
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error updating task:', error);
        });
};

const deleteToDo = (id, setToDo) => {
    axios.delete(baseUrl + `/delete/${id}`)
        .then(() => {
            getAllToDo(setToDo);
        })
        .catch((error) => {
            console.error('Error deleting task:', error);
        });
};

export { getAllToDo, createToDo, updateToDo, deleteToDo };
