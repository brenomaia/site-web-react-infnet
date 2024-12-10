import TypographyComponent from "../components/Typography";

const Dashboard = () => {
    const style = {
        div: {
            backgroundColor: "grey",
            width: "200px"
        }
    }
    return (
        <div style={style.div}>
            <TypographyComponent style={{ color: "white" }}><p>Dashboard</p></TypographyComponent>
        </div>
    )
}

export default Dashboard;