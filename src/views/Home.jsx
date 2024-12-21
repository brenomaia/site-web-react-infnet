import { Button } from "@mui/material";
import Container from "../components/Container/index.jsx";
import AppBarComponent from "../components/AppBar/index.jsx"
import { useAppContext } from "../Context.jsx"
import Typography from "../components/Typography/index.jsx"
import Item from "../components/Item/index.jsx"
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { list } from '../services/database.js';

const Home = () => {
    const { translate } = useAppContext();
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

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

    useEffect(() => {
        const savedItems = list()
        setItems(savedItems);
    }, [])

    const getType = (item) => {
        if ('diaperState' in item) {
            return "diaper"
        } else if ('sleepOver' in item) {
            return 'sleep'
        } else {
            return 'breastfeed'
        }
    }

    return (
        <Container>
            <AppBarComponent title={translate('Home')} hideSettings={false} />

            <Container
                style={{
                    display: "flex",
                    justifyContent: "space-around",
                    margin: "10px"
                }}
            >
                <Typography>
                    {localStorage.getItem("babyName")}
                </Typography>

                <Typography>
                    {localStorage.getItem("babyHeight")}cm
                </Typography>

                <Typography>
                    {localStorage.getItem("babyWeight")}kg
                </Typography>
            </Container>

            {/* menus para adição */}
            <Container style={styles.addMenu}>
                {/* fraldas */}
                <Container>
                    <Button
                        style={styles.addButton}
                        onClick={() => navigate("/new/diaper")}
                    >{translate('AddDiaper')}</Button>
                </Container>

                {/* soneca */}
                <Container>
                    <Button
                        style={styles.addButton}
                        onClick={() => navigate("/new/sleep")}
                    >{translate('AddSleep')}</Button>
                </Container>

                {/* amamentação */}
                <Container>
                    <Button
                        style={styles.addButton}
                        onClick={() => navigate("/new/breastfeed")}
                    >{translate('AddBreastfeed')}</Button>
                </Container>
            </Container>

            {/* registros  */}
            <Container>
                {items.map((item, id) => (<Item item={item} type={getType(item)} ></Item>
                ))}
            </Container>
        </Container >
    )
};

export default Home;