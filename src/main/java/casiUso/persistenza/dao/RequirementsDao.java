package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Requirements;

public interface RequirementsDao {
	public List<Requirements> findAll();
	public Requirements findById(Long id);
	public boolean saveOrUpdate(Requirements requirements);
	public boolean delete(Requirements requirements);
}
