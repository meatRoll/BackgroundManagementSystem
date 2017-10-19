define(['jquery', 'text!tpls/teachersView.html', 'template', 'api'], function ($, teachersViewTpl, template, api) {
	return function (tc_id) {
		api.get('teacher/view', {
			tc_id: tc_id
		}, function (res) {
			$('.teachersView').remove();
			$teachersViewTpl = $(template.render(teachersViewTpl, res.result));
			$teachersViewTpl.appendTo('body').modal();
		});
	}
});