package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import casiUso.model.Requirements;
import casiUso.persistenza.dao.RequirementsDao;

public class RequirementsDaoJDBC implements RequirementsDao {

	private Connection con;

	public RequirementsDaoJDBC(Connection con) {
		super();
		this.con = con;
	}
	
	@Override
	public List<Requirements> findAll() {
		List<Requirements> requirements = new ArrayList<Requirements>();
		String query = "select * from requirements";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				Requirements req = new Requirements();
				req.setName(rs.getString("name"));
				req.setId(rs.getLong("id"));
				req.setValue1(rs.getString("value1"));
				req.setValue2(rs.getString("value2"));
				requirements.add(req);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return requirements;
	}

	@Override
	public Requirements findById(Long id) {
		Requirements req = null;
		String query = "select * from requirements where id = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, id);
			ResultSet rs = st.executeQuery();
			if (rs.next()) {
				req = new Requirements();
				req.setName(rs.getString("name"));
				req.setId(rs.getLong("id"));
				req.setValue1(rs.getString("value1"));
				req.setValue2(rs.getString("value2"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return req;
	}

	@Override
	public Long saveOrUpdate(Requirements requirements) {
		
		Long i = checkUguale(requirements);
		if(i != -1) {
			return i;
		} else {
			//INSERT
			try {
				requirements.setId(IdRequirement.getId(con));
				String query = "insert into requirements "
						+ "values (?, ?, ?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setLong(1, requirements.getId());
				st.setString(2, requirements.getValue1());
				st.setString(3, requirements.getValue2());
				st.setString(4, requirements.getName());

				st.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return (long) -1;
			}
		}
		return requirements.getId();
	}
/*
	@Override
	public boolean delete(Requirements requirements) {
		try {
			String query = "delete from requirements "
					+ "where id = ?";
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, requirements.getId());
			st.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
	}
*/

	@Override
	public Long checkUguale(Requirements requirements) {
		try {
			String query = "select * from requirements "
					+ "where name = ? and value1 = ? and value2 = ?";
			
			PreparedStatement st = con.prepareStatement(query);
			
			st.setString(1, requirements.getName());
			st.setString(2, requirements.getValue1());
			st.setString(3, requirements.getValue2());
			
			ResultSet rs = st.executeQuery();
			
			if (rs.next()) {
				return rs.getLong("id");
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return (long) -1;
		}
		
		return (long) -1;
	}
}
