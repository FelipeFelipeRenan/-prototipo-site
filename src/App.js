import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import ServicosCards from "./components/Servicos";
import Form from "./components/Form";
import Cliente from "./components/Clientes";
import Equipe from "./components/Equipe-layout";
import { createTheme, ThemeProvider } from "@material-ui/core"
import { purple } from "@material-ui/core/colors";

const theme = createTheme({
  pallete: {
    primary: {
      main: "#f0f8ff",
    },
    secondary: purple,
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <NavBar />
        <Equipe />
        <Cliente />
        <ServicosCards />
        <Form />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
