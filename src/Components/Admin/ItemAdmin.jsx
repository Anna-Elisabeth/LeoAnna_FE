import axios from "axios";
import { useEffect, useState } from "react";


import CustomerList from "../Customer/CustomerList";

import DisplayAdminItems from "./DisplayAdminItems";

function ItemAdmin (props) {

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


    
  function getCustomer() {
      axios.get("http://localhost:8082/customer/get")
      .then((response)=>{setCustomer(response.data)})
      .catch(console.log)        
  }
  useEffect(()=>{getCustomer()},[])
  const [customers, setCustomer] = useState([])

    return (  
        <div>
          <main>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createItem();
        }}>
        
        
        {" "}
        <br></br>
        <h1 className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{color:"white", fontFamily: "Verdana, sans-serif",  width: "400px", backgroundColor: "#365074", margin: "auto"}}>Admin Portal </h1>

        
        <br/>
        
        <h2 className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{marginLeft:"50px", marginTop:"50px", width: "180px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074"}} >Items</h2>
        <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color:"white", fontFamily: "Verdana, sans-serif", fontSize: "20px", marginTop:"50px", marginLeft:"50px", backgroundColor: "#365074", width: "350px" }}>
        <label htmlFor="fn">Create New Item: &nbsp;</label>
        <br/>
        <label htmlFor="fn">Item Name: &nbsp;</label>
          <input className="form-control border-3 border-dark rounded" aria-label="Item name" style={{ width: "250px", height: "31px" }} 
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="iname"
            type="text"            
          />
          <label htmlFor="fn">Item Description: &nbsp;</label>
          <input className="form-control border-3 border-dark rounded" aria-label="Item Description" style={{ width: "250px", height: "31px" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            id="idesc"
            type="text"            
          />
          <label htmlFor="ln">Price: &nbsp;</label>
          <input className="form-control border-3 border-dark rounded" aria-label="Price" style={{ width: "250px", height: "31px" }}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            id="iprice"
            type="text"           
          />
          <label htmlFor="ad">Quantity: &nbsp; &nbsp; &nbsp;</label>
          <input className="form-control border-3 border-dark rounded" aria-label="Quantity" style={{ width: "250px", height: "31px" }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            id="iquant"
            type="text"            
          />
          <br></br>
          <button className="btn btn-light btn-lg" type="submit">Submit</button>
        </div>
        <br />
      </form>

  <div>

  <DisplayAdminItems items={items}  getItems={getItems}/> 
  </div>

      <div>
      <h2 class="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{marginLeft:"50px", marginTop:"50px", width: "190px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074"}} >Customers</h2>
     
        <CustomerList listCustomer={customers} getCustomer={getCustomer} /></div>
      </main>
    </div>
  );
}

export default ItemAdmin;