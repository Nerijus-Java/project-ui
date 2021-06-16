import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FormControl, FormHelperText, InputLabel, OutlinedInput, Paper} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {fetchPostById, updatePosts} from "../../../api/PostApi";
import {useHistory, useParams} from "react-router-dom";
import Container from "@material-ui/core/Container";
import {useTranslation} from "react-i18next";
import BackDrop from "../../BackDrop/BackDrop";

const validationSchema = Yup.object().shape({
    postTitle: Yup.string()
        .min(3)
        .max(50)
        .required(),
    postDescription: Yup.string()
        .min(3)
        .max(200)
        .required()
});


export default () => {
    const history = useHistory()
    let {id} = useParams();
    const [updatingPost, setUpdatingPost] = useState();
    const {t} = useTranslation('PostForm');

    useEffect(() => {
        fetchPostById(id).then(({data}) => {
            setUpdatingPost(data)
        })
    }, [])

    return (
        <>

            {
                updatingPost?.postTitle ?
                    <Container style={{marginTop: "11%"}}>
                        <Paper style={{padding: 15}}>
                            <Formik
                                initialValues={
                                    {
                                        id,
                                        postTitle: updatingPost.postTitle,
                                        postDescription: updatingPost.postDescription
                                    }}
                                onSubmit={(values) => {
                                    updatePosts(values)
                                        .finally(() => {
                                            history.goBack();
                                        })
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
                                                        <InputLabel htmlFor='postTitle'>{t('Title')}</InputLabel>
                                                        <Field id='postTitle' name='postTitle'
                                                               label={t('Title')} {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='postTitle' component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <div style={{width: '100%'}}>
                                                    <FormControl
                                                        error={props.touched.postDescription && !!props.errors.postDescription}
                                                        fullWidth
                                                        variant={"outlined"} margin={"dense"}>
                                                        <InputLabel
                                                            htmlFor='postDescription'>{t('Description')}</InputLabel>
                                                        <Field id='postDescription' name='postDescription'
                                                               label={t('Description')} {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='postDescription'
                                                                      component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <Button style={{marginTop: "5px"}} fullWidth variant="outlined"
                                                        color={"inherit"}
                                                        type="submit">{t('Update')}</Button>
                                            </Form>
                                        </>
                                    )
                                }}
                            </Formik>
                        </Paper>
                    </Container>
                    :
                    <BackDrop/>
            }
        </>
    )
};


