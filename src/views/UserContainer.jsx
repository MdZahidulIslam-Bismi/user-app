import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import User from "../components/user/User"
import UserList from '../components/user/UserList';

const UserCntainer = () =>{
    return(
        <Container>
            <Row>
                <Col className='p-4' sm={12} md={4}>
                    <User />
                </Col>
                <Col className='p-4' sm={12} md={8}>
                    <UserList />
                </Col>
            </Row>
        </Container>
    )
}
export default UserCntainer;