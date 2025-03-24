import './App.css';
import CustomerTable from './CustomerTable.js';
import CustomerDropdown from './CustomerDropdown.js';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
  <Container>
    <Row>
      <Col></Col>
      <Col>
        <CustomerDropdown align="right"></CustomerDropdown>
      </Col>
    </Row>
    <Row>
      <Col><CustomerTable></CustomerTable></Col>
      <Col><CustomerTable></CustomerTable></Col>
    </Row>
    <Row>
      <CustomerTable></CustomerTable>
    </Row>
    </Container>
  );
}

export default App;
