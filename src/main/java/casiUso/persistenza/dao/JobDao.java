package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Job;

public interface JobDao {
	public List<Job> findAll();
	public List<Job> findAllStatus(boolean active);
	public Job findByPrimaryKey(String nome);
	public boolean checkByPrimaryKey(String nome);
	public boolean saveOrUpdate(Job job);
	public boolean delete(Job job);
}
