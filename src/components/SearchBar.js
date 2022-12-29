import React from 'react';
import {Select, Button, Input} from 'semantic-ui-react';

class SearchBar extends React.Component{


    state = {
        text: '',
        field: 'name'
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.callBack(this.state.text, this.state.field);
    }

    options = [
        { key: 'id', text: 'ID', value: 'id' },
        { key: 'name', text: 'Name', value: 'name' },
        { key: 'email', text: 'Email', value: 'email' },
        { key: 'department', text: 'Department', value: 'department' },
        { key: 'status', text: 'Status', value: 'status' }
      ]
    
    render(){
        return(
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <Input type="text" placeholder="Search..." 
                            onChange={(e) => {this.setState({text: e.target.value})}} 
                            value={this.state.text} action   
                        >   
                            <input />
                            <Select compact options={this.options} defaultValue='name' 
                                    onChange={(e, data) => {this.setState({field: data.value})}}
                            />
                            <Button type='submit'>Search</Button>
                        </Input>
                    </div> 
                </form>   
            </div>
        );
    } 
}

export default SearchBar;