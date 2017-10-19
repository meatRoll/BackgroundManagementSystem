define(['jquery', 'text!tpls/teachersAdd.html', 'api','datetime', 'language'], function ($, teachersAddTpl, api) {
	return function () {
		$('.teachersAdd').remove();
		$teachersAddTpl = $(teachersAddTpl);
		$teachersAddTpl.on('submit', 'form', function () {
			api.post('teacher/add', $(this).serialize(), function (res) {
				$teachersAddTpl.modal('hide');
				$('aside .list-group .active').trigger('click');
			});
			return false;
		}).appendTo('body').modal().find(".add-datetime").datetimepicker({
			format: 'yyyy-mm-dd',
			autoclose: true,
			language: 'zh-CN',
			minView: 2,
			todayBtn: true,
			todayHighlight: true,
			keyboardNavigation: true,
			initialDate: new Date
		});
	};
});