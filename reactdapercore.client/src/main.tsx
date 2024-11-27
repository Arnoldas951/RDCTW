import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.tsx'
import Table from './components/Table.tsx'
import ToDoItem from './classes/ToDoItem.ts'

let a = new ToDoItem("Trash", 50, new Date, true);
let b = new ToDoItem("Rash", 30, new Date, false);
const items = [a, b];


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Table className={"table-auto"} objectType={ToDoItem} listItems={items} />
  </StrictMode>,
)
//createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)
