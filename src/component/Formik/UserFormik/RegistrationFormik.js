import {ErrorMessage, Field, Form, Formik} from "formik"
import {Container, FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import React from "react";


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required(),
    surname: Yup.string()
        .required()
});

export default () => (
    <Formik
        initialValues={
            {
                name: '',
                surname: ''
            }}
        onSubmit={(values, helpers) => {

        }}
        validationSchema={validationSchema}
    >
        {props => {
            return (
                <>

                    <Form style={{marginTop: 20 , marginBottom:20}} >
                        <div style={{width: '100%'}}>
                            <FormControl error={props.touched.name && !!props.errors.name} fullWidth
                                         variant={"outlined"} margin={"dense"}>
                                <InputLabel htmlFor='name' color={"primary"} >Username</InputLabel>
                                <Field id='name' name='name' label='username' color={"primary"} {...props} as={OutlinedInput}/>
                                <ErrorMessage name='name' component={FormHelperText}/>
                            </FormControl>
                        </div>

                        <div style={{width: '100%'}}>
                            <FormControl error={props.touched.surname && !!props.errors.surname} fullWidth
                                         variant={"outlined"} margin={"dense"} >
                                <InputLabel htmlFor='surname' color={"primary"} >Surname</InputLabel>
                                <Field id='surname' name='surname' label='surname' color={"primary"} {...props} as={OutlinedInput}/>
                                <ErrorMessage name='surname' component={FormHelperText}/>

                            </FormControl>
                        </div>

                        <Button style={{marginTop: "5px"}} variant="outlined" fullWidth color={"primary"} type="submit">Register</Button>
                    </Form>

                </>
            )
        }
        }
    </Formik>
)