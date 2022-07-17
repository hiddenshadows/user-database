import {Button, Navbar, Nav, Container, Form} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import './App.css';
import { useEffect, useState } from 'react';
import { FirebaseError} from 'firebase/app';
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import {collection, getDocs} from "firebase/firestore"
import {db} from "./firebase"


class Task {
  constructor (name, desc, username){
    this.name = name
    this.desc = desc
    this.username = username
  }
  toString(){
    return(
      "Task: " + this.name + ", \n" +
      "Description: " + this.description + ", \n" +
      "user name: " + this.username + ", \n"
    )
  }
}

const taskConverter = {
  toFirestore: (task) => {
      return {
          name: task.name,
          desc: task.desc,
          username: task.username
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Task(data.name, data.desc, data.username);
  }
};

// function writeData(){
//   FirebaseError.database
// }

function Tasks() {
  const auth = getAuth();
  const [tasklist, setTasks] = useState([])
  const [user] = useAuthState(auth);


  useEffect(() => {
    getTasks()
  }, [])

  useEffect(() => {
    console.log(tasklist)
  }, [tasklist])

  function getTasks() {
    const tasksCollection = collection(db, 'tasks')
    getDocs(tasksCollection)
      .then(respose => {
        const tas = respose.docs.map(doc => ({
          data: doc.data(),
          id: doc.id
        }))
        setTasks(tas)
      })
      .catch(error => console.log(error.message))
  }
  
  function handleSubmit(e){
    
  }


  const [task, setTask] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <div className="AppNav">
      <h4>List Tasks</h4>
      <ul>
        {tasklist.map(task => (
          <li key = {task.id}>{task.data.name}</li>
        ))}
      </ul>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Task</Form.Label>
          <Form.Control type="email" placeholder="Enter Task" onChange={(e) => setTask(e.target.value} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Description</Form.Label>
          {/* <Form.Control type="password" placeholder="Describe the task" /> */}
          <Form.Control as="textarea" rows={3} placeholder="Describe the task" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit(task, desc, user.displayname)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Tasks;
