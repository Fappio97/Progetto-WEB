package casiUso.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import casiUso.Database;
import casiUso.model.Job;
import casiUso.model.Report;

@Controller
public class Admin {

	
	@GetMapping("/adminPage")
	public String adminPage() {
		return "adminPage";
	}
	
	@GetMapping("/returnRequests")
	public String returnRequests() {
		return "returnRequests";
	}
	
	@GetMapping("/addProduct")
	public String addProduct() {
		return "addProduct";
	}
	
	@GetMapping("/viewReports")
	public String visualizzaReports(HttpServletRequest req) {
		
		List<Report> reports = Database.getInstance().getReportDao().findAll();
		
		HttpSession session = req.getSession(true);
		session.setAttribute("report", reports);
		
		return "visualizzaReports";
	}
	
	@GetMapping("/viewJobs")
	public String visualizzaPosizioniLavoro(HttpServletRequest req) {
		
		List<Job> jobs = Database.getInstance().getJobDao().findAll();
		
		HttpSession session = req.getSession(true);
		session.setAttribute("lavori", jobs);
		
		return "posizioniLavoro";
	}
	
	@GetMapping("/viewCurriculum")
	public String visualizzaCurriculum(HttpServletRequest req) {

		List<Job> job = Database.getInstance().getJobDao().findAll();

		HttpSession session = req.getSession(true);
		session.setAttribute("lavori", job);

		return "visualizzaCV";
	}
	
}
