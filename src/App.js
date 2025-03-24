import './App.css';
import LicensesTable from './LicensesTable.js';
import PurchasesTable from './PurchasesTable.js';
import CustomerDropdown from './CustomerDropdown.js';
import {Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
  <Container>
    <Row>
      <Col>
        <h1>
          ETAS Demo
        </h1>
      </Col>
      <Col>
        <CustomerDropdown align="right"></CustomerDropdown>
      </Col>
    </Row>
    <Row>
      <Col><LicensesTable></LicensesTable></Col>
      <Col><PurchasesTable></PurchasesTable></Col>
    </Row>
    </Container>
  );
}

export default App;
