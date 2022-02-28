// reverse string
function reverseStr(text){
  if(!text || text.length < 2 || typeof text !== 'string'){
  console.log("Not a string");
    return 'Not a string' 
  }
  let reversedString = "";
  for(let i=text.length; i>0; i--){
    let char = text[i-1];
    reversedString+= char;
  }
  console.log(reversedString);
  return reversedString;
}

function reverse2(text){
  if(!text || text.length < 2 || typeof text !== 'string'){
  console.log("Not a string");
    return 'Not a string' 
  }
  console.log(text.split('').reverse().join(''))
  return text.split('').reverse().join('')
}

reverse2("my name is aniruddha");