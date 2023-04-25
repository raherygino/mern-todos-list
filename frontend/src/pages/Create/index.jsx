import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Select from '../../components/form/Select';
import Input from '../../components/form/Input';
import axios from 'axios';
import { Navigate } from 'react-router-dom'; 
import { PRIORITY } from '../../constants/constants';

export default class Create extends Component {
    
    state = {
        todo_title : '',
        todo_type : '',
        todo_priority : '',
        todo_description : '',
        isError : false,
        submitted : false,
    }


    constructor(props) {
        super(props);

        this.onChangeTodoTitle = this.onChangeTodoTitle.bind(this);
        this.onChangeTodoType = this.onChangeTodoType.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    
    onChangeTodoTitle(e) {
        this.setState({
            todo_title: e.target.value,
            isError: false
        });
    }
    
    onChangeTodoType(e) {
        this.setState({
            todo_type: e.target.value,
            isError: false
        });
    }
    
    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value,
            isError: false
        });
    }
    
    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value,
            isError: false
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        const task = {
            title: this.state.todo_title,
            type: this.state.todo_type,
            priority: this.state.todo_priority,
            description: this.state.todo_description,
            created_at: new Date().toLocaleString()
        };

        axios
          .post('http://localhost:5000/api/todos', task)
          .then((res) => {
            if (!res.data.error) {
                this.setState({
                    todo_title: '',
                    todo_type: '',
                    todo_priority: '',
                    todo_description: '',
                    submitted : true,
                });
            } else {
                this.setState({
                    isError: res.data.error
                });
            }
          })
          .catch((err) => console.log(err));
    }

    render() {
        return(
            <>
            { this.state.submitted && 
            <Navigate to="/" state="success" /> }
               <Card.Header className="text-dark">Create</Card.Header>
               <Card.Body>
                   <form onSubmit={this.onSubmit}>
                       <Row className='mb-2'>
                           <Col lg={4}>
                               <Input
                                   id="title"
                                   label="Titre"
                                   type="text"
                                   value={this.state.todo_title}
                                   onChange={this.onChangeTodoTitle}/>
                           </Col>
                           <Col lg={4}>
                               <Select 
                                   id="type"
                                   label="Type"
                                   data={ TYPE }
                                   value={this.state.todo_type}
                                   onChange={this.onChangeTodoType}/>
                           </Col> 
                           <Col lg={4}>
                               <Select 
                                   id="priority"
                                   label="Priority"
                                   data={ PRIORITY }
                                   value={this.state.todo_priority}
                                   onChange={this.onChangeTodoPriority}/>
                           </Col>   
                       </Row>
                       <Input
                           id="description"
                           label="Description"
                           type="textarea"
                           value={this.state.todo_description}
                           onChange={this.onChangeTodoDescription}/>

                           { this.state.isError ? 
                                <Alert variant="danger" dismissible>
                                    <p>{ this.state.isError }</p>
                                </Alert> : null
                           }

                        <Button 
                            variant="primary" 
                            type='submit' >
                            Create
                        </Button>
                   </form>
               </Card.Body>
            </>
        );
    }
}