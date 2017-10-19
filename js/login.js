$(function () {
	$('form').on('submit', function () {

		$.ajax({
			url: '/api/login',
			type: 'post',
			data: $(this).serialize(),
			success: function (res) {
				if (res.code == 200) {
					sessionStorage.setItem('userInfo', JSON.stringify(res.result));
					location.href = './';
				}
			}
		});

		return false;
	});
});