import ExistingCustomer from "./Customer/ExistingCustomer";


function Home() {


    return (
        <div style={{ position: "absolute", top: "100px", bottom: "0px", left: "50px", right: "50px", margin: "auto"}}>
<header role="banner">
          <h1 className="border   border-dark p-4 mb-6 border-5 border-dark rounded" style={{ maxWidth: "1500px",  fontWeight: "bold", textAlign: "center", color: "white", fontFamily: "Verdana, sans-serif", backgroundColor: "#365074", marginTop: "80px", marginBottom: "80px" }}>"An accessible web is a wave everyone can ride." -  Flipper, the Finclusive Dolphin </h1>
          

            
       
       </header>

       <main role="main">
       
       <ExistingCustomer/>
       </main>
        </div>
    );
}

export default Home;