import { LocalizationProvider, DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ptBR } from '@mui/x-date-pickers/locales';


const DateTimePickerComponent = ({ ...props }) => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} localeText={ptBR.components.MuiLocalizationProvider.defaultProps.localeText}>
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker {...props} />
            </DemoContainer>
        </LocalizationProvider>
    )
}

export default DateTimePickerComponent;