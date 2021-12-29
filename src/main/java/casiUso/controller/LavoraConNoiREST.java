package casiUso.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Job;

@RestController
public class LavoraConNoiREST {

	@GetMapping("/listaPosizioniAperte")
	public List<Job> listaPosizioniAperte(HttpServletRequest req, HttpServletResponse res) {
		
		List<Job> lavori = Database.getInstance().getJobDao().findAllStatus(true);
		
		return lavori;
		
	}
	
	@PostMapping("/salvaPosizioneLavoro")
	public String salvaPosizioneLavoro(HttpServletRequest req, @RequestBody Job job) {
		
		HttpSession session = req.getSession(true);
		session.setAttribute("posizioneLavoro", job);
		
		return null;
	}
	
}
