import ExistingCustomer from "./Customer/ExistingCustomer";

function Home() {


    return (
        <div style={{ position: "absolute", top: "100px", bottom: "0px", left: "50px", right: "50px", margin: "auto"}}>
<header role="banner">
        
            <h1 className="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ maxWidth: "1500px", fontStyle: "italic", fontWeight: "bold", textAlign: "center", color: "Black", fontFamily: "italic", backgroundColor: "#ffffff6b" }}>As a well known CEO once said - "This is not only the largest river in the world, it's many times larger than the next biggest river. It blows all other rivers away." </h1>

            <h2 className="border border-primary p-2 mb-2 border-4 border-primary rounded" style={{ marginTop: "50px", maxWidth: "1500px", fontStyle: "italic", fontWeight: "bold", textAlign: "center", color: "Black", fontFamily: "italic", backgroundColor: "#ffffff6b" }}>  The CEO's of Everest declared that - "This is not only the largest Mountain in the world, it's many times larger than the next biggest mountain. It blows all other mountains away."  </h2>
       
       </header>

       <main role="main">
       
       <ExistingCustomer/>
       </main>
        </div>
    );
}

export default Home;