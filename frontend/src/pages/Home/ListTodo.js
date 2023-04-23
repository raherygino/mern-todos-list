import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ListTodo = ({ todos, deleteTodo }) => {
  return (
    <>
      {todos && todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <tr>
                <td key={todo._id}>{index+1}</td>
                <td>{ todo.title }</td>
                <td>{ todo.type }</td>
                <td>{ todo.priority }</td>
                <td>{ todo.created_at }</td>
                <td>
                    <ButtonGroup>
                        <Button>Show</Button>
                        <Button variant='success'>Edit</Button>
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