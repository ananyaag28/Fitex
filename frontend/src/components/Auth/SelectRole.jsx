import { Link } from "react-router-dom";
import React from "react";


// this is [view] = "ROLE"
const SelectRole = ({userData, setUserData, view, setView}) => {

    const handler = (role) => {
        setUserData((prev) => ({ ...prev, role: role }))

        if(role=="CONSUMER") {
            setView("DATA_CONSUMER")
        }
        else{
            setView("DATA_COOK")
        }
    }

  return (
    view == "ROLE" &&
    <>
        <div>
            <h1 className="text-3xl">Welcome to <span className="text-green-600">Fitex!</span></h1>
            <h3 className="text-left text-gray-600 mt-4">How would you like to Join Us:</h3>
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
              checked={userData.role === "CONSUMER"}
              className="radioButton"
              onChange={() => handler("CONSUMER")}
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
        <p>Have an account already? Click Here to <Link className="text-blue-500 hover:underline" to={"/login"}>login</Link></p>
      </div>
    </>
  );
};

export default SelectRole;
