<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>克劳德云任务管理系统-用户登录</title>
<style type="text/css">
body {
	font-size:12px;
	margin:0;
	padding:0;
	font-family:宋体;
}

#Msg{padding-left:10px; color:#ff0000; position:absolute;}
</style>
<script type="text/javascript" src="js/bootstrap.js"></script>
</head>
<body>
<form action="LoginServlet" method=post name="login" onsubmit="return checkNull()">
<table width="100%"  height="100%" border="0" align="center" cellpadding="0" cellspacing="0">
	<tbody>
		<tr>
			<td>
				<table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
					<tr>
						<td height="561" style="background:url(images/loginbg.gif)">
							<table 

width="574" border="0" align="center" cellpadding="0" cellspacing="0">
								<tbody>
									<tr>
										<td height="238" width="574" 

style="background:url(images/login_tbg.jpg) bottom no-repeat">
											<div style="padding-left:30px;margin-top:20px;"><img src="images/logo.jpg" alt="" /></div>
										</td>
									</tr>
									<tr>
										<td height="190">
											<table width="100%" 

border="0" cellspacing="0" cellpadding="0">
												<tr>
													<td 

width="27" height="191" style="background:url(images/login_lbg.jpg) right no-repeat;">&nbsp;</td>
													<td 

width="518" style="background:url(images/login_cbg.jpg)">
														<table width="350" border="0" align="center" cellpadding="0" 

cellspacing="0">
															<tbody>
																<tr>
																	<td width="49" height="42" align="right" valign="middle">用户名：</td>
																	<td height="42" colspan="3" valign="middle">
																		<input type="text" name="txtUser" id="txtUser"  style="width:164px; 

height:25px; line-height:25px; background:url(images/inputbg.gif) repeat-x; border:solid 1px #d1d1d1; font-size:9pt; 

font-family:Verdana, Geneva, sans-serif;padding-left:3px;"> <span id="Msg"></span>
																	</td>
																</tr>
																<tr>
																	<td height="38" align="right" valign="middle">密 码：</td>
																	<td height="38" colspan="3" valign="middle">
																		<input type="password"  name="txtPwd"  id="txtPwd" style="width:164px; 

height:25px; line-height:25px; background:url(images/inputbg.gif) repeat-x; border:solid 1px #d1d1d1; font-size:9pt; padding-left:3px;

">
																		<span style="color:#ff0000;" id="msg2"></span>
																	</td>
																</tr>
																
																<tr>
																	<td height="55">&nbsp;</td>
																	<td width="109" height="55">
																		<input  type="image" src="images/login_btn.gif" id="SubmitBtn" />
																	</td>
																</tr>
															</tbody>
														</table>
													</td>
													<td 

width="29" style="background:url(images/login_rbg.jpg) left no-repeat;" >&nbsp;</td>
												</tr>
											</table>
										</td>
									</tr>
									<tr>
										<td height="133" valign="top" 

style="background:url(images/login_fbg.jpg) top no-repeat;">
											<div style="padding-top:45px; color:#333; text-align:center; font-family:Arial, Helvetica, sans-serif; color:#666;"> Copyright &copy; 2015 Cloud Technology Co., Ltd.</div>
										</td>
									</tr>
								</tbody>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</tbody>
</table>
</form>
</body>
</html>

<script type="text/javascript">

$("#SubmitBtn").click(function()
{
	
	var msg=$("#Msg");
	var posleft=0;
	var postop=0;
	
	if($("#txtUser").val()=="")
	{
		msg.html("用户名不能为空！");
		posleft=$("#txtUser").offset().left+$("#txtUser").width();
		postop=$("#txtUser").offset().top+10;
		msg.css({'left':posleft,'top':postop});
		$("#txtUser").focus();
		return;
	}
	
	if($("#txtPwd").val()=="")
	{
		msg.html("密码不能为空！");
		posleft=$("#txtPwd").offset().left+$("#txtPwd").width();
		postop=$("#txtPwd").offset().top+10;
		msg.css({'left':posleft,'top':postop});
		$("#txtPwd").focus();
		return;
	}
	
	
	if($("#txtCode").val()=="")
	{
		msg.html("验证码不能为空！");
		posleft=$("#txtCode").offset().left+$("#txtCode").width()+60;
		postop=$("#txtCode").offset().top+10;
		msg.css({'left':posleft,'top':postop});
		$("#txtCode").focus();
		return;
	}
	location.href="main.shtml";
	
})

</script>

