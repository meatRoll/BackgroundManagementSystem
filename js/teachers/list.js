define(['jquery', 'text!tpls/teachersList.html', 'teachers/view', 'teachers/add', 'teachers/edit', 'teachers/handle', 'teachers/clear', 'template', 'api'], function ($, teachersListTpl, teachersView, teachersAdd, teachersEdit, teachersHandle, teachersClear, template, api) {
	return function () {
		api.get('teacher', null, function (res) {
			var $temp = $(template.render(teachersListTpl, res));

			$temp.on('click', '.btn-view', function () {
					teachersView($(this).parent().attr('tc_id'));
				}).on('click', '.btn-add', teachersAdd)
				.on('click', '.btn-edit', function () {
					teachersEdit($(this).parent().attr('tc_id'));
				}).on('click', '.btn-handle', function () {
					teachersHandle($(this).parent().attr('tc_id'), $(this).attr('tc_status'));
				}).on('click', '.btn-clear', teachersClear)
;

			$('.menu-content').html($temp);
		});
	}
});