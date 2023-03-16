import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Header/>
       <Footer />
  </BrowserRouter>

  );
}

export default App;
