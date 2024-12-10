import { useNavigate } from "react-router-dom";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import TypographyComponent from "../Typography";
import IconButtonComponent from "../IconButton";

const AppBarComponent = ({ ...props }) => {
    const nav = useNavigate();

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButtonComponent color="inherit" edge="start"></IconButtonComponent>
                <TypographyComponent variant="h6">Tela</TypographyComponent>
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent;