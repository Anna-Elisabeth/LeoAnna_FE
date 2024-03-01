import { useEffect, useState } from "react";
import axios from "axios";
import ItemsPT from "./ItemsPT";


function DisplayItems(props) {

    const itemArray = [];
    for (const item of props.items) {
        itemArray.push(
        <ItemsPT
          key={item.name + " " + item.quantity}
          id={item.id}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
          getItems={props.getItems}
        />
      );
    }
  
    return (
      <div>
        <h4 style={{color:"white", fontFamily: "italic"}}>Search Results</h4>

        <br />
        <br />
        <div className="item-container">
          <div className="row">{itemArray}</div>
        </div>
      </div>
    );
  }


export default DisplayItems; 