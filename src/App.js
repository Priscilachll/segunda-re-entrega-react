import {BrowserRouter , Routes , Route} from "react-router-dom";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Navbar from './components/Navbar/Navbar';


function App() {
  return ( 
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:id" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer />}/>
      </Routes>
  </BrowserRouter> 
  );
}

export default App;
