import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";

const EatForm = ({ }) => {
    const [side, setSide] = useState('');
    const [source, setSource] = useState('');

    const styles = {
        mainContainer: {
            display: "block",
            margin: "10px",
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
        sideStateLabel: {
            marginTop: "5px"
        },
        sourceStateLabel: {
            marginTop: "5px"
        }
    }

    const onChangeSide = (newState) => {
        setSide(newState);
    }

    const onChangeSource = (newSource) => {
        setSource(newSource);
    }

    return (
        <Container style={styles.mainContainer}>
            <DateTimePicker style={styles.dateTimePicker} />
            <TextField multiline fullWidth sx={styles.textField} placeholder="Observações" />

            <InputLabel sx={styles.sideStateLabel} id="sideStateLabel">Qual lado</InputLabel>
            <Select labelId="sideStateLabel" sx={styles.select} label="Qual lado" value={side} onChange={(event) => onChangeSide(event.target.value)}>
                <MenuItem value="right">Direito</MenuItem>
                <MenuItem value="left">Esquerdo</MenuItem>
                <MenuItem value="both">Ambos</MenuItem>
                <MenuItem value="none">Nenhum</MenuItem>
            </Select>

            <InputLabel sx={styles.sourceStateLabel} id="sourceStateLabel">Onde bebeu</InputLabel>
            <Select labelId="sourceStateLabel" sx={styles.select} label="Onde bebeu" value={source} onChange={(event) => onChangeSource(event.target.value)}>
                <MenuItem value="breast">Peito</MenuItem>
                <MenuItem value="bottle">Garrafa</MenuItem>
            </Select>
        </Container>
    )
}

export default EatForm;