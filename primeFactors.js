function primeFactors(n){
  let result="";
  let divisor=2;
  while(divisor*divisor<=n)
    {
      let count=0;
      while(n%divisor===0)
        {
          n/=divisor;
          count++;
        }
      if(count>0)
        {
          result+=count>1? `(${divisor}**${count})`:`(${divisor})`;
        }
      divisor++;
    }
  if(n>1)result +=`(${n})`;
  return result;
}
console.log(primeFactors(89240));
