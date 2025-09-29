function hexStringToRGB(hexString) {
  hexString=hexString.replace(/^#/,'');
  return{
    r:parseInt(hexString.slice(0,2),16),
    g:parseInt(hexString.slice(2,4),16),
    b:parseInt(hexString.slice(4,6),16),
  };
  //return new Map([['r: ',r],['g: ',g],['b: ',b]]); почему в условии map просят не понятно
  
}
