define(['jquery', 'text!tpls/categoryAdd.html', 'template', 'api'], function ($, categoryAddTpl, template, api) {
	return function () {
		$('.categoryAdd').remove();
		api.get('category/top', null, function (res) {
			var $categoryAddTpl = $(template.render(categoryAddTpl, res));

			$categoryAddTpl.on('submit', 'form', function () {
				api.post('category/add', $(this).serialize(), function (res) {
					$categoryAddTpl.modal('hide');
					$('aside .courses-category').trigger('click');
				});

				return false;
			}).appendTo('body').modal();
		});
	}
});