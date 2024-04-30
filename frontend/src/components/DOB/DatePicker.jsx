import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';

export default function BasicDatePicker({label, handler, id, name}) {
  const today = dayjs();
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          label={label}
          onChange={(value) => {handler(name, value)}}
          id={id}
          name={name}
          maxDate={today}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
