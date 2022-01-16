import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ServicosCards from "./components/Servicos";
import Form from "./components/Form";
import Cliente from "./components/Clientes";
import Equipe from "./components/Equipe-layout";


function App() {
  return (
    <>
      <NavBar />
      <Equipe />
      <Cliente />
      <ServicosCards />
      <Form />
      <Footer />
    </>
  );
}

export default App;
