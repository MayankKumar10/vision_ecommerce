import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../../styles/root.css";
import {
	google,
	github,
} from "../../assets/images";
import { useAuth } from "../../context";
import { SignupAPI } from "../../API";

export function Signup() {
	const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = {
    email: "",
    password: "",
		firstName: "",
		lastName: "",
  };
  const from = location?.state?.from.pathname || "/";
  const [userDetails, setUserDetails] =
    useState(initialState);
  const [error, setError] = useState("");

  const signupHandler = async (e, userDetails) => {
    e.preventDefault();
    setUserDetails({...userDetails});

    try {
      const res = await SignupAPI(userDetails);
      if (res.status === 201) {
        localStorage.setItem("VisionEcomToken",res.data.encodedToken);
        localStorage.setItem("isAuth", true);

        const {encodedToken, foundUser} = res.data;
        setAuth({
          token: encodedToken,
          isAuth: true,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          userEmail: foundUser.email,
        });
        navigate('/');
      }
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
  };
	return (
		<>
			<div className="inputDomMainContainer flex-evenly">
				<form
					className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
					action="submit"
          autocomplete="on"
          onSubmit={(e) => signupHandler(e, userDetails)}
				>
					<div className="formContainer input-flex">
						<h3 className="h3Tag">
							Sign Up
						</h3>
						<p className="discriptionText">
							Please fill the form to create
							an account
						</p>
					</div>

					<div className="formContainer">
						<div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
							<i className="material-icons">
								person
							</i>
							<input
								className="login-check formInput AlertError search-container"
								type="text"
								pattern="[A-Za-z].{4,}"
								placeholder="firstName"
								value={userDetails.firstName}
								onChange={(e)=>setUserDetails((prev)=>({...prev, firstName:e.target.value}))}
								required
							/>
							<span className="validity"></span>
						</div>

						<div className="formName inputDomContainer formInput AlertSuccess inputError flex-evenly box-shadow">
							<i className="material-icons">
								person
							</i>
							<input
								className="login-check formInput AlertSuccess search-container"
								type="text"
								pattern="[A-Za-z].{4,}"
								placeholder="lastName"
								value={userDetails.lastName}
								onChange={(e)=>setUserDetails((prev)=>({...prev, lastName:e.target.value}))}
								required
							/>
							<span className="validity"></span>
						</div>

						<div className="formEmail inputDomContainer formInput AlertWarning inputError flex-evenly box-shadow">
							<i className="material-icons">
								email
							</i>
							<input
								className="login-check formInput AlertWarning search-container"
								type="email"
								pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{3,}$"
								title="should contain A-Z and /number @ and . "
								placeholder="email"
								autocomplete="off"
								value={userDetails.email}
								onChange={(e)=>setUserDetails((prev)=>({...prev, email:e.target.value}))}
							/>
							<span className="validity"></span>
						</div>

						<div className="formPassword inputDomContainer formInput AlertInfo inputError flex-evenly box-shadow">
							<i className="material-icons">
								lock
							</i>
							<input
								className="login-check formInput AlertInfo search-container"
								type="password"
								pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
								title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
								placeholder="Password"
								value={userDetails.password}
								onChange={(e)=>setUserDetails((prev)=>({...prev, password:e.target.value}))}
							/>
							<span className="validity"></span>
						</div>

						<span className="padding-normal">
							<input
								type="checkbox"
							/>
							I accept the
							<code>TermsOfUse</code>
						</span>
					</div>

					<div className="formButtonContainer">
						<div className="AlertDomMainContainer">
							<input
								type="submit"
								className="ButtonDomContainer descriptionOne primary-button buttonHoverShadow col-12"
								value="Signup"
							/>
						</div>

						<div className="AlertDomMainContainer" >
              <input
                type="button"
                className="ButtonDomContainer descriptionOne primary-button buttonHoverShadow col-12"
                value="TestCredentials"
                onClick={(e)=>signupHandler(e, {firstName: 'Mayank', lastName:'Kumar', email:'mayank123@gmail.com', password:'Mayankkumar123'})}
              />
              </div>
					</div>

					<div className="AlertDomMainContainer">
							<Link to="/Login">
								<h4>have an account ?</h4>
							</Link>
						</div>
					
				</form>
			</div>
		</>
	);
}

export default Signup;
