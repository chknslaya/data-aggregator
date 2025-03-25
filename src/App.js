import './App.css';
import DataTable from './DataTable.js';
import CustomerDropdown from './CustomerDropdown.js';
import {Container, Row, Col} from 'react-bootstrap'
import startWorkflow from './Workflow.js';
import FileViewer from './FileViewer.js';

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
    <Row>
      <Col><FileViewer fileUrl={"https://etas-demo-invoices.s3.us-west-2.amazonaws.com/Invoice_Base.pdf?response-content-disposition=inline&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSiRcyg%2Bvt2RmwAz0oklvZ%2FIqYXwlBAluKfgObb7gCvwIhAOQV2tdvTG0hB%2Fyv6NDtU%2F4AVYtfbZPXUGMoBngJ0zwbKtIECBoQABoMMjU1MzY0OTgxNjQwIgzXgbMJ4l4JmqC%2FHj8qrwS%2BeSAe094e1A5jCiaUhhB3laHLQVQjLZSbaz%2BqRLKLHtZFV3scV180ZgNnchi5Or37vzJwpAwmzys9ANFnhxGSSW3h8O6243Y%2BCYDT5g8PxMKicN%2B9HEOTWNawupEXpI9VQN2RQQn%2FyG5v67BpPpjzUfeUyFLvg1oS1nLQLBCRmgxr0JMVDQBo9aoTQCo13jPeCnKGLNfqySO6fmjUevvwf%2FK8OBUgWh2TL89FnU3GbsWFlfcASayWsvWQijXNxxtVfKx8HQ55fc%2FxNbBuRr%2FxL1qSMEJfYXc40Op23vXVKWRTbhtjz9LpuRwSjpVvkLlXgnCYXjnbYBR2Zf4l9pQajFkPu7uVIhkmg4h3QXsGZTa3SJi1x2A9hNN9vK8Is0eZL%2BVkjOWL7CC5hV9Vu%2F8qdqgpNbrwfU%2BTfCBJyFts3cwUwdy4EaUeTPcwyNrWx%2BaJj7calks38BuJ746f6PlK1GUKRKNpqc5gpkyz0bSdE8fF%2Fl2xt3v3n7Cgjalu6dh1GyaL0eU0zVJO12atkAizqov12GdRAEuk1Seu3B3zIxOTxQOSPwtwqjl82r%2FiRluJw%2BunwnBtuze3oQKYwKmVY3D6WdHLs69%2FhsttxBZk5qUvJc73sxTgxq6ql5mEFoWyJxP7NUFd7YnWSVtSJtWimoYqThMj%2BBPHGQlC5PpRAqRTZ0d2cB7JEkQXBE4%2B3Nd%2BGJo5BPS9nlXV%2F%2F1LNquT%2BJqr3pgh69u4A14OcDcEMPi7i78GOsQCs99TTT4rukBQeEQLfVkSBl13TpCyAZkqPCoznQEPZ%2BsdeQzyfcBMW%2BVHQj4yVm5BTRwaC0vzd5WLnLbLpXjerKq4VaEgIHY7aLo5IoXo5KAVxNaUZWV8ONImarrTYAIERj8iDiI1sJHvcruGgqwSYwTv9FR1uCWYhpnv4uUBbBT4DgELiZw7F4ewsTzNQ00ry5nld%2FdgJHAPFxyD4QAXBdZu2Ma1m0I5F%2BkBBK7Y7wQx3FDYBkTphVMHHTjTH%2B1%2BnQcuM14OhW3bltg0%2FfczG7YJiDD71wGQw6fGcZcvlwHE4DtnPeF0W99aVM5wKG2dJrw6d4ywaH5qR7Ga3mv8SVKH%2B5nlMwhzl%2B31VqunQxxPqivsDv5JnOOMsBA6H1alGyJpVT2yIFM1x3kQa9PvUGjpvaS5ula8rd68jbnJGBdXMMON&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIATW5HQMOEGXC342SE%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T164828Z&X-Amz-Expires=43200&X-Amz-SignedHeaders=host&X-Amz-Signature=11c6b8d60a62661c8364703801c83028f6e670316e199494de08d56455a6bdf5"}></FileViewer></Col>
    </Row>
    </Container>
  );
}

export default App;
