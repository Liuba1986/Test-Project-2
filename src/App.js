import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavMenu from "./components/NavMenu/NavMenu";
import Mainpage from "./pages/Mainpage/Mainpage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import UserPage from "./pages/UserPage/UserPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import Forma from "./components/Forma/Forma";
import Cristina from "./components/Cristina/Cristina";


function App() {


  return (
    <div>
      <NavMenu />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/cristina" element={<Cristina />} />
      </Routes>
      <Forma/>
    </div>
  );
}

export default App;
