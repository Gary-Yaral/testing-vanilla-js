let OKs = 0;
let ERRORs = 0;
let e;
class Expect{
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

    toBeFalsy(){
        if(this._firsValue === false){
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

export function test(title, test){
    if(test === true){
        console.log(title);
        console.log(`%c TEST: OK 👌`,`background:#000; color:lime; font-weight: bolder`)
        OKs++;
    }

    if(test === false){
        console.log(title);
        console.log(`%c TEST: ERROR\n Expected: ${test.expected}\n Received: ${test.received}\n ${detectErrorLine(e)}`,`background:RED; color:white`);
        ERRORs++;
    }

    if(test instanceof Object){
        console.log(title);
        console.log(`%c TEST: ERROR\n Expected: ${test.expected}\n Received: ${test.received}\n ${detectErrorLine(e)}`,`background:RED; color:white`);
        ERRORs++;
    }
}

function expect(value){
    e = Error();
    let expected = new Expect(value)
    return expected
}

function result(){
    console.log(`\n%c     RESULTS      `+`\n%c TESTS PASSED: ${OKs}  `+`\n%c TESTS ERRORS: ${ERRORs}  `,`border-top: 1px solid black; font-weight: bolder`, `background:#000; color:lime; font-weight: bolder`,`background:red; color:white; font-weight: bolder`);
}

export {expect, result}