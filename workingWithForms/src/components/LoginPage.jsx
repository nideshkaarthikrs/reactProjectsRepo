import React, {useState} from "react";

const LoginPage = () => {

    let [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
        message: "",
    })

    function handleEmailChange(event) {
        setLoginInfo({
            ...loginInfo,
            email: event.target.value
        })
    }

    function handlePasswordChange(event) {
        setLoginInfo({
            ...loginInfo,
            password: event.target.value
        })
    }

    function handleLoginButtonClick(event) {
        event.preventDefault() // preventing page refresh after submitting (chumma)
        if (loginInfo.email==="admin@dandanakka.com" && loginInfo.password==="1234") {
            setLoginInfo({
                ...loginInfo,
                message: <span class="text-success">Authenticated User</span>
            })
        }else {
            setLoginInfo({
                ...loginInfo,
                message: <span class="text-danger ">Unauthorized User. Acess Denied!!!</span>
            })
        }
    }

  return (
    <div class="container m-5 p-5 border border-success border-5 rounded bg-dark text-warning">
      <form>

        {/* Getting email */}
        <div class="row mb-3">
          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" value={loginInfo.email} onChange={handleEmailChange} autoFocus="autoFocus" />
          </div>
        </div>

        {/* Getting password */}
        <div class="row mb-3">
          <label for="inputPassword3" class="col-sm-2 col-form-label">
            Password
          </label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" value={loginInfo.password} onChange={handlePasswordChange} />
          </div>
        </div>

        {/* Displaying message after authentication */}
        <div className="text-end text-center mt-5">
            {loginInfo.message} <br /><br />
        </div>

        {/* Submit button */}
        <button type="submit" class="btn btn-primary" onClick={handleLoginButtonClick}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
