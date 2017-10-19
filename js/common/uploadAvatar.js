define(['jquery', 'text!tpls/teachersAvatarUploader.html', 'upload'], function ($, teachersAvatarUploaderTpl) {
	return function () {
		$('.teacher-avatar-uploader').remove();

		var $teachersAvatarUploaderTpl = $(teachersAvatarUploaderTpl);

		$teachersAvatarUploaderTpl
			.on('submit', function () {
				$('#avatar-uploader').uploadify('upload', '*');

				return false;
			})
			.appendTo('body').modal()
			.find('#avatar-uploader').uploadify({
				'swf': '../../assets/uploadify/uploadify.swf',
				'uploader': '/api/uploader/avatar',
				'buttonText': '请选择上传的图片',
				'auto': false,
				'queueSizeLimit': 1,
				'fileObjName': 'tc_avatar',
				'onUploadSuccess': function (file, data, response) {
					var userInfo = JSON.parse(sessionStorage.getItem('userInfo'));
					var path = JSON.parse(data).result.path;
					userInfo.tc_avatar = path;
					sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
					$('.img-circle').attr('src', path);
					$teachersAvatarUploaderTpl.modal('hide');
				}
			});
	}
});