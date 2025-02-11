/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import describer from '../classes/ClassDescriber';
import '../css/Global.css';
import { useState } from "react";
export default function Table({ className, objectType,listItems}) {
    const objectFieldArray = describer.describe(objectType);
    const [newItem, setNewItem] = useState(new objectType);
    const tableContents = <table className={className}>
        <thead>
            <tr>
                {objectFieldArray.map(field => 
                    field == "id" ? <td key={field} className='HideThis'>{field}</td> : <td key={field}> {field}</td>)}
                <td>
                </td>
            </tr>
        </thead>
        <tbody>
            {listItems.map((row, i) => 
                <tr key={row.id}>
                    {objectFieldArray.map(field => field == "id" ?
                        <td key={row[field]} className='HideThis'>{row[field]}</td> :
                        <td key={row[field]}>{describer.rowType(row[field])}</td>)}
                    <td>
                        <button>
                            Edit
                        </button>
                    </td>
                </tr>)}
        </tbody>
    </table>;

    const handleChange = (field, e) => {
        setNewItem({...newItem});
        newItem[field] = e.target.value;
    };
    return (
        <div>
            <div>
                {objectFieldArray.map(field => field != "id" ?
                    <input type="text"
                           value={field}
                           onChange={(e) => handleChange(field, e)}
                           // onChange={(e) => setNewItem({...newItem, field: e.target.value})}
                           className="border p-2 flex-1"/>
                    : ""
                )}
            </div>
            {tableContents}
        </div>)
}
