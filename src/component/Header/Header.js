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
                      Project
                  </Typography>

                  <nav>
                      <RouterLink to="/" component={Link} variant="button" color="textPrimary">Home</RouterLink>
                      <RouterLink to="/login" component={Link} variant="button" color="textPrimary" className={classes.link}>Login</RouterLink>
                  </nav>

                  <Button color="inherit" variant="outlined" className={classes.link}>
                      Login
                  </Button>
              </Toolbar>
          </AppBar>
      </>
    );
}