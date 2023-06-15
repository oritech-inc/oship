import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modals from '../constants/Modals';
import '../../files'
import { AppData } from '../../data'

function Index() {
    // const content = (!AppData[0].browser.cookie) ? <Home /> : <Index />;
    console.log(AppData[0]);

    return (
        <Container fluid className={'home-content'} onLoad={(() => { })}>
            <Modals />
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


export default Index