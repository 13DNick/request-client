import React, {useState, useEffect} from 'react';
import { Container, Segment, Grid, Header } from 'semantic-ui-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Link from './Link';
import backendAPI from '../api/backendAPI';
import LoadingRequests from './LoadingRequests';

const ManageView = () => {
    
    const thstyle = { 
        borderBottom: '2px solid #ddd',
        padding: '12px 15px',
        cursor: 'pointer'
    }

    const ths = { 
        borderBottom: '2px solid #ddd',
        padding: '12px 15px'
    }

    const tdstyle = {
        borderBottom: '1.7px solid #ddd',
        padding: '10px 12px'
    }

    const tablestyle = {
        borderCollapse: 'collapse',
        margin: '25px 0',
        fontSize: '1em',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.15)'
    }

    const theadstyle = {
        backgroundColor: '#21ba45',
        color: '#ffffff',
        textAlign: 'left'
    }

    const [requests, setRequests] = useState([]);
    const url = 'http://localhost:8080/download/';

    const getRequests = async () => {
        const response = await backendAPI.get('/api/request');
        setRequests(response.data);
    }

    const getRequestsByName = async () => {
        const response = await backendAPI.get('/api/request/name');
        setRequests(response.data);
    }

    const getRequestsByEmployeeId = async () => {
        const response = await backendAPI.get('/api/request/id');
        setRequests(response.data);
    }

    const getRequestsByEmail = async () => {
        const response = await backendAPI.get('/api/request/email');
        setRequests(response.data);
    }

    const getRequestsByDepartment = async () => {
        const response = await backendAPI.get('/api/request/department');
        setRequests(response.data);
    }

    const getRequestsByStatus = async () => {
        const response = await backendAPI.get('/api/request/status');
        setRequests(response.data);
    }

    function hover(e) {
        e.target.style.background = '#1edc4b';
        e.target.style.border = '#21ba45';  
    }

    function leave(e) {
        e.target.style.background = '#21ba45';
    }

    useEffect(() => {
        getRequests();
    }, []);

    const table = () => {
        if(requests === [] || requests === null || requests.length === 0){
            return(
               <LoadingRequests /> 
            );
        } else {
            return(
                <Table style={tablestyle}>
                    <Thead style={theadstyle}>
                        <Tr style={{fontSize: '1.3em'}}>
                            <Th style={thstyle} onClick={() => getRequests()} onMouseOver={hover} onMouseLeave={leave}>Request ID</Th>
                            <Th style={thstyle} onClick={() => getRequestsByName()} onMouseOver={hover} onMouseLeave={leave}>Name</Th>
                            <Th style={thstyle} onClick={() => getRequestsByEmail()} onMouseOver={hover} onMouseLeave={leave}>Email</Th>
                            <Th style={thstyle} onClick={() => getRequestsByEmployeeId()} onMouseOver={hover} onMouseLeave={leave}>Employee ID</Th>
                            <Th style={thstyle} onClick={() => getRequestsByDepartment()} onMouseOver={hover} onMouseLeave={leave}>Department</Th>
                            <Th style={thstyle} onClick={() => getRequestsByStatus()} onMouseOver={hover} onMouseLeave={leave}>Employment Status</Th>
                            <Th style={ths}>Document</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {renderedRequests}
                    </Tbody>
                </Table >
            );
        }
    }

    const renderedRequests = requests.map(request => {
        return(
          <Tr key={request.id} style={{fontSize: '1.2em'}}>
            <Td style={tdstyle}>{request.id}</Td>
            <Td style={tdstyle}>{request.name}</Td>
            <Td style={tdstyle}>{request.email}</Td>
            <Td style={tdstyle}>{request.employeeId}</Td>
            <Td style={tdstyle}>{request.department}</Td>
            <Td style={tdstyle}>{request.employmentStatus}</Td>
            <Td style={tdstyle}>{<a href={url + `${request.document.id}`}>{request.document.name}</a>}</Td>
          </Tr>      
        );
    });

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
                                Manage Requests
                            </Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            

            <Segment color='red' padded>
                {table()}              
            </Segment>
        </Container>
    );
}

export default ManageView;