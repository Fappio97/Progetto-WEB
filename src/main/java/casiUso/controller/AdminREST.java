package casiUso.controller;

import java.io.File;
import java.io.IOException;
import java.util.List;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Curriculum;
import casiUso.model.Job;
import casiUso.model.Report;

@RestController
public class AdminREST {

	@PostMapping("/eliminaReport")
	public void eliminaReport(@RequestParam String id) {
		
		Report report = Database.getInstance().getReportDao().findById(Long.parseLong(id));
		
		Database.getInstance().getReportDao().delete(report);
	}
	
	@PostMapping("/eliminaLavoro")
	public void eliminaLavoro(@RequestParam String titolo) {
		
		Job lavoro = Database.getInstance().getJobDao().findByPrimaryKey(titolo);
		
		Database.getInstance().getJobDao().delete(lavoro);
	}
	

	@PostMapping("/salvaModificaPosizioneLavoro")
	public void salvaModificaPosizioneLavoro(@RequestParam String titolo, @RequestParam String descrizione, @RequestParam String requisiti, @RequestParam boolean attivo) {

		Database.getInstance().getJobDao().saveOrUpdate(new Job(titolo, descrizione, requisiti, attivo));
		
	}
/*	
	@PostMapping("/checkPosizioneLavoro")
	public boolean checkPosizioneLavoro(@RequestParam String titolo) {
		
		return Database.getInstance().getJobDao().checkByPrimaryKey(titolo);
		
	}
*/	

	@PostMapping("/checkPosizioneLavoro")
	public String checkPosizioneLavoro(@RequestParam String titolo, @RequestParam String descrizione, @RequestParam String requisiti, @RequestParam boolean attivo) {
		
		Job lavoro = Database.getInstance().getJobDao().findByPrimaryKey(titolo);
		
		if(lavoro == null)
			return "nuovo";
		else {
			if(lavoro.ugualiTotalmente(new Job(titolo, descrizione, requisiti, attivo)))
				return "uguale";
			else
				return "titolo";
		}
		
	}
	
	@PostMapping("/eliminaCV")
	public void eliminaCV(@RequestParam Long id) {
		
		Curriculum cv = Database.getInstance().getCurriculumDao().findById(id);
	
		String p = System.getProperty("user.dir") + "/src/main/resources/static/curriculumRicevuti/" 
					+ cv.getLast_name() + "_" + cv.getFirst_name();
		
		try {
			FileUtils.deleteDirectory(new File(p));
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		Database.getInstance().getCurriculumDao().delete(cv);
	}
	
	@PostMapping("/prendiCurriculum")
	public List<Curriculum> prendiCurriculum(@RequestParam String titoloLavoro) {
		
		List<Curriculum> cv = null;
		
		
		if(titoloLavoro.equals("all"))
			cv = Database.getInstance().getCurriculumDao().findAll();
		else {
			
			Job lavoro = Database.getInstance().getJobDao().findByPrimaryKey(titoloLavoro);
			
			cv = Database.getInstance().getCurriculumDao().findByJob(lavoro);
		}
		
		return cv;
	}

}
