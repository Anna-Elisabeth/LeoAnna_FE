import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditItems() {

  const navigate = useNavigate();
  const params = useParams();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");



  useEffect(() => {
    axios.get("http://localhost:8082/item/get/" + params.id)
      .then((res) => {
        console.log(res);
        setName(res.data.name);
        setPrice(res.data.price);
        setQuantity(res.data.quantity);
        setDescription(res.data.description);
      }).catch((err) => console.error(err))
  }, [params.id]);
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch("http://localhost:8082/item/update/" + params.id, {
        name,
        price,
        quantity,
        description,
      })

      .then(() => {
        navigate("/admin");
      })
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>

        {" "}
        

        <h1 aria-label="edit item page" className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{marginLeft:"50px", marginTop:"50px", width: "250px", height: "100px", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074"}} >Edit Items &nbsp;</h1>
        <div className="border border-dark p-2 mb-2 border-4 border-dark rounded" style={{ color:"white", fontSize: "20px", marginTop: "50px", marginLeft: "50px", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074", width: "350px" }}>
          <div className="input-container">
            <label aria-label="edit name field" htmlFor="fn">Name &nbsp;</label>
            <input
              value={name}
              br
              onChange={(e) => setName(e.target.value)}
              id="inameup"
              type="text"
              className="form-control"
            />
            <label aria-label="edit description field" htmlFor="fn">Description &nbsp;</label>
            <input
              value={description}
              br
              onChange={(e) => setDescription(e.target.value)}
              id="idescup"
              type="text"
              className="form-control"
            />
            <label aria-label="edit price field" htmlFor="ln">Price &nbsp;</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="ipriceup"
              type="text"
              class="form-control"
            />
            <label aria-label="edit quantity field" htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="ad"
              type="text"
              class="form-control"
            />
          </div>
          <br/>
          <button aria-label="update button" type="submit" className="btn btn-light btn-lg">
            Update
          </button>
          <br />
        </div>
      </form>
      <br />
      <br />
    </div>


  );
}

export default EditItems;