package casiUso.persistenza;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public class Login {
	
	private Connection conn;
	
	public Login(Connection conn) {
		super();
		this.conn = conn;
	}
	
	public boolean faiLoginCurriculum(HttpServletRequest req, HttpServletResponse resp, String username, String pass) {
		String sql = "select * from users where username = '" + username + "'";
		HttpSession session = req.getSession(true);
		
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if (rs.next()) {
				session.setAttribute("username", rs.getString("username"));
				session.setAttribute("nome", rs.getString("first_name"));
				session.setAttribute("cognome", rs.getString("last_name"));
				return true;
			}
				
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return false;
	}
}
