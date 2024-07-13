import React, { useState } from 'react';
import TodoList from './TodoList'

const App = () => {

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]);
    const itemevent = (event) => {
        setInputList(event.target.value);
    };

    const listOfItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        });
        setInputList("");
    };
    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id;
            })
        })
    };
    return<>
    <div className="main_div">
        <div className="center_div">
            <br />
            <h1> To Do List</h1>
            <br />
            <input type="text" placeholder='Add Item' value = {inputList} onChange={itemevent}/>
            <button onClick = {listOfItems}> + </button>

            <ol>
                {Items.map((itemval, index) => {
                    return <TodoList key = {index} id = {index} text = {itemval} onSelect = {deleteItem} />;
                })}
            </ol>
        </div>
    </div>
    </>
};





export default App;