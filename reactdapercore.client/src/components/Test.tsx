import React, { useState } from "react";

const TableComponent = () => {
    const [data, setData] = useState([
        { id: 1, name: "Item 1", price: "$10" },
        { id: 2, name: "Item 2", price: "$15" },
    ]);
    const [newItem, setNewItem] = useState({ name: "", price: "" });

    const addItem = () => {
        if (newItem.name && newItem.price) {
            const newItemWithId = { id: data.length + 1, ...newItem };
            setData([...data, newItemWithId]);
            setNewItem({ name: "", price: "" });
        }
    };

    return (
        <div className="p-4 max-w-lg mx-auto">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                <tr className="bg-gray-200">
                    <th className="border border-gray-300 p-2">ID</th>
                    <th className="border border-gray-300 p-2">Name</th>
                    <th className="border border-gray-300 p-2">Price</th>
                </tr>
                </thead>
                <tbody>
                {data.map((row) => (
                    <tr key={row.id} className="text-center border border-gray-300">
                        <td className="border p-2">{row.id}</td>
                        <td className="border p-2">{row.name}</td>
                        <td className="border p-2">{row.price}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="mt-4 flex gap-2">
                <input
                    type="text"
                    placeholder="Item Name"
                    value={newItem.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    className="border p-2 flex-1"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={newItem.price}
                    onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
                    className="border p-2 flex-1"
                />
                <button
                    onClick={addItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default TableComponent;