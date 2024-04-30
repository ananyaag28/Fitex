import { Button, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { useRef } from "react";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import axios from "axios";
import LoadingButton from '@mui/lab/LoadingButton';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Dob from "../DOB/Dob";
import Gender from "../Gender/Gender";
import Height from "../Height/Height";
import Weight from "../Weight/Weight";
import { BACKEND_URL } from '../../values'

const FormSignUp = ({ setIsSnackbarOpen, userData, setUserData, view, setView }) => {
  
  const navigate = useNavigate();
  const sellerFormRef = useRef(null);
  const investorFormRef = useRef(null);
  const [consumerPage, setConsumerPage] = useState(0)
  const [loading, setLoading] = useState(false)


  const handler = async (e) => {
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

  function pad(number) {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  }

  const handleDateChange = (name, value) => {
    // Extract date components
    const year = value.$y;
    const month = value.$M + 1; // JavaScript months are 0-indexed, so we add 1
    const day = value.$d.getDate();


    // Format the date components
    let date = new Date(`${year}-${pad(month)}-${pad(day)}`);
    date = date.toISOString()
    console.log(date);
    setUserData((prev) => ({
      ...prev, modelData: {
        ...prev.modelData,
        [name]: date
      }
    }))
  }

  
  const tabs = {
    0: <ConsumerTab1 handler={handler} />,
    1: <Dob handler={handleDateChange} /> ,
    2: <Gender setUserData={setUserData} />,
    3: <Height setUserData={setUserData} />,
    4: <Weight userData={userData} setUserData={setUserData} />,
  }
  
  const ColorLoadingButton = styled(LoadingButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    "&:hover": {
      backgroundColor: "#2b5146",
    },
  }));

  useEffect(()=>{console.log(consumerPage)},[consumerPage])

  const ColorIconButton = styled(IconButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    '&:hover': {
      backgroundColor: "#2b5146",
    }
  }));



  const signUpConsumer = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/signup/consumer`,
        { ...userData.modelData },
        { withCredentials: true } 
      )
      if (res.data.message) {
        setIsSnackbarOpen(() => ({ color: "success", message: res.data.message }))
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
      else if (res.data.error) {
        console.log(res.data.error)
        setIsSnackbarOpen(() => ({ color: "danger", message: res.data.error }))
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log("Error In Axios")
    }

  }

  const signUpCook = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      const res = await axios.post(`${BACKEND_URL}/auth/signup/cook`,
        { ...userData.modelData },
        { withCredentials: true }
      )
      if (res.data.message) {
        setIsSnackbarOpen(() => ({ color: "success", message: res.data.message }))
        setTimeout(() => {
          navigate('/login')
        }, 1000);
      }
      else if (res.data.error) {
        console.log(res.data.error)
        setIsSnackbarOpen(() => ({ color: "danger", message: res.data.error }))
        setLoading(false)
      }
    } catch (error) {
      setLoading(false)
      console.log("Error In Axios")
    }

  }

  return (
    <div className="sm:w-96">
      {view == "DATA_CONSUMER" && (
        <motion.div
          ref={investorFormRef}
          initial={{ opacity: 0, x: "300px", y: "0px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 0, x: "-300px", y: "0px" }}
          transition={{ duration: 0.2 }}
          className="-mt-10"
        >
          <div className="flex gap-2 items-center text-gray-700 font-medium md:-ms-6">
            <ColorIconButton
              onClick={() => {
                // investorFormRef.current.classList.add("slide-left-out");
                setTimeout(() => {
                  if(consumerPage==0){
                    setView("ROLE");
                  }
                  else setConsumerPage(consumerPage-1)
                }, 300);
              }}
            >
              <WestOutlinedIcon className="text-lg text-white cursor-pointer" />
            </ColorIconButton>
            <p className="text-gray-700 text-2xl mx-auto">Consumer Details</p>
          </div>
          <div className="flex flex-col gap-4 pt-4 ">
            
            <form name="consumerForm" id="consumerForm">
              {tabs[consumerPage]}
            </form>
            <ColorLoadingButton loading={loading} type="submit" form="consumerForm" variant="contained" onClick={(e) => { consumerPage!=4 ? setConsumerPage(consumerPage+1) : signUpConsumer(e) }}> {consumerPage==4 ? <>Submit</> : <>Next</>}</ColorLoadingButton>

          </div>
          <div className="mt-2">
            <p>Have an account already? Click Here to <Link className="text-blue-500 hover:underline" to={"/login"}>login</Link></p>
          </div>
        </motion.div>
      )}

      {view == "DATA_COOK" && (
        <motion.div
          ref={sellerFormRef}
          initial={{ opacity: 0, x: "300px", y: "0px" }}
          animate={{ opacity: 1, x: "0", y: "0px" }}
          exit={{ opacity: 0, x: "-300px", y: "0px" }}
          transition={{ duration: 0.2 }}
          className="-mt-10"
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
            <p className="text-2xl mx-20">Cook Details</p>
          </div>
          <form name="cookForm" className="flex flex-col gap-4 py-4">
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
              <label htmlFor="name">Cook Name:</label>
              <TextField
                name="name"
                label="Name"
                
                size="small"
                required
                className="w-full xs:w-auto"
                onChange={(e) => { handler(e) }}
              />
            </div>
            <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
              <label htmlFor="email">Cook Email:</label>
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

            <ColorLoadingButton loading={loading} variant="contained" type="submit" onClick={(e) => { signUpCook(e) }}> Submit</ColorLoadingButton>
          </form>
        </motion.div>
      )}

    </div>
  );
};

const ConsumerTab1 = ({handler}) => {

  const ColorLoadingButton = styled(LoadingButton)(({ theme }) => ({
    color: theme.palette.getContrastText("#2b5146"),
    backgroundColor: "#2b5146",
    "&:hover": {
      backgroundColor: "#2b5146",
    },
  }));

  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
        <label htmlFor="name">Username:</label>
        <TextField
          name="name"
          label="Name"
          
          size="small"
          required
          className="w-full xs:w-auto"
          onChange={(e) => { handler(e) }}
        />
      </div>
      <div className="flex flex-col xs:flex-row items-start xs:items-center justify-between">
        <label htmlFor="email">User Email:</label>
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

    </div>
  )
}

export default FormSignUp;
