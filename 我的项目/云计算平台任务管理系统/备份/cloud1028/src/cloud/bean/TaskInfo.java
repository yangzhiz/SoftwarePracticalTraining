package cloud.bean;
/**
 * @author yangzhi
 */
import java.io.Serializable;

@SuppressWarnings("serial")
public class TaskInfo implements Serializable
{
	    private String serverurl;
	    private String taskname;
	    private String scriptname;
	    private String scriptpath;
	    private String appname;
	    private String apppath;
	    private String resourcepath;
	    private String taskdescription;
	    public String getScriptpath() {
			return scriptpath;
		}

		public void setScriptpath(String scriptpath) {
			this.scriptpath = scriptpath;
		}

		public String getApppath() {
			return apppath;
		}

		public void setApppath(String apppath) {
			this.apppath = apppath;
		}

		public String getResourcepath() {
			return resourcepath;
		}

		public void setResourcepath(String resourcepath) {
			this.resourcepath = resourcepath;
		}

		
		public String getServerurl() {
			return serverurl;
		}

		public void setServerurl(String serverurl) {
			this.serverurl = serverurl;
		}

		public String getScriptname() {
			return scriptname;
		}

		public void setScriptname(String scriptname) {
			this.scriptname = scriptname;
		}

		public String getAppname() {
			return appname;
		}

		public void setAppname(String appname) {
			this.appname = appname;
		}

		public String getTaskdescription() {
			return taskdescription;
		}

		public void setTaskdescription(String taskdescription) {
			this.taskdescription = taskdescription;
		}

		public String getTaskname() {
			return taskname;
		}

		public void setTaskname(String taskname) {
			this.taskname = taskname;
		}
	   

}
