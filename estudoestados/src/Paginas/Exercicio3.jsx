import {useState} from "react";

export default function Exercicio3()
{

    const[valor, setValor] = useState(0);
    const[taxa, setTaxa] = useState(0);
    const[tempo, setTempo] = useState(0);
    const[resultado, setResultado] = useState(0);

    function caucular()
    {
        let valorParcela;

        valorParcela = Number(valor) + (Number(valor) * (Number(taxa) * Number(taxa)/100) * tempo);

        setResultado("O valor da parcela atualizada é: "+ valorParcela);
    }

    return(
        <div className="conteudo">

        <h1>Exercício 3</h1>

        <div>

            <form>

                <p>
                    Digite o valor da prestação:<br/>
                    <input type="text" value={valor} 
                    onChange={(e) => setValor (e.target.value)}/>
                </p>

                <p>
                    Digite a taxa de juros:<br/>
                    <input type="text" value={taxa}
                    onChange={(e) => setTaxa (e.target.value)}/>
                </p>

                <p>
                    Digite o tempo (em dias) de atraso:<br/>
                    <input type="text" value={tempo}
                    onChange={(e) => setTempo (e.target.value)}/>
                </p>

                <p>
                    <input type="button" value="Exercício 3" onClick={caucular}/>
                </p>

                <p>
                <b>RESULTADO:</b>
                <br/>
                A valor da prestação é: {valor}
                <br/>
                A taxa de juros é: {taxa}
                <br/>
                O tempo de dias em atraso é: {tempo}
                <br/>
                {resultado}
                </p>

                <p>
                    <a href="/">Voltar</a>
                </p>

            </form>

        </div>
        
    </div>
    )
}