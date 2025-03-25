import { Table } from "react-bootstrap";

const DataTable = ({ records }) => {
  if (!records || records.length === 0) {
    return <p>No records available.</p>;
  }

  // Extract column headers dynamically from the first record
  const headers = Object.keys(records[0]);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {records.map((record, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td key={colIndex}>{record[header]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;