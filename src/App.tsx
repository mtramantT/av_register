import React from 'react';
import { Input, Button } from './components/form';
import { Column, Container, Row } from './components/grid2';


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column>
            <Input id="test1" label="Testing Input1" />
          </Column>
          <Column>
            <Input id="test2" label="Testing Input2" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Button onClick={() => console.log("submit logic")}>Submit</Button>
            <Button buttonColor="#ec7676" onClick={() => console.log("submit logic")}>Clear</Button>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
