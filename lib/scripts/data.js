/**
 * Created by Administrator on 2017/5/17.
 */
$(function(){
    /*初始化表格*/
    $("#goods").bootstrapTable({
        data: data
    });
    /*加载事件*/
    $("#goods")
        .on('click-row.bs.table', function (e, row, ele,field) {
            $("#eventInfo").text('点击行事件 当前商品名：'+ row.goodsName
                + '，价格：' + row.price
                + '，效期：' + row.date
                + '当前点击单元格field值为：' + field);
        })
        .on('dbl-click-row.bs.table', function (e, row, ele,field) {
            $("#eventInfo").text('双击行事件');
        })
        .on('check.bs.table', function (e, row,ele) {
            $("#eventInfo").text('checkbox选中事件');
        })
        .on('uncheck.bs.table', function (e, row,ele) {
            $("#eventInfo").text('checkbox取消选中事件');
        })
        .on('sort.bs.table', function (e, field, order) {
            var o;
            switch(order){
                case "desc":
                    o = "降序";
                    break;
                case "asc":
                    o = "升序";
                    break;
            }
            $("#eventInfo").text('排序事件 当前' + name + '列，以' + o + "排列");
        })
        .on('check-all.bs.table', function (e,dataArr) {
            $("#eventInfo").text('全选事件');
        })
        .on('uncheck-all.bs.table', function (e,dataArr) {
            $("#eventInfo").text('取消全选事件');
        })
        .on('load-success.bs.table', function (e, data) {
            $("#eventInfo").text('加载成功事件');
        })
        .on('load-error.bs.table', function (e, status) {
            $("#eventInfo").text('加载错误事件');
        })
        .on('column-switch.bs.table', function (e, field, checked) {
            var colName;
            switch(field){
                case "goodsName":
                    colName = "商品名称";
                    break;
                case "price":
                    colName = "价格";
                    break;
                case "date":
                    colName = "日期";
                    break;
            }
            if(checked){
                $("#eventInfo").text('筛选列事件 ' + colName + '列显示');
            }else{
                $("#eventInfo").text('筛选列事件 ' + colName + '列隐藏');
            }
        })
        .on('page-change.bs.table', function (e, number, size) {
            $("#eventInfo").text('切换页事件 当前页数：第' + number + "页，每页显示数量" + size + "条");
        })
        .on('search.bs.table', function (e, text) {
            $("#eventInfo").text('搜索事件');
        });
});