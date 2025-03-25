import './App.css';
import DataTable from './DataTable.js';
import CustomerDropdown from './CustomerDropdown.js';
import {Container, Row, Col} from 'react-bootstrap'
import startWorkflow from './Executor.js';

function App() {
  // Get customers first
  console.log(startWorkflow("GetCustomerNames"))
  const customers = ["Tesla", "General Motor", "Volkswagen", "Lucid", "Ford"];

  const records = [
    { id: 1, name: "Alice", age: 25, email: "alice@example.com" },
    { id: 2, name: "Bob", age: 30, email: "bob@example.com" },
    { id: 3, name: "Charlie", age: 28, email: "charlie@example.com" }
  ];
  
  return (
  <Container>
    <Row>
      <Col>
        <h1>
          ETAS Demo
        </h1>
      </Col>
      <Col>
        <CustomerDropdown customers={customers}></CustomerDropdown>
      </Col>
    </Row>
    <Row>
      <Col><DataTable records={records}></DataTable></Col>
      <Col><DataTable records={records}></DataTable></Col>
    </Row>
    </Container>
  );
}

export default App;
