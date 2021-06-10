import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import {useEffect} from "react";
import {useHistory, useLocation} from "react-router-dom";
import * as Yup from "yup";
import {createComment} from "../../../api/CommentsApi";

const validationSchema = Yup.object().shape({
    description: Yup.string()
        .required()
});

export default (props) => {

    const history = useHistory()
    const location = useLocation()

    return (
        <Formik
            initialValues={
                {
                    description: '',
                }}
            onSubmit={(values) => {
                useEffect(
                    createComment(values, props.id).finally(() => {
                        history.push(location)
                    })
                )
            }}
            validationSchema={validationSchema}
        >
            {props => {
                return (

                    <Form style={{width: '100%'}}>
                        <div style={{width: '100%'}}>
                            <FormControl error={props.touched.description && !!props.errors.description} fullWidth
                                         variant={"outlined"} margin={"dense"}>
                                <InputLabel htmlFor='description'>Description</InputLabel>
                                <Field id='description' name='description' label='description' {...props}
                                       as={OutlinedInput}/>
                                <ErrorMessage name='description' component={FormHelperText}/>
                            </FormControl>
                        </div>

                        <Button style={{marginTop: "5px"}} fullWidth variant="outlined" color={"primary"}
                                type="submit">Comment</Button>
                    </Form>

                )
            }}
        </Formik>
    )
};