import "./App.css";

export default function App()
{

    const estilo = {
        color : "white",
        textAlign : "Center",
        backgroundColor : "rgb(51, 56, 142)",
        padding : "10px"
    }

    return (
        <div className="conteudo">
            <h1>Estudo CSS</h1>
            
            <p>
                O CSS (<i>Cascading Style Sheets</i>) é uma linguagem utilizada para estilizar as <b>páginas web</b>. Com elas podemos definir:
            </p>
            
            <ul>
                <li>Cores de fundo, do texto e dos elentos</li>
                <li>Fontes e tamanhos de letras</li>
                <li>Posicionamento de elementos nas páginas</li>
                <li>Espaçamento, bordas, sombras, etc.</li>
                <li>Efeitos visuais e animaçôes</li>
            </ul>

            <h3 style={estilo}>Torcida Corinthians</h3>

            <p className="centro">
            <img src="sccp.jpg"/>
            </p>

        </div>
    );
}