import axios from "axios";
import { useEffect, useState } from "react";

function Items (props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [item, setItem] = useState([]);

    function getItems() {
        axios.get("http://localhost:8082/item/get")
        .then((response) => { setItem(response.data)})
        .catch((err) => console.error(err));
    }
    useEffect(getItems, [])

    function createItem() {
        axios.post("http://localhost:8082/item/create",{
        name, price, quantity})
        .then((response) => { 
            console.log(response);
            setName("");
            setPrice("");
            setQuantity("");
            getItems();
        })
        .catch(err => console.error(err));
    }

    return (  
        <div>
            <h2>Items</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                createItem();
            }}>
                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                <input type="number" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                <button type="submit">Add Item</button>
            </form>
            
        </div>

    );
}

export default Items;