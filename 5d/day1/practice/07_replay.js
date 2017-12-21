var up = {
  'admin':'admin',
  'user1':'pwd1',
  'user2':'pwd2',
  'user3':'pwd3'
};

process.stdout.write('请输入用户名:\n');

var username = '';

process.stdin.on('data',function(input){
  input = input.toString().trim();
  if(!username){
    // 未输入用户名状态
    if(Object.keys(up).indexOf(input) === -1){
      // 输入的用户名在up中找不到
      process.stdout.write('对不起,用户名"'+input+'"不存在!\n请重新输入:\n');
    }else{
      // 用户名匹配成功
      username = input;
      process.stdout.write('请输入密码:\n');
    }
  }else{
    // 检测密码
    if(input === up[username]){
      process.stdout.write('登录成功!')
      process.exit();
    }else{
      process.stdout.write('对不起,密码错误!\n请重新输入密码:\n');
    }
  }
});
