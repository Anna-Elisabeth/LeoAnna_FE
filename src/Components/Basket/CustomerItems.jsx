import React from "react";

function Basket() {


    return ( 
    <table className="table table-bordered" style={{ backgroundColor: "blue", color: "white", margin: "100px auto", textAlign: "center", marginSide: "15%" }}>
                <thead  >
                    <tr>
                        <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Item</th>
                        <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Price</th>
                        <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Quanity</th>
                        <th style={{ backgroundColor: '#2E43F1', color: "white"}}>Total</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                   
                </tbody>
    </table>
    
    );
}

export default Basket;