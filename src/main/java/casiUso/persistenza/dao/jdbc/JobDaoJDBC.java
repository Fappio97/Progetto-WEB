package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import casiUso.Database;
import casiUso.model.Job;
import casiUso.model.Product;
import casiUso.model.Requirements;
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
		String query = "select j.title as j_title, j.description as j_description, "
				+ "j.requirements as j_requirements, j.active as j_active, r.id as r_id, r.name as r_name, "
				+ "r.value1 as r_value1, r.value2 as r_value2 from job j "
				+ "inner join obligatory_requirements o on j.title = o.job "
				+ "inner join requirements r on r.id = o.requirements ";
		String prec = "";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				System.out.println(rs.getString("j_title"));
			}
			Job job = null;
			while (rs.next()) {
				if(!prec.equals(rs.getString("j_title"))) {
					
					if(job != null) {
						if(lavori.contains(job)) {
							for(var i : lavori)
								if(i.equals(job))
									for(var j : job.getObligatory())
										i.getObligatory().add(j);
						}
						else
							lavori.add(job);
					}
					job = new Job();
					job.setTitle(rs.getString("j_title"));
					job.setDescription(rs.getString("j_description"));
					job.setRequirements(rs.getString("j_requirements"));
					job.setActive(rs.getBoolean("j_active"));
					job.setObligatory(new ArrayList<Requirements>());
					prec = job.getTitle();
				}
				Requirements req = new Requirements();
				req.setId(rs.getLong("id"));
				req.setName(rs.getString("name"));
				req.setValue1(rs.getString("value1"));
				req.setValue1(rs.getString("value2"));
				job.getObligatory().add(req);
			}
			
			if(!prec.equals(rs.getString("j_title"))) {
				
				if(job != null) {
					if(lavori.contains(job)) {
						for(var i : lavori)
							if(i.equals(job))
								for(var j : job.getObligatory())
									i.getObligatory().add(j);
					}
					else
						lavori.add(job);
				}
				job = new Job();
				job.setTitle(rs.getString("j_title"));
				job.setDescription(rs.getString("j_description"));
				job.setRequirements(rs.getString("j_requirements"));
				job.setActive(rs.getBoolean("j_active"));
				job.setObligatory(new ArrayList<Requirements>());
				prec = job.getTitle();
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
		String query = "select j.title as j_title, j.description as j_description, "
				+ "j.requirements as j_requirements, j.active as j_active, r.id as r_id, r.name as r_name, "
				+ "r.value1 as r_value1, r.value2 as r_value2 from job j "
				+ "inner join obligatory_requirements o on j.title = o.job "
				+ "inner join requirements r on r.id = o.requirements " 
				+ "where active = ?";
		String prec = "";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setBoolean(1, active);
			ResultSet rs = st.executeQuery();
			Job job = null;
			while (rs.next()) {
				/* se il nuovo titolo di lavoro è diverso da quello precedente
				 * salvo il lavoro creato e ne creo uno nuovo da inserire */
				if(!prec.equals(rs.getString("j_title"))) {
					
					/* all'inizio job è null e prevengo che viene messo nella lista */
					if(job != null) {
						
						/* se nella lista, ho già quel lavoro, significa che devo prendere
						 * i suoi requisiti obbligatori e salvarli */
						if(lavori.contains(job)) {
							for(var i : lavori)
								if(i.equals(job))
									for(var j : job.getObligatory())
										i.getObligatory().add(j);
						}
						else
							lavori.add(job);
					}
					job = new Job();
					job.setTitle(rs.getString("j_title"));
					job.setDescription(rs.getString("j_description"));
					job.setRequirements(rs.getString("j_requirements"));
					job.setActive(rs.getBoolean("j_active"));
					job.setObligatory(new ArrayList<Requirements>());
					prec = job.getTitle();
				}
				Requirements req = new Requirements();
				req.setId(rs.getLong("r_id"));
				req.setName(rs.getString("r_name"));
				req.setValue1(rs.getString("r_value1"));
				req.setValue2(rs.getString("r_value2"));
				job.getObligatory().add(req);
			}
			
			if(job != null) {
				if(lavori.contains(job)) {
					for(var i : lavori)
						if(i.equals(job))
							for(var j : job.getObligatory())
								i.getObligatory().add(j);	
				}
				else
					lavori.add(job);
			}
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		for(int i = 0; i < lavori.size(); ++i) {
			Collections.sort(lavori.get(i).getObligatory(), new Comparator<Requirements>() {
				@Override
				public int compare(Requirements o1, Requirements o2) {
					// TODO Auto-generated method stub
					return o1.getName().compareTo(o2.getName());
				}
			});
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
				st.setString(4, job.getRequirements());
					
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
						+ "set description = ?, requirements = ?, active = ? "
						+ "where title = ?";
				PreparedStatement st = con.prepareStatement(query);
				
				st.setString(1, job.getDescription());
				st.setString(2, job.getRequirements());
				st.setBoolean(3, job.isActive());
				st.setString(4, job.getTitle());
				
				st.executeUpdate();
				
			} catch (SQLException e) {
				
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}
		
		/* aggiungi i requisiti */
		for(int i = 0; i < job.getObligatory().size(); ++i)
			Database.getInstance().getRequirementsDao().saveOrUpdate(job.getObligatory().get(i));
		
		return true;
	}

	@Override
	public boolean delete(Job job) {
		try {
			String query = "delete from job "
					+ "where title = ?";
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

	@Override
	public Job findByPrimaryKey(String nome) {
		Job lavoro = null;
		String query = "select * from job where title = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, nome);
			ResultSet rs = st.executeQuery();
			if(rs.next()) {
				lavoro = new Job();
				lavoro.setTitle(rs.getString("title"));
				lavoro.setDescription(rs.getString("description"));
				lavoro.setRequirements(rs.getString("requirements"));
				lavoro.setActive(rs.getBoolean("active"));
				lavoro.setObligatory(new ArrayList<Requirements>());
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return lavoro;
	}

	@Override
	public boolean checkByPrimaryKey(String nome) {
		String query = "select * from job where title = ?";
		try {
			PreparedStatement st = con.prepareStatement(query);
			st.setString(1, nome);
			ResultSet rs = st.executeQuery();
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
