import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InitCard from '../components/setup/InitCard';
import '../../files'

function Home() {

    return (
        <Container fluid className={'home-content'}>

        </Container>
    )
}

function getContent(s) {
    return (
        <Container fluid>
            <Row my={12} pt={5}>
                <Col>
                    <div>
                        <h1>Home</h1>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

function initContent() {
    return (
        <InitCard />

    )
}

export default Home