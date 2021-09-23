import { expect,test, result} from './test-library/test-library.js'
import {isEmpty, wasIncremented, wasDecremented,getTotal} from './products.js'
import {areNames,isName, isIDNumber, isEmail} from './forms.js'

/*** TÍTULO DE CONSOLA */
console.log(`\n%c      TESTING     `,`background: lime; color:black;`);

/** TEST VERIFICAR ARRAYS IGUALES */
let array;

array = [2];
const TestEqual = expect(array).toEqual([2])
test("Arrays son iguales",TestEqual) 

/** TEST VERIFICAR ARRAY VACIO */
array = [];
const TestEmpty = expect(isEmpty(array)).toBeTruthy()
test("Comprobar si array vacio",TestEmpty) 

/** AUMENTÓ LA CANTIDAD DEL PRODUCTO SELECCIONADO */

let products = [
    {
        id: 1,
        name: "Coca Cola",
        price: 2.50,
        quantity:1
    }
    ,
    {
        id: 2,
        name: "Coca Cola",
        price: 1.30,
        quantity:2
    }
];

const TestIncrementaCantidad = expect(wasIncremented(products, 2)).toBeTruthy()
test("Agregar producto a json",TestIncrementaCantidad) 

/** DECREMENTAR CANTIDAD DE PRODUCTO */

const TestDecrementar = expect(wasDecremented(products, 1)).toBeTruthy()
test("Disminuir la cantidad de producto",TestDecrementar)


/** OBTENER EL TOTAL A PAGAR */
products = [
    {
        id: 1,
        name: "Coca Cola",
        price: 2.50,
        quantity:1
    }
    ,
    {
        id: 2,
        name: "Coca Cola",
        price: 1.00,
        quantity:2
    }
];

const TestObtenerTotal = expect(getTotal(products)).toEqual(4.50)
test("Obtener el total",TestObtenerTotal)

/* TESTS PARA FORMULARIOS */
/* CADENA DE TEXTO*/
let string;

string = "hola mundo";
let TestNombres = expect(areNames(string)).toBeTruthy()
test(`'${string}' son dos nombres`,TestNombres)

string = "hola mundo ";
TestNombres = expect(areNames(string)).toBeFalsy()
test(`'${string}' no son dos nombres`,TestNombres)

string = " hola mundo ";
TestNombres = expect(areNames(string)).toBeFalsy()
test(`'${string}' no son dos nombres`,TestNombres)


/*** ES SOLO NUMEROS */
string = "032343232";
let TestCedula = expect(isIDNumber(string)).toBeTruthy()
test(`'${string}' es número de cédula`,TestCedula)

string = "032343232 ";
TestCedula = expect(isIDNumber(string)).toBeFalsy()
test(`'${string}' no es número de cédula`,TestCedula)
// TEST UN SOLO NOMBRE
let TestNombre;
string = "Jorge";
TestNombre = expect(isName(string)).toBeTruthy()
test(`'${string}' es un solo nombre`, TestNombre)


string = "Jorge ";
TestNombre = expect(isName(string)).toBeFalsy()
test(`'${string}' no es un solo nombre`,TestNombre)

string = " Jorge ";
TestNombre = expect(isName(string)).toBeFalsy()
test(`'${string}' no es un solo nombre`,TestNombre)

// VERIFICAR EMAIL
string = "mar_09877.uy@gm.com";
TestNombre = expect(isEmail(string)).toBeTruthy()
test(`'${string}' Es un correo valido`,TestNombre)


string = " mar_09877.uy@gm.com ";
TestNombre = expect(isEmail(string)).toBeFalsy()
test(`'${string}' Es un correo invalido`,TestNombre)

/** MOSTRAR TOTAL TESTS OK Y TESTS CON ERRORES*/
result();
