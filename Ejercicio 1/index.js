
var estudiantes = parseInt(prompt("Ingresa la cantidad de estudiantes: "));

var pesamenos40 = 0;
var pesa50 = 0;
var pesamenos60 = 0;
var pesa60 = 0;





for(var i=0; i<estudiantes; i++){

    var peso = parseInt(prompt("Ingresar el peso del estudiante (" + i + ") (KG):"));

    if(peso<40){

        pesamenos40++;

    }
    else if(peso>=40 && peso<=50){

        pesa50++;

    }
    else if(peso>50 && peso<60){
        
        pesamenos60++;

    }
    else if(peso >=60){

        pesa60++;

    }

}

alert("Alumnos que pesan menos de 40KG: " + pesamenos40);
alert("Alumnos que pesan mas de 40 Y Menos de 50: " + pesa50);
alert("Alumnos que pesan mas de 50 y menos de 60: " + pesamenos60);
alert("Alumnos que peesan mayor o igual a 60 KG: " + pesa60);