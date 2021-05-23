import {makeStyles} from "@material-ui/core/styles";
import {BrowserRouter as Router} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
    }
}));

function App() {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <CssBaseline/>
                <Header/>
                <Content/>
            </div>
        </Router>
    );
}

export default App;
