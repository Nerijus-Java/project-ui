import {Container, Paper} from "@material-ui/core";
import React from "react";


const LandingPage = () => (
    <>
        <Paper style={{marginTop : 0 , paddingTop: 40 , paddingBottom: 5}} variant="outlined">
            <Container>
                <h1>Home</h1>
            </Container>
        </Paper>
        <Container>
            <Paper elevation={2} className="paddingAndMargin">
                <h1>Hello</h1>
            </Paper>
        </Container>
    </>
)

export default LandingPage;