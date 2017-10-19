define(['jquery', 'text!tpls/categoryList.html', 'template', 'category/add', 'category/edit', 'category/clear', 'api'], function ($, coursesListTpl, template, categoryAdd, categoryEdit, categoryClear, api) {
	return function () {
		api.get('category', null, function (res) {
			var $temp = $(template.render(coursesListTpl, res));

			$temp.on('click', '.btn-add', categoryAdd)
				.on('click', '.btn-edit', function () {
					categoryEdit($(this).attr('cg_id'));
				}).on('click', '.btn-clear', categoryClear);

			$('.menu-content').html($temp);
		});
	}
});