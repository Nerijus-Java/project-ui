import {Container, Divider, Link, Paper} from "@material-ui/core";
import RegistrationFormik from "../../Formik/UserFormik/RegistrationFormik";
import "../../../styles.css"
import {NavLink} from "react-router-dom";
import React from "react";
import {useTranslation} from "react-i18next";

const Register = () => {

    const {t} = useTranslation('Register');

    return (
        <>
            <Container style={{marginTop: 0, paddingTop: 40, paddingBottom: 5}}>
                <h1>{t('Register')}</h1>
                <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
            </Container>

            <Container maxWidth={"md"}>
                <Paper elevation={2} className="paddingAndMargin formikPaper">
                    <RegistrationFormik/>
                    <Link variant="button" to="/login" color="secondary" component={NavLink}>
                        {t('AlreadyHaveAcc')}
                    </Link>
                </Paper>
            </Container>
        </>
    )
}
export default Register;