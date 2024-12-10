import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";

const SleepForm = ({ }) => {
    const [diaperState, setDiaperState] = useState('');

    const styles = {
        mainContainer: {
            display: "block",
            margin: "10px",
            // padding: "10px"
        },
        dateTimePicker: {
            display: "block"
        },
        textField: {
            display: "block",
            marginTop: "5px"
        },
        select: {
            marginTop: "5px"
        },
        diaperStateLabe: {
            marginTop: "5px"
        }
    }

    const onChangeDiaperState = (newState) => {
        setDiaperState(newState);
    }

    return (
        <Container style={styles.mainContainer}>
            {/* <DateTimePicker style={styles.dateTimePicker} fullWidth label="Início da soneca" />
            <DateTimePicker style={styles.dateTimePicker} fullWidth label="Fim da soneca" /> */}
            <TextField
                value={diaperState}
                onChange={(e) => setValue(e.target.value)}
                select // tell TextField to render select
                label="Label"
            >
                <MenuItem key={1} value="test">
                    Test 1
                </MenuItem>
                <MenuItem key={2} value="test2">
                    Test 2
                </MenuItem>
            </TextField>
            <TextField multiline fullWidth sx={styles.textField} placeholder="Observações" />
        </Container>
    )
}

export default SleepForm;