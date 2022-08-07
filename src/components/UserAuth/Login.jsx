import React, {useState} from "react";
import "../../styles/root.css";
import {steve} from "../../assets/images";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import {loginAPI} from "../../API";
import {useAuth} from "../../context";

export function Login() {
  const {setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const initialState = {
    email: "",
    password: "",
  };
  const from = location?.state?.from.pathname || "/";
  const [userDetails, setUserDetails] =
    useState(initialState);
  const [error, setError] = useState("");

  const loginHandler = async (e, userDetails) => {
    e.preventDefault();
    setUserDetails({...userDetails});

    try {
      const res = await loginAPI(userDetails);
      if (res.status === 200) {
        localStorage.setItem(
          "VisionEcomToken",
          res.data.encodedToken
        );
        localStorage.setItem("isAuth", true);

        const {encodedToken, foundUser} = res.data;
        setAuth({
          token: encodedToken,
          isAuth: true,
          firstName: foundUser.firstName,
          lastName: foundUser.lastName,
          userEmail: foundUser.email,
        });
        navigate(from, {replace: true});
      }
    } catch (error) {
      setError(error.response.data.errors[0]);
    }
  };

  return (
    <>
      <div
        id="myModal"
        className="inputDomMainContainer flex-column-center"
      >
        <form
          className="formContainerMain inputDomContainer AlertInfo input-flex inputError box-shadow"
          action="submit"
          autocomplete="on"
          onSubmit={(e) => loginHandler(e, userDetails)}
        >
          <div className="formContainer input-flex flex">
            <div className="login-avatar">
              <img
                className="login-avatar-img round-border"
                src={steve}
                alt="steve"
              />
            </div>
            <h3 className="h3Tag">Login</h3>
          </div>

          <div className="formContainer">
            <div className="formName inputDomContainer formInput AlertError inputError flex-evenly box-shadow">
            <i className="material-icons">email</i>
              <input
                className="login-check formInput AlertError search-container"
                type="text"
                name=""
                id=""
                pattern="[A-Za-z].{5,}"
                placeholder="Email"
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                required
              />
              <span className="validity"></span>
            </div>

            <div className="formPassword inputDomContainer formInput AlertSuccess inputError flex-evenly box-shadow">
              <i className="material-icons">lock</i>
              <input
                className="login-check formInput AlertSuccess search-container"
                type="password"
                name=""
                id=""
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                placeholder="Password"
                value={userDetails.password}
                onChange={(e) =>
                  setUserDetails((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
              />
              <span className="validity"></span>
            </div>

            <section className="flex-column-start">
              <span className="padding-normal">
                <input type="checkbox" name="" id="" />
                Remember me
              </span>
              <span className="padding-top-small">
                <Link to="/forgot_password">
                  Forgot Password ?
                </Link>
              </span>
            </section>

            <div className="formButtonContainer padding-normal margin-normal-left1">
              <div className="AlertDomMainContainer">
                <input
                  type="submit"
                  className="ButtonDomContainer descriptionOne primary-button buttonHoverShadow col-12"
                  value="Sign In"
                />
              </div>

              <div className="AlertDomMainContainer" >
              <input
                type="button"
                className="ButtonDomContainer descriptionOne primary-button buttonHoverShadow col-12"
                value="TestCredentials"
                onClick={(e)=>loginHandler(e, {email:'adarshbalika@gmail.com', password:'adarshBalika123'})}
              />
              </div>

            </div>

            <div className="AlertDomMainContainer padding-normal">
                <Link to="/Signup">
                  <h4>Create a account ?</h4>
                </Link>
              </div>
      
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
