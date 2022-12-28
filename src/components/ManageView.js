import React from 'react';
import { Container, Segment, Form, Grid, Button, Header, Icon } from 'semantic-ui-react';
import Link from './Link';

const ManageView = () => {
    return(
        <Container style={{marginTop: '1em'}}>
            <Grid divided='vertically' relaxed stackable>
                <Grid.Row columns={2}>
                    <Grid.Column width={6}>
                        <button className="ui blue animated fluid button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                            <Link href="/">
                                <div className="visible content" style={{color: '#FFF'}}>
                                    Go Back
                                </div>
                                <div className="hidden content" style={{color: '#FFF'}}>
                                    <i aria-hidden="true" className="long arrow alternate left large icon"></i>
                                </div>
                            </Link>
                        </button>
                    </Grid.Column>
                    <Grid.Column>
                        <Segment textAlign='center' style={{border: 'none'}}>
                            <Header as='h2'>
                                Submit Your Request Below
                            </Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            

            <Segment color='red' padded>
                <Grid divided='vertically' stackable>
                    <Grid.Row columns={2}>
                            <Grid.Column>
                                column
                            </Grid.Column>
                            <Grid.Column>
                                column
                            </Grid.Column>
                    </Grid.Row>
                </Grid>                   
            </Segment>
        </Container>
    );
}

export default ManageView;