function sum(arr1,arr2) {
    let newArr = [];
    let sum ;
    const res1 = arr1.filter(item=> arr2.includes(item)===false);
    const res2 = arr2.filter(item=> arr1.includes(item)===false);
    newArr.push(...res1,...res2);
    sum = newArr.reduce((acc,cur)=>acc+cur);
    console.log(res1,res2);
    return sum;
  }
  let result = sum([12, 13, 6, 10],[13, 10, 16, 15, 17]);
  console.log(result);