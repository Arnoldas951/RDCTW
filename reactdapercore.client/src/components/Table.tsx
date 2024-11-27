/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import describer from '../classes/ClassDescriber';
export default function Table({ className, objectType, listItems }) {
    const tableContents = <table className={className}>
        <thead>
            <tr>

                {describer.describe(objectType).map(field =>
                    <td key={field}> {field}</td>)}
            </tr>
        </thead>
        <tbody>
            {listItems.map((row, field) => 
                <tr key={field}>{field}</tr>)}
        </tbody>
    </table>;
    return (
        <div>
            {tableContents}
        </div>)
}
