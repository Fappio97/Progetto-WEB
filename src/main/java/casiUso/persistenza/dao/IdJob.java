package casiUso.persistenza.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class IdJob {
	public static Long getId(Connection conn) throws SQLException {
		String query = "select nextval('job_seq') as id";
		
		Statement st = conn.createStatement();
		ResultSet rs = st.executeQuery(query);
		rs.next();
		return rs.getLong("id");
	}
}
