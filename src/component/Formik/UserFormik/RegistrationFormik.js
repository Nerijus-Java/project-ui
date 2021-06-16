import {ErrorMessage, Field, Form, Formik} from "formik"
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import React from "react";
import {register} from "../../../api/UserApi";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .min(3)
        .max(50)
        .required(),
    surname: Yup.string()
        .min(3)
        .max(50)
        .required(),
    username: Yup.string()
        .min(3)
        .max(50)
        .required(),
    password: Yup.string()
        .min(3)
        .max(50)
        .required()
});

export default () => {
    const history = useHistory()
    const {t} = useTranslation('Register');

    return (
        <Formik
            initialValues={
                {
                    name: '',
                    surname: '',
                    username: '',
                    password: ''
                }}
            onSubmit={(values) => {
                register(values).finally(history.push("/login"))
            }}
            validationSchema={validationSchema}
        >
            {props => {
                return (
                    <>

                        <Form style={{marginTop: 20, marginBottom: 20}}>
                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.name && !!props.errors.name} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='name' color={"primary"}>{t('Name')}</InputLabel>
                                    <Field id='name' name='name' label={t('Name')} color={"primary"} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='name' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.surname && !!props.errors.surname} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='surname' color={"primary"}>{t('Surname')}</InputLabel>
                                    <Field id='surname' name='surname' label={t('Surname')} color={"primary"} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='surname' component={FormHelperText}/>

                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.username && !!props.errors.username} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='username' color={"primary"}>{t('Username')}</InputLabel>
                                    <Field id='username' name='username' label={t('Username')}
                                           color={"primary"} {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='username' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.password && !!props.errors.password} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='password' color={"primary"}>{t('Password')}</InputLabel>
                                    <Field id='password' name='password' label={t('Password')} type="password"
                                           color={"primary"} {...props} as={OutlinedInput}/>
                                    <ErrorMessage name='password' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <Button style={{marginTop: "5px"}} variant="outlined" fullWidth color={"primary"}
                                    type="submit">{t('Register')}</Button>
                        </Form>

                    </>
                )
            }
            }
        </Formik>
    )
}