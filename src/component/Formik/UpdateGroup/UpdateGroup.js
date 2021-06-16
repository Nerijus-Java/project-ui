import {FormControl, FormHelperText, InputLabel, OutlinedInput, Paper} from "@material-ui/core";
import {ErrorMessage, Field, Form, Formik} from "formik";
import Button from "@material-ui/core/Button";
import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import {fetchGroupById, updateGroup} from "../../../api/GroupApi";

import * as Yup from "yup";
import Container from "@material-ui/core/Container";
import {useTranslation} from "react-i18next";
import BackDrop from "../../BackDrop/BackDrop";

const validationSchema = Yup.object().shape({
    groupName: Yup.string()
        .min(3)
        .max(50)
        .required(),
    groupBio: Yup.string()
        .min(3)
        .max(200)
        .required()
});


export default () => {
    let {id} = useParams();
    const [group, setGroup] = useState()
    const history = useHistory()
    const {t} = useTranslation('GroupForm');

    useEffect(() => {
        fetchGroupById(id).then(({data}) => {
            setGroup(data)
        })
    }, [])

    return (
        <>
            {
                group?.groupName ?
                    <Container style={{marginTop: "11%"}}>
                        <Paper style={{padding: 15}}>
                            <Formik
                                initialValues={
                                    {
                                        id,
                                        groupName: group.groupName,
                                        groupBio: group.groupBio
                                    }}
                                onSubmit={(values) => {

                                    updateGroup(values)
                                        .finally(() => {
                                            history.push("/groups/" + id)
                                        })
                                }}
                                validationSchema={validationSchema}
                            >
                                {props => {
                                    return (

                                        <>

                                            <Form style={{width: '100%'}}>

                                                <div style={{width: '100%'}}>
                                                    <FormControl
                                                        error={props.touched.groupName && !!props.errors.groupName}
                                                        fullWidth
                                                        variant={"outlined"} margin={"dense"}>
                                                        <InputLabel htmlFor='groupName'>{t('GroupName')}</InputLabel>
                                                        <Field id='groupName' name='groupName'
                                                               label={t('GroupName')} {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='postTitle' component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <div style={{width: '100%'}}>
                                                    <FormControl
                                                        error={props.touched.groupBio && !!props.errors.groupBio}
                                                        fullWidth
                                                        variant={"outlined"} margin={"dense"}>
                                                        <InputLabel htmlFor='groupBio'>{t('GroupBio')}</InputLabel>
                                                        <Field id='groupBio' name='groupBio'
                                                               label={t('GroupBio')} {...props}
                                                               as={OutlinedInput}/>
                                                        <ErrorMessage name='groupBio' component={FormHelperText}/>
                                                    </FormControl>
                                                </div>

                                                <Button style={{marginTop: "5px"}} fullWidth variant="outlined"
                                                        color={"primary"}
                                                        type="submit">{t('Update')}</Button>
                                            </Form>

                                        </>
                                    )
                                }
                                }
                            </Formik>
                        </Paper>
                    </Container>
                    :
                    <BackDrop/>
            }
        </>
    )
};



