/*Una software factory registra la siguiente informacion de sus empleados:
Nombre,
edad (validar),
sexo (masculino - femenino - no binario),
puesto (programador - analista - Qa),
sueldo (entre 15000 y 70000).
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000*/

function mostrar() {
	var nombre;
	var edad;
	var sexo;
	var puesto;
	var sueldo;
	var promedioProg;
	var promedioAna;
	var promedioQa;
	var sueldoMax;
	var sueldoMaxSexo;
	var sueldoMaxFem;
	var nombreFemMax;

	var acumuladorProg = 0;
	var acumuladorAna = 0;
	var acumuladorQa = 0;
	var acumuladorProgNoBinario = 0;
	var contadorProg = 0;
	var contadorAna = 0;
	var contadorQa = 0;
	var flagSueldoMax = 1;
	var flagFemenino = 1;
	var contadorNoBinario = 0;

	do {


		do {
			nombre = prompt("Ingrese nombre: ");
		} while (!isNaN(nombre));

		do {
			edad = parseInt(prompt("ingrese edad: "));
		} while (isNaN(edad) || edad < 18 || edad > 65);

		do {
			sexo = prompt("Ingrese sexo: ");
		} while (sexo != "Masculino" && sexo != "Femenino" && sexo != "No Binario");

		do {
			puesto = prompt("Ingrese puesto de trabajo: ");
		} while (puesto != "Programador" && puesto != "Analista" && puesto != "Qa");

		do {
			sueldo = parseInt(prompt("Ingrese sueldo: "));
		} while (isNaN(sueldo) || sueldo < 15000 || sueldo > 70000);

	}
	while (prompt("Desea seguir ingresando?") == "Si");

	switch (puesto) {
		case "Programador":
			console.log("acumuladorProg", acumuladorProg)
			console.log("contadorProg", contadorProg)
			contadorProg++;
			acumuladorProg = acumuladorProg + sueldo;
			promedioProg = acumuladorProg / contadorProg;
			break;
		case "Analista":
			contadorAna++;
			acumuladorAna = acumuladorAna + sueldo;
			promedioAna = acumuladorAna / contadorAna;
			break;
		case "Qa":
			contadorQa++
			acumuladorQa = acumuladorQa + sueldo;
			promedioQa = acumuladorQa / contadorQa;
			break;
	}

	if (flagSueldoMax == true || sueldo > sueldoMax) {
		flagSueldoMax = false;
		sueldoMax = sueldo;
		sueldoMaxSexo = sexo;
	}

	if (flagFemenino && sexo == "Femenino" || sexo == "Femenino" && sueldo > sueldoMaxFem) {
		sueldoMaxFem = sueldo;
		nombreFemMax = nombre;
		flagFemenino = false;
	}

	if (puesto == "Programador" && sexo == "No Binario" && (sueldo > 20000 && sueldo < 55000)) {
		contadorNoBinario++;
	}

	
document.write("El promedio sueldos para cada puesto es: Programdor:" + promedioProg + " ,analista: " +promedioAna + ", QA: " + promedioQa + "<br>")
document.write("El sexo del que percibe el mayor sueldo es: " + sueldoMaxSexo + "<br>")
document.write("El empleado femenino con mayor sueldo es: " + nombreFemMax + "<br>")
document.write("La cantidad de empleados no binarios son: " + contadorNoBinario + "<br>")
}