import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateTimePickerComponent = () => {
    return (
        <LocalizationProvider adapter={AdapterDayjs} dateAdapter={AdapterDayjs}>
            <DateTimePicker />
        </LocalizationProvider>
    )
}

export default DateTimePickerComponent;