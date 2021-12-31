package casiUso.persistenza.dao;

import casiUso.model.Job;
import casiUso.model.Requirements;

public interface ObligatoryRequirementsDao {
	public boolean checkUguale(Job job, Requirements requirements);
	public boolean save(Job job, Requirements requirements);
	public boolean delete(Job job);
}
