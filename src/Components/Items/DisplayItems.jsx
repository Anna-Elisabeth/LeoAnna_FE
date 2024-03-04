import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";


function DisplayItems(props) {

    const itemArray = [];
    for (const item of props.items) {
        itemArray.push(
        <ItemCard
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
        <h4 style={{fontSize:"50px", color:"black", fontFamily: "italic"}}>Products</h4>
        <br />
        <div className="item-container">
          <div className="row">{itemArray}</div>
        </div>
      </div>
    );
  }


export default DisplayItems; 