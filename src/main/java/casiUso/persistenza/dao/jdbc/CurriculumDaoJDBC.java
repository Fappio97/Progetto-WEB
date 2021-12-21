package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

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
				cv.setEmail(rs.getString("email"));
				cv.setEducational_qualification(rs.getString("educational_qualification"));
				cv.setStudy_subject(rs.getString("study_subject"));
				cv.setLast_function(rs.getString("last_function"));
				cv.setPhoto(rs.getString("photo"));
				cv.setCurriculum(rs.getString("curriculum"));
				cv.setPresentation(rs.getString("presentation"));
				
				Job job = casiUso.Database.getInstance().getJobDao().findByPrimaryKey(rs.getString("job"));
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
/*		List<Curriculum> curriculum = new ArrayList<Curriculum>();
		String query = "select * from curriculum where job = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setJob(1, job.getId());
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				Curriculum cv = new Curriculum();
				cv.setId(rs.getLong("id"));
				cv.setFirst_name(rs.getString("first_name"));
				cv.setLast_name(rs.getString("last_name"));
				cv.setEmail(rs.getString("email"));
				cv.setEducational_qualification(rs.getString("educational_qualification"));
				cv.setStudy_subject(rs.getString("study_subject"));
				cv.setLast_function(rs.getString("last_function"));
				cv.setPhoto(rs.getString("photo"));
				cv.setCurriculum(rs.getString("curriculum"));
				cv.setPresentation(rs.getString("presentation"));
				
				Job job = casiUso.Database.getInstance().getJobDao().findByPrimaryKey(rs.getLong("job"));
				cv.setJob(job);
				
				curriculum.add(cv);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return curriculum;*/
		return null;
	}

	@Override
	public boolean saveOrUpdate(Curriculum cv) {
		if (cv.getId() == 0) {
			//INSERT
			try {
				cv.setId(IdCurriculum.getId(con));
				String query = "insert into curriculum "
						+ "values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
				PreparedStatement st = con.prepareStatement(query);
				st.setLong(1, cv.getId());
				st.setString(2, cv.getJob().getTitle());
				st.setString(3, cv.getFirst_name());
				st.setString(4, cv.getLast_name());
				st.setString(5, cv.getDate_birth());
				st.setString(6, cv.getEmail());
				st.setString(7, cv.getEducational_qualification());
				st.setString(8, cv.getStudy_subject());
				st.setString(9, cv.getLast_function());
				st.setString(10, cv.getLast_classification());
				st.setString(11, cv.getPhoto());
				st.setString(12, cv.getCurriculum());
				st.setString(13, cv.getPresentation());
				st.executeUpdate();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}else {
			//UPDATE
			try {
				String query = "update curriculum "
						+ "set job = ?, first_name = ?, last_name = ?, "
						+ "date_birth = ?, email = ?, educational_qualification = ?, "
						+ "stdy_subject = ?, last_function = ?, last_classification = ?, "
						+ "photo = ?, curriculum = ?, presentation = ? "
						+ "where id = ?";
				PreparedStatement st = con.prepareStatement(query);
				st.setString(1, cv.getJob().getTitle());
				st.setString(2, cv.getFirst_name());
				st.setString(3, cv.getLast_name());
				st.setString(4, cv.getDate_birth());
				st.setString(5, cv.getEmail());
				st.setString(6, cv.getEducational_qualification());
				st.setString(7, cv.getStudy_subject());
				st.setString(8, cv.getLast_function());
				st.setString(9, cv.getLast_classification());
				st.setString(10, cv.getPhoto());
				st.setString(11, cv.getCurriculum());
				st.setString(12, cv.getPresentation());
				st.setLong(13, cv.getId());
				
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
		// TODO Auto-generated method stub
		return false;
	}

}
