package casiUso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class Contattaci {

	@GetMapping("/contattaci")
	public String homePge() {
		return "contattaci";
	}
	
}
