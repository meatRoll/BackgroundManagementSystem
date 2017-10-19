define(['jquery', 'text!tpls/categoryEdit.html', 'template', 'api'], function ($, categoryEditTpl, template, api) {
	return function (cg_id) {
		$('.categoryEdit').remove();

		api.get('category/edit', {
			cg_id: cg_id
		}, function (res) {
			res.result.top.unshift({
				cg_id: 0,
				cg_name: '顶级分类'
			});

			var $categoryEditTpl = $(template.render(categoryEditTpl, res.result));

			$categoryEditTpl.on('submit', 'form', function () {
				api.post('category/modify', $(this).serialize(), function (res) {
					$categoryEditTpl.modal('hide');
					$('aside .courses-category').trigger('click');
				});

				return false;
			}).appendTo('body').modal();
		});
	}
});