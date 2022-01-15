import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ServicosCards from "./components/Servicos";
import Form from "./components/Form";
import Cliente from "./components/Clientes";


function App() {
  return (
    <>
      <NavBar />
      <Cliente />
      <ServicosCards />
      <Form />
      <Footer />
    </>
  );
}

export default App;
