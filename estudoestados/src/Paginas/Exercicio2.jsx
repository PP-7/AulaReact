import {useState} from "react";

export default function Exercicio2()
{

    const[faren, setFaren] = useState(0);
    const [resultado, setResultado] = useState(0);


    function caulcular()
    {
        let tempC;

        tempC = Number(faren-32)*5/9;

        setResultado("A temperatura "+ faren +" Fah, em Celsius é:"+ tempC);
    }

    return(
        <div className="conteudo">

        <h1>Exercício 2</h1>

        <div>

            <form>

                <p>
                    Digite a temperatura em grau Fahrenheit:<br/>
                    <input type="text" value={faren} 
                    onChange={(e) => setFaren (e.target.value)}/>
                </p>

                <p>
                    <input type="button" value="Exercício 2" onClick={caulcular}/>
                </p>

                <p>
                    <b>Resultado:</b>
                    <br/>
                    A temperatuda digitada em Farenhit é: {faren}
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