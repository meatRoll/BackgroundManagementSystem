define(['jquery', 'text!tpls/coursesBasic.html', 'text!tpls/coursesBasicSelect.html', 'template', 'api'], function ($, coursesBasicTpl, coursesBasicSelectTpl, template, api) {
	return function (cs_id) {
		api.get('course/basic', 'cs_id=' + cs_id, function (res) {
			var $coursesBasicTpl = $(template.render(coursesBasicTpl, res.result));

			$coursesBasicTpl
				.on('change', '.top-category', function () {
					api.get('category/child', 'cg_id=' + $(this).find('option:selected').attr('value'), function (res) {
						if (res == undefined) {
							$('.childs-category').html('');
							return;
						}
						$('.childs-category').html(template.render(coursesBasicSelectTpl, res.result));
					});
				}).on('submit', 'form', function () {
					api.post('course/update/basic', $(this).serialize(), function (res) {
						$('aside .list-group .active').trigger('click');
					});
					return false;
				});
			$('.courses-manage .content').html($coursesBasicTpl);
		});
	}
});