import React, { useState } from "react";
import Cookies from "js-cookie";
import FromContainer from "../../components/FromContainer/FromContainer";
import {
  createUserForm,
  initLogInFromData,
  initUserForm,
  logInFrom,
} from "../../config/formsData";
import server from "../../config/apiConfig";
import { Navigate, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SignInUp = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [userFormData, setUserFormData] = useState(initUserForm);
  const [loginFormData, setLoginFormData] = useState(initLogInFromData);

  const navigate = useNavigate();

  const handleUserForm = (e) => {
    const name = e.target.name;
    setUserFormData((pre) => ({ ...pre, [name]: e.target.value }));
  };

  const onCreatNewUser = async () => {
    try {
      const res = await server.post("/api/users/create-user", userFormData);
      if (res.status === 201) {
        toast(res.data.message);
        setShowLogin((pre) => !pre);
      }
    } catch (err) {
      toast(err.response.data.message);
    }
  };

  const handleLoginData = (e) => {
    const name = e.target.name;
    setLoginFormData((pre) => ({ ...pre, [name]: e.target.value }));
  };

  const onUserLogin = async () => {
    try {
      const res = await server.post("/api/users/login", loginFormData);
      if (res.status === 200) {
        Cookies.set("authEToken", res.data.token, { expires: 2 });
        navigate("/");
        toast(res.data.message);
      }
      toast(res.data.message);
    } catch (err) {
      toast(err.response.data.message);
    }
  };

  if (Cookies.get("authEToken") !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container h-screen w-screen flex justify-center items-center">
      <div className="w-[320px] bg-black/10 flex flex-col gap-2 px-5 py-2 rounded-md shadow-lg text-sm">
        <h1 className="text-lg font-black/90 font-bold">
          {showLogin ? "Login as User" : "Create account"}
        </h1>
        {showLogin ? (
          <FromContainer
            renderFormList={logInFrom}
            formData={loginFormData}
            handleFormData={handleLoginData}
            handleSubmit={onUserLogin}
            btnText="Create"
          />
        ) : (
          <FromContainer
            renderFormList={createUserForm}
            formData={userFormData}
            handleFormData={handleUserForm}
            handleSubmit={onCreatNewUser}
            btnText="Create"
          />
        )}
        <div className="flex items-center gap-1 w-fit self-end">
          <p>{showLogin ? "Creact an account" : "Already have a account"}</p>
          <button
            onClick={() => {
              setShowLogin((pre) => !pre);
            }}
            className="text-blue-500"
          >
            click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInUp;
