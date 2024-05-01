import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Dropdown({options, label, setUserData}) {
  const [val, setVal] = React.useState('');

  const handleChange = (event) => {
    setVal(event.target.value);
    setUserData((prev) => ({
        ...prev, modelData: {
          ...prev.modelData,
          [label]: event.target.value
        }
    }))
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={val}
        label={label}
        onChange={handleChange}
        className='text-left'
      >
        {options.map((option,id) => {
            return (
                <MenuItem key={id} value={option}>{option}</MenuItem>
            )
        })}

      </Select>
    </FormControl>
  );
}
