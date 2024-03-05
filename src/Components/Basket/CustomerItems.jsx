import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemCard from "../Items/ItemCard";
function Basket(props) {
    const params = useParams();
    const [quantity, setQuantity] = useState("");
    const [basket, setBasket] = useState("")
    function getCustomer() {
        axios.get("http://localhost:8082/customer/get/" + params.id)
            .then((response) => setBasket(response.data.items))
            .catch(console.log)
    }
    useEffect(() => { getCustomer() }, [])
 
    const basketItems = [];
    for (const baskItems of basket) {
        basketItems.push(
            
            
            <div className="d-inline-flex " style={{  maxWidth: "20%", margin: "20px" }}>
                <div className="card">      
                    <div className="card-body">
                        
                        <h4>Item: {baskItems.name}</h4>
                        <br></br><h6>Price:  £ {baskItems.price}</h6>
                       
 
 
                        <br></br><select className="form-control border-3 border-primary rounded" style={{ width: "250px" }} value={quantity.id} onChange={(e) => setQuantity(e.target.value)} required>
                            <option value="">Select Quantity</option>
                            <option value="0">0</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                        </select>
                        <br></br><h6>Total: £</h6>
                    </div>
                </div>
            </div>
        )
    }
 
   
   
 
    return (
        
        <div>
        <h1>Basket: </h1>
        {basketItems}
            {/* <div className="row">
                <table className="table table-bordered" style={{ backgroundColor: "blue", color: "white", margin: "100px auto", textAlign: "center", marginSide: "15%" }}>
                    <thead  >
                        <tr>
                            <th style={{ backgroundColor: '#2E43F1', color: "white" }}>Item</th>
                            <th style={{ backgroundColor: '#2E43F1', color: "white" }}>Price</th>
                            <th style={{ backgroundColor: '#2E43F1', color: "white" }}>Quanity</th>
                            <th style={{ backgroundColor: '#2E43F1', color: "white" }}>Total</th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider">
 
                    </tbody>
                </table></div> */}
              </div>);
 
}
 
export default Basket;