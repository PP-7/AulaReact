export default function Exemplo2() {
  return (
    <div className="conteudo">

      <h1>Exemplo 2</h1>

        <div>

          <h3>Calculo de média</h3>
          <form>

            <p>
              O objeivo será receber duas notas, calcular a média e exibir o resultado na tela.
            </p>
            
            <p>
              Digite o primerio número<br/>
              <input type="text"/>
            </p>

            <p>
              Digite o segundo número<br/>
              <input type="text"/>
            </p>

            <p>
            <input type="button" value="Calcular média"/>
            </p>
            
            <p><a href="/">Voltar</a></p>

          </form>
        </div>
      
    </div>
  );
}
