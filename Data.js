function sum(arr1,arr2) {
    let newAr = [];
    newAr.push(...arr1,...arr2);
    let object = {};
    let newobject = {};
    for(let i=0;i<newAr.length;i++){
      object[i]=newAr[i];
    }
    for(let prop in object ){
      let count = 0;
      for(let aux in object){
        if(object[prop]===object[aux]){
          count++;
        }
      }
      if(count==1){
        newobject[prop]=object[prop];
      }
    }
    console.log(object);
    console.log(newobject);
    let sum = 0;
    for(let prop in newobject){
      sum = sum + newobject[prop];
    }
    return sum;
  }
  let result = sum([12, 13, 6, 10],[13, 10, 16, 15, 17]);
  console.log(result);