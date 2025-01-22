/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import describer from '../classes/ClassDescriber';
import '../css/Global.css';
export default function Table({ className, objectType,listItems}) {
    const objectFieldArray = describer.describe(objectType);
    let x = 0;
    const tableContents = <table className={className}>
        <thead>
            <tr>
                {objectFieldArray.map((field) =>{
                    x = x+1;
                    field == "id" ? <td key={field + x} className='HideThis'>{field}</td> : <td key={field + x}> {field}</td>})}
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
    return (
        <div>
            {tableContents}
        </div>)
}
