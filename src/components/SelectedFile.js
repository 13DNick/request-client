import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const SelectedFile = (props) => {
    if(props.file === null){
        return(
            <Container style={{paddingTop: '1.5em'}}>
                <Header as='h3' color='red'>
                    File: No file selected...
                </Header>
            </Container>
        );
    } else {
        return(
            <Container style={{paddingTop: '1.5em'}}>
                <Header as='h3' color='green'>
                    File: {props.file.name}
                </Header>
            </Container>
        );
    }
}

export default SelectedFile;