import {Button, Container, Link, Paper} from "@material-ui/core";
import RegistrationFormik from "../../Formik/UserFormik/RegistrationFormik";
import "../../../styles.css"
import {NavLink} from "react-router-dom";
import React from "react";

const Register = () => (

    <>
        <Paper style={{marginTop : 0 , paddingTop: 40 , paddingBottom: 5}} variant="outlined">
            <Container>
                <h1>Register</h1>
            </Container>
        </Paper>

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