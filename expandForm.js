function expandedForm(num) {
  const str=String(num);
  const len=str.length;
  return [...str].map((digit,i)=>{
                      if(digit==='0') return '';
                      const zeros=len-i-1;
                      return digit+'0'.repeat(zeros);
                      }).filter(Boolean).join(' + '); //убираем пустые элементы и соединяем через +
  
}
