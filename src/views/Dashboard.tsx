import { useState } from "react";
import Alert from "../components/Alert";
import Avatar from "../components/Avatar";
import Box from "../components/Box";
import Card from "../components/Card";
import Container from "../components/Container";
import Checkbox from "../components/Checkbox";
import DatePickerComponent from "../components/DatePicker";
import DateTimePickerComponent from "../components/DateTimePicker";
import Fab from "../components/Fab";
import Grid from "../components/Grid";
import IconButton from "../components/IconButton";
import SnackBar from "../components/SnackBar";
import SwitchComponent from "../components/Switch";
import Tab from "../components/Tab";
import TextFieldComponent from "../components/TextField";
import TypographyComponent from "../components/Typography";

import imgPlaceholderPath from "../assets/image-placeholder.png"

const Dashboard = () => {
    const [showAlert, setShowAlert] = useState(false);

    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

    const showSnackbar = () => {
        setIsSnackbarOpen(true);
    };

    const closeSnackbar = () => {
        setIsSnackbarOpen(false);
    };

    const lorem = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, perspiciatis numquam iure voluptas dolorem fuga, magnam at itaque commodi ad nesciunt perferendis harum fugiat nihil officiis aperiam. Repellendus, reiciendis sunt.";

    return (
        <div>
            <div>
                {showAlert && (
                    <Alert
                        message="Teste mensagem"
                        onClose={() => setShowAlert(false)}
                    />
                )}
                <button onClick={() => setShowAlert(true)}>Mostrar alerta</button>
            </div>

            <div>
                <Avatar name="Avatar" imgPath="" />
            </div>

            <Box padding="20px"
                margin="10px"
                bgColor="cyan"
                borderRadius="10px">
                <p>Conteúdo dentro de uma Box</p>
            </Box>

            <Box padding="20px"
                margin="10px"
                bgColor="#ffffff"
                borderRadius="10px">
                <p>Conteúdo dentro de uma outra Box</p>
            </Box>

            <Card title="Card 1" imgPath={imgPlaceholderPath} content={lorem}></Card>

            <Container>
                <p>Inside a container</p>
            </Container>

            <Checkbox label="Checkbox test" onChange={() => console.log("changed")} />

            <DatePickerComponent></DatePickerComponent>
            <br></br>
            <DateTimePickerComponent></DateTimePickerComponent>
            <Fab onClick={() => console.log("fab clicked")} label="Click"></Fab>

            <Grid columns="1fr 1fr 1fr" />

            <IconButton icon={<span>⭐</span>} onClick={() => console.log("clicked icon button")}></IconButton>

            <button onClick={showSnackbar}>Show Snackbar</button>
            <SnackBar
                message="This is a snackbar message!"
                isOpen={isSnackbarOpen}
                onClose={closeSnackbar}
                duration={5000}
            />

            <SwitchComponent/>

            <Tab />

            <br></br>

            <TextFieldComponent/>

            <TypographyComponent>Text aqui no component de tipografia (text)</TypographyComponent>
        </div>
    )
}

export default Dashboard;