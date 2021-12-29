package casiUso.model;

import java.util.Objects;

public class Requirements {
	private Long id;
	private String name;
	private String value1;
	private String value2;
	
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
		Requirements other = (Requirements) obj;
		return Objects.equals(id, other.id);
	}
	
	public Requirements(String name, String value1, String value2) {
		super();
		this.id = (long) 0;
		this.name = name;
		this.value1 = value1;
		this.value2 = value2;
	}
	
	public Requirements() {
		// TODO Auto-generated constructor stub
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getValue1() {
		return value1;
	}
	public void setValue1(String value1) {
		this.value1 = value1;
	}
	public String getValue2() {
		return value2;
	}
	public void setValue2(String value2) {
		this.value2 = value2;
	}

}
