package casiUso.model;

import java.util.Objects;

public class Product {
	private long id;
	private String model;
	private int quantity;
	private String tags;
	private String description;
	private String type;
	private String brand;
	private Float reviews;
	
	public Product() {
	}

	public Product(String model, int quantity, String tags, String description, String type, String brand,
			Float reviews) {
		super();
		this.model = model;
		this.quantity = quantity;
		this.tags = tags;
		this.description = description;
		this.type = type;
		this.brand = brand;
		this.reviews = reviews;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		return id == other.id;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getTags() {
		return tags;
	}

	public void setTags(String tags) {
		this.tags = tags;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getBrand() {
		return brand;
	}

	public void setBrand(String brand) {
		this.brand = brand;
	}



	public Float getReviews() {
		return reviews;
	}



	public void setReviews(Float reviews) {
		this.reviews = reviews;
	}
	
}
