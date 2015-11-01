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
		//�û��ڽ���������û���
		String password=request.getParameter("txtPwd");
		//�û��ڽ��������������
		User user=dao.findUserById(userid);
		if(user==null){
			System.out.println("�޴��û���");
			request.setAttribute("error", "�޴��û���");
			request.getRequestDispatcher("login.jsp").forward(request,response);
		}else{
			//���ݿ��м�¼
			System.out.println("�д��û���");
			//�����Ƿ���ȷ
			if(user.getPassword().equals(password)){
				   //������ȷ
					System.out.println("������ȷ��");
					request.getSession().setAttribute("user",user);
					request.getRequestDispatcher("taskreg.jsp").forward(request, response);
			}else{
					//�������
				    System.out.println("�������");
					request.setAttribute("error", "�������");
					request.getRequestDispatcher("login.jsp").forward(request, response);
			}
		} 
		out.flush();
		out.close();
	}
}
