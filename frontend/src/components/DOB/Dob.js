import React from 'react';
import './dob.css';
import BasicDatePicker from './DatePicker';

const Dob = ({ handler }) => {

  return (
    <div className='Dob'>
      
      <div className='DobImage'></div>
      <div className='DobInput'>
        <BasicDatePicker 
          label="Date of Birth"
          handler={handler}
          id="dob"
          name="dob"
        />
      </div>

      
    </div>
  );
};

export default Dob;
