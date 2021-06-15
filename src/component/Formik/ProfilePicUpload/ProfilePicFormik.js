import * as Yup from "yup";
import {useHistory, useLocation} from "react-router-dom";
import {Form, Formik} from "formik";
import {Button, Container, Input} from "@material-ui/core";
import {postPic} from "../../../api/ProfilePicApi";

const validationSchema = Yup.object().shape({
    file: Yup.mixed()
        .required()
});

export default (props) => {
    const history = useHistory()
    const location = useLocation()


    return (
        <>
            <Container>

                <Formik initialValues={{file: ""}}
                        onSubmit={(values) => {
                            postPic(values)
                        }}
                >
                    {(props) => (
                        <Form>
                            <Input type={"file"}
                                   name={"file"}
                                   accept="image/png, image/jpeg"
                                   onChange={(event => props.setFieldValue("file", event.target.files[0]))}
                            />
                            <Button type={"submit"}>Submit</Button>
                        </Form>
                    )}
                </Formik>
            </Container>

        </>
    );
}