import axios from "axios";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Input from "../../components/form/Input";


const Show = () => {

    const params = useParams();
    const [todo, setTodo] = useState({});
    
    axios
        .get(`http://localhost:5000/api/todos/show/${params.id}`)
        .then((result) => { setTodo(result.data) })
        .catch((err) => console.log(err));

    return(
     <>
        <Card.Header className="text-dark">Create</Card.Header>
        <Card.Body>
            <Row className='mb-2'>
                <Col lg={4}>
                    <Input
                        id="title"
                        label="Titre"
                        type="text"
                        value={todo.title}
                        readOnly/>
                </Col>
                <Col lg={4}>
                    <Input
                        id="type"
                        label="Type"
                        type="text"
                        value={todo.type}
                        readOnly/>
                </Col>
                <Col lg={4}>
                    <Input
                        id="priority"
                        label="Priority"
                        type="text"
                        value={todo.priority}
                        readOnly/>
                </Col>
            </Row>
            
            <Input
                id="description"
                label="Description"
                type="text"
                value={todo.description}
                readOnly/>
            
            <NavLink 
                className="btn btn-outline-secondary" 
                to={`../edit/${params.id}`}>
                Edit
            </NavLink>
        </Card.Body>
     </>
    );
}

export default Show;