// import { useEffect, useState } from "react";
// import axios from "axios";
// import ItemsPT from "./ItemsPT";


// function DisplayItems(props) {

//     const itemArray = [];
//     for (const item of props.items) {
//         itemArray.push(
//         <ItemsPT
//           key={item.name + " " + item.quantity}
//           id={item.id}
//           firstName={item.firstName}
//           lastName={item.lastName}
//           address={item.address}
//           postcode={item.postcode}
//           phoneNumber={item.phoneNumber}
//           getItems={props.getItems}
//         />
//       );
//     }
  
//     return (
//       <div>
//         <h2> A list of items </h2>
//         <br />
//         <br />
//         <div className="container-fluid">
//           <div className="row">{itemArray}</div>
//           {/* this is the display oin the rows */}
//         </div>
//       </div>
//     );
//   }


// export default DisplayItems; 