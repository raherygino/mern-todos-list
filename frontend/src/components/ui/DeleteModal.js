
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function DeleteModal(props) {
    return(
        <>
            <Modal
                show={props.show} 
                onHide={props.handle.onCancel}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure to delete it?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={props.handle.onCancel}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={props.handle.onValide}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DeleteModal;