import { useState } from "react";
import styles from '../styles/index.module.css';
import NavBar from "./navBar";
import star from '../assets/STARRED.webp';

function ToDo()
{
  const [inputTask, setInputTask] = useState('');
  const [list, setList] = useState([]);
  const [completed, setCompleted] = useState([]);

  function handleInput(e)
  {
    setInputTask(e.target.value);
  }

  function handleTask()
  {
    if(inputTask !== '') setList((prevList) => [...prevList, inputTask]);
    else alert('Enter a valid non empty task')
    setInputTask('');
  }

  function handleCompleted(id)
  {
    setCompleted((prev) => [...prev, id]);
  }

  function handleDelete(index)
  {
    setList(list.filter((item, id) => id !== index));
    setCompleted(completed.filter((item) => item !== index));
  }
  return (
    <div>
      <NavBar/>
      <div className = {styles.addTask}> 
        <input type = "text" placeholder="Add Task" onChange={handleInput} value={inputTask} className = {styles.inputBox} size={inputTask.length || 1}/>
        <br></br>
        <button onClick={handleTask} className = {styles.addButton}>Add Task</button>
      </div>
      <div className = {styles.list}>{list.map((item, index) => {
        return (
          <div key = {index} className = {styles.itemBlock}>
            <img src={star} alt = "list-marker" className = {styles.starred}/>
            <p className = {completed.includes(index) ? `${styles.listItem} ${styles.completo}` : `${styles.listItem}`}>{item}</p>
            <br></br>
            <button onClick = {() => handleCompleted(index)} className = {styles.completeBtn}>Mark as completed</button>
            <button onClick = {() => handleDelete(index)} className = {styles.deleteBtn}>Delete task</button>
          </div>
        )})}
      </div>
    </div>
  )
}

export default ToDo;