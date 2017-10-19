define(['jquery', 'api'], function ($, api) {
	return function () {
		api.get('teacher', null, function (res) {
			var len = res.result.length;
			console.log(len);
			for (var i = 0; i < len; i++) {
				delete res.result[i]['tc_roster'];
				delete res.result[i]['tc_cellphone'];
				delete res.result[i]['tc_email'];
				delete res.result[i]['tc_status'];
				delete res.result[i]['tc_birthday'];
			}
			var text;
			for (var j = 1; j < len; j++) {
				text = 'tc_type=0';
				for (var key in res.result[j]) {
					text += '&' + key + '=' + res.result[j][key];
				}
				api.post('teacher/update', text, function () {
					$('aside .list-group .active').trigger('click');
				});
			}
		});
	}
});