define(['jquery', 'api'], function ($, api) {
	return function () {
		api.get('category/top', null, function (res) {
			for (var i = 0, len = res.result.length; i < len; i++) {
				api.post('category/modify', 'cg_pid=' + res.result[i].cg_id + '&cg_name=' + res.result[i].cg_name + '&cg_id=' + res.result[i].cg_id, function () {
					$('aside .courses-category').trigger('click');
				});
			}
		});
	}
});