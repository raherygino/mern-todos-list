import { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';  
import Card from 'react-bootstrap/Card';
import ListTodo from './ListTodo';
import DeleteModal from '../../components/ui/DeleteModal';
export default class Home extends Component {

    state = {
        todos: [],
        onClickDelete: false,
        idDelete : null
    };

    componentDidMount() {
        this.getTodos();
    }
      
    getTodos = () => {
        axios
            .get('http://localhost:5000/api/todos')
            .then((res) => {
            if (res.data) {
                this.setState({
                    todos: res.data,
                });
            }
        })
        .catch((err) => console.log(err));
    };

    closeModal = () => this.setState({ onClickDelete : false });
    shoModal = () => this.setState({ onClickDelete : true });
  
    confirmDelete = (id) => {/**/
        this.setState({
            onClickDelete: true,
            idDelete: id
        });
    };

    deleteTodo = () => {
        axios
            .delete(`http://localhost:5000/api/todos/${this.state.idDelete}`)
            .then((res) => {
                if (res.data) {
                    this.getTodos();
                    this.setState({ onClickDelete : false });
                }
            })
            .catch((err) => console.log(err));
    }
  
    render() {
        let { todos } = this.state;
        return (
            <>
                <Card.Header className="text-dark">Todo list</Card.Header>
                <Card.Body className='px-0 py-0'>
                    <Table striped>
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
                            <ListTodo  todos={todos} deleteTodo={this.confirmDelete} />
                        </tbody>
                    </Table>
                    
                    <DeleteModal 
                        show = {this.state.onClickDelete} 
                        handle = {{
                            onCancel: this.closeModal,
                            onValide: this.deleteTodo }} />

                </Card.Body>
            </>
        );
    }
}