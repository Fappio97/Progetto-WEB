package casiUso.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import casiUso.Database;
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
	
	@GetMapping("/visualizzaReports")
	public String visualizzaReports(HttpServletRequest req) {
		
		List<Report> reports = Database.getInstance().getReport().findAll();
		
		HttpSession session = req.getSession(true);
		session.setAttribute("report", reports);
		
		return "visualizzaReports";
	}
	
}
