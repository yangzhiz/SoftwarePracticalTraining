package cloud.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import cloud.bean.User;

public class DBTest {
	// alt+/
	public static void main(String[] args) {
		// 将ojbc5/6/14.jar放到WEB-INF/lib目录下
		// 1.注册驱动 异常 ctrl+shift+o
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection conn = DriverManager.getConnection(
					"jdbc:mysql://localhost:3306/cloud", "root", "root");
			String sql = "select UserId from User";//1条记录
			Statement stat=conn.createStatement();//执行SQL的工具
			ResultSet rs=stat.executeQuery(sql);//得到指定SQL语句的查询结果
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
