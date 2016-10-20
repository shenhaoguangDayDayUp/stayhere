//验证登录
//当用户名输入框失去焦点时进行ajax验证
$('#uname').blur(function(){
	var uname = $(this).val();
	$.ajax({
		url: '../api/checkLogin.php',
		type: 'post',
		data: { username: uname },
		success: function(data){
			console.log(data);
			if(data == 0){
				$('#unameError').html('您输入的用户名不存在，请重新输入！');
				$('#pswError').html('');
				// $('#submit').attr('disabled','true');
			}else if(data == 1){
				$('#unameError').html('');
				// $('#submit').removeAttr('disabled');
			}
		}
	});
});

//点击提交按钮后进行用户名和密码验证
$('#submit').click(function(){
	var uname = $('#uname').val();
	var psw = $('#psw').val();
	var isRemember = $("#isRemember").is(':checked');
	$.ajax({
		url: '../api/checkLogin.php',
		type: 'post',
		data: { username: uname, password: psw, rememberInfo: isRemember},
		success: function(data){
			console.log('点击'+data);
			if(data == 2){

				// $('#pswError').html('');
				//location.href="./index.php";
				console.log('数据为2');
			}else if(data == 3){
				$('#pswError').html('您输入的密码有误，请确认后重新输入！');
			}
		}
	})
})

//验证注册
function isEmail(emailStr){
	var regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
	return regEmail.test(emailStr); 
}
function isPassword(pswStr){
	var regPsw = /^[a-zA-Z]\w{5,17}$/;
	return regPsw.test(pswStr);
}

$('#email').blur(function(){
	var email = $('#email').val();
	console.log(isEmail(email));
	$.ajax({
		url: '../api/checkRegister.php',
		type: 'post',
		data : { username: email},
		success: function(data){
			if(data == 1){
				$('#emailError').html('你的邮箱已被注册，请更换邮箱。');
				$('#register').attr('disabled','true');
			}else if(data != 1 && isEmail(email)) {
				$('#emailError').html('');
			}else if(data != 1 && !isEmail(email)) {
				$('#emailError').html('邮箱格式有误');
			}
		}
	})
});



$('#psw').blur(function(){
	var psw = $('#psw').val();
	if(!isPassword(psw)){
		$('#pswError').html('密码以字母开头,包含数字、下划线，6~18位');
	}else{
		$('#pswError').html('');
	}
});


$('#register').click(function(){
	var email = $('#email').val();
	var psw = $('#psw').val();
	if(isEmail(email) && isPassword(psw)){
		$('#register').removeAttr('disabled');
		alert('注册成功！请使用邮箱名和密码进行登录');
		//发送数据到后台存储在数据库里
		$.ajax({
			url: '../api/checkRegister.php',
			type: 'post',
			data: { username: email, password: psw, register: true},
			success: function(data){
				 console.log(data);
			}
		})
		//location.href="./login.php";

	}
});