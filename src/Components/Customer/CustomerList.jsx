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
    <div class="border border-primary p-2 mb-2 border-4" style={{ backgroundColor: "#ec97db", width: "80%" }}>
        {customerList}
        
    </div>
)
}

export default CustomerDisplay;