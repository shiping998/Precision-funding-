/**
 * Created by Administrator on 2017/5/16.
 */
$(function () {
    $('#table').bootstrapTable({
        columns: [
		{
            field: 'box',
            title: '选择',
			checkbox: true,
        },{
            field: 'id',
            title: '一卡通 ID'
        }, {
            field: 'name',
            title: '姓名'
        }, {
            field: 'college',
            title: '学院'
        },{
            field:'grade',
            title:'年级'
        },{
           field:'poverty-level',
            title:'贫困等级'
        },{
			field:'consumption',
            title:'日平均消费'
        },{
			field:'paixing',
            title:'消费排名'
        },
		{
            field:'confir',
            title:'补助等级'
        },{
            field:'time',
            title:'时间'
        },{
           field:'tude',
           title:'审核状态'
        }
        ],
        data: [{
            id: 10000,
            name: '张三',
            college: '自动化学院',
            grade:'2014',
            tude:'待审核',
            paixing:'10',
            time:'2017-6',
            confir:'1'

        }, {
            id: 10002,
            name: '李四',
            college: '计算机学院',
            grade:'2016',
            tude:'待审核',
            paixing:'10',
            time:'2017-6',
            confir:'1'


        },
            {
                id: 10003,
                name: '王五',
                college: '机电学院',
                grade:'2015',
                tude:'待审核',
                paixing:'10',
                time:'2017-6',
                confir:'1'
            },
            {
                id: 10004,
                name: '赵六',
                college: '计算机学院',
                grade:'2016',
                tude:'待审核',
                paixing:'10',
                time:'2017-6',
                confir:'1'
            }]
    });
});
 function detailFormatter(index, row)
	{
        var html = [];
        $.each(row, function (key, value) {
            html.push('<p><b>' + key + ':</b> ' + value + '</p>');
        });
        return html.join('');
    }
	var $table = $('#table'),
        $calc = $('#calc'),
        selections = [];
	$calc.prop('disabled', !$table.bootstrapTable('getSelections').length);
	$calc.click(function () {
            var ids = getIdSelections();
            $table.bootstrapTable('remove', {
                field: 'id',
                values: ids
            });
            $calc.prop('disabled', true);
        });