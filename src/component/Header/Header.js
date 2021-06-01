import {AppBar, Button, Link, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    toolbar: {
        flexWrap: 'wrap',
    }
}));

export default () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>

                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        <Link variant="" to="/" className={classes.link} component={NavLink}>
                            Home
                        </Link>
                    </Typography>

                    <nav>
                        <Link variant="button" to="/login" className={classes.link} component={NavLink}>
                            <Button variant="outlined">Login</Button>
                        </Link>

                        <Link variant="button" to="/register" className={classes.link} component={NavLink}>
                            <Button variant="outlined">Register</Button>
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
}