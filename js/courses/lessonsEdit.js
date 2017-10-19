define(['jquery', 'text!tpls/coursesLessonsEdit.html', 'template', 'api'], function($, coursesLessonsEditTpl, template, api){
	return function(ct_id, cs_id){
		$('.coursesLessonsEdit').remove();
		api.get('course/chapter/edit', 'ct_id='+ct_id, function(res){
			var $coursesLessonsEditTpl = $(template.render(coursesLessonsEditTpl, res.result));
			
			$coursesLessonsEditTpl.on('submit', 'form', function(){
				api.post('course/chapter/modify', $(this).serialize(), function(){
					$coursesLessonsEditTpl.modal('hide');
					var lessons = require('courses/lessons');
					lessons(cs_id);
				});

				return false;
			}).appendTo('body').modal();
		});
	}
});