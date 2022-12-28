import React, { useState, useEffect } from 'react';
import { Checkbox, Form, Container } from 'semantic-ui-react';

const EForm = (props) => {
    
    const [validName, setValidName] = useState(false);
    const [nameChanged, setNameChanged] = useState(false);
    const [validEmail, setValidEmail] = useState(false);
    const [emailChanged, setEmailChanged] = useState(false);
    const [validEmployeeId, setValidEmployeeId] = useState(false);
    const [employeeIdChanged, setEmployeeIdChanged] = useState(false);
    const [validDepartment, setValidDepartment] = useState(false);
    const [departmentChanged, setDepartmentChanged] = useState(false);

    useEffect(() => {
        const validateName = () => {
            const validNamePattern = new RegExp(/^[a-zA-Z\s]+$/);
            
            if(props.name.length > 2 && validNamePattern.test(props.name)) {
                setValidName(true);
            } else {
                setValidName(false);
            }         
        }
    
        const validateEmail = () => {
            const validEmailPattern = new RegExp(
                // eslint-disable-next-line no-useless-escape
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            );
            
            if(validEmailPattern.test(props.email)){
                setValidEmail(true);
            } else {
                setValidEmail(false);
            }
        }

        const validateEmployeeId = () => {
            const validIdPattern = new RegExp(/^[0-9]+$/);
            
            if(props.employeeId.length > 0 && validIdPattern.test(props.employeeId)) {
                setValidEmployeeId(true);
            } else {
                setValidEmployeeId(false);
            }         
        }

        const validateDepartment = () => {
            const validDepartmentPattern = new RegExp(/^[a-zA-Z\s]+$/);
            
            if(props.department.length > 1 && validDepartmentPattern.test(props.department)) {
                setValidDepartment(true);
            } else {
                setValidDepartment(false);
            }         
        }
        
        validateName();
        validateEmail();
        validateEmployeeId();
        validateDepartment();
    }, [props.name, props.email, props.employeeId, props.department, props.employmentStatus]);

    const handleNameError = () => {
        if(!nameChanged){
            return false;
        } else {
            if(validName){
                return false;
            } 
            return {
                content:"Please enter a valid name.",
                pointing: "below"
            }
        }
    }

    const handleEmailError = () => {
        if(!emailChanged){
            return false;
        } else {
            if(validEmail){
                return false;
            } 
            return {
                content:"Please enter a valid email address.",
                pointing: "below"
            }
        }
    }

    const handleEmployeeIdError = () => {
        if(!employeeIdChanged){
            return false;
        } else {
            if(validEmployeeId){
                return false;
            } 
            return {
                content:"Please enter a valid employee ID.",
                pointing: "below"
            }
        }
    }    

    const handleDepartmentError = () => {
        if(!departmentChanged){
            return false;
        } else {
            if(validDepartment){
                return false;
            } 
            return {
                content:"Please enter a valid department.",
                pointing: "below"
            }
        }
    }

    const handleNameChange = (e) => {
        props.setName(e.target.value);
        setNameChanged(true);
    }

    const handleEmailChange = (e) => {
        props.setEmail(e.target.value);
        setEmailChanged(true);
    }

    const handleEmployeeIdChange = (e) => {
        props.setEmployeeId(e.target.value);
        setEmployeeIdChanged(true);
    }

    const handleDepartmentChange = (e) => {
        props.setDepartment(e.target.value);
        setDepartmentChanged(true);
    }
    
    const handleEmploymentStatusChange = (e, data) => {
        props.setEmploymentStatus(data.value);
    }

    return(
        <form onSubmit={props.onFormSubmit} className="ui form">
            <div className="ui card centered fluid">
                <div className="content">
                    <div className="header">Enter Personal Information</div>
                </div>
                <div className="content">
                    <Form.Input label="Name" 
                                placeholder="John Doe"
                                onChange={(e) => {handleNameChange(e)}}
                                value={props.name} 
                                error={handleNameError()}       
                    /> 
                    
                    <Form.Input label="Email Address" 
                                placeholder="doe@gmail.com"
                                onChange={(e) => {handleEmailChange(e)}}
                                value={props.email} 
                                error={handleEmailError()} 
                    /> 
                    
                </div>
                
                <div className="content">
                    <Form.Input label="Employee ID"
                                type='number' 
                                placeholder="000123"
                                onChange={(e) => {handleEmployeeIdChange(e)}}
                                value={props.employeeId} 
                                error={handleEmployeeIdError()}
                    /> 
                    <Form.Input label="Department" 
                                placeholder="IT"
                                onChange={(e) => {handleDepartmentChange(e)}}
                                value={props.department} 
                                error={handleDepartmentError()} 
                    /> 
                    <Container style={{marginBottom: '0.5em'}}>
                        <label style={{fontWeight: 'bold'}}>Employment Status</label>
                    </Container>
                    
                    <Form.Group>
                        <Form.Field>
                            <Checkbox radio label='currently employed'
                                    name='checkboxRadioGroup'
                                    value='currently employed'
                                    checked={props.employmentStatus === 'currently employed'}
                                    onChange={(e, data) => handleEmploymentStatusChange(e, data)} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox radio label='previously employed'
                                    name='checkboxRadioGroup'
                                    value='previously employed'
                                    checked={props.employmentStatus === 'previously employed'}
                                    onChange={(e, data) => handleEmploymentStatusChange(e, data)} 
                            />
                        </Form.Field>
                        <Form.Field>
                            <Checkbox radio label='applicant'
                                    name='checkboxRadioGroup'
                                    value='applicant'
                                    checked={props.employmentStatus === 'applicant'}
                                    onChange={(e, data) => handleEmploymentStatusChange(e, data)}
                            />
                        </Form.Field>
                    </Form.Group> 
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