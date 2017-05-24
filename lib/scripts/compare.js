/**
 * Created by Administrator on 2017/5/16.
 */
$(function () {
    initTable();
    initDate();
});

function doQuery(params){
    $('#demo-table').bootstrapTable('refresh');    //刷新表格
}

function initTable(){
    var url = "user.do?method=listUsers&random="+Math.random();
    $('#demo-table').bootstrapTable({
        method:'POST',
        dataType:'json',
        detailView:true,
        contentType: "application/x-www-form-urlencoded",
        cache: false,
        striped: true, //是否显示行间隔色
        sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
        url:url,
     
        width:$(window).width(),
        pagination:true,
        queryParams : queryParams,
        minimumCountColumns:2,
        pageNumber:1,                       //初始化加载第一页，默认第一页
        pageSize: 20,                       //每页的记录行数（*）
        pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
        uniqueId: "id",                     //每一行的唯一标识，一般为主键列
        responseHandler: responseHandler,
        columns: [
            {
                field: '',
                title: ' No.',
                formatter: function (value, row, index) {
                    return index+1;
                }
            },
            {
                field : 'id',
                title : '一卡通 ID',
                sortable : true
            }, {
                field : 'name',
                title : '姓名',
                sortable : true
            }, {
                field : 'grade',
                title : '年级'
            }, {
                field : 'cgrade',
                title : '学院'

            }, {
                field : 'pinkundengji',
                title : '贫困等级'

            }, {
                field : 'bujujine',
                title : '补助金额'

            }, {
                field : 'money',
                title : '日平均消费',
                sortable : true
            },
            {
                field : 'time',
                title : '时间'
            }],
    data:[{
        "id": "1",
        "name": "duanzheng",
        "grade":"2016",
        "cgrade":"计算机学院",
        "pinkundengji":"1",
        "buzhujine":"200",
        "money":"650",
        "time":"2016-9"
    }]


});
}
function queryParams(params) {
    var param = {
        orgCode : $("#orgCode").val(),
        userName : $("#userName").val(),
        startDate : $("#startDate").val(),
        endDate : $("#endDate").val(),
        limit : this.limit, // 页面大小
        offset : this.offset, // 页码
        order: params.order,
        ordername: params.sort,
        pageindex : this.pageNumber,
        pageSize : this.pageSize
    };
    return param;}
function responseHandler(res) {
    if (res) {
        return {
            "rows" : res.result,
            "total" : res.totalCount
        };
    } else {
        return {
            "rows" : [],
            "total" : 0
        };
    }
}