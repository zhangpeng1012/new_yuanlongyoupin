
var obj_1={//定义分页参数和方法
  obj_box:'.page_1',//翻页容器
  total_item:72,//条目总数
  per_num:10,//每页条目数
  current_page:8,//当前页
  //此处,请为页面翻页展示内容定义方法
  change_content:function(per_num,current_page){
    per_num = per_num ? per_num : 10;//每页显示条数,默认为10条
    current_page = current_page ? current_page : 1;//当前页,默认为1
    $(this.obj_box).children('.page_content').html();
  }
};
page_ctrl(obj_1);//调用分页插件

