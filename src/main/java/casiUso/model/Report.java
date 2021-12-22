package casiUso.model;

import java.util.Objects;

public class Report {
	private long id;
	private String problem_origin;
	private String description;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getProblem_origin() {
		return problem_origin;
	}
	public void setProblem_origin(String problem_origin) {
		this.problem_origin = problem_origin;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Report(String problem_origin, String description) {
		super();
		this.id = 0;
		this.problem_origin = problem_origin;
		this.description = description;
	}
	public Report() {
		// TODO Auto-generated constructor stub
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
		Report other = (Report) obj;
		return id == other.id;
	}
	
	
}
