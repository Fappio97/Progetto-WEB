package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Curriculum;
import casiUso.model.Job;

public interface CurriculumDao {
	public List<Curriculum> findAll();
	public List<Curriculum> findByJob(Job job);
	public boolean saveOrUpdate(Curriculum cv);
	public boolean delete(Curriculum cv);
}
