let info = (str) => {
  console.log(str);
};
let People = function (){
  this.sayName = function(name){
    console.log('This name is '+name);
  }
  this.sayAge = function(age){
    console.log('This age is ' + age);
  }
}

module.exports = {info,People};