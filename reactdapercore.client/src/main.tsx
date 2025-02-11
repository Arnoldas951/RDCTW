import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Test from './components/Test.tsx'
// import Table from './components/Table.tsx'
// import ToDoItem from './classes/ToDoItem.ts'

// const[items, setItems] = useState([]);
// useEffect(()=> {
//   fetch("https://localhost:7014/api/v1/ToDoItem/ToDoList")
//   .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       setItems(data);
//     })
// }, [])
// let a = new ToDoItem("1231-12345","Trash", 50, new Date(), true);
// let b = new ToDoItem("12356486", "Rash", 30, new Date(), false);
// //let a = new ToDoItem("1231-12345", "Trash", 50, true);
// //let b = new ToDoItem("12356486", "Rash", 30, false);
// const items = [a, b];



// createRoot(document.getElementById('root')!).render(
//     <StrictMode>
//         <Table className={"table-auto"} objectType={ToDoItem} listItems={items} />
//   </StrictMode>,
// )
createRoot(document.getElementById('root')!).render(
 <StrictMode>
   <App />
     {/*<Test/>*/}
 </StrictMode>,
)
