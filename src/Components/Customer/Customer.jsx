import axios from "axios";
import { useEffect,useState } from "react";
import NewCust from "./NewCustomer";
import CustomerDisplay from "./CustomerList";

function Customers() {
    
    function getCustomer() {
        axios.get("http://localhost:8082/customer/get")
        .then((response)=>{setCustomer(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getCustomer()},[])
    const [customers, setCustomer] = useState([])

    return (
        <div className= "row">   
            <br /><div className="col-6"><NewCust getCustomer={getCustomer}/></div>
            <div className="col-4"><CustomerDisplay listCustomer={customers} getCustomer={getCustomer} /></div>

        </div>);
}

export default Customers;