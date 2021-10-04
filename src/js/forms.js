function areNames(string) {  
  const regExp =  /[a-zA-Z]/i;
  const empty = ' ';
  let isText = string[0] === empty|| string[string.length - 1] === empty;
  if(isText) return false;
  if(regExp.test(string)) {
    string = string.replace(' ','-');
    string = string.split('-');
    if(string.length === 2) return true;
    return false;
  }  
  return false;
}

function isName(string) {  
  const regExp =  /[a-zA-Z]/i;
  const empty = ' ';
  let isText = string[0] === empty|| string[string.length - 1] === empty;
  if(isText) return false;
  if(regExp.test(string)) {
    string = string.replace(' ','-');
    string = string.split('-');
    if(string.length === 1) return true;
    return false;
  }  
  return false;
}

function isIDNumber(number) {
  const regExp =  /^[0-9]{1,10}$/
  let isNumber = regExp.test(number);
  if(isNumber) return true;
  return false;
}

function isEmail(string) {
  const regExp =  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  if(regExp.test(string)) return true; 
  return false;
}

export{isName, areNames, isIDNumber, isEmail};