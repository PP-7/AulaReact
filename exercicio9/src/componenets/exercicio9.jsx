export default function Exercicio6 ({capital , juros , tempo})
{
    let mont = capital * Math.pow(1 + juros / 100, tempo);

    return(
        <div>
        <h1>Resultados</h1>
        <p>O capital é: {capital}</p>
        <p>O juros é: {juros}</p>
        <p>O tempo é: {tempo}</p>
        <p>O montante é {mont}</p>
        </div>
    )
}