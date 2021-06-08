// Ejercicio realizado en clase.
// let edad= parseInt(prompt ("Cual es tu edad?"));
// if ((edad>=0) && (edad <= 17)){
//     alert("Eres niño o adolescente");
// } else if (edad <= 40){
//     alert("eres un joven lleno de vida");

// } else if (edad > 40) {
//     alert("esta muy bien realmente");
// }


let numero= parseInt(prompt ("Ingrese un numero"));
if (numero > 1000){
    alert(numero +" es mayor que mil");
}else{
    alert("por favor ingrese un numero de mayor valor");
}

let texto=prompt("Ingrese una palabra");
if ((texto == "hola") || (texto == "Hola") || (texto == "HOLA")){
    alert(texto + " para ti también");
} else{
    alert("por favor ingrese otra palabra, ¿qué es lo primero que se dice cuando llega alguien a tu casa?");
}


let numero1= parseInt(prompt ("Ingrese un numero"));
if ((numero1 >=10) && (numero1 <=50)){
    alert(numero1 +" es mayor a 10 y menor que 50. Listo!!");
}else if (numero1 >=10){
    alert("por favor ingrese otro numero, menor a 50");
}else if (numero1 <=10){
    alert("por favor ingrese otro numero, mayor a 10");
}else if (numero1 >=50){
    alert("por favor ingrese otro numero, menor a 50");
}

