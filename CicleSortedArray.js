function isCircleSorted( arr ){
  let countDrops=0;
  for(let i=0;i<arr.length;i++)
    {
      const curr=arr[i];
      const next=arr[(i+1)%arr.length]; //круговой переход
      if(curr>next) countDrops++;
    }
  return countDrops<=1;
}
