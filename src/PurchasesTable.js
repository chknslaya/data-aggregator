import Table from 'react-bootstrap/Table';

function PurchasesTable() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Field 1</th>
                    <th>Field 2</th>
                    <th>Field 3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>Test</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default PurchasesTable