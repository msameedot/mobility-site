import React from 'react';
import ToTopButton from './components/ToTopButton/ToTopButton';
import ChatBot from './components/ChatBot/ChatBot';
import { Container, Row, Col, Button } from 'react-bootstrap';

const App: React.FC = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={4} md={6}>
                    <div className='flexstl'><p>
                        This is the body content of your app. You can organize it as needed. Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit. Sed tincidunt ex et orci convallis, vel fermentum ligula
                        facilisis.
                    </p>
                    {/* Adding more content for scrolling */}
                    {[...Array(20)].map((_, index) => (
                        <p key={index}>
                            Scroll down content #{index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                
                    
                    ))}
                    </div>
                    <ToTopButton/>
                    <ChatBot/>
                </Col>
            </Row>
        </Container>
        
    );
};

export default App;