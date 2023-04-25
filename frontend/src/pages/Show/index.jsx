import axios from "axios";
import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PropsTodo from "./propsTodo";


const Show = () => {

    const params = useParams();
    const [todo, setTodo] = useState({});
    
    axios
        .get(`http://localhost:5000/api/todos/show/${params.id}`)
        .then((result) => { setTodo(result.data) })
        .catch((err) => console.log(err));

    return(
     <>
        <Card.Header className="text-dark">{ todo.title }</Card.Header>
        <Card.Body>
            <Row className='mb-2'>
                <Col lg={6}>
                    <PropsTodo 
                        label='Title' 
                        value={ todo.title } />
                </Col>
                <Col lg={6}>
                    <PropsTodo 
                        label='Type' 
                        value={ todo.type } />
                </Col>
            </Row>

            <Row>
                <Col lg={6}>
                    <PropsTodo 
                        label='Priority' 
                        value={ todo.priority } />
                </Col>
                <Col lg={6}>
                    <PropsTodo 
                        label='Description' 
                        value={ todo.description } />
                </Col>
            </Row>
            
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
