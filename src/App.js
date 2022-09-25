import "./App.css";
import React,{useEffect, useState} from "react";
import {db} from './firebase.utils';
import { collection ,addDoc,getDocs,doc,deleteDoc} from 'firebase/firestore';
import { FirebaseError } from "firebase/app";

function App() {
 const [input,setInput]=useState('');
 const [todos,setTodos]=useState([]);
 const database = collection(db,'todos');

useEffect(()=>{
  getData();
},[])



  const addTodo=(e)=>{
    e.preventDefault();
    addDoc(collection(db, "todos"), {
      todo: input,
      id: input
    })
    .then(()=>{
      console.log("sent");
      getData();
      setInput('');
    })
    .catch((err)=>{
      alert(err.message)
      setInput('');
    })
    
  }

  const getData = async ()=>{
    const data= await getDocs(database);
      setTodos(data.docs.map(
        item=>({
          todo:item.data().todo,
          id:item.data().id
        })
      ))
  }

  const deleteData=(id)=>{
    let data = doc(db,'todos',id)
    deleteDoc(data)
    .then(()=>{
      console.log('deleted')
      getData();
    })
    .catch((err)=>{
       alert(err.message)
    })
  }

  return (
    <div className="App">
      <div className="card">
        <table className="table">
          <tbody>
          <tr>
          <td>ITEM</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        {
          todos.map((item,i)=>
         
          <tr key={i}>
          <td>{item.todo}</td>
          <td><button>↑ </button></td>
          <td><button>↓</button></td>
          <td><button className="btn btn-danger" onClick={()=>deleteData(item.id)}>X</button></td>
       
        </tr>
          )
        }
          </tbody>
        </table>
      </div>
      <div className="card">
        <form className="input-group mb-3">
          <input type="text" className="form-control" onChange={(e)=>setInput(e.target.value)} value={input} />
          <button type="submit" className="btn btn-primary" onClick={addTodo}>
            Add 
          </button>
        </form>
      </div>
     
    </div>
  );
}

export default App;
