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
	//����JDBC��thin�����ķ�ʽ�������ݿ⣬���ݿ��λ��Ϊ����
	private static String driverName="com.mysql.jdbc.Driver";
	//Oracle�����������������̶� �°��Ϊ oracle.jdbc.OracleDriver
	private static String username="root";
	private static String password="root";
	/*
	 * ����һ�����ݿ����Ӷ���
	 */
	public static Connection getConnection(){	//Connection���͵ķ���
		Connection conn=null;
		try{
			//ע������
			Class.forName(driverName);
			//��ȡ���� һ�������� ���ڹ���������
			conn=DriverManager.getConnection(url, username, password);
		}catch(Exception e){
			// Exception �������е�����
			e.printStackTrace();
		}
		return conn;
	}
	public static void close(ResultSet rs,Statement stat,Connection conn){
		try{
			//���򿪵��ȹر�
			if(rs!=null){
			rs.close();
			}
			if(stat!=null){
				stat.close();
				}
			if(conn!=null){//conn=ConnectionFactory.getConnection();
				           //һ��ִ�гɹ���conn��һ����������null������ִ��ʧ�ܣ���connΪnull����null.close�޷�ִ��,��ʾNullPointerException
				           //�˴�Ϊ�����ָ��
				conn.close();
				}
		}catch(Exception e2){
			e2.printStackTrace();
		}	
	}
}