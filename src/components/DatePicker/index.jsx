import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DatePickerComponent = () => {
    return (
        <LocalizationProvider adapter={AdapterDayjs} dateAdapter={AdapterDayjs}>
            <DatePicker />
        </LocalizationProvider>
    )
};

export default DatePickerComponent;