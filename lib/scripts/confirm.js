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
            field:'tude',
            title:'审核状态'
        },{
            field:'paixing',
            title:'消费排行'
        },{
            field:'time',
            title:'时间'
        }
        ],
        data: [{
            id: 1,
            name: 'Item 1',
            college: '计算机学院',
            grade:'2016',
            tude:'待审核',
            paixing:'10',
            time:'2017-6'

        }, {
            id: 2,
            name: 'Item 1',
            college: '计算机学院',
            grade:'2016',
            tude:'待审核',
            paixing:'10',
            time:'2017-6'

            
        },
            {
                id: 3,
                name: 'Item 1',
                college: '计算机学院',
                grade:'2016',
                tude:'待审核',
                paixing:'10',
                time:'2017-6'
            },
            {
                id: 4,
                name: 'Item 1',
                college: '计算机学院',
                grade:'2016',
                tude:'待审核',
                paixing:'10',
                time:'2017-6'
            }]
    });
});
