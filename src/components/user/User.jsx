import React, {useState} from "react";
import './user.css'
import {Form, Button} from 'react-bootstrap';
import Select from 'react-select';

const User = ({lavel = 'New User'}) =>{

      const [firstName,setFirstName]        = useState('');
      const [lastName,setLastName]          = useState('');
      const [gender,setGender]              = useState('');
      const [dateOfBirth,setDateOfBirth]    = useState('');
      const [cityName,setCityName]          = useState('');
      const [phoneNumber,setPhoneNumber]    = useState('');
      const [emailAddress,setEmailAddress]  = useState('');

      const changeInput = (stateName, stateValue)=>{
        switch(stateName){
          case "firstName":
            setFirstName(stateValue);
            break;
          case "lastName":
            setLastName(stateValue);
            break;
          case "gender":
            setGender(stateValue);
              break;
          case "dateOfBirth":
            setDateOfBirth(stateValue);
              break;
          case "cityName":
            setCityName(stateValue);
              break;
          case "phoneNumber":
            setPhoneNumber(stateValue);
              break;
          case "emailAddress":
            setEmailAddress(stateValue);
              break;
            default:
              break;
            
        }
      }
      console.log(firstName,  lastName, gender, dateOfBirth, cityName, phoneNumber, emailAddress);
    const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Others', label: 'Others' },
]
    return(
       <div>
           <h1>{lavel}</h1>
        <Form>
    <Form.Group controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
          type="text" 
          placeholder="Enter your first name" 
          value={firstName} 
          onChange={e=>changeInput("firstName", e.target.value)}
       />
    </Form.Group>
    <Form.Group controlId="lastName">
      <Form.Label>Last name</Form.Label>
      <Form.Control 
          type="text" 
          placeholder="Enter Your last name" 
          value={lastName} 
          onChange={e=>changeInput("lastName", e.target.value)} 
      />
    </Form.Group>
    <Form.Group controlId="gender">
    <Form.Label>Gender</Form.Label>
      
      <Select options={options} value={gender} onChange={e=>setGender(e.target.value)}/>
      {/* <Select 
          options={options} 
          isClearable={true} 
          value={gender} 
          onChange={e=>changeInput("gender", e.target.value)}/> */}
    </Form.Group>
    <Form.Group controlId="dateOfBirth">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control type="date" placeholder="Enter your date of birth" value={dateOfBirth} onChange={e=>setDateOfBirth(e.target.value)} />
    </Form.Group>
    <Form.Group controlId="cityName">
      <Form.Label>City Name</Form.Label>
      <Form.Control 
      type="CityName" 
      placeholder="City name" 
      value={cityName} 
      onChange={e=>setCityName(e.target.value)}/>
    </Form.Group>

    <Form.Group controlId="phoneNumber">
      <Form.Label>Phone</Form.Label>
      <Form.Control type="number" placeholder="+8801" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
    </Form.Group>

    <Form.Group  controlId="emailAddress">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" value={emailAddress} onChange={e=>setEmailAddress(e.target.value)}/>
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       </div>
    );
}

export default User;