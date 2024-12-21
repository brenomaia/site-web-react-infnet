import { useParams } from 'react-router-dom';
import Diaper from "../components/custom/diaper.jsx";
import Eat from "../components/custom/eat.jsx";
import Sleep from "../components/custom/Sleep.jsx";
import Container from "../components/Container/index.jsx";
import { useEffect, useState } from 'react';
import AppBar from '../components/AppBar/index.jsx'
import { useAppContext } from "../Context.jsx"
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { drop, save, get, update } from "../services/database.js"

const Form = () => {
    const { translate } = useAppContext();
    const navigate = useNavigate();

    const params = useParams();
    const type = params.type;
    const id = params.id

    const isEditable = id ? true : false

    const [data, setData] = useState({});

    useEffect(() => {
        const currentData = isEditable ? get(id) : {}
        setData(currentData);
    }, [])

    const getComponent = (dataToComp) => {
        switch (type) {
            case "diaper":
                return <Diaper receivedData={dataToComp} onChange={setData}></Diaper>
            case "breastfeed":
                return <Eat receivedData={dataToComp} onChange={setData}></Eat>
            case "sleep":
                return <Sleep receivedData={dataToComp} onChange={setData}></Sleep>
            default:
                return <Sleep receivedData={dataToComp} onChange={setData}></Sleep>
        }
    }

    const onSave = (dataToSave) => {
        if ("id" in dataToSave) {
            update(dataToSave, dataToSave.id)
        } else {
            save(dataToSave)
        }
        navigate("/");
    };

    const onDelete = (itemId) => {
        drop(itemId)
        navigate("/");
    }

    return (
        <Container>
            <AppBar title={translate("form")}></AppBar>
            {Object.keys(data).length > 0 || !isEditable ? getComponent(data) : null}
            <Button
                sx={{ position: "fixed", bottom: 0 }}
                fullWidth={true}
                variant='contained'
                onClick={() => onSave(data)}
            >
                {translate('save')}
            </Button>
            {data?.id ? <Button onClick={() => onDelete(data.id)}>{translate('delete')}</Button> : null}
        </Container>
    )
};

export default Form;