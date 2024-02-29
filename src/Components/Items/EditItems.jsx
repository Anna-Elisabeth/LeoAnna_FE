import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditItems () {

    const navigate = useNavigate();
    const params = useParams();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    
    useEffect(() => {
        axios.get("http://localhost:8082/item/get")
        .then((res) => { 
            console.log(res);
            setName(res.data.name);
            setPrice(res.data.price);
            setQuantity(res.data.quantity);
        }).catch((err) => console.error(err))
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios
        .patch("http://localhost:8082/item/update/" + params.id, {
            name,
            price,
            quantity
            
    })
    .then(() => {
      navigate("/item");
    })
    .catch((error) => console.error(error));
};


    return (  
        <div>
        <form onSubmit={handleSubmit}>
            
            {" "}
            <h1>Items &nbsp;</h1>
            <label htmlFor="fn">Name &nbsp;</label>
            <input
              value={name}
              br
              onChange={(e) => setName(e.target.value)}
              id="fn"
              type="text"
              class="form-control"
            ></input>
            <label htmlFor="ln">Price &nbsp;</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="ln"
              type="text"
              class="form-control"
            ></input>
            <label htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="ad"
              type="text"
              class="form-control"
            ></input>
            <br />
            <button type="submit" className="btn btn-success btn-md">
              Submit
            </button>
            <br />
          </form>
          <br />
          <br />
        </div>
  
  
       );
  }

export default EditItems;