import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Loader() {
    const [text] = useTypewriter({
        words: [
            "Shipment High In Transist", " "
        ],
        loop: true,
        typeSpeed: 50,
        deleteSpeed: 35,
        delaySpeed: 5000,
    });
    return (
        <div id={'loader'}>
            <h1>O-SHIP&trade;</h1>
            <h2>
                {text}
                <Cursor cursorBlinking={true} cursorStyle={'/'} cursorColor={'#fff'} />
            </h2>
        </div>
    )
}

export default Loader
