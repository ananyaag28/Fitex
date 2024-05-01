import { Link } from "react-router-dom";
import React from "react";
import { useEffect } from "react";


// this is [view] = "ROLE"
const LoginRole = ({existingSellerStatus, existingRole, userData, setUserData, view, setView}) => {


  
    const handler = (role) => {
        setUserData((prev) => ({ ...prev, role: role }))

        if(role=="CONSUMER") {
            setView("CONSUMER")
        }
        else{
            setView("COOK")
        }
    }

    useEffect(()=>{
      if(existingRole?.value) {
        handler(existingRole?.value)
      }
    },[])


  return (
    view == "ROLE" &&
    <div className="scale-150 mt-44">
        <div>
            <h1 className="text-3xl">Welcome Back!!</h1>
            <h3 className="text-left text-gray-600 mt-4">Hop into website as:</h3>
        </div>

      <div className="flex flex-col gap-4 mt-1">
        <form className="flex flex-col gap-4">
          <div
            type={"submit"}
            onClick={() => handler("CONSUMER")}
            className="border border-gray-300 rounded p-4 flex gap-4 hover:bg-gray-100 active:bg-gray-200  transition-all"
            >
            <input
              type="radio"
              name="role"
              value="CONSUMER"
              onChange={() => handler("CONSUMER")}
              checked={userData.role === "CONSUMER"}
              className="radioButton"
            />
            <label className="">Consumer</label>
          </div>
          <div
            type={"submit"}
            onClick={() => handler("COOK")}
            className="border border-gray-300 rounded p-4 flex gap-4 hover:bg-gray-100 active:bg-gray-200 transition-all"
            >
            <input
              type="radio"
              name="role"
              value="option2"
              checked={userData.role === "COOK"}
              className="radioButton"
              onChange={() => handler("COOK")}
            />
            <label className="">Cook</label>
          </div>
        </form>
      </div>

      <div className="text-left mt-2">
        <p>Don't have an existing account? Click Here to <Link className="text-blue-500 hover:underline" to={"/signup"}>SignUp</Link></p>
      </div>
    </div>
  );
};

export default LoginRole;
