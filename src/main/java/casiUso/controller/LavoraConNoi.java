package casiUso.controller;

import java.io.File;
import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.multipart.MultipartFile;

import casiUso.Database;
import casiUso.model.Curriculum;
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
		
		System.out.println(lavoro + " " + nome + " " + cognome + " " + dataNascita + " " + email + " " + titoloStudio + " " + materiaStudio + " " 
			+ classificazioneLavoro + " " + funzioneLavoro + " " + foto.getOriginalFilename() + " " 
				+ cv.getOriginalFilename() + " " + letteraPresentazione);
		
		try {
			
			Curriculum curriculum = new Curriculum(Database.getInstance().getJobDao().findByPrimaryKey(lavoro), nome, cognome, dataNascita,
					email, titoloStudio, materiaStudio, funzioneLavoro, classificazioneLavoro, 
					"curriculumRicevuti/" + cognome + "_" + nome + "_" + dataNascita + "_" + lavoro + "/" + foto.getOriginalFilename(), 
					"curriculumRicevuti/" + cognome + "_" + nome + "_" + dataNascita + "_" + lavoro + "/" + cv.getOriginalFilename(), 
					letteraPresentazione, phone);
			
			Long id = Database.getInstance().getCurriculumDao().checkEsisteCurriculum(curriculum);
			
			curriculum.setId(id);
			
			Database.getInstance().getCurriculumDao().saveOrUpdate(curriculum);
			
			if(id != 0) {
				try {
					String p = System.getProperty("user.dir") + "/src/main/resources/static/curriculumRicevuti/" 
							 + cognome + "_" + nome + "_" + dataNascita + "_" + lavoro;
					FileUtils.deleteDirectory(new File(p));
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
			
			String percorso = writeFile(cognome + "_" + nome + "_" + dataNascita + "_" + lavoro);
			foto.transferTo(new File(percorso + "/" + foto.getOriginalFilename()));
			cv.transferTo(new File(percorso + "/" + cv.getOriginalFilename()));
			
			res.sendRedirect("/");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}
	
	public String writeFile(String cognomeNome){
		String percorsoProgetto = System.getProperty("user.dir") + "/src/main/resources/static/curriculumRicevuti/" + cognomeNome;

	    File directory = new File(percorsoProgetto);
	   
	    if (! directory.exists()) 
	        if(directory.mkdir()) 
	        	return percorsoProgetto;
	       
	    return null;
	}
	
}