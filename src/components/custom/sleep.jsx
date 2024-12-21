import DateTimePicker from "../DateTimePicker";
import Container from "../Container";
import TextField from "../TextField";
import { useState } from "react";
import { useAppContext } from "../../Context";
import { adjustDateTimeForTimezone } from "../../utils/core"

const SleepForm = ({ receivedData, onChange }) => {
    const { translate } = useAppContext();
    const [sleepBegin, setSleepBegin] = useState(receivedData ? receivedData.sleepBegin : "");
    const [sleepOver, setSleepOver] = useState(receivedData ? receivedData.sleepOver : "");
    const [observations, setObservations] = useState(receivedData ? receivedData.observations : "");
    const [data, setData] = useState(receivedData || {});

    const styles = {
        mainContainer: {
            display: "block",
            margin: "10px"
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

    const onChangeSleepBegin = (newSleepBegin) => {
        setSleepBegin(newSleepBegin);

        const newData = {
            sleepBegin: newSleepBegin,
            sleepOver: data.sleepOver,
            observations: data.observations
        }

        setData(newData);
        onChange(newData);
    }

    const onChangeSleepOver = (newSleepOver) => {
        setSleepOver(newSleepOver);

        const newData = {
            sleepBegin: data.sleepBegin,
            sleepOver: newSleepOver,
            observations: data.observations
        };

        setData(newData);
        onChange(newData);
    };

    const onChangeObservations = (newObservations) => {
        setObservations(newObservations);

        const newData = {
            sleepBegin: data.sleepBegin,
            sleepOver: data.sleepOver,
            observations: newObservations
        };

        setData(newData);
        onChange(newData);
    };

    return (
        <Container style={styles.mainContainer}>
            <DateTimePicker
                value={data?.sleepBegin ? adjustDateTimeForTimezone(data?.sleepBegin) : null}
                style={styles.dateTimePicker}
                fullWidth label={translate('sleep-begin')}
                onChange={(value) => onChangeSleepBegin(value.toString())} />
            <DateTimePicker
                value={data?.sleepOver ? adjustDateTimeForTimezone(data?.sleepOver) : null}
                style={styles.dateTimePicker}
                fullWidth
                label={translate('sleep-over')}
                onChange={(value) => onChangeSleepOver(value.toString())} />
            <TextField
                multiline
                fullWidth
                sx={styles.textField}
                placeholder={translate('observations')}
                value={data?.observations ? data.observations : ""}
                onChange={(event) => onChangeObservations(event.target.value)} />
        </Container>
    )
}

export default SleepForm;