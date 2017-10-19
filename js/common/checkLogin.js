define([], function() {
	if(sessionStorage.getItem('userInfo') === null) location.href = './login.html';
});