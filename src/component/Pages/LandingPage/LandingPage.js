import {Container, Divider, Paper} from "@material-ui/core";
import React from "react";


const LandingPage = () => (
    <>
        <Container style={{marginTop: 0, paddingTop: 40, paddingBottom: 5}}>
            <h1>Home</h1>
            <Divider variant="fullWidth" style={{margin: "20px 0"}}/>
        </Container>

        <Container>
            <Paper elevation={2} className="paddingAndMargin">
                <h1>Hello</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lobortis molestie leo in finibus.
                    Fusce sollicitudin ligula at dolor placerat bibendum. In commodo lacus tempus lorem congue, eget
                    commodo dolor facilisis. Donec non dolor tincidunt, dictum dolor in, sodales ex. Vivamus in tortor
                    lacus. Sed et laoreet nulla. In ut commodo est. Donec id viverra ipsum, eu tincidunt quam.

                    Nunc vel dui faucibus, aliquet leo eu, eleifend quam. Sed vestibulum, odio tincidunt feugiat cursus,
                    nisl nunc viverra mi, in consequat lorem libero ut orci. Nulla facilisi. Suspendisse eu iaculis
                    orci. Morbi dolor nisi, suscipit ut sapien eu, aliquam hendrerit nulla. Aliquam molestie in elit vel
                    faucibus. In interdum aliquet mauris, eget semper justo pulvinar ac. Nunc consectetur commodo
                    lacinia. Praesent dapibus vitae urna rhoncus bibendum. Nam molestie mauris ullamcorper ante lobortis
                    ultricies. Pellentesque augue tortor, rhoncus quis risus sed, porta pulvinar orci. Phasellus non
                    luctus felis. Fusce tristique ex augue, non finibus urna convallis a.

                    Phasellus sagittis consectetur diam ac eleifend. Vestibulum at gravida dui. Curabitur elementum
                    lacus eget felis volutpat pretium. Praesent cursus dictum ex, nec aliquam augue finibus non. Sed
                    luctus, justo et porta faucibus, tellus diam ullamcorper libero, at facilisis erat mi ac lectus.
                    Nunc placerat tellus ut diam blandit mattis. Nulla semper, risus eget rhoncus ullamcorper, velit
                    magna tincidunt felis, sit amet pretium lacus sapien et nunc.

                    Praesent vel purus in quam eleifend aliquam. Aenean in mauris tortor. Praesent porta, risus sit amet
                    tristique pulvinar, dolor quam vehicula ipsum, in venenatis nisl dui vitae sem. Aenean iaculis arcu
                    sed dolor pulvinar dignissim. Sed est mauris, tincidunt sit amet aliquet a, volutpat non felis.
                    Nulla quam erat, dignissim eu luctus quis, sodales in sem. Morbi efficitur, lorem vitae hendrerit
                    vestibulum, odio enim porta ex, ac mollis ex ipsum in mauris. Quisque placerat erat orci, a tempus
                    nunc mollis ut. Vestibulum eros enim, ultrices vitae lorem sed, bibendum condimentum nibh. Aenean
                    non varius ex.

                    Etiam sed faucibus sapien. Aenean rutrum, purus vitae sagittis iaculis, eros risus mattis purus, vel
                    finibus nibh enim vulputate mauris. Quisque facilisis tellus a justo tempor, sit amet luctus tortor
                    elementum. Quisque sit amet lectus nec velit pretium sodales sit amet eu massa. Maecenas nec risus
                    sed ipsum volutpat feugiat non in lacus. In hendrerit diam et malesuada fermentum. Orci varius
                    natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

                </p>
            </Paper>
        </Container>
    </>
)

export default LandingPage;