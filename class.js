Array.prototype.sum = function() {
  let ret = 0;
  for(let i = 0; i < this.length; i++) {
    ret += this[i];
  }
  return ret;
}
Array.prototype.square = function() { 
return this.map(function(n) { return n*n; }); 
}
Array.prototype.cube = function() { 
return this.map(function(n) { return n*n*n; }); 
}
Array.prototype.average = function() { 
return this.sum() / this.length; 
}
Array.prototype.even = function() { 
return this.filter(function(item) { return 0 == item % 2; }); 
}
Array.prototype.odd = function() { 
return this.filter(function(item) { return 0 != item % 2; }); 
}
