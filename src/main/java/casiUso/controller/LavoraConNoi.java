package casiUso.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import casiUso.Database;
import casiUso.model.Curriculum;
import casiUso.model.GestisciCartelle;
import casiUso.model.User;

@Controller
@RequestMapping("/lavoraConNoi")
public class LavoraConNoi {
	
	@GetMapping("/lavoraInAzienda")
	public String lavoraInAzienda() {		
		return "lavoraInAzienda";	
	}
	
	@GetMapping("/curriculum")
	public String curriculum() {		
		return "curriculum";	
	}
	
	@GetMapping("/curriculumSpontaneo")
	public String curriculumSpontaneo(HttpServletRequest req) {
		HttpSession session = req.getSession(true);
		session.setAttribute("posizioneLavoro", null);
		return "curriculum";	
	}
	
	@PostMapping("/loginCurriculum")
	public String faiLogin(HttpServletRequest req, HttpServletResponse resp, String username, String pass) throws IOException {
		
		if(Database.getInstance().getLogin().faiLoginCurriculum(username, pass)) {
			User utente = Database.getInstance().getUserDao().findByPrimaryKey(username);
			
			HttpSession session = req.getSession(true);
			session.setAttribute("user", utente);
		}
		
		return "curriculum";
	}

	
	//---------------------------- manca sta parte su techplanet
	@PostMapping("/salvaPresentazione")
	public String salvaPresentazione(HttpServletRequest req, HttpServletResponse res, String lavoro,
			String nome, String cognome, String dataNascita, String email, String phone, String materiaStudio, 
			String titoloStudio, String funzioneLavoro, String classificazioneLavoro, 
			MultipartFile foto, MultipartFile cv, String presentazione, String letteraPresentazione) {
/*		
		System.out.println(lavoro + " " + nome + " " + cognome + " " + dataNascita + " " + email + " " + titoloStudio + " " + materiaStudio + " " 
			+ classificazioneLavoro + " " + funzioneLavoro + " " + foto.getOriginalFilename() + " " 
				+ cv.getOriginalFilename() + " " + letteraPresentazione);
*/		
		try {
			
			// creo un nuovo curriculum
			Curriculum curriculum = new Curriculum(Database.getInstance().getJobDao().findByPrimaryKey(lavoro), nome, cognome, dataNascita,
					email, titoloStudio, materiaStudio, funzioneLavoro, classificazioneLavoro, 
					"curriculumRicevuti/" + lavoro + "/" + cognome + "_" + nome + "_" + dataNascita + "/" + foto.getOriginalFilename(), 
					"curriculumRicevuti/" + lavoro + "/" + cognome + "_" + nome + "_" + dataNascita + "/" + cv.getOriginalFilename(), 
					letteraPresentazione, phone);
			
			// controllo se il curriculum esiste già, in base all'Id che mi viene rimandato
			Long id = Database.getInstance().getCurriculumDao().checkEsisteCurriculum(curriculum);
			
			// setto l'id dell'istanza di curriculum con quello trovato, altrimenti a 0
			curriculum.setId(id);
			
			// salvo il cv
			Database.getInstance().getCurriculumDao().saveOrUpdate(curriculum);
			
			// se l'id è uguale a zero significa che non è creata la cartella
			// che contiene la sua foto e il suo cv, 
			// poiché un utente può inviare infiniti cv, i quali aggiornano
			// il cv precedentemente inviato per quella posizione
			if(id != 0)
				// se l'id è uguale a 0 elimino quella cartella
				GestisciCartelle.eliminaCartella("curriculumRicevuti/" + lavoro, cognome + "_" + nome + "_" + dataNascita);
			
			
			// creo la nuova cartella e salvo i file nella nuova cartella
			String percorso = GestisciCartelle.scriviCartella("curriculumRicevuti/" + lavoro, cognome + "_" + nome + "_" + dataNascita);
			foto.transferTo(new File(percorso + "/" + foto.getOriginalFilename()));
			cv.transferTo(new File(percorso + "/" + cv.getOriginalFilename()));
			
			res.sendRedirect("/");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
}