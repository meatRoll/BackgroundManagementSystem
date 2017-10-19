define(['jquery', 'text!tpls/coursesCreate.html', 'api'], function ($, coursesCreateTpl, api) {
	return function () {
		$('.coursesCreate').remove();
		var $coursesCreateTpl = $(coursesCreateTpl);

		$coursesCreateTpl
			.on('submit', 'form', function () {
				api.post('course/create', $(this).serialize(), function (res) {
					$coursesCreateTpl.modal('hide');
					$('aside .list-group .active').trigger('click');
				});

				return false;
			})
			.appendTo('body').modal();
	}
});