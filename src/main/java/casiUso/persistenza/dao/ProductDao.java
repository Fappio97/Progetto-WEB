package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Product;

public interface ProductDao {
	public List<Product> findAll();
	public List<Product> findByCategory(String category);
	public Product findById(Long id);
}
