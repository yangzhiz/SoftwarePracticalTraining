package cloud.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import cloud.bean.User;

public class DBTest {
	// alt+/
	public static void main(String[] args) {
		// ��ojbc5/6/14.jar�ŵ�WEB-INF/libĿ¼��
		// 1.ע������ �쳣 ctrl+shift+o
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/cloud", "root", "root");
			String sql = "select UserId from User";//1����¼
			Statement stat=conn.createStatement();//ִ��SQL�Ĺ���
			ResultSet rs=stat.executeQuery(sql);//�õ�ָ��SQL���Ĳ�ѯ���
			while(rs.next()){
				String id=rs.getString("UserId");
				User u=new User();
				u.setUserid(id);
				System.out.println(u.getUserid());
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
