import DeleteCustomer from "./DeleteCustomer";

function CustomerList(props) {
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
    <div className="">
        <div className="row">{customerList}</div>
    </div>
)
}

export default CustomerList;