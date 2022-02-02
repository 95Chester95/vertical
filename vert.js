function showVerticalMessage(str) {
  let result = '';
  if ( str != result) {
    let m = 'м';
    result += str.startsWith(m) ? m.toUpperCase() : str[0]; 
    for ( let char of str.slice(1, 10)) {
      result += `\n${char}`;
    } 
  return result;
  }
}

console.log(showVerticalMessage('Марафон'));
console.log(showVerticalMessage('321321'));