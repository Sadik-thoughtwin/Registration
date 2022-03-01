import Header from "./Header";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import itemData from "../actions/index";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const selector =useSelector((state)=>state.reducer.id)
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);
  async function LoginData() {
    let item = {
      email,
      password,
    };

    await fetch("https://tasty-turtle-46.loca.lt/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((result) => {
        // result.json(),
        console.log("result>>>>>>>>>>>>>", result.createuser);
        console.log("result----------->>", result.message);
        dispatch(itemData(result.data));
        localStorage.setItem("itemName", result.token);
      })
      .catch((error) => {
        console.log("ggg", error);
      });
    localStorage.setItem("user-info", JSON.stringify(item));
    navigate("/add");
  }
  return (
    <>
      <Header />
      <div className="col-sm-6 offset-sm-4">
        <h2>Login Page </h2>
        <input
          type="email"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <br />
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <br />
        <button onClick={LoginData} className="btn btn-primary">
          Login
        </button>
      </div>
    </>
  );
}
