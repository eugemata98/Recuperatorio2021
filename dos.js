/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
Curso de ingreso UTN FRA

*/
function mostrar() {
    var alumnos = 500;
    var i = 0;

    var nombre;
    var carrera;
    var sexo;
    var cantidadMaterias;
    var notaPromedio;
    var edad;
    var nombreMejorPromedioFisica;
    var promedioMejorFisica;
    var nombreAlumnaJoven;
    var edadAlumnaJoven;

    var cantidadMasMaterias;
    var nombreMasMaterias;
    var edadMasMaterias;



    var porcentajeQuimica;
    var porcentajeFisica;
    var porcentajeSistemas;

    var contadorQuimica = 0;
    var contadorFisica = 0;
    var contadorSistemas = 0;

    var flagMasMaterias = true;
    var flagMejorPromedioFisica = true;
    var flagAlumnaJoven = true;

    for (i; i < alumnos; i++) {

        do {
			nombre = prompt("Ingrese nombre: ");
		} while (!isNaN(nombre));
        do {
            carrera = prompt("Ingrese carrera: ");
        } while (carrera != "Quimica" && carrera != "Fisica" && carrera != "Sistemas");

        do {
            sexo = prompt("Ingrese sexo: ");
        } while (sexo != "Masculino" && sexo != "Femenino" && sexo != "No Binario");

        do {
            cantidadMaterias = parseInt(prompt("ingrese cantidad materias: "));
        } while (isNaN(cantidadMaterias) || cantidadMaterias < 1 || cantidadMaterias > 5);

        do {
            notaPromedio = parseInt(prompt("ingrese nota promedio: "));
        } while (isNaN(notaPromedio) || notaPromedio < 0 || notaPromedio > 10);

        do {
            edad = parseInt(prompt("ingrese edad: "));
        } while (isNaN(edad) || edad < 18 || edad > 65);


        switch (carrera) {
            case "Quimica":
                contadorQuimica++;
                acumuladorQuimica = acumuladorQuimica + notaPromedio;
                promedioQuimica = acumuladorQuimica / contadorQuimica;
                break;
            case "Fisica":
                contadorFisica++;
                acumuladorFisica = acumuladorFisica + notaPromedio;
                promedioFisica = acumuladorFisica / contadorFisica;
                break;
            case "Sistemas":
                contadorSistemas++;
                acumuladorSistemas = acumuladorSistemas + notaPromedio;
                promedioSistemas = acumuladorSistemas / contadorSistemas;
                break;
        }

        if(carrera == "Fisica" && (flagMejorPromedioFisica || notaPromedio > promedioMejorFisica)){
            flagMejorPromedioFisica = false;
            nombreMejorPromedioFisica = nombre;
            promedioMejorFisica = notaPromedio;
        }

        if(sexo == "Femenino" && (flagAlumnaJoven || edad < edadAlumnaJoven)){
            flagAlumnaJoven = false;
            edadAlumnaJoven = edad;
            nombreAlumnaJoven = nombre;
        }

        if(carrera != "Quimica" && (flagMasMaterias || cantidadMasMaterias < cantidadMaterias)){
            flagMasMaterias = false;
            nombreMasMaterias = nombre;
            cantidadMasMaterias = cantidadMaterias;
        }


        porcentajeFisica = contadorFisica / alumnos;
        porcentajeSistemas = contadorSistemas / alumnos;
        porcentajeQuimica = contadorQuimica / alumnos;

        document.write(" El nombre del mejor promedio de los alumnos que estudian Fisica: " + nombreMejorPromedioFisica + "<br>");

        document.write(" El nombre de la alumna mas joven: " + nombreAlumnaJoven+ "<br>");
        
        document.write("Porcentaje de estudiantes que estudia cada carrera.:quimica " + porcentajeQuimica + " fisica: " + porcentajeFisica + " sistemas; " + porcentajeSistemas+ "<br>");
    
        document.write(" La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.: " + edadMasMaterias + " nombre: " + nombreMasMaterias + "<br>");
    }
}
/**) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
Curso de ingreso UTN FRA */