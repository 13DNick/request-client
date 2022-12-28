import React from 'react';
import {Form} from 'semantic-ui-react';

const EForm = (props) => {
    return(
        <form onSubmit={props.onFormSubmit} className="ui form">
            <div className="ui card centered">
                <div className="content">
                    <div className="header">Enter Personal Information</div>
                </div>
                <div className="content">
                    <Form.Input label="Name" 
                                placeholder="John Doe"
                                onChange={(e) => {props.setName(e.target.value)}}       
                    /> 
                    
                    <Form.Input label="Email Address" 
                                placeholder="doe@gmail.com"
                                onChange={(e) => {props.setEmail(e.target.value)}} 
                    /> 
                    
                </div>
                
                <div className="content">
                    <Form.Input label="Employee ID" 
                                placeholder="000123"
                                onChange={(e) => {props.setEmployeeId(e.target.value)}} 
                    /> 
                    <Form.Input label="Department" 
                                placeholder="IT"
                                onChange={(e) => {props.setDepartment(e.target.value)}} 
                    /> 
                    <Form.Input label="Employment Status" 
                                placeholder="active"
                                onChange={(e) => {props.setEmploymentStatus(e.target.value)}} 
                    /> 
                </div>

                <div className="content">
                    <button className="ui green fluid button" style={{fontSize:'1em'}}>
                        Submit Request
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EForm;