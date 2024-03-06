import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ItemCard from "../Items/ItemCard";
import Counter from "./Counter";
import productImages from "../../productsImage.json";

function Basket(props) {
    const params = useParams();
    const [basket, setBasket] = useState([]);
    

    useEffect(() => {
        getCustomer();
    }, []);

    function getCustomer() {
        axios.get("http://localhost:8082/customer/get/" + params.id)
            .then((response) => setBasket(response.data.items))
            .catch(console.log);
    }

    function handleQuantityChange(index, newQuantity) {
        const updatedBasket = [...basket];
        updatedBasket[index].quantity = newQuantity;
        setBasket(updatedBasket);
    }

    const basketItems = basket.map((basketItem, index) => (
        
        <div className="d-inline-flex" style={{ maxWidth: "20%", margin: "20px" }} key={index}>
            <div className="card">
                <div className="card-body">
                    <img
                        src={getImageUrl(basketItem.name)}
                        alt="avatar"
                        className="card-person"
                        style={{ maxWidth: '100px', height: '100px' }}
                    />
                    <h5>{basketItem.name}</h5>
                    <h8>Price: £ {basketItem.price}</h8>
                    <Counter
                        value={basketItem.quantity}
                        onChange={(newQuantity) => handleQuantityChange(index, newQuantity)}
                    />
                    <h6>Total: £ {basketItem.price * (basketItem.quantity || 0)}</h6>
                </div>
            </div>
        </div>
    ));

    function getImageUrl(productName) {
        const productNameLower = productName.toLowerCase();
        return productImages[productNameLower] || "/default.png";
    }

    return (
        <div>
            <h1>Basket: </h1>
            {basketItems}
        </div>
    );
}

export default Basket;
