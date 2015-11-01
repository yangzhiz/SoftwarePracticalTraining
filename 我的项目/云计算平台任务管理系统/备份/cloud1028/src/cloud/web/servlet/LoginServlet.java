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

import cloud.bean.User;
import cloud.dao.UserDaoImpl;

@SuppressWarnings("serial")
public class LoginServlet extends HttpServlet {
	private UserDaoImpl dao=new UserDaoImpl();
	public void service(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		request.setCharacterEncoding("utf-8");
		response.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		String userid=request.getParameter("txtUser");
		//用户在界面输入的用户名
		String password=request.getParameter("txtPwd");
		//用户在界面上输入的密码
		User user=dao.findUserById(userid);
		if(user==null){
			System.out.println("无此用户！");
			request.setAttribute("error", "无此用户！");
			request.getRequestDispatcher("login.jsp").forward(request,response);
		}else{
			//数据库有记录
			System.out.println("有此用户。");
			//密码是否正确
			if(user.getPassword().equals(password)){
				   //密码正确
					System.out.println("密码正确。");
					request.getSession().setAttribute("user",user);
					request.getRequestDispatcher("taskreg.jsp").forward(request, response);
			}else{
					//密码错误
				    System.out.println("密码错误！");
					request.setAttribute("error", "密码错误！");
					request.getRequestDispatcher("login.jsp").forward(request, response);
			}
		} 
		out.flush();
		out.close();
	}
}
