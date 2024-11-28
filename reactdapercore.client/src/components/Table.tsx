/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import describer from '../classes/ClassDescriber';
import '../css/Global.css';
export default function Table({ className, objectType,listItems}) {
    const objectFieldArray = describer.describe(objectType);
    const tableContents = <table className={className}>
        <thead>
            <tr>

                {objectFieldArray.map(field =>
                    field == "Id" ? <td key={field} className='HideThis'>{field}</td> : <td> {field}</td>)}
            </tr>
        </thead>
        <tbody>
            {listItems.map((row, i) => 
                <tr key={i}>
                    {objectFieldArray.map(field => field == "Id" ?
                        <td className='HideThis'>{row[field]}</td> :
                        <td>{describer.rowType(row[field])}</td>)}
                </tr>)}
        </tbody>
    </table>;
    return (
        <div>
            {tableContents}
        </div>)
}
