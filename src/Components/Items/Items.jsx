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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}>
        
        
        {" "}
        <br></br>
        <h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{color:"White", fontFamily: "italic", width: "150px", backgroundColor: "#ffffff6b"}}>Items</h2>

        <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop:"50px", marginLeft:"50px", backgroundColor: "#ffffff6b", width: "350px" }}>
        <label htmlFor="fn">Item Name: &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="iname"
            type="text"            
          />
          <label htmlFor="fn">Item Description: &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="idesc"
            type="text"            
          />
          <label htmlFor="ln">Price: &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="iprice"
            type="text"           
          />
          <label htmlFor="ad">Quantity: &nbsp; &nbsp; &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            id="iquant"
            type="text"            
          />
          <br></br>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        <br />
      </form>

      <DisplayItems items={items}  getItems={getItems}/> 
    </div>
  );
}

export default Items;