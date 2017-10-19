require.config({
	baseUrl: './js',
	paths: {
		jquery: './lib/jquery-3.2.1.min',
		bootstrap: '../assets/bootstrap-3.3.7-dist/js/bootstrap.min',
		template: '../tpls',
		text: './lib/text',
		tpls: '../tpls',
		template: './lib/template-web',
		assets: '../assets',
		datetime: '../assets/bootstrap-datetimepicker-master/js/bootstrap-datetimepicker.min',
		language: '../assets/bootstrap-datetimepicker-master/js/locales/bootstrap-datetimepicker.zh-CN',
		api: './common/api',
		upload: '../assets/uploadify/jquery.uploadify.min',
		echarts: '../assets/echarts/dist/echarts.min'
	},
	shim: {
		bootstrap: {
			deps: ['jquery']
		},
		language: {
			deps: ['datetime']
		},
		upload: {
			deps: ['jquery']
		}
	}
});

require(['jquery', 'common/logout', 'common/uploadAvatar', 'teachers/list', 'courses/list', 'category/list', 'chart/chart', 'bootstrap', 'common/checkLogin'], function ($, logout, uploadAvatar, teachersList, coursesList, categoryList, chart) {
	var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
	$('.profile img').attr('src', userInfo.tc_avatar);
	$('.profile h3').text(userInfo.tc_name);

	$('aside .list-group').on('click', '.list-group-item', function () {
		if ($(this).hasClass('teachers-manage')) teachersList();
		else if ($(this).hasClass('courses-manage')) coursesList();
		else if ($(this).hasClass('courses-category')) categoryList();
		else if ($(this).hasClass('charts-statistics')) chart();

		$(this).addClass('active').siblings().removeClass('active');
	});

	$('aside .avatar').on('click', uploadAvatar);

	$('.logout').on('click', logout)

	$('aside .list-group .active').trigger('click');
});