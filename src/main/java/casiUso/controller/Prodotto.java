package casiUso.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import casiUso.Database;
import casiUso.model.Product;

@Controller
public class Prodotto {
	
	@GetMapping("/product")
	public String guidaProdotto() {
		return "product";
	}	
	
	@GetMapping("/visualizzaProdotto")
	public String guidaProdotto(HttpServletRequest req) {
		
		Long id = Long.parseLong(req.getParameter("id"));
		
		Product prodotto = Database.getInstance().getProductsDao().findById(id);
		
		HttpSession session = req.getSession(true);
		session.setAttribute("product", prodotto);		

		return "product";
	}	
	
}
