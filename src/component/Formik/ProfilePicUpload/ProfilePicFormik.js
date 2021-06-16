import * as Yup from "yup";
import {Form, Formik} from "formik";
import {Button, Container, Input, Paper} from "@material-ui/core";
import {postPic} from "../../../api/ProfilePicApi";
import React from "react";
import {useTranslation} from "react-i18next";

const validationSchema = Yup.object().shape({
    file: Yup.mixed()
        .required()
});

export default (props) => {

    const {t} = useTranslation('FileForm');

    return (
        <>
            <Container style={{marginTop: 20}}>
                <Paper style={{padding: 20}}>

                    <h1>Profile picture</h1>
                    <Formik initialValues={{file: ""}}
                            onSubmit={(values) => {
                                postPic(values).finally(props.handleFileOnSubmit())
                            }}
                    >
                        {(props) => (
                            <Form>
                                <Input type={"file"}
                                       name={"file"}
                                       accept="image/png, image/jpeg"
                                       onChange={(event => props.setFieldValue("file", event.target.files[0]))}
                                />
                                <Button type={"submit"}>{t('Upload')}</Button>
                            </Form>
                        )}
                    </Formik>
                </Paper>
            </Container>

        </>
    );
}