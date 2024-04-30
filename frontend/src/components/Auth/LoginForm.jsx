import { Button, IconButton } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom'
import { useEffect } from "react";
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from "react-router-dom";
import { BACKEND_URL } from '../../values'

const LoginForm = ({ setIsSnackbarOpen, existingEmail, userData, setUserData, view, setView }) => {

  const navigate = useNavigate()
  const sellerFormRef = useRef(null);
  const investorFormRef = useRef(null);
  const [loading, setLoading] = useState(false)


  const handler = (e) => {
    e.preventDefault();
    let field = e.target.name
    let value = e.target.value

    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        [field]: value
      }
    }))
  };

  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    "&:hover": {
      backgroundColor: "#2b5146",
    },
  }));
  const ColorLoadingButton = styled(LoadingButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    "&:hover": {
      backgroundColor: "#2b5146",
    },
  }));

  const ColorIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    '&:hover': {
      backgroundColor: "#2b5146",
    }
  }));




  const loginConsumer = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/login/consumer`,
        {...userData.modelData},
        { withCredentials: true }
      )
      if(res.data.message) {
        setIsSnackbarOpen(() => ({ color: "success", message: res.data.message }))
        localStorage.setItem("consumerId", res.data.data.id)
        navigate('/fitex')
      }
      else if(res.data.error) {
        console.log(res.data.error)
        setIsSnackbarOpen(() => ({ color: "danger", message: res.data.error }))
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log("Error Logging In Consumer")
    }
  }

  const loginCook = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      setLoading(true)
      const response = await axios.post(`${BACKEND_URL}/auth/login/cook`,
        { ...userData.modelData },
        { withCredentials: true }
      )
      if (response.data.error) {
        setIsSnackbarOpen(() => ({ color: "danger", message: response.data.error }))
        setLoading(false)
      }
      else {
        navigate('/cook')
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }

  }


  return (
    <div className="sm:w-96">
      {view == "CONSUMER" && (
        <motion.div
          ref={investorFormRef}
          initial={{ opacity: 0, x: "300px", y: "0px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 0, x: "-300px", y: "0px" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-2 items-center text-gray-700 font-medium md:-ms-6">
            <ColorIconButton
              onClick={() => {
                investorFormRef.current.classList.add("slide-left-out");
                setTimeout(() => {
                  setView("ROLE");
                }, 300);
              }}
            >
              <WestOutlinedIcon className="text-lg text-white cursor-pointer" />
            </ColorIconButton>
            <p className="text-gray-700 text-2xl mx-auto">Consumer Login</p>
          </div>
          <div className="flex flex-col gap-4 pt-4 ">
            <p className="text-black">
              Enter your Credentials to Get Started🔥 {" "}
            </p>
            <form name="consumerLogin"  className="flex flex-col gap-4">
              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
                <label htmlFor="email">Email:</label>
                <TextField
                  name="email"
                  label="Email"
                  
                  size="small"
                  required
                  className="w-full xs:w-auto"
                  onChange={(e) => { handler(e) }}
                />
              </div>

              <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
                <label htmlFor="password">Password:</label>
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  
                  size="small"
                  required
                  className="w-full xs:w-auto"
                  onChange={(e) => { handler(e) }}
                />
              </div>

              <ColorLoadingButton loading={loading} variant="contained" type="submit" onClick={(e) => { loginConsumer(e) }}> Submit</ColorLoadingButton>

            </form>
          </div>

          <div className="mt-2 text-sm">
            <p>Don't have an existing account? Click Here to <Link className="text-blue-500 hover:underline" to={"/signup"}>Sign Up</Link></p>
          </div>
        </motion.div>
      )}

      {view == "COOK" && (
        <motion.div
          ref={sellerFormRef}
          initial={{ opacity: 0, x: "300px", y: "0px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 0, x: "-300px", y: "0px" }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex gap-2 items-center text-gray-700 font-medium">
            <ColorIconButton
              onClick={() => {
                sellerFormRef.current.classList.add("slide-left-out");
                setTimeout(() => {
                  setView("ROLE");
                }, 300);
              }}
            >
              <WestOutlinedIcon className="text-lg text-white cursor-pointer" />
            </ColorIconButton>
            <p className="text-2xl ms-20">Cook Login</p>
          </div>
          <form name="orgForm" className="flex flex-col gap-4 py-4">
            <p className="text-black">
              Enter your Credentials to Get Started🔥 {" "}
            </p>
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
              <label htmlFor="email">Cook Email:</label>
              <TextField
                name="email"
                label="Email"
                id="outlined-size-small"
                size="small"
                defaultValue={existingEmail?.value}
                className="w-full xs:w-auto"
                onChange={(e) => { handler(e) }}
              />
            </div>
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
              <label htmlFor="password">Password:</label>
              <TextField
                name="password"
                type="password"
                label="Password"
                id="outlined-size-small"
                size="small"
                className="w-full xs:w-auto"
                onChange={(e) => { handler(e) }}
              />
            </div>
            <ColorLoadingButton loading={loading} onClick={(e) => { loginCook(e) }} loadingPosition="end" variant="contained" >Submit</ColorLoadingButton>
            <div className="text-sm">
              <p>Don't have an existing account? Click Here to <Link className="text-blue-500 hover:underline" to={"/signup"}>Sign Up</Link></p>
            </div>
          </form>
        </motion.div>
      )}

    </div>
  );
};

export default LoginForm;
