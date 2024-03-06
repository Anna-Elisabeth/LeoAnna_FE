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
        navigate("/items");
      })
      .catch((error) => console.error(error));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>

        {" "}
        <h1>Items &nbsp;</h1>
        <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop: "50px", marginLeft: "50px", backgroundColor: "#ffffff6b", width: "350px" }}>
          <div className="input-container">
            <label htmlFor="fn">Name &nbsp;</label>
            <input
              value={name}
              br
              onChange={(e) => setName(e.target.value)}
              id="fn"
              type="text"
              className="form-control"
            />
            <label htmlFor="fn">Description &nbsp;</label>
            <input
              value={description}
              br
              onChange={(e) => setName(e.target.value)}
              id="fn"
              type="text"
              className="form-control"
            />
            <label htmlFor="ln">Price &nbsp;</label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              id="ln"
              type="text"
              class="form-control"
            />
            <label htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              id="ad"
              type="text"
              class="form-control"
            />
          </div>
          <button type="submit" className="btn btn-success btn-md">
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