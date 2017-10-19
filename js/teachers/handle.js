define(['jquery', 'api'], function ($, api) {
	return function (tc_id, tc_status) {
		api.post('teacher/handle', {
			tc_id: tc_id,
			tc_status: tc_status
		}, function (res) {
			$('aside .list-group .active').trigger('click');
		});
	}
});