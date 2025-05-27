export default function Exercicio8 ({peso , altura})
{
let imc=peso/(altura*altura);

return(
   <div>
    <p>Seu peso é: {peso}</p>
    <br></br>
    <p>Sua altura é: {altura}</p>
    <br></br>
    <p>E seu IMC é: {imc}</p>
   </div> 
)
}