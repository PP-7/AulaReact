import {useState} from "react";

export default function Exercicio4()
{

    const[base, setBase] = useState(0);
    const[altura, setAltura] = useState(0);
    const[resultado, setResultado] = useState(0);

    function caucular()
    {
    let area;

    area = Number(base) * Number(altura) / 2;

    setResultado("A área do triângulo é: "+ area);
    }

    return(
        <div className="conteudo">

        <h1>Exercício 4</h1>

        <div>

            <form>

                <p>
                    Digite o valor da base:<br/>
                    <input type="text" value={base} 
                    onChange={(e) => setBase (e.target.value)}/>
                </p>

                <p>
                    Digite o valor da altura:<br/>
                    <input type="text" value={altura}
                    onChange={(e) => setAltura (e.target.value)}/>
                </p>

                <p>
                    <input type="button" value="Exercício 4" onClick={caucular}/>
                </p>
                
                <p>
                    <b>Resultado:</b>
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