import { useNavigate } from "react-router-dom";
import { AppBar, Button } from "@mui/material";
import { Toolbar } from "@mui/material";
import TypographyComponent from "../Typography/index.jsx";
import IconButtonComponent from "../IconButton";
import { useAppContext } from "../../Context.jsx";

const AppBarComponent = ({ ...props }) => {
    const navigate = useNavigate();
    const { translate } = useAppContext();
    const { title, hideSettings } = props

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <IconButtonComponent color="inherit" edge="start"></IconButtonComponent>
                <TypographyComponent variant="h6">{title}</TypographyComponent>
                {hideSettings ? null : <Button
                    sx={{ color: "white", position: "fixed", right: 10, fontWeight: "bold" }}
                    onClick={() => navigate("/settings")}
                >
                    {translate('Settings')}
                </Button>}
            </Toolbar>
        </AppBar>
    )
}

export default AppBarComponent;