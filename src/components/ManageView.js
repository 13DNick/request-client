import React, {useState, useEffect} from 'react';
import { Container, Segment, Grid, Header, Button, Icon } from 'semantic-ui-react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import Link from './Link';
import backendAPI from '../api/backendAPI';
import LoadingRequests from './LoadingRequests';
import SearchBar from './SearchBar';
import NoResults from './NoResults';

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

    function hover(e) {
        e.target.style.background = '#1edc4b';
        e.target.style.border = '#21ba45';  
    }

    function leave(e) {
        e.target.style.background = '#21ba45';
    }

    const [requests, setRequests] = useState([]);
    const url = 'http://localhost:8080/download/';

    const getRequests = async () => {
        const response = await backendAPI.get('/api/request');
        setRequests(response.data);
    }

    const sortRequestsByName = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.name.localeCompare(b.name));
        setRequests(temp);
    }

    const sortRequestsById = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.id > b.id);
        setRequests(temp);
    }

    const sortRequestsByEmployeeId = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.employeeId > b.employeeId);
        setRequests(temp);
    }

    const sortRequestsByEmail = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.email.localeCompare(b.email));
        setRequests(temp);
    }

    const sortRequestsByDepartment = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.department.localeCompare(b.department));
        setRequests(temp);
    }

    const sortRequestsByStatus = () => {
        let temp = [...requests];
        temp.sort((a, b) => a.employmentStatus.localeCompare(b.employmentStatus));
        setRequests(temp);
    }

    const search = (term, field) => {
        onRequestSearch(term, field);
    }

    const refresh = () => {
        window.location.reload();
    }

    //search for request
    const onRequestSearch = async (term, field) => {
        
        //do nothing if searchbar is empty
        if(term === ''){
            return;
        }
        
        const response = await backendAPI.get(`/api/request/search`,{
        params:{
            term: term,
            field: field 
        }
        });

        setRequests(response.data);        
    }

    const reverse = () => {
        const arr = [...requests].reverse();
        setRequests(arr);
    }

    useEffect(() => {
        getRequests();
    }, []);

    const table = () => {
        if(requests === null){
            return(
               <LoadingRequests /> 
            );
        } else if(requests === [] || requests.length === 0){
            return(
                <NoResults refresh={refresh}/>
            );
        } else {
            return(
                <Table style={tablestyle}>
                    <Thead style={theadstyle}>
                        <Tr style={{fontSize: '1.3em'}}>
                            <Th style={thstyle} onClick={() => sortRequestsById()} onMouseOver={hover} onMouseLeave={leave}>Request ID</Th>
                            <Th style={thstyle} onClick={() => sortRequestsByName()} onMouseOver={hover} onMouseLeave={leave}>Name</Th>
                            <Th style={thstyle} onClick={() => sortRequestsByEmail()} onMouseOver={hover} onMouseLeave={leave}>Email</Th>
                            <Th style={thstyle} onClick={() => sortRequestsByEmployeeId()} onMouseOver={hover} onMouseLeave={leave}>Employee ID</Th>
                            <Th style={thstyle} onClick={() => sortRequestsByDepartment()} onMouseOver={hover} onMouseLeave={leave}>Department</Th>
                            <Th style={thstyle} onClick={() => sortRequestsByStatus()} onMouseOver={hover} onMouseLeave={leave}>Employment Status</Th>
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
                            <Header as='h1'>
                                Manage Requests
                            </Header>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            
            <Grid divided='vertically' relaxed stackable>
                <Grid.Row columns={2}>
                    <Grid.Column width={12}>
                        <SearchBar callBack={(term, field) => search(term, field)}/>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        <Container textAlign='center'>
                            <Grid divided='vertically' stackable>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        <Button fluid icon color='yellow' size='big' onClick={() => reverse()}>
                                            <Icon name='exchange' />
                                        </Button>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Button fluid icon color='red' size='big' onClick={() => refresh()}>
                                            <Icon name='refresh' />
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            
                            
                        </Container>                      
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