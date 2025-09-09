export default function Exemplo1() {
  return (
    <div className="conteudo">
      <h1>Exemplo 1</h1>

      <div>
        <h3 className="centro">Exemplo de uso do UseState</h3>

        <p>O objetivo será somar dois números e exibir o resultado na tela.</p>

        <form>

          <p> 
            Digite o primeiro número<br/>
            <input type="text"/>
          </p>

          <p>
            Digite o segundo número<br/>
            <input type="text"/>
          </p>

          <p>
            <input type="button" value="Calcular"/>
          </p>

          <p><a href="/">Voltar</a></p>
        </form>
      </div>
    </div>
  );
}
