import React  from "react";
import './user.css'
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';
import { Controller, useForm } from "react-hook-form";

const User = ({ lavel = 'New User', setUserList }) => {

  const { register, handleSubmit, watch, control, formState: { errors } } = useForm();

  const options = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
    { value: 'Others', label: 'Others' },
  ]
  const onSubmitUserForm = (data) => {
     console.log(data)
    const usersArray = JSON.parse(window.localStorage.getItem('users'));

    if (usersArray && Array.isArray(usersArray)) {
      usersArray.push(data);
      window.localStorage.setItem('users', JSON.stringify(usersArray));
      setUserList(usersArray);
    }else{
      window.localStorage.setItem('users', JSON.stringify([data]));
      setUserList([data]);
    }
  }

  return (
    <div>
      <Form onSubmit={handleSubmit((data) => onSubmitUserForm(data))} >
        <h3>{lavel}</h3>

        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your first name"
            {...register("firstName", { 
              required: true,
              minLength: 2,
              maxLength: 50,
          })}
          />

          {
            errors.firstName &&
            <span className="text-danger">
              {errors.firstName.type === 'required' && 'Please give First Name'}
              {errors.firstName.type === 'minLength' && 'Please give First Name minimum of 2 characters'}
              {errors.firstName.type === 'maxLength' && 'Please give First Name maximum of 50 characters'}
            </span>
          }

        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Your last name"
            className={ errors.lastName && 'is-invalid' }
            {...register("lastName", { 
              required: true,
              minLength: 2,
              maxLength: 50,
          })}
          />

          {errors.lastName &&
            <span className="text-danger">
              {errors.lastName.type === 'required' && 'Please give Last Name'}
              {errors.lastName.type === 'minLength' && 'Please give Last Name minimum of 5 characters'}
              {errors.lastName.type === 'maxLength' && 'Please give Last Name maximum of 50 characters'}
            </span>
          }
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Controller
            control={control}
            name="gender"
            rules={{ required: true }}
            render={({ field: { onChange, value, name, ref } }) => (
              <Select
                inputRef={ref}
                options={options}
                isClearable={true}
                value={value}
                name={name}
                onChange={onChange}
              />
            )}
          >

          </Controller>
        </Form.Group>

        <Form.Group controlId="dateOfBirth">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter your date of birth"
            {...register("date",  { 
              required: true,
          })}
          />
        </Form.Group>

        <Form.Group controlId="cityName">
          <Form.Label>City Name</Form.Label>
          <Form.Control
            type="CityName"
            placeholder="City Name"
            {...register("cityName")}
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="+8801"
            {...register("phoneNumber")}
          />
        </Form.Group>

        <Form.Group controlId="emailAddress">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...register("email",{
               required: "Enter your e-mail",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              
            },
          })}
          />
             {
            errors.email &&
            <span className="text-danger">
              {errors.email.type === 'required' && 'Please enter your email'}
              {errors.email.type === 'pattern' && 'Valid mail please'}
            </span>
          }

        </Form.Group >
        <Button variant="primary" size="xxl" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default User;