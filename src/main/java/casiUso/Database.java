package casiUso;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import casiUso.persistenza.dao.CurriculumDao;
import casiUso.persistenza.dao.JobDao;
import casiUso.persistenza.dao.ProductDao;
import casiUso.persistenza.dao.jdbc.CurriculumDaoJDBC;
import casiUso.persistenza.dao.jdbc.JobDaoJDBC;
import casiUso.persistenza.Login;
import casiUso.persistenza.dao.jdbc.ProductDaoJDBC;

public class Database {
	
	private static Database instance = null;
	private Connection conn;
	
	public static Database getInstance() {
		if (instance == null) {
			instance = new Database();
		}
		return instance;
	}
	
	private Database() {
		try {
			conn = DriverManager.getConnection("jdbc:postgresql://localhost:5432/techplanet", 
											"postgres", "postgres");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public ProductDao getProductsDao() {
		return new ProductDaoJDBC(conn);
	}

	public JobDao getJobDao() {
		return new JobDaoJDBC(conn);
	}
	
	public Login getLogin() {
		return new Login(conn);
	}
	
	public CurriculumDao getCurriculum() {
		return new CurriculumDaoJDBC(conn);
	}

}
