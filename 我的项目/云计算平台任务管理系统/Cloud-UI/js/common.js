
$(function()
{
	//导航控制
	$(".nav_entity ul li").hover(function()
	{
		var popuNav=$(this).find(".popu_nav");
		if(typeof(popuNav[0])=="undefined") return;//普通无下拉菜单
		$(".popu_nav").hide();
		$(this).addClass("active").siblings().removeClass("active");
		popuNav.show();
	},function(){
		$(this).removeClass("active");
		$(".popu_nav").hide();
	});
	
	//点击文本框
	$(".inputtxt,.ginput").click(function()
	{
		$(this).addClass("setfocus");
	}).blur(function(){
		$(this).removeClass("setfocus");
		});

	
	//下拉框
	$('select').not('[multiple]').each(function(index, element) {
			$(this).jqSelect();
		});
	//复选框
		//$(document).jqCheckbox();
		
	//隔行变色，鼠标移上变色 
	//$(".list_table tbody tr.tr_detail").addClass("odd");
	//$(".list_table  tbody tr.tr_detail:even").addClass("even");
	$(".list_table tbody tr").live("mouseover",function(){if($(this).hasClass("tr_detail_content")) return;$(this).addClass("on")})
	$(".list_table tbody tr").mouseout(function(){$(this).removeClass("on")});
	
	//阻止冒泡方法
	function stopPropagation(e) {
	e = e || window.event;
	if(e.stopPropagation) { //W3C阻止冒泡方法
		e.stopPropagation();
	} else {
		e.cancelBubble = true; //IE阻止冒泡方法
	}
	}

	//列表复选框点击事件
	$(".list_table tbody input:checkbox").click(function(e){
		
		if($(this).attr("checked"))
		{
			$(this).parent().parent().parent().addClass("curr")
		}
		else
		{
			$(this).parent().parent().parent().removeClass("curr")
		}
		
		stopPropagation(e);
		return;
		
		});
	
	//列表详情内容显示\隐藏控制
	$(".tr_detail").click(function(){

		var detailContent=$(this).next(".tr_detail_content");
		var a=$(this).find("td:last a");
		
		if(a.html()=="隐藏")
		{
			$(this).removeClass("curr");
			detailContent.hide();
			a.html("查看");
		}
		else
		{
			$(this).addClass("curr");
			//$(this).siblings().removeClass("curr");
			detailContent.show();
			//$(this).siblings().next(".tr_detail_content").hide();
			//$(this).siblings().find("td:last a").html("查看");
			a.html("隐藏");
		}
		
		
	});
	
	//fieldset操作 ********
	$('.x-tool-toggle,.x-fieldset-header-text').live('click',function() {
		var fieldset = $(this).parent().parent();
		if ($(fieldset).hasClass('x-fieldset-default')) {
			$(this).parent().parent().removeClass('x-fieldset-default').addClass('x-fieldset-collapsed');
			return;
		}
		if ($(fieldset).hasClass('x-fieldset-collapsed')) {
			$(this).parent().parent().removeClass('x-fieldset-collapsed').addClass('x-fieldset-default');
			return;
		}
	});
	

	//全选、反选
	$(".chkall").click(function()
	{
		var checked=$(this).attr("checked");
		if (typeof(checked)=="undefined") checked=false;
		$('.list_table input[type=checkbox],.page_box input[type=checkbox]').attr('checked',checked); 
		if(checked)$('.list_table input[type=checkbox]').parent().parent().parent().addClass("curr");
		else
		$('.list_table input[type=checkbox]').parent().parent().parent().removeClass("curr");
	});
	
	
	
})
