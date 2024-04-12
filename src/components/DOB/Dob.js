import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dob.css';

const Dob = ({ updateUserData }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleDobNextClick = () => {
    if (selectedDate) {
      console.log('Selected Date:', selectedDate);
      updateUserData({ dob: selectedDate });
      navigate('/gender'); 
    } else {
      alert('Please select a valid date of birth.');
    }
  };

  return (
    <div className='Dob'>
      <div className='DobImage'>
        <label></label>
      </div>

      <div className='DobInput'>
        <label>Date of Birth: </label>
        <DatePicker
          className='DobDatePicker'
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd-MM-yyyy"
          placeholderText="00-00-0000"
          showYearDropdown
          scrollableYearDropdown
          yearDropdownItemNumber={50}
          minDate={new Date(1975, 0, 1)}
          required
        />
      </div>

      <div className='DobNext'>
        <button onClick={handleDobNextClick}><img/></button>
      </div>
    </div>
  );
};

export default Dob;
