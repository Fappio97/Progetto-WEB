package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Product;

public interface ProductDao {
	public List<Product> findAll();
	public List<Product> findByType(String type);
	public Product findById(Long id);
	public boolean saveOrUpdate(Product product);
	public boolean delete(Product product);
}
