import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../components/Navbar';
import { AppData } from '../../data'

function Home() {
    const [screen] = [
        AppData[0].screen.height + "px",
        AppData[0].screen.width + "px",
    ]
    return (
        <Container>
            <Row my={12}>
                <Col>
                    <NavBar />
                    {getContent(screen)}
                </Col>
            </Row>
        </Container >

    )
}

function getContent(s) {
    return (
        <div id={'home-content'}>
            <h1>Home</h1>
        </div>
    )
}

export default Home