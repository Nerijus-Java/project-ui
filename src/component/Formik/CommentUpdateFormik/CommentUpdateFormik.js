import {
    Backdrop,
    CircularProgress,
    Container,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Paper
} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import * as Yup from "yup";
import {fetchCommentByID, updateComment} from "../../../api/CommentsApi";
import {useHistory, useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object().shape({
    description: Yup.string()
        .min(3)
        .max(200)
        .required()
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default () => {

    let {id} = useParams();
    const history = useHistory()
    const [comment, setComment] = useState();
    const classes = useStyles();
    const {t} = useTranslation('CommentForm');

    useEffect(() => {
        fetchCommentByID(id).then(({data}) => {
            setComment(data)
        })
    }, [])

    return (

        <>
            {
                comment?.description ?
                    <Container style={{marginTop: "11%"}}>
                        <Paper style={{padding: 15}}>
                            <Formik
                                initialValues={
                                    {
                                        id,
                                        description: comment.description,
                                    }}
                                onSubmit={(values) => {
                                    updateComment(values).then(history.goBack())
                                }}
                                validationSchema={validationSchema}
                            >
                                {props => {
                                    return (

                                        <Form style={{width: '100%'}}>
                                            <div style={{width: '100%'}}>
                                                <FormControl
                                                    error={props.touched.description && !!props.errors.description}
                                                    fullWidth
                                                    variant={"outlined"} margin={"dense"}>
                                                    <InputLabel htmlFor='description'>{t('Description')}</InputLabel>
                                                    <Field id='description' name='description'
                                                           label={t('Description')} {...props}
                                                           as={OutlinedInput}/>
                                                    <ErrorMessage name='description' component={FormHelperText}/>
                                                </FormControl>
                                            </div>

                                            <Button style={{marginTop: "5px"}} fullWidth variant="outlined"
                                                    color={"primary"}
                                                    type="submit">{t('Update')}</Button>
                                        </Form>

                                    )
                                }}
                            </Formik>
                        </Paper>
                    </Container>
                    :
                    <Backdrop className={classes.backdrop} open={true}>
                        <CircularProgress color="inherit"/>
                    </Backdrop>
            }
        </>


    )
}


