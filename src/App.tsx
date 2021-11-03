import React from 'react';
import { Input } from './components/form/Input';
import { Container, Row, Column } from './components/grid';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Column colSpan={2}>
            <Input id="test1" label="Testing Input1" />
          </Column>
          <Column colSpan={2}>
            <Input id="test2" label="Testing Input2" />
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default App;
