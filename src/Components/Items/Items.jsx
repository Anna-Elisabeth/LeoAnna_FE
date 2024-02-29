// import axios from "axios";
// import { useEffect, useState } from "react";
// import DisplayItems from "./DisplayItems";

// function Items (props) {

//     const [name, setName] = useState("");
//     const [price, setPrice] = useState("");
//     const [quantity, setQuantity] = useState("");
//     const [items, setItem] = useState([]);

//     function getItems() {
//         axios.get("http://localhost:8082/item/get")
//         .then((response) => { setItem(response.data)})
//         .catch((err) => console.error(err));
//     }
//     useEffect(() => {
//         getItems();
//     }, []);

//     function createItem() {
//         axios.post("http://localhost:8082/item/create",{
//         name, price, quantity})
//         .then((response) => { 
//             console.log(response);
//             setName("");
//             setPrice("");
//             setQuantity("");
//             getItems();
//         })
//         .catch(err => console.error(err));
    
//                 axios.get("http://localhost:8082/item/get")
//                 .then(response => {
//                 console.log(response)
//                 for (const items of response.data) {
//                     if (items.name.toLowerCase() === name.toLowerCase() && items.price.toLowerCase() === price.toLowerCase()) {
//                              alert("Buyer already exists")
//                          return;    
//                     }
//                 }
//     })
//     .catch(err => console.error(err));
// }

//     return (  
//         <div>
//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           createItem();
//         }}>
        
        
//         {" "}
//         <h1>Items &nbsp;</h1>
//         <label htmlFor="fn">Item &nbsp;</label>
//         <input
//           value={name}
//           br
//           onChange={(e) => setName(e.target.value)}
//           id="fn"
//           type="text"
//           class="form-control"
//         ></input>
//         <label htmlFor="ln">Price &nbsp;</label>
//         <input
//           value={price}
//           onChange={(e) => setPrice(e.target.value)}
//           id="ln"
//           type="text"
//           class="form-control"
//         ></input>
//         <label htmlFor="ad">Quantity &nbsp; &nbsp; &nbsp;</label>
//         <input
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           id="ad"
//           type="text"
//           class="form-control"
//         ></input>
//         <br />
//         <button type="submit" className="btn btn-success btn-md">
//           Submit
//         </button>
//         <br />
//       </form>
//       <br />
//       <br />
//       <DisplayItems items={items}  getItems={getItems}/> 
//       {/* this is the render of the buyers page at the bottom */}
//     </div>
//   );
// }

// export default Items;