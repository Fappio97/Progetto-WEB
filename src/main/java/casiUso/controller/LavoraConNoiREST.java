package casiUso.controller;

import java.io.File;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/lavoraConNoi")
public class LavoraConNoiREST {

	@PostMapping("/salvaPresentazione")
	public String salvaPresentazione(HttpServletRequest req, HttpServletResponse res, String nome, String cognome, Date dataNascita, String email, String materiaStudio, String titoloStudio, String funzioneLavoro, String classificazioneLavoro, File foto, File cv) {
		System.out.println(nome + " " + cognome + " " + dataNascita.toString() + " " + email + " " + titoloStudio + " " + materiaStudio + " " + classificazioneLavoro + " " + funzioneLavoro + " " + foto.toString() + " " + cv.toString());
		return "home";
	}
	
	
	
}
