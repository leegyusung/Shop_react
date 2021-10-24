import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProductRegisterPage from "./pages/ProductRegisterPage";
import ProductListPage from "./pages/ProductListPage";
import PurChasePage from "./pages/PurChasePage";
import CartPage from "./pages/CartPage";
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact></Route>
      <Route component={LoginPage} path="/login"></Route>
      <Route component={RegisterPage} path="/register"></Route>
      <Route component={ProductRegisterPage} path="/product"></Route>
      <Route component={ProductListPage} path="/products" exact></Route>
      <Route component={PurChasePage} path="/products/@:username/:productId"></Route>
      <Route component={CartPage} path="/cart/@:username"></Route>
    </>
  );
}

export default App;
