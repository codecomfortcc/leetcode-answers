const isValid=(s)=>{
  const arrayValues = s.split('');
  const stack = [];
  const openBrackets = ['(','{','['];
  const closeBrackets = [')','}',']'];
  const bracketPairs = {
    ')':'(',
    '}':'{',
    ']':'['
  };
  for(let i=0; i<arrayValues.length; i++){
    if(openBrackets.includes(arrayValues[i])) stack.push(arrayValues[i]);
  
    else if(closeBrackets.includes(arrayValues[i])){
      if(stack.length===0) return false;
      if(stack[stack.length-1]===bracketPairs[arrayValues[i]]) stack.pop();
      else return false;
    }
  }
  return stack.length===0;
}
console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); // false
