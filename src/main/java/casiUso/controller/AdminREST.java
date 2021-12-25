package casiUso.controller;

import java.util.List;

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

}
