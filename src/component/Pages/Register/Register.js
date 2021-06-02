import {Button, Container, Link, Paper} from "@material-ui/core";
import RegistrationFormik from "../../Formik/UserFormik/RegistrationFormik";
import "../../../styles.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Register = () => (

    <>
        <Container maxWidth >
            <Paper elevation={2} className="topPaddingAndMargin">
                <h1>Register</h1>
            </Paper>
        </Container>

        <Container maxWidth={"md"}>
            <Paper elevation={2} className="paddingAndMargin formikPaper">
                <RegistrationFormik/>
                <Link variant="button" to="/login" color="secondary" component={NavLink}>
                    already have an account?
                </Link>
            </Paper>
        </Container>
    </>
)

export default Register;