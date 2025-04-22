export default function Exercicio3({ valor, taxa , tempo})
{
    let valorp = valor + (valor*(taxa*taxa/100)*tempo)

    return(
        <div>
            <h3> Resultado</h3>
            O valor é: {valor} R$ 
            <br></br>
            A taxa é: {taxa}%
            <br></br>
            O tempo é: {tempo} dias
            <br></br>
            O valor da parcela é: {valorp} 
        </div>
    );
}