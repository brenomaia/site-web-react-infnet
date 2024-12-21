import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { Select, MenuItem, InputLabel } from "@mui/material";
import { useState } from "react";
import { useAppContext } from "../../Context";
import { adjustDateTimeForTimezone } from "../../utils/core.js"

const EatForm = ({ receivedData, onChange }) => {
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
        sideStateLabel: {
            marginTop: "5px"
        },
        sourceStateLabel: {
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
                placeholder={translate('observations')}
                onChange={(event) => onChangeValue('observations', event.target.value)}
                value={data?.observations ? data.observations : ""}
            />

            <InputLabel sx={styles.sideStateLabel} id="sideStateLabel">{translate('which-side')}</InputLabel>
            <Select
                labelId="sideStateLabel"
                sx={styles.select}
                label="Qual lado"
                value={data.side ? data.side : ""}
                onChange={(event) => onChangeValue('side', event.target.value)}
            >
                <MenuItem value="right">{translate("right")}</MenuItem>
                <MenuItem value="left">{translate("left")}</MenuItem>
                <MenuItem value="both">{translate("both")}</MenuItem>
                <MenuItem value="none">{translate("none")}</MenuItem>
            </Select>

            <InputLabel sx={styles.sourceStateLabel} id="sourceStateLabel">{translate('from-where')}</InputLabel>
            <Select
                labelId="sourceStateLabel"
                sx={styles.select}
                label="Onde bebeu"
                value={data?.source ? data.source : "breast"}
                onChange={(event) => onChangeValue('source', event.target.value)}
            >
                <MenuItem value="breast">{translate('breast')}</MenuItem>
                <MenuItem value="bottle">{translate('bottle')}</MenuItem>
            </Select>
            {
                data.source === "bottle" ?
                    <TextField value={data?.bottles ? data.bottles : 0} sx={styles.textField} placeholder={translate('bottles')} onChange={(event) => onChangeValue('bottles', event.target.value)} />
                    : null
            }
        </Container>
    )
}

export default EatForm;