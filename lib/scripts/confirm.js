/**
 * Created by Administrator on 2017/5/16.
 */
$(function () {
    $('#table').bootstrapTable({
        columns: [{
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
            field:'ave',
            title:'日平均消费'
        },{
            field:'paixing',
            title:'消费排行'
        },{
            field:'time',
            title:'时间'
        },{
            field:'subsidy',
            title:'补助等级'
        },{
            field:'money',
            title:'补助金额'
        }
        ],
        data: [{
            id: 1,
            name: '李思捷',
            college: '计算机学院',
            grade:'2016',
            ave:'15',
            paixing:'10',
            time:'2017-6',
			subsidy:'1',
			money:'400'
			

        }, {
            id: 2,
            name: '李天翔',
            college: '计算机学院',
            grade:'2016',
            ave:'16',
            paixing:'10',
            time:'2017-6',
			subsidy:'1',
			money:'400'

            
        },
            {
                id: 3,
                name: '李四光',
                college: '计算机学院',
                grade:'2016',
                ave:'17',
                paixing:'10',
                time:'2017-6',
				subsidy:'1',
			money:'400'
            },
            {
                id: 4,
                name: '高斯',
                college: '计算机学院',
                grade:'2016',
                ave:'18',
                paixing:'10',
                time:'2017-6',
				subsidy:'1',
			money:'400'
            }]
    });
});
