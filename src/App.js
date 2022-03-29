import {
	Routes,
	Route,
} from "react-router-dom";
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
} from "./components/index";
import Mockman from "mockman-js";
import { FilterProvider } from "./context/FilterProvider";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route
					path="/"
					element={<HomePage />}
				/>
				<Route
					path="login"
					element={<Login />}
				/>
				<Route
					path="signup"
					element={<Signup />}
				/>
				<Route
					path="forgot-password"
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
				<Route
					path="wishlist"
					element={<WishList />}
				/>
				<Route
					path="user-page"
					element={<UserPage />}
				/>
				<Route
					path="cart"
					element={<Cart />}
				/>
				<Route
					path="mockAPI"
					element={<Mockman />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
