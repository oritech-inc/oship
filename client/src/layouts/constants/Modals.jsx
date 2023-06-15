/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { ChevronLeft, Reply, ShieldExclamation, } from 'react-bootstrap-icons';

function Modals() {

    const [showModal, setShowModal] = useState(true);

    return (
        <Modal
            show={setShowModal} onHide={() => { setShowModal(false) }} className='border-0'
            size={'sm'} keyboard={true} fullscreen={'sm-down'} centered
            backdrop={'static'} >

            <Modal.Header closeButton className='' />
            <Card className='cd-permissions border-0'>
                {getModalImg()}
                <Card.Header closeButton className='mb-2 text-bold text-uppercase'>
                    <Card.Title>
                        <ShieldExclamation className='mx-1' size={20} />
                        Site Cookies
                    </Card.Title>
                </Card.Header>
                {getModalBody()}
                {getModalLinks()}
                {getModalButtons()}
            </Card>
        </Modal >
    )
}

function getModalImg() {
    return (
        <Card.Img variant="top" rounded fluid height={'120px'} width='100%'
            src="../../src/assets/img/icon/cb/agree.svg">
        </Card.Img>
    )
}

function getModalBody() {
    return (
        <Card.Body className='text-center'>
            <Card.Text as='p'>
                By choosing to click {"Accept All Cookies,"} you acknowledge and agree to the storage of cookies on your device.
            </Card.Text>
        </Card.Body>
    )
}

function getModalLinks() {
    return (
        <></>
    )
}

function getModalButtons() {
    return (
        <Card.Body className='d-grid p-2 border-top'>
            <ButtonGroup size="sm">
                <Button variant='outline-success'>
                    ACCEPT ALL <Reply size={15} />
                </Button>
            </ButtonGroup>
        </Card.Body>
    )
}

export default Modals
