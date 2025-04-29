import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"
import Exercicio2 from "./componentes/exercicio2"
import Exercicio3 from "./componentes/exercicio3"
import Exercicio4 from "./componentes/exercicio4"
import Exercicio5 from "./componentes/exercicio5"
import Exercicio6 from "./componentes/exercicio6"

export default function App ()
{
  return (
    <div>
      <h1>Exercícios de componentes</h1>

      <Exemplo1 numero1={10} numero2={5}/>
      <Exemplo1 numero1={50} numero2={45.98}/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 1</h3>
      <Exercicio1 fah="100"/>
      <Exercicio1 fah="70"/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 2</h3>
      <Exercicio2 p="80" a="1.80"/>
      <Exercicio2 p="90" a="1.75"/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 3</h3>
      <Exercicio3 valor={100} taxa={10} tempo={2}/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 4</h3>
      <Exercicio4 tipo="Triângulo" base="10" altura="5"/>
      <Exercicio4 tipo="Retângulo" base="10" altura="5"/>
      <Exercicio4 tipo="Quadrado" base="10" altura="10"/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 5</h3>
      <Exercicio5 quantidadeC="10"/>
      <Exercicio5 quantidadeC="20"/>
      <hr>
      </hr>
      <h3>Chamada para o Exercício 6</h3>
      <Exercicio6 capital="1000" taxa="5" tempo="2"/>
      <Exercicio6 capital="1000" taxa="5" tempo="3"/>
    </div>

  )
}