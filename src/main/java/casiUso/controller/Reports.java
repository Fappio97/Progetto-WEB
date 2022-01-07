package casiUso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

import casiUso.Database;
import casiUso.model.Report;

@Controller
public class Reports {
	
	@PostMapping("/salvaReportHelp")
	public String salvaReportAssistenza(String origin, String description) {
		
		Database.getInstance().getReportDao().saveOrUpdate(new Report(origin, description));
		return "index";
	}
}
