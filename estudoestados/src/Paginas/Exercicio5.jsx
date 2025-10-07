import {useState} from "react";

export default function Exercicio5()
{

    const[lado, setLado] = useState(0);
    const[resul, setResul] = useState(0);

    function caucular()
    {
        let area;

        area = Number(lado) * Number(lado);

        setResul("A área do quadrado é: "+ area);
    }

    return(
        <div className="conteudo">

        <h1>Exercício 5</h1>

        <div>

            <form>

                <p>
                    Digite o valor do lado:<br/>
                    <input type="text" value={lado}
                    onChange={(e) => setLado (e.target.value)}/>
                </p>

                <p>
                    <input type="button" value="Exercício 4" onClick={caucular}/>
                </p>

                <p>
                    <b>RESULTADO</b>
                    <br/>
                    {resul}
                </p>

                <p>
                    <a href="/">Voltar</a>
                </p>

            </form>

        </div>
        
    </div>
    )
}