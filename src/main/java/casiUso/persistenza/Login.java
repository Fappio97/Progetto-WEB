package casiUso.persistenza;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Login {
	
	private Connection conn;
	
	public Login(Connection conn) {
		super();
		this.conn = conn;
	}
	
	public boolean faiLoginCurriculum(String username, String pass) {
		String sql = "select * from users where username = '" + username + "'";
		
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if (rs.next()) {
				return true;
			}
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
