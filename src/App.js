import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protected from "./Component/Protected";
import Product from "./Component/Product";
import ProductList from "./Component/ProductList";
import Register from "./Component/Register";
import Login from "./Component/Login";  
import Update from "./Component/Update";
function App() {
  return (
    
       <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/" element={<Protected Cmp={ProductList} />}></Route>
          <Route path="/add" element={<Protected Cmp={Product} />}></Route>
          <Route path="/update/:id" element={<Protected Cmp={Update} />}></Route>
        </Routes>
      </BrowserRouter>
    
   </div>
   );
}

export default App;
