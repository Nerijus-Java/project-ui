import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import React from "react";
import {useHistory, useLocation} from "react-router-dom";
import {createGroup} from "../../../api/GroupApi";
import * as Yup from "yup";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object().shape({
    groupName: Yup.string()
        .min(3)
        .max(50)
        .required(),
    groupBio: Yup.string()
        .min(3)
        .max(200)
        .required()
});

export default () => {
    const history = useHistory()
    const location = useLocation()
    const {t} = useTranslation('GroupForm');

    return (
        <Formik
            initialValues={
                {
                    groupName: '',
                    groupBio: ''
                }}
            onSubmit={(values) => {

                    createGroup(values)
                        .finally(() => {
                            history.push(location)
                        })
            }}
            validationSchema={validationSchema}
        >
            {props => {
                return (
                    <>
                        <Form style={{width: '100%'}}>
                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.groupName && !!props.errors.groupName} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='groupName'>{t('GroupName')}</InputLabel>
                                    <Field id='groupName' name='groupName' label={t('GroupName')} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='postTitle' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.groupBio && !!props.errors.groupBio}
                                             fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='groupBio'>{t('GroupBio')}</InputLabel>
                                    <Field id='groupBio' name='groupBio'
                                           label={t('GroupBio')} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='groupBio' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <Button style={{marginTop: "5px"}} fullWidth variant="outlined" color={"primary"}
                                    type="submit">{t('Create')}</Button>
                        </Form>
                    </>
                )
            }
            }
        </Formik>
    )
};