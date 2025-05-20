import Exercicio7 from "./components/exercicios";
export default function App()
{
  return(
    <div>
      <h1>Exercicio 7</h1>
      <Exercicio7 quantidade={5} preco={5}/>
      <Exercicio7 quantidade={10} preco={10}/>
    </div>
  );
}