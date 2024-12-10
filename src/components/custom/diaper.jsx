import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";

const DiaperForm = ({ }) => {
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
            <DateTimePicker style={styles.dateTimePicker} />
            <TextField multiline fullWidth sx={styles.textField} placeholder="Observações" />

            <InputLabel sx={styles.diaperStateLabe} id="diaperStateLabel">Estado da fralda</InputLabel>
            <Select labelId="diaperStateLabel" sx={styles.select} label="Estado da fralda" value={diaperState} onChange={(event) => onChangeDiaperState(event.target.value)}>
                <MenuItem value="dirty">Suja</MenuItem>
                <MenuItem value="wet">Molhada</MenuItem>
                <MenuItem value="both">Ambas</MenuItem>
                <MenuItem value="clean">Limpa</MenuItem>
            </Select>
        </Container>
    )
}

export default DiaperForm;