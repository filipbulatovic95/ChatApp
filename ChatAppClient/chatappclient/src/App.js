import {Col, Row, Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import {HubConnectionBuilder, LogLevel} from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';


function App() {

  const[conn, setConnection] = useState();
  const[messages, setMessages] = useState([]);

  const joinChatRoom = async (userName, chatRoom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7042/chat")
        .configureLogging(LogLevel.Information)
        .build();
      
        conn.on("JoinSpecificChatRoom", (userName, msg) => {
          console.log("msg: ", msg);
          console.log("username: ", userName);
        });

        conn.on("ReceiveSpecificMessage", (userName, msg) => {
          setMessages(messages => [...messages, {userName, msg}]);
        });

        await conn.start();
        await conn.invoke("JoinSpecificChatRoom", {userName, chatRoom});

        setConnection(conn);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <main>
        <Container>
          <Row class='px-5 my-5'>
            <Col sm='12'>
              <h1 className='font-weight-light'>Wellcome to the ChatApp</h1>
            </Col>
          </Row>
          { !conn 
            ? <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
            : <ChatRoom messages={messages}></ChatRoom>
          }
        </Container>

      </main> 
    </div>
  );
}

export default App;
