import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context";
import { useUserData } from "../../context/UserDataProvider";
import { actionTypes } from "../../reducer/actionTypes";
import "../../styles/root.css";

export function UserNav() {
	const {
		auth:{firstName, lastName, userEmail},
		setAuth
	} = useAuth();
	const {userDataDispatch} = useUserData();
	const navigate = useNavigate();
	const {RESET} = actionTypes;
	
	const logoutHandler = () =>{
		localStorage.clear();
		setAuth({
			token:'',
			isAuth: false,
			firstName: '',
			lastName: '',
			userEmail: '',
		});
		userDataDispatch({type: RESET})
		navigate('/');
	}

	return (
		<>
			<nav className="user-nav-container box-shadow">
				<form>
					<section className="filter-section flex-row-spc-btw p-btn-hov">
						<div className="AlertDomMainContainer">
							<h4 className="flex-evenly  pad-normal-top padding-small-left1  buttonAnimation ">
								<span>My Orders</span>
							</h4>
						</div>
					</section>

					<section className="padding-small-left1 flex-column-start">
						<h4 className="">
							ACCOUNT SETTINGS
						</h4>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							Profile Information
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							Manage Addresses
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							PAN Card Information
						</a>
					</section>

					<section className="padding-small-left1 flex-column-start">
						<h4 className="">PAYMENTS</h4>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							Gift Cards
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							Saved UPI
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							Saved Cards
						</a>
					</section>

					<section className="padding-small-left1 flex-column-start">
						<h4 className="">My Stuff</h4>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							My Coupons
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							My Reviews & Ratings
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							All Notifications
						</a>
						<a
							className="pad-normal-top p-btn-hov"
							href=""
						>
							My WishList
						</a>
					</section>

					<section className="filter-section flex-row-spc-btw padding-small-left1 p-btn-hov">
						<div className="AlertDomMainContainer">
							<h4 className="flex-evenly pad-normal-top buttonAnimation ">
								<span onClick={logoutHandler}>Logout</span>
							</h4>
						</div>
					</section>
				</form>
			</nav>
		</>
	);
}

export default UserNav;
