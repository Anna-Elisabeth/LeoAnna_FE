import DeleteCustomer from "./DeleteCustomer";

function CustomerDisplay(props) {
    const customerList = []

    for (const customer of props.listCustomer) {
        console.log("Customer:", customer);
        customerList.push(
            <DeleteCustomer
                key={customer.name + "" + customer.address}
                name={customer.name}
                address={customer.address}
                email={customer.email}
                phone={customer.phone}
                username={customer.username}
                id={customer.id}
                getCustomer={props.getCustomer}
            />
        )
    }

return (
    <div class="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop:"50px", marginLeft:"50px", backgroundColor: "#ffffff6b", width: "350px" }}>
        {customerList}
    </div>
)
}

export default CustomerDisplay;