define(['jquery', 'api', 'text!tpls/chart.html', 'echarts'], function ($, api, chartTpl, echarts) {
	return function () {
		$('.menu-content').html($(chartTpl));
		api.get('teacher', null, function (res) {
			var data = [{
					value: 0,
					name: '男'
				},
				{
					value: 0,
					name: '女'
				}
			];

			res.result.forEach(function (val, i) {
				data[val.tc_gender].value++;
			});

			var myChart = echarts.init(document.getElementById('teachers-chart'));

			option = {
				title:{
					show: true,
					text: '讲师男女比例分布图',
					x: 'middle',
					textAlign: 'center',
					textStyle: {
						fontSize: 30,
						fontWeight: 'bold'
					}
				},
				tooltip: {
					trigger: 'item',
					formatter: "{a} <br/>{b}: {c} ({d}%)"
				},
				legend: {
					orient: 'vertical',
					x: 'left',
					y: 'middle',
					data: ['男', '女'],
					textStyle:{
						fontWeight: 'bold',
						fontSize: 24
					},
					itemGap: 30,
					itemWidth: 50,
					itemHeight: 25
				},
				series: [{
					name: '男女比例',
					type: 'pie',
					center: ['50%', '55%'],
					radius: ['50%', '80%'],
					avoidLabelOverlap: false,
					label: {
						normal: {
							show: false,
							position: 'center'
						},
						emphasis: {
							show: true,
							textStyle: {
								fontSize: '30',
								fontWeight: 'bold'
							}
						}
					},
					labelLine: {
						normal: {
							show: false
						}
					},
					data: data
				}]
			};

			myChart.setOption(option);
		});
	}
});