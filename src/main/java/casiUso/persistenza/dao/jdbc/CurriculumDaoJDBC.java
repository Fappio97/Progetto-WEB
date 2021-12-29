package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import casiUso.Database;
import casiUso.model.Curriculum;
import casiUso.model.Job;
import casiUso.persistenza.dao.CurriculumDao;

public class CurriculumDaoJDBC implements CurriculumDao {

	private Connection con;

	public CurriculumDaoJDBC(Connection con) {
		super();
		this.con = con;
	}
	
	@Override
	public List<Curriculum> findAll() {
		List<Curriculum> curriculum = new ArrayList<Curriculum>();
		String query = "select * from curriculum";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				Curriculum cv = new Curriculum();
				cv.setId(rs.getLong("id"));
				cv.setFirst_name(rs.getString("first_name"));
				cv.setLast_name(rs.getString("last_name"));
				cv.setDate_birth(rs.getString("date_birth"));
				cv.setEmail(rs.getString("email"));
				cv.setStudy_title(rs.getString("study_title"));
				cv.setStudy_subject(rs.getString("study_subject"));
				cv.setLast_function(rs.getString("last_function"));
				cv.setLast_classification(rs.getString("last_classification"));
				cv.setPhoto(rs.getString("photo"));
				cv.setCurriculum(rs.getString("curriculum"));
				cv.setPresentation(rs.getString("presentation"));
				cv.setPhone(rs.getString("phone"));
				
				Job job = Database.getInstance().getJobDao().findByPrimaryKey(rs.getString("job"));
				cv.setJob(job);
								
				curriculum.add(cv);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return curriculum;
	}

	@Override
	public List<Curriculum> findByJob(Job job) {
		List<Curriculum> curriculum = new ArrayList<Curriculum>();
		String query = "select * from curriculum where job = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, job.getTitle());
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				Curriculum cv = new Curriculum();
				cv.setId(rs.getLong("id"));
				cv.setFirst_name(rs.getString("first_name"));
				cv.setLast_name(rs.getString("last_name"));
				cv.setDate_birth(rs.getString("date_birth"));
				cv.setEmail(rs.getString("email"));
				cv.setStudy_title(rs.getString("study_title"));
				cv.setStudy_subject(rs.getString("study_subject"));
				cv.setLast_function(rs.getString("last_function"));
				cv.setLast_classification(rs.getString("last_classification"));
				cv.setPhoto(rs.getString("photo"));
				cv.setCurriculum(rs.getString("curriculum"));
				cv.setPresentation(rs.getString("presentation"));
				cv.setPhone(rs.getString("phone"));
				cv.setJob(job);
				
				curriculum.add(cv);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return curriculum;
	}

	@Override
	public boolean saveOrUpdate(Curriculum cv) {
		if (cv.getId() == 0) {
			//INSERT
			System.out.println("insert");
			try {
				cv.setId(IdCurriculum.getId(con));
				String query = "insert into curriculum "
						+ "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setLong(1, cv.getId());
				st.setString(2, cv.getJob().getTitle());
				st.setString(3, cv.getFirst_name());
				st.setString(4, cv.getLast_name());
				st.setString(5, cv.getDate_birth());
				st.setString(6, cv.getEmail());
				st.setString(7, cv.getStudy_title());
				st.setString(8, cv.getStudy_subject());
				st.setString(9, cv.getLast_function());
				st.setString(10, cv.getLast_classification());
				st.setString(11, cv.getPhoto());
				st.setString(12, cv.getCurriculum());
				st.setString(13, cv.getPresentation());
				st.setString(14, cv.getPhone());
				st.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}else {
			//UPDATE
			System.out.println("update");
			try {
				String query = "update curriculum "
						+ "set job = ?, first_name = ?, last_name = ?, "
						+ "date_birth = ?, email = ?, study_title = ?, "
						+ "study_subject = ?, last_function = ?, last_classification = ?, "
						+ "photo = ?, curriculum = ?, presentation = ?, phone = ? "
						+ "where id = ?";
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, cv.getJob().getTitle());
				st.setString(2, cv.getFirst_name());
				st.setString(3, cv.getLast_name());
				st.setString(4, cv.getDate_birth());
				st.setString(5, cv.getEmail());
				st.setString(6, cv.getStudy_title());
				st.setString(7, cv.getStudy_subject());
				st.setString(8, cv.getLast_function());
				st.setString(9, cv.getLast_classification());
				st.setString(10, cv.getPhoto());
				st.setString(11, cv.getCurriculum());
				st.setString(12, cv.getPresentation());
				st.setString(13, cv.getPhone());
				st.setLong(14, cv.getId());
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
	public boolean delete(Curriculum cv) {
		try {
			String query = "delete from curriculum "
					+ "where id = ?";
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, cv.getId());
			st.executeUpdate();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
		return true;
	}

	@Override
	public Curriculum findById(Long id) {
		Curriculum cv = new Curriculum();
		String query = "select * from curriculum where id = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setLong(1, id);
			ResultSet rs = st.executeQuery();
			if(rs.next()) {
				cv.setId(rs.getLong("id"));
				cv.setFirst_name(rs.getString("first_name"));
				cv.setLast_name(rs.getString("last_name"));
				cv.setDate_birth(rs.getString("date_birth"));
				cv.setEmail(rs.getString("email"));
				cv.setStudy_title(rs.getString("study_title"));
				cv.setStudy_subject(rs.getString("study_subject"));
				cv.setLast_function(rs.getString("last_function"));
				cv.setLast_classification(rs.getString("last_classification"));
				cv.setPhoto(rs.getString("photo"));
				cv.setCurriculum(rs.getString("curriculum"));
				cv.setPresentation(rs.getString("presentation"));
				cv.setPhone(rs.getString("phone"));
				
				Job job = Database.getInstance().getJobDao().findByPrimaryKey(rs.getString("job"));
				cv.setJob(job);

			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return cv;
	}

	@Override
	public Long checkEsisteCurriculum(Curriculum cv) {
		String query = "select * from curriculum where job = ? and "
				+ "first_name = ? and last_name = ? and date_birth = ?";
		
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, cv.getJob().getTitle());
			st.setString(2, cv.getFirst_name());
			st.setString(3, cv.getLast_name());
			st.setString(4, cv.getDate_birth());
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				return rs.getLong("id");
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return (long) 0;
	}

}
