package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import casiUso.model.User;
import casiUso.persistenza.dao.UserDao;


public class UserDaoJDBC implements UserDao {

	private Connection conn;
	
	public UserDaoJDBC(Connection conn) {
		super();
		this.conn = conn;
	}
	
	@Override
	public List<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<User> findByType(String type) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean saveOrUpdate(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(User user) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public User findByPrimaryKey(String username) {
		String query = "select * from users where username = ?";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, username);
			ResultSet rs = st.executeQuery();
			if (rs.next()) {
				User user = new User();
				user.setAddressLine1(rs.getString("addressline1"));
				user.setAddressLine2(rs.getString("addressline2"));
				user.setCountry(rs.getString("country"));
				user.setEmail(rs.getString("email"));
				user.setName(rs.getString("name"));
				user.setPassword(rs.getString("password"));
				user.setPhoneNumber(rs.getString("phonenumber"));
				user.setPostCode(rs.getString("postcode"));
				user.setStateRegion(rs.getString("stateregion"));
				user.setSurname(rs.getString("surname"));
				user.setUsername(rs.getString("username"));
				user.setCode(rs.getString("code"));
				return user;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	
}
