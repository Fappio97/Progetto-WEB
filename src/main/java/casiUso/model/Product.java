package casiUso.model;

import java.util.Objects;

public class Product {
	private long id;
	private String name;
	private int quantity;
	private String tags;
	private String description;
	private String type;
	private Float reviews;
	private Float price;
	
	public Product() {
	}



	public Product(String name, int quantity, String tags, String description, String type,
			Float reviews, Float price) {
		super();
		this.name = name;
		this.quantity = quantity;
		this.tags = tags;
		this.description = description;
		this.type = type;
		this.reviews = reviews;
		this.price = price;
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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	public Float getReviews() {
		return reviews;
	}



	public void setReviews(Float reviews) {
		this.reviews = reviews;
	}

	public Float getPrice() {
		return price;
	}

	public void setPrice(Float price) {
		this.price = price;
	}
	
}
