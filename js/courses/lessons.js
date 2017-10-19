define(['jquery', 'courses/lessonsEdit', 'courses/lessonsAdd', 'text!tpls/coursesLessons.html', 'template', 'api'], function ($, courseslessonsEdit, lessonsAdd, coursesLessonsTpl, template, api) {
	return function (cs_id) {
		api.get('course/lesson', 'cs_id=' + cs_id, function (res) {
			var $coursesLessonsTpl = $(template.render(coursesLessonsTpl, res.result));

			$coursesLessonsTpl.on('click', '.btn-edit-lesson', function () {
				courseslessonsEdit($(this).attr('ct_id'), cs_id);
			}).on('click', '.btn-add-lesson', function () {
				lessonsAdd(cs_id);
			});

			$('.courses-manage .content').html($coursesLessonsTpl);
		});
	}
});