import { Form, FormControl, Button, Card, Container } from "react-bootstrap";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function LoginForm() {


    const [username, setUsername] = useState('');
    const [location, setLocation] = useState('');


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        Cookies.set('username', username, { expires: 7 });
        Cookies.set('location', location, { expires: 7 });

        // Redirect the user to the ticket page
        window.location.href = `/ticket/${location}`;
    };

    return (
        <Container style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "100px" }}>
            <Card style={{ width: '38rem' }}>
                <Card.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <Form.Label>Username</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter your username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Location</Form.Label>
                            <FormControl
                                type="text"
                                placeholder="Enter your location"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </Form.Group>
                        <Button style={{ marginTop: "30px" }} type="submit">Continue</Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default LoginForm;
