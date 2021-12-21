package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import casiUso.model.Job;
import casiUso.persistenza.dao.IdJob;
import casiUso.persistenza.dao.JobDao;

public class JobDaoJDBC implements JobDao {
	
	private Connection con;

	public JobDaoJDBC(Connection con) {
		super();
		this.con = con;
	}

	@Override
	public List<Job> findAll() {
		List<Job> lavori = new ArrayList<Job>();
		String query = "select * from job";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				Job job = new Job();
				job.setTitle(rs.getString("title"));
				job.setDescription(rs.getString("description"));
				job.setActive(rs.getBoolean("active"));
				lavori.add(job);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lavori;
	}

	@Override
	public List<Job> findAllStatus(boolean active) {
		List<Job> lavori = new ArrayList<Job>();
		String query = "select * from job where active = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setBoolean(1, active);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				Job job = new Job();
				job.setTitle(rs.getString("title"));
				job.setDescription(rs.getString("description"));
				job.setActive(rs.getBoolean("active"));
				lavori.add(job);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lavori;
	}

	@Override
	public boolean saveOrUpdate(Job job) {
		if (findByPrimaryKey(job.getTitle()) == null) {
			//INSERT
			try {
				String query = "insert into job "
						+ "values (?, ?, ?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, job.getTitle());
				st.setString(2, job.getDescription());
				st.setBoolean(3, job.isActive());
				st.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}else {
			//UPDATE
			try {
				String query = "update job "
						+ "set description = ?, active = ? "
						+ "where title = ?";
				PreparedStatement st = con.prepareStatement(query);
				
				st.setString(1, job.getDescription());
				st.setBoolean(2, job.isActive());
				st.setString(3, job.getTitle());
				
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
	public boolean delete(Job job) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Job findByPrimaryKey(String nome) {
		Job lavoro = null;
		String query = "select * from job where title = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, nome);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				lavoro = new Job();
				lavoro.setTitle(rs.getString("title"));
				lavoro.setDescription(rs.getString("description"));
				lavoro.setActive(rs.getBoolean("active"));
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lavoro;
	}

}
