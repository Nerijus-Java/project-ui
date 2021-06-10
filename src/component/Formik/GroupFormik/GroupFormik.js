import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import {createGroup} from "../../../api/GroupApi";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
    groupName: Yup.string()
        .required(),
    groupBio: Yup.string()
        .required()
});

export default () => {
    const history = useHistory()
    const location = useLocation()

    return (
        <Formik
            initialValues={
                {
                    groupName: '',
                    groupBio: ''
                }}
            onSubmit={(values) => {
                useEffect(
                    createGroup(values)
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
                                <FormControl error={props.touched.groupName && !!props.errors.groupName} fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='groupName'>GroupName</InputLabel>
                                    <Field id='groupName' name='groupName' label='GroupName' {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='postTitle' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <div style={{width: '100%'}}>
                                <FormControl error={props.touched.groupBio && !!props.errors.groupBio}
                                             fullWidth
                                             variant={"outlined"} margin={"dense"}>
                                    <InputLabel htmlFor='groupBio'>GroupBio</InputLabel>
                                    <Field id='groupBio' name='groupBio'
                                           label='GroupBio' {...props}
                                           as={OutlinedInput}/>
                                    <ErrorMessage name='groupBio' component={FormHelperText}/>
                                </FormControl>
                            </div>

                            <Button style={{marginTop: "5px"}} fullWidth variant="outlined" color={"primary"}
                                    type="submit">Create</Button>
                        </Form>
                    </>
                )
            }
            }
        </Formik>
    )
};