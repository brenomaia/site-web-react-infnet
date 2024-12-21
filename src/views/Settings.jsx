import { useAppContext } from '../Context.jsx';
import Container from '../components/Container';
import AppBar from '../components/AppBar';
import { Select, MenuItem, Button } from '@mui/material';
import Typography from "../components/Typography"
import { signOut } from '../services/authentication.js'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import TextFieldComponent from "../components/TextField";

const Settings = () => {
    const { translate, changeLanguage } = useAppContext();

    const navigate = useNavigate();
    const [currentLanguage, setCurrentLanguage] = useState(localStorage.getItem('language'))

    const changeAndRender = (newSetLanguage) => {
        console.log(newSetLanguage);
        changeLanguage(newSetLanguage);
        setCurrentLanguage(localStorage.getItem('language'));
    }

    const [name, setName] = useState(localStorage.getItem('babyName') || "")
    const [height, setHeight] = useState(localStorage.getItem('babyHeight') || "")
    const [weight, setWeight] = useState(localStorage.getItem('babyWeight') || "")

    const updateBabyData = () => {
        localStorage.setItem('babyName', name);
        localStorage.setItem('babyHeight', height);
        localStorage.setItem('babyWeight', weight);
        navigate("/");
    }

    return (
        <Container>
            <AppBar title={translate("Settings")} hideSettings={true}></AppBar>
            <Container style={{ margin: "5px", padding: "5px", border: "1px solid black" }}>
                <Typography>{translate('baby-data')}</Typography>
                <TextFieldComponent
                    sx={{ marginTop: "5px" }}
                    placeholder={translate('name')}
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
                <TextFieldComponent
                    sx={{ marginTop: "5px", display: "block" }}
                    placeholder={translate('height-in-cm')}
                    value={height}
                    onChange={(event) => setHeight(event.target.value)} />
                <TextFieldComponent
                    sx={{ marginTop: "5px", display: "block" }}
                    placeholder={translate('weight-in-kg')}
                    value={weight}
                    onChange={(event) => setWeight(event.target.value)} />
                <Button
                    variant="contained"
                    sx={{ marginTop: "5px" }}
                    onClick={() => updateBabyData()}
                >
                    Save
                </Button>
            </Container>
            <Container style={{ margin: "5px" }}>
                <Typography>{translate('Choose your language')}</Typography>
                <Select
                    value={currentLanguage}
                    label={translate('Language')}
                    onChange={(event) => changeAndRender(event.target.value)}
                >
                    <MenuItem value="en">{translate('English')}</MenuItem>
                    <MenuItem value="pt">{translate('Portuguese')}</MenuItem>
                    <MenuItem value="es">{translate('Spanish')}</MenuItem>
                </Select>
            </Container>

            <Container>
                <Button
                    onClick={() => signOut(navigate)}
                    sx={{ margin: "5px" }}
                    variant='contained'
                >
                    {translate('Log Out')}
                </Button>
            </Container>
        </Container >
    )
}

export default Settings;