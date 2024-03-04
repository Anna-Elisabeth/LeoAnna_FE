import axios from "axios";
import { useEffect,useState } from "react";
import NewCust from "./NewCustomer";
import CustomerDisplay from "./CustomerList";

function Customers(props) {
    
    function getCustomer() {
        axios.get("http://localhost:8082/customer/get")
        .then((response)=>{setCustomer(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getCustomer()},[])
    const [customers, setCustomer] = useState([])

    return (
        <div >   
            <div><NewCust getCustomer={getCustomer}/></div>
            <br></br>
            <div><CustomerDisplay listCustomer={customers} getCustomer={getCustomer} /></div>
        </div>);
}

export default Customers;