import Exemplo1 from "./componentes/exemplo1"
import Exercicio1 from "./componentes/exercicio1"

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
    </div>
  )
}