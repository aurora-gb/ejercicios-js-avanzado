// GRUPO B ejercicio 1

// let pin= 2797
// let cajaAbierta=false
// console.log(pin)
// console.log(typeof pin)
// console.log(typeof cajaAbierta)

// ejercicio 2

// let notas=[5,8,7,10]

// ejercicio 3

// let precio={
//   enStock:true,
//   price:20
// }

// ejercicio 4

// let nacimiento=1997
// let actual=2026
// // nacimiento-=actual
// let resta=actual-nacimiento
// console.log(resta)

// ejercicio 5
// let lista= ["aurora",5,true]

// ejercicio 6

// let dia = 8;
// switch (dia) {
//   case 1: {
//     console.log("lunes");
//     break;
//   }
//   case 2: {
//     console.log("martes");
//     break;
//   }
//   case 3: {
//     console.log("miercoles");
//     break;
//   }
//   case 4: {
//     console.log("jueves");
//     break;
//   }
//   case 5: {
//     console.log("viernes");
//     break;
//   }
//   case 6: {
//     console.log("sabado");
//     break;
//   }
//   case 7: {
//     console.log("domingo");
//     break;
//   }
//   default: {
//     console.log("no hay mas dias de la semana");
//   }
// }

// opcion mas limpia creando una variale diaSemana que cambiara dependiendo de la variable dia
// let dia= 5
// let diaSemana
// switch(dia){
//   case 1:{
//     diaSemana="lunes"
//     break
//   }
//   case 2:{
//     diaSemana="martes"
//     break
//   }
//   case 3:{
//     diaSemana="miercoles"
//     break
//   }
//   case 4:{
//     diaSemana="jueves"
//     break
//   }
//   case 5:{
//     diaSemana="viernes"
//     break
//   }
//   case 6:{
//     diaSemana="sabado"
//     break
//   }
//   case 7:{
//     diaSemana="domingo"
//     break
//   }
//   default:{
//     diaSemana="no hay mas dias de la semana"
//   }
// }
// console.log(diaSemana)

// ejercicio 7

// let operacion = "suma";
// let numero = [10, 5];
// let resultado;
// switch (operacion) {
//   case "suma": {
//     resultado = numero.at(0) + numero.at(1);
//     break;
//   }
//   case "resta": {
//     resultado = numero[0] - numero[1];
//     // resultado=numero.at(0)-numero.at(1)
//     // otra manera de acceder a los valores del array
//     break;
//   }
//   default :{
//     resultado="no hay mas operaciones"
//   } 
//     break
// }
// console.log(resultado);

// ejercicio 8

// let precio={
//   enStock:true,
//   price:20
// }
// if (precio.price >=100){
//   precio.price=precio.price-15
// } else{
//   precio.price=precio.price+5
// }
// console.log(precio)

// ejercicio 9

// let piso=0
// let planta
// if (piso<0){
//   planta="estás en el sótano"
// } else if(piso===0){
//   planta="planta baja"
// } else{
//   planta="pisos superiores"
// }
// console.log(planta)

// ejercicio 10

// let opcion = "c";
// let frase;
// switch (opcion) {
//   case "a": {
//     frase = "iniciando";
//     break
//   }
//   case "b": {
//     frase = "cargando";
//     break
//   }
//   default:{
//     frase="opcion no valida"
//   }
// }
// console.log(frase)

// ejercicio 11

// let notas=[5,8,7,10]
// let resultado=notas[0]+notas[3]
// console.log(resultado)

// ejercicio 12

// let precio={
//   enStock:true,
//   price:20
// }
// precio.enStock=false
// console.log(precio)

// ejercicio 13

// let numeros= [10,20]
// let resultado= numeros[0]*numeros[1]
// console.log(resultado)

// ejercicio 14

// let ajustes={
//   volumen:8,
//   controles:[1,2],
// }
// console.log(ajustes)

// ejercicio 15

// let numeros= [10,25,40]
// let resultado= numeros[1]-numeros[0]
// console.log(resultado)

// GRUPO A 
// ejercicio 1

// let nombre="aurora"
// let edad=29
// let carnetConducir=true

// ejercicio 2

// let gastos=[50,20,40]

// ejercicio 3

// let witcher={
//   nombre:"aurora",
//   nivel:2,
//   vida:-3
// }

// ejercicio 4

// const base=10
// const altura=5
// const area= base*altura
// console.log(area)

// ejercicio 5

// let dinero=200
// dinero=dinero/2
// console.log(dinero)

// ejercicio 6

// let temperatura=30
// if (temperatura>30){
//   console.log("hace calor")
// } else if (temperatura<=30){
//   console.log("clima agradable")
// }

// ejercicio 7

// let esMoto=false
// if (esMoto===true){ 
//   console.log("pagas 5")
// } else {
//   console.log("pagas 10")
// }

// ejercicio 8

// let dinero=100
// if (dinero>100){
// console.log(dinero-20)
// }else if (dinero<=100){
//   console.log(dinero+10)
// }

// otra version
// let dinero=80
// if (dinero>100){
// dinero-=20
// }else if (dinero<=100){
// dinero+=10
// }
// console.log(dinero)

// otra version
// let dinero=80
// if (dinero>100){
// dinero=dinero-20
// }else if (dinero<=100){
// dinero=dinero+10
// }
// console.log(dinero)

// ejercicio 9

// let edad=10
// let vaAcompañado=true

// if (edad>12 || vaAcompañado){
//   console.log("puedes subir a la montaña rusa")
// } else{
//   console.log("no puedes subir")
// }

// ejercicio 10

// let nota=4
// if(nota>=8){
//   console.log("notable")
// } else if (nota>=5 && nota<=7){
//   console.log("aprobado")
// } else if(nota<5){
//   console.log("suspenso")
// }

// ejercicio 11

// let gastos=[50,20,40]
// let suma=gastos[0]+gastos[2]
// console.log(suma)

// ejercicio 12

// let witcher={
//   nombre:"aurora",
//   nivel:2,
//   vida:-3
// }
// witcher.vida=witcher.vida+50

// ejercicio 13

// let numeros=[2,4,6]
// numeros[2]=numeros[2]*2
// console.log(numeros)

// ejercicio 14

// let coche={
//   marca:"bmw",
//   año:2026,
//   motor:{caballos:50,electrico:true}
// }

// ejercicio 15

// let edades=[15,20]
// if (edades[0]<edades[1]){
//   console.log("es menor")
// } else{
//   console.log("es mayor")
// }

// ejercicio inventado

// let mensaje
// let casa={
//   inclinos:["aurora","carmen","pablo"],
//   mascota:true,
// }
// if (casa.mascota===true){
//   mensaje="orion"
// } else{
//   mensaje="no hay mascota"
// } 
// console.log(mensaje)