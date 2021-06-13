import "./styles.css";
import {makeStyles, ThemeProvider} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom";
import {createMuiTheme, CssBaseline} from "@material-ui/core";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
import {Provider} from "react-redux";
import store from "./store";
import Footer from "./component/Footer/Footer";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#ffa900',
        },
        secondary: {
            main: '#ffffff',
        }
    },
});

function App() {
    const classes = useStyles();

    return (
        <Provider store={store}>
            <Router>
                <div className={classes.root}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline/>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </ThemeProvider>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
