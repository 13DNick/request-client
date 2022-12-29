import React, {useState, useEffect} from 'react';
import { Container, Segment, Form, Grid, Button, Header, Icon } from 'semantic-ui-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Link from './Link';
import backendAPI from '../api/backendAPI';

const ManageView = () => {
    
    const thstyle = { 
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


    useEffect(() => {
        getRequests();
    }, []);

    const table = () => {
        if(requests === [] || requests === null || requests.length === 0){
            return<div>no requests</div>
        } else {
            return(
                <Table style={tablestyle}>
                    <Thead style={theadstyle}>
                        <Tr style={{fontSize: '1.3em'}}>
                            <Th style={thstyle}>Request ID</Th>
                            <Th style={thstyle}>Name</Th>
                            <Th style={thstyle}>Email</Th>
                            <Th style={thstyle}>Employee ID</Th>
                            <Th style={thstyle}>Department</Th>
                            <Th style={thstyle}>Employment Status</Th>
                            <Th style={thstyle}>Document</Th>
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