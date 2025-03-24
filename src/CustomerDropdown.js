import { Dropdown } from 'react-bootstrap';

function CustomerDropdown() {
  return (
    <Dropdown expand="lg">
        <Dropdown.Toggle id="Customer-Dropdown" variant="secondary">
            Select customer
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#customer/tesla">Tesla</Dropdown.Item>
            <Dropdown.Item href="#customer/ford">Ford</Dropdown.Item>
            <Dropdown.Item href="#customer/gm">GM</Dropdown.Item>
            <Dropdown.Item href="#customer/volkswagen">Volkswagen</Dropdown.Item>
            <Dropdown.Item href="#customer/lucid">Lucid</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  );
}

export default CustomerDropdown;