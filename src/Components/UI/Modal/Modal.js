import { Modal, Image } from 'react-bootstrap'
import './Modal.css'
import Heading from '../Heading/Heading';

function Model(props) {
    const { data } = props;

    return (
        <div>
           <Modal show={props.showModal} onHide={props.hideModal} dialogClassName="custom-dialog">
                <Modal.Header closeButton>
                </Modal.Header>

                <Modal.Body className="modal-body">
                    <Heading color={"#2c3e50"} title={data.title}/>
                    <Image alt={data.title} src={data.name} rounded fluid/>
                </Modal.Body>

                <Modal.Footer>
                    <button onClick={props.hideModal} className="close-btn">Close</button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default Model
