define(['jquery','cookie'],function ($){

	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	$('#LogoutBtn').click(function(){
		$.ajax({
			type:'post',
			url:'/api/logout',
			dataType:'json',
			success:function(data){
				console.log(data);
				location.href = '/main/login'
			}
		})
	})

	//检测用户是否登录
	var flag = $.cookie('PHPSESSID');
	if(!flag && location.pathname != '/main/login' ){
		location.href = '/main/login';
	}

	//获取cookie（头像信息）
	console.log($.cookie('loginInfo'));

	var loginInfo = $.cookie('loginInfo');
	loginInfo = loginInfo && JSON.parse(loginInfo);
	$('.aside .profile img').attr('src',loginInfo.tc_avatar);
	$('.aside .profile h4').html(loginInfo.tc_name);
})