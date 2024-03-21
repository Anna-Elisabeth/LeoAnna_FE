import UpdateCard from "./UpdateCard";


function DisplayAdminItems(props) {

  const itemArray = [];
  for (const item of props.items) {
    itemArray.push(
      <UpdateCard
        key={item.name + " " + item.quantity}
        id={item.id}
        name={item.name}
        price={item.price}
        quantity={item.quantity}
        description={item.description}
        getItems={props.getItems}
      />
    );
  }

  return (

    <div><h2 class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{  marginTop:"50px", backgroundColor: "#ffffff6b", width: "150px", color: "Blue", fontFamily: "italic"}} >Products</h2>
      <div className="item-container">
        <div  className="row">{itemArray}</div>
      </div>
    </div>
  );
}


export default DisplayAdminItems; 