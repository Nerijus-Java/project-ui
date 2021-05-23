import {AppBar, Button, Link, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";

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

    return(
      <>
          <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
              <Toolbar className={classes.toolbar}>

                  <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                      <RouterLink to="/" component={Link} color="textPrimary" className={classes.link}>Home</RouterLink>
                  </Typography>

                  <nav>

                  </nav>

                  <RouterLink to="/login" component={Button}  variant="outlined" className={classes.link}>Login</RouterLink>
                  <RouterLink to="/register" component={Button}  variant="outlined" className={classes.link}>Register</RouterLink>

              </Toolbar>
          </AppBar>
      </>
    );
}