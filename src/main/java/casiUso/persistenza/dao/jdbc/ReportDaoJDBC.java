package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import casiUso.model.Report;
import casiUso.persistenza.dao.ReportDao;

public class ReportDaoJDBC implements ReportDao {

	private Connection con;

	public ReportDaoJDBC(Connection con) {
		super();
		this.con = con;
	}
	
	@Override
	public List<Report> findAll() {
		List<Report> report = new ArrayList<Report>();
		String query = "select * from report";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				Report r = new Report();
				r.setId(rs.getLong("id"));
				r.setProblem_origin(rs.getString("problem_origin"));
				r.setDescription(rs.getString("description"));
				report.add(r);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return report;
	}

	@Override
	public boolean delete(Report report) {
		try {
			String query = "delete from report "
					+ "where id = ?";
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, report.getId());
			st.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public boolean saveOrUpdate(Report report) {
		if (report.getId() == 0) {
			//INSERT
			try {
				report.setId(IdCurriculum.getId(con));
				String query = "insert into report "
						+ "values (?, ?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setLong(1, report.getId());
				st.setString(2, report.getProblem_origin());
				st.setString(3, report.getDescription());
				st.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		} else {
			//UPDATE
			try {
				String query = "update curriculum "
						+ "set problem_origin = ?, description = ? "
						+ "where id = ?";
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, report.getProblem_origin());
				st.setString(2, report.getDescription());
				st.setLong(3, report.getId());
				
				st.executeUpdate();
				
			} catch (SQLException e) {
				
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}
		return true;
	}

	@Override
	public Report findById(Long id) {
		Report report = new Report();
		String query = "select * from report where id = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, id);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				report.setId(rs.getLong("id"));
				report.setProblem_origin(rs.getString("problem_origin"));
				report.setDescription(rs.getString("description"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return report;
	}

}
