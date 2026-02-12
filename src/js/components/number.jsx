import '../components/css/number.css';
const Numero = (props) => {
    return (
        <div className="numberPrincipal">
            <div className='cardInterna'>
                <div className='fontDigital'><i className="bi bi-alarm"></i></div>
            <div className='fontDigital'><h2>{props.Numeros[0]}</h2></div>
            <div className='fontDigital'><h2>{props.Numeros[1]}</h2></div>
            <div className='fontDigital'><h2>{props.Numeros[2]}</h2></div>
            <div className='fontDigital'><h2>{props.Numeros[3]}</h2></div>
            </div>
        </div>
    );
}

export default Numero;

