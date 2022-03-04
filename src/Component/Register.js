import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import { useDispatch } from "react-redux";
import itemData from "../actions";
import { Spin } from 'antd';

export default function Register() {
  // const selector = useSelector((state) => state.reducer.id);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const navigate = useNavigate();
 
useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
    }
  }, []);

  async function signUp() {
    let item = {
      name,
      email,
      password,
      password_confirmation,
    };
    const message = ''
    let result = await fetch("https://slimy-mouse-25.loca.lt/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(item),
    });
    result = await result.json();
    dispatch(itemData());
    // alert(result.message)
    console.log("result=====", message);
    localStorage.setItem("user-info", JSON.stringify(item));
    navigate("/add");
    console.log("result=====after", message);
  }

  return (
    <>
      <Header />
      <div className="col-sm-4 offset-sm-4">
        <br />
        <h1>User Registration</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="form-control"
        />
        <br />
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="form-control"
        />
        <br />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="form-control"
        />
        <br />
        <br />

        <input
          type="password"
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
          placeholder="Enter your confirm password"
          className="form-control"
        />
        <br />
        <br />
        <button onClick={signUp} className="btn btn-primary ">
          Sign Up
        </button>
      </div>
    </>
  );
}
// axios.post('https://helpless-catfish-8.loca.lt/registration',item).then((response)=>
// {  alert(response.message)
//   console.log(response)
// }).catch((error)=>{
//   console.log(error)
// })
