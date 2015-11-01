package cloud.common;
/**
 * @author yangzhi
 */
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class ConnectionFactory {
	private static String url="jdbc:mysql://localhost:3306/cloud";
	//采用JDBC的thin驱动的方式连接数据库，数据库的位置为本机
	private static String driverName="com.mysql.jdbc.Driver";
	//Oracle的驱动器的类名，固定 新版的为 oracle.jdbc.OracleDriver
	private static String username="root";
	private static String password="root";
	/*
	 * 生成一个数据库连接对象
	 */
	public static Connection getConnection(){	//Connection类型的方法
		Connection conn=null;
		try{
			//注册驱动
			Class.forName(driverName);
			//获取连接 一个工具类 用于管理驱动类
			conn=DriverManager.getConnection(url, username, password);
		}catch(Exception e){
			// Exception 代表所有的问题
			e.printStackTrace();
		}
		return conn;
	}
	public static void close(ResultSet rs,Statement stat,Connection conn){
		try{
			//最后打开的先关闭
			if(rs!=null){
			rs.close();
			}
			if(stat!=null){
				stat.close();
				}
			if(conn!=null){//conn=ConnectionFactory.getConnection();
				           //一旦执行成功，conn是一个对象不再是null，但若执行失败，则conn为null，则null.close无法执行,显示NullPointerException
				           //此处为避免空指针
				conn.close();
				}
		}catch(Exception e2){
			e2.printStackTrace();
		}	
	}
}