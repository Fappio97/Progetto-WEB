package casiUso.controller;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import casiUso.Database;
import casiUso.model.Product;
import casiUso.model.ProductTag;
import casiUso.model.Report;

@RestController
public class GuidaSceltaProdottoREST {
	
	@PostMapping("/trovaProdotti")
	public List<ProductTag> trovaProdotti(@RequestParam String categoria, @RequestParam String tag) {
			
		// prendo tutti i prodotti di quella categoria
		List<Product> prodotti = Database.getInstance().getProductsDao().findByCategory(categoria);
		
		
		List<ProductTag> prodottiRequisiti = new ArrayList<ProductTag>();
		List<ProductTag> prodottiPiuTag = new ArrayList<ProductTag>();
		
		String[] tagRichiesti = tag.split(","); 
		
		for(int i = 0; i < prodotti.size(); ++i) {
			// per ogni prodotto mi creo un array di booleani inizializzato a false
			// che poi aggiungerò in prodoctTag
			String[] tagProdotto = prodotti.get(i).getTags().split(",");
			boolean[] tagSoddisfatti = new boolean[tagRichiesti.length];
			boolean add = false;
			for(int j = 0; j < tagRichiesti.length; ++j) {
				for(int z = 0; z < tagProdotto.length; ++z) {
					// confronto ad uno ad uno i tag richiesti con quelli del prodotto
					if(tagRichiesti[j].equals(tagProdotto[z])) {
						tagSoddisfatti[j] = true;
						add = true;
						break;
					}
				}
			}
			// se questo prodotto ha almeno un tag di quelli selezionati dall'utente
			// lo salvo 
			if(add)
				prodottiRequisiti.add(new ProductTag(prodotti.get(i), tagSoddisfatti));
		}
		
		// sorto i prodotti in base al loro numero di requisiti soddisfatti, decrescente
		Collections.sort(prodottiRequisiti, new Comparator<ProductTag>() {
		    @Override
		    public int compare(ProductTag a, ProductTag b) {
		        return a.getRequisitiSoddifatti().compareTo(b.getRequisitiSoddifatti()) * -1;
		    }
		});
		
		// restituisco i primi 5 prodotti che soddisfano meglio i tag
		for(int i = 0; i < prodottiRequisiti.size() && i < 5; ++i)
			prodottiPiuTag.add(prodottiRequisiti.get(i));
		
		return prodottiPiuTag;
	}
		
	
	@PostMapping("/prodottiMeglioRecensiti")
	public List<Product> prodottiMeglioRecensiti(@RequestParam String categoria) {
			
		// prendo tutti i prodotti della categoria selezionata dall'utente
		List<Product> prodotti = Database.getInstance().getProductsDao().findByCategory(categoria);
		
		List<Product> prodottiMeglioRecensiti = new ArrayList<Product>();
		
		// li sorto in ordine decrescente
		Collections.sort(prodotti, new Comparator<Product>() {
		    @Override
		    public int compare(Product a, Product b) {
		        return a.getReviews().compareTo(b.getReviews()) * -1;
		    }
		});
		
		// restituisco i primi 5 prodotti meglio recensiti
		for(int i = 0; i < prodotti.size() && i < 5; ++i) 
			prodottiMeglioRecensiti.add(prodotti.get(i));
		
		return prodottiMeglioRecensiti;
	}
	
	@PostMapping("/salvaReport")
	public boolean salvaReport(@RequestParam String origin, @RequestParam String description) {
		return Database.getInstance().getReportDao().saveOrUpdate(new Report(origin, description));
	}
}
