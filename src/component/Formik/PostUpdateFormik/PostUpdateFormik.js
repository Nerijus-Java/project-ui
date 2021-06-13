import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {
    Backdrop,
    CircularProgress,
    FormControl,
    FormHelperText,
    InputLabel,
    OutlinedInput,
    Paper
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {fetchPostById, updatePosts} from "../../../api/PostApi";
import {useHistory, useParams} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const validationSchema = Yup.object().shape({
    postTitle: Yup.string()
        .required(),
    postDescription: Yup.string()
        .required()
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default () => {
    const history = useHistory()
    let {id} = useParams();
    const [updatingPost, setUpdatingPost] = useState();
    const classes = useStyles();

    useEffect(() => {
        fetchPostById(id).then(({data}) => {
            setUpdatingPost(data)
        })
    }, [])

    return (
        <>

            {
                updatingPost?.postTitle ?
                    <Container style={{marginTop:"11%"}}>
                        <Paper style={{padding: 15}}>
                            <Formik
                                initialValues={
                                    {
                                        id,
                                        postTitle: updatingPost.postTitle,
                                        postDescription: updatingPost.postDescription
                                    }}
                                onSubmit={(values) => {
                                    useEffect(
                                        updatePosts(values)
                                            .finally(() => {
                                                history.goBack();
                                            })
                                    )
                                }}
                                validationSchema={validationSchema}
                            >
                                {props => {
                                    return (
                                        <>
                                            <Form style={{width: '100%'}}>
                                                <div style={{width: '100%'}}>
                                                    <FormControl
                                                        error={props.touched.postTitle && !!props.errors.postTitle}
                                                        fullWidth
                                                        variant={"outlined"} margin={"dense"}>
                                                        <InputLabel htmlFor='postTitle'>Title</InputLabel>
                                                        <Field id='postTitle' name='postTitle'
                                                               label='postTitle' {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='postTitle' component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <div style={{width: '100%'}}>
                                                    <FormControl
                                                        error={props.touched.postDescription && !!props.errors.postDescription}
                                                        fullWidth
                                                        variant={"outlined"} margin={"dense"}>
                                                        <InputLabel htmlFor='postDescription'>Description</InputLabel>
                                                        <Field id='postDescription' name='postDescription'
                                                               label='postDescription' {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='postDescription'
                                                                      component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <Button style={{marginTop: "5px"}} fullWidth variant="outlined"
                                                        color={"inherit"}
                                                        type="submit">Update</Button>
                                            </Form>
                                        </>
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
};


