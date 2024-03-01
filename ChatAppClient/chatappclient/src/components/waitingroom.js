import { useState } from "react";
import { Button, Form, FormGroup, Row, Col} from "react-bootstrap";


const WaitingRoom = ({ joinChatRoom}) => {

    const[userName, setUsername] = useState();
    const[chatRoom, setChatRoom] = useState();

    return <Form onSubmit={ e => {
        e.preventDefault();
        joinChatRoom(userName, chatRoom);
    }}>
        <Row className="px-5 py-5">
            <Col sm={12}>
                <FormGroup>
                    <Form.Control placeholder="Username" 
                        onChange={e => setUsername(e.target.value)} />

                    <Form.Control placeholder="ChatRoom" 
                        onChange={e => setChatRoom(e.target.value)} />
                </FormGroup>
            </Col>
            <Col sm={12}>
                <hr />
                <Button variant="success" type="submit">Join</Button>
            </Col>
        </Row>
    </Form>
}

export default WaitingRoom;