function isEvenOrOdd(number,callback){
  if(typeof number === 'number'){
    if(number % 2 == 0){
      callback(null,'当前传入的是偶数');
    }else{
      callback(null,'当前传入的是奇数');
    }
  }else{
    callback(new Error('不是数字!'));
  }
}

// isEvenOrOdd(20,(error,str)=>{
//   if(error) throw error;
//   console.log(str);
// });
// isEvenOrOdd(21,(error,str)=>{
//   if(error) throw error;
//   console.log(str);
// });
isEvenOrOdd('水电费',(error,str)=>{
  if(error) throw error;
  console.log(str);
});