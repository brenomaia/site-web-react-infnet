import { Button } from "@mui/material";
import Container from "../components/Container";
import AppBarComponent from "../components/AppBar"

const Home: React.FC = () => {
    const styles = {
        addMenu: {
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "5px"
        },
        addButton: {
            backgroundColor: "#dbb8ff",
            color: "white"
        }
    }

    return (
        <Container>
            <AppBarComponent />
            {/* menus para adição */}
            <Container style={styles.addMenu}>
                {/* fraldas */}
                <Container>
                    <Button style={styles.addButton}>Adicionar Fralda</Button>
                </Container>

                {/* soneca */}
                <Container>
                    <Button style={styles.addButton}>Adicionar Soneca</Button>
                </Container>

                {/* amamentação */}
                <Container>
                    <Button style={styles.addButton}>Adicionar Amamentação</Button>
                </Container>
            </Container>

            {/* registros  */}
            <Container>

            </Container>
        </Container>
    )
};

export default Home;