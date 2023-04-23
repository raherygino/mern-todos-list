import Table from 'react-bootstrap/Table';  
import Card from 'react-bootstrap/Card';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';


function Home() {
    return(
        <>
            <Card.Header className="text-dark">Todo list</Card.Header>
            <Card.Body className='px-0 py-0'>
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Type</th>
                            <th>Priority</th>
                            <th>Created at</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Lorem</td>
                            <td>Upsum</td>
                            <td>High</td>
                            <td>22-04-2023 21:20</td>
                            <td>
                                <DropdownButton title="Actions" id="bg-nested-dropdown">
                                    <Dropdown.Item eventKey="1">Show</Dropdown.Item>
                                    <Dropdown.Item eventKey="2">Edit</Dropdown.Item>
                                    <Dropdown.Item eventKey="3">Delete</Dropdown.Item>
                                </DropdownButton>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </>
    );
}

export default Home;