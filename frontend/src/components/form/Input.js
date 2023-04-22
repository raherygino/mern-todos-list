import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function Input(props) {
    return(
     <>
        { props.type !== 'textarea' ?
            <Form.Floating>
                <Form.Control
                    id={props.id}
                    className='mb-2'
                    type={props.type}
                    name={props.id}
                    placeholder={props.label}/>
                <label htmlFor={props.id}>{props.label}</label>
            </Form.Floating> :
            
            <FloatingLabel
                controlId={props.id}
                label={props.label}
                className="mb-2" >
                <Form.Control as={props.type} placeholder={props.label}/>
            </FloatingLabel>
        }
     </>
    );
}

export default Input;