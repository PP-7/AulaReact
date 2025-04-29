export default function Exercicio6 ({capital , taxa , tempo})
{
let jurosS = capital*(1+taxa*tempo)
let jurosC = capital*(1+taxa)^tempo

return(
 <div>
    <h3>Resultado</h3>
    <p>Capital: R${capital}
    <br></br>
    Taxa: {taxa} %
    <br></br>
    Tempo: {tempo}
    <br></br>
    Juros Simples: R$ {jurosS}
    <br></br>
    Juros Compostos: R$ {jurosC}</p>
 </div>
);
}