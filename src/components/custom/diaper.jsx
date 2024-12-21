import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useEffect, useState } from "react";
import { useAppContext } from "../../Context.jsx";
import { adjustDateTimeForTimezone } from "../../utils/core";

const DiaperForm = ({ receivedData, onChange }) => {
    const [data, setData] = useState(receivedData || {});

    const { translate } = useAppContext();

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
        diaperStateLabe: {
            marginTop: "5px"
        }
    }

    const onChangeValue = (key, value) => {
        const newData = { ...data }
        newData[key] = value;
        setData(newData);
        onChange(newData);
    };

    return (
        <Container style={styles.mainContainer}>
            <DateTimePicker
                style={styles.dateTimePicker}
                onChange={(value) => onChangeValue('dateTime', value.toString())}
                value={data?.dateTime ? adjustDateTimeForTimezone(data?.dateTime) : null}
            />

            <TextField
                multiline
                fullWidth
                sx={styles.textField}
                placeholder={translate("observations")}
                onChange={(event) => onChangeValue('observations', event.target.value)}
                value={data?.observations ? data.observations : ""}
            />

            <InputLabel sx={styles.diaperStateLabe} id="diaperStateLabel">{translate("diaper-state")}</InputLabel>
            <Select
                labelId="diaperStateLabel"
                sx={styles.select}
                value={data?.diaperState ? data.diaperState : null}
                onChange={(event) => onChangeValue('diaperState', event.target.value)}
            >
                <MenuItem value="dirty">{translate("dirty")}</MenuItem>
                <MenuItem value="wet">{translate("wet")}</MenuItem>
                <MenuItem value="both">{translate("both")}</MenuItem>
                <MenuItem value="clean">{translate("clean")}</MenuItem>
            </Select>
        </Container>
    )
}

export default DiaperForm;