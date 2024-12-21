import Button from "@mui/material/Button";
import TextFieldComponent from "../components/TextField";
import Container from "../components/Container";
import Box from "../components/Box";

import { signUp } from "../services/authentication";
import { useState } from "react";
import { useAppContext } from "../Context";
import { useNavigate } from "react-router-dom";

import { handleChange } from "../utils/core";

const Signup = () => {
    const navigate = useNavigate();
    const { supabaseClient, showSnackMessage, showAlertMessage } = useAppContext();

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

    const validateUsername = (username) => {
        if (username === "") {
            return { error: true, message: "Usuário não pode ser vazio." }
        }
        return { error: false, message: null }
    }

    const validatePassword = (password) => {
        if (password === "") {
            return { error: true, message: "Usuário não pode ser vazio." }
        } else if (password.length < 6) {
            return { error: true, message: "Senha precisa ter pelo menos 6 caracteres." }
        }
        return { error: false, message: null }
    }

    const verifySignup = async () => {
        const usernameValidation = validateUsername(data.username.value);
        const passwordValidation = validatePassword(data.password.value);

        if (usernameValidation.error) {
            showSnackMessage(usernameValidation.message)
            return;
        } else if (passwordValidation.error) {
            showSnackMessage(passwordValidation.message)
            return;
        }


        console.log(data.username.value);
        console.log(data.password.value);

        let { data: response, error } = await signUp(data.username.value, data.password.value, supabaseClient);

        if (error) {
            if (error.toString().indexOf("AuthApiError: User already registered") !== -1) {
                showSnackMessage("Usuário registrado");
            } else {
                showSnackMessage(error.toString());
            }
        } else {
            showSnackMessage("Usuário criado com sucesso!");
            navigate("/signin")
        }
    }

    const boxStyle = {
        display: "block",
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
                <Button variant="contained" style={buttonStyle} onClick={verifySignup}>Cadastrar</Button>
            </Container>
        </Box>
    )
}

export default Signup;