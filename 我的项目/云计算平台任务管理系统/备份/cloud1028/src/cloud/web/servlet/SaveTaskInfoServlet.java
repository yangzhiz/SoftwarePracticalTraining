package cloud.web.servlet;
/**
 * @author yangzhi
 */
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import cloud.bean.TaskInfo;
import cloud.dao.TaskInfoDaoImpl;


@SuppressWarnings("serial")
public class SaveTaskInfoServlet extends HttpServlet {
	private TaskInfoDaoImpl infodao=new TaskInfoDaoImpl();
	public void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		String serverurl=request.getParameter("serverurl");
		String taskname=request.getParameter("taskname");
		String scriptname=request.getParameter("scriptname");
		String scriptpath=request.getParameter("scriptpath");
		String appname=request.getParameter("appname");
		String apppath=request.getParameter("apppath");
		String resourcepath=request.getParameter("resourcepath");
		String taskdescription=request.getParameter("taskdescription");	
		TaskInfo taskinfo = new TaskInfo();
		taskinfo.setServerurl(serverurl);
		taskinfo.setTaskname(taskname);
		taskinfo.setScriptname(scriptname);
		taskinfo.setScriptpath(scriptpath);
		taskinfo.setAppname(appname);
		taskinfo.setApppath(apppath);
		taskinfo.setResourcepath(resourcepath);
		taskinfo.setTaskdescription(taskdescription);
		System.out.println(taskinfo.getScriptpath());
		infodao.saveTaskInfo(taskinfo);
		out.flush();
		out.close();
	}
}
