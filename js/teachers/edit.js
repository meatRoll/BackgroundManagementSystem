define(['jquery', 'text!tpls/teachersEdit.html', 'template', 'api', 'datetime', 'language'], function ($, teachersEditTpl, template, api) {
	return function (tc_id) {
		api.get('teacher/edit', {
			tc_id: tc_id
		}, function (res) {
			$('.teachersEdit').remove();
			var $teachersEditTpl = $(template.render(teachersEditTpl, res.result));
			$teachersEditTpl.appendTo('body').modal()
				.on('submit', 'form', function () {
					api.post('teacher/update', $(this).serialize(), function (res) {
						$teachersEditTpl.modal('hide');
						$('aside .list-group .active').trigger('click');
					});

					return false;
				}).find(".add-datetime").datetimepicker({
					format: 'yyyy-mm-dd',
					autoclose: true,
					language: 'zh-CN',
					minView: 2,
					todayBtn: true,
					todayHighlight: true,
					keyboardNavigation: true,
					initialDate: new Date
				});
		});
	}
});