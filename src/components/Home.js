import React from 'react';
import {Divider, Segment, Container, Header, Icon} from 'semantic-ui-react'
import Link from './Link';

const Home = () => {
    return(
        <div>
            <Container>
                <Segment color='blue' padded textAlign='center' style={{marginTop: "2em"}}>
                <Header as='h2' color='blue' icon>
                    <Icon name='clipboard' color='brown'/>
                    <Header.Content>
                    Welcome to the Request Manager
                    <Header.Subheader style={{fontWeight: 'bold'}}>
                        Would you like to...
                    </Header.Subheader>
                    </Header.Content>
                </Header>
                </Segment>
                
                <Segment textAlign='center' padded='very' color='blue'>
                
                <button className="ui teal animated button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                    <Link href="/new_request">
                        <div className="visible content" style={{color: '#FFF'}}>
                            Make A New Request
                        </div>
                        <div className="hidden content" style={{color: '#FFF'}}>
                            <i aria-hidden="true" className="plus icon"></i>
                        </div>
                    </Link>
                </button>
                
                <Divider horizontal>Or</Divider>

                <button className="ui teal animated button" style={{marginTop: '0.5em', fontSize:'1.2em'}}>
                    <Link href="/manage">
                        <div className="visible content" style={{color: '#FFF'}}>
                            Manage Requests
                        </div>
                        <div className="hidden content" style={{color: '#FFF'}}>
                            <i aria-hidden="true" className="settings icon"></i>
                        </div>
                    </Link>
                </button>

                </Segment>
            </Container> 
        </div>
    );
}

export default Home;