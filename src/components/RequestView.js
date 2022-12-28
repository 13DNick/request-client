import React, {useState} from 'react';
import { Container, Segment, Form, Grid, Button, Header, Icon } from 'semantic-ui-react';
import Link from './Link';
import backendAPI from '../api/backendAPI';
import { Request } from '../entity/Request';


const RequestView = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [department, setDepartment] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('');
    const [resp, setResp] = useState('');
    const [file, setFile] = useState(null);

    const onFileSubmit = (e) => {
        e.preventDefault();
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        const request = Request(name, email, employeeId, department, employmentStatus);
        submitRequest(request);
    }

    const submitRequest = async (request) => {
        const r = JSON.stringify(request);
        const data = {r, file};
        const response = await backendAPI.post('/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
        });
        setResp(response.data, console.log(resp.id));
    }
    
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
                                <form onSubmit={onFormSubmit} className="ui form">
                                    <div className="ui card centered">
                                        <div className="content">
                                            <div className="header">Enter Personal Information</div>
                                        </div>
                                        <div className="content">
                                            <Form.Input label="Name" 
                                                        placeholder="John Doe"
                                                        onChange={(e) => {setName(e.target.value)}}       
                                            /> 
                                            
                                            <Form.Input label="Email Address" 
                                                        placeholder="doe@gmail.com"
                                                        onChange={(e) => {setEmail(e.target.value)}} 
                                            /> 
                                            
                                        </div>
                                        
                                        <div className="content">
                                            <Form.Input label="Employee ID" 
                                                        placeholder="000123"
                                                        onChange={(e) => {setEmployeeId(e.target.value)}} 
                                            /> 
                                            <Form.Input label="Department" 
                                                        placeholder="IT"
                                                        onChange={(e) => {setDepartment(e.target.value)}} 
                                            /> 
                                            <Form.Input label="Employment Status" 
                                                        placeholder="active"
                                                        onChange={(e) => {setEmploymentStatus(e.target.value)}} 
                                            /> 
                                        </div>

                                        <div className="content">
                                            <button className="ui green fluid button" style={{fontSize:'1em'}}>
                                                Submit Request
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded='very' textAlign='center'>
                                    <Header as='h2' icon>
                                        <Icon name='pdf file outline' size='huge' color='red'/>
                                        Please Attach Your Request Document
                                    </Header>
                                    <Form onSubmit={onFileSubmit}>
                                        <Form.Input type='file'
                                                    onChange={(e) => {setFile(e.target.files[0])}} 
                                        />
                                        <Button primary size='big'>Add Document</Button>
                                    </Form>
                                </Segment>
                            </Grid.Column>
                    </Grid.Row>
                </Grid>                   
            </Segment>
        </Container>
    );
}

export default RequestView;