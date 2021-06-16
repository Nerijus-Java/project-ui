import {NavLink} from "react-router-dom";
import {Card, CardActionArea, CardContent, Link, Typography} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    }
}));

export default (props) => {

    const classes = useStyles();
    const {t} = useTranslation('Groups');

    return (
        <Link to={"/groups/" + props.group.id} component={NavLink}>
            <Card className={classes.root}
                  style={{display: 'inline-block', minWidth: 301, margin: "3px"}}>
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {props.group.groupName}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.group.groupBio}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {t('Posts')} {props.group.postAmount}
                        </Typography>

                        <Typography variant="body2" color="textSecondary" component="p">
                            {t('Followers')} {props.group.followerAmount}
                        </Typography>

                    </CardContent>
                </CardActionArea>
            </Card>
        </Link>
    )
}