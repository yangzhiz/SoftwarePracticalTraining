package cloud.dao;
/**
 * @author yangzhi
 */
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.Statement;

import cloud.bean.User;
import cloud.common.ConnectionFactory;

public class UserDaoImpl {
    	/*
    	 * �����û�������ָ���û�
    	 * */
    	public User findUserById(String userid){
    		String sql="select UserId,Password from user where UserId='"+userid+"'";//�˴�useridΪ�ַ������ͣ�Ӧ�ӵ����ţ�ͬʱע�ⵥ����Ҫ������˫������
    		User user=null;
    		Connection conn=null;
    		ResultSet rs=null;
    		Statement stat=null;
    		try {
                conn=ConnectionFactory.getConnection();
                stat=conn.createStatement();
   			    rs=stat.executeQuery(sql);
   			    while(rs.next()){
   			    	user=new User();
   			    	user.setUserid(rs.getString("UserId"));
   			    	user.setPassword(rs.getString("Password"));
   			    	}
   			    }catch(Exception e){
   			    	e.printStackTrace();
   				}finally{ //����֮ǰ���ִ�У��Ƿ����finally�д����ܻ�ִ��
   					ConnectionFactory.close(rs, stat, conn);
   				}
   				//ִ�в�ѯ Ȼ��ѽ����װ��һ��user����
   				return user;
   			}
}