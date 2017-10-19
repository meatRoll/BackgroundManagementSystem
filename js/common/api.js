define(['jquery'], function () {
	var obj = {};
	'get post'.split(' ').forEach(function (val) {
		obj[val] = function (url, data, callback) {
			$[val]('/api/' + url, data, function (res) {
				if (res && res.code != 200) throw new Error(res.msg);
				if (callback) callback(res);
			});
		};
	});
	return obj;
});