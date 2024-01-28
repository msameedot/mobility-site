import React from 'react';
import ToTopButton from './components/ToTopButton/ToTopButton';
import ChatBot from './components/ChatBot/ChatBot';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <h1>Ane manda appp!</h1>
                    <Button>this is btn</Button>
        <ToTopButton/>
        <ChatBot/>
                </Col>
            </Row>
        </Container>
        
    );
};

export default App;