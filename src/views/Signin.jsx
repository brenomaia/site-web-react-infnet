import Button from "@mui/material/Button";
import TextFieldComponent from "../components/TextField";
import Container from "../components/Container";
import Box from "../components/Box";

import { signIn } from "../services/authentication";
import { useState } from "react";
import { useAppContext } from "../Context";
import { useNavigate } from "react-router-dom";
import { handleChange } from "../utils/core";

const Signin = () => {
    const navigate = useNavigate();
    const { showSnackMessage } = useAppContext();

    const [data, setData] = useState({
        username: {
            value: "",
            error: null,
        },
        password: {
            value: "",
            error: null,
        },
    })

    const verifyLogin = () => {
        let { data: response, error } = signIn(data.username.value, data.password.value);

        if (error && error.message === "Invalid login credentials") {
            showSnackMessage("Usuário ou senha errados.");
        } else {
            localStorage.setItem("session", JSON.stringify(response.session));
            localStorage.setItem("user", JSON.stringify(response.user));
            navigate("/");
        }
    }

    const boxStyle = {
        display: "block",
        textAlign: "center"
    }

    const textFieldStyle = {
        display: "block",
        margin: "5px",
        width: "100%"
    }

    const buttonStyle = {
        display: "block",
        margin: "5px",
        backgroundColor: "#dbb8ff",
        color: "white",
        width: "100%"
    }

    return (
        <Box style={boxStyle}>
            <Container style={boxStyle}>
                <TextFieldComponent
                    style={textFieldStyle}
                    placeholder="Usuário"
                    onChange={(event) => handleChange(data, setData, event.target.value, "username")}
                    value={data.username.value}
                />
                <TextFieldComponent
                    style={textFieldStyle}
                    placeholder="Senha"
                    onChange={(event) => handleChange(data, setData, event.target.value, "password")}
                    value={data.password.value}
                />
                <Button variant="contained" style={buttonStyle} onClick={verifyLogin}>Logar</Button>
            </Container>
        </Box>
    )
}

export default Signin;