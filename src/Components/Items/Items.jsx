import axios from "axios";
import { useEffect, useState } from "react";
import DisplayItems from "./DisplayItems";

function Items (props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [items, setItem] = useState([]);

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
        name, price, quantity})
        .then((response) => { 
            console.log(response);
            setName("");
            setPrice("");
            setQuantity("");
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
        <h1 style={{color:"white", fontFamily: "italic"}}>Items</h1>

        <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop:"50px", marginLeft:"50px", backgroundColor: "#ffffff6b", width: "350px" }}>
        <label htmlFor="fn">Item &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fn"
            type="text"            
          />
          <label htmlFor="ln">Price &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="ln"
            type="text"           
          />
          <label htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
          <input className="form-control border-3 border-primary rounded" style={{ width: "250px", height: "31px" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            id="ad"
            type="text"            
          />
          <br></br>
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
        
        <br />
      </form>
      <br />
      <br />
      <DisplayItems items={items}  getItems={getItems}/> 
    </div>
  );
}

export default Items;