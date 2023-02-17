

var cuenta = 0;
var interes = 0;
var total = 0;
var actual = 0;

for(var i=0; i<12 ; i++){

    cuenta += 250;
    actual = (cuenta * 1.25)/100;
    
    interes += actual;

    document.write("<br>");

    document.write("El esatdo actual de la cuenta es :" +  cuenta);

    document.write("<br>");

    document.write("La suma total de intereses es de: " + interes);

    document.write("<br>");


}

document.write("<br>");
document.write("<br>");
document.write("<br>");

total = interes + cuenta;

document.write("El total de intereses gandos en la cuenta es de: " + total );