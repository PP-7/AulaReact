export default function Exercicio2({p , a})

{
    
    let imc = p/(a*a)

    return(
      <div>
         <h3>Resultado IMC</h3>

         Uma pessoa com peso de {p} kg e com uma altura de {a} m tem um IMC de: {imc}
      </div>
        
    );
}