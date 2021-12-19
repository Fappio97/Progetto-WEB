package casiUso.persistenza.dao;

import java.util.List;

import casiUso.model.Product;
import casiUso.model.ProductTag;

public interface ProductDao {
	public List<Product> findAll();
	public List<Product> findByType(String type);
	public List<Product> findByModel(String model);
	public boolean checkByModel(String model);
	public boolean saveOrUpdate(Product product);
	public boolean delete(Product product);
}
