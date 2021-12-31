package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import casiUso.model.Job;
import casiUso.model.Requirements;
import casiUso.persistenza.dao.ObligatoryRequirementsDao;

public class ObligatoryRequirementsDaoJDBC implements ObligatoryRequirementsDao {

	private Connection con;

	public ObligatoryRequirementsDaoJDBC(Connection con) {
		super();
		this.con = con;
	}
	
	@Override
	public boolean save(Job job, Requirements requirements) {

		try {
			if(!checkUguale(job, requirements)) {
				String query = "insert into obligatory_requirements "
						+ "values (?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, job.getTitle());
				st.setLong(2, requirements.getId());
	
				st.executeUpdate();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public boolean checkUguale(Job job, Requirements requirements) {
		try {
			String query = "select * from obligatory_requirements "
					+ "where job = ? and requirements = ? ";
			
			PreparedStatement st = con.prepareStatement(query);
			
			st.setString(1, job.getTitle());
			st.setLong(2, requirements.getId());

			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				return true;
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
		return false;
	}

	@Override
	public boolean delete(Job job) {
		try {
			String query = "delete from obligatory_requirements "
					+ "where job = ? ";
			
			PreparedStatement st = con.prepareStatement(query);
			
			st.setString(1, job.getTitle());
			st.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		
		return true;
	}

}
