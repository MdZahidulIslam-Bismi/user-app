import React, {useState} from "react";
import './user.css'
import {Form, Button} from 'react-bootstrap';
import Select from 'react-select';
import { useForm } from "react-hook-form";

const User = ({lavel = 'New User'}) =>{

      const { register, handleSubmit, watch, formState: { errors } } = useForm();

      const [firstName,setFirstName]        = useState('');
      const [lastName,setLastName]          = useState('');
      const [gender,setGender]              = useState('');
      const [dateOfBirth,setDateOfBirth]    = useState('');
      const [cityName,setCityName]          = useState('');
      const [phoneNumber,setPhoneNumber]    = useState('');
      const [emailAddress,setEmailAddress]  = useState('');
      const options = [
        { value: 'Male', label: 'Male' },
        { value: 'Female', label: 'Female' },
        { value: 'Others', label: 'Others' },
    ]
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

      const  onSubmitUserForm = () => {
        alert('submitting user data')
      }
      console.log(firstName,  lastName, gender, dateOfBirth, cityName, phoneNumber, emailAddress);

    return(
       <div>
        <Form className = "card card-body p-5 m-5"  onSubmit={handleSubmit(onSubmitUserForm)} >
        <h3>{lavel}</h3>

    <Form.Group controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
          type="text" 
          placeholder="Enter your first name" 
          
          onChange={e=>changeInput("firstName", e.target.value)}
          {...register("firstName", {
             required: true,
             maxLength:50,
             minLength:2  
            })}
       />
        {
                    errors.firstName && 
                    <span className="text-danger">
                        { errors.firstName.type === 'required' && 'Please give First Name' }
                        { errors.firstName.type === 'minLength' && 'Please give First Name minimum of 2 characters' }
                        { errors.firstName.type === 'maxLength' && 'Please give First Name maximum of 50 characters' }
                 </span>
                }
    </Form.Group>

    <Form.Group controlId="lastName">
      <Form.Label>Last name</Form.Label>
      <Form.Control 
          type="text" 
          placeholder="Enter Your last name" 
          value={lastName} 
          onChange={e=>changeInput("lastName", e.target.value)} 
          {...register("lastName", {
            required: true,
            maxLength:50,
            minLength:2  
           })}
      />
      { errors.lastName && 
                    <span className="text-danger">
                        { errors.lastName.type === 'required' && 'Please give Last Name' }
                        { errors.lastName.type === 'minLength' && 'Please give Last Name minimum of 5 characters' }
                        { errors.lastName.type === 'maxLength' && 'Please give Last Name maximum of 50 characters' }
                    </span>
                }
    </Form.Group>

    <Form.Group controlId="gender">
    <Form.Label>Gender</Form.Label>
      <Select 
          options={options} 
          isClearable={true} 
          onChange={value=>changeInput("gender", value) }
          />
    </Form.Group>

    <Form.Group controlId="dateOfBirth">
      <Form.Label>Date of Birth</Form.Label>
      <Form.Control 
          type="date" 
          placeholder="Enter your date of birth"
          value={dateOfBirth} 
          onChange={e=>changeInput("dateOfBirth", e.target.value)}
     />
    </Form.Group>

    <Form.Group controlId="cityName">
      <Form.Label>City Name</Form.Label>
      <Form.Control 
          type="CityName" 
          placeholder="City name" 
          value={cityName} 
          onChange={e=>setCityName(e.target.value)}
      />
    </Form.Group>

    <Form.Group controlId="phoneNumber">
      <Form.Label>Phone</Form.Label>
      <Form.Control 
          type="number"
          placeholder="+8801" 
          value={phoneNumber} 
          onChange={e=>changeInput("phoneNumber", e.target.value)}
     />
      </Form.Group>

    <Form.Group  controlId="emailAddress">
      <Form.Label>Email</Form.Label>
      <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={emailAddress} 
          onChange={e=>changeInput("emailAddress", e.target.value)} 
      />
    </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
       </div>
    );
}

export default User;