import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import * as Yup from "yup";
import {createComment} from "../../../api/CommentsApi";
import {useTranslation} from "react-i18next";
import {useHistory, useLocation} from "react-router-dom";

const validationSchema = Yup.object().shape({
    description: Yup.string()
        .min(3)
        .max(200)
        .required()
});

export default (props) => {

    const {t} = useTranslation('CommentForm');
    const history = useHistory();
    const location = useLocation();

    return (
        <Formik
            initialValues={
                {
                    description: '',
                }}
            onSubmit={(values) => {
                createComment(values, props.id).then(history.push(location))
            }}
            validationSchema={validationSchema}
        >
            {props => {
                return (

                    <Form style={{width: '100%'}}>
                        <div style={{width: '100%'}}>
                            <FormControl error={props.touched.description && !!props.errors.description} fullWidth
                                         variant={"outlined"} margin={"dense"}>
                                <InputLabel htmlFor='description'>{t('Description')}</InputLabel>
                                <Field id='description' name='description' label={t('Description')} {...props}
                                       as={OutlinedInput}/>
                                <ErrorMessage name='description' component={FormHelperText}/>
                            </FormControl>
                        </div>

                        <Button style={{marginTop: "5px"}} fullWidth
                                variant="outlined" color={"primary"}
                                type="submit">
                            {t('Comment')}
                        </Button>
                    </Form>

                )
            }}
        </Formik>
    )
}
