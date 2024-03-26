import axios from "axios";
import { useEffect,useState } from "react";

import CustomerList from "../Customer/CustomerList";

function CustomerAdmin(props) {
    
    function getCustomer() {
        axios.get("http://localhost:8082/customer/get")
        .then((response)=>{setCustomer(response.data)})
        .catch(console.log)        
    }
    useEffect(()=>{getCustomer()},[])
    const [customers, setCustomer] = useState([])

    return (
        <div >   
            {/* <div><NewCustomer getCustomer={getCustomer}/></div> */}
            <br></br>
            <div><CustomerList listCustomer={customers} getCustomer={getCustomer} /></div>
        </div>);
}

export default CustomerAdmin;