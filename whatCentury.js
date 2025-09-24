function whatCentury(year)
{
  //округление века
  let century=(year/100)|0;
  
  //век для границы дат
  if(year%100===0)
    {
      century=century;
    }
  else
    {
      century=century+1;
    }
  let result=century;
  //суффиксы
  if(century%100>=11 && century%100 <=13)
  {
    result=century+"th";
  }
  else if(century%10===1)
  {
    result=century+"st";
  }
  else if(century%10===2)
  {
    result=century+"nd";
  }
  else if(century%10===3)
  {
    result=century+"rd";
  }
  else
  {
    result=century+"th";
  }
  

  return result;
  
}
whatCentury(1999);
