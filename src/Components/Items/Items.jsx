import axios from "axios";
import { useEffect, useState } from "react";
import DisplayItems from "./DisplayItems";

function Items (props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items, setItem] = useState([]);
    const [description, setDescription] = useState("");

    function getItems() {
        axios.get("http://localhost:8082/item/get")
        .then((response) => { setItem(response.data)})
        .catch((err) => console.error(err));
    }
    useEffect(() => {
        getItems();
    }, []);

    function createItem() {
        axios.post("http://localhost:8082/item/create",{
        name, price, quantity, description})
        .then((response) => { 
            console.log(response);
            setName("");
            setPrice("");
            setQuantity("");
            setDescription("");
            getItems();
        })
        .catch(err => console.error(err));
    
                axios.get("http://localhost:8082/item/get")
                .then(response => {
                console.log(response)
                for (const items of response.data) {
                    if (items.name.toLowerCase() === name.toLowerCase() && items.price.toLowerCase() === price.toLowerCase()) {
                             alert("Item already exists")
                         return;    
                    }
                }
    })
    .catch(err => console.error(err));
}

    return (  
        <div>
          <main>
      

      <DisplayItems items={items}  getItems={getItems}/> 
      </main>
    </div>
  );
}

export default Items;