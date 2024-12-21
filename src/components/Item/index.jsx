import Container from "../Container";
import Typography from "../Typography";
import { useAppContext } from "../../Context";
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";

const Item = ({ item, type }) => {
    const { translate } = useAppContext();
    const navigate = useNavigate();

    const itemStyle = {
        margin: "5px",
        border: "1px solid #dbb8ff",
        padding: "5px"
    }

    const goToEdit = (item, type) => {
        navigate('/' + type + '/' + item.id)
    }

    const renderComponentForType = (item, type) => {
        switch (type) {
            case "diaper":
                return <Container style={itemStyle}>
                    <Typography style={{ fontWeight: "bold" }}>{translate('diaper')}: </Typography>
                    <Typography>{item.diaperState}</Typography>
                    <Typography>{item.dateTime}</Typography>
                    <Typography>{item.observations}</Typography>
                    <Button onClick={() => goToEdit(item, type)}>{translate('see')}</Button>
                </Container>
            case "sleep":
                return <Container style={itemStyle}>
                    <Typography style={{ fontWeight: "bold" }}>{translate('sleep')}: </Typography>
                    <Typography>{translate('sleep-begin')}: {item.sleepBegin}</Typography>
                    <Typography>{translate('sleep-over')}: {item.sleepOver}</Typography>
                    <Typography>{translate('observations')}: {item.observations}</Typography>
                    <Button onClick={() => goToEdit(item, type)}>{translate('see')}</Button>
                </Container>
            default:
                return <Container style={itemStyle}>
                    <Typography style={{ fontWeight: "bold" }}>{translate('breastfeed')}</Typography>
                    <Typography>{translate('datetime')}: {item.dateTime}</Typography>
                    <Typography>{translate('source')}: {item.source}</Typography>
                    <Typography>{translate('which-side')}: {item.side}</Typography>
                    <Button onClick={() => goToEdit(item, type)}>{translate('see')}</Button>
                </Container>
        }
    }

    return (
        renderComponentForType(item, type)
    )
}

export default Item;