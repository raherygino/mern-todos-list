import { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import Input from "../../components/form/Input";
import Select from "../../components/form/Select";
import { PRIORITY, TYPE } from "../../constants/constants";



const Edit = () => {

    const params = useParams();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [title, setTitle] = useState(null);
    const [type, setType] = useState(null);
    const [priority, setPriority] = useState(null);
    const [description, setDescription] = useState(null);

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
        setError(false);
        setSuccess(false);
    }

    const typeChangeHandler = (e) => {
        setType(e.target.value);
        setError(false);
        setSuccess(false);
    }

    const priorityChangeHandler = (e) => {
        setPriority(e.target.value);
        setError(false);
        setSuccess(false);
    }

    const descriptionChangeHandler = (e) => {
        setDescription(e.target.value);
        setError(false);
        setSuccess(false);
    }

    const onSubmit = (e) => {

        e.preventDefault();
        
        const task = {
            title: title,
            type: type,
            priority: priority,
            description: description,
            created_at: new Date().toLocaleString()
        };

        axios
          .put('http://localhost:5000/api/todos/update/'+params.id, task)
          .then((res) => {
            if (res.data.error !== undefined) {
                setError(true);
            } else {
                setError(false);
                setSuccess(true);
            }
          })
          .catch((err) => console.log(err));
    }
    
    axios
        .get(`http://localhost:5000/api/todos/show/${params.id}`)
        .then((result) => {
            if (title === null) {
                setTitle(result.data.title);
            }

            if (type === null) {
                setType(result.data.type);
            }

            if (description === null) {
                setDescription(result.data.description);
            }

            if (priority === null) {
                setPriority(result.data.priority);
            }
        })
        .catch((err) => console.log(err));

    return (
        <>
        <Card.Header className="text-dark">{ `Edit ${title}` }</Card.Header>
        <Card.Body>
            <form onSubmit={onSubmit}>
                <Row className='mb-2'>
                    <Col lg={4}>
                        <Input
                            id="title"
                            label="Titre"
                            type="text"
                            onChange={titleChangeHandler}
                            value={ title }/>
                    </Col>
                    <Col lg={4}>
                        <Select 
                            id="type"
                            label="Type"
                            data={ TYPE }
                            onChange={ typeChangeHandler }
                            value={ type }/>
                    </Col> 
                    <Col lg={4}>
                        <Select 
                            id="priority"
                            label="Priority"
                            data={ PRIORITY }
                            onChange={ priorityChangeHandler }
                            value={ priority }/>
                    </Col>   
                </Row>
                <Input
                    id="description"
                    label="Description"
                    type="textarea"
                    onChange={descriptionChangeHandler}
                    value={ description }/>
                    
                { error ? 
                    <Alert variant="danger" dismissible>
                        All field are required
                    </Alert> : null
                }
                    
                { success ? 
                    <Alert variant="success" dismissible>
                        Task updated
                    </Alert> : null
                }

                <Button 
                    variant="primary" 
                    type='submit'>
                    Update
                </Button>
            </form>
        </Card.Body>
        </>
    );
}

export default Edit;