const arrEmployees = [
    {id : 1001, 
    name : 'Pedro',
    age : 30, 
    Job : 'Desarrollador Senior'},

    {id : 1002, 
    name : 'Josue',
    age : 25, 
    Job : 'Diseniador'},

    {id : 1003, 
    name : 'Abril',
    age : 17,     
    Job : 'Documentador'},

    {id : 1004, 
    name : 'Paulo', 
    age : 32,
    Job : 'Gestor'},

    {id : 1005, 
    name : 'Abril', 
    age : 23,
    Job : 'Desarrollador Junior'},
    
    ];

// 1. Crear arreglo con 5 Elementos
console.log('** 1. Crear arreglo con 5 Elementos **')    
console.log(arrEmployees);

// 2. Recorrer arreglo y listar los nombres

console.log('** 2. Recorrer arreglo y listar los nombres **')    

arrEmployees.forEach(employee => {
    console.log('Nombres:', employee.name);
});

// 3. Recorrer el arreglo y devolver el promedio de edades


console.log('** 3. Recorrer el arreglo y devolver el promedio de edades **')

let iSumaEdades = 0;

arrEmployees.forEach(employee => {
    iSumaEdades+=  employee.age ;

});

let nPromedio = iSumaEdades / arrEmployees.length;
console.log('Suma Edades:', iSumaEdades, 'Lineas en Arreglo:', arrEmployees.length, 'Promedio:', nPromedio);


// 4. Recorrer el arreglo y decir cuantos mayores de edad hay


console.log('** 4. Recorrer el arreglo y decir cuantos mayores de edad hay **')

let iMayoresEdad = 0;

arrEmployees.forEach(employee => {

    if (employee.age > 17) {
        iMayoresEdad++;
    }

});  

console.log('Mayores de edad:', iMayoresEdad);
