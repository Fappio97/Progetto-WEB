package casiUso.controller;

import java.io.IOException;


import javax.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Product;

@RestController
public class ProdottoREST {

	@PostMapping("/visualizzaProdotto")
	public Product guidaProdotto(HttpServletResponse res, Long id) {
		
		Product prodotto = Database.getInstance().getProductsDao().findById(id);
		
		try {
			res.sendRedirect("product");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prodotto;
	}	
	
	
	
}
