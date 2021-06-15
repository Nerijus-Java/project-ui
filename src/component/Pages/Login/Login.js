import {useDispatch} from "react-redux";
import {login} from "../../../api/UserApi"
import {setLogin} from "../../../store/slices/UserSlice";
import Button from "@material-ui/core/Button";
import {
    Container,
    Divider,
    FormControl,
    FormHelperText,
    InputLabel,
    Link,
    OutlinedInput,
    Paper
} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import React from "react";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Login = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const {t} = useTranslation('Login');

    const postLogin = (loginData) => {
        login(loginData).then(({data: loggedInUser, headers: {authorization}}) => {
                dispatch(
                    setLogin({
                        loggedInUser,
                        jwt: authorization
                    }))
            const from = location.state?.from

            history.push(from || '/')
            }
        )
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .required(),
        password: Yup.string()
            .required()
    });

    return (
        <Formik
            initialValues={
                {
                    username: '',
                    password: ''
                }}
            onSubmit={postLogin}
            validationSchema={validationSchema}
        >
            {props => {
                return (
                    <>
                        <Container style={{marginTop: 0, paddingTop: 40, paddingBottom: 5}}>
                            <h1>{t('Login')}</h1>
                            <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
                        </Container>

                        <Container maxWidth={"md"}>
                            <Paper elevation={2} className="paddingAndMargin formikPaper">
                                <Form style={{marginTop: 20 , marginBottom:20}} >
                                    <div style={{width: '100%'}}>
                                        <FormControl error={props.touched.username && !!props.errors.username} fullWidth
                                                     variant={"outlined"} margin={"dense"}>
                                            <InputLabel htmlFor='username' color={"primary"}>{t('Username')}</InputLabel>
                                            <Field id='username' name='username' label={t('Username')}
                                                   color={"primary"} {...props} as={OutlinedInput}/>
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
                                            type="submit">{t('Login')}</Button>
                                </Form>

                                <Link variant="button" to="/register" color="secondary" component={NavLink}>
                                    {t('DontHaveAcc')}
                                </Link>
                            </Paper>
                        </Container>
                    </>
                )
            }}
        </Formik>
    )
}


export default Login;