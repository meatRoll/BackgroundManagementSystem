define(['jquery', 'api'], function($, api){
	return function(){
		api.post('logout', null, function(res){
			sessionStorage.removeItem('userInfo');
			location.href = './login.html';
		});
	}
});