package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Requirements;

public interface RequirementsDao {
	public List<Requirements> findAll();
	public Requirements findById(Long id);
	public Long saveOrUpdate(Requirements requirements);
	public Long checkUguale(Requirements requirements);
	
	/* non voglio che i requisiti vengano mai deletati, perché se esiste uno uguale
	 * viene sfruttato dal job a cui è collegato */
//	public boolean delete(Requirements requirements);
}
