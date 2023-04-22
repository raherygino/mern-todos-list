import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Select from '../../components/form/Select';
import Input from '../../components/form/Input';

function Create() {
    const type = ['Work','Personnal', 'Whish', 'Other'];
    const priority = ['High','Medium', 'Low'];
    
    return (
     <>
        <Card.Header className="text-dark">Create</Card.Header>
        <Card.Body>
            <form>
                <Row className='mb-2'>
                    <Col lg={4}>
                        <Input
                            id="title"
                            label="Titre"
                            type="text"/>
                    </Col>
                    <Col lg={4}>
                        <Select 
                            id="type"
                            label="Type"
                            data={ type }/>
                    </Col> 
                    <Col lg={4}>
                        <Select 
                            id="priority"
                            label="Priority"
                            data={ priority }/>
                    </Col>   
                </Row>
                <Input
                    id="description"
                    label="Description"
                    type="textarea"/>
                <Button variant="primary">Create</Button>
            </form>
        </Card.Body>
     </>
    );
}

export default Create;