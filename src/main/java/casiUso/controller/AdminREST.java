package casiUso.controller;

import java.io.File;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Curriculum;
import casiUso.model.GestisciCartelle;
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
		
		List<Curriculum> curriculum = Database.getInstance().getCurriculumDao().findByJob(lavoro);
		
		// trasferire tutti i curriculum nella cartella spontanea se non esistono
		for(var i : curriculum) {
			
			String nomeCartella = i.getLast_name() + "_" + i.getFirst_name() + "_" + i.getDate_birth();
			
			String s = GestisciCartelle.scriviCartella("curriculumRicevuti/Spontaneous Candidature", 
					nomeCartella);
			
			// se è diverso da null, significa che ho creato la cartella
			// e se ho creato la cartella ci pusho dentro i file che erano salvati
			// nella vecchia posizione di lavoro che sto per andare ad eliminare
			if(s != null) {
//				System.out.println("qui");
				// prendo i file nella precedente cartella
				File foto =  new File(System.getProperty("user.dir") + "/src/main/resources/static/" + i.getPhoto());
				File cv = new File(System.getProperty("user.dir") + "/src/main/resources/static/" + i.getCurriculum());
				
				// salvo i file nella nuova cartella
				GestisciCartelle.copiaFile(foto, s);
				GestisciCartelle.copiaFile(cv, s);
				
				// aggiorno il percorso salvato nel db
				i.setPhoto("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + foto.getName());
				i.setCurriculum("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + cv.getName());
//				System.out.println("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + foto.getName());
				Database.getInstance().getCurriculumDao().saveOrUpdate(i);
	//			System.out.println(i.getPhoto());
			} else {
				// se sono qui significa che ho già un curriculum spontaneo di quella persona
				// allora vedo quale dei due ha id maggiore (quindi cv più recente) ed in caso salvo la nuova posizione

				Curriculum c1 = Database.getInstance().getCurriculumDao().findByNameSurnameDateSpontaneous(i.getFirst_name(), 
						i.getLast_name(), i.getDate_birth());
				
				if(c1.getId() < i.getId()) {
					File foto = new File(System.getProperty("user.dir") + "/src/main/resources/static/" + c1.getPhoto());
					foto.delete();
					
					File cv = new File(System.getProperty("user.dir") + "/src/main/resources/static/" + c1.getCurriculum());
					cv.delete();
					
					foto =  new File(System.getProperty("user.dir") + "/src/main/resources/static/" + i.getPhoto());
					cv = new File(System.getProperty("user.dir") + "/src/main/resources/static/" + i.getCurriculum());
					
					
					s = System.getProperty("user.dir") + "/src/main/resources/static/curriculumRicevuti/Spontaneous Candidature/" + 
					i.getLast_name() + "_" + i.getFirst_name() + "_" + i.getDate_birth();
					// salvo i file nella nuova cartella
					GestisciCartelle.copiaFile(foto, s);
					GestisciCartelle.copiaFile(cv, s);
					
					// aggiorno il percorso salvato nel db
					i.setPhoto("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + foto.getName());
					i.setCurriculum("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + cv.getName());
//					System.out.println("curriculumRicevuti/Spontaneous Candidature/" + nomeCartella + "/" + foto.getName());
					Database.getInstance().getCurriculumDao().saveOrUpdate(i);
				}
			}
				
		}	
		// devo eliminare la cartella del lavoro
		GestisciCartelle.eliminaCartella("curriculumRicevuti", titolo);
				
		// elimino il lavoro
		Database.getInstance().getJobDao().delete(lavoro);
	}
	

	@PostMapping("/salvaModificaPosizioneLavoro")
	public void salvaModificaPosizioneLavoro(@RequestBody Job lavoro) {

		if(Database.getInstance().getJobDao().saveOrUpdate(lavoro))
			GestisciCartelle.scriviCartella("curriculumRicevuti", lavoro.getTitle());
		
	}	

	@PostMapping("/checkPosizioneLavoro")
	public String checkPosizioneLavoro(@RequestBody Job lavoro) {
		
		Job job = Database.getInstance().getJobDao().findByPrimaryKeyWithRequirements(lavoro.getTitle());

		if(job == null)
			return "nuovo";
		else {	
			if(job.ugualiTotalmente(lavoro))
				return "uguale";
			else
				return "titolo";
		}
	}
	
	@PostMapping("/eliminaCV")
	public void eliminaCV(@RequestParam Long id) {
		
		Curriculum cv = Database.getInstance().getCurriculumDao().findById(id);
	
//		System.out.println(cv.getLast_name() + "_" + cv.getFirst_name() + "_" + cv.getDate_birth()
//					+ "_" + cv.getJob().getTitle());
		
		// elimino la cartella che contiene foto e cv del curriculum
		GestisciCartelle.eliminaCartella("curriculumRicevuti/" + cv.getJob().getTitle(), cv.getLast_name() + "_" + cv.getFirst_name() + "_" + cv.getDate_birth());
		
		Database.getInstance().getCurriculumDao().delete(cv);
	}
	
	@PostMapping("/prendiCurriculum")
	public List<Curriculum> prendiCurriculum(@RequestParam String titoloLavoro) {
				
		List<Curriculum> cv = null;
		
		
		if(titoloLavoro.equals("all"))
			cv = Database.getInstance().getCurriculumDao().findAll();
		else {
			
			Job lavoro = Database.getInstance().getJobDao().findByPrimaryKey(titoloLavoro);
			
//			System.out.println(lavoro.getTitle());
			
			cv = Database.getInstance().getCurriculumDao().findByJob(lavoro);
		}
		
		return cv;
	}

}
