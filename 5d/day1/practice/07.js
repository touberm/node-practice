/* process.stdin.on('data',(data) =>{
  process.stdout.write(`data: `+ data);
}); */




/* 控制台登录 */


var users = {
  'admin':'admin0',
  'user1':'pwd1',
  'user2':'pwd2',
  'user3':'pwd3',
  'user4':'pwd4'
}

process.stdout.write('你好,请输入用户名:\n');

var username = '';

process.stdin.on('data',(input) => {
  input = input.toString().trim();
  if(!username){
    if(Object.keys(users).indexOf(input) === -1){
      process.stdout.write('对不起,用户名不存在!\n');
      process.stdout.write('请重新输入用户名:\n');

    }else{
      process.stdout.write('请输入密码:\n');
      username = input;
    }
  }else{
    if(users[username] === input){
      process.stdout.write('登录成功!\n');
    }else{
      process.stdout.write('密码错误!请重新输入:\n');
    }
  }

});