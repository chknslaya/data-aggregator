import React from "react";
import { Dropdown } from "react-bootstrap";

const CustomerDropdown = ({ customers }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-customer">
        Select Customer
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {customers.map((customer, index) => (
          <Dropdown.Item key={index} onClick={() => alert(`You selected: ${customer}`)}>
            {customer}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CustomerDropdown;