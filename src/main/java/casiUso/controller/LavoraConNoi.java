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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import casiUso.Database;

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
		
		Database.getInstance().getLogin().faiLogin(req, resp, username, pass);
		
		return "curriculum";
	}
	
	@PostMapping("/salvaPresentazione")
	public String salvaPresentazione(HttpServletRequest req, HttpServletResponse res, String nome, String cognome, Date dataNascita, String email, String materiaStudio, String titoloStudio, String funzioneLavoro, String classificazioneLavoro, File foto, File cv) {
		System.out.println(nome + " " + cognome + " " + dataNascita.toString() + " " + email + " " + titoloStudio + " " + materiaStudio + " " + classificazioneLavoro + " " + funzioneLavoro + " " + foto.toString() + " " + cv.toString());
		return "index";
	}
	
}
