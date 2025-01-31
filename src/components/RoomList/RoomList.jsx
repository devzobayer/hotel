import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { Box } from '@mui/material';
import dayjs from 'dayjs';

const RoomList = () => {
    const [value, setValue] = useState([dayjs(), dayjs().add(1, 'day')]);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    startText="Check-in"
                    endText="Check-out"
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(startProps, endProps) => (
                        <>
                            <Box sx={{ mx: 1 }}>From</Box>
                            <TextField {...startProps} />
                            <Box sx={{ mx: 1 }}>to</Box>
                            <TextField {...endProps} />
                        </>
                    )}
                />
            </LocalizationProvider>
        </Box>
    );
};

export default RoomList;