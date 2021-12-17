package casiUso.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/lavoraConNoi")
public class LavoraConNoi {
	
	@GetMapping("/presentazioneAzienda")
	public String lavoraConNoi() {
				
		return "/presentazioneAzienda";	
	}
	
	@GetMapping("/posizioniAperte")
	public String posizioniAperte() {
				
		return "/posizioniAperte";	
	}
}
