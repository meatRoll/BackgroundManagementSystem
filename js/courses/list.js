define(['jquery', 'text!tpls/coursesList.html', 'template', 'api', 'courses/lessons', 'courses/basic', 'courses/create'], function ($, coursesListTpl, template, api, lessons, basic, create) {
	return function () {
		api.get('course', null, function (res) {
			$temp = $(template.render(coursesListTpl, res));

			$temp.on('click', '.btn-edit-chapter', function(){
				lessons($(this).parent().attr('cs_id'));
			}).on('click', '.btn-edit-basic', function(){
				basic($(this).parent().attr('cs_id'));
			}).on('click', '.add-course .btn-create', create);

			$('.menu-content').html($temp);
		});
	}
})