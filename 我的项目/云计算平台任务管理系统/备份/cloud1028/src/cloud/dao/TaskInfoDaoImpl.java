package cloud.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import cloud.bean.TaskInfo;

import cloud.bean.TaskInfo;
import cloud.common.ConnectionFactory;

public class TaskInfoDaoImpl {
	public void saveTaskInfo(TaskInfo taskinfo) {
		String serverurl = taskinfo.getServerurl();
		String taskname = taskinfo.getTaskname();
		String scriptname = taskinfo.getScriptname();
		String scriptpath = taskinfo.getScriptpath();
		scriptpath = scriptpath.replaceAll("\\\\", "\\\\\\\\");
		String appname = taskinfo.getAppname();
		String apppath = taskinfo.getApppath();
		apppath = apppath.replaceAll("\\\\", "\\\\\\\\");
		String resourcepath = taskinfo.getResourcepath();
		resourcepath = resourcepath.replaceAll("\\\\", "\\\\\\\\");
		String taskdescription = taskinfo.getTaskdescription();
		System.out.println(taskinfo.getScriptpath());
		String sql="insert into taskinfo(TaskID,ServerURL,TaskName,ScriptName,ScriptPath,AppName,AppPath,ResourcePath,Remark) values ('1','"+serverurl+"','"+taskname+"','"+scriptname+"','"+scriptpath+"','"+appname+"','"+apppath+"','"+resourcepath+"','"+taskdescription+"')";
		Connection conn=null;
		PreparedStatement pstat=null;//PreparedStatement继承了statement的所有功能，它包含了已编译的SQL语句，执行效率要更高
		try {
			conn=ConnectionFactory.getConnection();
			pstat=conn.prepareStatement(sql);
			pstat.execute();
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}finally{
			ConnectionFactory.close(null, pstat, conn);
		}
	}
}
