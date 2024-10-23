
import React, { useState } from "react";

function Todo() {
    const [list, setList] = useState([
        "maruthi",
        "naga",
        "gopi",
        "vamsi",
        "govind",
    ]);

    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const handleAdd = () => {
        const inputValue = document.getElementById("kl").value;
        setList([...list, inputValue]);
    };

    const handleDelete = (index) => {
        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
        setEditValue(list[index]);
    };

    const handleSaveEdit = () => {
        const newList = [...list];
        newList[editIndex] = editValue;
        setList(newList);
        setEditIndex(null);
        setEditValue("");
    };

    return (
        <div>
            <h1>Todo List</h1>
            <input placeholder="Enter any name" id="kl"></input>
            <button onClick={handleAdd}>Submit</button>
            {list.map((item, index) => (
                <li key={index}>
                    {editIndex === index ? (
                        <>
                            <input
                                type="text"
                                value={editValue}
                                onChange={(e) => setEditValue(e.target.value)}
                            />
                            <button onClick={handleSaveEdit}>Save</button>
                        </>
                    ) : (
                        <>
                            {item}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                        </>
                    )}
                </li>
            ))}
        </div>
    );
}

export default Todo;