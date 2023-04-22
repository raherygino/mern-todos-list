import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Select(props) {
    return(
     <>
        <FloatingLabel 
            controlId={ props.id } 
            label={ props.label }
            className='mb-2'>
            <Form.Select aria-label="Floating label select">
                <option>-</option>
                { props.data.map((item, index) => (
                    <option 
                        value={item.toLowerCase()} 
                        key={index}>{ item }</option>
                )) }
            </Form.Select>
        </FloatingLabel>
     </>
    );
}

export default Select;