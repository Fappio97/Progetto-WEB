package casiUso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomePage {
	
	@GetMapping("/")
	public String homePage() {
		return "index";
	}
	
	@GetMapping("/contactUs")
	public String contattaci() {
		return "contattaci";
	}
	
	@GetMapping("/customerSupport")
	public String supportoClienti() {
		return "supportoClienti";
	}
	
}
