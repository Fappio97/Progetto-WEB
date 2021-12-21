package casiUso.controller;

import java.io.File;
import java.io.IOException;
import java.util.Date;

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
		
		Database.getInstance().getLogin().faiLoginCurriculum(req, resp, username, pass);
		
		return "curriculum";
	}
	
	@PostMapping("/salvaPresentazione")
	public String salvaPresentazione(HttpServletRequest req, HttpServletResponse res, String lavoro,
			String nome, String cognome, String dataNascita, String email, String materiaStudio, 
			String titoloStudio, String funzioneLavoro, String classificazioneLavoro, 
			MultipartFile foto, MultipartFile cv, String presentazione, String letteraPresentazione) {
		System.out.println(lavoro + " " + nome + " " + cognome + " " + dataNascita + " " + email + " " + titoloStudio + " " + materiaStudio + " " 
			+ classificazioneLavoro + " " + funzioneLavoro + " " + foto.getOriginalFilename() + " " 
				+ cv.getOriginalFilename() + " " + letteraPresentazione);
		
		try {
			String percorso = writeFile(cognome + "_" + nome);
			foto.transferTo(new File(percorso + "/" + foto.getOriginalFilename()));
			cv.transferTo(new File(percorso + "/" + cv.getOriginalFilename()));
			Database.getInstance().getCurriculum().saveOrUpdate(new Curriculum(
					Database.getInstance().getJobDao().findByPrimaryKey(lavoro), nome, cognome, dataNascita,
					email, materiaStudio, titoloStudio, funzioneLavoro, classificazioneLavoro, 
					percorso + "/" + foto.getOriginalFilename(), percorso + "/" + cv.getOriginalFilename(), letteraPresentazione));
			
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
	    if (! directory.exists()) {
	        if(directory.mkdir()) {
	        	System.out.println("nuova");
	        	return percorsoProgetto;
	        }
	    }
	    return null;
	}
	
}