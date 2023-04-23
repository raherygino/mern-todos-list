import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { NavLink } from 'react-router-dom';

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos && todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <tr key={todo._id}>
                <td>{index+1}</td>
                <td><NavLink to={`./todo/${todo._id}`}>{ todo.title }</NavLink></td>
                <td>{ todo.type }</td>
                <td>{ todo.priority }</td>
                <td>{ todo.created_at }</td>
                <td>
                    <ButtonGroup>
                        <NavLink to={`./todo/${todo._id}`} className='btn btn-primary'>Show</NavLink>
                        <NavLink to={`./edit/${todo._id}`} className='btn btn-success'>Edit</NavLink>
                        <Button variant='danger' onClick={() => deleteTodo(todo._id)} >Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
          );
        })
      ) : (
        <tr>
            <td colSpan={6} className='text-center'>No todo(s) left</td>
        </tr>
      )}
    
    </>
  );
};
export default ListTodo;