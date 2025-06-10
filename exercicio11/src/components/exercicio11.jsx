export default function Exercicio11 ({custo})
{

    let custoD = (28/100)*custo;
    let imposto = (45/100)*custo;
    let custoF = custo + custoD + imposto;

return(
    <div>
       <p>O custo é: {custo} R$</p>
       <p>O custo do distribuidor é: {custoD} R$</p>
       <p>O valor do imposto é: {imposto} R$</p>
       <p>O custo final é: {custoF} R$</p>
    </div>
);
}