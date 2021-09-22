import {isEmpty, wasAdded, decrementQuantity,getTotal} from './products.js'


let counterOKs = 0;
let counterErrors = 0;
class expect{
    constructor(firsValue){
        this._firsValue = firsValue
    }

    toEqual(secondValue){
        if(this._firsValue instanceof Array && secondValue instanceof Array){
            if(this._firsValue.length === secondValue.length){
                for(let i = 0; i < this._firsValue; i++){
                    if(this._firsValue[i] !== secondValue[i]){
                        return {
                            response: false,
                            expected: this._firsValue,
                            received: secondValue
                        };
                    }
                }
                return true
            }
            return {
                response: false,
                expected: this._firsValue,
                received: secondValue
            };         
        }

        if(Number.isFinite(this._firsValue) && Number.isFinite(secondValue) ){
            if(this._firsValue === secondValue){
                return true;
            }
            return {
                response: false,
                expected: this._firsValue,
                received: secondValue
            };
        }
    }

    toBeTruthy(){
        if(this._firsValue === true){
            return true;
        }else{
            return {
                response: false,
                expected: true,
                received: this._firsValue
            }
        }
    }
}

function detectErrorLine(e){
    let line = e.stack.toString().split('/');
    let length = line.length;
    let lastLine = line[length - 1];
    length = lastLine.split(':').length
    line = lastLine.split(':')[length - 2];
    return `Error en línea: ${line}` 
}

function resultColor(title, test, e){
    if(test === true){
        console.log(title);
        console.log(`%c TEST: OK 👌`,`background:#000; color:lime; font-weight: bolder`)
        counterOKs++;
    }

    if(test === false){
        console.log(title);
        console.log(`%c TEST: ERROR\n Expected: ${test.expected}\n Received: ${test.received}\n ${detectErrorLine(e)}`,`background:RED; color:white`);
        counterErrors++;
    }

    if(test instanceof Object){
        console.log(title);
        console.log(`%c TEST: ERROR\n Expected: ${test.expected}\n Received: ${test.received}\n ${detectErrorLine(e)}`,`background:RED; color:white`);
        counterErrors++;
    }
   
}
/*** TÍTULO DE CONSOLA */
console.log(`\n%c      TESTING     `,`background: lime; color:black;`);

/** TEST VERIFICAR ARRAYS IGUALES */
const object1 = [];
const TestEqual = new expect(object1).toEqual([])
resultColor("Arrays iguales",TestEqual, new Error()) 

/** TEST VERIFICAR ARRAY VACIO */
const object2 = [];
const TestEmpt = new expect(isEmpty(object2)).toBeTruthy()
resultColor("Comprobar si array vacio",TestEmpt, new Error()) 

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

const TestAgregado = new expect(wasAdded(products, 2)).toBeTruthy()
resultColor("Agregar producto",TestAgregado, new Error()) 

/** DECREMENTAR CANTIDAD DE PRODUCTO */

const TestDecrementar = new expect(decrementQuantity(products, 1)).toBeTruthy()
resultColor("Disminuir la cantidad de producto",TestDecrementar, new Error())


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

const TestObtenerTotal = new expect(getTotal(products)).toEqual(4.50)
resultColor("Obtener el total",TestObtenerTotal, new Error())

/** MOSTRARNÜMERO DE TESTS OK Y ERRORES */
console.log(`\n%c     RESULTS      `+`\n%c TESTS PASSED: ${counterOKs}  `+`\n%c TESTS ERRORS: ${counterErrors}  `,`border-top: 1px solid black; font-weight: bolder`, `background:#000; color:lime; font-weight: bolder`,`background:red; color:white; font-weight: bolder`)