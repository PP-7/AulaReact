export default function Exercicio10 ({dis, vel})
{

    let tempo = dis / vel

return(
    <div>
        <p>A distância é de: {dis} Km</p>
        <p>A velocidade é: {vel} Km/h</p>
        <p>O tempo estimado em horas de viagem é {tempo} horas</p>
    </div>
);
}