import {Routes, Route} from "react-router-dom";
import "./App.css";
import {
  Header,
  Footer,
  Cart,
  HomePage,
  ProductListing,
  Login,
  Signup,
  ForgotPassword,
  UserPage,
  WishList,
  ErrorPage,
} from "./components/index";
import Mockman from "mockman-js";
import {FilterProvider} from "./context/FilterProvider";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <FilterProvider>
              <HomePage />
            </FilterProvider>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="forgot_password"
          element={<ForgotPassword />}
        />
        <Route
          path="products"
          element={
            <FilterProvider>
              <ProductListing />
            </FilterProvider>
          }
        />
        <Route path="wishlist" element={<WishList />} />
        <Route path="user-page" element={<UserPage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="mockAPI" element={<Mockman />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
