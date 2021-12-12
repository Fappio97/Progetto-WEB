package casiUso.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GuidaSceltaProdottoREST {
	
	@GetMapping("/eliminaCategoria")
	public void eliminaCategoria(HttpServletRequest req, HttpServletResponse resp) {
		
		HttpSession session = req.getSession();
		session.invalidate();

	}
	
	@PostMapping("/categoriaScelta")
	public void categoriaScelta(HttpServletResponse resp, HttpServletRequest req,@RequestBody String categoria) {
		HttpSession session = req.getSession(true);
		session.setAttribute("categoria", categoria);
	}
	

	
}
