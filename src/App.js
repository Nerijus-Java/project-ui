import "./styles.css";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}));

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <ThemeProvider theme={darkTheme}>
                    <CssBaseline/>
                    <Header/>
                    <Content/>
                </ThemeProvider>
            </div>
        </Router>
    );
}

export default App;