function ipv4Parser(ip, mask){
  //разбитие строк и их превращение в число
  const ipBytes=ip.split('.').map(Number);
  const maskBytes=mask.split('.').map(Number);
  //побитовые операции между айпи и маской
  const networkBytes=ipBytes.map((byte,i)=>byte &maskBytes[i]);
  //вычисние идентификатора,побитовая инверсия маски
  const hostBytes=ipBytes.map((byte,i)=>byte& (~maskBytes[i]&255));
  const networkBlock=networkBytes.join('.');
  const hostId=hostBytes.join('.');
  return [networkBlock, hostId];
  
}
const result=ipv4Parser("192.168.50.1","255.255.255.0");
console.log("Блок сети:",result.network);
console.log("Id хоста:",result.host);
