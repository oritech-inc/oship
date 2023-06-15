import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {
    PinMap, Toggle2On, Calendar2Check, BoxArrowInUpRight
} from 'react-bootstrap-icons';

function InitCard() {
    const changePermissions = () => {
        alert(event.target.value);
    };

    return (
        <Row my={8} pt={5}>
            <Col xs={'12'} sm={'12'} md={'6'} lg={'4'} xl={'3'} xxl={'2'}>
                <Card className='cd-permissions'>
                    <Card.Img variant="top" height={180} width={'100%'} fluid
                        src="../../src/assets/img/icon/svg/cookie.svg" />
                    {getAlert()}
                    <ListGroup horizontal className='d-flex justify-content-between'>
                        <ListGroup.Item>
                            <Calendar2Check size={25} className='text-success' />
                        </ListGroup.Item>
                        <ListGroup.Item action variant='info' href='#'
                            className=''
                            onClick={changePermissions}>
                            I accept the terms of use
                        </ListGroup.Item>
                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <Toggle2On size={25} className='text-success' />
                        </ListGroup.Item>
                        <ListGroup.Item action variant='success' href='#'
                            className=''
                            onClick={changePermissions}>
                            I accept cookie policy
                        </ListGroup.Item>
                        <a href='#'><BoxArrowInUpRight className='mt-2 icons' size={25} color='muted' /></a>

                    </ListGroup>
                    <ListGroup horizontal>
                        <ListGroup.Item>
                            <PinMap size={25} className='text-success' />
                        </ListGroup.Item>
                        <ListGroup.Item action variant='info' href='#'
                            className=''
                            onClick={changePermissions}>
                            Enable Location Sharing
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Footer className='d-grid'>
                        <Button variant="outline-success" size='' disabled>
                            CONTINUE
                        </Button>
                    </Card.Footer>
                </Card>
            </Col>


        </Row>

    )
}
function getAlert() {
    return (
        <Alert variant='primary' m={1} p={0} className='text-left'>
            <Alert.Heading className='text-uppercase' size='sm'>Allow permissions</Alert.Heading>
            <hr />
            <h6 className="pb-2 text-left m-0">
                Firstly before continuing using this application
                , carefully read and accept our Terms of use, enable cookies and location.
            </h6>
        </Alert>
    )
}

function getList() {
    return (
        <>
            <Placeholder as={''} animation="glow">
                <Placeholder xs={6} />
            </Placeholder>
            <Placeholder animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={6} /> <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="primary" xs={6} />
            <Col xs={'12'} sm={'12'} md={'6'} lg={'4'} xl={'3'} xxl={'2'}>
                <Card>
                    <Card.Img variant="top" src="../../src/assets/img/icon/svg/pl.svg" />
                    <Card.Footer>
                        <Placeholder.Button />
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}
export default InitCard
