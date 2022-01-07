package casiUso.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class GuidaSceltaProdotto {

	@GetMapping("/productSelectionGuide")
	public String guidaProdotto(HttpServletRequest req) {
		return "guidaSceltaProdotto";
	}

}
