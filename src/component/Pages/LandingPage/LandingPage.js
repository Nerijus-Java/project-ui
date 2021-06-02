import {Container, Paper} from "@material-ui/core";


const LandingPage = () => (
    <>
        <Container maxWidth >
            <Paper elevation={2} className="topPaddingAndMargin">
                <h1>Home</h1>
            </Paper>
        </Container>
        <Container>
            <Paper elevation={2} className="paddingAndMargin">
                <h1>Hello</h1>
            </Paper>
        </Container>
    </>
)

export default LandingPage;