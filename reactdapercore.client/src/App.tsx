import { useEffect, useState } from 'react';
import './App.css';
import './output.css'
import Table from './components/Table.tsx'
import ToDoItem from './classes/ToDoItem.ts'

// interface Forecast {
//     date: string;
//     temperatureC: number;
//     temperatureF: number;
//     summary: string;
// }

function App() {
    const [items, setItems] = useState<ToDoItem[]>();

    useEffect(() => {
        populateToDoItems();
    }, []);

  
    return (
        items ? 
        <div>
          <Table className={"table-auto"} objectType={ToDoItem} listItems={items} />
        </div>
        :
        <div> Loading...</div>
    );

    async function populateToDoItems() {
        const response = await fetch('https://localhost:7014/api/v1/ToDoItem/ToDoList');
        const data = await response.json();
        setItems(data);
    }
}

export default App;