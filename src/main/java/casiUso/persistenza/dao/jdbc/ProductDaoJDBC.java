package casiUso.persistenza.dao.jdbc;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import casiUso.model.Product;
import casiUso.persistenza.dao.ProductDao;

public class ProductDaoJDBC implements ProductDao {
	
	private Connection conn;
		
	public ProductDaoJDBC(Connection conn) {
		super();
		this.conn = conn;
	}

	@Override
	public List<Product> findAll() {
		List<Product> prodotti = new ArrayList<Product>();
		String query = "select * from products";
		try {
			Statement st = conn.createStatement();
			ResultSet rs = st.executeQuery(query);
			while (rs.next()) {
				Product prodotto = new Product();
				prodotto.setId(rs.getLong("id"));
				prodotto.setModel(rs.getString("model"));
				prodotto.setQuantity(rs.getInt("quantity"));
				prodotto.setTags(rs.getString("tags"));
				prodotto.setDescription(rs.getString("description"));
				prodotto.setType(rs.getString("type"));
				prodotto.setBrand(rs.getString("brand"));
				prodotto.setReviews(rs.getFloat("reviews"));
				prodotto.setPrice(rs.getFloat("price"));
				prodotti.add(prodotto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prodotti;
	}

	@Override
	public List<Product> findByType(String type) {
		List<Product> prodotti = new ArrayList<Product>();
		String query = "select * from products where type = ?";
		try {
			PreparedStatement st = conn.prepareStatement(query);
			st.setString(1, type);
			ResultSet rs = st.executeQuery();
			while (rs.next()) {
				Product prodotto = new Product();
				prodotto.setId(rs.getLong("id"));
				prodotto.setModel(rs.getString("model"));
				prodotto.setQuantity(rs.getInt("quantity"));
				prodotto.setTags(rs.getString("tags"));
				prodotto.setDescription(rs.getString("description"));
				prodotto.setType(rs.getString("type"));
				prodotto.setBrand(rs.getString("brand"));
				prodotto.setReviews(rs.getFloat("reviews"));
				prodotto.setPrice(rs.getFloat("price"));
				prodotti.add(prodotto);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return prodotti;
	}

	@Override
	public List<Product> findByModel(String model) {
		return null;
	}

	@Override
	public boolean checkByModel(String model) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean saveOrUpdate(Product product) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean delete(Product product) {
		// TODO Auto-generated method stub
		return false;
	}

}
