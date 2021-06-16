import {AppBar, Link, Menu, MenuItem, Toolbar, Typography, withStyles,} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {NavLink, useHistory} from "react-router-dom";
import React from 'react';
import Button from "@material-ui/core/Button";
import HomeIcon from '@material-ui/icons/Home';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import {useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import LanguageDropDown from "../Language/LanguageDropDown";

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #fff',
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
        borderBottom: `1px solid white`,
        backgroundColor: "rgb(35,35,35)",
        color: "#fff"
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
    const history = useHistory();
    const {t} = useTranslation('NavBar');

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function refreshPage() {
        history.push("/")
        window.location.reload(false);
    }

    return (
        <>
            <AppBar position="static" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>

                    <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                        Project
                    </Typography>

                    <div>

                        {
                            loggedInUser?.roles.includes("ADMIN") ?
                                <Link variant="button" color={"inherit"} to={"/users"} className={classes.link}
                                      activeClassName={classes.active} component={NavLink}>
                                    {t("Users")}
                                </Link>
                                :
                                ""
                        }

                        <Link variant="button" color="inherit" to="/groups"
                              className={classes.link} activeClassName={classes.active} component={NavLink}>
                            {t('Groups')}
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
                                <div>
                                    <Link variant="button" to={"/user"} color={"inherit"} component={NavLink}>
                                        <StyledMenuItem>
                                            {loggedInUser.username}
                                        </StyledMenuItem>
                                    </Link>
                                    <Link variant="button" color={"inherit"} onClick={refreshPage}>
                                        <StyledMenuItem>
                                            {t('Logout')}
                                        </StyledMenuItem>
                                    </Link>

                                </div>

                                :

                                <div>
                                    <Link variant="button" to="/login" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem>
                                            {t('Login')}
                                        </StyledMenuItem>
                                    </Link>
                                    <Link variant="button" to="/register" color={"inherit"} component={NavLink}>
                                        <StyledMenuItem color={"inherit"}>
                                            {t('Register')}
                                        </StyledMenuItem>
                                    </Link>
                                </div>
                            }

                        </StyledMenu>
                    </div>

                    <nav>
                        <Link variant="button" to="/" className={classes.link} component={NavLink}>
                            <Button variant="outlined" color={"secondary"}>
                                <HomeIcon/>
                            </Button>
                        </Link>

                        <LanguageDropDown/>
                    </nav>
                </Toolbar>
            </AppBar>
        </>
    );
}
