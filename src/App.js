import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/home.route";
import Navigation from "./routes/navigation/navigation.routes";
import CategoryPage from "./routes/category-page/category-page.routes";
import Checkout from "./routes/checkout/checkout.routes";
import ProductPage from "./routes/singleproduct-page/product-page.routes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="help" element={<Help />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path= "productPage/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

  const Help = () => {
    return <h1>Hello help page</h1>;
  };

export default App;
