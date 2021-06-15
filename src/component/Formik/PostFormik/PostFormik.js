import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {useEffect} from "react";
import {createPost} from "../../../api/PostApi";
import {useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object().shape({
    postTitle: Yup.string()
        .required(),
    postDescription: Yup.string()
        .required()
});

export default (props) => {
    const history = useHistory()
    const location = useLocation()
    const {t} = useTranslation('PostForm');

    return (
        <Formik
            initialValues={
                {
                    postTitle: '',
                    postDescription: ''
                }}
            onSubmit={(values) => {
                useEffect(
                    createPost(values, props.id)
                        .finally(() => {
                            history.push(location)
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
                                <FormControl error={props.touched.postTitle && !!props.errors.postTitle} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='postTitle'>{t('Title')}</InputLabel>
                                    <Field id='postTitle' name='postTitle' label={t('Title')} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='postTitle' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.postDescription && !!props.errors.postDescription}
                                             fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='postDescription'>{t('Description')}</InputLabel>
                                    <Field id='postDescription' name='postDescription'
                                           label={t('Description')} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='postDescription' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <Button style={{marginTop: "5px"}} fullWidth variant="outlined" color={"inherit"}
                                    type="submit">{t('Create')}</Button>
                        </Form>
                    </>
                )
            }
            }
        </Formik>
    )
};