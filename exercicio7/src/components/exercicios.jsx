export default function Exercicio7({quantidade, preco})
{
    let subtotal = Number(quantidade)*Number(preco);
    let desconto = subtotal*0.1;
    let valorf = subtotal-desconto;

    return(
        <div>
            Total:{subtotal}
            <br></br>
            Desconto:{desconto}
            <br></br>
            valor Final:{valorf}
        </div>
    );
}