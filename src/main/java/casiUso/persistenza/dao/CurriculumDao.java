package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Curriculum;
import casiUso.model.Job;

public interface CurriculumDao {
	public List<Curriculum> findAll();
	public Curriculum findById(Long id);
	public List<Curriculum> findByJob(Job job);
	public Curriculum saveOrUpdate(Curriculum cv);
	public boolean delete(Curriculum cv);
}
