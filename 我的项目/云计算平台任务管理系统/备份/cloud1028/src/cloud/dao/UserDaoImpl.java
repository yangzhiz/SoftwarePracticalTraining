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
    	 * 根据用户名查找指定用户
    	 * */
    	public User findUserById(String userid){
    		String sql="select UserId,Password from user where UserId='"+userid+"'";//此处userid为字符串类型，应加单引号，同时注意单引号要包含在双引号内
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
   				}finally{ //不管之前如何执行，是否出错，finally中代码总会执行
   					ConnectionFactory.close(rs, stat, conn);
   				}
   				//执行查询 然后把结果封装成一个user对象
   				return user;
   			}
}