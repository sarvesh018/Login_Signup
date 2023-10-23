import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"

function Signup() {

  const history = useNavigate();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e){
    e.preventDefault();

    try{
      await axios.post("http://localhost:8000/signup",{
        name, username, password
      })
      .then(res => {
        if(res.data == "exist"){
          alert("User already exist")
        }
        else if(res.data == "notexist"){
          history("/home", {state: {id: username}})
        }
      })
      .catch(e => {
        alert("Wrong Details")
        console.log(e);
      })
    }
    catch(e){
      console.log(e);
    }
  }

  return (
    <div className="flex items-center justify-center h-[80vh] ">
      <div className="bg-[#e3e3e3] shadow-2xl rounded-xm">
        <div className="mb-8 font-sans text-4xl bg-[#296bf8] rounded-sm py-8 font-extrabold text-white">
          SIGNUP
        </div>
        <form action="POST" className="font-serif px-20 py-10">
          <div className="flex items-center justify-center mb-8">
            <input
              className="px-4 h-[50px] rounded-lg w-[45vh] md:w-[50vh] border-[#5252526a] border-[1px]"
              type="text"
              onChange={(e) => {setName(e.target.value)}}
              placeholder="Full Name"
            />
          </div>
          <div className="flex items-center justify-center mb-8">
            <input
              className="px-4 h-[50px] rounded-lg w-[45vh] md:w-[50vh] border-[#5252526a] border-[1px]"
              type="text"
              onChange={(e) => {setUsername(e.target.value)}}
              placeholder="Username"
            />
          </div>
          <div className="flex items-center justify-center mt-4">
            <input
              className="px-4 h-[50px] rounded-lg w-[45vh] md:w-[50vh] border-[#5252526a] border-[1px]"
              type="password"
              onChange={(e) => {setPassword(e.target.password)}}
              placeholder="Password"
            />
          </div>
          <div className="flex items-center justify-center mt-12">
            <button onClick={submit} className="bg-[#296bf8] w-[100%] font-sans text-[white] text-xl py-2 rounded-lg hover:bg-[#0051ff]">
              Register
            </button>
          </div>
          <div className="flex items-center justify-center mt-8">
            Already a user?{" "}
            <Link to="/" className="text-[#296bf8] px-1">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
