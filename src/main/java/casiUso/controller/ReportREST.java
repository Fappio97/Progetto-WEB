package casiUso.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Report;

@RestController
public class ReportREST {
	
	@PostMapping("/salvaReportHelp")
	public void salvaReportAssistenza(HttpServletRequest req, HttpServletResponse res, String origin, String description) {
		
		Database.getInstance().getReportDao().saveOrUpdate(new Report(origin, description));
/*
		try {
			res.sendRedirect("/");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
*/		
	}
}
