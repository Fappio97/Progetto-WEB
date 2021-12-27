package casiUso.model;

public class ProductTag {
	private Product product;
	private boolean[] tagSoddisfatti;
	private Integer requisitiSoddifatti;
	
	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}

	public boolean[] getTagSoddisfatti() {
		return tagSoddisfatti;
	}

	public void setTagSoddisfatti(boolean[] tagSoddisfatti) {
		this.tagSoddisfatti = tagSoddisfatti;
	}

	public ProductTag(Product product, boolean[] tagSoddisfatti) {
		super();
		this.product = product;
		this.tagSoddisfatti = tagSoddisfatti;
		requisitiSoddifatti = 0;
		calcolaRequisitiSoddisfatti();
	}

	private void calcolaRequisitiSoddisfatti() {
		// TODO Auto-generated method stub
		for(int i = 0; i < tagSoddisfatti.length; ++i) 
			if(tagSoddisfatti[i])
				requisitiSoddifatti += 1;
	}

	public Integer getRequisitiSoddifatti() {
		return requisitiSoddifatti;
	}

	public void setRequisitiSoddifatti(int requisitiSoddifatti) {
		this.requisitiSoddifatti = requisitiSoddifatti;
	}
	
}
