import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


function Basket(props) {
const params = useParams();
    function getCustomer() {
        axios.get("http://localhost:8082/customer/get/" + params.id)
        .then((response)=>{setCustomer(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getCustomer()},[])
    const [customers, setCustomer] = useState([])

    return (
       
        <div className="row"> 
       <table className="table table-bordered" style={{ backgroundColor: "blue", color: "white", margin: "100px auto", textAlign: "center", marginSide: "15%" }}>
        <thead  >
            <tr>
                <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Item</th>
                <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Price</th>
                <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Quanity</th>
                <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Total</th>
            </tr>
        </thead>
        <tbody className="table-group-divider">
           
        </tbody>
</table></div>
    );
                
}

export default Basket;