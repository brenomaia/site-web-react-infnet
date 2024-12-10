import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const DateTimePickerComponent = ({ props }) => {
    return (
        <LocalizationProvider adapter={AdapterDayjs} dateAdapter={AdapterDayjs}>
            <DateTimePicker {...props} />
        </LocalizationProvider>
    )
}

export default DateTimePickerComponent;