import React, {useState, useRef} from 'react';
import { Container, Segment, Form, Grid, Button, Header, Icon } from 'semantic-ui-react';
import Link from './Link';
import backendAPI from '../api/backendAPI';
import { Request } from '../entity/Request';
import SelectedFile from './SelectedFile';
import EForm from './EForm';


const RequestView = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [employeeId, setEmployeeId] = useState('');
    const [department, setDepartment] = useState('');
    const [employmentStatus, setEmploymentStatus] = useState('currently employed');
    const [file, setFile] = useState(null);

    // Create a reference to the hidden file input element
    const hiddenFileInput = useRef(null);
    
    // Programatically click the hidden file input element
    // when the Button component is clicked
    const handleClick = event => {
        hiddenFileInput.current.click();
    }; 
   
    const onFileSubmit = (e) => {
        e.preventDefault();
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        
        if(hasEmptyFile()){
            alert('Please upload a supporting document before submitting your request!');
        } else if(hasEmptyFields()){
            alert('Please ensure all fields are filled!');
        } else {
            const request = Request(name, email, employeeId, department, employmentStatus);
            submitRequest(request);
        }
    }

    const submitRequest = async (request) => {
        const r = JSON.stringify(request);
        const data = {r, file};
        const response = await backendAPI.post('/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
        });
        props.callBack(response.data.id);
        reset();
        updateURL();
    }

    const reset = () => {
        setName(''); setEmail(''); setDepartment(''); setFile(null);
        setEmployeeId(''); setEmploymentStatus('currently employed');
    }

    const updateURL = () => {
        //change url
        window.history.pushState({}, '', '/submitted');
   
        //tell components url has updated 
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const hasEmptyFields = () => {
        if(name === '' || email === '' || employeeId === '' || department === "" || employmentStatus === ''){
            return true;
        }
        return false;
    }

    const hasEmptyFile = () => {
        if(file === null){
            return true;
        }
        return false;
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
                            <Header as='h1'>
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
                                <EForm onFormSubmit={onFormSubmit} 
                                       setName={setName} setEmail={setEmail}
                                       setEmployeeId={setEmployeeId}
                                       setDepartment={setDepartment}
                                       setEmploymentStatus={setEmploymentStatus}
                                       name={name} email={email} employeeId={employeeId}
                                       department={department} employmentStatus={employmentStatus} 
                                />
                            </Grid.Column>
                            <Grid.Column>
                                <Segment padded='very' textAlign='center'>
                                    <Header as='h2' icon>
                                        <Icon name='pdf file outline' size='huge' color='red'/>
                                        Please Attach Your Request Document
                                    </Header>
                                    <Form onSubmit={onFileSubmit}>
                                        <input type='file'
                                               ref={hiddenFileInput}
                                               onChange={(e) => {setFile(e.target.files[0])}}
                                               style={{display: 'none'}} 
                                        />
                                        <Button primary size='big' onClick={handleClick}>Add Document</Button>
                                        <SelectedFile file={file} />
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