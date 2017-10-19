define(['jquery', 'text!tpls/coursesLessonsAdd.html', 'api'], function ($, coursesLessonsAddTpl, api) {
	return function (cs_id) {
		$('.coursesLessonsAdd').remove();
		$coursesLessonsAddTpl = $(coursesLessonsAddTpl);
		$coursesLessonsAddTpl.on('submit', 'form', function () {
			api.post('course/chapter/add', $(this).serialize() + '&ct_cs_id=' + cs_id, function (res) {
				$coursesLessonsAddTpl.modal('hide');
				var lessons = require('courses/lessons');
				lessons(cs_id);
			});
			return false;
		}).appendTo('body').modal();;
	}
});