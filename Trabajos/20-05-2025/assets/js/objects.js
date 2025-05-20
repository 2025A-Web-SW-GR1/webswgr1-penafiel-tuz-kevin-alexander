const kevin = {
    "nombre" : "Kevin",
    "apellido" : "Peñafiel",
    hijos : 0,
    casado : false,
    zapatos : undefined,
    ropa : {
        color : "rojo",
        talla : 41
    },
    mascotas : ['Pepin', 'Max', 'Tesoro'],
};

console.log(kevin);
// Acceder a las propiedades
kevin.nombre // "Kevin"
kevin["apellido"] // "Peñafiel"
// Modificar (reasignar)
kevin.nombre = "Kevin";
kevin["nombre"] = "Kevin";
// kevin = {}; ERROR
// Crear atributos
kevin.sueldo = 1.2;
kevin["gastos"] = 0.8;
// Eliminar propiedades
kevin.nombre = undefined;
delete kevin.nombre;