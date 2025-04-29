export default function Exercicio4 ({tipo, base, altura})
{

let arearesultado;
if (tipo=="Triângulo")
{
arearesultado = base*altura/2;
}
else 
if (tipo=="Retângulo")
{
arearesultado = base*altura;
}
else
if (tipo=="Quadrado")
{
arearesultado = base * base
}
return(
    <div>
    <p>Poligono {tipo} com base {base} e altura de {altura} tem área de: {arearesultado}</p>
    </div>
);
}