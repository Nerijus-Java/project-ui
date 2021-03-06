import {Backdrop, CircularProgress} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },

}));

export default () => {

    const classes = useStyles();

    return (
        <div>
            <Backdrop className={classes.backdrop} open={true}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
    )
}