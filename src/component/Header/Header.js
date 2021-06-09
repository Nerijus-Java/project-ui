import {AppBar, Link, Menu, MenuItem, Toolbar, Typography, withStyles,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink} from "react-router-dom";
import React from 'react';
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {useSelector} from "react-redux";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #ffa53b',
    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles((theme) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
        fontSize: '10px'
    },
}))(MenuItem);

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid #c648ff`,
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1),
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    active: {
        fontWeight: "bolder",
        color: "primary"
    }
}));


export default () => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const loggedInUser = useSelector(state => state.user.loggedInUser)

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <AppBar position="static" color={"default"} elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>

                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Project
                    </Typography>

                    <div>
                        <Link variant="button" color="inherit" to="/groups"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            Groups
                        </Link>


                        <Button
                            aria-haspopup="true"
                            variant="outlined"
                            color={"secondary"}
                            onClick={handleClick}
                        >
                            <PersonOutlineOutlinedIcon/>
                        </Button>

                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >

                            {loggedInUser?.username ?
                                <>
                                    <Link variant="button" to="/login" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem>
                                            {loggedInUser.username}
                                        </StyledMenuItem>
                                    </Link>
                                    <Link variant="button" to="/login" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem>
                                            Logout
                                        </StyledMenuItem>
                                    </Link>
                                </>

                                :

                                <>
                                    <Link variant="button" to="/login" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem>
                                            login
                                        </StyledMenuItem>
                                    </Link>
                                    <Link variant="button" to="/register" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem color={"inherit"}>
                                            register
                                        </StyledMenuItem>
                                    </Link>
                                </>
                            }

                        </StyledMenu>
                    </div>

                    <nav>
                        <Link variant="button" to="/" className={classes.link} component={NavLink}>
                            <Button variant="outlined" color={"secondary"}>
                                <HomeIcon/>
                            </Button>
                        </Link>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
}
