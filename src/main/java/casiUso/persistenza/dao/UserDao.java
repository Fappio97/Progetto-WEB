package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.User;



public interface UserDao {

	public List<User> findAll();
	public List<User> findByType(String type);
	public User findByPrimaryKey(String username);
	public boolean saveOrUpdate(User user);
	public boolean delete(User user);
}
